import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-badge', { y: 20, opacity: 0, duration: 0.6, delay: 0.1 });
      gsap.from('.hero-title', { y: 30, opacity: 0, duration: 0.8, delay: 0.3 });
      gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.7, delay: 0.5 });
      gsap.from('.hero-cta', { y: 20, opacity: 0, duration: 0.6, delay: 0.7 });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="hero" className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />
      <div className="container-main relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="hero-badge inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-lm-green animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Proposal Lupromax Bengkel Rewards</span>
            </div>
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Jaga Loyalitas<br />Bengkel Partner
            </h1>
            <p className="hero-sub text-lg md:text-xl text-white/70 mb-4 max-w-lg">
              Loyalty + gamification. Tanpa follow-up manual.
            </p>
            <p className="hero-sub text-sm text-white/50 mb-8">
              Terinspirasi dari visi smart Pak Kartiko — Dirut Lupromax
            </p>
            <div className="hero-cta flex flex-wrap gap-4">
              <a href="landing-page/" className="h-cta cta-yellow inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-lm-navy shadow-yellow hover:scale-[1.02] transition-transform">
                Lihat MVP
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'Total Mitra', val: '247' },
                  { label: 'Mitra Aktif', val: '189' },
                  { label: 'Poin', val: '1.2M' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-white/50 text-xs">{s.label}</p>
                    <p className="text-white font-bold text-lg">{s.val}</p>
                  </div>
                ))}
              </div>
              <div className="bg-white/10 rounded-xl p-3 mb-3">
                <div className="flex justify-between text-xs text-white/50 mb-2">
                  <span>Target Bulanan</span>
                  <span>72%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-lm-yellow to-lm-green rounded-full" style={{ width: '72%' }} />
                </div>
              </div>
              <div>
                <p className="text-white/50 text-xs mb-2">Top Performers</p>
                {[
                  { name: 'Bengkel Maju Jaya', pts: '12000' },
                  { name: 'Auto Prima', pts: '9500' },
                  { name: 'Speed Garage', pts: '7000' },
                ].map((b, i) => (
                  <div key={b.name} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                    <div className="flex items-center gap-2">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${i === 0 ? 'bg-lm-yellow text-lm-navy' : 'bg-white/10 text-white/60'}`}>{i + 1}</span>
                      <span className="text-white/80 text-sm">{b.name}</span>
                    </div>
                    <span className="text-white/50 text-xs">{b.pts} pts</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
