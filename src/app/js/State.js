export class State {

    constructor() {

    }
    
    async getState(search) {
        if(search!=='' && search.length>1){
            //https://restcountries.eu/rest/v2/name/ec
            const URI = `https://restcountries.eu/rest/v2/name/${search}`;
            const response = await fetch(URI);
            // Call the .json() method on your response to get your JSON data
            const data = await response.json();
            return data;
        } else {
            return {}
        }
        
    }
}