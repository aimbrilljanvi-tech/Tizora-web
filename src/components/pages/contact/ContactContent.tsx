import { MainLayout } from '@/components/layout';
import { CTASection } from '@/components/layout/Footer/CTASection';
import { footerData } from '@/data/pages/home/homeData';
import { Locations } from '@/components/sections/C029_Locations';
import { locationData } from '@/data/pages/playground/playgroundData';
import { Mail, Phone, UserCircle2, MessageSquare } from 'lucide-react';

const CONTACT_DEPARTMENTS = [
  {
    title: "Sales & General Inquiries",
    email: "sales@tizora.ai",
    phones: [
      { number: "+91 92747-37954", region: "INDIA" },
      { number: "+1 339-337-6252", region: "US" }
    ],
    icon: MessageSquare,
  },
  {
    title: "Careers & HR",
    email: "hr@tizora.ai",
    phones: [
      { number: "+91 93777-40565", region: "IN" }
    ],
    icon: UserCircle2,
  }
];

export function ContactContent() {
  return (
    <MainLayout>
      <div className="pt-4 lg:pt-8">
        <CTASection heading={footerData.heading} headingAs="h1" />
      </div>

      <div>
        <Locations locations={locationData} />
      </div>

      <section className="w-full max-w-360 mx-auto px-5 sm:px-8 lg:px-12 py-8 lg:py-14 bg-background relative z-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONTACT_DEPARTMENTS.map((dept, idx) => (
            <div key={idx} className="bg-transparent border border-border rounded-2xl p-7 sm:p-8 flex flex-col items-start transition-all duration-200 hover:border-accent/50 hover:shadow-xs">
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center text-accent mb-6">
                <dept.icon className="w-5 h-5" />
              </div>
              <h3 className="text-[20px] font-medium text-primary mb-6">{dept.title}</h3>

              <div className="flex flex-col gap-4 mt-auto w-full">
                <a href={`mailto:${dept.email}`} className="flex items-center gap-3 text-[15px] font-medium text-primary/80 hover:text-accent transition-colors">
                  <Mail className="w-4.5 h-4.5 text-muted shrink-0" />
                  <span>{dept.email}</span>
                </a>

                <div className="h-px w-full bg-border/80 my-1"></div>

                <div className="flex flex-col gap-3">
                  {dept.phones.map((phone, pIdx) => (
                    <a key={pIdx} href={`tel:${phone.number.replace(/[^0-9+]/g, '')}`} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3 text-[15px] font-medium text-primary/80 group-hover:text-accent transition-colors">
                        <Phone className="w-4.5 h-4.5 text-muted shrink-0" />
                        <span className="truncate">{phone.number}</span>
                      </div>
                      <span className="text-[11px] font-bold tracking-wider uppercase bg-accent/10 border border-accent/20 text-accent px-2.5 py-1 rounded-md shrink-0">
                        {phone.region}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
