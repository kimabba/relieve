import { Link } from "@/i18n/routing";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-waxly-cream pt-32 pb-20">
      <div className="text-center px-4">
        <span
          className="block text-8xl text-waxly-brown/20 mb-6"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
        >
          404
        </span>
        <h1
          className="text-3xl lg:text-4xl text-waxly-brown mb-4"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
        >
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-waxly-brownLight font-light mb-8 max-w-md mx-auto">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-waxly-brown text-white text-sm tracking-wider hover:bg-waxly-brownDark transition-colors"
          >
            <span className="material-symbols-outlined text-lg">home</span>
            홈으로 돌아가기
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-waxly-brown text-waxly-brown text-sm tracking-wider hover:bg-waxly-brown hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-lg">spa</span>
            서비스 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
