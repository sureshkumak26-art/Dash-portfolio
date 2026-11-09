"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Mail, Menu, X, Sparkles, Code2, Bot, Globe2, Smartphone, Cloud, Radio, Send, Cpu, Layers3 } from "lucide-react";

const projects = [
  { n: "01", title: "Telegram Bot Ecosystem", type: "AUTOMATION / TELEGRAM", desc: "Smart Telegram experiences, bots and mini-app workflows built to connect communities with useful tools.", icon: Send, tags: ["Telegram API", "Node.js", "Automation"], color: "mint" },
  { n: "02", title: "Anime Cloud", type: "CLOUD / HOSTING", desc: "A hosting brand focused on dependable infrastructure, VPS experiences and a clean customer journey.", icon: Cloud, tags: ["Cloud", "VPS", "Dashboard"], color: "violet" },
  { n: "03", title: "Anime Launcher", type: "DESKTOP / APP", desc: "A branded launcher experience designed to make discovering and opening content feel effortless.", icon: Smartphone, tags: ["Desktop", "UI Design", "Apps"], color: "blue" },
  { n: "04", title: "AI Agent Lab", type: "ARTIFICIAL INTELLIGENCE", desc: "Experiments with helpful AI agents that reason through tasks, use tools and automate repeatable work.", icon: Bot, tags: ["AI", "Agents", "Tools"], color: "pink" },
  { n: "05", title: "Web Experiences", type: "WEB DEVELOPMENT", desc: "Responsive websites and interfaces with a strong visual identity, thoughtful details and smooth motion.", icon: Globe2, tags: ["Next.js", "React", "Design"], color: "orange" },
  { n: "06", title: "Mobile & App Builds", type: "APPLICATIONS", desc: "Practical app concepts shaped around simple flows, useful features and polished mobile-first interfaces.", icon: Layers3, tags: ["Apps", "Product", "UX"], color: "cyan" },
  { n: "07", title: "Calling Agent", type: "VOICE / AUTOMATION", desc: "A voice-agent concept for natural conversations, call workflows and hands-free task automation.", icon: Radio, tags: ["Voice AI", "Calling", "Automation"], color: "mint" }
];

