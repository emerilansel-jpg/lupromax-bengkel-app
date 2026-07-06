import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const fomoCards = [
  {
    icon: TrendingDown,
    title: 'Kompetitor Sudah Mulai',
    desc: '72% decision makers khawatir kehilangan competitive edge karena tidak mengadopsi AI dan otomasi lebih cepat.',
    source: 'Ataccama Data Trust Report 2025',
    link: 'https://www.ataccama.com/',
  },
  {
    icon: AlertTriangle,
    title: 'Biaya Diam Lebih Mahal',
    desc: 'Sales manual, churn bengkel, dan opportunity loss karena tidak ada sistem loyalty bisa lebih mahal daripada investasi platform.',
    source: 'MSBC Group 2025',
    link: '#',
  },
  {
    icon: Clock,
    title: 'Jendela Waktu Menipis',
    desc: 'Tahun 2026, AI akan beralih dari eksperimen ke eksekusi. Brand yang belum siap akan ketinggalan jauh.',
    source: 'Innovation News Network 2026',
    link: '#',
  },
];

export default function FOMOSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fo-head', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
      gsap.from('.fo-card', {
        opacity: 0, y: 30, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
      gsap.from('.fo-box', {
        opacity: 0, y: 20, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 60%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-lm-navy">
      <div className="container-main">
        {/* Header */}
        <div className="fo-head text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lm-red/20 text-lm-red text-sm font-semibold tracking-wide mb-4">
            <AlertTriangle className="w-4 h-4" />
            Cost of Doing Nothing
          </span>
          <h2 className="text-3xl md:text-[42px] font-extrabold text-white leading-tight">
            Kalau Anda Tidak Pecat Pekerjaan Lama,{' '}
            <span className="text-lm-yellow">AI Akan Pecat Bisnis Anda.</span>
          </h2>
        </div>

        {/* FOMO Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {fomoCards.map((c, i) => (
            <div
              key={i}
              className="fo-card rounded-card p-6 bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-lm-red/20 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-lm-red" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">{c.desc}</p>
              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/40 hover:text-white/70 transition-colors underline"
              >
                Source: {c.source}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Red Box */}
        <div className="fo-box rounded-card p-6 bg-lm-red/15 border border-lm-red/30 text-center">
          <p className="text-lg md:text-xl font-bold text-white">
            Jangan sampai Lupromax jadi brand yang ditinggal.
          </p>
          <p className="text-sm text-white/60 mt-2">
            Window of opportunity masih terbuka — tapi tidak selamanya.
          </p>
        </div>
      </div>
    </section>
  );
}
