document.addEventListener('DOMContentLoaded', function() {
  // Dummy data for app list
  const apps = [
    { name: 'App 1', icon: 'app1.png', description: 'Description of App 1', downloadLink: 'https://example.com/app1' },
    { name: 'App 2', icon: 'app2.png', description: 'Description of App 2', downloadLink: 'https://example.com/app2' },
    // Add more apps as needed
  ];

  // Populate app list
  const appList = document.getElementById('app-list');
  apps.forEach(app => {
    const listItem = document.createElement('ons-list-item');
    listItem.innerHTML = `
      <ons-card>
        <img class="app-icon" src="${app.icon}" alt="App Icon">
        <div class="title">${app.name}</div>
      </ons-card>
    `;
    listItem.addEventListener('click', function() {
      showAppDetail(app);
    });
    appList.appendChild(listItem);
  });
});

function showAppDetail(app) {
  const navigator = document.querySelector('#navigator');
  navigator.pushPage('detail-page', {
    data: { app }
  });
}

document.addEventListener('show', function(event) {
  if (event.target.id === 'detail-page') {
    const app = event.target.data.app;
    document.getElementById('app-title').textContent = app.name;
    document.getElementById('app-detail-title').textContent = app.name;
    document.getElementById('app-detail-icon').src = app.icon;
    document.getElementById('app-detail-content').textContent = app.description;

    // Store download link for later use
    document.getElementById('app-detail-card').downloadLink = app.downloadLink;
  }
});

function downloadApp() {
  const downloadLink = document.getElementById('app-detail-card').downloadLink;
  // Add logic to handle the app download
  console.log(`Downloading app from: ${downloadLink}`);
}
