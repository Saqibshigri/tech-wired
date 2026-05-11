# NeuroReach AI - Deployment Guide

This guide covers deployment options and setup for the NeuroReach AI website.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Fastest deployment with automatic optimization.

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel

# 3. Follow prompts and connect to GitHub repo
```

### Option 2: Netlify

Easy deployment with intuitive UI.

```bash
# 1. Install Netlify CLI
npm i -g netlify-cli

# 2. Build first
npm run build

# 3. Deploy
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

Free hosting via GitHub.

```bash
# 1. Update vite.config.ts base setting
# base: '/repo-name/'

# 2. Build
npm run build

# 3. Deploy to gh-pages branch
npm run deploy
```

### Option 4: Self-Hosted (Docker)

For custom server deployment.

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📋 Pre-Deployment Checklist

- [ ] Update meta tags in `index.html`
- [ ] Update company contact information in `Contact.tsx`
- [ ] Replace placeholder case studies with real data
- [ ] Update social media links in `Footer.tsx`
- [ ] Test on mobile devices
- [ ] Check all links are working
- [ ] Verify form submissions work
- [ ] Test email subscriptions
- [ ] Check page load performance
- [ ] Test across browsers

## 🔧 Environment Setup

### Required Environment Variables

Create a `.env` file in the root:

```env
# Email Service (for form submissions)
VITE_FORM_ENDPOINT=https://your-api.com/submit
VITE_FORM_API_KEY=your_api_key_here

# Optional: Analytics
VITE_GA_ID=your_google_analytics_id

# Optional: Calendly Integration
VITE_CALENDLY_URL=https://calendly.com/yourname
```

### Build Environment Variables

```env
# Development
NODE_ENV=development
VITE_API_URL=http://localhost:3000

# Production
NODE_ENV=production
VITE_API_URL=https://api.neuroreach.ai
```

## 📊 Performance Optimization

### Image Optimization

- Use WebP format for images
- Lazy load below-the-fold images
- Compress with TinyPNG

### Code Optimization

```bash
# Analyze bundle size
npm run build -- --analyze
```

### Caching Strategy

- Cache CSS & JS files (1 year)
- Cache images (1 month)
- Don't cache HTML (0)

## 🔐 Security Headers

Add to your hosting provider:

```
Content-Security-Policy: default-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer
```

## 📈 SEO Checklist

- [ ] Meta description optimized
- [ ] Open Graph images configured
- [ ] Sitemap generated
- [ ] robots.txt created
- [ ] Mobile-friendly test passed
- [ ] Page speed optimized
- [ ] Schema markup added
- [ ] Canonicals set
- [ ] 404 page created

## 🚨 Error Handling

### 404 Error Page

Create `public/404.html` for Netlify/Vercel

### Error Boundaries

Already implemented in React components

### API Error Handling

Update form endpoints to handle errors:

```typescript
try {
  // API call
} catch (error) {
  console.error("Form submission failed:", error);
  // Show user-friendly error
}
```

## 📞 Form Submission Setup

### Email Integration Options

#### 1. Formspree (Recommended)

```typescript
// In Contact.tsx
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_ID";
```

#### 2. EmailJS

```bash
npm install @emailjs/browser
```

#### 3. Custom API

Point to your own backend endpoint

## 🔄 CI/CD Pipeline

### GitHub Actions Example

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📱 Mobile App Alternatives

Consider these for native mobile apps:

- React Native
- Expo
- Flutter (via web)

## 🎯 Domain Setup

1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Point DNS to hosting provider:
   - Vercel: A record
   - Netlify: CNAME
   - GitHub Pages: CNAME
3. Configure SSL/TLS (auto-handled by most providers)
4. Set up email forwarding

## 📊 Analytics Setup

### Google Analytics 4

```html
<!-- Add to index.html head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "GA_ID");
</script>
```

### Microsoft Clarity

Add tracking code to index.html

### Hotjar (Session Recording)

Monitor user behavior

## 💬 Chat Widget Setup

### Crisp Chat

```javascript
window.$crisp = [];
window.CRISP_WEBSITE_ID = "YOUR_ID";
```

### Intercom

```javascript
window.intercomSettings = { app_id: "YOUR_APP_ID" };
```

## 🔔 Notification Services

### SendGrid (Email)

- Verify sender domain
- Set up templates
- Configure webhooks

### Twilio (SMS)

- For SMS notifications
- Setup phone number

## 🎬 Video Embedding

YouTube videos embedded via:

```typescript
<iframe
  width="100%"
  height="100%"
  src={`https://www.youtube.com/embed/${videoId}`}
  frameBorder="0"
  allowFullScreen
/>
```

## 📞 Customer Support Setup

- [ ] Create support email
- [ ] Setup ticketing system (Zendesk, Intercom)
- [ ] Create FAQ section
- [ ] Setup chatbot (Intercom, Drift)
- [ ] Document support process

## 🎓 Continuous Improvement

1. Monitor analytics
2. Track conversion rates
3. A/B test CTAs
4. Collect user feedback
5. Update content regularly
6. Monitor page performance
7. Fix broken links
8. Update case studies

## 📦 Backup & Disaster Recovery

- [ ] Regular code backups
- [ ] Database backups (if applicable)
- [ ] Content backups
- [ ] SSL certificates backup
- [ ] DNS configuration backup
- [ ] Disaster recovery plan

## 🎯 Success Metrics

Track these KPIs:

- Page load time
- Bounce rate
- Conversion rate
- User time on page
- Form completion rate
- Email subscription rate
- Click-through rate

---

For issues or questions during deployment, refer to the main [SETUP_GUIDE.md](./SETUP_GUIDE.md)
