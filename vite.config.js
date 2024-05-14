import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
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
export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const localEnv = loadEnv(mode, process.cwd(), "");
  const { VITE_BASE_URL, NODE_ENV } = localEnv;
  return {
    define: {
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    },
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
    resolve: {
      // eslint-disable-next-line no-undef
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
    },
    base: VITE_BASE_URL,
    build: {
      rollupOptions: {
        plugins: [mediaPipeExportsWorkaround()]
      }
    }
  };
});
