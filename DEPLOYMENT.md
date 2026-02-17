# Deployment Guide - RSK Public School Website

## 🚀 Deployment Checklist

### Pre-Deployment Steps

#### 1. **Content Verification**
- [ ] All school information is accurate in `app/lib/schoolData.ts`
- [ ] Contact details are correct
- [ ] Fee structure is up to date
- [ ] All links are working
- [ ] Images are optimized (if using real images)

#### 2. **SEO Optimization**
- [ ] Unique meta titles on all pages
- [ ] Meta descriptions are compelling and < 160 chars
- [ ] Open Graph images are set
- [ ] Structured data is correct
- [ ] Canonical URLs are configured

#### 3. **Performance Check**
- [ ] Run `npm run build` successfully
- [ ] No console errors
- [ ] Page load times are acceptable
- [ ] Images are optimized
- [ ] Unused code is removed

#### 4. **Security**
- [ ] No sensitive data in client code
- [ ] Environment variables are set correctly
- [ ] HTTPS is configured
- [ ] Security headers are set

## 📦 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest option for Next.js applications.

#### Steps:
1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production Deployment**
   ```bash
   vercel --prod
   ```

#### Vercel Dashboard Setup:
1. Go to [vercel.com](https://vercel.com)
2. Import your Git repository
3. Configure:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
4. Add environment variables (if any)
5. Deploy

**Custom Domain Setup:**
1. Go to Project Settings → Domains
2. Add `rskpublicschool.edu.in`
3. Configure DNS:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

---

### Option 2: Netlify

#### Steps:
1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

#### Netlify Configuration
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

### Option 3: Traditional Hosting (cPanel/Shared Hosting)

For traditional hosting with Node.js support:

#### Steps:
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Create production package**
   ```bash
   npm prune --production
   ```

3. **Upload files**
   - Upload entire project directory
   - Ensure `.next`, `public`, `node_modules`, `package.json` are included

4. **Server Configuration**
   - Node.js version: 20+
   - Start command: `npm start`
   - Port: 3000 (or as configured)

5. **PM2 Setup** (for process management)
   ```bash
   npm install -g pm2
   pm2 start npm --name "rsk-school" -- start
   pm2 save
   pm2 startup
   ```

---

### Option 4: Docker Deployment

#### Dockerfile:
```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build the application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Docker Commands:
```bash
# Build image
docker build -t rsk-school .

# Run container
docker run -p 3000:3000 rsk-school
```

---

## 🌐 DNS Configuration

### DNS Records Needed:

```
Type    Name    Value                   TTL
A       @       [Your Server IP]        3600
CNAME   www     rskpublicschool.edu.in  3600
```

For email (if needed):
```
Type    Name    Value                   Priority
MX      @       mail.rskpublicschool... 10
```

---

## 🔧 Environment Variables

Create `.env.production`:
```env
NEXT_PUBLIC_SITE_URL=https://rskpublicschool.edu.in
```

---

## ✅ Post-Deployment Verification

### Functional Testing
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] Mobile responsiveness works
- [ ] Contact form works (if backend is connected)

### Performance Testing
- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
  - Target: 90+ on mobile and desktop
- [ ] Check [GTmetrix](https://gtmetrix.com/)
  - Target: A grade
- [ ] Test on real devices

### SEO Testing
- [ ] Run [Google Search Console](https://search.google.com/search-console)
- [ ] Submit sitemap
- [ ] Check robots.txt
- [ ] Verify structured data
- [ ] Test with [Rich Results Test](https://search.google.com/test/rich-results)

### Security Testing
- [ ] Run [Mozilla Observatory](https://observatory.mozilla.org/)
- [ ] Check SSL certificate
- [ ] Verify HTTPS redirect
- [ ] Test security headers

### Cross-Browser Testing
- [ ] Chrome (Desktop & Mobile)
- [ ] Firefox
- [ ] Safari (Desktop & Mobile)
- [ ] Edge
- [ ] Opera

---

## 📊 Analytics Setup

### Google Analytics
1. Create GA4 property
2. Get Measurement ID
3. Add to environment variables
4. Install analytics package:
   ```bash
   npm install @next/third-parties
   ```

### Google Search Console
1. Verify ownership
2. Submit sitemap: `https://rskpublicschool.edu.in/sitemap.xml`
3. Monitor indexing

---

## 🔒 Security Best Practices

### Headers Configuration
Add to `next.config.ts`:
```typescript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

---

## 📧 Email Configuration (Optional)

For contact form backend:

### Using SendGrid:
```bash
npm install @sendgrid/mail
```

### Using Gmail SMTP:
```bash
npm install nodemailer
```

---

## 🔄 Continuous Deployment

### GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - run: npm run test (if tests exist)
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

---

## 📱 Progressive Web App (PWA) - Future Enhancement

To make it a PWA:
```bash
npm install next-pwa
```

Add to `next.config.ts`:
```typescript
const withPWA = require('next-pwa')({
  dest: 'public'
});

module.exports = withPWA({
  // your config
});
```

---

## 🎯 Launch Checklist

### 1 Week Before Launch
- [ ] Complete all content
- [ ] Test on staging environment
- [ ] Get stakeholder approval
- [ ] Prepare backup of old site
- [ ] Plan downtime (if needed)

### 3 Days Before Launch
- [ ] Final content review
- [ ] Performance testing
- [ ] Security audit
- [ ] Browser testing
- [ ] Mobile testing

### 1 Day Before Launch
- [ ] DNS preparation
- [ ] Backup current site
- [ ] Team briefing
- [ ] Support plan ready

### Launch Day
- [ ] Deploy to production
- [ ] Verify DNS propagation
- [ ] Test all functionality
- [ ] Monitor analytics
- [ ] Check error logs
- [ ] Communicate launch

### Post-Launch (Week 1)
- [ ] Monitor traffic
- [ ] Fix any issues
- [ ] Gather feedback
- [ ] Submit to search engines
- [ ] Social media announcement

---

## 🆘 Troubleshooting

### Common Issues:

**Build Fails:**
```bash
# Clear cache
rm -rf .next
npm run build
```

**Port Already in Use:**
```bash
# Kill process on port 3000
kill -9 $(lsof -ti:3000)
```

**Images Not Loading:**
- Check `public` folder
- Verify image paths
- Check Next.js image optimization config

**Slow Performance:**
- Enable image optimization
- Add loading="lazy" to images
- Minimize JavaScript bundles

---

## 📞 Support

For deployment support:
- **Email**: rskpublicschool@gmail.com
- **Phone**: +91-9931915254

---

## 📚 Additional Resources

- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Google SEO Guide](https://developers.google.com/search/docs)

---

**Remember**: Always test thoroughly before going live! 🚀

*Good luck with your deployment!*





