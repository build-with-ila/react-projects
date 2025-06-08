import React, {useState} from 'react'
import '../App.css'

const Folder = ({handleInsertNode=()=>{}, explorer}) => {
    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null,
    });
    //console.log(explorer);
    const handleClick = (e, isFolder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder
        })
    }

    const handleAdd = (e) => {
        //console.log(e);
        if(e.keyCode === 13 && e.target.value) {
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder); 
            setShowInput({...showInput, visible: false});
        }
    }
    if(explorer.isFolder) {
            return (
            <div>
                <div className="folder" onClick={() => setExpand(!expand)}>
                    <span>📁{explorer.name}</span>
                    <button onClick={(e)=>handleClick(e, true)}>Folder+</button>
                    <button onClick={(e)=>handleClick(e, false)}>File+</button>
                    
                </div>

                <div style={{display: expand? "block" : "none", paddingLeft: 25 }}>
                {showInput.visible && <div className="inputContainer">
                    <span>{showInput.isFolder ? "📁" : "📝"}</span>
                    <input type="text" className="inputContainer__input" autoFocus onKeyDown = {(e) => handleAdd(e)} onBlur={() => setShowInput({...showInput, visible: false})} />
                    </div>
                    
                }
                {
                    explorer.items.map((item)=>{
                        return (<Folder key={item.id} explorer={item} handleInsertNode={handleInsertNode}  />);
                    })
                }
                </div>
            </div>
        );
    }
    else {
        return (<span>📝{explorer.name}</span>);
    }

}

export default Folder