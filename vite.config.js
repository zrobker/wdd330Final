import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        personal: resolve(__dirname, "src/profile/index.html"),
        weather: resolve(__dirname, "src/weather_pages/index.html"),
        weatherList: resolve(__dirname, "src/weather-list/index.html"),
        login: resolve(__dirname, "src/login/index.html")
      },
    },
  },
});