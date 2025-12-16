# Deployment Guide

This guide will help you deploy your Next.js landing page to free hosting platforms.

## 🚀 Option 1: Vercel (Recommended - Easiest)

Vercel is made by the creators of Next.js and offers the best integration.

### Steps:

1. **Create a GitHub account** (if you don't have one):
   - Go to [github.com](https://github.com) and sign up

2. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
   
   Then create a new repository on GitHub and run:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and sign in with GitHub
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - Your site will be live at `your-project-name.vercel.app`

### Benefits:
- ✅ Free forever for personal projects
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Automatic deployments on every push
- ✅ Zero configuration needed

---

## 🌐 Option 2: Netlify

### Steps:

1. **Push your code to GitHub** (same as above)

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings (usually auto-detected):
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"
   - Your site will be live at `random-name.netlify.app`

### Note:
For Next.js on Netlify, you may need to install `@netlify/plugin-nextjs`:
```bash
npm install --save-dev @netlify/plugin-nextjs
```

Then create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🚂 Option 3: Railway

### Steps:

1. **Push your code to GitHub**

2. **Deploy on Railway**:
   - Go to [railway.app](https://railway.app)
   - Sign in with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect Next.js
   - Click "Deploy"
   - Your site will be live at `your-project.up.railway.app`

---

## 📋 Quick Checklist Before Deploying

- ✅ Build succeeds (`npm run build`)
- ✅ No errors in the console
- ✅ All dependencies are in `package.json`
- ✅ `.gitignore` is properly configured
- ✅ Code is pushed to GitHub

---

## 🔧 Troubleshooting

### Build fails on Vercel/Netlify:
- Make sure all dependencies are in `package.json` (not just `node_modules`)
- Check that Node.js version is compatible (Next.js 14 requires Node 18+)

### Images not loading:
- Make sure images are in the `public` folder
- Use Next.js `<Image>` component for optimization

### Styling issues:
- Ensure Tailwind CSS is properly configured
- Check that `globals.css` is imported in `layout.js`

---

## 🎯 Recommended: Vercel

For Next.js projects, **Vercel is the best choice** because:
- Made by the Next.js team
- Zero configuration
- Best performance
- Free SSL certificates
- Automatic deployments

Your site will be live in under 5 minutes!

