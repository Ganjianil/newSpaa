# Platinum Luxury Spa - Website

A modern, responsive website for Platinum Luxury Spa built with Next.js, TypeScript, and Tailwind CSS. This website showcases premium spa services, treatments, and provides an elegant user experience for potential clients.

## 🌟 Features

- **Modern Design**: Beautiful, luxury-focused design with spa-themed aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Built with SEO best practices and meta tags
- **Contact Form**: Functional contact form for client inquiries
- **Service Showcase**: Detailed service listings with pricing and descriptions
- **Testimonials**: Customer reviews and ratings section
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
platinum-luxury-spa/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Services.tsx         # Services showcase
│   ├── About.tsx            # About section
│   ├── Testimonials.tsx     # Customer reviews
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer with links
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd platinum-luxury-spa
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

## 🎨 Customization

### Colors and Theme

The website uses a custom color palette defined in `tailwind.config.js`:

- **Spa Colors**: Warm, earthy tones for the spa theme
- **Gold Accents**: Luxury gold colors for highlights and CTAs
- **Custom Fonts**: Playfair Display (serif) and Inter (sans-serif)

### Content Updates

To update content, edit the respective component files:

- **Services**: Update the `services` array in `components/Services.tsx`
- **Contact Info**: Modify contact details in `components/Contact.tsx`
- **About Section**: Edit content in `components/About.tsx`
- **Testimonials**: Update reviews in `components/Testimonials.tsx`

### Images

Replace placeholder images with your own spa photos:
- Update image URLs in component files
- Ensure images are optimized for web (recommended: WebP format)
- Maintain aspect ratios for consistent layout

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**: Commit and push your code to a GitHub repository

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository

3. **Configure Build Settings**:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Environment Variables** (if needed):
   - Add any environment variables in Vercel dashboard

5. **Deploy**: Click "Deploy" and wait for build completion

### Deploy to Other Platforms

#### Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Add `next.config.js` with proper export settings

#### AWS Amplify
- Build settings: Use Next.js preset
- Build command: `npm run build`

## 🔧 Configuration

### Domain Setup

1. **Purchase Domain**: Buy your domain from a registrar (GoDaddy, Namecheap, etc.)

2. **DNS Configuration**:
   - Add CNAME record pointing to your Vercel deployment
   - Or use Vercel's domain management

3. **SSL Certificate**: Automatically handled by Vercel

### SEO Optimization

The website includes:
- Meta tags for social sharing
- Open Graph tags
- Twitter Card support
- Structured data markup
- Sitemap generation (can be added)

### Performance

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized fonts and assets
- Responsive images for different screen sizes

## 📱 Mobile Optimization

- Touch-friendly buttons and interactions
- Responsive navigation menu
- Optimized layouts for small screens
- Fast loading on mobile networks

## 🔒 Security

- Form validation and sanitization
- HTTPS enforcement
- Secure headers
- XSS protection

## 📊 Analytics & Tracking

To add analytics:
1. **Google Analytics**: Add tracking code to `app/layout.tsx`
2. **Facebook Pixel**: For social media tracking
3. **Hotjar**: For user behavior analysis

## 🆘 Support & Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor performance metrics
- Update content regularly
- Backup data and configurations

### Troubleshooting
- Check browser console for errors
- Verify build logs in deployment platform
- Test on different devices and browsers
- Validate form submissions

## 📞 Contact Information

**Platinum Luxury Spa**
- **Address**: KSR Towers, Madhapur, Hyderabad, Telangana
- **Phone**: +91 9121289918
- **Email**: info@platinumluxuryspa.com
- **Hours**: Monday - Sunday, 9:00 AM - 9:00 PM

## 📄 License

This project is proprietary and confidential. All rights reserved by Platinum Luxury Spa.

---

**Built with ❤️ for Platinum Luxury Spa**

For technical support or questions about this website, please contact the development team. 