import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Gift, Trophy, Megaphone, MessageSquare, BarChart3,
  Shield, Zap, Smartphone, CheckCircle
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Gift, title: 'Poin & Rewards', desc: 'Bengkel partner mengumpulkan poin setiap transaksi dan menukarkannya dengan reward menarik.' },
  { icon: Trophy, title: 'Gamification Engine', desc: 'Badge, leaderboard, level, dan tantangan yang membuat bengkel semakin aktif bertransaksi.' },
  { icon: Megaphone, title: 'Broadcast & Notifikasi', desc: 'Kirim pengumuman, promo, dan update ke seluruh bengkel partner dalam satu klik.' },
  { icon: MessageSquare, title: 'WhatsApp Notifikasi', desc: 'Notifikasi restock, promo, dan milestone secara otomatis via WhatsApp.' },
  { icon: BarChart3, title: 'Analytics Real-Time', desc: 'Dashboard lengkap untuk memantau performa bengkel, transaksi, dan engagement secara live.' },
  { icon: Shield, title: 'Tier Management', desc: 'Atur level bengkel (Bronze, Silver, Gold, Platinum) dengan benefit berbeda per tier.' },
  { icon: Zap, title: 'Auto-trigger Campaign', desc: 'Kampanye marketing otomatis berdasarkan perilaku dan data bengkel partner.' },
  { icon: Smartphone, title: 'Progressive Web App', desc: 'Akses mudah dari HP tanpa install — cukup buka browser, siap pakai.' },
];

const integrations = ['Sadix', 'NCS', 'Pandu', 'Midtrans', 'Odoo', 'Jurnal.id', 'SAP'];

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.f-head', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
      gsap.from('.f-card', {
        opacity: 0, y: 30, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
      gsap.from('.f-int', {
        opacity: 0, y: 20, duration: 0.6, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 65%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="f-head text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-lm-blue/10 text-lm-bright text-sm font-semibold tracking-wide mb-4">
            Fitur Lengkap
          </span>
          <h2 className="text-3xl md:text-[42px] font-extrabold text-lm-navy leading-tight">
            Semua yang Dibutuhkan untuk<br className="hidden md:block" /> Mengelola Bengkel Partner
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {features.map((f, i) => (
            <div
              key={i}
              className="f-card rounded-card p-6 bg-white border border-lm-border hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-lm-blue to-lm-bright flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-lm-navy mb-2">{f.title}</h3>
              <p className="text-sm text-lm-gray leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div className="f-int text-center">
          <p className="text-sm text-lm-gray mb-4">Terintegrasi dengan sistem yang sudah Anda pakai</p>
          <div className="flex flex-wrap justify-center gap-3">
            {integrations.map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-lm-light border border-lm-border text-sm font-medium text-lm-navy"
              >
                <CheckCircle className="w-4 h-4 text-lm-green" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
