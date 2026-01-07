// scripts/generate-placeholders.js
import fs from "fs";
import path from "path";
import { createCanvas } from "canvas";

const files = [
  // Graphics (10)
  ...Array.from({ length: 10 }, (_, i) => `/images/graphics/g${i + 1}.jpg`),

  // Products
  "/images/products/product1.jpg",
  "/images/products/product2.jpg",
  "/images/products/product3.jpg",

  // Web Logos
  "/images/web/logo1.png",
  "/images/web/logo2.png",
  "/images/web/logo3.png"
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function createPlaceholder(fullPath, label) {
  let width = 1200;
  let height = 800;

  // Logos are square PNGs
  if (fullPath.endsWith(".png")) {
    width = 600;
    height = 600;
  }

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Background
  ctx.fillStyle = "#CCCCCC";
  ctx.fillRect(0, 0, width, height);

  // Text
  ctx.fillStyle = "#333333";
  ctx.font = "bold 48px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(label, width / 2, height / 2);

  // Output buffer
  const buffer = fullPath.endsWith(".png")
    ? canvas.toBuffer("image/png")
    : canvas.toBuffer("image/jpeg", { quality: 0.85 });

  fs.writeFileSync(fullPath, buffer);
}

function main() {
  const base = path.join(process.cwd(), "public");

  files.forEach((file) => {
    const fullPath = path.join(base, file);
    const dir = path.dirname(fullPath);
    const label = path.basename(file);

    ensureDir(dir);
    createPlaceholder(fullPath, label);

    console.log("✔ Created", file);
  });

  console.log("\nAll placeholders generated successfully.\n");
}

main();
