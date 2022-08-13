import App from './projects/App.js';
import { Landing } from './projects/landing/Landing';
import '@res/css/index.styl';
import '@res/css/main.css';
import '@res/js/babelTest';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('app'))
    .render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="*" element={<h1>404. Пустота.</h1>}/>
            </Routes>
        </BrowserRouter>
    );

/* eslint-env node */
if (module.hot) {
    module.hot.accept((err, meta) => {
        console.error('HMR error', meta, err);
    })
}


