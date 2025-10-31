const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  getFiles: (path) => ipcRenderer.invoke('get-files', path),
  openFile: (filePath) => ipcRenderer.invoke('open-file', filePath)
})

