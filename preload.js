const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  getFiles: (path) => ipcRenderer.invoke('get-files', path),
})
