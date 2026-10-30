import Image from "next/image";
import { assetPath } from "@/lib/assets";
import { Github, Linkedin } from "@/components/brand-icons";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personalInfo, contactInfo } from "@/data/personal-info";
import type { Design } from "@/lib/designs";

function PixelScene() {
  return (
    <div className="pixel-scene" aria-label="Pixel developer character">
      <div className="scene-topline"><span>PLAYER_01</span><span>♥ ♥ ♥</span></div>
      <div className="pixel-avatar-stage">
        <Image
          src={assetPath("/avatars/developer-pixel.png")}
          alt="Pixel-art developer with dark hair and lavender and lime accents"
          fill
          sizes="(max-width: 640px) 90vw, 480px"
          className="pixel-avatar"
          priority
        />
      </div>
      <div className="scene-bottomline"><span>CREATIVE MODE</span><span>∞</span></div>
    </div>
  );
}

function TerminalPanel() {
  return (
    <div className="terminal-panel">
      <div className="terminal-title"><span className="window-dots" aria-hidden="true">● ● ●</span><span>trang@portfolio: ~</span><span>zsh</span></div>
      <div className="terminal-output">
        <p><span className="prompt">❯</span> whoami</p>
        <p className="terminal-answer">{personalInfo.name}<br />{personalInfo.title}</p>
        <p><span className="prompt">❯</span> cat stack.json</p>
        <pre>{'{\n  "frontend": ["React", "Next.js"],\n  "mobile": "React Native",\n  "backend": ["Node.js", "NestJS"],\n  "language": "TypeScript"\n}'}</pre>
        <p><span className="prompt">❯</span> <span className="terminal-cursor" aria-hidden="true">▊</span></p>
      </div>
    </div>
  );
}

function StudioPanel() {
  return (
    <div className="studio-panel">
      <div className="studio-panel-top"><span>FROM IDEA TO INTERFACE</span><span>↗</span></div>
      <div className="studio-symbol" aria-hidden="true"><span>✳</span></div>
      <div className="studio-panel-bottom"><span>Web.<br />Mobile.<br />Everything in between.</span><span className="small-orbit" aria-hidden="true">↗</span></div>
    </div>
  );
}

export function HeroSection({ design = "studio" }: { design?: Design }) {
  const pixel = design === "pixel";
  const terminal = design === "terminal";
  return (
    <section id="hero" className="portfolio-hero scroll-mt-24">
      <div className="hero-copy">
        <div className="hero-eyebrow"><span className="status-dot" />{pixel ? "HELLO, WORLD! / PRESS START" : terminal ? "~/portfolio • welcome" : "DEVELOPER & PROBLEM SOLVER"}</div>
        <p className="hero-intro">Hi, I’m {personalInfo.name}.</p>
        <h1>{pixel ? <>I build things.<br /><span>Pixel by pixel.</span></> : terminal ? <>Turning coffee<br />into <span>code.</span></> : <>Thoughtful code.<br /><span>Real impact.</span></>}</h1>
        <p className="hero-summary">{personalInfo.summary}</p>
        <div className="hero-actions">
          <a href="#case-studies" className="hero-primary">{pixel ? "EXPLORE MY QUESTS" : terminal ? "./explore-work" : "Explore my work"}<ArrowUpRight size={18} /></a>
          <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hero-secondary"><Github size={18} />GitHub</a>
        </div>
        <div className="hero-location"><span>BASED IN HO CHI MINH CITY, VN</span><span>REACT · NEXT.JS · REACT NATIVE</span></div>
      </div>
      {pixel ? <PixelScene /> : terminal ? <TerminalPanel /> : <StudioPanel />}
      <a className="hero-scroll" href="#about"><ArrowDown size={14} />{pixel ? "SCROLL TO CONTINUE" : "A little more about me"}</a>
    </section>
  );
}
