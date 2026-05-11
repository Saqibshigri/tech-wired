# Tech Wired - Digital Solutions Platform

A modern, high-conversion website for Tech Wired, a digital solutions company providing cutting-edge technology services and consulting.

## 🎯 Features

### Pages & Sections

- **Hero Section** - Compelling headline "We Make AI Products Go Viral" with CTA buttons
- **Services** - 5 core services: YouTube Promotion, Short-Form Content, Product Demos, Growth Marketing, Social Distribution
- **How It Works** - 3-step process: Submit Product → Create Strategy → Publish & Distribute
- **Featured Tools Carousel** - Interactive slider showcasing featured AI products
- **Case Studies** - 6 portfolio examples with real metrics and results
- **About Agency** - Mission, values, and team expertise
- **Newsletter Signup** - "Weekly AI Growth Ideas" subscription
- **Contact/Booking** - Strategy call booking form with email and Calendly integration
- **Footer** - Complete footer with links and social media

### Design Features

✨ **Modern SaaS Aesthetic**

- Dark mode (slate-950) with neon cyan/purple accents
- Gradient text effects on key headlines
- Glass morphism cards with backdrop blur
- Smooth animations and scroll-based reveals
- Mobile-first responsive design

🎨 **Premium UI/UX**

- Inter & Poppins typography
- Hover effects and transitions
- Glowing gradient orbs
- Animated stats counters
- Trust badges and social proof
- Loading animations and micro-interactions

📱 **Mobile Optimized**

- Fully responsive grid layouts
- Touch-friendly navigation
- Mobile menu with smooth animations
- Optimized image loading
- Fast performance metrics

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
bun install
# or
npm install
```

### Development

```bash
# Start dev server
bun run dev
# or
npm run dev
```

The site will be available at `http://localhost:8080`

### Build

```bash
# Create production build
bun run build
# or
npm run build
```

### Preview

```bash
# Preview production build locally
bun run preview
# or
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx         # Navigation & Mobile Menu
│   ├── Hero.tsx           # Landing hero section
│   ├── Services.tsx       # Service cards grid
│   ├── HowItWorks.tsx    # 3-step process section
│   ├── FeaturedTools.tsx  # Product carousel
│   ├── CaseStudies.tsx    # Portfolio showcase
│   ├── About.tsx          # Agency information
│   ├── Newsletter.tsx     # Email subscription
│   ├── Contact.tsx        # Booking form
│   └── Footer.tsx         # Footer navigation
├── App.tsx                # Main app component
├── main.tsx               # React entry point
└── index.css             # Global styles & animations
```

## 🎨 Design System

### Colors

- **Background**: #0f172a (slate-950)
- **Primary**: #00d4ff (Cyan neon)
- **Secondary**: #d946ef (Purple neon)
- **Text**: #f1f5f9 (Light text)
- **Accent**: #06b6d4 (Cyan secondary)

### Typography

- **Headlines**: Poppins (700, 800)
- **Body**: Inter (300-700)

### Spacing

- Tailwind default scale with custom extensions
- 16px base unit

### Components

- Glass cards with blur effect
- Gradient buttons with shadow effects
- Animated icons (Lucide React)
- Responsive grid layouts
- Mobile-friendly hamburger menu

## 📊 Key Sections Breakdown

### Hero Section

- Strong value proposition headline
- Subheading with clear benefits
- Dual CTA buttons (Book Call + See Work)
- Trust badges
- Animated statistics
- Scroll indicator

### Services (5 Cards)

1. YouTube Promotion
2. Short-Form Content (Reels/Shorts)
3. Product Demos & Reviews
4. Startup Growth Marketing
5. Social Media Distribution

Each card includes:

- Icon representation
- Feature list
- Hover animations
- Interactive elements

### How It Works (3 Steps)

1. Submit your AI product
2. We create viral content strategy
3. Publish & distribute for maximum reach

Timeline & expected results included.

### Featured Tools Carousel

- Interactive 3-item carousel view
- Individual tool showcase cards
- Star ratings
- "Learn More" buttons
- Carousel indicators
- Previous/Next navigation

### Case Studies (6 Examples)

Real-world portfolio items with:

- Thumbnail/emoji representation
- Company name & category
- Performance metrics (Views, Users, Growth %)
- Brief description
- Watch demo button
- Results summary bar

### About Section

- Agency mission & values
- Specialist positioning
- Stats showcase
- Team credentials
- Featured quote

### Newsletter

- Email subscription form
- Benefits preview
- Unsubscribe information
- Success message animation

### Contact Form

- Name, Email, Company fields
- Product link (optional)
- Message textarea
- Form validation
- Success confirmation
- Multiple contact methods (Email, Phone, Chat)
- Social proof section

## 🛠 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool & dev server
- **Lucide React** - Icon library
- **React Router** - Navigation (future enhancement)

## ✨ Animation Features

- Fade-in animations on scroll
- Hover state transitions
- Glowing effects on buttons & cards
- Pulse animations on badges
- Smooth scroll behavior
- Loading spinners
- Success message animations

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO & Meta Tags

- Optimized meta descriptions
- Open Graph tags for social sharing
- Mobile viewport optimization
- Semantic HTML structure
- Accessible component design

## 🚀 Performance Optimizations

- Lazy component loading
- Optimized images & emojis
- CSS grid & flexbox layouts
- Efficient animations (GPU-accelerated)
- Mobile-first approach
- Fast TypeScript compilation

## 🎯 Conversion Optimization

- Clear CTAs on every section
- Multiple conversion paths
- Trust badges & social proof
- Compelling copy
- Fast page load
- Mobile-optimized forms

## 📝 Content Features

- Animated statistics
- Real case study data
- Featured AI tools showcase
- Customer testimonials section
- Value proposition clarity
- Clear pricing structure (can be added)

## 🔐 Security

- Form validation
- XSS protection (React)
- No sensitive data stored locally
- Environment-safe deployment

## 🎓 Customization Guide

### Colors

Edit in `src/index.css`:

```css
--neon-blue: #00d4ff;
--neon-purple: #d946ef;
--neon-cyan: #06b6d4;
```

### Content

Update component files directly:

- `Services.tsx` - Add/remove services
- `CaseStudies.tsx` - Add portfolio items
- `FeaturedTools.tsx` - Update tool list
- `Contact.tsx` - Change contact info

### Animations

Modify in `src/index.css` under `@keyframes`

### Typography

Tailwind classes throughout components

## 📞 Support & Contact

For customization or questions about the Tech Wired website, contact: hello@techwired.io

## 📄 License

© 2024 Tech Wired. All rights reserved.

---

**Ready to transform your business with technology?** 🚀
