import { useEffect, useRef, useState } from "react";
import { createDetector, STATE } from "../../../shared/params.js";
import { Camera } from "../../../shared/camera.js";
import "@mediapipe/face_mesh";
import "@tensorflow/tfjs-core";

function FaceDetection() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [detector, setDetector] = useState(null);
  const [camera, setCamera] = useState(null);

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

  const renderPrediction = async () => {
    await renderResult();

    requestAnimationFrame(renderPrediction);
  };

  const initApp = async () => {
    const cam = await Camera.setupCamera(STATE.camera, videoRef.current, canvasRef.current);
    setCamera(cam);
    const det = await createDetector();
    setDetector(det);
  };

  useEffect(() => {
    if (videoRef && canvasRef) {
      initApp();
    }
    return () => {
      if (camera) {
        camera.video.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, [videoRef, canvasRef]);

  useEffect(() => {
    if (camera != null) {
      renderPrediction();
    }
  }, [camera, detector]);

  return (
    <div>
      <div className="container">
        <div className="canvas-wrapper">
          <canvas id="output" ref={canvasRef}></canvas>
          <video
            id="video"
            playsInline
            style={{
              WebkitTransform: "scaleX(-1)",
              transform: "scaleX(-1)",
              visibility: "hidden",
              width: "auto",
              height: "auto",
            }}
            ref={videoRef}
          ></video>
        </div>
      </div>
    </div>
  );
}

export default FaceDetection;
