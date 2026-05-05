"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const text = "I build digital experiences that live at the intersection of art and engineering. From immersive 3D environments to highly functional web applications, my goal is to craft work that feels as good as it looks.".split(" ");
  
  const keywords = ["art","engineering.","3D","environments","web","applications,"];

  return (
    <section 
      ref={ref} 
      id="about" 
      className="py-32 px-4 sm:px-6 bg-black relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-sm font-medium tracking-widest text-neutral-500 uppercase mb-8"
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true, margin:"-100px"}}
        >
          About
        </motion.h2>
        
        <motion.div style={{y}}>
          <motion.div 
            className="text-2xl sm:text-3xl md:text-5xl font-light text-neutral-200 leading-tight md:leading-snug tracking-tight flex flex-wrap select-none"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, margin:"-100px"}}
            variants={{ 
              visible: { 
                transition: { staggerChildren: 0.03 } 
              },
              hidden: {}
            }}
          >
            {text.map((word, i) => (
              <span 
                key={i} 
                className="overflow-hidden inline-block mr-[0.25em] mb-2"
                onMouseEnter={() => {
                  if (typeof window !== "undefined" && window.innerWidth >= 768) {
                    setHoveredIndex(i);
                  }
                }}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.span
                  className={`inline-block cursor-default transition-all duration-300 ${keywords.includes(word) ? "text-emerald-500 font-bold" : ""} ${hoveredIndex === i ? "text-emerald-500 -translate-y-1" : ""}`}
                  variants={{ 
                    hidden: { y: "100%", opacity: 0 }, 
                    visible: { 
                      y: "0%", 
                      opacity: 1, 
                      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
                    }
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true, margin:"-100px"}}
          transition={{delay:0.3, duration:0.8, ease:[0.16,1,0.3,1]}}
        >
          {["React","Three.js","Next.js","TypeScript","Blender","Unity","Figma","Node.js"].map((tech) => (
            <motion.div
              key={tech}
              className="group relative px-4 py-3 text-center text-xs font-bold tracking-widest uppercase border border-neutral-800 text-neutral-500 rounded-xl cursor-default select-none transition-all duration-300 md:hover:border-emerald-500/40 md:hover:text-emerald-500 md:hover:bg-emerald-500/5 md:hover:-translate-y-1 overflow-hidden"
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">{tech}</span>
              <div className="absolute inset-0 bg-emerald-500/0 md:group-hover:bg-emerald-500/5 transition-colors duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
