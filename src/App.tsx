import { useEffect } from 'react';
import { Header } from './layouts/Header';
import { Footer } from './layouts/Footer';
import { Home } from './pages/Home';

export default function App() {
    // Хук для проверки монтирования
    useEffect(() => {
        console.log('[Shadow Protocol] Компонент App успешно смонтирован!');
    }, []);

    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden relative bg-black">
            <Header />

            <main className="flex-grow pt-16 sm:pt-20 md:pt-24 3xl:pt-32 5xl:pt-48 7xl:pt-64 9xl:pt-96">
                <Home />
            </main>

            <Footer />
        </div>
    );
}