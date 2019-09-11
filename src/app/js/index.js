'use strict';
const { UI } =  require ('./UI');
const { State } = require('./State');

import appStyles from '../styles/app.scss';

const ui = new UI();
const state = new State();
// counter for down-up key
let i; // counter

// Search States
async function searchStates(search) {
    const data = await state.getState(search);
    // insert in div search
    const matchList = ui.outputHTML(data);
    // events in matchlist div
    ui.stateSelectedEvents(matchList);
}

const pressKeyDownUp = (e) => {
    const statesSelected = document.querySelectorAll('.match-list div');
    //statesLength = statesSelected.length
    if (e.keyCode==40) {
        selected = statesSelected[i].target;
        ui.addActive(selected)
        search.value = statesSelected[i].innerHTML;
    } 
    else if (e.keyCode == 38) {
        selected = statesSelected[i].target;
        ui.removeActive(selected);
        search.value = statesSelected[i].innerHTML;
    }
    else if (e.keyCode == 13) {
        search.value = statesSelected[i-1].innerHTML;
        matchList.innerHTML = '';

    }
}


// Add new functionality WebkitSpeechRecognition (You can talk and it displays results in search input)
//document.addEventListener('DOMContentLoaded', ui.setVoiceRecognition);

// Begin to press a key
search.addEventListener('input', () => searchStates(search.value) );
// Presskey
//search.addEventListener('keydown', (e) => { pressKeyDownUp(e); });
// When click in X clean the input
ui.clearInput();

