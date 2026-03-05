# SkySuite Brand Assets

This folder contains the official SkySuite logo files for use throughout the application.

## Files

### `icon.png`
- **Dimensions:** 1892×1784 px
- **Format:** PNG with transparency
- **Use for:** 
  - App icon
  - Favicon
  - Social media profile images
  - Square placements where only the logo mark is needed
  - Mobile app icons

### `logo-full.png`
- **Dimensions:** 2048×616 px
- **Format:** PNG
- **Use for:**
  - Website header
  - Marketing materials
  - Email signatures
  - Horizontal banner placements
  - Any location where both logo mark and "SKYSUITE" text should appear

## Usage in Code

```tsx
// Full logo (with text)
import Image from 'next/image';
<Image src="/brand/logo-full.png" alt="SkySuite" width={400} height={120} />

// Icon only
<Image src="/brand/icon.png" alt="SkySuite" width={48} height={48} />
```

## Favicon

The icon is also copied to `/public/favicon.png` for use as the site favicon.

## Brand Guidelines

For complete brand guidelines including colors, typography, and usage rules, see:
- `.cursor/rules/claude.md` - Section 4: Design System → Brand Identity
- Brand Style Guide PDF (if available)

## Brand Colors

- **Sky Blue:** `#07BCE7`
- **Navy Blue:** `#022C55`
- **Bright Blue:** `#0941C4`
- **Sage:** `#C2C1A5`
- **Cream:** `#F5F9E9`
