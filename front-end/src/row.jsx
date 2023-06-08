import "./row.css"

function Row() {
    return (
        <tr>
            <td>ID</td>
            <td>Name</td>
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