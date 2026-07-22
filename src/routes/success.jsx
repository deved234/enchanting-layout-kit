import { createFileRoute, Link } from "@tanstack/react-router";
import { COMPANY } from "../config/company";

export const Route = createFileRoute("/success")({
  component: SuccessPage,
});

function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-bg px-5 text-center">
      <div className="max-w-xl sm-glass rounded-3xl p-10 md:p-16 border border-brand-outline/40">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">تم استلام طلبك بنجاح</h1>
        <p className="text-brand-muted text-lg leading-relaxed mb-6">
          شكراً لك، تم استقبال طلبك وسنقوم بمراجعته والبدء في التنفيذ خلال أقرب وقت. ستصلك تفاصيل
          المتابعة عبر البريد الإلكتروني أو واتساب.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-xl bg-brand-pulse px-6 py-3 font-bold text-white hover:bg-brand-pulse/90 transition-colors"
        >
          العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </main>
  );
}
