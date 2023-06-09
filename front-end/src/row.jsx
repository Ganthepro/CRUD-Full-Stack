import "./row.css"
import { useRef } from "react";

function Row(prop) {
    const inputRef = useRef(null)
    async function apply() {
        const inputValue = inputRef.current.value
        const res = await fetch(`http://localhost:5500/apply/${inputValue}`)
        if (!res.ok)
            throw new Error("Failed to fetch data");
        prop.deleteFunc()
    }
    
    return (
        <tr>
            {!prop.create &&
            <>
                <td>{prop.data.id}</td>
                <td>{prop.data.name}</td>
            </>
            }
            {prop.create && 
            <td colSpan="2"><input type="text" ref={inputRef}></input></td>
            } 
            <td>
                {!prop.create &&
                <button id="edit">Edit</button>
                }
                {prop.create &&
                <button id="apply" onClick={apply}>Apply</button> 
                }
            </td>
            <td>
                {!prop.create &&
                <button id="delete-btn">Delete</button>
                }
                {prop.create &&
                <button id="delete-btn" onClick={prop.deleteFunc}>Delete</button>
                }
            </td>
        </tr>    
    )
}

export default Row;