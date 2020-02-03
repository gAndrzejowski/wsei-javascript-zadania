document.addEventListener('DOMContentLoaded', () => {
    
    function deactivateAllImagesExceptGiven(alt) {
        const images = document.querySelectorAll('.page-header img');
        const selectedImage = document.querySelector(`img[alt=${alt}]`);
        for (let image of images) {
            image.style.display = "none";
        }
        if (!selectedImage) return;
        selectedImage.style.display = "block";
    }

    const selectionToImageAlt = new Map([
        ["Windows", "Windows"],
        ["Ubuntu", "Ubuntu"],
        ["Os X", "Apple"]
    ]);
    const selection = document.querySelector('.form-control');
    selection.addEventListener('change', function() {
        deactivateAllImagesExceptGiven(selectionToImageAlt.get(selection.value));
    });
    deactivateAllImagesExceptGiven(selection.value);

})