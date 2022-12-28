import React, { useState } from "react";
import "./Todolist.css";

const Todolist = () => {
  const [item, setItem] = useState();
  const [listData, setListData] = useState([]);

  const HandleChange = (e) => {
    setItem(e.target.value);
  };

  const HandleClick = () => {
    console.log(item);
    setListData([...listData, item]);
    console.log(listData);
    setItem("");
  };
  const HandleDelete = (id) => {
    const newlist = listData.filter((element, index) => {
      return id !== index;
    });
    setListData(newlist);
  };

  return (
    <div className="container">
      <div className="content">
        <h1>TODO LIST</h1>
        <br />
        <div className="input">
          <input type="text" placeholder="enter the task" value={item} onChange={HandleChange} />
          <button className="btn" onClick={HandleClick}>
            ADD
          </button>
        </div>
        <div className="data">
          <>
            {listData.map((current, index) => {
              return (
                <div className="list">
                  <p>{current}</p>
                  <button
                    className="delete"
                    onClick={() => {
                      HandleDelete(index);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
