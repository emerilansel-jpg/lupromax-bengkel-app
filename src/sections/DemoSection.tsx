import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const screenshots = [
  { src: '/client/lupromax/bengkel-app/screenshots/screenshot8-v2.png', label: 'Dashboard Overview' },
  { src: '/client/lupromax/bengkel-app/screenshots/screenshot9-v2.png', label: 'Bengkel List' },
  { src: '/client/lupromax/bengkel-app/screenshots/screenshot10-v2.png', label: 'Add Bengkel' },
  { src: '/client/lupromax/bengkel-app/screenshots/screenshot11-v2.png', label: 'Rewards Catalog' },
  { src: '/client/lupromax/bengkel-app/screenshots/screenshot12-v2.png', label: 'Leaderboard' },
  { src: '/client/lupromax/bengkel-app/screenshots/screenshot13-v2.png', label: 'Redeem Flow' },
];

export default function DemoSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.d-head', { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
      gsap.from('.d-img', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.d-grid', start: 'top 80%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="demo" className="py-20 md:py-28 bg-white">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="d-head inline-block text-sm font-semibold tracking-wider text-[#1258B0] uppercase mb-3">
            Preview
          </span>
          <h2 className="d-head text-3xl md:text-4xl font-bold text-[#111118] mb-4">
            MVP dalam 6 Screenshot
          </h2>
          <p className="d-head text-[#626262] text-lg max-w-2xl mx-auto">
            Ini bukan mockup — ini real app yang sudah dibangun dan bisa langsung diakses.
          </p>
        </div>

        <div className="d-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {screenshots.map((s, i) => (
            <div key={i} className="d-img group">
              <div className="relative overflow-hidden rounded-xl border border-[#E5E5E5] shadow-card hover:shadow-card-hover transition-all">
                <img
                  src={s.src}
                  alt={s.label}
                  className="w-full aspect-[4/3] object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">{s.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
