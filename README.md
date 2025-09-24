# Portfolio Website

Welcome to my personal portfolio website built with Next.js 15 and the App Router. This portfolio showcases my projects, skills, and experience in an elegant and responsive design.

## 🚀 Features

- Modern UI built with Next.js 15 and React 19
- Responsive design optimized for all devices
- Built with TypeScript for enhanced type safety
- Styled with Tailwind CSS and shadcn/ui components
- Animated with GSAP and motion libraries
- Contact form with Resend integration
- SEO optimized pages
- Performance-focused architecture

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 15 (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with shadcn/ui components
- **Animations**: [GSAP](https://greensock.com/gsap/) and motion
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: Jotai
- **Email**: Resend for contact form
- **3D Graphics**: OGL (for potential 3D elements)

## 📁 Project Structure

```bash
src/
├── app/                 # Next.js App Router pages
│   ├── about/           # About page
│   ├── contact/         # Contact page  
│   ├── projects/        # Projects page
│   ├── globals.css      # Global styles
│   └── layout.tsx       # Root layout
├── components/          # Reusable components
├── lib/                 # Utility functions
└── assets/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portofolio-next
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Add your environment variables to .env.local
```

4. Run the development server:
```bash
npm run dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

Create a `.env.local` file in your project root with the following variables:

```
# Resend API Key (for contact form)
RESEND_API_KEY=your_resend_api_key_here

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📝 Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Performance

This portfolio is optimized for performance with:
- Image optimization
- Code splitting
- Lazy loading components
- Bundle optimization
- Preloading critical resources

## 🎨 Customization

### Adding Projects

To add new projects:
1. Create a new file in `src/app/projects/[project-slug]/page.tsx`
2. Add project metadata to the page component
3. Include project details in the page content

### Updating About Section

The about section can be customized by editing:
- `src/app/about/page.tsx`
- Components in `src/components/about/`

### Changing Theme

Colors and theme can be customized in:
- `src/app/globals.css`
- Tailwind config file

## 📬 Contact

If you want to contact me, you can reach me through:

- Email: [your-email@example.com](mailto:your-email@example.com)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- GitHub: [Your GitHub Profile](https://github.com/your-profile)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-profile/your-repo/issues) if you want to contribute.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting platform
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) for accessible UI components
- [GSAP](https://greensock.com/gsap/) for animations
- [Resend](https://resend.com/) for email delivery

---

Made with ❤️ using Next.js