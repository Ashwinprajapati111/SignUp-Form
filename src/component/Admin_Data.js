import React, { useState } from "react";
import Data from "./Data.json";

const Admin_Data = () => {
  const [MyData, setMyData] = useState(Data);

  return (
    <>
      <div className="container">
        <h2>Striped Rows</h2>
        <p>The .table-striped class adds zebra-stripes to a table:</p>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>sr</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {MyData.map((ddd) => {
              return (
                <>
                  <tr key={ddd.sr}>
                    <td>{ddd.sr}</td>
                    <td>{ddd.name}</td>
                    <td>{ddd.email}</td>
                    <td>{ddd.pass}</td>
                    <td>{ddd.cpass} </td>
                    <td>
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-trash-o  mx-5" aria-hidden="true"></i>{" "}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin_Data;
