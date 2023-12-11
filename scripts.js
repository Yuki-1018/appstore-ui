document.addEventListener("DOMContentLoaded", () => {
    loadApps();
});

function loadApps() {
    $.ajax({
        url: "appData.json",
        dataType: "json",
        success: (data) => {
            displayApps(data);
        },
        error: (error) => {
            console.error("Error loading app data:", error);
        }
    });
}

function displayApps(apps) {
    const appListContainer = document.getElementById("appList");
    appListContainer.innerHTML = "";

    apps.forEach((app, index) => {
        const appCard = document.createElement("div");
        appCard.className = "app-card col-md-4 mb-4";
        appCard.innerHTML = `
            <div class="card">
                <img src="${app.icon}" class="card-img-top" alt="${app.name} Icon">
                <div class="card-body">
                    <h5 class="card-title">${app.name}</h5>
                    <button class="btn btn-primary" onclick="showPopup(${index})">Details</button>
                </div>
            </div>
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
