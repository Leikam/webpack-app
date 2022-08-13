import csv from '@/res/bin/test.csv';

import json from '@/res/bin/test.json';
import xml from '@/res/bin/test.xml';
import '@/res/css/index.styl';
import '@/res/css/main.css';
import img from '@/res/img/nolan.png';
import '@/res/js/babelTest';
import { Human } from '@/res/js/Human';

import $ from 'jquery';
import React, { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// test eslint warn
let unused = 42;

console.log(`–––> $`, $('html'));

let human = new Human('Dim', 33);
console.log(`–––> human.ts`, human);
console.log(`–––> human.ts getName()`, human.getName());

console.log(`–––> import img ${img}`);

console.log(`–––> import json`, json);

console.log(`–––> import XML`, xml);

console.log(`–––> import CSV`, csv);

let RxJs;
const App = () => {

    let [counter, setCounter] = useState(0);
    let [isLoaded, setIsLoaded] = useState(false);

    useLayoutEffect((...args) => {
        console.log(`–––> useLayoutEffect`, args);

        if (RxJs) {
            RxJs.fromEvent(document.getElementById('incrementer'), 'click')
                .subscribe(() => setCounter(n => n + 1));
        }
    }, [isLoaded])

    function loadRxJs() {
        import('rxjs').then((lib) => {
            setIsLoaded(true);
            RxJs = lib;
        })
    }

    return (
        <div>
            <h1>React experiments</h1>

            <h2>Навигация</h2>
            <nav>
                <ul>
                    <li><Link to="/landing">Лендинг MWP</Link></li>
                </ul>
            </nav>

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

            <div>
                <button onClick={loadRxJs}>load RxJS</button>
                <br/>
                {isLoaded && <button id="incrementer">кликнуть</button>}
                {isLoaded && counter}
            </div>


        </div>
    );
}

export default App;