document.addEventListener("DOMContentLoaded", function () {
    // Load app data from JSON
    fetch('appData.json')
        .then(response => response.json())
        .then(data => displayApps(data))
        .catch(error => console.error('Error fetching app data:', error));
});

function displayApps(apps) {
    const appContainer = document.getElementById('app-container');

    apps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.classList.add('app-card');
        appCard.innerHTML = `
            <img src="${app.icon}" alt="${app.name}">
            <h3>${app.name}</h3>
        `;
        appCard.addEventListener('click', () => openPopup(app));
        appContainer.appendChild(appCard);
    });
}

function openPopup(app) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const popupTitle = document.getElementById('popup-title');
    const popupIcon = document.getElementById('popup-icon');
    const downloadBtn = document.getElementById('download-btn');

    popupTitle.textContent = app.name;
    popupIcon.src = app.icon;
    downloadBtn.addEventListener('click', () => downloadApp(app));

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

function downloadApp(app) {
    // Implement app download logic here
    console.log('Downloading app:', app.name);
}
