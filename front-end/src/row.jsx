import "./row.css"
import { useRef, useState } from "react";

function Row(prop) {
    const [id,setID] = useState(prop.iden)
    const [isEdit,setIsEdit] = useState(false)
    const inputRef = useRef(null)
    async function apply() {
        const inputValue = inputRef.current.value
        const res = await fetch(`http://localhost:5500/apply/${inputValue}`)
        if (!res.ok)
            throw new Error("Failed to fetch data");
        prop.deleteFunc()
    }
    
    async function deleteElement() {
        const res = await fetch(`http://localhost:5500/delete/${id}`)
        if (!res.ok)
            throw new Error("Failed to fetch data");
    }
    
    async function update() {
        setIsEdit(false)
        const inputValue = inputRef.current.value
        const res = await fetch(`http://localhost:5500/update/${id}/${inputValue}`)
        if (!res.ok)
            throw new Error("Failed to fetch data");
        setIsEdit(false)
    }
    
    return (
        <tr>
            {!prop.create && !isEdit &&
            <>
                <td>{prop.data.id}</td>
                <td>{prop.data.name}</td>
            </>
            }
            {(prop.create || isEdit) && 
            <td colSpan="2"><input type="text" ref={inputRef}></input></td>
            } 
            <td>
                {!prop.create && !isEdit &&
                <button id="edit" onClick={() => {setIsEdit(true)}}>Edit</button>
                }
                {prop.create && !isEdit &&
                <button id="apply" onClick={apply}>Apply</button> 
                }
                {isEdit &&
                <button id="apply" onClick={update}>Apply</button> 
                }
            </td>
            <td>
                {!prop.create && !isEdit && 
                <button id="delete-btn" onClick={deleteElement}>Delete</button>
                }
                {prop.create && !isEdit && 
                <button id="delete-btn" onClick={prop.deleteFunc}>Delete</button>
                }
                {isEdit && 
                <button id="delete-btn" onClick={() => {setIsEdit(false)}}>Cancel</button>
                }
            </td>
        </tr>    
    )
}

export default Row;