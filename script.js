fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let favs = document.querySelector("#favs");
        let favMenu = document.querySelector("#favMenu");

        let nombre = document.createElement("h1");
        let texto = document.createElement("p");
        let link = document.createElement("a");
        let foto = document.createElement("img");

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
        // let fotoerror = document.createElement("img");
        // fotoerror.src = "resources/error_random.gif"; 
        // favs.appendChild(fotoerror);
    });