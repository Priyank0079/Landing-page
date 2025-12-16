# TechFlow Landing Page

A modern, professional landing page built with Next.js 14 (App Router) and Tailwind CSS. Perfect for academic assignments and showcasing a tech product or service.

## 🚀 Features

- **Modern Design**: Clean, professional UI with smooth animations and transitions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **SEO Optimized**: Includes proper metadata and semantic HTML
- **Performance**: Built with Next.js for optimal performance
- **Accessible**: Follows accessibility best practices
- **Production Ready**: Clean, maintainable code structure

## 📋 Page Sections

1. **Navbar** - Sticky navigation with smooth scroll behavior
2. **Hero Section** - Eye-catching headline with gradient background and CTAs
3. **Features** - 4 feature cards with icons and descriptions
4. **How It Works** - 3-step process explanation
5. **Pricing** - Three pricing tiers (Free, Pro, Premium) with highlighted popular plan
6. **Call to Action** - Strong conversion-focused section
7. **Footer** - Contact information and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Font**: Inter (Google Fonts)

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Steps

1. **Navigate to the project directory**:
   ```bash
   cd landing-page
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
landing-page/
├── app/
│   ├── layout.js          # Root layout with metadata
│   ├── page.js            # Main page component
│   ├── globals.css        # Global styles with Tailwind
│   └── favicon.ico        # Site favicon
├── components/
│   ├── Navbar.jsx         # Navigation component
│   ├── Hero.jsx           # Hero section
│   ├── Features.jsx       # Features showcase
│   ├── HowItWorks.jsx     # Process explanation
│   ├── Pricing.jsx        # Pricing plans
│   ├── CTA.jsx            # Call to action
│   └── Footer.jsx         # Footer component
├── public/
│   ├── images/            # Image assets
│   └── icons/             # Icon assets
├── styles/
│   └── tailwind.css       # Tailwind CSS file
├── .gitignore
├── package.json
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── README.md
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your custom colors
  },
}
```

### Content

All content is in the component files. Simply edit the text, links, and data arrays in each component:

- `components/Hero.jsx` - Hero headline and description
- `components/Features.jsx` - Feature cards data
- `components/Pricing.jsx` - Pricing plans data
- `components/Footer.jsx` - Footer links and contact info

### Styling

All styling uses Tailwind CSS utility classes. Modify classes directly in component files or extend the Tailwind config.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js and configure settings
   - Click "Deploy"

3. **Your site will be live** at `your-project.vercel.app`

### Deploy to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy on Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click "Deploy site"

3. **Your site will be live** at `your-project.netlify.app`

### Environment Variables

No environment variables are required for this project. All content is static.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Features Highlights

- **Sticky Navbar**: Changes appearance on scroll
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Responsive Design**: Mobile-first approach with breakpoints
- **Hover Effects**: Interactive elements with smooth transitions
- **Gradient Backgrounds**: Modern gradient designs
- **Icon Integration**: Heroicons for consistent iconography
- **Semantic HTML**: Proper HTML5 semantic elements
- **SEO Metadata**: Complete meta tags for search engines

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for academic purposes. Feel free to use and modify as needed.

## 🤝 Contributing

This is an academic project. For improvements or suggestions, feel free to fork and submit pull requests.

## 📧 Contact

For questions or support, please refer to the contact information in the footer section.

---

**Built with ❤️ using Next.js and Tailwind CSS**

