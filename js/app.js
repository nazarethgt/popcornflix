const firebaseConfig = {
    apiKey: "AIzaSyDwAZHGvT2jOOHzcuqVklXQ8APoakPhj1g",
    authDomain: "popcornflix-98e70.firebaseapp.com",
    projectId: "popcornflix-98e70",
    storageBucket: "popcornflix-98e70.appspot.com",
    messagingSenderId: "542487496697",
    appId: "1:542487496697:web:c3563dc44ec7579a7c5f28",
    measurementId: "G-D3WF9FQJ0L",
};

firebase.initializeApp(firebaseConfig);

const coleccionPopcornflix = firebase.firestore().collection("Popcornflix");

var inputSearch = document.getElementById("inputSearch")


let dataPopcornflix = [];
var cardMovie = document.getElementById("cardMovie");
var lmv = document.getElementById("lmv");
var portada = document.getElementById("portada")

async function fetchData() {
    const querySnapshot = await coleccionPopcornflix.get();
    querySnapshot.forEach((doc) => {
        dataPopcornflix.push({ ...doc.data(), id: doc.id });
    });
    console.log(dataPopcornflix);
    print(dataPopcornflix);
}

fetchData();
console.log(dataPopcornflix)
function print(dataPopcornflix) {
    if (Array.isArray(dataPopcornflix)) {
        const movieHTML = dataPopcornflix.map(dataMovies =>
            `
            <div class="card-movie"> <!-- esta es la card -->
                <img src="${dataMovies.image}" alt="movie">
                <div class="textCard">
                    <h3>${dataMovies.name}</h3>
                    <p><i class="fa-solid fa-star" style="color: #f0cc19;"></i>${dataMovies.stars}</p>
                </div>
            </div>
            `
        ).join("");

        cardMovie.innerHTML = movieHTML;
    } else {
        // Manejar la situación cuando vinosArray no es un array válido
        console.error("dataPopcornflix no es un array válido:", dataPopcornflix);
    }

    var filtrarMovies = document.getElementById("arrayAFiltrar")
    var searchContainer = document.getElementById("searchContainer")
    
       const filtrar = () => {
        filtrarMovies.innerHTML = '';
        lmv.style.display = "none"
        portada.style.display = "none"
        cardMovie.style.display = "none"
        const text = inputSearch.value.toLowerCase();
        for(let producto of dataPopcornflix){  
        const nombre = producto.name.toLowerCase();
        if(nombre.indexOf(text) !== -1){
                filtrarMovies.innerHTML += //comeinza a imprimir las cards
                
                `
                <div class="card-movie"> <!-- esta es la card -->
                    <img src="${producto.image}" alt="movie">
                    <div class="textCard">
                        <h3>${producto.name}</h3>
                        <p><i class="fa-solid fa-star" style="color: #f0cc19;"></i>${producto.stars}</p>
                    </div>
                </div>
                `
                
            }
        }
    
        if(filtrarMovies === ''){
            filtrarMovies.innerHTML += 
            
            `<li> Product no encontrado</li>`
            
        }
    }
    const inicio = () => {
        lmv.style.display = "block";
        portada.style.display = "block"
        cardMovie.style.display = "flex"
        filtrarMovies.innerHTML = ""
    }
    inputSearch.addEventListener("keyup", filtrar)
    inputSearch.addEventListener("blur", inicio)

 
}











