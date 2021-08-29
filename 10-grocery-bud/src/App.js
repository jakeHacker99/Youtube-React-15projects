import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      // display alert
      showAlert(true, "danger", "enter a valid item");
    } else if (name && isEditing) {
      setList(list.map((item) => {
        if(item.id== editId){
          return {...item, title: name}
        }
        return item

      }))
      setName("")
      setEditId("null")
      setIsEditing(false)
      showAlert(true, "success", `edited to ${name}`)
      // deal with edit
    } else {
      showAlert(true, "success", `added ${name} to `);
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "list is now empty");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item now removed")
    setList(list.filter((item) => item.id !==id))
  }
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id ===id)
    setIsEditing(true)
    setEditId(id)
    setName(specificItem.title)
  }

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])
  
  

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>grocery bud </h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g redbull"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button
            onClick={clearList}
            className="clear-btn"
          >
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
