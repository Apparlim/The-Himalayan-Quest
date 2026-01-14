document.addEventListener('DOMContentLoaded', () => {
    const mapImage = document.getElementById('game-map');

    // Fallback logic for map loading
    mapImage.onerror = () => {
        console.warn('Primary map asset failed to load. Checking fallback...');
        // In a real scenario, could switch to a reliable CDN or placeholder
        // mapImage.src = 'assets/fallback_map.png';
    };

    console.log('Himalayan Quest Map initialized.');
});
