import "./table.css";
import Row from "./row";
import { useState, useEffect } from "react";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch("http://localhost:5500/");
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData)
        setData(jsonData);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <div className="main-table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item) => {
              return <Row key={item.id} data={item} />;
            })}
          <tr>
            <td id="create-btn" colSpan="4">
              <button>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