const skills = ["AI & Agent Workflows", "Web Development", "App Development", "Telegram Bots", "Cloud & Hosting", "Product UI"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);
  return (
    <main>
      <div className="grain" />
      <nav className="nav wrap">
        <a className="brand" href="#home" onClick={close}><span className="brand-mark">D<span>.</span></span><span>DAKSH<span className="brand-muted"> / PORTFOLIO</span></span></a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#work" onClick={close}>Selected work</a><a href="#about" onClick={close}>About</a><a href="#skills" onClick={close}>Capabilities</a><a href="#contact" onClick={close}>Contact</a>
        </div>
        <a className="nav-cta" href="https://github.com/sureshkumak26-art" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14}/></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      </nav>

      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}><span className="live-dot"/> INDEPENDENT DEVELOPER · DIGITAL CREATOR</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .12 }}>Ideas into<br/><span className="gradient-text">digital reality.</span></motion.h1>
          <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .4, duration: .8 }}>I'm <strong>Daksh Kumar</strong> — I build digital products, intelligent agents and immersive experiences that make the internet more useful.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .55 }}><a className="button button-primary" href="#work">EXPLORE MY WORK <ArrowUpRight size={16}/></a><a className="text-link" href="#contact">LET'S CONNECT <ArrowDown size={14}/></a></motion.div>
          <div className="hero-meta"><span>BASED IN INDIA</span><span className="meta-line"/><span>AVAILABLE FOR NEW IDEAS</span></div>
        </div>
        <motion.div className="orb-stage" initial={{ opacity: 0, scale: .82 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: .2 }}>
          <div className="orb-halo halo-one"/><div className="orb-halo halo-two"/><div className="orb"><div className="orb-shine"/><div className="orb-core"/></div>
          <div className="orbit orbit-a"><i/></div><div className="orbit orbit-b"><i/></div><div className="orbit orbit-c"><i/></div>
          <div className="float-card card-top"><Sparkles size={14}/> <span>CREATIVE<br/>ENGINEERING</span></div>
          <div className="float-card card-bottom"><span className="mini-bars"><i/><i/><i/><i/></span><span>ALWAYS<br/>BUILDING</span></div>
          <span className="orb-caption">FIG. 001 — THE CREATIVE CORE</span>
        </motion.div>
        <a className="scroll-cue" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
      </section>

      <section className="ticker" aria-label="Areas of work"><div className="ticker-track">{["BUILD / CREATE / EXPLORE","AI & AUTOMATION","WEB EXPERIENCES","DIGITAL PRODUCTS","BUILD / CREATE / EXPLORE","AI & AUTOMATION","WEB EXPERIENCES","DIGITAL PRODUCTS"].map((x,i)=><span key={i}>{x}<b>✳</b></span>)}</div></section>

      <section className="section wrap" id="work">
        <div className="section-head"><div><div className="eyebrow">01 / SELECTED WORK</div><h2>Things I've been<br/><span className="muted">bringing to life.</span></h2></div><p className="section-note">A collection of projects, experiments and ideas across software, automation and the cloud.</p></div>
        <div className="project-grid">{projects.map((p,i)=>{const Icon=p.icon;return <motion.article className={`project-card ${p.color}`} key={p.n} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.55,delay:(i%2)*.08}}><div className="project-top"><span>{p.n} / 07</span><span className="project-icon"><Icon size={20}/></span></div><div className="project-art"><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="art-symbol"><Icon size={48} strokeWidth={1.1}/></div><span className="art-index">{p.n}</span></div><div className="project-info"><div className="project-type">{p.type}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div></motion.article>})}</div>
        <p className="project-footnote">PROJECT DETAILS AND LIVE LINKS CAN BE ADDED AS EACH BUILD IS PUBLISHED.</p>
      </section>

      <section className="about-section" id="about"><div className="wrap about-layout"><div className="about-stamp"><div className="stamp-ring">DAKSH · CREATIVE DEVELOPER · DAKSH · CREATIVE DEVELOPER ·</div><div className="stamp-center">D<span>.</span></div></div><div className="about-copy"><div className="eyebrow">02 / A LITTLE ABOUT ME</div><h2>Curiosity is my<br/><span className="gradient-text">favorite tool.</span></h2><p>I enjoy exploring how technology can solve real problems — from Telegram bots and cloud platforms to AI agents, websites and apps. I care about the details, the experience and the feeling a good product leaves behind.</p><p>This portfolio is my evolving digital playground: a place to share what I'm learning, what I'm building and what's next.</p><a className="text-link" href="https://github.com/sureshkumak26-art" target="_blank" rel="noreferrer">MORE ON GITHUB <ArrowUpRight size={14}/></a></div></div></section>

      <section className="section wrap skills-section" id="skills"><div className="eyebrow">03 / WHAT I LIKE TO BUILD</div><div className="section-head skills-head"><h2>From first spark<br/>to <span className="muted">finished product.</span></h2><p className="section-note">A multidisciplinary approach to making ideas useful, usable and memorable.</p></div><div className="skills-grid">{skills.map((s,i)=><div className="skill-row" key={s}><span>0{i+1}</span><strong>{s}</strong><ArrowUpRight size={16}/></div>)}</div></section>

      <section className="contact-section" id="contact"><div className="wrap contact-inner"><div className="eyebrow">04 / HAVE SOMETHING IN MIND?</div><h2>Let's make<br/><span className="gradient-text">it happen.</span></h2><p>Have an idea, a project or just want to say hello? My inbox is open.</p><a className="button button-primary" href="https://github.com/sureshkumak26-art" target="_blank" rel="noreferrer">START A CONVERSATION <Mail size={16}/></a><div className="contact-orb"/></div></section>

      <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">D<span>.</span></span><span>DAKSH<span className="brand-muted"> / PORTFOLIO</span></span></a><span>DESIGNED & BUILT WITH CURIOSITY · 2026</span><div className="footer-links"><a href="https://github.com/sureshkumak26-art" target="_blank" rel="noreferrer"><Github size={17}/></a><a href="https://github.com/sureshkumak26-art" target="_blank" rel="noreferrer"><Mail size={17}/></a></div></footer>
    </main>
  );
}
