'use strict';
const { UI } =  require ('./UI');
const { State } = require('./State');

import appStyles from '../styles/app.scss';

const ui = new UI();
const state = new State();

// Search States
async function searchStates(search) {
    const data = await state.getState(search);
    console.log(data);
}


// Add new functionality WebkitSpeechRecognition (You can talk and it displays results in search input)
//document.addEventListener('DOMContentLoaded', ui.setVoiceRecognition);

// Begin to press a key
search.addEventListener('input', () => searchStates(search.value) );

