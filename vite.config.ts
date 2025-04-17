import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import flowbiteReact from "flowbite-react/plugin/vite";
import path from "path";

export default defineConfig({
    plugins: [react(), tailwindcss(), flowbiteReact()],
    server: {
        open: true,
    },
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "./src/app/index.ts"),
            "@public": path.resolve(__dirname, "./src/public"),
            "@features": path.resolve(__dirname, "./src/features/index.ts"),
            "@pages": path.resolve(__dirname, "./src/pages/index.ts"),
            "@entities": path.resolve(__dirname, "./src/entities/index.ts"),
            "@shared": path.resolve(__dirname, "./src/shared/index.ts"),
            "@data": path.resolve(__dirname, "./src/data/index.ts"),
        },
    },
});
