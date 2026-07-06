import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wallet, MessageSquare, Code, Rocket, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Wallet,
    title: 'Deposit $500',
    desc: 'Deposit refundable 60 hari untuk mengamankan slot. Invoice resmi.',
    duration: '3 hari',
    color: 'text-[#1258B0]',
    border: 'border-[#1258B0]',
    bg: 'bg-[#1258B0]',
  },
  {
    icon: MessageSquare,
    title: 'Discovery Meeting',
    desc: 'Bahas fitur, workflow app, dan success metrics.',
    duration: '3 hari',
    color: 'text-[#0095EB]',
    border: 'border-[#0095EB]',
    bg: 'bg-[#0095EB]',
  },
  {
    icon: Code,
    title: 'MVP Built',
    desc: 'Dashboard admin + interface mitra + sistem poin + gamification. Weekly progress.',
    duration: '1-2 minggu',
    color: 'text-[#16A34A]',
    border: 'border-[#16A34A]',
    bg: 'bg-[#16A34A]',
  },
  {
    icon: Rocket,
    title: 'Go-Live & Support',
    desc: 'Platform aktif. Training tim. Cicilan pertama dimulai. Debugging 2 minggu - 3 bulan. Support 12 bulan.',
    duration: '1-2 minggu',
    color: 'text-[#C90000]',
    border: 'border-[#C90000]',
    bg: 'bg-[#C90000]',
  },
];

export default function CaraKerjaSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.ck-head', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
      gsap.from('.ck-line', {
        scaleY: 0, duration: 1.2, ease: 'power3.out',
        transformOrigin: 'top center',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      });
      gsap.from('.ck-step', {
        x: -30, opacity: 0, duration: 0.7, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      });
      gsap.from('.ck-icon', {
        scale: 0, duration: 0.5, stagger: 0.2, ease: 'back.out(1.7)',
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      });
      gsap.from('.ck-badge', {
        y: 20, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.8,
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="ck-head inline-block text-sm font-semibold tracking-wider text-[#0095EB] uppercase mb-3">
            Proses
          </span>
          <h2 className="ck-head text-3xl md:text-4xl font-bold text-[#111118] mb-4">
            Cara Kerja: dari Deposit hingga Go-Live
          </h2>
          <p className="ck-head text-[#626262] text-lg max-w-2xl mx-auto">
            Total waktu: 30-50 hari kerja. Setelah MVP di-approve, cicilan pertama dimulai.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Connecting vertical line */}
          <div className="ck-line absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-[#E5E5E5]" />

          <div className="space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="ck-step relative flex gap-5 md:gap-7 items-start">
                  {/* Icon circle */}
                  <div className={`ck-icon relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full ${step.bg} flex items-center justify-center shadow-card`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 rounded-card shadow-card bg-[#F7F7F7] p-5 md:p-6 border border-[#E5E5E5]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className={`text-lg md:text-xl font-bold ${step.color}`}>
                        {step.title}
                      </h3>
                      <span className="text-xs font-semibold bg-white border border-[#E5E5E5] rounded-full px-3 py-1 text-[#626262] self-start">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-[#626262] text-sm md:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Badge */}
        <div className="ck-badge flex justify-center mt-14">
          <div className="inline-flex items-center gap-3 bg-[#1258B0]/5 border border-[#1258B0]/20 rounded-2xl px-6 py-4">
            <ShieldCheck className="w-6 h-6 text-[#1258B0] flex-shrink-0" />
            <span className="text-[#111118] font-semibold text-sm md:text-base">
              Deposit $500 — Refundable 60 Hari
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
