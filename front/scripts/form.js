const axios = require("axios");

const formJs = () => {
    $(document).ready(function() {
        const form = document.querySelector('.needs-validation');
        const clearButton = document.getElementById('clearForm');
        
        $('#genres').select2({
            placeholder: 'Seleccione uno o más géneros',
            width: '100%'
        });

        $('#posterUrl').on('change', function() {
            const url = $(this).val();
            const preview = $('#posterPreview');
            if (url) {
                preview.attr('src', url).removeClass('d-none');
            } else {
                preview.addClass('d-none');
            }
        });

        function validateForm(event) {
            event.preventDefault();
            
            const formData = {
                title: document.getElementById('movieTitle').value.trim(),
                year: document.getElementById('movieYear').value,
                director: document.getElementById('director').value.trim(),
                duration: parseInt(document.getElementById('hours').value) * 60 + parseInt(document.getElementById('minutes').value), 
                genre: $('#genres').val(),
                rate: document.getElementById('rating').value,
                poster: document.getElementById('posterUrl').value.trim()
            };

            let isValid = true;
            let errorMessage = '';

            if (!formData.title) { isValid = false; errorMessage += '- Título de la película\n'; }
            if (!formData.year || formData.year < 1895 || formData.year > 2024) { isValid = false; errorMessage += '- Año válido (1895-2024)\n'; }
            if (!formData.director) { isValid = false; errorMessage += '- Director\n'; }
            if (!formData.duration) { isValid = false; errorMessage += '- Duración completa\n'; }
            if (!formData.genre || formData.genre.length === 0) { isValid = false; errorMessage += '- Al menos un género\n'; }
            if (!formData.rate || formData.rate < 0 || formData.rate > 10) { isValid = false; errorMessage += '- Calificación válida (0-10)\n'; }
            if (!formData.poster || !isValidUrl(formData.poster)) { isValid = false; errorMessage += '- URL válida del póster\n'; }

            if (!isValid) {
                alert('Por favor complete los siguientes campos obligatorios:\n' + errorMessage);
                return false;
            }

            // Si todo está válido, mostrar los datos (para propósitos de demostración)
            alert('Formulario válido! Los datos se han enviado correctamente.');

            axios.post("http://localhost:3000/movies", formData)
                .then(response => console.log(response))
                .catch(error => console.log(error));
        }

        function clearForm() {
            document.getElementById('movieTitle').value = '';
            document.getElementById('movieYear').value = '';
            document.getElementById('director').value = '';
            document.getElementById('hours').value = '';
            document.getElementById('minutes').value = '';
            document.getElementById('rating').value = '';
            document.getElementById('posterUrl').value = '';

            $('#genres').val(null).trigger('change');
            $('#posterPreview').addClass('d-none').attr('src', '');
            form.classList.remove('was-validated');
            $('.invalid-feedback').hide();

            alert('El formulario ha sido limpiado exitosamente.');
        }

        function isValidUrl(url) {
            try {
                new URL(url);
                return true;
            } catch (error) {
                return false;
            }
        }

        form.addEventListener('submit', validateForm);
        clearButton.addEventListener('click', clearForm);
    });
}

module.exports = formJs;