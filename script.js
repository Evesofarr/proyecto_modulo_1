/* TODO: INICIO */
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {

        let semana = document.querySelector("#semana");
        let recetaSemana = document.querySelector("#recetaSemana");

        let nombre = document.createElement("h1");
        let meGusta = document.createElement("button")
        let texto = document.createElement("p");
        let link = document.createElement("a");
        let foto = document.createElement("img");
        link.target = "_blank";
        //añade clase al button
        meGusta.classList.add("meGustaButton");

        nombre.textContent = data.meals[0].strMeal;
        let isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);
        meGusta.textContent = isFavorite ? "❤" : "♡";
        texto.textContent = `This week we have a ${data.meals[0].strArea} ${data.meals[0].strCategory}, the perfect combination meal for you to enjoy it.`;
        foto.src = data.meals[0].strMealThumb
        link.href = data.meals[0].strSource

        meGusta.addEventListener('click', () => {
            // Verifica si la receta está en la lista de favoritos
            const isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);

            if (isFavorite) {
                const foundIndex = favoriteMeals.findIndex(item => item.receta === data.meals[0].strMeal);
                if (foundIndex !== -1) {
                    favoriteMeals.splice(foundIndex, 1);
                    meGusta.textContent = "♡";
                }
            } else {
                favoriteMeals.push({ receta: data.meals[0].strMeal });
                meGusta.textContent = "❤";
            }

            // Guarda la lista actualizada en localStorage
            localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
        });

        recetaSemana.appendChild(texto);
        recetaSemana.appendChild(meGusta);
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


            //añade clase al button
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
                // Verifica si la receta está en la lista de favoritos
                const isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);

                if (isFavorite) {
                    const foundIndex = favoriteMeals.findIndex(item => item.receta === data.meals[0].strMeal);
                    if (foundIndex !== -1) {
                        favoriteMeals.splice(foundIndex, 1);
                        meGusta.textContent = "♡";
                    }
                } else {
                    favoriteMeals.push({ receta: data.meals[0].strMeal });
                    meGusta.textContent = "❤";
                }

                // Guarda la lista actualizada en localStorage
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
            let opciones = document.querySelector("#opciones");

            let contenedor = document.createElement("div")
            let contenido = document.createElement("div")
            let nombre = document.createElement("h1");
            let meGusta = document.createElement("button")
            let link = document.createElement("a");
            let foto = document.createElement("img");
            link.target = "_blank";
            //añade clase al button
            meGusta.classList.add("meGustaButton");

            nombre.textContent = data.meals[0].strMeal;
            let isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);
            meGusta.textContent = isFavorite ? "❤" : "♡";
            foto.src = data.meals[0].strMealThumb;
            link.href = data.meals[0].strSource;

            meGusta.addEventListener('click', () => {
                // Verifica si la receta está en la lista de favoritos
                const isFavorite = favoriteMeals.some(item => item.receta === data.meals[0].strMeal);

                if (isFavorite) {
                    const foundIndex = favoriteMeals.findIndex(item => item.receta === data.meals[0].strMeal);
                    if (foundIndex !== -1) {
                        favoriteMeals.splice(foundIndex, 1);
                        meGusta.textContent = "♡";
                    }
                } else {
                    favoriteMeals.push({ receta: data.meals[0].strMeal });
                    meGusta.textContent = "❤";
                }

                // Guarda la lista actualizada en localStorage
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