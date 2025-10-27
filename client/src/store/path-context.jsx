import { createContext, useEffect, useState } from "react";

export const PathContext = createContext();

export default function PathProvider({ children, initialPath }) {
    const [path, setPath] = useState(initialPath);
    const [files, setFiles] = useState({ folders: [], documents: []});

    const loadFiles = async (newPath) => {
        const result = await window.api.getFiles(newPath);
        if(!result.error) {
            setFiles(result);
            setPath(newPath);
        }
    }

    useEffect(() => {
        loadFiles(path);
    }, [path]);

    const handleClick = async (file) => {
        const fullPath = `${path}\\${file.name}`;
        if(file.type === "folder") {
            loadFiles(fullPath);
        } else {
            await window.api.openFile(fullPath);
        }
    }

    return (
        <PathContext.Provider
            value={
                {
                    path,
                    files,
                    loadFiles,
                    handleClick,
                    setPath,
                    setFiles
                }
            }
        >
            {children}
        </PathContext.Provider>
    )
}

