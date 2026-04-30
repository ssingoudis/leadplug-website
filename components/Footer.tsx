"use client";

import Link from "next/link";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-surface border-t border-border px-6 py-10">
        <div className="max-w-300 mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[7px] bg-primary flex items-center justify-center text-white font-bold text-sm font-display">
              S
            </div>
            <span className="font-semibold text-[15px] text-black">SingoTec</span>
          </div>

          <div className="flex gap-6 text-[13px] text-fg-3">
            <Link
              href="/datenschutz"
              className="text-fg-3 no-underline hover:text-black transition-colors duration-150"
            >
              Datenschutz
            </Link>
            <Link
              href="/impressum"
              className="text-fg-3 no-underline hover:text-black transition-colors duration-150"
            >
              Impressum
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="text-fg-3 hover:text-black transition-colors duration-150 bg-transparent border-none p-0 cursor-pointer text-[13px]"
            >
              Kontakt
            </button>
          </div>

          <span className="text-[12px] text-fg-4">© 2025 SingoTec</span>
        </div>
      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
