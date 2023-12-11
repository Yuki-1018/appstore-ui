document.addEventListener("DOMContentLoaded", async () => {
    const apps = await fetchApps();
    displayApps(apps);
});

async function fetchApps() {
    try {
        const response = await fetch('appData.json');
        const data = await response.json();
        return data.apps;
    } catch (error) {
        console.error('Error fetching apps:', error);
        return [];
    }
}

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
        appCard.style.animation = `fadeIn 0.5s ease-in-out ${index * 0.1}s`;
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
