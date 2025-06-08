import React from 'react'
type FolderNode = {
    id: string;
    name: string;
    isFolder: boolean;
    items: JSON[];
}
const ProjectFolder = ({explorer}:{explorer: FolderNode}) => {
  console.log(explorer);
  
  if(explorer.isFolder) {
    return  (
      <div style={{marginTop: 5}}>
        <div className='folder'>
          <span>📁 {explorer.name}</span>
        </div>
        <div>
          {explorer.items.map((exp)=>{
              return (<span>{exp.name}</span>)
          })
          }
        </div>
      </div>
    ); 
  }
  else{
    return <span className='file'>📝 {explorer.name}</span>
  }
}

export default ProjectFolder