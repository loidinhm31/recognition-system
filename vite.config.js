import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "node:path";
import * as fs from "node:fs";
import { viteStaticCopy } from "vite-plugin-static-copy";

function mediaPipeExportsWorkaround() {
  return {
    name: "mediapipe_workaround",
    load(id) {
      if (path.basename(id) === "face_mesh.js") {
        console.log("mediapipe workaround");
        let code = fs.readFileSync(id, "utf-8");
        code += "exports.FaceMesh = FaceMesh;";
        return { code };
      } else {
        return null;
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@mediapipe/face_mesh/**/*",
          dest: "node_modules/@mediapipe/face_mesh"
        }
      ]
    })
  ],
  base: "/geo-tracking",
  build: {
    rollupOptions: {
      plugins: [mediaPipeExportsWorkaround()]
    }
  }
});
