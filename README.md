chromeExtensions
================

Install:
1. Open Chrome Extensions.
2. Make sure "Developer Mode" is activated.
3. Click "Install uncompressed extension", and select the folder containing this.
4. Install.

Use:
1. Go to any site using the Flash Adplayer Plugin
2. Open a JavaScript debugging console. If it outputs "VpSupport found", you are good to go. If it outputs "WARNING: No VpSupport found", the extension cannot be used.
3. Start playing content. Open the extension popup. If any errors occur, they are listed in the popup.
4. For more info on an error, click "Pause", then click on the error you want info on.

Notes:
ALPHA version limitations:
- Error data persistant storage across sessions (no clearing of error data, you will have to disable and enable extension to start recording a new error session)
- Only Ad Errors and Session Errors, no event collection.
