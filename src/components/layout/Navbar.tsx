'use client';

import {
  Menu, X, ArrowUpRight, Rocket, Building2, Landmark, Shield,
  HeartPulse, Globe, TrendingUp, FileText,
  CheckSquare, Activity, Plane,
  Lock, ChevronDown, Car, Package, Store, BookOpen
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { TextRollButton } from '../ui';
import { caseStudiesGrid } from '../../data/pages/insights/case-studies/caseStudiesPageData';
import { blogGridData } from '../../data/pages/insights/blogs/blogPageData';
import { trendGridData } from '../../data/pages/insights/ai-trends/aiTrendsPageData';
import { ebookGridData } from '../../data/pages/insights/ebooks/ebooksPageData';

function byLatestDate<T extends { date?: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    const bTime = b.date ? new Date(b.date).getTime() : 0;
    const aTime = a.date ? new Date(a.date).getTime() : 0;
    return bTime - aTime;
  });
}

// Insights mega-menu: strictly the top 3 latest posts per section — nothing more.
const latestCaseStudyLinks = caseStudiesGrid.studies
  .slice(0, 3)
  .map((s) => ({ title: s.title, icon: Activity, href: s.link }));

const CASE_STUDY_NAV_INDUSTRIES = [
  {
    id: 'parking',
    label: 'Parking',
    icon: Car,
    href: '/insights/case-studies?industry=parking',
  },
  {
    id: 'fintech',
    label: 'Fintech',
    icon: Landmark,
    href: '/insights/case-studies?industry=fintech',
  },
  {
    id: 'aviation',
    label: 'Aviation',
    icon: Plane,
    href: '/insights/case-studies?industry=aviation',
  },
  {
    id: 'healthcare',
    label: 'Healthtech',
    icon: HeartPulse,
    href: '/insights/case-studies?industry=healthcare',
  },
  {
    id: 'retail',
    label: 'eCommerce',
    icon: Store,
    href: '/insights/case-studies?industry=ecommerce',
  },
  {
    id: 'all',
    label: 'All Case Studies',
    icon: Activity,
    href: '/insights/case-studies',
  },
] as const;

const latestBlogLinks = byLatestDate(blogGridData.studies)
  .slice(0, 3)
  .map((b) => ({ title: b.title, icon: FileText, href: b.link }));

const latestTrendLinks = byLatestDate(trendGridData.items)
  .slice(0, 3)
  .map((t) => ({ title: t.title, icon: TrendingUp, href: t.href }));

const latestEbookLinks = ebookGridData.items
  .slice(0, 3)
  .map((e) => ({ title: e.title, icon: BookOpen, href: e.link }));

