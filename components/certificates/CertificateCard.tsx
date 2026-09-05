"use client";

import { useState } from "react";
import Image from "next/image";
import { Certificate } from "@/data/certificates";
import { Award, ExternalLink, Calendar, CheckCircle, Eye, X } from "lucide-react";

interface CertificateCardProps {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="group rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
        <div className="relative w-full h-44 bg-zinc-900 overflow-hidden">
          <Image
            src={certificate.image}
            alt={certificate.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
          <div className="absolute top-3 right-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-600/90 text-white backdrop-blur-md flex items-center gap-1">
              <Award className="w-3 h-3" />
              Terverifikasi
            </span>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider">
              {certificate.issuer}
            </span>
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mt-1 mb-2">
              {certificate.title}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {certificate.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between gap-2 text-xs">

            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-blue-500 hover:text-blue-400 transition-colors"
            >
              <span>Lihat Sertifikat</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal Preview */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-6 text-zinc-100 space-y-4 animate-in fade-in-0 zoom-in-95">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-full h-56 rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                {certificate.issuer}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                {certificate.title}
              </h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                Credential ID: {certificate.credentialId}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
              <span className="text-xs text-zinc-400 flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                Kredensial Terverifikasi Resmi
              </span>

              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-2"
              >
                <span>Verifikasi Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
