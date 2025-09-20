# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This portfolio showcases your professional experience, skills, projects, and education in a clean, modern design.

## Features

- **Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
- **Dark/Light Mode** - Automatic theme switching based on user preference
- **Modern UI** - Clean, professional design with smooth animations
- **SEO Optimized** - Proper meta tags and Open Graph support
- **Accessibility** - Built with accessibility best practices
- **Fast Performance** - Optimized with Next.js 15 and Turbopack

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and theme variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Contact form and information
│   ├── Education.tsx        # Education and certifications
│   ├── Experience.tsx       # Work experience timeline
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section with introduction
│   ├── Navigation.tsx       # Main navigation bar
│   ├── Projects.tsx         # Featured and other projects
│   └── Skills.tsx           # Skills and technologies
├── lib/
│   ├── data.ts              # Portfolio content data
│   └── types.ts             # TypeScript type definitions
└── public/                  # Static assets
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Customization

### 1. Personal Information

Edit the content in `lib/data.ts` to update your personal information:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  phone: "+1 234 567 8900",
  location: "Your City, Country",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  website: "https://yourwebsite.com",
  summary: "Your professional summary..."
};
```

### 2. Skills

Update the `skills` array in `lib/data.ts`:

```typescript
export const skills: Skill[] = [
  { name: "React", category: "Frontend", level: "Advanced" },
  { name: "Node.js", category: "Backend", level: "Intermediate" },
  // Add your skills...
];
```

### 3. Work Experience

Add your work experience to the `experiences` array:

```typescript
export const experiences: Experience[] = [
  {
    id: "1",
    title: "Your Job Title",
    company: "Company Name",
    location: "City, Country",
    startDate: "2023-01",
    endDate: "Present",
    description: [
      "Your achievements and responsibilities...",
      "Use bullet points for each accomplishment"
    ],
    technologies: ["Tech1", "Tech2", "Tech3"]
  }
];
```

### 4. Projects

Update the `projects` array with your portfolio projects:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    name: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/yourusername/project",
    featured: true
  }
];
```

### 5. Education

Add your educational background:

```typescript
export const education: Education[] = [
  {
    id: "1",
    degree: "Your Degree",
    institution: "Your University",
    location: "City, Country",
    graduationDate: "2022",
    gpa: "3.8/4.0",
    honors: ["Dean's List", "Magna Cum Laude"],
    relevantCourses: ["Course 1", "Course 2"]
  }
];
```

### 6. Certifications

Update your certifications:

```typescript
export const certifications: Certification[] = [
  {
    id: "1",
    name: "Certification Name",
    issuer: "Issuing Organization",
    date: "2023-06",
    credentialUrl: "https://credential-url.com"
  }
];
```

## Styling Customization

### Colors and Theme

The portfolio uses CSS custom properties for theming. You can modify colors in `app/globals.css`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

### Tailwind CSS

The project uses Tailwind CSS for styling. You can customize the design by modifying the classes in each component or by extending the Tailwind configuration.

## SEO and Metadata

Update the metadata in `app/layout.tsx` for better SEO:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your professional description...",
  keywords: "your, keywords, here",
  // ... other metadata
};
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Other Platforms

You can also deploy to:
- Netlify
- GitHub Pages
- Any hosting provider that supports Node.js

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Turbopack** - Fast bundler for development
- **Geist Font** - Modern typography

## Contact Form

The contact form is currently set up with a mock submission. To make it functional, you can:

1. **Use a form service** like Formspree, Netlify Forms, or EmailJS
2. **Add server-side handling** with API routes
3. **Integrate with email services** like SendGrid or Nodemailer

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note:** Remember to update all placeholder content with your actual information before deploying!
