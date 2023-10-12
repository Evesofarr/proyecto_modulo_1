/* TODO: INICIO */
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {

        let semana = document.querySelector("#semana");
        let recetaSemana = document.querySelector("#recetaSemana");

        let nombre = document.createElement("h1");
        let texto = document.createElement("p");
        let link = document.createElement("a");
        let foto = document.createElement("img");
        link.target = "_blank";

        nombre.textContent = data.meals[0].strMeal;
        texto.textContent = `This week we have a ${data.meals[0].strArea} ${data.meals[0].strCategory}, the perfect combination meal for you to enjoy it.`;
        foto.src = data.meals[0].strMealThumb
        link.href = data.meals[0].strSource

        recetaSemana.appendChild(texto);
        link.appendChild(foto)
        recetaSemana.appendChild(link)
        semana.appendChild(nombre);
    })

    .catch(error => {
        let fotoerror = document.createElement("img");
        fotoerror.src = "resources/error_random.gif";
        let semana = document.querySelector("#semana");
        favs.appendChild(fotoerror);
    });




/* TODO: RECETAS*/

/*------- TODO: buscador*/

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
buscar.addEventListener("click", function () {
    let buscado = document.querySelector("#buscador");
    let palabra = buscado.value;
});

/*----------- TODO: Recetas random*/
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

            respuestabusqueda.appendChild(nombre);
            respuestabusqueda.appendChild(texto);
            respuestabusqueda.appendChild(link);
            link.appendChild(foto);

        })
        .catch(error => {
            console.log(error);
        });
}

for (let i = 0; i < 10; i++) {
    fetchAndDisplayRandomRecipe();
}
/*------ TODO: Buscadores por tipo*/








// logInButton.addEventListener('click', () => {
//     logInfo.style.display = 'block';
//     signInfo.style.display = 'none';
//     logInButton.style.border = '2px solid black';
//     signInButton.style.border = '1px solid black';
// });

// signInButton.addEventListener('click', () => {
//     signInfo.style.display = 'block';
//     signInButton.style.border = '2px solid black';
//     logInButton.style.border = '1px solid blac';


// });