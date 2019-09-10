export class UI {
    constructor() {
        this.search = document.getElementById('search');
        this.matchList = document.getElementById('match-list');
    }
    setVoiceRecognition() {
        window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
        let finalTranscript = '';
        let recognition = new window.SpeechRecognition();
        recognition.interimResults = true;
        recognition.maxAlternatives = 10;
        recognition.continuous = true;
        recognition.onresult = (event) => {
            let interimTranscript = '';
            for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
            let transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                finalTranscript += transcript;
            } else {
                interimTranscript += transcript;
            }
            }
            this.search.value = finalTranscript + interimTranscript;
        }
        recognition.start();
    }
    // Clear input when click x button
    clearInput() {
        this.search.onkeyup = () => {
            //Show the clear button if text input value is not empty
            let clearBtn = document.querySelector('#clean-icon');
            clearBtn.style.visibility = (this.search.value.length) ? "visible" : "hidden";
            // Hide the clear button on click, and reset the input value
            clearBtn.onclick = function() {
                this.style.visibility = "hidden";
                search.value = "";
            };
        }
    }
    // Display states in matchList div
    outputHTML(states) {
        if( states.length > 0 ){
            // show first 5 results
            if(states.length>=10){
                states = states.slice(1,11);  
            }
            //console.log("Output HTML into the div matchlist: " , states);
            const statediv = states.map(
                state => `
                <div>${state.name}</div>
                `
            ).join('');
            this.matchList.innerHTML = statediv;
        } else {
            this.matchList.innerHTML = "";
        }
        return this.matchList;
    }
    // each state event
    stateSelectedEvents(matchList) {
        const statesSelected = document.querySelectorAll('.match-list div');
        for(let i=0; i<statesSelected.length; i++){
            // OnClick event
            statesSelected[i].addEventListener('click', (e) => {
                let statediv = e.target;
                statediv.classList.add('active');
                this.search.value = statesSelected[i].innerHTML;
                // remove list of states
                matchList.innerHTML = '';
            });
            // Mouseover
            statesSelected[i].addEventListener('mouseover', (e) => { 
                let statediv = e.target;
                statediv.classList.add('active');
            });
            // MouseOut
            statesSelected[i].addEventListener('mouseout', (e) => { 
                let statediv = e.target;
                statediv.classList.remove('active');
            });
        }
    }
}