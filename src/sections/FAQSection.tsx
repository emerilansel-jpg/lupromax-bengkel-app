import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus, Minus, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'Apa yang kami dapatkan dengan deposit $500?',
    a: 'Slot development, discovery meeting, MVP lengkap, go-live, dan 12-month support. Refund 100% dalam 60 hari jika belum puas.',
  },
  {
    q: 'Berapa lama sampai platform bisa digunakan?',
    a: '30-50 hari kerja. Termasuk dashboard admin + interface mitra + sistem poin + leaderboard + gamification.',
  },
  {
    q: 'Apakah data kami aman dan jadi milik kami?',
    a: '100%. Data dan platform adalah milik Lupromax. Enterprise tier mencakup full copyright + source code + commercial license.',
  },
  {
    q: 'Bagaimana jika kami ingin stop di tengah jalan?',
    a: 'Stop kapan saja. Deposit refund 60 hari. Performance tier: min 3 bulan, bisa terminate kapan saja. No lock-in contract.',
  },
  {
    q: 'Apakah ini menggantikan sistem yang sudah kami pakai?',
    a: 'Tidak. Platform ini berintegrasi dengan Sadix, NCS, atau Pandu yang sudah Anda pakai. No data migration risk.',
  },
  {
    q: 'Siapa yang handle maintenance dan support?',
    a: 'Tim Pesat.ai. Dedicated WhatsApp + email. Response time < 4 jam. Masa support 12 bulan. Additional features di-quote terpisah.',
  },
];

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.fq-head', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%' },
      });
      gsap.from('.fq-item', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%' },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[#F7F7F7]">
      <div className="container-main">
        <div className="text-center mb-14">
          <span className="fq-head inline-block text-sm font-semibold tracking-wider text-[#0095EB] uppercase mb-3">
            FAQ
          </span>
          <h2 className="fq-head text-3xl md:text-4xl font-bold text-[#111118] mb-4">
            Pertanyaan yang Mungkin Anda Pikirkan
          </h2>
          <p className="fq-head text-[#626262] text-lg max-w-2xl mx-auto">
            Kami paham keputusan ini perlu pertimbangan matang.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="fq-item rounded-card bg-white border border-[#E5E5E5] shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-7 py-5 text-left"
                >
                  <span className="text-[#111118] font-semibold text-sm md:text-base leading-snug">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F7F7F7] flex items-center justify-center">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#1258B0]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#1258B0]" />
                    )}
                  </span>
                </button>
                <div
                  className={`px-5 md:px-7 transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <p className="text-[#626262] text-sm md:text-base leading-relaxed border-t border-[#E5E5E5] pt-4">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom badge */}
        <div className="fq-head flex justify-center mt-12">
          <div className="inline-flex items-center gap-3 bg-[#16A34A]/10 border border-[#16A34A]/20 rounded-2xl px-6 py-4">
            <ShieldCheck className="w-6 h-6 text-[#16A34A] flex-shrink-0" />
            <div>
              <span className="text-[#111118] font-bold text-sm md:text-base block">
                Zero Risk
              </span>
              <span className="text-[#626262] text-xs md:text-sm">
                Deposit refundable 60 hari. MVP dulu, baru commit.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
