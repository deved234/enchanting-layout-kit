import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cancel")({
  component: CancelPage,
});

function CancelPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-brand-bg px-5 text-center">
      <div className="max-w-xl sm-glass rounded-3xl p-10 md:p-16 border border-brand-outline/40">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">تم إلغاء الدفع</h1>
        <p className="text-brand-muted text-lg leading-relaxed mb-6">
          لا مشكلة، يمكنك العودة في أي وقت لإكمال الطلب أو التواصل معنا إذا احتجت مساعدة.
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
