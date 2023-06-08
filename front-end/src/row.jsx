import "./row.css"

function Row(prop) {
    return (
        <tr>
            <td>{prop.data.id}</td>
            <td>{prop.data.name}</td>
            <td>
                <button id="edit">Edit</button>
            </td>
            <td>
                <button id="delete-btn">Delete</button>
            </td>
        </tr>    
    )
}

export default Row;