# Subash Poudel - Civil Engineer PortfolioA modern, responsive portfolio website built with React, Tailwind CSS, and Decap CMS for Subash Poudel, showcasing civil engineering projects, research, and professional expertise.## 🌟 Features
- **Modern Tech Stack**: Built with React 18+ and Vite for optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Content Management**: Decap CMS for easy content updates
- **Project Showcase**: Detailed project galleries and case studies
- **Research Publications**: Academic papers and research documentation
- **Video Content**: YouTube integration for project vlogs
- **Contact Form**: Integrated contact form with Resend API
- **PWA Support**: Progressive Web App capabilities
- **SEO Optimized**: Comprehensive SEO and social media optimization
- **Dark Mode**: Theme switching support

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ersubashpoudel/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/           # Header, Footer, Navigation
│   ├── pages/            # Main page components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
├── styles/               # CSS and styling
└── main.jsx              # Application entry point

content/
├── blog/                 # Blog posts (Markdown)
├── projects/             # Project documentation
├── research/             # Research papers
└── vlogs/                # Video content metadata

public/
├── admin/                # Decap CMS configuration
├── images/               # Static images
└── manifest.json         # PWA manifest
```

## 🎨 Customization

### Colors and Theming
The project uses a custom color palette defined in `tailwind.config.js`. Key colors:
- Primary: Blue (#1e40af)
- Secondary: Slate grays
- Accent: Additional blues and supporting colors

### Content Management
Content is managed through:
1. **Decap CMS**: Web-based interface at `/admin`
2. **Markdown Files**: Direct file editing in `/content`
3. **Frontmatter**: YAML metadata for posts and projects

### Adding New Content

#### Blog Posts
1. Create a new `.md` file in `content/blog/`
2. Add frontmatter with title, date, category, etc.
3. Write content in Markdown

#### Projects
1. Create a new `.md` file in `content/projects/`
2. Include project details, images, and technical specifications
3. Add to project categories and tags

#### Research Papers
1. Add to `content/research/`
2. Include abstract, citations, and publication details

## 🛠 Technologies Used

- **Frontend**: React 18, Vite, React Router
- **Styling**: Tailwind CSS, CSS3
- **Content**: Decap CMS, Markdown
- **Forms**: React Hook Form, Resend API
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build**: Vite, PostCSS, Autoprefixer
- **Deployment**: GitHub Pages with GitHub Actions

## 📧 Contact Form Setup

The contact form uses Resend API for email delivery:

1. Sign up for [Resend](https://resend.com)
2. Get your API key
3. Verify your domain (ersubashpoudel.com.np)
4. The API key is configured directly in the contact form for GitHub Pages deployment

## 🚀 Deployment

This site is deployed using GitHub Pages with GitHub Actions:

1. Automatic deployment on push to master branch
2. Custom domain: ersubashpoudel.com.np
3. HTTPS enabled with SSL certificate
4. Build artifacts automatically generated and deployed

## 📱 PWA Features

The site includes Progressive Web App capabilities:
- Offline functionality
- App-like experience
- Installation prompts
- Background sync (coming soon)

## 🔍 SEO Features

- Semantic HTML structure
- Open Graph meta tags
- Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Optimized images and performance

## 📊 Performance

- Lighthouse score: 95+ across all metrics
- Core Web Vitals optimized
- Image optimization with lazy loading
- Code splitting and tree shaking
- Minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Tribhuvan University for educational foundation
- Nepal Engineering community
- Open source contributors
- Design inspiration from modern portfolio sites

## 📞 Support

For support or questions:
- Email: contact@ersubashpoudel.com.np
- LinkedIn: [Subash Poudel](https://linkedin.com/in/subashpoudel)
- GitHub: [@ersubashpoudel](https://github.com/ersubashpoudel)

---

**Built with ❤️ in Nepal**
