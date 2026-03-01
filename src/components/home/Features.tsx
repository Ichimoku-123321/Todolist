import React from 'react';
import { Ghost, Zap, Share2, ShieldCheck, LayoutDashboard } from 'lucide-react';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
    <div className="glass-panel group relative overflow-hidden hover:bg-black/80 transition-all duration-500 rounded-xl flex flex-col
    p-5 sm:p-6 lg:p-8
    3xl:p-10 5xl:p-16 5xl:rounded-3xl
    7xl:p-24 7xl:rounded-[3rem] 9xl:p-40 9xl:rounded-[5rem]
  ">
        <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity
      p-3 sm:p-4
      5xl:p-8 7xl:p-12 9xl:p-20
    ">
            <Ghost className="text-white transform rotate-12
        w-12 h-12 sm:w-16 sm:h-16
        3xl:w-24 3xl:h-24 5xl:w-40 5xl:h-40
        7xl:w-60 7xl:h-60 9xl:w-96 9xl:h-96"
            />
        </div>

        <div className="bg-black border border-white/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:border-amber-500/50 transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] rounded-lg
      w-12 h-12 sm:w-14 sm:h-14
      3xl:w-20 3xl:h-20 3xl:mb-8
      5xl:w-32 5xl:h-32 5xl:mb-12 5xl:rounded-2xl 5xl:border-2
      7xl:w-48 7xl:h-48 7xl:mb-20 7xl:rounded-3xl 7xl:border-4
      9xl:w-80 9xl:h-80 9xl:mb-32 9xl:rounded-[3rem] 9xl:border-8
    ">
            {icon}
        </div>

        <h3 className="font-cinzel font-bold text-white mb-2 sm:mb-3 group-hover:text-amber-400 transition-colors
      text-lg sm:text-xl
      3xl:text-2xl 5xl:text-4xl 5xl:mb-6
      7xl:text-6xl 7xl:mb-10 9xl:text-8xl 9xl:mb-16
    ">{title}</h3>

        <p className="font-inter text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors
      text-xs sm:text-sm
      3xl:text-lg 5xl:text-2xl 5xl:leading-normal
      7xl:text-4xl 7xl:leading-normal 9xl:text-6xl 9xl:leading-normal
    ">
            {desc}
        </p>

        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-500
      5xl:h-[4px] 7xl:h-[6px] 9xl:h-[10px]
    "></div>
    </div>
);

export const Features = () => {
    return (
        <section className="relative bg-gradient-to-b from-transparent via-black/30 to-transparent
      py-16 sm:py-24
      3xl:py-32 5xl:py-60 7xl:py-80 9xl:py-[30rem]
    ">
            <div className="max-w-7xl 3xl:max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center
          mb-12 sm:mb-20
          3xl:mb-32 5xl:mb-52 7xl:mb-80 9xl:mb-[30rem]
        ">
                    <h2 className="font-cinzel font-bold text-white mb-3 sm:mb-4
            text-3xl sm:text-4xl
            3xl:text-5xl 5xl:text-7xl 5xl:mb-10
            7xl:text-9xl 7xl:mb-16 9xl:text-[14rem] 9xl:mb-24
          ">Сила <span className="text-amber-500">Тени</span></h2>
                    <div className="bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto
            h-[2px] w-16 sm:h-1 sm:w-24
            3xl:w-48 5xl:h-2 5xl:w-72
            7xl:h-3 7xl:w-[30rem] 9xl:h-5 9xl:w-[50rem]
          "></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8
          3xl:gap-12 5xl:gap-24 7xl:gap-40 9xl:gap-60
        ">
                    <FeatureCard
                        icon={<Zap className="w-5 h-5 sm:w-6 sm:h-6 3xl:w-10 3xl:h-10 5xl:w-16 5xl:h-16 7xl:w-24 7xl:h-24 9xl:w-40 9xl:h-40 text-amber-400" />}
                        title="Бесплатно"
                        desc="Могущество не продается. Оно берется. Доступ открыт для достойных."
                    />
                    <FeatureCard
                        icon={<Share2 className="w-5 h-5 sm:w-6 sm:h-6 3xl:w-10 3xl:h-10 5xl:w-16 5xl:h-16 7xl:w-24 7xl:h-24 9xl:w-40 9xl:h-40 text-purple-400" />}
                        title="Связи"
                        desc="Распространяй влияние. Делись списками через зашифрованные каналы."
                    />
                    <FeatureCard
                        icon={<ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 3xl:w-10 3xl:h-10 5xl:w-16 5xl:h-16 7xl:w-24 7xl:h-24 9xl:w-40 9xl:h-40 text-amber-400" />}
                        title="Анонимность"
                        desc="Твои данные скрыты в пустоте. Никто не узнает твоих планов."
                    />
                    <FeatureCard
                        icon={<LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6 3xl:w-10 3xl:h-10 5xl:w-16 5xl:h-16 7xl:w-24 7xl:h-24 9xl:w-40 9xl:h-40 text-purple-400" />}
                        title="Контроль"
                        desc="Абсолютный контроль над задачами. Минимализм для максимальной концентрации."
                    />
                </div>
            </div>
        </section>
    );
};