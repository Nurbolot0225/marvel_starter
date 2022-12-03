
class MarvelService {
   _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   _apiKey = 'apikey=4fb320737c8f70ebe39b514a80993623'; 

    getResourse = async (url) => {
        let res = await fetch(url); 

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

   getAllCharacters = () => {
        return this.getResourse(`${this._apiBase}characters?limit=9&offset=210&${this.apikey}`); 
   }
   
   getCharacter = (id) => {
        return this.getResourse(`${this._apiBase}characters/${id}?${this.apikey}`); 
   }
}
 
export default MarvelService;