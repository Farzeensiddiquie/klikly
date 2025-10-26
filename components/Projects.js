"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      label: "Web App",
      title: "Klikly Digital Agency",
      description:
        "A modern digital agency website with 3D visuals, smooth animations, and responsive design.",
      tags: ["React", "GSAP", "Framer Motion"],
      image: "/images/project1.jpg",
      buttonText: "View Project",
      link: "#",
    },
    {
      id: 2,
      label: "Mobile App",
      title: "Foodify Delivery",
      description:
        "A seamless food delivery app with real-time tracking and Firebase integration.",
      tags: ["React Native", "Firebase", "Node.js"],
      image: "/images/project1.jpg",
      buttonText: "View Project",
      link: "#",
    },
    {
      id: 3,
      label: "Dashboard",
      title: "Analytics Pro",
      description:
        "A powerful admin dashboard featuring charts, stats, and dynamic data visualization.",
      tags: ["Next.js", "Tailwind", "Chart.js"],
      image: "/images/project1.jpg",
      buttonText: "View Project",
      link: "#",
    },
    {
      id: 4,
      label: "Portfolio",
      title: "Creative Portfolio",
      description:
        "A sleek personal portfolio showcasing 3D models and smooth scroll animations.",
      tags: ["React Three Fiber", "GSAP", "ScrollTrigger"],
      image: "/images/project1.jpg",
      buttonText: "View Project",
      link: "#",
    },
  ];

  return (
    <section className="w-full py-20 flex flex-col items-center bg-gradient-to-b from-black/10 via-[#051d13]/60 to-black/10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-3xl md:text-4xl font-semibold mb-12 text-white tracking-wide"
      >
        Featured Projects
      </motion.h2>

      <div className="w-full max-w-6xl flex flex-col gap-14 px-4">
        {projects.map((project, i) => (
          <AnimatedCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function AnimatedCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      // Ensure first card animates visibly on reload
      const delay = index === 0 ? 0.2 : index * 0.15;
      controls.start("visible", { delay });
    }
  }, [inView, controls, index]);

  const variants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      y: 50,
      scale: 0.9,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className={`group flex flex-col md:flex-row items-center justify-between bg-[#0a1c12]/20 border border-[#1f3a29] rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <motion.div
        className="flex-1 w-full p-6 md:p-10 text-white"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 16 }}
      >
        <div className="flex flex-col gap-5 mb-3">
          <span className="text-sm text-[#01ff83] font-semibold bg-[#01ff83]/10 px-3 py-1 rounded-full w-fit">
            {project.label}
          </span>
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </div>

        <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-sm bg-[#06180f]/40 text-gray-300 px-4 py-1.5 rounded-full border border-[#2e7450]/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={project.link}
          className="flex items-center gap-2 text-[#01ff83] hover:text-[#17ff95] transition-colors"
        >
          {project.buttonText}
          <div className="w-6 h-6 flex justify-center items-center bg-[#01ff83] text-[#0f1a11] rounded-full group-hover:translate-x-1 transition-transform duration-300">
            <ChevronRight size={18} />
          </div>
        </Link>
      </motion.div>

      {/* Image Section */}
      <motion.div
        whileHover={{ scale: 1.07 }}
        transition={{ type: "spring", stiffness: 220, damping: 14 }}
        className="flex-1 w-full md:m-2 md:w-[45%] h-56 md:h-72 overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover md:rounded rounded-t-xl"
        />
      </motion.div>
    </motion.div>
  );
}
