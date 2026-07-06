import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ShieldCheck, CheckCircle, Crown, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const tiers = [
  {
    name: 'Performance',
    priceUSD: 'USD 370',
    priceIDR: 'Rp 6.475.000',
    period: '/bulan',
    border: 'border-lm-green',
    badge: 'PALING LOW RISK',
    badgeBg: 'bg-lm-green',
    badgeText: 'text-white',
    subtitle: 'Hampir sama dengan gaji admin UMR',
    minContract: 'Min. kontrak 4 bulan',
    features: [
      'Semua fitur MVP included',
      '12 bulan support',
      'Performance-based pricing',
    ],
    highlight: 'Cocok untuk: validasi cepat dengan risiko minimal',
    featured: false,
  },
  {
    name: 'Ideal',
    priceUSD: 'USD 770',
    priceIDR: 'Rp 13.475.000',
    period: 'x 12 bulan',
    border: 'border-lm-blue',
    badge: 'PALING IDEAL',
    badgeBg: 'bg-lm-blue',
    badgeText: 'text-white',
    subtitle: 'Setelah 12 bulan, app jadi milik Lupromax',
    minContract: 'Min. kontrak 4 bulan',
    features: [
      'Semua fitur MVP included',
      '12 bulan support',
      'App ownership penuh setelah 12 bulan',
      'Tidak perlu bayar lagi setelahnya',
    ],
    highlight: 'Cocok untuk: commit jangka menengah',
    featured: true,
  },
  {
    name: 'Value',
    priceUSD: 'USD 2.070',
    priceIDR: 'Rp 36.225.000',
    period: 'x 3 bulan',
    border: 'border-lm-yellow',
    badge: 'TERMURAH TOTAL',
    badgeBg: 'bg-lm-yellow',
    badgeText: 'text-lm-navy',
    subtitle: 'Sebenarnya yang termurah secara keseluruhan',
    minContract: 'Min. kontrak 3 bulan',
    features: [
      'Semua fitur MVP included',
      '3 bulan intensif',
      'Cepat deploy',
    ],
    highlight: 'Cocok untuk: yang mau cepat deploy',
    featured: false,
  },
];

export default function PricingSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pr-head', { opacity: 0, y: 30, duration: 0.8, stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
      });
      gsap.from('.pr-card', { opacity: 0, y: 40, scale: 0.97, duration: 0.7, stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
      });
      gsap.from('.pr-note', { opacity: 0, y: 30, duration: 0.7,
        scrollTrigger: { trigger: '.pr-note', start: 'top 90%', once: true },
      });
      gsap.from('.pr-deposit', { opacity: 0, y: 30, duration: 0.7, stagger: 0.12,
        scrollTrigger: { trigger: '.pr-deposit-wrap', start: 'top 85%', once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="pr-head inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-lm-bright bg-lm-bright/10 mb-4">
            Investasi
          </span>
          <h2 className="pr-head text-2xl md:text-[42px] font-bold text-lm-navy leading-tight mb-3">
            Struktur Investasi yang Transparan
          </h2>
          <p className="pr-head text-lm-gray text-base md:text-lg max-w-2xl mx-auto">
            Ada yang murah, ada yang low risk. Terserah Anda pilih yang mana.
          </p>
        </div>

        {/* Tiers Grid - 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div key={tier.name}
              className={`pr-card relative border-2 ${tier.border} rounded-card p-5 md:p-6 bg-white ${
                tier.featured ? 'shadow-featured' : 'shadow-card'
              } hover:shadow-card-hover transition-shadow`}
            >
              <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${tier.badgeBg} ${tier.badgeText} mb-3`}>
                {tier.badge}
              </span>
              <h3 className="text-lg font-bold text-lm-navy mb-1">{tier.name}</h3>
              <div className="mb-0.5">
                <span className="text-2xl md:text-[28px] font-extrabold text-lm-navy">{tier.priceUSD}</span>
                <span className="text-sm text-lm-gray ml-1">{tier.period}</span>
              </div>
              <p className="text-sm font-medium text-lm-green mb-1">{tier.priceIDR}</p>
              <p className="text-xs font-semibold text-lm-red mb-2">{tier.minContract}</p>
              <p className="text-sm text-lm-gray mb-4">{tier.subtitle}</p>
              <div className="border-t border-lm-border pt-4 mb-4">
                <ul className="space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-lm-navy">
                      <Check className="w-4 h-4 text-lm-green mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-lm-light rounded-lg px-3 py-2.5">
                <p className="text-xs text-lm-gray leading-relaxed">{tier.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Fee Note */}
        <div className="pr-note max-w-3xl mx-auto mb-6">
          <div className="bg-lm-light border border-lm-green/30 rounded-card p-4 md:p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-lm-green/10 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-lm-green" />
            </div>
            <div>
              <h4 className="font-semibold text-lm-navy text-sm mb-1">Performance Fee — Berbasis Growth</h4>
              <p className="text-sm text-lm-gray leading-relaxed">
                Untuk paket Performance, ada performance fee tambahan yang dihitung dari growth yang dicapai. Detailnya didiskusikan setelah MVP — tanpa growth, tidak ada fee tambahan.
              </p>
            </div>
          </div>
        </div>

        {/* Full Ownership Note */}
        <div className="pr-note max-w-3xl mx-auto mb-10">
          <div className="bg-lm-navy rounded-card p-5 md:p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <Crown className="w-5 h-5 text-lm-yellow" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Full Ownership — USD 18.630 <span className="text-white/60 font-normal">(bisa dibayar 3x)</span></h4>
                <p className="text-sm text-white/70 mb-2">
                  Full copyright & source code license. Commercial license — boleh resell. Pesat.ai tidak boleh copy source code. Semua hak di tangan Lupromax.
                </p>
                <p className="text-xs text-lm-yellow mb-1">Cocok untuk: kontrol penuh & hak komersial. Min. kontrak 3 bulan.</p>
                <p className="text-xs text-white/50">Tidak akan dijadikan public case study — privasi terjamin.</p>
              </div>
            </div>
          </div>
        </div>

        {/* IDR Conversion Note */}
        <p className="pr-head text-center text-xs text-lm-gray italic mb-8">
          *Konversi IDR: 1 USD = Rp 17.500. Performance tier hampir sama dengan gaji admin UMR.
        </p>

        {/* Deposit Info Cards */}
        <div className="pr-deposit-wrap grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          <div className="pr-deposit flex items-start gap-4 bg-lm-light rounded-card p-5 shadow-card">
            <div className="w-10 h-10 rounded-full bg-lm-blue/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-lm-blue" />
            </div>
            <div>
              <h4 className="font-semibold text-lm-navy text-sm mb-1">Deposit: USD 500 — Refundable 60 hari</h4>
              <p className="text-xs text-lm-gray leading-relaxed">Jika MVP tidak cocok, 100% kembali.</p>
            </div>
          </div>
          <div className="pr-deposit flex items-start gap-4 bg-lm-light rounded-card p-5 shadow-card">
            <div className="w-10 h-10 rounded-full bg-lm-green/10 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5 text-lm-green" />
            </div>
            <div>
              <h4 className="font-semibold text-lm-navy text-sm mb-1">Setelah MVP Approved</h4>
              <p className="text-xs text-lm-gray leading-relaxed">Cicilan pertama dimulai. Support 12 bulan. Penambahan fitur di-quote terpisah.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
