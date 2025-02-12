import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ✅ ใช้ Tailwind กับ Vite

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
