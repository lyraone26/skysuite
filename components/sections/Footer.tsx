import Image from "next/image";

const navLinks = ["Features", "Pricing", "About", "Contact"];

export default function Footer() {
  return (
    <footer className="bg-[#022C55] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Logo — white reversed version for dark navy background */}
          <div className="flex items-center">
            <Image
              src="/brand/Logo-07.png"
              alt="SkySuite"
              width={180}
              height={54}
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Nav links */}
          <div className="flex items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-end">
            <a
              href="#early-access"
              className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Request Early Access
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-slate-400">&copy; 2025 SkySuite. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
