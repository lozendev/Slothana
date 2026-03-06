import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Play, Twitter, LineChart, ShoppingCart, CheckCircle2, X } from 'lucide-react';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('coming soon');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sloth-purple/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sloth-yellow/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '12s' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="max-w-4xl mx-auto space-y-8"
      >
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-sloth-dark/50 border border-sloth-yellow/20 text-sloth-yellow text-sm font-bold tracking-wider uppercase">
          $SLO • The Sloth Coin
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-sloth-white leading-tight tracking-tight">
          0 to moon in <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sloth-yellow to-sloth-purple">
            4–7 business years.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-sloth-white/70 max-w-2xl mx-auto font-medium">
          No rush. Wallet optional. Enlightenment required.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button 
            onClick={handleCopy}
            className="group relative flex items-center justify-center gap-3 bg-sloth-dark hover:bg-sloth-dark/80 border-2 border-sloth-yellow/30 hover:border-sloth-yellow text-sloth-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 overflow-hidden w-full sm:w-auto"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-sloth-yellow/0 via-sloth-yellow/10 to-sloth-yellow/0 -translate-x-full group-hover:animate-[shimmer_2s_infinite]" />
            <span className="relative z-10">{copied ? 'Copied!' : 'Contract Address'}</span>
            {copied ? <CheckCircle2 className="w-5 h-5 text-green-400 relative z-10" /> : <Copy className="w-5 h-5 text-sloth-yellow relative z-10" />}
          </button>

          <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-sloth-yellow text-sloth-black hover:bg-sloth-yellow/90 px-6 py-4 rounded-full font-bold text-lg transition-colors">
              <ShoppingCart className="w-5 h-5" />
              Buy on Pump
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-sloth-purple text-sloth-white hover:bg-sloth-purple/90 px-6 py-4 rounded-full font-bold text-lg transition-colors">
              <LineChart className="w-5 h-5" />
              View Chart
            </button>
            <button className="flex items-center justify-center bg-sloth-dark hover:bg-sloth-dark/80 border border-sloth-white/10 text-sloth-white w-14 h-14 rounded-full transition-colors shrink-0">
              <Twitter className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Lore = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-sloth-black to-sloth-dark/30 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-sloth-yellow">
              The Sloth Saga: <br/>
              <span className="text-sloth-white">Why We're Here (Eventually)</span>
            </h2>
            <div className="text-lg text-sloth-white/80 space-y-4 leading-relaxed">
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
              className="flex items-center gap-3 text-sloth-yellow hover:text-sloth-white font-bold text-lg group transition-colors pt-4"
            >
              <div className="w-12 h-12 rounded-full bg-sloth-yellow/20 group-hover:bg-sloth-purple/40 flex items-center justify-center transition-colors">
                <Play className="w-5 h-5 fill-current" />
              </div>
              Watch the Trailer
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
              src="https://picsum.photos/seed/slothzen/600/600" 
              alt="Zen Sloth" 
              className="rounded-3xl object-cover w-full h-full border-4 border-sloth-dark/50 shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { emoji: "🐢", text: "The slower the chart moves, the more based it becomes." },
            { emoji: "🗿", text: "Price barely budges? → 'Sloth approved.'" },
            { emoji: "🧘‍♂️", text: "Sideways for 3 weeks? → 'Peak zen.'" },
            { emoji: "🌱", text: "Tiny green candle after 48 hours? → 'We are so back (eventually).'" }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-sloth-dark/40 border border-sloth-white/5 rounded-2xl p-6 hover:bg-sloth-dark/60 transition-colors hover:border-sloth-yellow/30 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">{card.emoji}</div>
              <p className="text-sloth-white/90 font-medium">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
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
                className="absolute top-4 right-4 z-10 p-2 bg-sloth-black/50 hover:bg-sloth-purple rounded-full text-sloth-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="w-full h-full flex items-center justify-center flex-col gap-4">
                <Play className="w-16 h-16 text-sloth-yellow opacity-50" />
                <p className="text-sloth-white/50 font-medium">Video loading... slowly.</p>
              </div>
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
      img: "https://picsum.photos/seed/hammock/800/600",
      align: "left"
    },
    {
      title: "Infinite Patience Pump",
      desc: "While others dump at the first red candle, we thrive on boredom. Sideways action? That's our foreplay.",
      img: "https://picsum.photos/seed/sideways/800/600",
      align: "right"
    },
    {
      title: "Zero Effort Required",
      desc: "No staking, no farming—just hold and watch moss grow. (Pro tip: Check back in 2027 for gains.)",
      img: "https://picsum.photos/seed/moss/800/600",
      align: "left"
    },
    {
      title: "Meme Immunity",
      desc: "Immune to hype cycles. When the market crashes, we're already at rock bottom... chilling.",
      img: "https://picsum.photos/seed/chilling/800/600",
      align: "right"
    }
  ];

  return (
    <section className="py-32 px-4 bg-sloth-black overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-sloth-white mb-6">Why Buy $SLO?</h2>
          <p className="text-xl text-sloth-white/60">Follow the trail of extreme patience.</p>
        </div>

        {features.map((feat, i) => (
          <div key={i} className={`flex flex-col ${feat.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
            <motion.div 
              initial={{ opacity: 0, x: feat.align === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className="flex-1 space-y-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-sloth-yellow">{feat.title}</h3>
              <p className="text-xl text-sloth-white/80 leading-relaxed">{feat.desc}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 w-full"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] group">
                <div className="absolute inset-0 bg-sloth-purple/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={feat.img} 
                  alt={feat.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Roadmap = () => {
  const phases = [
    { year: "2026", title: "Launch", desc: "Deploy contract. Yawn." },
    { year: "2029", title: "Awareness", desc: "Wait for word to spread... organically." },
    { year: "2032", title: "Moon", desc: "Arrive sometime after Bitcoin halves again." },
    { year: "2035", title: "World Domination", desc: "Sloths are the new dogs. Eventually." }
  ];

  return (
    <section className="py-32 px-4 bg-sloth-dark/20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-sloth-yellow mb-6">Don't Hold Your Breath</h2>
          <p className="text-xl text-sloth-white/60">The most realistic roadmap in crypto history.</p>
        </div>

        <div className="relative">
          {/* Extremely long timeline line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sloth-yellow via-sloth-purple to-sloth-dark md:-translate-x-1/2 rounded-full opacity-30" />

          <div className="space-y-24 md:space-y-48">
            {phases.map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-sloth-black border-4 border-sloth-yellow rounded-full flex items-center justify-center md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(255,200,56,0.3)]">
                  <span className="text-sloth-white font-bold text-sm">P{i+1}</span>
                </div>

                <div className="flex-1 w-full pl-20 md:pl-0 md:px-16">
                  <div className={`bg-sloth-dark/50 p-8 rounded-3xl border border-sloth-white/5 hover:border-sloth-purple/50 transition-colors ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="text-sloth-purple font-black text-2xl mb-2">{phase.year}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-sloth-white mb-4">{phase.title}</h3>
                    <p className="text-lg text-sloth-white/70">{phase.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block flex-1" />
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
      img: "https://picsum.photos/seed/wallet/400/400",
      alt: "sloth holding wallet"
    },
    {
      title: "Swap for $SLO on [DEX].",
      img: "https://picsum.photos/seed/swap/400/400",
      alt: "sloth in bank counter exchanging with another sloth"
    },
    {
      title: "Hold forever (or until zen achieved).",
      img: "https://picsum.photos/seed/hold/400/400",
      alt: "sloth holding coin above his head with both claws, beaming with happiness"
    },
    {
      title: "Stare at chart. Realize time is an illusion.",
      img: "https://picsum.photos/seed/chart/400/400",
      alt: "sloth stairing at a computer trading chart"
    }
  ];

  return (
    <section className="py-32 px-4 bg-sloth-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-sloth-white mb-6">How to Buy</h2>
          <p className="text-xl text-sloth-yellow">Step-by-Step (Take Breaks Between Steps)</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-sloth-dark/30 rounded-3xl p-6 border border-sloth-white/5 flex flex-col items-center text-center group hover:bg-sloth-dark/50 transition-colors"
            >
              <div className="w-12 h-12 bg-sloth-purple text-sloth-white rounded-full flex items-center justify-center font-black text-xl mb-6 shadow-lg">
                {i + 1}
              </div>
              <div className="w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-sloth-black">
                <img 
                  src={step.img} 
                  alt={step.alt} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-lg font-bold text-sloth-white/90">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-sloth-dark pt-20 pb-8 px-4 border-t border-sloth-white/5">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-12">
        
        <div className="space-y-6">
          <h2 className="text-4xl font-black text-sloth-yellow tracking-widest">$SLO</h2>
          <div className="flex justify-center">
            <a href="#" className="w-14 h-14 rounded-full bg-sloth-black flex items-center justify-center text-sloth-white hover:text-sloth-yellow hover:scale-110 transition-all border border-sloth-white/10">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="max-w-2xl space-y-4 text-sloth-white/40 text-sm">
          <p>Not financial advice. Sloths may cause drowsiness.</p>
          <p>DYOR... slowly.</p>
        </div>

        <div className="pt-12 w-full border-t border-sloth-white/5 flex justify-center">
          <a 
            href="https://www.lozen.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[10px] tracking-widest text-sloth-white/20 hover:text-sloth-white/50 transition-colors uppercase"
          >
            2026 © LOZENDEV PRJKT
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-sloth-black text-sloth-white selection:bg-sloth-yellow selection:text-sloth-black">
      <Hero />
      <Lore />
      <WhyBuy />
      <Roadmap />
      <HowToBuy />
      <Footer />
    </div>
  );
}
