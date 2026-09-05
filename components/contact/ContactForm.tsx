"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import confetti from "canvas-confetti";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter."),
  email: z.string().email("Masukkan alamat email yang valid."),
  subject: z.string().min(3, "Subjek minimal 3 karakter."),
  message: z.string().min(10, "Pesan minimal 10 karakter."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate async API server action submit delay
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // fallback if canvas not available
    }

    reset();
  };

  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 shadow-sm relative overflow-hidden">
      {isSubmitted ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in-0 zoom-in-95">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Pesan Berhasil Terkirim!
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
            Terima kasih telah menghubungi saya. Pesan Anda telah diterima dan saya akan membalasnya dalam 24 jam.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-colors"
          >
            Kirim Pesan Lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                Nama Anda <span className="text-blue-500">*</span>
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="John Doe"
                className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border ${
                  errors.name ? "border-rose-500" : "border-zinc-200 dark:border-zinc-800"
                } text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all`}
              />
              {errors.name && (
                <p className="text-[11px] text-rose-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-200">
                Alamat Email <span className="text-blue-500">*</span>
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="john@example.com"
                className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border ${
                  errors.email ? "border-rose-500" : "border-zinc-200 dark:border-zinc-800"
                } text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all`}
              />
              {errors.email && (
                <p className="text-[11px] text-rose-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Subject Input */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-200">
              Subjek <span className="text-blue-500">*</span>
            </label>
            <input
              {...register("subject")}
              type="text"
              placeholder="Kolaborasi Proyek / Lowongan Pekerjaan"
              className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border ${
                errors.subject ? "border-rose-500" : "border-zinc-200 dark:border-zinc-800"
              } text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all`}
            />
            {errors.subject && (
              <p className="text-[11px] text-rose-500">{errors.subject.message}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-900 dark:text-zinc-200">
              Pesan <span className="text-blue-500">*</span>
            </label>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Tuliskan pesan Anda, tujuan proyek, atau informasi posisi..."
              className={`w-full px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-950 border ${
                errors.message ? "border-rose-500" : "border-zinc-200 dark:border-zinc-800"
              } text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none`}
            />
            {errors.message && (
              <p className="text-[11px] text-rose-500">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-98 transition-all disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Mengirim Pesan...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Kirim Pesan</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
