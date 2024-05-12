import { useEffect, useRef, useState } from "react";
import { createDetector, STATE } from "@/shared/params.js";
import { Camera } from "@/shared/camera.js";
import "@mediapipe/face_mesh";
import "@tensorflow/tfjs-core";
import { Button, Card, CardHeader, Chip } from "@nextui-org/react";
import { CheckIcon } from "@/shared/icons/CheckIcon.jsx";
import { CameraIcon } from "@/shared/icons/CameraIcon.jsx";

function FaceDetection({ validFaceDetection, setValidFaceDetection }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasWrapperRef = useRef(null);
  const [detector, setDetector] = useState(null);
  const [camera, setCamera] = useState(null);
  const [initialSize, setInitialSize] = useState(null);
  const [scaleSize, setScaleSize] = useState(null);
  const [openCamera, setOpenCamera] = useState(false);

  useEffect(() => {

    const initApp = async () => {

      const cam = await Camera.setupCamera(STATE.camera, videoRef.current, canvasRef.current, canvasWrapperRef.current);
      setCamera(cam);
      setOpenCamera(true);

      const det = await createDetector();
      setDetector(det);
    };

    if (videoRef && canvasRef) {
      initApp();
    }

    return () => {
      if (camera) {
        camera.video.srcObject.getTracks().forEach((track) => track.stop());
      }

      if (detector) {
        detector.dispose();
      }
    };
  }, [videoRef, canvasRef]);

  useEffect(() => {
    if (camera !== null && detector !== null) {
      const renderResult = async () => {
        // Implement renderResult logic
        if (camera.video.readyState < 2) {
          await new Promise((resolve) => {
            camera.video.onloadeddata = (video) => {
              resolve(video);
            };
          });
        }

        let faces = null;

        // Detector can be null if initialization failed (for example when loading
        // from a URL that does not exist).
        if (detector != null) {
          // Detectors can throw errors, for example when using custom URLs that
          // contain a model that doesn't provide the expected output.
          try {
            faces = await detector.estimateFaces(camera.video, { flipHorizontal: false });

            // Check if faces are detected
            if (faces && faces.length > 0) {
              // Face detected, but ensure that just 1 person in the frame
              if (faces.length === 1) {
                detectFaceLiveness(faces[0]);
              } else {
                setValidFaceDetection(false);
              }
            }
          } catch (error) {
            detector.dispose();
            setDetector(null);
            alert(error);
          }
        }

        camera.drawCtx();

        if (faces && faces.length > 0) {
          camera.drawResults(faces, STATE.modelConfig.triangulateMesh, STATE.modelConfig.boundingBox);
        }
      };

      const detectFaceLiveness = (face) => {
        // Get the initial bounding box initialSize of the first face
        const currentSize = face.box.width * face.box.height;
        if (currentSize > 0 && currentSize < 100000) {
          setInitialSize(currentSize);
        } else {
          setScaleSize(currentSize);
        }
      };

      const renderPrediction = async () => {
        await renderResult();

        requestAnimationFrame(renderPrediction);
      };

      renderPrediction();
    }
  }, [camera, detector, setValidFaceDetection]);

  useEffect(() => {
    if (initialSize !== null && scaleSize !== null) {
      if (Math.abs(scaleSize - initialSize) > initialSize * 0.1) {
        setValidFaceDetection(true);
      }
    }
  }, [initialSize, scaleSize, setValidFaceDetection]);

  useEffect(() => {
    if (!openCamera) {
      if (camera) {
        camera.video.srcObject.getTracks().forEach(track => track.stop());
        setCamera(null);
      }

    } else {
      if (!camera || (camera && !camera.video.srcObject.active)) {
        Camera.setupCamera(STATE.camera, videoRef.current, canvasRef.current, canvasWrapperRef.current)
          .then((camera) => {
            setCamera(camera);
          });
      }
    }
  }, [openCamera, camera]);

  return (
    <div className="container mx-auto">
      {openCamera ? (
        <Button
          className="my-2"
          variant="solid"
          color="danger"
          onClick={() => setOpenCamera(!openCamera)}>
          Close Camera
        </Button>
      ) : (
        <Button
          className="my-2"
          variant="ghost"
          color="success"
          onClick={() => setOpenCamera(!openCamera)}>
          Open Camera
        </Button>
      )}

      <Card>
        {openCamera && (
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <Chip
              className="my-1"
              startContent={validFaceDetection ? <CheckIcon size={18} /> : <CameraIcon size={18} />}
              variant="faded"
              color={validFaceDetection ? "success" : "danger"}
            >
              <p className="text-tiny text-white/60 uppercase font-bold">
                {validFaceDetection ? "Checked Face" : "Checking face"}
              </p>
            </Chip>
            {!validFaceDetection && <Chip color="warning">
              <h4 className="text-white font-medium text-large">
                Move your head closer to and away from the camera
              </h4>
            </Chip>}
          </CardHeader>
        )}
        <div className="mx-auto">
          <div className="canvas-wrapper" ref={canvasWrapperRef}>
            <canvas id="output" ref={canvasRef}></canvas>
            <video
              id="video"
              playsInline
              style={{
                WebkitTransform: "scaleX(-1)",
                transform: "scaleX(-1)",
                visibility: "hidden",
                width: "auto",
                height: "auto"
              }}
              ref={videoRef}
            ></video>
          </div>
        </div>
      </Card>

    </div>)
    ;
}

export default FaceDetection;
