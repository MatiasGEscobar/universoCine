
const renderize = () => {
  $.get("https://students-api.up.railway.app/movies", (data,status) => {
    data.forEach((movie) => CreateElement(movie));
  })
};

renderize();
 