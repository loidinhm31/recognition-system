import * as faceLandmarksDetection from "@tensorflow-models/face-landmarks-detection";

export const NUM_KEYPOINTS = 468;
export const NUM_IRIS_KEYPOINTS = 5;
export const GREEN = "#32EEDB";
export const RED = "#FF2C35";
export const BLUE = "#157AB3";

export const VIDEO_SIZE = {
  "640 X 480": { width: 640, height: 480 },
  "640 X 360": { width: 640, height: 360 },
  "360 X 270": { width: 360, height: 270 },
};
export const STATE = {
  camera: { targetFPS: 60, sizeOption: "640 X 480" },
  backend: "",
  flags: {},
  modelConfig: {
    maxFaces: 2,
    refineLandmarks: true,
    triangulateMesh: true,
    boundingBox: true,
  },
};

export const LABEL_TO_COLOR = {
  lips: "#E0E0E0",
  leftEye: "#30FF30",
  leftEyebrow: "#30FF30",
  leftIris: "#30FF30",
  rightEye: "#FF3030",
  rightEyebrow: "#FF3030",
  rightIris: "#FF3030",
  faceOval: "#E0E0E0",
};

export async function createDetector() {
  const model = faceLandmarksDetection.SupportedModels.MediaPipeFaceMesh;
  const runtime = "mediapipe";

  return faceLandmarksDetection.createDetector(model, {
    runtime,
    maxFaces: STATE.modelConfig.maxFaces,
    refineLandmarks: STATE.modelConfig.refineLandmarks,
    triangulateMesh: STATE.modelConfig.triangulateMesh,
    boundingBox: STATE.modelConfig.boundingBox,
    solutionPath: `${import.meta.env.BASE_URL}/node_modules/@mediapipe/face_mesh`,
  });
}
