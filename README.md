# Stellar Web Vistas

A modern, visually appealing website built with React, Vite, and Tailwind CSS. This project features interactive animations, smooth cursor effects, and clean section dividers.

## Features

- Custom cursor with smooth animations using Framer Motion
- Interactive background dots that form clusters in key areas
- Clean section dividers for improved visual structure
- Responsive design with mobile optimizations
- Modern color scheme with black, grey, white, and subtle purple/blue tones

## Technologies Used

- React 18
- Vite 5
- Tailwind CSS
- Framer Motion
- Radix UI Components
- TypeScript

## Development

To run the project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Production Build

To create a production build:

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

## Deployment to Vercel

This project is optimized for deployment on Vercel. Follow these steps to deploy:

1. Push your code to a GitHub, GitLab, or Bitbucket repository
2. Connect your repository to Vercel
3. Set the following configuration:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

The included `vercel.json` file handles proper routing for the single-page application.

### Environment Variables

No environment variables are required for basic deployment. For custom configurations, you can add them in the Vercel dashboard.

## Troubleshooting

If you encounter any issues:

- Ensure all dependencies are properly installed
- Check that you're using Node.js 18 or later
- For WebSocket connection issues during development, try using the HTTP protocol for HMR in `vite.config.ts`

## License

MIT
