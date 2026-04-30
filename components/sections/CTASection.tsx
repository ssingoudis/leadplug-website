export default function CTASection() {
  return (
    <section id="cta" className="py-24 px-6">
      <div
        className="max-w-225 mx-auto rounded-3xl"
        style={{
          background: "linear-gradient(135deg, #3234a8 0%, #5b5de8 100%)",
          padding: "clamp(48px, 6vw, 72px) clamp(24px, 4vw, 60px)",
        }}
      >
        <h2
          className="font-display font-semibold leading-[1.2] text-white text-center mb-8"
          style={{ fontSize: "clamp(24px, 3.5vw, 34px)" }}
        >
          Dein erstes Widget — kostenlos eingerichtet
        </h2>

        {/* iframe placeholder */}
        <div className="max-w-140 mx-auto">
          <div
            className="bg-white rounded-[20px] overflow-hidden"
            style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.15)" }}
          >
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#f8f9fb] border-b border-[#eee]">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
            </div>
            {/* Placeholder content */}
            <div className="p-9 flex flex-col items-center justify-center min-h-60 text-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center">
                <div className="w-6 h-6 rounded bg-primary opacity-60" />
              </div>
              <p className="text-[13px] text-fg-4 max-w-50 leading-relaxed">
                Onboarding-Funnel wird hier eingebettet
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
