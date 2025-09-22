import Image from "next/image"

export function ResilienceSection() {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-teal-200 to-teal-300 rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-balance">
              Budování odolnosti společně s metodou PSYCH-K®{" "}
              <span className="inline-flex items-center gap-2">
                <svg className="w-8 h-8 text-yellow-500 fill-current" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <svg className="w-6 h-6 text-blue-500 fill-current" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </span>{" "}
              na vaší cestě k well-beingu
            </h2>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full"></div>
          <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/30 rounded-full"></div>
          <div className="absolute top-1/2 right-16 w-8 h-8 bg-white/25 rounded-full"></div>

           <div className="relative z-10 flex justify-center">
             <div className="relative rounded-3xl overflow-hidden max-w-2xl">
                <Image
                  src="/sofiatherapy2.webp"
                  alt="Šťastná rodina sedící společně na pohovce"
                  fill
                  className="object-cover"
                />
             </div>
           </div>
        </div>
      </div>
    </section>
  )
}
