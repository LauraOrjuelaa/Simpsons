import '../index.css'
import './form.jsx'

function SimpsonsCharacter() {

    const getRandomSimpson = () => {
        return fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1')
        .then(response => response.json())
        .then(data => {
            const simpsonsData = data[0];
            const quoteElement = document.getElementById('simpsons-quote');
            const nameElement = document.getElementById('simpsons-name');
            const imageElement = document.getElementById('simpsons-image');
            const characterDirectionElement = document.getElementById('simpsons-characterDirection');
            quoteElement.textContent = simpsonsData.quote;
            nameElement.textContent = simpsonsData.character;
            imageElement.src = simpsonsData.image;
            characterDirectionElement.textContent = simpsonsData.characterDirection;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    };

    getRandomSimpson();
}

export default SimpsonsCharacter;