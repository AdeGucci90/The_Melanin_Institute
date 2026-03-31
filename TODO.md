# Website Optimization TODO
## Status: [HTML OPTIMIZED | CSS DONE | Images PENDING] 

### 1. [PENDING] Image Optimization (High Priority - 70% savings)
   - [x] Backup originals ✅ (images_original/)
   - [ ] Manual conversion: https://cloudconvert.com/jpg-to-webp (batch all JPG/PNG to WebP q=100)
   - [ ] Generate sizes: Squoosh.app (320w/768w/1200w per image)
   - [ ] Next: mkdir images/webp/ & update HTML <picture>

### 2. [✅ DONE] HTML Performance
   - [x] Inline critical CSS (12KB) ✅
   - [x] Preload/fetchpriority LCP images/fonts ✅
   - [x] sizes/srcset placeholders added ✅
   - [x] Google Fonts font-display=swap ✅

### 3. [IN PROGRESS] CSS Optimizations

### 3. [ ] CSS Optimizations
   - [ ] Update style.css: WebP backgrounds, font-display
   - [ ] Minify CSS files

### 4. [ ] Server Config
   - [ ] Update .htaccess: compression, WebP MIME, cache headers

### 5. [ ] Testing & Validation
   - [ ] Lighthouse score >95 Performance
   - [ ] Real-user metrics validation
   - [ ] Cross-browser/device testing

**Current Step: Image conversion & backup originals**

