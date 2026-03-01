export const CTA = () => {
  return (
      <section className="
      py-16 sm:py-24 md:py-32
      3xl:py-48 5xl:py-80 7xl:py-[30rem] 9xl:py-[50rem]
    ">
        <div className="max-w-5xl 3xl:max-w-6xl 5xl:max-w-[70vw] mx-auto px-4 text-center">
          <div className="glass-panel border-y border-amber-500/20 relative overflow-hidden group
          p-8 sm:p-12 md:p-16
          3xl:p-24
          5xl:p-40 5xl:border-y-4
          7xl:p-60 7xl:border-y-8
          9xl:p-96 9xl:border-y-[16px]
        ">

            <div className="absolute top-0 left-0 bg-amber-500
            w-1 sm:w-2 h-full
            5xl:w-4 7xl:w-8 9xl:w-16
          "></div>
            <div className="absolute top-0 right-0 bg-amber-500
            w-1 sm:w-2 h-full
            5xl:w-4 7xl:w-8 9xl:w-16
          "></div>

            <h2 className="font-cinzel font-bold text-white relative z-10
            text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8
            3xl:text-6xl
            5xl:text-8xl 5xl:mb-16
            7xl:text-[10rem] 7xl:mb-24
            9xl:text-[16rem] 9xl:mb-40
          ">
              Готов принять <span className="text-amber-500 italic font-playfair pr-1 sm:pr-2">вызов?</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light font-inter relative z-10
            text-sm sm:text-base md:text-xl mb-8 sm:mb-10
            3xl:text-2xl
            5xl:text-4xl 5xl:max-w-5xl 5xl:mb-20
            7xl:text-6xl 7xl:max-w-7xl 7xl:mb-32
            9xl:text-8xl 9xl:max-w-[60vw] 9xl:mb-52
          ">
              Мир полон шума. Стань тем, кто слышит тишину. Начни планировать свою империю прямо сейчас.
            </p>

            {/* Responsive CTA Button */}
            <button className="relative z-10 bg-gradient-to-r w-full sm:w-auto from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-black font-cinzel font-bold tracking-widest shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-1 skew-x-[-10deg] cursor-pointer
            py-4 px-6 sm:py-4 sm:px-8 md:py-5 md:px-12 text-sm sm:text-base md:text-lg
            3xl:py-8 3xl:px-20 3xl:text-xl
            5xl:py-12 5xl:px-32 5xl:text-3xl
            7xl:py-20 7xl:px-48 7xl:text-5xl
            9xl:py-32 9xl:px-80 9xl:text-8xl
          ">
              <span className="skew-x-[10deg] inline-block">ИНИЦИАЛИЗАЦИЯ</span>
            </button>
          </div>
        </div>
      </section>
  );
};