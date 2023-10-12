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

        semana.appendChild(nombre);
        recetaSemana.appendChild(texto);
        link.appendChild(foto)
        recetaSemana.appendChild(link)
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
let favoriteMeals = []

buscar.addEventListener("click", function () {
    let buscado = document.querySelector("#buscador")
    let palabra = buscado.value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${palabra}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let respuestabusqueda = document.querySelector("#respuestabusqueda");

            let nombre = document.createElement("h1");
            let meGusta = document.createElement("button")
            let noMeGusta = document.createElement("button")
            let texto = document.createElement("p");
            let link = document.createElement("a");
            let foto = document.createElement("img");
            

            //añade clase al button
            meGusta.classList.add("meGustaButton");
            noMeGusta.classList.add("noMeGustaButton");

            nombre.textContent = data.meals[0].strMeal
            meGusta.textContent = "Me Gusta";
            noMeGusta.textContent = "No me Gusta";
            texto.textContent = data.meals[0].strInstructions
            foto.src = data.meals[0].strMealThumb
            link.href = data.meals[0].strSource
            link.target = "_blank";

            while (respuestabusqueda.firstChild) {
                respuestabusqueda.removeChild(respuestabusqueda.firstChild);
            }
            meGusta.addEventListener('click', () => {
            // Verifica si la receta ya está en la lista de favoritos
            let foundIndex = favoriteMeals.findIndex(item => item.receta === data.meals[0].strMeal);
            if (foundIndex === -1) {
            // Si no está en la lista, agrégala
            favoriteMeals.push/*añadir*/({ receta: data.meals[0].strMeal });
        }

            // Guarda la lista actualizada en localStorage
            localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
});


            noMeGusta.addEventListener('click', () => {
            // Encuentra y elimina la receta de la lista de favoritos
            let foundIndex = favoriteMeals.findIndex(item => item.receta === data.meals[0].strMeal);
            if (foundIndex !== -1) {
            favoriteMeals.splice/* Quitar */(foundIndex, 1);

            // Guarda la lista actualizada en localStorage
            localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
    }
});

            respuestabusqueda.appendChild(nombre);
            respuestabusqueda.appendChild(meGusta);
            respuestabusqueda.appendChild(noMeGusta);
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
            let meGusta = document.createElement("button")
            let noMeGusta = document.createElement("button")
            let texto = document.createElement("p");
            let link = document.createElement("a");
            let foto = document.createElement("img");
            link.target = "_blank";
            //añade clase al button
            meGusta.classList.add("meGustaButton");
            noMeGusta.classList.add("noMeGustaButton");

            nombre.textContent = data.meals[0].strMeal;
            meGusta.textContent = "Me Gusta";
            noMeGusta.textContent = "No me Gusta";
            texto.textContent = data.meals[0].strInstructions;
            foto.src = data.meals[0].strMealThumb;
            link.href = data.meals[0].strSource;

            meGusta.addEventListener('click', () => {
                // Verifica si la receta ya está en la lista de favoritos
                let foundIndex = favoriteMeals.findIndex(item => item.receta === data.meals[0].strMeal);
                if (foundIndex === -1) {
                // Si no está en la lista, agrégala
                favoriteMeals.push/*añadir*/({ receta: data.meals[0].strMeal });
            }
    
                // Guarda la lista actualizada en localStorage
                localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
    });
    
    
                noMeGusta.addEventListener('click', () => {
                // Encuentra y elimina la receta de la lista de favoritos
                let foundIndex = favoriteMeals.findIndex(item => item.receta === data.meals[0].strMeal);
                if (foundIndex !== -1) {
                favoriteMeals.splice/* Quitar */(foundIndex, 1);
    
                // Guarda la lista actualizada en localStorage
                localStorage.setItem('favoriteMeals', JSON.stringify(favoriteMeals));
        }
    });

            respuestabusqueda.appendChild(nombre);
            respuestabusqueda.appendChild(meGusta);
            respuestabusqueda.appendChild(noMeGusta);
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