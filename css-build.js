import postcss from "postcss";
import cssnano from "cssnano";
import fs from "fs";
import fsExtra from "fs-extra";

const css = fs.readFileSync("src/main.css", "utf8");

postcss([cssnano])
  .process(css, { from: "src/main.css", to: "dist/main.css" })
  .then((result) => {
    fs.writeFileSync("dist/main.css", result.css);
  });

// Also copy minecraft.woff2 to dist
fs.copyFileSync(
  "src/components/minecraft.woff2",
  "dist/components/minecraft.woff2"
);

// Also also copy src/assets to dist
const srcAssetsPath = "src/assets";
const distAssetsPath = "dist/assets";

if (fs.existsSync(srcAssetsPath)) {
  fsExtra.copy(srcAssetsPath, distAssetsPath, (err) => {
    if (err) {
      console.error("Error copying assets:", err);
    } else {
      console.log("Assets copied successfully.");
    }
  });
} else {
  console.error(`Source directory "${srcAssetsPath}" does not exist.`);
}
