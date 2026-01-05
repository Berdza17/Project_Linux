# Image Requirements

## Directory Structure

```
/public/images/
  ├── logo.jpg            # Company logo
  ├── hero.webp           # Hero background (1920x1080px)
  ├── hero.jpg            # Hero fallback
  │
  ├── products/           # Homepage product category images
  │   ├── kitchen-1.webp      (600x400px)
  │   ├── kitchen-1.jpg
  │   └── ... (see homepage for full list)
  │
  └── gallery/            # Full gallery images (21 items)
      ├── kitchen-1.webp, kitchen-1.jpg
      ├── kitchen-2.webp, kitchen-2.jpg
      ├── kitchen-3.webp, kitchen-3.jpg
      ├── kitchen-4.webp, kitchen-4.jpg
      ├── kitchen-5.webp, kitchen-5.jpg
      ├── table-1.webp, table-1.jpg
      ├── table-2.webp, table-2.jpg
      ├── table-3.webp, table-3.jpg
      ├── table-4.webp, table-4.jpg
      ├── table-5.webp, table-5.jpg
      ├── tv-stand-1.webp, tv-stand-1.jpg
      ├── tv-stand-2.webp, tv-stand-2.jpg
      ├── tv-stand-3.webp, tv-stand-3.jpg
      ├── tv-stand-4.webp, tv-stand-4.jpg
      ├── tv-stand-5.webp, tv-stand-5.jpg
      ├── wardrobe-1.webp, wardrobe-1.jpg
      ├── wardrobe-2.webp, wardrobe-2.jpg
      ├── wardrobe-3.webp, wardrobe-3.jpg
      ├── wardrobe-4.webp, wardrobe-4.jpg
      ├── wardrobe-5.webp, wardrobe-5.jpg
      └── wardrobe-6.webp, wardrobe-6.jpg
```

## Image Specifications

### Hero Image
- **Dimensions**: 1920x1080px (16:9 ratio)
- **Format**: WebP (primary) + JPG (fallback)
- **Max file size**: 500KB
- **Content**: Your best furniture showcase, customers should be visible if possible

### Product Category Images (Homepage)
- **Dimensions**: 600x400px (3:2 ratio)
- **Format**: WebP (primary) + JPG (fallback)
- **Max file size**: 300KB per image
- **Content**: Representative photo of each furniture category

### Gallery Images (21 images)
- **Dimensions**: 600x400px (3:2 ratio) for thumbnails
- **Lightbox**: 1200x800px for full-size viewing
- **Format**: WebP (primary) + JPG (fallback)
- **Max file size**: 400KB per image
- **Naming**: `{category}-{number}.webp` and `.jpg`
  - Kitchens: kitchen-1 through kitchen-5
  - Tables: table-1 through table-5
  - TV Stands: tv-stand-1 through tv-stand-5
  - Wardrobes: wardrobe-1 through wardrobe-6

## Optimization Tips

1. **Convert to WebP**: Use tools like [Squoosh](https://squoosh.app) or ImageMagick
   ```bash
   # Using ImageMagick
   convert input.jpg -quality 85 output.webp
   ```

2. **Create @2x versions**: For high-DPI displays
   ```bash
   # Resize to 2x dimensions
   convert input.jpg -resize 1200x800 output@2x.jpg
   ```

3. **Compress JPG/PNG**: Keep under 500KB
   - Use 80-85% quality for JPG
   - Use tinypng.com for PNG compression

## Placeholder Images (For Development)

Until you have real images, you can use:

1. **Placeholder services**:
   - https://via.placeholder.com/1920x1080
   - https://picsum.photos/1920/1080

2. **Create temporary files**:
   ```bash
   # Create blank placeholder images
   convert -size 1920x1080 xc:gray public/images/hero.jpg
   convert -size 600x400 xc:lightgray public/images/products/kitchen-1.jpg
   ```

3. **Stock photos** (ensure licensing):
   - Unsplash: https://unsplash.com/s/photos/furniture
   - Pexels: https://www.pexels.com/search/furniture/

## Quick Setup Script

Run this to create placeholder images:

```bash
# Navigate to images directory
cd public/images

# Create hero placeholders (requires ImageMagick)
convert -size 1920x1080 -background "#8B4513" -fill white \
  -pointsize 72 -gravity center label:"Hero Image\n1920x1080" hero.jpg
convert hero.jpg hero.webp
convert -size 3840x2160 -background "#8B4513" -fill white \
  -pointsize 144 -gravity center label:"Hero Image\n3840x2160" hero@2x.jpg
convert hero@2x.jpg hero@2x.webp

# Create product placeholders
cd products
for name in kitchen-1 table-1 tv-stand-1 wardrobe-1 shelving-1 office-1; do
  convert -size 600x400 -background "#D2691E" -fill white \
    -pointsize 36 -gravity center label:"${name}\n600x400" ${name}.jpg
  convert ${name}.jpg ${name}.webp
  convert -size 1200x800 -background "#D2691E" -fill white \
    -pointsize 72 -gravity center label:"${name}\n1200x800" ${name}@2x.jpg
  convert ${name}@2x.jpg ${name}@2x.webp
done
```

## Notes

- All images referenced in `config.js` should exist in `/public/images/`
- The LazyImage component automatically handles WebP/fallback selection
- Browser automatically chooses @2x versions on high-DPI displays
- Missing images will cause 404 errors in the browser console

