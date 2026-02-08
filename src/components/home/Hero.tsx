import { Crown, ArrowRight } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="relative pt-24 pb-32 3xl:pt-40 3xl:pb-52 5xl:pt-60 5xl:pb-80 overflow-hidden flex flex-col justify-center min-h-[85vh]">
      <div className="max-w-7xl 3xl:max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center transition-all duration-500">
        
        {/* Version Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-black/50 border border-amber-500/30 text-amber-400 text-xs tracking-widest font-cinzel mb-10 animate-fade-in-up hover:border-amber-500/60 transition-colors cursor-default select-none rounded-full
          3xl:px-6 3xl:py-3 3xl:text-sm
          5xl:px-10 5xl:py-5 5xl:text-xl 5xl:border-2
          7xl:px-16 7xl:py-8 7xl:text-3xl
          9xl:px-24 9xl:py-12 9xl:text-5xl 9xl:gap-8
        ">
          <Crown size={14} className="text-amber-500 3xl:w-5 3xl:h-5 5xl:w-8 5xl:h-8 7xl:w-12 7xl:h-12 9xl:w-20 9xl:h-20" />
          <span>ICHIMOKU EDITION 2.0</span>
        </div>
        
        {/* Main Title */}
        <h1 className="font-cinzel font-black tracking-tight mb-8 text-white drop-shadow-2xl leading-tight
          text-4xl sm:text-5xl md:text-8xl 
          3xl:text-9xl 
          5xl:text-[11rem] 
          7xl:text-[16rem] 
          9xl:text-[24rem]
        ">
          Управляй своим <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-500 to-amber-200 gold-glow">
            ХАОСОМ
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto font-playfair italic leading-relaxed border-l-2 border-amber-500/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0 text-slate-400
          text-lg sm:text-xl md:text-2xl 
          3xl:text-3xl 3xl:max-w-4xl
          5xl:text-5xl 5xl:max-w-6xl 5xl:mt-12
          7xl:text-7xl 7xl:max-w-7xl 7xl:mt-20
          9xl:text-9xl 9xl:max-w-[80vw] 9xl:mt-32
        ">
          "Истинная сила кроется не в свете, а в умении упорядочить тьму." <br/>
          <span className="font-inter text-slate-500 not-italic mt-2 block
            text-sm 
            3xl:text-lg 
            5xl:text-2xl 
            7xl:text-4xl
            9xl:text-6xl
          ">— ShadowList</span>
        </p>

        <div className="mt-12 5xl:mt-24 7xl:mt-40 9xl:mt-60 flex flex-col md:flex-row justify-center gap-6 items-center px-4">
          <button className="group relative w-full sm:w-auto bg-transparent border border-amber-500 text-amber-500 font-cinzel font-bold hover:text-black transition-colors overflow-hidden gold-border-glow cursor-pointer rounded-sm
            px-6 py-4 text-base 
            sm:px-10 sm:py-5 sm:text-lg 
            3xl:px-14 3xl:py-6 3xl:text-xl 3xl:border-2
            5xl:px-24 5xl:py-10 5xl:text-4xl 5xl:border-4
            7xl:px-32 7xl:py-16 7xl:text-6xl
            9xl:px-60 9xl:py-24 9xl:text-8xl 9xl:border-8
          ">
            <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative z-10 flex items-center justify-center gap-3 5xl:gap-6 9xl:gap-12">
              НАЧАТЬ ПУТЬ <ArrowRight className="w-5 h-5 3xl:w-6 3xl:h-6 5xl:w-10 5xl:h-10 7xl:w-16 7xl:h-16 9xl:w-24 9xl:h-24" />
            </span>
          </button>
          <span className="text-slate-600 font-cinzel
            text-xs sm:text-sm 
            3xl:text-base 
            5xl:text-2xl 
            7xl:text-4xl
            9xl:text-6xl
          ">или оставайся в неведении</span>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none
        w-[300px] h-[300px]
        md:w-[800px] md:h-[800px]
        3xl:w-[1200px] 3xl:h-[1200px]
        5xl:w-[2000px] 5xl:h-[2000px]
        7xl:w-[4000px] 7xl:h-[4000px]
        9xl:w-[6000px] 9xl:h-[6000px]
      " />
    </section>
  )
}