// Esperar a que el documento esté listo
$(document).ready(function() {
    // Referencias a elementos del formulario
    const form = document.querySelector('.needs-validation');
    const clearButton = document.getElementById('clearForm');
    
    // Inicializar Select2 para la selección múltiple de géneros
    $('#genres').select2({
        placeholder: 'Seleccione uno o más géneros',
        width: '100%'
    });

    // Vista previa del póster
    $('#posterUrl').on('change', function() {
        const url = $(this).val();
        const preview = $('#posterPreview');
        if (url) {
            preview.attr('src', url).removeClass('d-none');
        } else {
            preview.addClass('d-none');
        }
    });

    // Función para validar el formulario
    function validateForm(event) {
        event.preventDefault();
        
        // Obtener todos los valores del formulario
        const formData = {
            title: document.getElementById('movieTitle').value.trim(),
            year: document.getElementById('movieYear').value,
            director: document.getElementById('director').value.trim(),
            hours: document.getElementById('hours').value,
            minutes: document.getElementById('minutes').value,
            genres: $('#genres').val(), // Obtener valores del select múltiple
            rating: document.getElementById('rating').value,
            posterUrl: document.getElementById('posterUrl').value.trim()
        };

        // Validar que todos los campos estén completos
        let isValid = true;
        let errorMessage = '';

        // Validar título
        if (!formData.title) {
            isValid = false;
            errorMessage += '- Título de la película\n';
        }

        // Validar año
        if (!formData.year || formData.year < 1895 || formData.year > 2024) {
            isValid = false;
            errorMessage += '- Año válido (1895-2024)\n';
        }

        // Validar director
        if (!formData.director) {
            isValid = false;
            errorMessage += '- Director\n';
        }

        // Validar duración
        if (!formData.hours || !formData.minutes) {
            isValid = false;
            errorMessage += '- Duración completa\n';
        }

        // Validar géneros
        if (!formData.genres || formData.genres.length === 0) {
            isValid = false;
            errorMessage += '- Al menos un género\n';
        }

        // Validar calificación
        if (!formData.rating || formData.rating < 0 || formData.rating > 10) {
            isValid = false;
            errorMessage += '- Calificación válida (0-10)\n';
        }

        // Validar URL del póster
        if (!formData.posterUrl || !isValidUrl(formData.posterUrl)) {
            isValid = false;
            errorMessage += '- URL válida del póster\n';
        }

        if (!isValid) {
            alert('Por favor complete los siguientes campos obligatorios:\n' + errorMessage);
            return false;
        }

        // Si todo está válido, mostrar los datos (para propósitos de demostración)
        console.log('Datos del formulario:', formData);
        alert('Formulario válido! Los datos se han enviado correctamente.');
        
        // Aquí iría el código para enviar los datos al servidor
        return true;
    }

    // Función para limpiar el formulario
    function clearForm() {
        // Limpiar campos de texto y número
        document.getElementById('movieTitle').value = '';
        document.getElementById('movieYear').value = '';
        document.getElementById('director').value = '';
        document.getElementById('hours').value = '';
        document.getElementById('minutes').value = '';
        document.getElementById('rating').value = '';
        document.getElementById('posterUrl').value = '';

        // Limpiar Select2
        $('#genres').val(null).trigger('change');

        // Ocultar vista previa del póster
        $('#posterPreview').addClass('d-none').attr('src', '');

        // Remover clases de validación
        form.classList.remove('was-validated');
        
        // Remover cualquier mensaje de error personalizado
        $('.invalid-feedback').hide();

        // Notificar al usuario
        alert('El formulario ha sido limpiado exitosamente.');
    }

    // Función auxiliar para validar URLs
    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    }

    // Event Listeners
    form.addEventListener('submit', validateForm);
    clearButton.addEventListener('click', clearForm);
});