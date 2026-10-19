'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ContentImage as Image } from '@/components/common/ContentImage';

import {
  Play,
  Search,
  Sparkles,
  MessageSquare,
  ShoppingBag,
  MessageCircle,
  TrendingUp,
  Box,
  MonitorSmartphone,
  Globe
} from 'lucide-react';
import { MainLayout } from '@/components/layout/MainLayout';

export function RecomAIContent() {
  const externalLink = "https://apps.shopify.com/desti-ai-automate-chatbot#modal-show=WriteReviewModal&st_campaign=rate-app&st_source=admin-web&utm_campaign=installed&utm_source=shopify";
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animations
    const ctx = gsap.context(() => {
      // Fade up hero elements
      gsap.fromTo('.gsap-hero-el',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
      );

      // Fade up cards
      gsap.fromTo('.gsap-card',
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-card-container',
            start: 'top 80%',
          }
        }
      );

      // Dashboard sections
      gsap.utils.toArray('.gsap-section').forEach((section: any) => {
        gsap.fromTo(section,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            }
          }
        );
      });

    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);


  return (
    <MainLayout>
      <div ref={containerRef} className="bg-[#FDFDFD] font-sans text-slate-900 overflow-x-hidden pb-10">

        <main className="pt-32">
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-6 pt-10 pb-20 grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="gsap-hero-el inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-light text-accent text-xs font-semibold uppercase tracking-wider mb-8">
                AI Sales Agent For Modern Brands
              </div>
              <h1 className="gsap-hero-el text-4xl lg:text-6xl font-normal tracking-tight text-slate-900 leading-[1.1] mb-6 text-balance">
                Your customers are <span className="text-accent">everywhere.</span> Your <span className="text-slate-900">AI</span> should be too.
              </h1>
              <p className="gsap-hero-el text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                ReCom AI is your 24/7 AI sales agent that helps customers discover, engage, and buy across every channel.
              </p>
              <div className="gsap-hero-el flex flex-wrap items-center gap-4">
                <a href={externalLink} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-primary/20 flex items-center gap-2 border-0">
                  Try ReCom AI <span>&rarr;</span>
                </a>
                <a href={externalLink} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-6 py-3.5 rounded-xl font-medium transition-all flex items-center gap-2 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-olive-light text-accent flex items-center justify-center">
                    <Play size={12} fill="currentColor" />
                  </div>
                  Watch demo
                  <span className="text-slate-400 font-normal ml-1">2 min</span>
                </a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5"><CalendarIcon /> 14-day free trial</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>No credit card required</span>
              </div>
            </div>

            <div className="relative mt-12 lg:mt-0 flex justify-center w-full">
              {/* Abstract Graphic representing Omni-channel AI */}
              <div className="aspect-square w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] rounded-full flex items-center justify-center relative">
                <div className="relative w-24 h-24 md:w-40 md:h-40 rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 overflow-hidden">
                  <Image src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431306/logo_symbol_only.jpg" alt="Recom AI Logo" fill sizes="160px" className="object-cover" />
                </div>

                {/* Orbits & Avatars */}
                <div className="absolute inset-0 rounded-full border border-slate-200/60 animate-[spin_60s_linear_infinite]"></div>
                <div className="absolute inset-6 md:inset-10 rounded-full border border-slate-200/60 animate-[spin_40s_linear_infinite_reverse]"></div>
                <div className="absolute inset-12 md:inset-20 rounded-full border border-slate-200/60"></div>

                <div className="absolute top-[10%] left-[20%] w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                  <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431944/shopify.png" className="w-6 h-6 md:w-8 md:h-8 object-contain" alt="Shopify" />
                </div>
                <div className="absolute top-[5%] right-[25%] w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden border-2 border-white">
                  <img src="https://i.pravatar.cc/150?img=1" alt="User" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="absolute bottom-[25%] right-[5%] w-12 h-12 md:w-16 md:h-16 bg-white rounded-full shadow-lg flex items-center justify-center p-2">
                  <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431846/6b29164a-0238-40ed-ad94-5e126aa7ee0f.png" className="w-full h-full object-contain" alt="Instagram" />
                </div>
                <div className="absolute bottom-[10%] left-[25%] w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center p-2">
                  <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431911/communication.png" className="w-full h-full object-contain" alt="Facebook" />
                </div>
                <div className="absolute top-[40%] right-[-5%] w-10 h-10 md:w-14 md:h-14 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden border-2 border-white">
                  <img src="https://i.pravatar.cc/150?img=5" alt="User" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div className="absolute top-[35%] left-[-2%] w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden p-2">
                  <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431986/wordpress.png" className="w-full h-full object-contain" alt="Wordpress" />
                </div>

                {/* Chat bubbles */}
                <div className="absolute top-[-5%] right-[-5%] md:top-0 md:right-0 bg-white p-3 md:p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-xs md:text-sm text-slate-700 max-w-[150px] md:max-w-[220px] z-20 flex flex-col gap-1 border border-slate-50">
                  <div className="font-medium text-slate-800">Hi! 👋</div>
                  <div>How can I help you?</div>
                </div>
                <div className="absolute bottom-[-5%] left-[-5%] md:bottom-0 md:left-5 bg-white p-3 md:p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-xs md:text-sm text-slate-700 max-w-[200px] md:max-w-[240px] z-20 border border-slate-50">
                  <div className="mb-2 md:mb-3">Sure! Here are some products you might like.</div>
                  <div className="flex gap-2">
                    <div className="relative w-8 h-8 md:w-12 md:h-12 bg-slate-100 rounded-lg overflow-hidden"><Image src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=100&q=80" alt="bag" fill sizes="48px" className="object-cover"/></div>
                    <div className="relative w-8 h-8 md:w-12 md:h-12 bg-slate-100 rounded-lg overflow-hidden"><Image src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80" alt="headphones" fill sizes="48px" className="object-cover"/></div>
                    <div className="relative w-8 h-8 md:w-12 md:h-12 bg-slate-100 rounded-lg overflow-hidden"><Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80" alt="watch" fill sizes="48px" className="object-cover"/></div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Seamless Integrations Bar */}
          <section className="max-w-4xl mx-auto px-6 -mt-10 mb-12 relative z-20">
            <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
              <div className="text-[11px] font-bold text-accent uppercase tracking-widest shrink-0 whitespace-nowrap">
                Seamless Integrations
              </div>
              <div className="flex-1 flex items-center justify-center md:justify-end gap-8 md:gap-16 w-full">
                <div className="flex items-center gap-2">
                  <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431944/shopify.png" className="w-6 h-6 object-contain" alt="Shopify" />
                  <span className="font-semibold text-slate-800">Shopify</span>
                </div>
                <div className="w-px h-8 bg-slate-100 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431846/6b29164a-0238-40ed-ad94-5e126aa7ee0f.png" className="w-6 h-6 object-contain" alt="Instagram" />
                  <span className="font-semibold text-slate-800">Instagram</span>
                </div>
                <div className="w-px h-8 bg-slate-100 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431911/communication.png" className="w-6 h-6 object-contain" alt="Facebook" />
                  <span className="font-semibold text-slate-800">Facebook</span>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Cards Grid */}
          <section className="max-w-7xl mx-auto px-6 py-4">
            <div className="gsap-card-container grid md:grid-cols-3 gap-6">
              {/* Shopify Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between min-h-[420px]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-semibold mb-8">
                    <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431944/shopify.png" className="w-4 h-4 object-contain" alt="Shopify" /> SHOPIFY
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-emerald-600 shrink-0 bg-emerald-50">
                        <Search size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 text-[15px]">Discover</h3>
                        <p className="text-sm text-slate-500">Find the right products</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-emerald-600 shrink-0 bg-emerald-50">
                        <Sparkles size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 text-[15px]">Recommend</h3>
                        <p className="text-sm text-slate-500">Personalized suggestions</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-emerald-600 shrink-0 bg-emerald-50">
                        <MessageSquare size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 text-[15px]">Support</h3>
                        <p className="text-sm text-slate-500">Instant answers, 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-slate-50/80 h-32 rounded-xl p-4 border border-slate-100 relative">
                   <div className="flex gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                   </div>
                   <div className="flex justify-center text-slate-300">
                      <ShoppingBag size={40} strokeWidth={1.5} />
                   </div>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between min-h-[420px]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fce7f3]/50 text-[#db2777] text-sm font-semibold mb-8">
                    <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431846/6b29164a-0238-40ed-ad94-5e126aa7ee0f.png" className="w-4 h-4 object-contain" alt="Instagram" /> INSTAGRAM
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#db2777] shrink-0 bg-[#fce7f3]/50">
                        <Search size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 text-[15px]">Explore</h3>
                        <p className="text-sm text-slate-500">Discover your brand</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#db2777] shrink-0 bg-[#fce7f3]/50">
                        <MessageCircle size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 text-[15px]">Engage</h3>
                        <p className="text-sm text-slate-500">AI-powered conversations</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#db2777] shrink-0 bg-[#fce7f3]/50">
                        <ShoppingBag size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 text-[15px]">Sell</h3>
                        <p className="text-sm text-slate-500">Recommendations that convert</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-slate-50/80 h-32 rounded-xl p-4 border border-slate-100 flex flex-col gap-2">
                   <div className="flex gap-2 h-10">
                     <div className="bg-slate-200 rounded-md flex-1"></div>
                     <div className="bg-slate-200 rounded-md flex-1"></div>
                   </div>
                   <div className="flex gap-2 h-10">
                     <div className="bg-slate-200 rounded-md flex-1"></div>
                     <div className="bg-slate-200 rounded-md flex-1"></div>
                   </div>
                </div>
              </div>

              {/* Facebook Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden flex flex-col justify-between min-h-[420px] ">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8">
                    <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431911/communication.png" className="w-4 h-4 object-contain" alt="Facebook" /> FACEBOOK
                  </div>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-blue-600 shrink-0 bg-blue-50">
                        <Search size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 text-[15px]">Discover</h3>
                        <p className="text-sm text-slate-500">Find & compare products</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-blue-600 shrink-0 bg-blue-50">
                        <MessageSquare size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 text-[15px]">Assist</h3>
                        <p className="text-sm text-slate-500">Resolve queries instantly</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-blue-600 shrink-0 bg-blue-50">
                        <TrendingUp size={16} />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-900 text-[15px]">Upsell</h3>
                        <p className="text-sm text-slate-500">Cross-sell & boost order value</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-slate-50/80 h-32 rounded-xl p-4 border border-slate-100 space-y-3 pt-6">
                   <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-200 shrink-0"></div>
                      <div className="h-4 bg-slate-200 rounded-full flex-1"></div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-200 shrink-0"></div>
                      <div className="h-4 bg-slate-200 rounded-full w-3/4"></div>
                   </div>
                </div>
              </div>
            </div>
          </section>
{/* Logos */}
        <section className="py-12 border-y border-slate-100 bg-white/50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-wider">Trusted by growing brands worldwide</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all">
              {/* Fake logos matching the design visually */}
              <div className="text-2xl font-medium text-slate-800 flex items-center gap-2">
                 <div className="w-6 h-6 rounded-full bg-current"></div> spatz
              </div>
              <div className="text-2xl font-serif text-slate-800">
                 nena<span className="block text-[10px] uppercase tracking-[0.3em] font-sans text-slate-500">jewels</span>
              </div>
              <div className="text-2xl font-light text-slate-800 tracking-widest uppercase">
                 Sakoudo
              </div>
              <div className="text-xl font-semibold text-slate-800 flex flex-col items-center">
                 <svg width="24" height="16" viewBox="0 0 24 16" fill="currentColor"><path d="M12 0L24 16H0L12 0Z"/></svg>
                 HIMALAYAN
              </div>
            </div>
          </div>
        </section>

        {/* Everything you need */}
        <section className="py-24 max-w-7xl mx-auto px-6 text-center">
          <div className="text-accent text-xs font-bold uppercase tracking-wider mb-4">Built to boost every step</div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-16">
            Everything you need to <span className="text-accent">sell smarter</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Grid connecting lines for desktop */}
            <div className="hidden md:block absolute top-8 left-1/8 right-1/8 h-px bg-slate-200 -z-10"></div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-accent mb-6">
                <Box size={24} />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Product Discovery</h3>
              <p className="text-sm text-slate-500 max-w-[200px]">Help customers find the perfect product faster.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-accent mb-6">
                <Sparkles size={24} />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Recommendations That Fit</h3>
              <p className="text-sm text-slate-500 max-w-[200px]">AI-powered suggestions tailored to every shopper.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-accent mb-6">
                <MessageSquare size={24} />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Customer Support</h3>
              <p className="text-sm text-slate-500 max-w-[200px]">Instant, accurate answers to build trust and loyalty.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl shadow-sm flex items-center justify-center text-accent mb-6">
                <ShoppingBag size={24} />
              </div>
              <h3 className="font-medium text-slate-900 mb-2">Upsell & Cross-sell</h3>
              <p className="text-sm text-slate-500 max-w-[200px]">Increase AOV with smart recommendations.</p>
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="gsap-section py-24 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <div className="text-accent text-xs font-bold uppercase tracking-wider mb-4">How it works</div>
            <h2 className="text-4xl font-light tracking-tight text-slate-900 mb-12">
              One <span className="text-accent">AI</span> agent.<br />
              All your channels.
            </h2>

            <div className="space-y-8 relative">
              <div className="absolute left-[11px] top-6 bottom-10 w-0.5 bg-slate-100 -z-10"></div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-[0_0_0_8px_white]">1</div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Connect your channels</h3>
                  <p className="text-sm text-slate-500 flex flex-wrap items-center gap-1.5 mt-1.5">
                    Integrate your
                    <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431944/shopify.png" className="h-4 w-4 object-contain" alt="Shopify" />
                    <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431846/6b29164a-0238-40ed-ad94-5e126aa7ee0f.png" className="h-4 w-4 object-contain" alt="Instagram" />
                    <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788431911/communication.png" className="h-4 w-4 object-contain" alt="Facebook" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Wordpress-Logo.svg" className="h-4 w-4 object-contain" alt="WordPress" />
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-[0_0_0_8px_white]">2</div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Train your AI</h3>
                  <p className="text-sm text-slate-500">ReCom AI learns your products, FAQs & policies.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-[0_0_0_8px_white]">3</div>
                <div>
                  <h3 className="font-medium text-slate-900 mb-1">Let it sell & support</h3>
                  <p className="text-sm text-slate-500">Customers get help, discover products & buy.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-slate-200/50 flex overflow-hidden h-[500px]">
             {/* Sidebar mock */}
             <div className="w-56 bg-slate-900 text-slate-400 p-6 flex flex-col gap-6 text-sm">
                <div className="text-white font-bold flex items-center gap-2 text-lg mb-4">
                  <img src="https://res.cloudinary.com/cjzo6qye/image/upload/f_auto,q_auto/v1788433634/ReComAI_Final_Logo_Dark_Background_with_Text.jpg" alt="ReCom AI" className="h-7 object-contain" />
                </div>
                <div className="flex items-center gap-3 text-white bg-white/10 px-4 py-2.5 rounded-lg"><MonitorSmartphone size={16} /> Overview</div>
                <div className="flex items-center gap-3 px-4 py-2 hover:text-white transition-colors"><MessageSquare size={16} /> Conversations</div>
                <div className="flex items-center gap-3 px-4 py-2 hover:text-white transition-colors"><Sparkles size={16} /> Suggestions</div>
                <div className="flex items-center gap-3 px-4 py-2 hover:text-white transition-colors"><Box size={16} /> Products</div>
                <div className="flex items-center gap-3 px-4 py-2 hover:text-white transition-colors"><TrendingUp size={16} /> Analytics</div>
                <div className="flex items-center gap-3 px-4 py-2 hover:text-white transition-colors mt-auto"><Globe size={16} /> Integrations</div>
                <div className="flex items-center gap-3 px-4 py-2 hover:text-white transition-colors">Settings</div>
             </div>

             {/* Main dashboard mock */}
             <div className="flex-1 bg-slate-50 p-8 flex flex-col gap-6">
                <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800">Overview</span>
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-600">Last 30 days</div>
                    <Image src="https://i.pravatar.cc/150?img=9" alt="Admin" width={32} height={32} className="w-8 h-8 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                   <div className="bg-white p-4 rounded-xl border border-slate-100">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Total Conversations</div>
                      <div className="text-2xl font-medium text-slate-900">12,540</div>
                      <div className="text-xs text-accent font-medium mt-1">+ 18.6%</div>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-slate-100">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Orders Generated</div>
                      <div className="text-2xl font-medium text-slate-900">1,250</div>
                      <div className="text-xs text-accent font-medium mt-1">+ 24.4%</div>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-slate-100">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Revenue Generated</div>
                      <div className="text-2xl font-medium text-slate-900">$45,231</div>
                      <div className="text-xs text-accent font-medium mt-1">+ 31.2%</div>
                   </div>
                   <div className="bg-white p-4 rounded-xl border border-slate-100">
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Conversion Rate</div>
                      <div className="text-2xl font-medium text-slate-900">3.6%</div>
                      <div className="text-xs text-accent font-medium mt-1">+ 12.7%</div>
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-6 flex-1">
                   <div className="col-span-2 bg-white p-6 rounded-xl border border-slate-100 flex flex-col">
                      <div className="text-sm font-semibold text-slate-800 mb-6">Conversations</div>
                      <div className="flex-1 relative flex items-end">
                         {/* Fake Chart */}
                         <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                           <path d="M0,80 C40,80 60,30 100,40 C140,50 160,90 200,60 C240,30 260,10 300,30 C340,50 380,80 400,20" fill="none" stroke="#67793D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                         </svg>
                      </div>
                   </div>
                   <div className="col-span-1 bg-white p-6 rounded-xl border border-slate-100 flex flex-col">
                      <div className="text-sm font-semibold text-slate-800 mb-6">Top Channels</div>
                      <div className="flex-1 flex flex-col items-center justify-center gap-6">
                         <div className="w-24 h-24 rounded-full border-[12px] border-slate-100 border-t-primary border-r-primary border-b-primary"></div>
                         <div className="w-full space-y-2 text-xs">
                            <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-primary"></div> Shopify</span><span className="font-semibold">60%</span></div>
                            <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-pink-500"></div> Instagram</span><span className="font-semibold">25%</span></div>
                            <div className="flex justify-between items-center"><span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-accent"></div> Facebook</span><span className="font-semibold">15%</span></div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Stats & Testimonial */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="text-accent text-xs font-bold uppercase tracking-wider mb-4">Loved by brands</div>
              <h2 className="text-4xl font-light tracking-tight text-slate-900 mb-6">
                Better conversations.<br />
                <span className="text-accent">Better results.</span>
              </h2>
              <p className="text-slate-600 text-lg">
                ReCom AI helps brands deliver amazing experiences that drive more sales.
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div>
                   <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                     <MessageSquare size={20} />
                   </div>
                   <div className="text-2xl font-medium text-slate-900 mb-1">50K+</div>
                   <div className="text-xs text-slate-500">Conversations Handled Daily</div>
                </div>
                <div>
                   <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                     <ShoppingBag size={20} />
                   </div>
                   <div className="text-2xl font-medium text-slate-900 mb-1">2.5M+</div>
                   <div className="text-xs text-slate-500">Products Recommended</div>
                </div>
                <div>
                   <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                     <TrendingUp size={20} />
                   </div>
                   <div className="text-2xl font-medium text-slate-900 mb-1">30%+</div>
                   <div className="text-xs text-slate-500">Increase in Average Order Value</div>
                </div>
                <div>
                   <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                     <Globe size={20} />
                   </div>
                   <div className="text-2xl font-medium text-slate-900 mb-1">24/7</div>
                   <div className="text-xs text-slate-500">Customer Support Automation</div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative">
                 <div className="text-accent text-4xl font-serif leading-none mb-4">&quot;</div>
                 <p className="text-xl font-medium text-slate-800 leading-relaxed mb-8">
                   ReCom AI transformed the way we engage with customers. Our sales and customer satisfaction both skyrocketed!
                 </p>
                 <div className="flex items-center gap-4">
                   <Image src="https://i.pravatar.cc/150?img=32" alt="Priya Sharma" width={48} height={48} className="w-12 h-12 rounded-full" />
                   <div>
                     <div className="font-medium text-slate-900 text-sm">Priya Sharma</div>
                     <div className="text-xs text-slate-500">Marketing Head, Nena Jewels</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="bg-gradient-to-r from-[#F4F5F0] via-white to-[#F4F5F0] rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100/50">
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-white/60 blur-3xl rounded-full"></div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/60 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex items-center gap-8">
               <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center shrink-0 text-accent">
                 <Sparkles size={40} />
               </div>
               <div>
                  <h2 className="text-3xl font-light tracking-tight text-slate-900 mb-2">Ready to transform your customer experience?</h2>
                  <p className="text-slate-600">Start your 14-day free trial on Instagram & Facebook.</p>

                  <div className="flex flex-wrap gap-6 mt-6">
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent"><Sparkles size={14} /></div>
                      <div>
                        <div className="font-semibold">Free to start</div>
                        <div className="text-xs text-slate-500">No credit card</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent"><CalendarIcon /></div>
                      <div>
                        <div className="font-semibold">14-day trial</div>
                        <div className="text-xs text-slate-500">Full access</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-accent"><div className="text-xs font-bold font-serif">X</div></div>
                      <div>
                        <div className="font-semibold">Cancel anytime</div>
                        <div className="text-xs text-slate-500">No questions asked</div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="relative z-10 shrink-0">
               <a href={externalLink} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-primary/20 flex items-center gap-2 text-lg border-0">
                  Try ReCom AI <span>&rarr;</span>
               </a>
            </div>
          </div>
        </section>
      </main>
      </div>
    </MainLayout>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}
