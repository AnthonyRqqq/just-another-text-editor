const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

    // Store event
    window.deferredPrompt = event;

});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {

    // Run prompt
    window.deferredPrompt.prompt();

    // Disable button
    butInstall.setAttribute('disabled', true)

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

    // Clear prompt
    window.deferredPrompt = null;
});
