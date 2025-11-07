# VelaMoving - Professional UK Removal Services

A modern, fully static website for VelaMoving removal services. Built with Next.js and configured for free hosting on GitHub Pages.

## 🚀 Features

- **Fully Static Site** - No backend required, can be hosted anywhere for free
- **Modern Design** - Black & white theme with floating parcel animations
- **Responsive** - Works on all devices
- **Fast Loading** - Optimized static export
- **Easy Deployment** - Automated GitHub Pages deployment

## 📋 Pages

- **Home** (`/`) - Hero section with floating parcels, testimonials, and CTA
- **Services** (`/services`) - Detailed service offerings with animated van
- **Get Quote** (`/quote`) - Quote calculator and pricing information
- **About** (`/about`) - Company information and values
- **Contact** (`/contact`) - Contact form and information

## 🛠️ Tech Stack

- **Next.js 16** - React framework with static export
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Lucide Icons** - Beautiful icon set

## 🏃 Getting Started

### Install Dependencies
```bash
yarn install
```

### Run Development Server
```bash
yarn dev
```

Visit `http://localhost:3000` to see the site.

### Build for Production
```bash
yarn build
```

The static files will be in the `out/` folder.

## 🌐 Deploy to GitHub Pages

### Quick Setup

1. **Create a GitHub repository** for your project

2. **Push your code**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/velamoving.git
git push -u origin main
```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment":
     - **Source**: Select "GitHub Actions"
   - Save and wait for the workflow to complete

4. **Access your site**:
   - Your site will be live at: `https://YOUR_USERNAME.github.io/velamoving/`

### Automatic Deployments

The included GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
- Builds the site when you push to the `main` branch
- Deploys to GitHub Pages
- No manual intervention needed!

## 📁 Project Structure

```
velamoving/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── quote/             # Quote page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
├── public/                # Static assets
│   ├── moving-van.png    # Van image
│   └── favicon.svg       # Site icon
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml        # Auto-deployment workflow
└── out/                   # Built static site (after build)
```

## 🎨 Customization

### Colors
Edit `app/globals.css` to change the color scheme.

### Content
- Update pages in the `app/` directory
- Modify components in the `components/` directory

### Images
- Replace `public/moving-van.png` with your own van image
- Update `public/favicon.svg` for the browser icon

## 🌍 Custom Domain (Optional)

To use your own domain:

1. Create a `CNAME` file in the `public/` folder:
```
yourdomain.com
```

2. Configure DNS with your domain provider:
   - Add a CNAME record pointing to `YOUR_USERNAME.github.io`

3. Enable HTTPS in GitHub Pages settings

## 📝 License

This project is for VelaMoving. All rights reserved.

## 🙋 Support

For questions or issues, please contact VelaMoving support.
