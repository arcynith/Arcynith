"use client";

import { motion } from "framer-motion";
import MagneticElement from "../ui/MagneticElement";

const skills = [
  "3D",
  "2D Design",
  "Game Development",
  "AI Engineering",
  "Prompt Engineering",
  "Full Stack Web Development",
  "Animation",
  "Illustration"
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-sm font-medium tracking-widest text-neutral-500 uppercase mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Expertise
        </motion.h2>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <MagneticElement strength={20}>
                <motion.div
                  className="px-6 py-4 rounded-full border border-neutral-800 bg-neutral-900/30 text-neutral-300 text-lg md:text-xl font-light cursor-default"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)", color: "#fff" }}
                >
                  {skill}
                </motion.div>
              </MagneticElement>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
