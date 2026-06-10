import React, { useState } from 'react';
import { 
  Mail, Phone, MessageSquare, MapPin, Send, 
  CheckCircle2, Building, User, Globe 
} from 'lucide-react';
import { ContactMessage } from '../types';
import { getLocalStorageData, saveLocalStorageData, STORAGE_KEYS } from '../utils/storage';

interface ContactScreenProps {
  onAddMessage: (msg: ContactMessage) => void;
}

export default function ContactScreen({ onAddMessage }: ContactScreenProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate network latency
    setTimeout(() => {
      const newMessage: ContactMessage = {
        id: 'msg_' + Math.random().toString(36).substring(2, 9),
        name,
        email,
        company: company || 'Not specified',
        message,
        date: new Date().toISOString()
      };

      // Store in storage & update parent memory
      const currentMessages = getLocalStorageData<ContactMessage[]>(STORAGE_KEYS.MESSAGES, []);
      const updatedMessages = [newMessage, ...currentMessages];
      saveLocalStorageData(STORAGE_KEYS.MESSAGES, updatedMessages);
      
      onAddMessage(newMessage);

      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form fields
      setName('');
      setEmail('');
      setCompany('');
      setMessage('');
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-[148px] pb-20 animate-fade-in text-left font-sans" id="contact-view">
      
      {/* Intro section */}
      <div className="max-w-3xl space-y-4 mb-16">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          Get In Touch
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-black text-emerald-955 tracking-tight leading-none animate-fade-in">
          Contact GilaFruit Sales Team
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Submit wholesale distribution inquiries, pallet quantity quotations or grading requests. Our EAEU logistics desk handles contracts in English and Russian.
        </p>
      </div>

      {/* Grid of details + interactive form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Left column: Contact Info Details */}
        <div className="lg:col-span-5 space-y-8 text-left">
          
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-extrabold text-slate-950">
              Direct Contact Hotlines
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              If you require instant freight rates or harvesting status for fresh kiwifruit, contact our coordinators directly on WhatsApp:
            </p>
          </div>

          <div className="space-y-4">
            
            {/* WhatsApp direct links */}
            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-150 space-y-3.5">
              <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase flex items-center gap-1.5 leading-none">
                <MessageSquare className="w-4 h-4" />
                WhatsApp Secure Chat:
              </span>
              <div className="space-y-2">
                <a
                  href="https://wa.me/989900978002"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-slate-800 hover:text-emerald-900 font-bold text-xs"
                >
                  🟢 +98 990 097 8002 — Russia & CIS Logistics
                </a>
                <a
                  href="https://wa.me/989900978005"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-slate-800 hover:text-emerald-900 font-bold text-xs"
                >
                  🟢 +98 990 097 8005 — Global & MENA Inquiries
                </a>
              </div>
            </div>

            {/* Calling and Email detail boxes */}
            <div className="space-y-3 pl-1">
              
              <div className="flex gap-3 text-slate-600 text-sm">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-emerald-850 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Central Hotlines</span>
                  <a href="tel:+982191099092" className="font-bold text-slate-800 text-sm hover:underline">
                    +98 21 9109 9091
                  </a>
                </div>
              </div>

              <div className="flex gap-3 text-slate-600 text-sm">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-emerald-850 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold font-sans">Official Email Box</span>
                  <a href="mailto:info@gilafruit.com" className="font-bold text-slate-800 text-sm hover:underline">
                    info@gilafruit.com
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Plant Maps locations */}
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-205 space-y-4">
            <h4 className="font-display font-bold text-slate-900 text-sm">
              Our Central Plant Address
            </h4>
            
            {/* Custom crafted graphical representation of Astara Map */}
            <div className="h-44 bg-slate-200 rounded-xl overflow-hidden relative border border-slate-300 flex items-center justify-center text-center">
              <div className="absolute inset-0 bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
              
              <div className="relative z-10 space-y-1.5 p-4">
                <MapPin className="w-8 h-8 text-emerald-800 mx-auto" />
                <p className="text-xs font-bold text-slate-800">GILAFRUIT GRADING HUB</p>
                <p className="text-[10px] text-slate-500 max-w-sm font-semibold">Astara Customs Terminal & Border Zone Container Yard, Gilan, Iran</p>
                <span className="inline-block px-2.5 py-0.5 bg-emerald-800 text-white rounded text-[9px] font-mono font-bold tracking-tight">
                  GPS: 38.4239° N, 48.8681° E
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Right column: Interactive Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xs text-left">
          
          <h3 className="font-display text-2xl font-black text-slate-900 mb-6">
            Submit Order Inquiry
          </h3>

          {isSuccess ? (
            <div className="py-8 text-center space-y-4 animate-scale-up" id="contact-success-card">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-800 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display font-extrabold text-slate-900 text-lg">Inquiry Recorded Successfully!</h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                Thank you, we secured your sales request. One of our bilingual coordinators (conversant in Russian / English) will formulate a proposal matching your specifications and return within 12 working hours.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 py-2 bg-emerald-800 hover:bg-emerald-700 font-bold text-xs text-white rounded-full cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" id="contact-sales-form">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5 text-left">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Contact Name <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Full Name"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-slate-800 text-xs focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    Corporate Email <span className="text-amber-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. buyer@wholesale.com"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-slate-800 text-xs focus:outline-none"
                    />
                  </div>
                </div>

              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Wholesale Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5" />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. EvroTorg CIS Distributor LLC"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-slate-800 text-xs focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Specifications Message <span className="text-amber-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline types, grades (e.g. 70-80g Hayward Kiwi), packaging requirements, container sizes, and estimated launch schedule..."
                  className="w-full p-4 bg-slate-50/50 border border-slate-300 rounded-xl text-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-800"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-block animate-spin">⏳</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-amber-300" />
                    Transmit wholesale inquiry
                  </>
                )}
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
