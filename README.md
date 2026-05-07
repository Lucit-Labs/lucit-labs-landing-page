# Lucit Labs Landing Page

A Next.js 16 + React 19 landing page for Lucit Labs, styled with TailwindCSS 4 and Framer Motion.

## ✨ Features

- **Next.js 16** with App Router and React 19
- **TailwindCSS 4** with CSS variables for theming
- **React Query** for data fetching with global error handling
- **Zustand** for lightweight state management
- **React Hook Form + Zod** for form handling and validation
- **Lucit-branded landing UI** with animated gradient/noise background
- **Static export ready** for GitHub Pages deployment
- **TypeScript** configured with strict mode

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install

# Create environment file
cp .env.example .env.local

# Start development server
pnpm dev
```

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-api.com/api
```

---

## 📁 Project Structure

```
src/
├── actions/              # Server actions for auth and mutations
│   ├── login.ts          # Login with cookie-based session
│   └── logout.ts         # Logout and session cleanup
│
├── app/                  # Next.js App Router pages
│   ├── globals.css       # Global styles & CSS variables
│   ├── layout.tsx        # Root layout with fonts & providers
│   ├── page.tsx          # Home page
│   └── language/         # Language settings page
│       ├── page.tsx      # Language selection interface
│       └── components/
│           └── LanguageSelector.tsx
│
├── i18n.ts              # Internationalization configuration
├── proxy.ts             # Next.js proxy route guard/header handling
│
├── modules/             # Feature modules (domain-specific)
│   └── auth/
│       ├── components/  # Auth-specific UI components
│       ├── core/        # Business logic & validation
│       ├── hooks/       # Auth-related hooks
│       ├── services/    # Auth API service
│       └── store/       # Auth state (Zustand)
│
├── shared/              # Shared utilities & infrastructure
│   ├── hooks/
│   │   └── useTranslation.ts     # Translation hook
│   ├── infraestructure/
│   │   ├── actions/
│   │   │   └── changeLocale.ts   # Locale switching action
│   │   ├── adapters/
│   │   │   └── intl-translator.ts
│   │   └── repositories/
│   │       └── cookieLocale.repository.ts
│   ├── providers/       # React context providers
│   │   ├── react-query.provider.tsx
│   │   ├── translator.context.tsx
│   │   └── translator.provider.tsx
│   ├── services/        # Shared API services
│   ├── store/           # Global state stores
│   ├── types/
│   │   └── translator.interface.ts
│   └── utils/
│       ├── server-client.ts   # Server-side API client
│       └── tailwind.ts        # cn() utility for class merging
│
└── messages/            # Translation files
    ├── en.json          # English translations
    └── es.json          # Spanish translations
```

---

## 🏗️ Architecture

### Modular Feature Structure

Each feature module follows a consistent structure:

```
modules/<feature>/
├── components/     # Feature-specific UI components
├── core/           # Business logic, validation schemas
├── hooks/          # Feature-specific React hooks
├── services/       # API service layer
├── store/          # Zustand state management
└── types/          # TypeScript interfaces
```

### Server Actions

Server actions in `src/actions/` handle secure server-side operations:

- **`login.ts`** - Authenticates users and sets HTTP-only session cookies
- **`logout.ts`** - Clears session and redirects to home

### Proxy

The `proxy.ts` provides:

- **Route protection** - Redirects unauthenticated users from `/dashboard/*`
- **Auto-redirect** - Sends authenticated users from `/` to `/dashboard`
- **Token injection** - Automatically adds `Authorization` header to requests

### API Client

The `server-client.ts` is a server-side fetch wrapper that:

- Automatically attaches authorization tokens from cookies
- Handles 401 responses with automatic logout
- Returns structured responses with `{ ok, status, data }`

```typescript
// Example usage
const response = await apiClient<Customer[]>({
  path: "/customers",
  method: "GET",
  queryParams: "page=1&limit=10",
});
```

---

## 🎨 Styling

### TailwindCSS 4

This template uses TailwindCSS 4 with PostCSS and includes:

- CSS custom properties for theming (`globals.css`)
- Dark mode support via `prefers-color-scheme`
- Animation utilities via `tw-animate-css`

### shadcn/ui Components

Pre-configured with the **New York** style variant. Add new components with:

```bash
npx shadcn@latest add button
```

Configuration is in `components.json` with these path aliases:

- `@/components` - UI components
- `@/shared/utils/tailwind` - Utility functions

### Utility Function

The `cn()` helper merges Tailwind classes intelligently:

```typescript
import { cn } from "@/shared/utils/tailwind";

<div className={cn("p-4 bg-white", isActive && "bg-blue-500")} />;
```

---

## 🔐 Authentication

### Flow

