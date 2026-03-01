export const Footer = () => {
    return (
        <footer className="border-t border-amber-900/30 bg-black mt-auto relative overflow-hidden
      py-8 sm:py-10
      3xl:py-16
      5xl:py-24 5xl:border-t-4
      7xl:py-40 7xl:border-t-8
      9xl:py-60 9xl:border-t-[16px]
    ">
            {/* Footer Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 sm:w-1/2 bg-amber-500/5 blur-[30px] sm:blur-[50px] pointer-events-none
        h-10 sm:h-20
        5xl:h-40 5xl:blur-[100px]
        7xl:h-60 7xl:blur-[150px]
        9xl:h-96 9xl:blur-[250px]
      "></div>

            <div className="max-w-7xl 3xl:max-w-[95vw] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left relative z-10">
                <div className="text-slate-600 uppercase tracking-widest font-cinzel
          text-[10px] sm:text-xs
          3xl:text-sm 5xl:text-xl 7xl:text-3xl 9xl:text-5xl
        ">
                    <p className="mb-2 5xl:mb-4 9xl:mb-8">© 2026. Создано во славу истории и кода.</p>
                    <p className="font-bold text-amber-500 tracking-[0.2em] glow-text
            text-xs sm:text-sm
            3xl:text-base 5xl:text-2xl 7xl:text-4xl 9xl:text-6xl
          ">ICHIMOKU N.K. - ВСЕ ПРАВА ЗАЩИЩЕНЫ</p>
                </div>
                <div className="flex flex-col sm:flex-row
          gap-4 sm:gap-8
          3xl:gap-12 5xl:gap-20 7xl:gap-32 9xl:gap-48
        ">
                    <a href="#" className="font-inter text-slate-500 hover:text-amber-400 transition-colors uppercase tracking-wider
            text-[10px] sm:text-xs
            3xl:text-sm 5xl:text-xl 7xl:text-3xl 9xl:text-5xl
          ">Правила Дома</a>
                    <a href="#" className="font-inter text-slate-500 hover:text-amber-400 transition-colors uppercase tracking-wider
            text-[10px] sm:text-xs
            3xl:text-sm 5xl:text-xl 7xl:text-3xl 9xl:text-5xl
          ">Связь с Магистром</a>
                </div>
            </div>
        </footer>
    );
};