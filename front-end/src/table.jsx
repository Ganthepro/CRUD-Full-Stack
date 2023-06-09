import "./table.css";
import Row from "./row";
import { useState, useEffect } from "react";

function Table() {
  const [data, setData] = useState([]);
  const [isCreate, setIsCreate] = useState(false);

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 500)
  }, []);

  async function getData() {
    try {
      const response = await fetch("http://localhost:5500/");
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  }
  
  function create() {
    setIsCreate(true);
  }
  
  function deleteCreateElement() {
    setIsCreate(false);
  }
  
  function deleteElement() {
    
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
              return <Row data={item} create={false} iden={item.id} />;
            })}
          {isCreate && 
          <Row data={null} create={isCreate} deleteFunc={deleteCreateElement}/>
          }
          <tr>
            <td id="create-btn" colSpan="4">
              <button onClick={create}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
