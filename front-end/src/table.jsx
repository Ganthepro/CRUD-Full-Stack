import "./table.css"
import Row from "./row";

function Table() {
    return (
        <div className="main-table">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                <Row />
                {/* add more row */}
                <tr>
                    <td id="create-btn" colspan="4">
                        <button>Create</button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Table;