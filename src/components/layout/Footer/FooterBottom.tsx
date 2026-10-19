import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '../../../data/common/constants';

const FOOTER_COLUMNS = [
  {
    title: 'COMPANY',
    links: [
      { title: 'Home', href: '/' },
      { title: 'About', href: '/about' },
      { title: 'Industries', href: '/industries' },
      { title: 'Insights', href: '/insights' },
      { title: 'Careers', href: '/careers' },
      { title: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'PRODUCTS',
    links: [
      { title: 'All products', href: '/products' },
      { title: 'ReCom AI', href: '/products/recomai' },
      { title: 'License Plate Recognition', href: '/products/license-plate-recognition' }
    ]
  }
];

export function FooterBottomSection() {
  return (
    <footer 
      data-component-id="C009" 
      data-component-name="Footer"
      className="w-full max-w-360 mx-auto px-5 sm:px-8 lg:px-12 py-8 lg:py-10 border-t border-border/50 bg-background"
    >
      <div className="w-full flex flex-col">
        
        {/* MAIN SECTION: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 mb-6 sm:mb-10">
          
          {/* Col 1: Logo, Description, Social */}
          <div className="lg:col-span-2">
            <img src="https://res.cloudinary.com/cjzo6qye/image/upload/e_trim/v1788875430/Tizora_-_Logo-Sel-F-Typo.png" alt="Tizora" className="h-6 sm:h-7 w-auto mb-4" style={{ borderRadius: 0 }} />
            <p className="text-[13px] text-muted mb-5 leading-relaxed">
              Engineering the future of AI, cloud architecture, and deterministic systems for enterprise businesses.
            </p>
            <div className="flex items-center gap-2.5">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={social.name}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-[8px] bg-white border border-border flex items-center justify-center transition-all duration-200 hover:scale-105 hover:border-primary/40 hover:shadow-xs"
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className={`${social.imgClass} object-contain`}
                  />
                </a>
              ))}
            </div>
          </div>

                    {/* Col 2: Company Links */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="lg:col-span-1">
              <h5 className="text-[12px] font-bold text-primary uppercase tracking-wider mb-4">
                {col.title}
              </h5>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.title}>
                    <Link href={link.href} className="text-[13.5px] font-medium text-primary/80 hover:text-accent transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Col 3: Contact */}
          <div className="lg:col-span-1">
            <h5 className="text-[12px] font-bold text-primary uppercase tracking-wider mb-4">
              Contact
            </h5>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:sales@tizora.ai" className="flex items-center gap-1.5 text-[13.5px] font-medium text-primary/80 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="truncate">sales@tizora.ai</span>
                </a>
              </li>
              <li>
                <a href="tel:+13393376252" className="flex items-center gap-1.5 text-[13.5px] font-medium text-primary/80 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="truncate">+1 339-337-6252</span>
                </a>
              </li>
              <li>
                <a href="tel:+919274737954" className="flex items-center gap-1.5 text-[13.5px] font-medium text-primary/80 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4 shrink-0" />
                  <span className="truncate">+91 92747-37954</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION: Copyright & Legal */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-[13px] text-muted text-center md:text-left">
            © {new Date().getFullYear()} Tizora, Inc. All rights reserved.
          </div>
          {/* Legal Links */}
          <div className="flex items-center gap-4 text-[13px] text-muted">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
            <span className="w-1 h-1 rounded-full bg-border"></span>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
