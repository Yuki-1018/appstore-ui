document.addEventListener('DOMContentLoaded', function () {
    // Fetch app data from JSON
    fetch('app_data.json')
        .then(response => response.json())
        .then(data => renderApp(data))
        .catch(error => console.error('Error fetching app data:', error));
});

function renderApp(appData) {
    const appContainer = document.getElementById('app-container');

    appData.forEach(app => {
        const appCard = document.createElement('div');
        appCard.classList.add('app-card');

        const appIcon = document.createElement('img');
        appIcon.src = app.icon;
        appIcon.alt = `${app.name} icon`;
        appIcon.classList.add('app-icon');

        const appDetails = document.createElement('div');
        appDetails.classList.add('app-details');

        const appName = document.createElement('div');
        appName.classList.add('app-name');
        appName.textContent = app.name;

        const downloadLink = document.createElement('a');
        downloadLink.href = app.downloadLink;
        downloadLink.classList.add('download-link');
        downloadLink.textContent = 'Download';

        appDetails.appendChild(appName);
        appDetails.appendChild(downloadLink);

        appCard.appendChild(appIcon);
        appCard.appendChild(appDetails);

        appContainer.appendChild(appCard);
    });
}
