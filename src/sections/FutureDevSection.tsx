import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, GraduationCap, ShieldCheck, ShoppingCart, BarChart3, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    icon: Users,
    title: 'Referral System',
    desc: 'Bengkel partner bisa mereferensikan bengkel lain dan dapat poin bonus.',
  },
  {
    icon: GraduationCap,
    title: 'Mechanic Education',
    desc: 'Platform training dan sertifikasi untuk mekanik bengkel partner.',
  },
  {
    icon: ShieldCheck,
    title: 'Anti-Counterfeit',
    desc: 'Verifikasi keaslian produk Lupromax via scan QR.',
  },
  {
    icon: ShoppingCart,
    title: 'Predictive Reorder',
    desc: 'AI-powered reminder restock berdasarkan pola pembelian.',
  },
  {
    icon: BarChart3,
    title: 'Channel Intelligence',
    desc: 'Advanced analytics untuk prediksi perilaku dan segmentasi mitra.',
  },
  {
    icon: Globe,
    title: 'Multi-Region',
    desc: 'Ekspansi ke cabang dan distributor di kota lain.',
  },
];

export default function FutureDevSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fd-head', {
        opacity: 0, y: 30, duration: 0.8, stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="future" className="py-16 md:py-24 bg-lm-light">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="fd-head inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-lm-bright bg-lm-bright/10 mb-4">
            Potensi Pengembangan
          </span>
          <h2 className="fd-head text-2xl md:text-[42px] font-bold text-lm-navy leading-tight mb-3">
            Ini Bukan Proyek Sekali Pakai — Ini Fondasi untuk Ekosystem
          </h2>
          <p className="fd-head text-lm-gray text-base md:text-lg max-w-3xl mx-auto">
            Setelah sistem inti berjalan, Lupromax bisa memperluas platform ke area berikut:
          </p>
        </div>

        {/* Cards Grid - 2x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="fd-card bg-white rounded-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-lm-blue/10 flex items-center justify-center mb-4 group-hover:bg-lm-blue group-hover:scale-110 transition-all duration-300">
                <card.icon className="w-6 h-6 text-lm-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-base font-bold text-lm-navy mb-2">{card.title}</h3>
              <p className="text-sm text-lm-gray leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="fd-head max-w-3xl mx-auto text-center bg-white rounded-card p-5 shadow-card">
          <p className="text-sm text-lm-gray leading-relaxed">
            Semua pengembangan di atas akan di-quote terpisah setelah MVP stabil. Fokus kita sekarang:{' '}
            <span className="font-semibold text-lm-navy">fondasi yang kuat.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
