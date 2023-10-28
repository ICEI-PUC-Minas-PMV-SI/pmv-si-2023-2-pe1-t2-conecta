function toggleOverlay() {
    const pageOverlay = document.getElementById('page-overlay');
    if (pageOverlay.style.display === 'none' || pageOverlay.style.display === '') {
        pageOverlay.style.display = 'block';
    } else {
        pageOverlay.style.display = 'none';
    }
}
