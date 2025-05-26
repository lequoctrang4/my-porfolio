"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/personal-info";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleContactClick = () => {
    if (mounted) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.section
      className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id="hero"
    >
      <div className="flex-1 space-y-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {personalInfo.name}
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {personalInfo.title}
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {personalInfo.summary}
        </motion.p>
        <div className="flex gap-4 pt-4">
          <Button onClick={handleContactClick}>Contact Me</Button>
          {/* <Button variant="outline" asChild>
            <a href="/resume.pdf" download="Le_Quoc_Trang_CV.pdf">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button> */}
        </div>
      </div>
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Image
          src="https://fashionfushion.s3.ap-southeast-1.amazonaws.com/IMG_2108+copy.jpg"
          alt={personalInfo.name}
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </motion.div>
    </motion.section>
  );
}
