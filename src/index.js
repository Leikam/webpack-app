import './res/css/main.css';

import $ from 'jquery';

import json from '@/res/bin/test.json';
import img from '@/res/img/nolan.png';
import xml from '@/res/bin/test.xml';
import csv from '@/res/bin/test.csv';
import { Human } from '@/res/js/Human';

console.log(`–––> $`, $('html'));

console.log(`–––> human`, new Human('Dim', 33));

console.log(`–––> import img ${img}`);

console.log(`–––> import json`, json);

console.log(`–––> import XML`, xml);

console.log(`–––> import CSV`, csv);


