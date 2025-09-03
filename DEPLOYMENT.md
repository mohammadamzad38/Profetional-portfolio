# Portfolio Deployment Guide

## Netlify Deployment

### 1. Build the Application
```bash
npm run build
```

### 2. Deploy to Netlify

#### Option A: Drag & Drop (Recommended for testing)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder to the deploy area
3. Your site will be live in seconds

#### Option B: Git Integration
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on every push

### 3. Important Configuration Files

#### netlify.toml
- Handles SPA routing
- Redirects all routes to index.html
- Sets build settings

#### public/_redirects
- Backup routing configuration
- Ensures all routes work correctly

### 4. Troubleshooting 404 Errors

If you still get 404 errors:

1. **Check Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 or higher

2. **Verify Redirects**:
   - Ensure `netlify.toml` is in your root directory
   - Check that `_redirects` file is in the `public` folder

3. **Clear Cache**:
   - Clear Netlify cache
   - Redeploy the application

### 5. Local Testing

Test locally before deploying:
```bash
npm run build
npm run serve
```

Visit: http://localhost:3000

### 6. Common Issues

- **404 on refresh**: Fixed by redirects configuration
- **Missing assets**: Ensure all images are in the `dist` folder
- **Build failures**: Check Node.js version compatibility

## File Structure After Build

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [component]-[hash].js
├── mypicture.jpg
├── NMSS.png
├── project.jpg
└── other-images...
```

## Support

If you continue to have issues:
1. Check Netlify build logs
2. Verify all configuration files are present
3. Ensure build completes successfully
