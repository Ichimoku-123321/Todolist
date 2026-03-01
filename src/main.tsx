import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Обрати внимание, теперь тут дефолтный импорт

console.log('[Shadow Protocol] Скрипт main.tsx запущен. Ищу root...');

const rootElement = document.getElementById('root');

if (!rootElement) {
    console.error('[Ошибка Бездны] Элемент <div id="root"> не найден в index.html!');
} else {
    console.log('[Shadow Protocol] Root найден. Инициализация React...');
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}