import { QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";
import { COMPANY } from "../config/company";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SplashScreen } from "../components/shared/SplashScreen";
import { CustomCursor } from "../components/shared/CustomCursor";
import { ScrollProgress } from "../components/shared/ScrollProgress";
import { BackToTop } from "../components/shared/BackToTop";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">الصفحة غير موجودة</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          لم يتم تحميل الصفحة
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          حدث خطأ غير متوقع. يمكنك المحاولة مرة أخرى أو العودة للصفحة الرئيسية.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            إعادة المحاولة
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            الرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${COMPANY.name} | وكالة إبداعية متخصصة في الموشن جرافيك و UGC` },
      {
        name: "description",
        content: "وكالة عربية متخصصة في إنتاج الموشن جرافيك وفيديوهات UGC التسويقية.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: `${COMPANY.name} | وكالة إبداعية` },
      {
        property: "og:description",
        content: "موشن جرافيك احترافي وفيديوهات UGC للعلامات التجارية الطموحة.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${COMPANY.name} | وكالة إبداعية` },
      {
        name: "twitter:description",
        content: "موشن جرافيك احترافي وفيديوهات UGC للعلامات التجارية الطموحة.",
      },
      { rel: "canonical", href: COMPANY.website },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "robots", href: "/robots.txt" },
      { rel: "sitemap", href: "/sitemap.xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }) {
  useSmoothScroll();

  return (
    <html lang="ar" dir="rtl" className="scroll-smooth" style={{ scrollbarGutter: "stable" }}>
      <head>
        <HeadContent />
      </head>
      <body>
        <CustomCursor />
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
      <SplashScreen />
      <ScrollProgress />
      <BackToTop />
      <Outlet />
    </QueryClientProvider>
  );
}
