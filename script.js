/* TODO: INICIO */
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {

        let favs = document.querySelector("#favs");
        let favMenu = document.querySelector("#favMenu");

        let nombre = document.createElement("h1");
        let texto = document.createElement("p");
        let link = document.createElement("a");
        let foto = document.createElement("img");
        link.target = "_blank";

        nombre.textContent = data.meals[0].strMeal;
        texto.textContent = `This week we have a ${data.meals[0].strArea} ${data.meals[0].strCategory}, the perfect combination meal for you to enjoy it.`;
        foto.src = data.meals[0].strMealThumb
        link.href = data.meals[0].strSource

        favs.appendChild(nombre);
        favMenu.appendChild(texto);
        link.appendChild(foto)
        favMenu.appendChild(link)
    })

    .catch(error => {
        let fotoerror = document.createElement("img");
        fotoerror.src = "resources/error_random.gif";
        let favs = document.querySelector("#favs");
        favs.appendChild(fotoerror);
    });



/* TODO: RECETAS*/

let buscar = document.querySelector("#buscar")

buscar.addEventListener("click", function () {
    let buscado = document.querySelector("#buscador")
    let palabra = buscado.value

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${palabra}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let respuestabusqueda = document.querySelector("#respuestabusqueda");

            let nombre = document.createElement("h1");
            let texto = document.createElement("p");
            let link = document.createElement("a");
            let foto = document.createElement("img");

            nombre.textContent = data.meals[0].strMeal
            texto.textContent = data.meals[0].strInstructions
            foto.src = data.meals[0].strMealThumb
            link.href = data.meals[0].strSource
            link.target = "_blank";

            while (respuestabusqueda.firstChild) {
                respuestabusqueda.removeChild(respuestabusqueda.firstChild);
            }

            respuestabusqueda.appendChild(nombre);
            respuestabusqueda.appendChild(texto);
            respuestabusqueda.appendChild(foto);
            respuestabusqueda.appendChild(link);

        })
        .catch(error => {
            console.log(error);
            let fotoerror = document.createElement("img");
            fotoerror.src = "resources/error_random.gif";
            let respuestabusquedas = document.querySelector("#respuestabusqueda");
            respuestabusquedas.appendChild(fotoerror);
        });
});


function fetchAndDisplayRandomRecipe() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let respuestabusqueda = document.querySelector("#respuestabusqueda");

            let nombre = document.createElement("h1");
            let texto = document.createElement("p");
            let link = document.createElement("a");
            let foto = document.createElement("img");
            link.target = "_blank";

            nombre.textContent = data.meals[0].strMeal;
            texto.textContent = data.meals[0].strInstructions;
            foto.src = data.meals[0].strMealThumb;
            link.href = data.meals[0].strSource;
            // link.textContent = "Ver receta";

            respuestabusqueda.appendChild(nombre);
            respuestabusqueda.appendChild(texto);
            respuestabusqueda.appendChild(foto);
            respuestabusqueda.appendChild(link);
        })
        .catch(error => {
            console.log(error);
        });
}

// Fetch and display 10 random recipes when the page loads
for (let i = 0; i < 10; i++) {
    fetchAndDisplayRandomRecipe();
}


// let buscar = document.querySelector("#buscar");
buscar.addEventListener("click", function () {
    let buscado = document.querySelector("#buscador");
    let palabra = buscado.value;
});