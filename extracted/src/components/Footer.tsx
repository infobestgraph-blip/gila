import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, ExternalLink, Send } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
      alert('Thank you for subscribing! You will receive harvesting reports and GilaFruit crop availability logs.');
    }, 1200);
  };

  return (
    <footer id="main-footer" className="bg-slate-50 border-t border-slate-200 mt-auto">
      
      {/* Primary Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Column 1: Company Intro (4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 col-span-1">
            <h3 className="font-display text-xl font-bold text-emerald-900 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              GilaFruit
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
              Sabz Gostaran Gilan Fruit Company (GilaFruit) operates premier fresh produce grading facilities, cold storage cellars, and international logistic corridors from Astara and Talesh to global wholesale markets.
            </p>
            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-700">Astara Sorting Plant:</p>
                  <a 
                    href="https://maps.google.com/?q=Astara,+Gilan+Province,+Iran" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-emerald-800 hover:underline flex items-center gap-1 mt-0.5"
                  >
                    Iran, Gilan, Astara
                    <ExternalLink className="w-2.5 h-2.5 inline" />
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-500">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-slate-700">Talesh Fruit Orchards:</p>
                  <a 
                    href="https://maps.google.com/?q=Talesh,+Gilan+Province,+Iran" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-emerald-800 hover:underline flex items-center gap-1 mt-0.5"
                  >
                    Iran, Gilan, Talesh
                    <ExternalLink className="w-2.5 h-2.5 inline" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links (4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 md:pl-6 col-span-1">
            <h4 className="font-display text-sm font-bold text-slate-900 tracking-wide uppercase">
              Useful Links
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm text-left" id="footer-links">
              {[
                { label: 'View the Catalog', hash: '#/catalog' },
                { label: 'Multimedia gallery', hash: '#/product-photo-gallery' },
                { label: 'Company History', hash: '#/history' },
                { label: 'GilaFruit Services', hash: '#/services' },
                { label: 'The Latest News', hash: '#/blog' },
                { label: 'Our Certificates', hash: '#/certificates' },
                { label: 'Product Calendar', hash: '#/calendar' },
                { label: 'Terms and Conditions', hash: '#/terms-and-conditions' }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.hash}
                    className="text-slate-600 hover:text-emerald-850 transition-colors inline-block hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacts (4 columns) */}
          <div className="lg:col-span-4 flex flex-col space-y-4 col-span-1">
            <h4 className="font-display text-sm font-bold text-slate-900 tracking-wide uppercase">
              We are your answer
            </h4>
            <div className="space-y-4 text-xs sm:text-sm" id="footer-contact-info">
              
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 space-y-2 text-left">
                <span className="text-xs font-semibold text-emerald-805 tracking-wider uppercase flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  WhatsApp Contacts:
                </span>
                <div className="space-y-1.5 text-xs text-slate-700 font-medium font-sans">
                  <a
                    href="https://wa.me/989900978002"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-emerald-850 hover:underline transition-all"
                  >
                    +98 990 097 8002 (Russia / EAEU)
                  </a>
                  <a
                    href="https://wa.me/989900978005"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-emerald-850 hover:underline transition-all"
                  >
                    +98 990 097 8005 (MENA Desk)
                  </a>
                  <a
                    href="https://wa.me/989113893051"
                    target="_blank"
                    rel="noreferrer"
                    className="block hover:text-emerald-850 hover:underline transition-all"
                  >
                    +98 911 389 3051 (Astara Dispatch)
                  </a>
                </div>
              </div>

              <div className="space-y-2 pl-1 text-xs">
                <div className="flex items-center gap-2.5 text-slate-600">
                  <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span className="font-sans">
                    Phone: <a href="tel:+982191099091" className="font-semibold text-slate-800 hover:underline">+98 21 9109 9091</a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-600">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    Email: <a href="mailto:info@gilafruit.com" className="font-semibold text-slate-800 hover:underline">info@gilafruit.com</a>
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-600">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    Email: <a href="mailto:support@gilafruit.com" className="font-semibold text-slate-800 hover:underline">support@gilafruit.com</a>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Newsletter Section Placement */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-left max-w-lg md:mr-4">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block">Newsletters</span>
              <h4 className="font-display font-semibold text-base sm:text-md text-white">Subscribe for Harvesting Reports</h4>
              <p className="text-xs text-emerald-100/75 leading-relaxed">
                By subscribing, you will get real-time email notices about harvesting season, product availability catalogs, and cold room storage clearances.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-2.5 shrink-0">
              <input 
                type="email" 
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="px-4 py-2 bg-emerald-900 border border-emerald-800/80 rounded-xl text-xs text-emerald-100 placeholder:text-emerald-200/50 focus:outline-none focus:border-amber-400 w-full sm:w-64"
              />
              <button 
                type="submit"
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 active:scale-95 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer shrink-0 animate-scale-in"
              >
                <Send className="w-3.5 h-3.5" />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Lower Banner */}
        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-4">
          <p>© 2026. All Rights Reserved, Proudly powered by Sabz Gostaran Gilan Fruit Co.</p>
          <div className="flex space-x-4 font-sans">
            <a href="#/admin" className="hover:text-emerald-850 transition-colors font-semibold">Console</a>
            <span>•</span>
            <span className="text-slate-400 font-mono">ESTD 2001</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
