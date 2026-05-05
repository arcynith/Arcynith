"use client";
import { motion } from "framer-motion";
import MagneticElement from "../ui/MagneticElement";
import { ArrowUpRight } from "lucide-react";

const P = [
  {
    T: "Adola",
    C: "Flutter, Mobile Apps",
    D: "Aplikasi musik untuk memutar dan mengelola lagu favorit, tersedia di Android dan iOS.",
    K: "bg-neutral-800",
    img: "/work/adola-music.png"
  },
  {
    T: "Altair",
    C: "Flutter, Mobile Apps",
    D: "Aplikasi AI lokal yang berjalan langsung di perangkat tanpa koneksi internet.",
    K: "bg-neutral-900",
    img: "/work/altair-ai.png"
  },
  {
    T: "OrdoKu",
    C: "Flutter, Desktop & Mobile Apps",
    D: "Aplikasi Office untuk Desktop & Mobile.",
    K: "bg-zinc-900",
    img: "/work/ordo-ku.png"
  },
  {
    T: "Vendku",
    C: "Flutter, Mobile Apps",
    D: "Aplikasi POS untuk membantu para UMKM mengelola stok dan penjualan.",
    K: "bg-stone-900",
    img: "/work/vendku.png"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-sm font-medium tracking-widest text-emerald-500 uppercase mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}>
          Selected Work
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {P.map((X, I) => (
            <motion.div
              key={X.T}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: I * .1, duration: .8, ease: [.16, 1, .3, 1] }}>
              <MagneticElement strength={5}>
                <div className="group cursor-pointer block">
                  <div className={`w-full aspect-[4/3] rounded-sm mb-6 ${X.K} overflow-hidden relative flex items-center justify-center transition-transform duration-700 md:group-hover:scale-[1.02]`}>
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')] mix-blend-overlay" />
                    {/* Project Thumbnail */}
                    <img src={X.img} alt={X.T} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 border border-white/5 md:group-hover:border-emerald-500/20 transition-colors duration-700 rounded-sm" />
                  </div>
                  <div>
                    <div className="overflow-hidden mb-2">
                      <motion.h3 className="text-2xl font-bold text-neutral-100 md:group-hover:text-emerald-500 transition-colors flex items-center justify-between" initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: I * .1 + .2, duration: .6, ease: [.16, 1, .3, 1] }}>
                        {X.T}
                        <span className="opacity-0 -translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500 text-sm">
                          <ArrowUpRight size={24} className="text-emerald-500" strokeWidth={1.5} />
                        </span>
                      </motion.h3>
                    </div>
                    <div className="overflow-hidden mb-3">
                      <motion.p className="text-sm text-neutral-500 font-bold uppercase tracking-widest md:group-hover:text-emerald-300 transition-colors" initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: I * .1 + .3, duration: .6, ease: [.16, 1, .3, 1] }}>
                        {X.C}
                      </motion.p>
                    </div>
                    <p className="text-neutral-400 font-light">{X.D}</p>
                  </div>
                </div>
              </MagneticElement>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
