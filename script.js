fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let favs = document.querySelector("#favs")
        let favMenu = document.querySelector("#favMenu")

        let nombre = document.createElement("h1")
        let foto = document.createElement("img")

        nombre.textContent = data.meals[0].strMeal
        foto.src = data.meals[0].strMealThumb

        favMenu.appendChild(nombre)
        favs.appendChild(foto)
        favs.appendChild(favMenu)
    });