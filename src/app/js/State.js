export class State {

    constructor() {

    }
    
    async getState(search) {
        //https://restcountries.eu/rest/v2/name/ec
        if(search!==''){    
            const URI = `https://restcountries.eu/rest/v2/name/${search}`;
            const response = await fetch(URI);
            // Call the .json() method on your response to get your JSON data
            const data = await response.json();
            return data;    
        } else {
            return {
                message: 'No data'
            }
        }
    }
}