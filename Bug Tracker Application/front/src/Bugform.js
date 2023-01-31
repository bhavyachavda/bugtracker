import React, { useState, useEffect } from "react";
import axios from "axios";
const Bugform = () => {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Assignee, setAssignee] = useState("");
  const [data , setData] = useState([]);


  const handlesubmit = () => {
    const res = axios
      .post("http://localhost:9000/addbug", {
        Title: Title,
        Description: Description,
        Assignee: Assignee,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    viewdata();
  }, []);

  useEffect(() => {
  }, [data]);

  const viewdata = async () => {
    const res = await axios.get("http://localhost:9000/display");
    setData(res.data);
    console.log(res.data);
  };

  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <table>
          <tr>
            <td>Title</td>
            <td>
              <input
                type="text"
                name="Title"
                value={Title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Description</td>
            <td>
              <input
                type="text"
                name="Description"
                value={Description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Assignee</td>
            <td>
              <input
                type="text"
                name="Assignee"
                value={Assignee}
                onChange={(e) => {
                  setAssignee(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td colSpan="3">
              <input type="submit" value="submit" />
            </td>
          </tr>
        </table>
        <table>
        <td>&nbsp;</td>
          <tr>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
             <th>TIME</th>
             <th>DATE</th> 
             <th>ASSIGNEE</th>
          </tr>

          {data.map((data, index) => (
            <tr key={index}>
              <td> {data.Title}</td>
              <td> {data.Description}</td>
              <td> {data.Time}</td>
              <td> {data.Date}</td>
              <td> {data.Assignee}</td>
            </tr>
          ))}
        </table>
      </form>
    </div>
  );
};
export default Bugform;
