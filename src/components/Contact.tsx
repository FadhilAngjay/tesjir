import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, Clock } from 'lucide-react';
import { ContactFormData, ValidationErrors, validateContactForm } from '../utils/portfolioLogic';

interface ContactProps {
  lang: 'id' | 'en';
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const emailAddress = 'fadiladisaputro123@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate real submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      service: '',
      message: '',
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Info & Value Proposition */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-sm font-bold text-slate-900 tracking-wider uppercase block mb-2">
              {lang === 'id' ? 'Hubungi Saya' : 'Get In Touch'}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight mb-6">
              {lang === 'id' ? 'Mari Wujudkan Ide Hebat Bersama' : "Let's Build Something Exceptional"}
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-8">
              {lang === 'id'
                ? 'Punya proyek baru, ide inovatif, atau ingin mendiskusikan redesain aplikasi Anda? Kirimkan pesan atau hubungi saya langsung melalui email.'
                : 'Have an upcoming project, redesign idea, or want to explore collaboration? Send a message or reach out directly.'}
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* Email Card with Copy button */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#5E3BEE]/10 flex items-center justify-center text-[#5E3BEE]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Email</span>
                    <span className="text-sm font-semibold text-slate-900">{emailAddress}</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  aria-label="Salin alamat email"
                  className="p-2 text-slate-500 hover:text-[#5E3BEE] hover:bg-white rounded-lg transition-colors cursor-pointer border border-transparent hover:border-slate-200"
                >
                  {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">
                    {lang === 'id' ? 'Lokasi' : 'Location'}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    Jakarta, Indonesia · Available Worldwide
                  </span>
                </div>
              </div>

              {/* Turnaround Time */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-indigo-50 text-[#5E3BEE] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">
                    {lang === 'id' ? 'Waktu Respons' : 'Response Time'}
                  </span>
                  <span className="text-sm font-semibold text-slate-900">
                    {lang === 'id' ? 'Rata-rata kurang dari 24 jam' : 'Usually within 24 hours'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {lang === 'id' ? 'Pesan Berhasil Dikirim!' : 'Message Sent Successfully!'}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mb-8">
                      {lang === 'id'
                        ? 'Terima kasih telah menghubungi saya. Saya akan meninjau pesan Anda dan membalas dalam waktu kurang dari 24 jam.'
                        : 'Thank you for reaching out. I have received your message and will respond within 24 hours.'}
                    </p>
                    <button
                      onClick={resetForm}
                      type="button"
                      className="px-6 py-2.5 text-xs font-semibold text-white bg-[#5E3BEE] hover:bg-[#4d2ed4] rounded-lg transition-colors cursor-pointer"
                    >
                      {lang === 'id' ? 'Kirim Pesan Lain' : 'Send Another Message'}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    noValidate
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          {lang === 'id' ? 'Nama Lengkap' : 'Full Name'} *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={lang === 'id' ? 'contoh: John Doe' : 'e.g. John Doe'}
                          className={`w-full px-4 py-3 text-sm rounded-lg border bg-slate-50/50 focus:bg-white transition-colors focus:outline-hidden ${
                            errors.name
                              ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                              : 'border-slate-200 focus:border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE]/20'
                          }`}
                        />
                        {errors.name && (
                          <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>
                        )}
                      </div>

                      {/* Email input */}
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={lang === 'id' ? 'nama@domain.com' : 'name@example.com'}
                          className={`w-full px-4 py-3 text-sm rounded-lg border bg-slate-50/50 focus:bg-white transition-colors focus:outline-hidden ${
                            errors.email
                              ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                              : 'border-slate-200 focus:border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE]/20'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>
                        )}
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        {lang === 'id' ? 'Layanan yang Dibutuhkan' : 'Service Needed'} *
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-sm rounded-lg border bg-slate-50/50 focus:bg-white transition-colors focus:outline-hidden ${
                          errors.service
                            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                            : 'border-slate-200 focus:border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE]/20'
                        }`}
                      >
                        <option value="">
                          {lang === 'id' ? 'Pilih jenis proyek atau keahlian' : 'Select project type or scope'}
                        </option>
                        <option value="uiux">UI & UX Product Design</option>
                        <option value="web">Webflow & Modern Web Development</option>
                        <option value="branding">Brand Identity & Design System</option>
                        <option value="mobile">Mobile App Design (iOS / Android)</option>
                        <option value="consultation">Product Strategy & Advisory</option>
                      </select>
                      {errors.service && (
                        <span className="text-xs text-red-500 mt-1 block">{errors.service}</span>
                      )}
                    </div>

                    {/* Message textarea */}
                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                        {lang === 'id' ? 'Pesan / Rincian Singkat' : 'Message / Brief Details'} *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={
                          lang === 'id'
                            ? 'Ceritakan tentang target proyek, estimasi timeline, atau tantangan yang dihadapi...'
                            : 'Tell me about your project goals, estimated timeline, or current challenges...'
                        }
                        className={`w-full px-4 py-3 text-sm rounded-lg border bg-slate-50/50 focus:bg-white transition-colors focus:outline-hidden resize-none ${
                          errors.message
                            ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                            : 'border-slate-200 focus:border-[#5E3BEE] focus:ring-2 focus:ring-[#5E3BEE]/20'
                        }`}
                      />
                      {errors.message && (
                        <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 text-sm font-semibold text-white bg-[#5E3BEE] hover:bg-[#4d2ed4] active:scale-99 rounded-lg shadow-md shadow-[#5E3BEE]/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#5E3BEE]"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>{lang === 'id' ? 'Kirim Pesan Sekarang' : 'Submit Inquiry'}</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
