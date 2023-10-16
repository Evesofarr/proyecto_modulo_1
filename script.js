/* TODO: INICIO */
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {

        let semana = document.querySelector("#semana");
        let recetaSemana = document.querySelector("#recetaSemana");

        let nombre = document.createElement("h2");
        let recipe = document.createElement("h1")
        let meGusta = document.createElement("button")
        let texto = document.createElement("p");
        let link = document.createElement("a");
        let foto = document.createElement("img");
        link.target = "_blank";

        meGusta.classList.add("meGustaButton");

        nombre.textContent = data.meals[0].strMeal;
        let isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);
        meGusta.textContent = isFavorite ? "❤" : "♡";
        recipe.textContent = "RECIPE OF THE WEEK..."
        texto.textContent = `This week we have a ${data.meals[0].strArea} ${data.meals[0].strCategory}, the perfect combination meal for you to enjoy it.`;
        foto.src = data.meals[0].strMealThumb
        link.href = data.meals[0].strSource

        meGusta.addEventListener('click', () => {

            let isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);

            if (isFavorite) {
                let foundIndex = favoriteMeals.findIndex(item => item.receta === data.meals[0].strMeal);
                if (foundIndex !== -1) {
                    favoriteMeals.splice(foundIndex, 1);
                    meGusta.textContent = "♡";
                }
            } else {
                favoriteMeals.push({
                    receta: data.meals[0].strMeal
                });
                meGusta.textContent = "❤";
            }

            localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
        });

        recetaSemana.appendChild(texto);
        recetaSemana.appendChild(meGusta);
        link.appendChild(foto)
        semana.appendChild(recipe)
        recetaSemana.appendChild(link)
        recetaSemana.appendChild(nombre);
    })

    .catch(error => {
        let fotoerror = document.createElement("img");
        fotoerror.src = "resources/ERROR.gif";
        let semana = document.querySelector("#semana");
        favs.appendChild(fotoerror);
    });




/* TODO: RECETAS*/

/*------- TODO: buscador*/

let buscar = document.querySelector("#buscar")
let favoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];


buscar.addEventListener("click", function () {
    let buscado = document.querySelector("#buscador")
    let palabra = buscado.value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${palabra}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let respuestabusqueda = document.querySelector("#respuestabusqueda");

            let contenidobusqueda = document.createElement("div")
            let nombre = document.createElement("h1");
            let meGusta = document.createElement("button")
            let texto = document.createElement("p");
            let link = document.createElement("a");
            let foto = document.createElement("img");



            meGusta.classList.add("meGustaButton");

            nombre.textContent = data.meals[0].strMeal

            let isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);
            meGusta.textContent = isFavorite ? "❤" : "♡";

            texto.textContent = data.meals[0].strInstructions
            foto.src = data.meals[0].strMealThumb
            link.href = data.meals[0].strSource
            link.target = "_blank";

            while (respuestabusqueda.firstChild) {
                respuestabusqueda.removeChild(respuestabusqueda.firstChild);
            }
            meGusta.addEventListener('click', () => {

                let isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);

                if (isFavorite) {
                    let foundIndex = favoriteMeals.findIndex(item => item.receta === data.meals[0].strMeal);
                    if (foundIndex !== -1) {
                        favoriteMeals.splice(foundIndex, 1);
                        meGusta.textContent = "♡";
                    }
                } else {
                    favoriteMeals.push({
                        receta: data.meals[0].strMeal
                    });
                    meGusta.textContent = "❤";
                }

                localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
            });
            respuestabusqueda.appendChild(contenidobusqueda);
            contenidobusqueda.appendChild(meGusta);
            respuestabusqueda.appendChild(nombre)
            contenidobusqueda.appendChild(texto);
            contenidobusqueda.appendChild(link);
            link.appendChild(foto);
        })
        .catch(error => {
            console.log(error);
            let fotoerror = document.createElement("img");
            fotoerror.src = "resources/ERROR.gif";
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
            let opciones = document.querySelector("#opciones");

            let contenedor = document.createElement("div")
            let contenido = document.createElement("div")
            let nombre = document.createElement("h1");
            let meGusta = document.createElement("button")
            let link = document.createElement("a");
            let foto = document.createElement("img");
            link.target = "_blank";

            meGusta.classList.add("meGustaButton");

            nombre.textContent = data.meals[0].strMeal;
            let isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);
            meGusta.textContent = isFavorite ? "❤" : "♡";
            foto.src = data.meals[0].strMealThumb;
            link.href = data.meals[0].strSource;

            meGusta.addEventListener('click', () => {

                let isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);

                if (isFavorite) {
                    let foundIndex = favoriteMeals.findIndex(item => item.receta === data.meals[0].strMeal);
                    if (foundIndex !== -1) {
                        favoriteMeals.splice(foundIndex, 1);
                        meGusta.textContent = "♡";
                    }
                } else {
                    favoriteMeals.push({
                        receta: data.meals[0].strMeal
                    });
                    meGusta.textContent = "❤";
                }


                localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
            });


            opciones.appendChild(contenedor)
            contenedor.appendChild(contenido)
            contenedor.appendChild(nombre);
            contenido.appendChild(meGusta);
            contenido.appendChild(link);
            link.appendChild(foto);

        })
        .catch(error => {
            console.log(error);
            let fotoerror = document.createElement("img");
            fotoerror.src = "resources/error_random.gif";
            let respuestabusquedas = document.querySelector("#respuestabusqueda");
            respuestabusquedas.appendChild(fotoerror);
        });
}

