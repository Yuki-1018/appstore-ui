// Sample JSON data (appData.json)
const apps = [
    {
        "name": "App 1",
        "icon": "app1-icon.png",
        "downloadLink": "https://example.com/app1-download"
    },
    {
        "name": "App 2",
        "icon": "app2-icon.png",
        "downloadLink": "https://example.com/app2-download"
    },
    // Add more apps as needed
];

document.addEventListener("DOMContentLoaded", () => {
    displayApps(apps);
});

function displayApps(apps) {
    const appListContainer = document.getElementById("appList");
    appListContainer.innerHTML = "";

    apps.forEach((app, index) => {
        const appCard = document.createElement("div");
        appCard.className = "app-card";
        appCard.innerHTML = `
            <img src="${app.icon}" alt="${app.name} Icon">
            <h3>${app.name}</h3>
            <button onclick="showPopup(${index})">Details</button>
        `;
        appListContainer.appendChild(appCard);
    });
}

function showPopup(index) {
    const popup = document.getElementById("popup");
    const popupAppName = document.getElementById("popupAppName");
    const popupAppIcon = document.getElementById("popupAppIcon");
    const downloadButton = document.getElementById("downloadButton");

    const selectedApp = apps[index];

    popupAppName.textContent = selectedApp.name;
    popupAppIcon.src = selectedApp.icon;
    downloadButton.href = selectedApp.downloadLink;

    popup.style.display = "block";
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

function searchApps() {
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();

    const filteredApps = apps.filter(app => app.name.toLowerCase().includes(searchTerm));
    displayApps(filteredApps);
}
