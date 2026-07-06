import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, EyeOff, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: Clock,
    title: 'Follow-up Manual Menghabiskan Waktu',
    desc: 'Tim sales harus mengecek dan menindaklanjuti setiap bengkel satu per satu, tanpa sistem yang mengotomatiskan proses loyalty dan engagement.',
    bg: 'bg-red-50',
    border: 'border-red-100',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: EyeOff,
    title: 'Loyalty Partner Sulit Terukur',
    desc: 'Tidak ada visibility yang jelas mengenai seberapa loyal bengkel partner, sehingga sulit memberikan reward yang tepat sasaran.',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: TrendingUp,
    title: 'Biaya Retention Meningkat',
    desc: 'Churn bengkel partner sering terjadi tanpa terdeteksi lebih dulu, membuat biaya akuisisi dan retensi terus membengkak.',
    bg: 'bg-yellow-50',
    border: 'border-yellow-100',
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
  },
];

export default function ProblemSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.p-head', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
      gsap.from('.p-card', { y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="problem" className="py-20 md:py-28 bg-white">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="p-head inline-block text-sm font-semibold tracking-wider text-[#C90000] uppercase mb-3">
            Challenge
          </span>
          <h2 className="p-head text-3xl md:text-4xl font-bold text-[#111118] mb-4">
            Tantangan yang Sering Dihadapi Tim dengan Bengkel Partner
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className={`p-card ${p.bg} border ${p.border} rounded-card p-6 md:p-8`}>
                <div className={`w-12 h-12 rounded-full ${p.iconBg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-6 h-6 ${p.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-[#111118] mb-3">{p.title}</h3>
                <p className="text-[#626262] text-sm md:text-base leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
