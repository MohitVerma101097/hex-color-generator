const hexNumbers = [0,1,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const hexBtn = document.querySelector('.hexBtn');
const bodyBcg = document.querySelector('body');
const hex = document.querySelector('.hex')


const getHex = () => {
    let hexColor = '#';

    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random()*hexNumbers.length)
        //console.log(random)
        hexColor += hexNumbers[random];
        console.log(hexColor) 
    }
    bodyBcg.style.backgroundColor = hexColor;
    hex.innerHTML = hexColor;

}

hexBtn.addEventListener('click', getHex)
