const container = document.querySelector('.container');
//GET https://icanhazdadjoke.com/   this is the api used to get jokes

const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');


function getJokes() {
    const setHeader = {
        headers : {
            Accept: "application/json"    
        }
    }
    fetch('https://icanhazdadjoke.com/', setHeader)
    .then ( (response)=> response.json())
    .then ( (data)=> {
        jokes.innerHTML = data.joke;    //data.joke from response
     })
    .catch ( ( error)=> {
        console.console(error)          //if fetch fails
    })
}
jokeBtn.addEventListener('click', getJokes);
getJokes();     //for first joke on site we call it here




//SAME THING WITH ASYNC AWAIT
// async function getJokes(){
//     try{
//     const setHeader = {
//         headers : {
//             Accept: "application/json"    
//         }
//     }
//     let response = await fetch('https://icanhazdadjoke.com/', setHeader)
//     const data  =  await response.json();
//     jokes.innerHTML = data.joke; 

//     }
//     catch(err) {
//         console.log(error);
//     }

// }

// jokeBtn.addEventListener('click', getJokes);
// getJokes();









