document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('remove').addEventListener('click', function() {
        this.parentElement.removeChild(this);
    });
});