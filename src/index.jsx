import './res/css/index.styl';
import './res/css/main.css';

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';


import json from '@/res/bin/test.json';
import img from '@/res/img/nolan.png';
import xml from '@/res/bin/test.xml';
import csv from '@/res/bin/test.csv';
import { Human } from '@/res/js/Human';
import '@/res/js/babelTest';

console.log(`–––> $`, $('html'));

let human = new Human('Dim', 33);
console.log(`–––> human.ts`, human);
console.log(`–––> human.ts getName()`, human.getName());

console.log(`–––> import img ${img}`);

console.log(`–––> import json`, json);

console.log(`–––> import XML`, xml);

console.log(`–––> import CSV`, csv);

const App = () => {
    return (
        <div>
            <h1>React test</h1>
            <div className="ok-box">
                React app rendered
            </div>

            <div>
                <ol>
                    <li><label><input type="checkbox" defaultChecked={true}/> Подключение CSS</label></li>
                    <li><label><input type="checkbox" defaultChecked={true}/> Подключение JS</label></li>
                    <li><label><input type="checkbox" defaultChecked={true}/> Подключение картинок</label></li>
                    <li><label><input type="checkbox" defaultChecked={true}/> Подключение бинарников (XML, CSV)</label></li>
                </ol>
            </div>
        </div>
    );
}
render(<App />, document.getElementById('app'));


if (module.hot) {
    module.hot.accept((err, meta) => {
        console.error('HMR error', meta, err);
    })
}


