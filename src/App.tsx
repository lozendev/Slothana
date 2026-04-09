import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Play, LineChart, ShoppingCart, CheckCircle2, X as XIcon } from 'lucide-react';

const XLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 3.827H5.078z" /></svg>
);

const Nav = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-start justify-between p-4 md:px-8">
      <div className="flex flex-col items-center justify-center w-24">
        <img src="/Prof/rounded.png" alt="Logo" className="w-16 h-16 object-contain" onError={(e) => { e.currentTarget.src = '/Slothana/Prof/rounded.png'; }} />
        <a href="https://www.lozen.dev" target="_blank" rel="noopener noreferrer" className="text-[7.5px] leading-tight uppercase font-bold tracking-widest text-sloth-white/30 hover:text-sloth-white transition-colors mt-1 text-center w-full block">LOZENPRJKT#3</a>
      </div>

      <div className="hidden md:flex flex-col items-center mt-2 gap-4">
        <div className="flex items-center gap-8 bg-sloth-dark/40 backdrop-blur-md px-8 py-3 rounded-full border border-sloth-white/10">
          <a href="#about" className="text-sloth-white/80 hover:text-sloth-yellow transition-colors font-bold tracking-wide">About</a>
          <a href="#why-buy" className="text-sloth-white/80 hover:text-sloth-yellow transition-colors font-bold tracking-wide">Why $SLO?</a>
          <a href="#roadmap" className="text-sloth-white/80 hover:text-sloth-yellow transition-colors font-bold tracking-wide">Roadmap</a>
          <a href="#how2buy" className="text-sloth-white/80 hover:text-sloth-yellow transition-colors font-bold tracking-wide">How2Buy</a>
        </div>
        <div className="inline-block px-5 py-1.5 rounded-full bg-sloth-dark/50 border border-sloth-white/10 text-sloth-yellow text-sm font-black tracking-[0.4em] uppercase backdrop-blur-md shadow-lg">
          $SLO - SLOTHANA
        </div>
      </div>

      <div className="mt-2 w-24 flex justify-end">
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-sloth-dark/50 hover:bg-sloth-white hover:text-sloth-black text-sloth-white transition-all border border-sloth-white/10">
          <XLogo />
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('coming soon');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col justify-end text-center px-4 pb-[15px] pt-32 relative overflow-hidden">
      <Nav />
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <img src="/Prof/heroBG.jpg" onError={(e) => { e.currentTarget.src = '/Slothana/Prof/heroBG.jpg'; }} className="w-full h-full object-cover object-top" alt="Hero Background" />
        <div className="absolute inset-0 bg-gradient-to-t from-sloth-black via-sloth-black/60 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto space-y-8 relative z-10 w-full pt-64"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-sloth-white leading-[0.9] tracking-tight">
          0 to moon in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sloth-yellow to-sloth-purple">
            4–7 business years.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-sloth-white/90 max-w-2xl mx-auto font-medium drop-shadow-md">
          No rush. Wallet optional. Enlightenment required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleCopy}
            className="group relative flex items-center justify-center gap-3 bg-sloth-dark hover:bg-sloth-dark/80 border-2 border-sloth-yellow/30 hover:border-sloth-yellow text-sloth-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-sloth-yellow/0 via-sloth-yellow/10 to-sloth-yellow/0 -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <span className="relative z-10">{copied ? 'Copied!' : 'Contract Address'}</span>
            {copied ? <CheckCircle2 className="w-5 h-5 text-green-400 relative z-10" /> : <Copy className="w-5 h-5 text-sloth-yellow relative z-10" />}
          </button>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <a href="https://www.pump.fun" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-sloth-yellow text-sloth-black hover:bg-sloth-yellow/90 px-6 py-4 rounded-full font-bold text-lg transition-colors">
              <ShoppingCart className="w-5 h-5" />
              Buy on Pump
            </a>
            <a href="https://www.dexscreener.com" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-sloth-purple text-sloth-white hover:bg-sloth-purple/90 px-6 py-4 rounded-full font-bold text-lg transition-colors">
              <LineChart className="w-5 h-5" />
              View Chart
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Lore = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="py-24 px-4 bg-sloth-black relative overflow-hidden">
      {/* Jungle Background barely visible */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.07] mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-sloth-black via-transparent to-sloth-black" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-sloth-yellow drop-shadow-lg">
              The Sloth Saga: <br />
              <span className="text-sloth-white">Why We're Here (Eventually)</span>
            </h2>
            <div className="text-lg text-sloth-white/90 space-y-4 leading-relaxed mix-blend-plus-lighter">
              <p>
                Picture this: Crypto's a jungle gym of apes swinging wildly, dogs barking at pumps, and cats flipping rugs. But deep in the canopy, one sloth clings on, unbothered.
              </p>
              <p>
                $SLO isn't about FOMO or diamond hands—it's about mossy claws and eternal chill. Born from the ashes of 5-minute moons, this token whispers: <em>'Haste makes waste... and rugs.'</em>
              </p>
              <p>
                We're the antidote to adrenaline junkies, proving that true gains come to those who wait (or nap). No hype trains here—just a slow crawl to infinity. Join the sloth revolution: where patience isn't a virtue, it's the pump.
              </p>
            </div>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-3 text-sloth-yellow hover:text-sloth-white font-bold text-lg group transition-colors pt-4 drop-shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-sloth-yellow/20 group-hover:bg-sloth-purple/40 flex items-center justify-center transition-colors">
                <Play className="w-5 h-5 fill-current" />
              </div>
              Speech! (Dramatic)
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-sloth-purple to-sloth-yellow rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDuration: '10s' }} />
            <img
              src="/Iconography/upside.jpg"
              alt="Upside Down Sloth"
              className="rounded-3xl object-cover w-full h-full border-4 border-sloth-dark/50 shadow-2xl relative z-10"
              onError={(e) => { e.currentTarget.src = '../Iconography/upside.jpg'; }}
            />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { text: "The slower the chart moves, the more based it becomes.", bg: "/Iconography/sq1.jpg" },
            { text: "Price barely budges? → 'Sloth approved.'", bg: "/Iconography/sq2.jpg" },
            { text: "Sideways for 3 weeks? → 'Peak zen.'", bg: "/Iconography/sq3.jpg" },
            { text: "Tiny green candle after 48 hours? → 'We are so back (eventually).'", bg: "/Iconography/sq4.jpg" }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="relative rounded-2xl p-6 overflow-hidden group border border-sloth-white/10 hover:border-sloth-yellow/40 transition-all min-h-[220px] flex flex-col justify-center text-center"
            >
              <div className="absolute inset-0 z-0 bg-sloth-dark">
                <img src={card.bg} alt={`Card background ${i}`} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500" onError={(e) => { e.currentTarget.src = card.bg.replace('/', '../'); }} />
                <div className="absolute inset-0 bg-gradient-to-t from-sloth-dark/80 via-sloth-dark/50 to-sloth-dark/80" />
              </div>
              <div className="relative z-10">
                <p className="text-sloth-white font-semibold text-lg drop-shadow-md">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-sloth-black/90 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-4xl aspect-video bg-sloth-dark rounded-2xl overflow-hidden border border-sloth-white/10 shadow-2xl">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 bg-sloth-black/50 hover:bg-sloth-purple rounded-full text-sloth-white transition-colors"
              >
                <XIcon className="w-6 h-6" />
              </button>
              <video
                className="w-full h-full object-contain"
                controls
                autoPlay
                src="/SlothVidmp42.webm"
                onError={(e) => { e.currentTarget.src = '/Slothana/SlothVidmp42.webm'; }}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const WhyBuy = () => {
  const features = [
    {
      title: "Anti-Rug Guarantee",
      desc: "Rugs happen fast. We can't even move that quick. Your funds? Safer than a sloth in a hammock.",
      img: "/Iconography/w1.jpg",
      align: "left"
    },
    {
      title: "Infinite Patience Pump",
      desc: "While others dump at the first red candle, we thrive on boredom. Sideways action? That's our foreplay.",
      img: "/Iconography/w2.jpg",
      align: "right"
    },
    {
      title: "Zero Effort Required",
      desc: "No staking, no farming—just hold and watch moss grow. (Pro tip: Check back in 2027 for gains.)",
      img: "/Iconography/w3.jpg",
      align: "left"
    },
    {
      title: "Meme Immunity",
      desc: "Immune to hype cycles. When the market crashes, we're already at rock bottom... chilling.",
      img: "/Iconography/w4.jpg",
      align: "right"
    }
  ];

  return (
    <section id="why-buy" className="py-32 px-4 bg-sloth-black relative overflow-hidden">
      {/* Barely visible palms/leaves background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933067-c836c699e327?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05] mix-blend-screen" />

      <div className="max-w-6xl mx-auto space-y-32 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-sloth-white mb-6">Why Buy $SLO?</h2>
          <p className="text-xl text-sloth-white/60">Follow the trail of extreme patience.</p>
        </div>

        <div className="relative">
          {/* Subtle dotted line connecting features */}
          <div className="absolute left-1/2 top-10 bottom-10 w-[2px] border-l-2 border-dotted border-sloth-yellow/30 -translate-x-1/2 hidden md:block" />

          {features.map((feat, i) => (
            <div key={i} className={`flex flex-col ${feat.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center relative mb-32 last:mb-0`}>
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-sloth-yellow rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#FFD147] hidden md:block" />

              <motion.div
                initial={{ opacity: 0, x: feat.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className={`flex-1 space-y-6 z-10 bg-sloth-black/60 p-8 rounded-3xl backdrop-blur-sm border border-sloth-white/5 ${feat.align === 'left' ? 'md:text-right' : 'md:text-left'}`}
              >
                <h3 className="text-3xl md:text-4xl font-bold text-sloth-yellow drop-shadow-md">{feat.title}</h3>
                <p className="text-xl text-sloth-white/90 leading-relaxed font-medium">{feat.desc}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`flex-1 w-full relative z-0 ${feat.align === 'left' ? 'md:pl-12' : 'md:pr-12'}`}
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group border-2 border-transparent hover:border-sloth-yellow/50 transition-colors">
                  <div className="absolute inset-0 bg-sloth-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img
                    src={feat.img}
                    alt={feat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    onError={(e) => { e.currentTarget.src = feat.img.replace('/', '../'); }}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const phases = [
    { year: "2026", title: "Launch", desc: "Deploy contract. Yawn.", status: "completed" },
    { year: "2029", title: "Awareness", desc: "Wait for word to spread... organically.", status: "active" },
    { year: "2032", title: "Moon", desc: "Arrive sometime after Bitcoin halves again.", status: "pending" },
    { year: "2035", title: "World Domination", desc: "Sloths are the new dogs. Eventually.", status: "pending" }
  ];

  return (
    <section id="roadmap" className="py-32 px-4 bg-sloth-black relative overflow-hidden">
      {/* Subtle jungle background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-[0.03] mix-blend-screen" />
      {/* Dynamic animated glow background */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-sloth-yellow/10 to-sloth-purple/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-sloth-purple/20 text-sloth-purple font-bold tracking-widest rounded-full uppercase text-sm mb-4 border border-sloth-purple/30"
          >
            The Path Forward
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-sloth-white mb-6">Don't Hold Your Breath</h2>
          <p className="text-xl text-sloth-white/60">The most realistic roadmap in crypto history. It's a marathon, not a sprint.</p>
        </div>

        <div className="relative mt-20">
          {/* Glowing timeline line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sloth-yellow via-sloth-purple to-sloth-black md:-translate-x-1/2 rounded-full opacity-50 shadow-[0_0_10px_rgba(255,200,56,0.5)]" />

          <div className="space-y-16 md:space-y-32">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="relative flex flex-col items-start gap-8 md:block"
              >
                {/* Timeline Dot */}
                <div className={`absolute left-[28px] md:left-1/2 w-14 h-14 rounded-full flex items-center justify-center -translate-x-1/2 z-10 transition-all duration-500
                  ${phase.status === 'completed' ? 'bg-sloth-yellow border-4 border-sloth-black shadow-[0_0_20px_rgba(255,200,56,0.6)]' :
                    phase.status === 'active' ? 'bg-sloth-black border-4 border-sloth-yellow shadow-[0_0_20px_rgba(255,200,56,0.3)] animate-pulse' :
                      'bg-sloth-black border-4 border-sloth-white/20'}`}
                >
                  {phase.status === 'completed' ? (
                    <CheckCircle2 className="w-6 h-6 text-sloth-black" />
                  ) : (
                    <span className="text-sloth-white font-bold text-sm">P{i + 1}</span>
                  )}
                </div>

                <div className={`w-full pl-20 md:w-1/2 md:px-0 ${i % 2 === 0 ? 'md:pl-16 md:ml-auto' : 'md:pr-16 md:mr-auto'}`}>
                  <div className={`group bg-gradient-to-br from-sloth-dark to-sloth-black p-8 rounded-3xl border border-sloth-white/10 hover:border-sloth-yellow/50 transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="absolute inset-0 bg-sloth-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="text-sloth-purple font-black text-2xl mb-2 tracking-wider">{phase.year}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-sloth-white mb-4 group-hover:text-sloth-yellow transition-colors">{phase.title}</h3>
                      <p className="text-lg text-sloth-white/70">{phase.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HowToBuy = () => {
  const steps = [
    {
      title: "Get a wallet (e.g., Phantom).",
      img: "/Iconography/wallet.png",
      alt: "sloth holding wallet"
    },
    {
      title: "Swap for $SLO on [DEX].",
      img: "/Iconography/laptop.png",
      alt: "sloth in bank counter exchanging with another sloth"
    },
    {
      title: "Hold forever (or until zen achieved).",
      img: "/Iconography/6.png",
      alt: "sloth holding coin above his head with both claws, beaming with happiness"
    },
    {
      title: "Stare at chart. Realize time is an illusion.",
      img: "/Iconography/5.png",
      alt: "sloth stairing at a computer trading chart"
    }
  ];

  return (
    <section id="how2buy" className="py-32 px-4 bg-sloth-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-6xl font-black text-sloth-white mb-6">How to Buy</h2>
          <p className="text-xl text-sloth-yellow font-medium">Step-by-Step (Take Breaks Between Steps)</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-sloth-dark/50 backdrop-blur-sm rounded-3xl p-6 border border-sloth-white/10 flex flex-col items-center text-center group hover:bg-sloth-dark transition-all hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] hover:border-sloth-yellow/30"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-sloth-purple to-sloth-dark text-sloth-white rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-[0_5px_15px_rgba(102,51,153,0.3)] group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-sloth-black/50 p-4 border border-sloth-white/5">
                <img
                  src={step.img}
                  alt={step.alt}
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 hover:drop-shadow-2xl"
                  onError={(e) => { e.currentTarget.src = step.img.replace('/', '../'); }}
                />
              </div>
              <h3 className="text-lg font-bold text-sloth-white/90 leading-tight">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-sloth-black pt-20 pb-8 px-4 border-t border-sloth-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-sloth-yellow/50 to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12 relative z-10">

        <div className="space-y-6">
          <h2 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sloth-yellow to-sloth-purple tracking-[0.2em] ml-2">$SLO</h2>
          <div className="flex justify-center">
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-sloth-dark flex items-center justify-center text-sloth-white hover:text-sloth-black hover:bg-sloth-white hover:scale-110 transition-all border border-sloth-white/10 shadow-lg">
              <XLogo />
            </a>
          </div>
        </div>

        <div className="max-w-2xl space-y-4 text-sloth-white/50 text-sm font-medium">
          <p>Not financial advice. Sloths may cause drowsiness.</p>
          <p>DYOR... slowly.</p>
        </div>

        <div className="pt-12 w-full border-t border-sloth-white/10 flex justify-center">
          <a
            href="https://www.lozen.dev" target="_blank" rel="noopener noreferrer"
            className="text-[10px] tracking-widest text-sloth-white/30 hover:text-sloth-yellow transition-colors uppercase font-bold"
          >
            2026 © LOZENPRJKT#3
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-sloth-black text-sloth-white selection:bg-sloth-yellow selection:text-sloth-black font-['Nunito']">
      <Hero />
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.02] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        <div className="relative z-10">
          <Lore />
          <WhyBuy />
          <Roadmap />
          <HowToBuy />
          <Footer />
        </div>
      </div>
    </div>
  );
}
