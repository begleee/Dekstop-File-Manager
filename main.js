const { app, BrowserWindow, ipcMain, shell } = require('electron')
const path = require('path')
const fs = require('fs')

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  })

  if (process.env.NODE_ENV === 'development') {
    win.loadURL('http://localhost:5173')
  } else {
    win.loadFile(path.join(__dirname, 'client/dist/index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.handle('get-files', async (event, folderPath) => {
  try {
    const files = fs.readdirSync(folderPath);

    const folders = [];
    const documents = [];

    for (const file of files) {
      const fullPath = path.join(folderPath, file);

      try {
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
          folders.push({
            name: file,
            type: 'folder',
            size: null,
            modified: stats.mtime,
          });
        } else {
          documents.push({
            name: file,
            type: 'file',
            size: stats.size, // in bytes
            modified: stats.mtime,
          });
        }
      } catch (err) {
        console.warn(`Error reading ${file}:`, err.message);
      }
    }

    // Sort folders by name, documents by size
    folders.sort((a, b) => a.name.localeCompare(b.name));
    documents.sort((a, b) => a.size - b.size);

    return { folders, documents };
  } catch (err) {
    return { error: err.message };
  }
});

ipcMain.handle('open-file', async (event, filePath) => {
  try {
    await shell.openPath(filePath);
    return { success: true };
  } catch (err) {
    return { error: err.message };
  }
});