for (let i = 0; i < 20; i++) {
    fetchAndDisplayRandomRecipe();
}
/*------ TODO: likes*/

function mostrarComidasFavoritas() {
    let favoriteMeals = JSON.parse(localStorage.getItem('favoriteMeals')) || [];
    let respuestabusqueda = document.querySelector("#respuestabusqueda");

    while (respuestabusqueda.firstChild) {
        respuestabusqueda.removeChild(respuestabusqueda.firstChild);
    }

    favoriteMeals.forEach(favoriteMeal => {
        let mealName = favoriteMeal.receta;

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let contenidobusqueda = document.createElement("div");
                let nombre = document.createElement("h1");
                let meGusta = document.createElement("button");
                let link = document.createElement("a");
                let foto = document.createElement("img");

                meGusta.classList.add("meGustaButton");

                nombre.textContent = data.meals[0].strMeal;

                let isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);
                meGusta.textContent = isFavorite ? "❤" : "♡";

                foto.src = data.meals[0].strMealThumb;
                link.href = data.meals[0].strSource;
                link.target = "_blank";

                meGusta.addEventListener('click', () => {
                    const isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);

                    if (isFavorite) {
                        let foundIndex = favoriteMeals.findIndex(item => item.receta === data.meals[0].strMeal);
                        if (foundIndex !== -1) {
                            favoriteMeals.splice(foundIndex, 1);
                            meGusta.textContent = "♡";
                        }
                    } else {
                        favoriteMeals.push({
                            receta: data.meals[0].strMeal
                        });
                        meGusta.textContent = "❤";
                    }

                    localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
                });

                respuestabusqueda.appendChild(contenidobusqueda);
                contenidobusqueda.appendChild(meGusta);
                respuestabusqueda.appendChild(nombre);
                contenidobusqueda.appendChild(link);
                link.appendChild(foto);
            })
            .catch(error => {
                console.log(error);
                let fotoerror = document.createElement("img");
                fotoerror.classList.add("gifError");
                fotoerror.src = "resources/ERROR.gif";
                let respuestabusquedas = document.querySelector("#respuestabusqueda");
                respuestabusquedas.appendChild(fotoerror);
            });
    });
}

let botonLikes = document.querySelector("#likes");
botonLikes.addEventListener("click", mostrarComidasFavoritas);

mostrarComidasFavoritas();