1. User submits credentials via login form
2. `login` server action calls API and stores token in HTTP-only cookie
3. Middleware injects token as `Authorization: Bearer <token>` header
4. Protected routes validate token presence
5. `logout` action clears cookie and redirects

### Protected Routes

Configure protected routes in `proxy.ts`:

```typescript
const protectedRoutes = ["/dashboard"];
```

---

## 📡 Data Fetching

### React Query Setup

The `ReactQueryProvider` configures:

- **Stale time**: 1 minute default
- **Global error handling** for queries and mutations
- **React Query Devtools** for debugging

### Usage Pattern

```typescript
// In a module service
export const getCustomers = async () => {
  const response = await apiClient<Customer[]>({
    path: "/customers",
    method: "GET",
  });
  return response.data;
};

// In a component
const { data, isLoading } = useQuery({
  queryKey: ["customers"],
  queryFn: getCustomers,
});
```

---

## 📦 Dependencies

### Core

| Package     | Version | Purpose         |
| ----------- | ------- | --------------- |
| next        | 16.1.0  | React framework |
| react       | 19.2.3  | UI library      |
| tailwindcss | 4.x     | Styling         |

### Data & State

| Package               | Purpose                 |
| --------------------- | ----------------------- |
| @tanstack/react-query | Server state management |
| zustand               | Client state management |

### Forms & Validation

| Package         | Purpose           |
| --------------- | ----------------- |
| react-hook-form | Form handling     |
| zod             | Schema validation |

### UI

| Package                  | Purpose                         |
| ------------------------ | ------------------------------- |
| @radix-ui/react-slot     | Primitive UI components         |
| lucide-react             | Icon library                    |
| class-variance-authority | Variant-based component styling |
| clsx + tailwind-merge    | Class name utilities            |

### Language
| Package                  | Purpose                         |
| ------------------------ | ------------------------------- |
| next-intl                | Next.js language handling       |

---

## 🌍 Internationalization

### Current Languages

The template comes with support for:
- **English (en)** - Default language
- **Spanish (es)** - Secondary language

### Adding a New Language

Follow these steps to add a new language to your project:

#### 1. Create Translation File

Create a new JSON file in the `messages/` directory with the language code:

```bash
# Example for French
touch messages/fr.json
```

Copy the structure from `messages/en.json` and translate all values:

```json
{
  "welcome": {
    "getStarted": "Commencez par éditer",
    "languageLink": "🌐 Langue",
    "findInDepthLanguage": "Trouvez des informations détaillées sur les paramètres de langue.",
    "docs": "Docs",
    "findInDepthDocs": "Trouvez des informations détaillées sur les fonctionnalités et l'API de Next.js.",
    // ... translate all other keys
  },
  "language": {
    "title": "Paramètres de langue",
    "select": "Sélectionner la langue",
    "changing": "Changement de langue...",
    "clickToChange": "Ou cliquez pour changer:",
    "current": "Actuel"
  }
}
```

#### 2. Update i18n Configuration

In `src/i18n.ts`, add the new locale to the `locales` Set:

```typescript
// Before
const locales = new Set(['en', 'es']);

// After (adding French)
const locales = new Set(['en', 'es', 'fr']);
```

#### 3. Update Middleware

In `src/proxy.ts`, add the new locale to the proxy configuration:

```typescript
export default createMiddleware({
  locales: ['en', 'es', 'fr'], // Add your new locale here
  defaultLocale: 'en',
  localePrefix: 'never',
});
```

#### 4. Update Language Selector

In `src/app/language/components/LanguageSelector.tsx`, add the new language option:

```typescript
const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }, // Add new language
];
```

#### 5. Testing

1. Start the development server: `pnpm dev`
2. Navigate to `/language` to test language switching
3. Verify all translations display correctly
4. Test that language preference persists across page reloads

### Usage in Components

Use the translation hook in your components:

```typescript
import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('welcome');
  
  return <h1>{t('getStarted')}</h1>;
}
```

---

## 📝 Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

---

## 🚢 Deployment

### GitHub Pages (Static)

This repository is configured to deploy static output to GitHub Pages:

- Next.js static export is enabled in `next.config.ts` (`output: "export"`).
- GitHub Pages workflow is defined in `.github/workflows/deploy-github-pages.yml`.
- On pushes to `main`, CI builds and uploads the `out` folder, then deploys to Pages.

#### Required GitHub Settings

1. Go to **Repository Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Ensure your default branch is `main`.

After the first successful workflow run, GitHub will publish the site URL automatically.

---

## 🤝 Contributing

1. Create a new module under `src/modules/` for new features
2. Follow the established folder structure
3. Use server actions for mutations
4. Keep shared utilities in `src/shared/`

---

## 📄 License

Private - Designli
