import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Target, Shield, BarChart3, Smartphone, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    icon: Zap,
    title: 'Loyalty + Gamification Otomatis',
    desc: 'Bengkel otomatis terdaftar, check-in, kumpulkan poin, dan tukar hadiah — tanpa tim sales follow-up satu per satu.',
  },
  {
    icon: Target,
    title: 'Visibility Real-Time',
    desc: 'Dashboard langsung tunjukkan siapa bengkel aktif, siapa yang perlu perhatian, dan siapa top performer.',
  },
  {
    icon: Shield,
    title: 'Retention Terukur',
    desc: 'Churn alert otomatis. Ketika bengkel tidak aktif, sistem flag dan trigger re-engagement campaign.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Decisions',
    desc: 'Semua transaksi tercatat: poin, redemption, engagement rate. Bisa analisis tanpa manual entry.',
  },
  {
    icon: Smartphone,
    title: 'Web-Based, Tanpa Install',
    desc: 'Bengkel cukup scan QR atau buka link. Tidak perlu download app. Onboarding dalam 5 menit.',
  },
  {
    icon: Clock,
    title: 'Go-Live 30-50 Hari Kerja',
    desc: 'Dari kick-off sampai MVP bisa digunakan bengkel. Bukan proyek 6-12 bulan.',
  },
];

export default function SolusiSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.s-head', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
      gsap.from('.s-card', { y: 40, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="solusi" className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="s-head inline-block text-sm font-semibold tracking-wider text-[#1258B0] uppercase mb-3">
            Solusi
          </span>
          <h2 className="s-head text-3xl md:text-4xl font-bold text-[#111118] mb-4">
            Lupromax Bengkel Rewards — Apa yang Dibangun
          </h2>
          <p className="s-head text-[#626262] text-lg max-w-2xl mx-auto">
            Sistem loyalty berbasis web yang menggantikan follow-up manual dengan otomasi pintar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="s-card bg-white border border-[#E5E5E5] rounded-card p-6 md:p-8 shadow-card hover:shadow-card-hover transition-shadow">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1258B0] to-[#0095EB] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#111118] mb-2">{s.title}</h3>
                <p className="text-[#626262] text-sm md:text-base leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
