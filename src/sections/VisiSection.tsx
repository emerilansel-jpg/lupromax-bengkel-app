import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass, Users, Award, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const visions = [
  {
    icon: Compass,
    title: 'Loyalty Ecosystem',
    desc: 'Lupromax menjadi brand dengan ekosistem loyalty terkuat di industri aftermarket otomotif Indonesia.',
  },
  {
    icon: Users,
    title: 'Data-Driven Relationships',
    desc: 'Setiap interaksi dengan bengkel tercatat dan bisa dianalisis untuk keputusan bisnis yang lebih baik.',
  },
  {
    icon: Award,
    title: 'Market Leadership',
    desc: 'Dengan sistem loyalty yang matang, Lupromax memperkuat posisi sebagai market leader.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Innovation',
    desc: 'Platform terus berevolusi berdasarkan feedback bengkel dan tren pasar.',
  },
];

export default function VisiSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.v-head', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
      gsap.from('.v-card', { y: 40, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[#F8FAFC]">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="v-head inline-block text-sm font-semibold tracking-wider text-[#1258B0] uppercase mb-3">
            Visi
          </span>
          <h2 className="v-head text-3xl md:text-4xl font-bold text-[#111118] mb-4">
            Visi Lupromax
          </h2>
          <p className="v-head text-[#626262] text-lg max-w-2xl mx-auto">
            Arah strategis jangka panjang yang didukung oleh platform ini.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visions.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} className="v-card bg-white border border-[#E5E5E5] rounded-card p-6 text-center shadow-card">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1258B0] to-[#0095EB] flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#111118] mb-2">{v.title}</h3>
                <p className="text-[#626262] text-sm leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
