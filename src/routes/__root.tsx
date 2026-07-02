import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Radhika Constructions — Top Builders & Contractors in Madanapalle, Andhra Pradesh" },
      { name: "description", content: "Radhika Constructions is a leading construction company in Madanapalle, Andhra Pradesh, delivering residential, commercial, industrial and infrastructure projects with quality craftsmanship since 1998." },
      { name: "keywords", content: "Radhika Constructions, construction company Madanapalle, builders Andhra Pradesh, contractors near me, residential construction, commercial construction, civil contractors, house construction Madanapalle, infrastructure builders, best construction company Chittoor" },
      { name: "author", content: "Radhika Constructions" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Radhika Constructions" },
      { property: "og:title", content: "Radhika Constructions — Top Builders & Contractors in Madanapalle" },
      { property: "og:description", content: "Premium construction company delivering residential, commercial, industrial and infrastructure projects across Andhra Pradesh." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Radhika Constructions — Top Builders in Madanapalle" },
      { name: "twitter:description", content: "Residential, commercial & infrastructure construction across Andhra Pradesh since 1998." },
      { name: "geo.region", content: "IN-AP" },
      { name: "geo.placename", content: "Madanapalle" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Radhika Constructions",
          description: "Construction company delivering residential, commercial, industrial and infrastructure projects across Andhra Pradesh since 1998.",
          url: "https://radhika-builds-modern.lovable.app",
          telephone: "+91-96423-33337",
          email: "radhikaconstructions@gmail.com",
          foundingDate: "1998",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Nimmanapalli Circle",
            addressLocality: "Madanapalle",
            addressRegion: "Andhra Pradesh",
            postalCode: "517501",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "State", name: "Andhra Pradesh" },
            { "@type": "Country", name: "India" },
          ],
          sameAs: [],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
