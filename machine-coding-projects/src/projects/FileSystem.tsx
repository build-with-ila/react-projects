//import React from 'react'
import { useState } from 'react'
import explorer from './data/FolderData'
import Folder from './components/ProjectFolder'
/*interface HypertextNode = {
    id: string;
    name: string;
    isFolder: boolean;
    items: [] | Array<HypertextNode>;
}*/



 
const FileSystem: React.FC = () => {
    const [explorerData, setExplorerData] = useState(explorer);
    //console.log(explorerData);
    return (
            <Folder explorer = {explorerData} />
    );
    
}

export default FileSystem