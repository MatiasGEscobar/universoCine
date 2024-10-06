const movieContainer = document.getElementsByClassName("container-fluid")[0];


$.get("https://students-api.up.railway.app/movies")
.done((data,status) => {
    const arrayHtmlCard = data.map(CreateElement);
    arrayHtmlCard.forEach((movie) => movieContainer.appendChild(movie));
  })
.fail((error) => {
  alert("excepción en cargar los archivos desde la API, se utilizan los datos guardados");
  const arrayHtmlCard = tempData.map(CreateElement);
    arrayHtmlCard.forEach((movie) => movieContainer.appendChild(movie));
})
 
