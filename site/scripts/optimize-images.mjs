#!/usr/bin/env node
/**
 * Image optimization script for Yard Boys v2.0
 * Converts JPG/PNG → WebP at two sizes:
 *   - full:  max 1200px wide, 80% quality
 *   - thumb: max 600px wide,  75% quality (for gallery grids)
 *
 * Originals stay untouched. Output goes to public/images/optimized/
 *
 * Usage:  node scripts/optimize-images.mjs
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'node:fs/promises';
import { join, extname, basename } from 'node:path';

const INPUT_DIR = join(import.meta.dirname, '..', 'public', 'images');
const OUTPUT_DIR = join(INPUT_DIR, 'optimized');

const FULL_MAX_WIDTH = 1200;
const FULL_QUALITY = 80;
const THUMB_MAX_WIDTH = 600;
const THUMB_QUALITY = 75;

const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png']);

async function optimizeImages() {
  // Create output dir
  await mkdir(OUTPUT_DIR, { recursive: true });

  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter((f) => SUPPORTED_EXTS.has(extname(f).toLowerCase()));

  console.log(`Found ${imageFiles.length} images to optimize...\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    const name = basename(file, extname(file));

    const originalStat = await stat(inputPath);
    totalOriginal += originalStat.size;

    // Full-size WebP
    const fullPath = join(OUTPUT_DIR, `${name}.webp`);
    const fullInfo = await sharp(inputPath)
      .resize({ width: FULL_MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: FULL_QUALITY })
      .toFile(fullPath);

    // Thumbnail WebP
    const thumbPath = join(OUTPUT_DIR, `${name}-thumb.webp`);
    const thumbInfo = await sharp(inputPath)
      .resize({ width: THUMB_MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: THUMB_QUALITY })
      .toFile(thumbPath);

    totalOptimized += fullInfo.size + thumbInfo.size;

    const savings = ((1 - fullInfo.size / originalStat.size) * 100).toFixed(0);
    console.log(
      `  ✓ ${file} → ${name}.webp (${(fullInfo.size / 1024).toFixed(0)}KB, -${savings}%) + thumb (${(thumbInfo.size / 1024).toFixed(0)}KB)`
    );
  }

  console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
  console.log(`  Original total:  ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
  console.log(`  Optimized total: ${(totalOptimized / 1024 / 1024).toFixed(1)} MB`);
  console.log(`  Savings:         ${((1 - totalOptimized / totalOriginal) * 100).toFixed(0)}%`);
  console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
}

optimizeImages().catch(console.error);
