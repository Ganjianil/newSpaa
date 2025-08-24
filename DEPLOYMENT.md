# Deployment Guide - Platinum Luxury Spa Website

This guide will walk you through deploying your Platinum Luxury Spa website to Vercel and connecting your custom domain.

## 🚀 Deploy to Vercel

### Step 1: Prepare Your Code

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Test Locally**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to ensure everything works correctly.

3. **Build for Production**
   ```bash
   npm run build
   ```
   This should complete without errors.

### Step 2: Push to GitHub

1. **Initialize Git Repository** (if not already done)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Platinum Luxury Spa website"
   ```

2. **Create GitHub Repository**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `platinum-luxury-spa`
   - Make it public or private (your choice)
   - Don't initialize with README (we already have one)

3. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/platinum-luxury-spa.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy to Vercel

1. **Sign Up/Login to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub (recommended) or email

2. **Create New Project**
   - Click "New Project"
   - Import your GitHub repository
   - Select `platinum-luxury-spa`

3. **Configure Project Settings**
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (should auto-detect)
   - **Output Directory**: `.next` (should auto-detect)
   - **Install Command**: `npm install` (should auto-detect)

4. **Environment Variables** (if needed)
   - Usually not required for this project
   - Add any if you have API keys or external services

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 2-5 minutes)

6. **Success!**
   - Your site will be available at `https://your-project-name.vercel.app`
   - Vercel will automatically deploy updates when you push to GitHub

## 🌐 Connect Custom Domain

### Option 1: Use Vercel's Domain Management (Recommended)

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" tab
   - Click "Domains" in the left sidebar

2. **Add Custom Domain**
   - Enter your domain: `platinumluxuryspa.com`
   - Click "Add"
   - Vercel will provide DNS records to configure

3. **Configure DNS Records**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add these DNS records:

   **For Root Domain (platinumluxuryspa.com):**
   ```
   Type: A
   Name: @
   Value: 76.76.19.76
   ```

   **For www subdomain:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

4. **Wait for Propagation**
   - DNS changes can take 24-48 hours
   - Vercel will show "Valid Configuration" when ready

### Option 2: Manual DNS Configuration

If you prefer to manage DNS yourself:

1. **Get Vercel's IP Addresses**
   - Vercel will show you the required IP addresses
   - Usually: `76.76.19.76`

2. **Configure A Record**
   ```
   Type: A
   Name: @
   Value: 76.76.19.76
   TTL: 3600 (or default)
   ```

3. **Configure CNAME for www**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600 (or default)
   ```

## 🔧 Post-Deployment Setup

### 1. Verify HTTPS
- Vercel automatically provides SSL certificates
- Your site will be accessible via `https://platinumluxuryspa.com`

### 2. Test All Features
- Navigate through all pages
- Test contact form
- Check mobile responsiveness
- Verify all links work

### 3. Set Up Analytics (Optional)
- **Google Analytics**: Add tracking code to `app/layout.tsx`
- **Search Console**: Submit your sitemap to Google Search Console

### 4. Performance Monitoring
- Vercel provides built-in analytics
- Monitor Core Web Vitals
- Check for any performance issues

## 📱 Mobile Testing

1. **Test on Real Devices**
   - iPhone (Safari)
   - Android (Chrome)
   - iPad (Safari)

2. **Test Responsive Design**
   - Various screen sizes
   - Touch interactions
   - Navigation menu

## 🔄 Continuous Deployment

### Automatic Deployments
- Every push to `main` branch triggers deployment
- Vercel creates preview deployments for pull requests
- You can rollback to previous versions if needed

### Manual Deployments
- Go to Vercel dashboard
- Click "Redeploy" if needed
- Use "Promote to Production" for staging deployments

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check build logs in Vercel
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Domain Not Working**
   - Check DNS configuration
   - Wait for DNS propagation
   - Verify domain in Vercel dashboard

3. **Images Not Loading**
   - Check image URLs in components
   - Ensure images are accessible
   - Verify Next.js image configuration

4. **Styling Issues**
   - Check Tailwind CSS build
   - Verify CSS imports
   - Clear browser cache

### Getting Help

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Support**: Available in dashboard
- **GitHub Issues**: For code-related problems

## 📊 Performance Optimization

### Vercel Features
- **Edge Network**: Global CDN for fast loading
- **Image Optimization**: Automatic image optimization
- **Caching**: Smart caching strategies
- **Compression**: Automatic gzip compression

### Monitoring
- **Vercel Analytics**: Built-in performance monitoring
- **Core Web Vitals**: Track loading performance
- **Error Tracking**: Monitor for any issues

## 🔒 Security

- **HTTPS**: Automatically enforced
- **Security Headers**: Configured by Vercel
- **DDoS Protection**: Built-in protection
- **SSL Certificates**: Automatically managed

## 💰 Cost Considerations

### Vercel Pricing
- **Hobby Plan**: Free for personal projects
- **Pro Plan**: $20/month for professional use
- **Enterprise**: Custom pricing for large organizations

### Domain Costs
- **Domain Registration**: ~$10-15/year
- **SSL Certificate**: Free with Vercel
- **CDN**: Included with Vercel

## 🎯 Next Steps

After successful deployment:

1. **SEO Setup**
   - Submit sitemap to search engines
   - Set up Google Search Console
   - Optimize meta descriptions

2. **Content Updates**
   - Replace placeholder images with real spa photos
   - Update service prices if needed
   - Add real testimonials

3. **Marketing**
   - Share your new website
   - Update business listings
   - Add to Google My Business

4. **Maintenance**
   - Regular content updates
   - Monitor performance
   - Keep dependencies updated

---

**Congratulations! 🎉**

Your Platinum Luxury Spa website is now live and ready to attract customers. The modern, responsive design will provide an excellent user experience for your clients and help grow your business.

For any technical questions or support, refer to the Vercel documentation or contact the development team. 