const NAV_DATA = [
  {
    title: 'AI Product Engineering',
    hasDropdown: true,
    dropdownLinks: [
      { title: 'Startups MVP', icon: Rocket, href: '/services/startup-mvp' },
      { title: 'Mid-level Businesses', icon: Building2, href: '/services/mid-market' },
      { title: 'Enterprise Solutions', icon: Globe, href: '/services/enterprise-solutions' }
    ]
  },
  { 
    title: 'Industries',
    hasDropdown: true,
    href: '/industries',
    dropdownLinks: [
      { title: 'Parking', icon: Car, href: '/industries/parking' },
      { title: 'Fintech', icon: Landmark, href: '/industries/fintech' },
      { title: 'Aviation', icon: Plane, href: '/industries/aviation' },
      { title: 'Healthcare software development', icon: HeartPulse, href: '/industries/healthcare' },
      { title: 'eCommerce', icon: Package, href: '/industries/ecommerce' }
    ]
  },
  {
    title: 'Security & Compliance',
    hasDropdown: true,
    dropdownGroups: [
      {
        title: 'Cybersecurity',
        links: [
          { title: 'AI Security', icon: Shield, href: '/cybersecurity/ai-security' },
          { title: 'Application Security', icon: Lock, href: '/cybersecurity/application-security' },
          { title: 'Shopify App VAPT', icon: Store, href: '/cybersecurity/vapt-shopify-apps' },
        ]
      },
      {
        title: 'Compliance',
        links: [
          { title: 'DPDP Compliance', icon: FileText, href: '/compliance/dpdp' },
          { title: 'VPAT & Accessibility', icon: CheckSquare, href: '/compliance/vpat-accessibility' },
          { title: 'Shopify App VPAT', icon: Store, href: '/compliance/vpat-shopify-apps' },
        ]
      }
    ]
  },
  {
    title: 'Insights',
    hasDropdown: true,
    href: '/insights',
    dropdownGroups: [
      { title: 'Case Studies', links: latestCaseStudyLinks },
      { title: 'Blogs', links: latestBlogLinks },
      { title: 'AI Trends', links: latestTrendLinks },
      { title: 'Ebooks', links: latestEbookLinks },
    ]
  },
  { title: 'About Us', href: '/about' }
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [activeGroupTitle, setActiveGroupTitle] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (title: string, firstGroupTitle?: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredNav(title);
    if (firstGroupTitle) {
      setActiveGroupTitle(firstGroupTitle);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredNav(null);
    }, 250);
  };

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav 
        className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 py-4 flex justify-center pointer-events-none"
      >
        <div className="inline-flex items-center justify-center bg-white/95 backdrop-blur-md rounded-full p-2 pl-6 sm:pl-8 shadow-xl pointer-events-auto border border-stone-200/40 relative gap-8 lg:gap-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity shrink-0">
            <img
              src="https://res.cloudinary.com/cjzo6qye/image/upload/e_trim/v1788875430/Tizora_-_Logo-Sel-F-Typo.png"
              alt="Tizora"
              className="h-auto w-auto max-h-5 sm:max-h-6 max-w-[130px] sm:max-w-[155px]"
              style={{ borderRadius: 0 }}
              fetchPriority="high"
            />
          </Link>

          {/* Center Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 relative">
            {NAV_DATA.map((navItem) => (
              <div 
                key={navItem.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(navItem.title, navItem.dropdownGroups?.[0]?.title)}
                onMouseLeave={handleMouseLeave}
              >
                {(() => {
                  // Headings without a page of their own (e.g. AI Product Engineering) only open their menu.
                  const cls = `flex items-center gap-1.5 px-3 xl:px-4 py-2.5 text-[14.5px] font-medium transition-colors duration-300 rounded-full ${hoveredNav === navItem.title ? 'text-primary bg-gray-50' : 'text-black hover:text-primary'}`;
                  const inner = (
                    <>
                      {navItem.title}
                      {navItem.hasDropdown && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredNav === navItem.title ? 'rotate-180' : ''}`} />
                      )}
                    </>
                  );
                  return navItem.href ? (
                    <Link href={navItem.href} className={cls}>{inner}</Link>
                  ) : (
                    <button
                      type="button"
                      aria-expanded={hoveredNav === navItem.title}
                      onClick={() => handleMouseEnter(navItem.title, navItem.dropdownGroups?.[0]?.title)}
                      className={cls}
                    >
                      {inner}
                    </button>
                  );
                })()}

                {/* Single Column Dropdown Menu */}
                {navItem.hasDropdown && navItem.dropdownLinks && (
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 origin-top ${hoveredNav === navItem.title ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}`}
                  >
                    <div className="bg-white rounded-global shadow-2xl overflow-hidden flex flex-col w-104 p-4 gap-1">
                      {navItem.dropdownLinks.map((link, idx) => (
                        <Link 
                          key={idx} 
                          href={link.href}
                          className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-primary group-hover:bg-white group-hover:shadow-sm transition-all shrink-0">
                            <link.icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1 flex items-center justify-between mt-2.5">
                            <span className="font-medium text-[15px] text-black group-hover:text-[#696e2e] transition-colors">{link.title}</span>
                            <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#696e2e] transition-colors" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Mega Menu Dropdown */}
                {navItem.hasDropdown && navItem.dropdownGroups && (
                  <div 
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 origin-top ${hoveredNav === navItem.title ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'}`}
                  >
                    {(() => {
                      const effectiveGroup =
                        navItem.dropdownGroups.find((g) => g.title === activeGroupTitle) ||
                        navItem.dropdownGroups[0];
                      const isCaseStudies =
                        navItem.title === 'Insights' && effectiveGroup?.title === 'Case Studies';

                      return (
                        <div className="bg-white rounded-global shadow-2xl overflow-hidden flex w-3xl xl:w-240 h-fit">
                          
                          {/* Left Column (Dark) */}
                          <div className="w-[40%] bg-primary p-5 flex flex-col gap-1">
                            {navItem.dropdownGroups.map((group) => (
                              <button
                                key={group.title}
                                onMouseEnter={() => setActiveGroupTitle(group.title)}
                                className={`w-full text-left px-4 py-3 rounded-xl transition-colors ${effectiveGroup?.title === group.title ? 'bg-white text-primary' : 'bg-transparent text-white/80 hover:bg-white/10 hover:text-white'}`}
                              >
                                <div className="font-medium text-[15px]">{group.title}</div>
                              </button>
                            ))}
                          </div>

                          {/* Right Column (Light) */}
                          <div className="w-[60%] bg-white p-7 xl:p-8 flex flex-col justify-center">
                            {isCaseStudies ? (
                              <div className="grid grid-cols-2 gap-3.5 my-auto">
                                {CASE_STUDY_NAV_INDUSTRIES.map((ind) => {
                                  const IconComponent = ind.icon;
                                  return (
                                    <Link
                                      key={ind.id}
                                      href={ind.href}
                                      className="group flex items-center gap-3.5 p-3.5 rounded-2xl bg-gray-50/80 hover:bg-[#003640] transition-all duration-200 border border-gray-100 hover:border-[#003640] hover:shadow-sm"
                                    >
                                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#003640] group-hover:bg-white/15 group-hover:text-white transition-colors shrink-0 shadow-xs">
                                        <IconComponent className="w-5 h-5" />
                                      </div>
                                      <div className="flex-1 flex items-center justify-between min-w-0 pr-1">
                                        <span className="font-medium text-[15px] text-black group-hover:text-white transition-colors truncate">
                                          {ind.label}
                                        </span>
                                        <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                                      </div>
                                    </Link>
                                  );
                                })}
                              </div>
                            ) : (
                              effectiveGroup?.links.map((link, idx) => (
                                <Link 
                                  key={idx} 
                                  href={link.href}
                                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100"
                                >
                                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-primary group-hover:bg-white group-hover:shadow-sm transition-all shrink-0">
                                    <link.icon className="w-5 h-5" />
                                  </div>
                                  <div className="flex-1 flex items-center justify-between mt-2.5">
                                    <span className="font-medium text-[15px] text-black group-hover:text-[#696e2e] transition-colors">{link.title}</span>
                                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#696e2e] transition-colors" />
                                  </div>
                                </Link>
                              ))
                            )}
                          </div>

                        </div>
                      );
                    })()}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTA (Desktop) */}
          <div className="hidden lg:block shrink-0">
            <TextRollButton text="Contact" href="/contact" variant="dark" arrowSize="small" className="pl-5! shadow-sm" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full text-black shrink-0"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-500 lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)} />
        
        <div 
          className={`absolute bottom-0 left-0 right-0 bg-white mx-3 mb-3 rounded-2xl p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${menuOpen ? 'translate-y-0' : 'translate-y-[calc(100%+12px)]'}`}
        >
          <div className="flex justify-end items-center mb-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-9 h-9 bg-gray-100 rounded-full text-[#000000]"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col gap-4 mb-8 overflow-y-auto max-h-[60vh]">
            {NAV_DATA.map((navItem) => (
              <div key={navItem.title} className="flex flex-col">
                <div className="flex items-center justify-between">
                  {navItem.href ? (
                    <Link href={navItem.href} className="text-[24px] leading-8 font-medium text-[#000000]">
                      {navItem.title}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(mobileExpanded === navItem.title ? null : navItem.title)}
                      className="text-left text-[24px] leading-8 font-medium text-[#000000]"
                    >
                      {navItem.title}
                    </button>
                  )}
                  {navItem.hasDropdown && (
                    <button 
                      onClick={() => setMobileExpanded(mobileExpanded === navItem.title ? null : navItem.title)}
                      className="p-2 text-gray-500"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpanded === navItem.title ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                
                {/* Mobile Dropdown Sub-links */}
                {navItem.hasDropdown && mobileExpanded === navItem.title && (
                  <div className="flex flex-col gap-3 mt-3 pl-4 border-l-2 border-gray-100">
                    {/* Render standard dropdown links */}
                    {navItem.dropdownLinks?.map((link, idx) => (
                      <Link key={idx} href={link.href} className="text-[16px] text-black font-medium py-1">
                        {link.title}
                      </Link>
                    ))}
                    
                    {/* Render grouped dropdown links */}
                    {navItem.dropdownGroups?.map((group, idx) => (
                      <div key={idx} className="flex flex-col gap-2 mt-2">
                        <span className="text-[13px] font-bold text-gray-400 uppercase tracking-wider">{group.title}</span>
                        {navItem.title === 'Insights' && group.title === 'Case Studies' ? (
                          <div className="flex flex-col gap-1.5 pl-1">
                            {CASE_STUDY_NAV_INDUSTRIES.map((ind) => (
                              <Link
                                key={ind.id}
                                href={ind.href}
                                onClick={() => setMenuOpen(false)}
                                className="flex items-center justify-between text-[15px] text-black font-medium py-1.5 hover:text-[#696e2e]"
                              >
                                <span className="flex items-center gap-2">
                                  <ind.icon className="w-4 h-4 text-gray-400" />
                                  {ind.label} Case Studies
                                </span>
                                <ArrowUpRight className="w-4 h-4 text-gray-400" />
                              </Link>
                            ))}
                          </div>
                        ) : (
                          group.links.map((link, lIdx) => (
                            <Link key={lIdx} href={link.href} className="text-[15px] text-black font-medium py-1">
                              {link.title}
                            </Link>
                          ))
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <TextRollButton text="Contact" href="/contact" variant="dark" className="w-full justify-between" />
        </div>
      </div>
    </>
  );
}