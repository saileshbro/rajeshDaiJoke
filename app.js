const url = "https://api.chucknorris.io/jokes/random";
let joke = "";
const button = document.getElementById('getJoke');
const xhr = new XMLHttpRequest();
function getJoke(){
    xhr.open('GET',url);
    xhr.send();
    xhr.onload = ()=>{
        if(xhr.readyState==4 && xhr.status==200){
            joke = JSON.parse(xhr.responseText).value;
            joke = joke.replace('Chuck','Rajesh');
            joke = joke.replace('Norris','Dai');
            joke = joke.replace('Chuck','Rajesh');
            joke = joke.replace('Norris','Dai');
            joke = joke.replace('Chuck','Rajesh');
            joke = joke.replace('Norris','Dai');
            joke = joke.replace('Chuck','Rajesh');
            joke = joke.replace('Norris','Dai');
            joke = joke.replace('Chuck','Rajesh');
            joke = joke.replace('Norris','Dai');
            document.querySelector('.jokeArea').innerHTML = "";
            document.querySelector('.jokeArea').innerHTML = joke;
        }
    }
}
