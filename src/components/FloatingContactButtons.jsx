'use client';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end select-none">
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 hover:shadow-2xl hover:shadow-emerald-600/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Tooltip Label */}
        <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>

        {/* WhatsApp SVG Icon */}
        <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.002 3.66 3.745-.993zm11.367-5.836c-.345-.173-2.042-1.007-2.358-1.123-.316-.115-.547-.173-.777.173-.23.346-.893 1.123-1.094 1.354-.201.231-.403.26-.748.087-.346-.173-1.46-.538-2.78-1.716-1.028-.919-1.722-2.054-1.923-2.4-.201-.346-.022-.533.151-.705.156-.155.346-.403.518-.605.173-.202.23-.346.346-.577.115-.231.058-.433-.029-.605-.087-.173-.777-1.872-1.065-2.563-.28-.674-.564-.582-.777-.593-.201-.01-.433-.01-.664-.01-.231 0-.605.087-.922.433-.317.346-1.211 1.184-1.211 2.887 0 1.703 1.24 3.347 1.413 3.577.173.231 2.44 3.726 5.912 5.228.826.357 1.471.57 1.974.73.83.264 1.585.227 2.182.138.666-.099 2.042-.835 2.33-1.642.288-.807.288-1.501.202-1.642-.086-.141-.317-.228-.662-.401z" />
        </svg>
      </a>

      {/* Call Floating Button */}
      <a
        href="tel:+919876543210"
        aria-label="Call Us"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0F172A] text-white shadow-lg shadow-slate-900/30 hover:shadow-2xl hover:shadow-slate-900/50 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {/* Tooltip Label */}
        <span className="absolute right-16 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap pointer-events-none shadow-md">
          Call Us Now
        </span>

        {/* Phone SVG Icon */}
        <svg className="w-6 h-6 sm:w-7 sm:h-7 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      </a>

    </div>
  );
}
