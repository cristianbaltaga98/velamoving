# VelaMoving - Deployment Guide

This is a fully static Next.js site configured for easy deployment to GitHub Pages or any static hosting platform.

## Quick Deploy to GitHub Pages

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/velamoving.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: GitHub Actions
4. The site will automatically deploy on every push to `main` branch

### 3. Access Your Site
Your site will be available at: `https://YOUR_USERNAME.github.io/velamoving/`

## Alternative: Manual Build

If you want to deploy to other platforms (Netlify, Vercel, Cloudflare Pages, etc.):

```bash
# Build the static site
yarn build

# The static files will be in the 'out' folder
# Upload the 'out' folder to your hosting provider
```

## Local Development

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build
```

## Configuration

The site is configured for static export in `next.config.mjs`:
- `output: 'export'` - Enables static HTML export
- `images.unoptimized: true` - Required for static export
- `trailingSlash: true` - Better compatibility with static hosts

## Custom Domain (Optional)

To use a custom domain with GitHub Pages:
1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings
