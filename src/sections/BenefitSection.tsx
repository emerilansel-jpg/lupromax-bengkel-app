import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, TrendingUp, Users, Database } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: Clock,
    title: 'Hemat Waktu Tim Sales',
    desc: 'Berdasarkan pemahaman tim Lupromax, platform ini berpotensi menghemat minimum 50% waktu sales yang tadinya habis untuk follow-up manual.',
    stat: '50%',
    statLabel: 'Waktu Tersimpan',
  },
  {
    icon: TrendingUp,
    title: 'Omset Naik 30-50%',
    desc: 'Dengan sistem poin dan gamification yang mendorong repeat order, tim Lupromax memperkirakan potensi kenaikan omset 30-50%.',
    stat: '30-50%',
    statLabel: 'Potensi Kenaikan',
  },
  {
    icon: Users,
    title: 'Bengkel Partner Lebih Engaged',
    desc: 'Gamification dan rewards membuat bengkel partner lebih loyal, aktif, dan terhubung dengan brand Lupromax.',
    stat: '3x',
    statLabel: 'Lebih Engaged',
  },
  {
    icon: Database,
    title: 'Data untuk Keputusan',
    desc: 'Seluruh data transaksi, perilaku, dan performa bengkel tersimpan rapi untuk analisis dan pengambilan keputusan strategis.',
    stat: '100%',
    statLabel: 'Data Tersentralisasi',
  },
];

export default function BenefitSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.b-head', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
      gsap.from('.b-card', {
        opacity: 0, y: 30, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 gradient-blue">
      <div className="container-main">
        {/* Header */}
        <div className="b-head text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white/90 text-sm font-semibold tracking-wide mb-4">
            Impact
          </span>
          <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-tight mb-4">
            Apa yang Berubah Setelah Implementasi
          </h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            Angka-angka berikut adalah estimasi berdasarkan pemahaman tim Lupromax sendiri.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="b-card rounded-card p-6 bg-white shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-lm-blue to-lm-bright flex items-center justify-center">
                  <b.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-lm-blue">{b.stat}</span>
                  <p className="text-[11px] text-lm-gray">{b.statLabel}</p>
                </div>
              </div>
              <h3 className="text-base font-bold text-lm-navy mb-2">{b.title}</h3>
              <p className="text-sm text-lm-gray leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
