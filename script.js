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

    
    logInButton.addEventListener('click', () => {
        logInfo.style.display = 'block';
        signInfo.style.display = 'none';
        logInButton.style.border = '2px solid black';
        signInButton.style.border = '1px solid black'
    });
    
    signInButton.addEventListener('click', () => {
        signInfo.style.display = 'block';
        signInButton.style.border = '2px solid black';
        logInButton.style.border = '1px solid black'
        
    });
    
