import React, { useEffect, useState } from "react";
import StatusFilter from "./components/StatusFilter";
import Cards from "./components/Cards";
import MyTodo from "./components/MyTodo";
import FormFields from "./components/FormFields";

function App() {
  const [newTodo, setNewTodo] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  const [description, setDescription] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [editIndex, setEditIndex] = useState(null);

  const handleButton = () => {
    if (editIndex !== null) {
      const updatedTodos = newTodo.map((todo, index) => 
        index === editIndex ? { ...todo, title: addTodo, description: description } : todo
      );
      setNewTodo(updatedTodos);
      localStorage.setItem("todolist", JSON.stringify(updatedTodos));
      setEditIndex(null);
    } else {
      const newTodoItem = {
        title: addTodo,
        description: description,
        status: "Not Completed",
      };

      const toDoArr = [...newTodo, newTodoItem];
      setNewTodo(toDoArr);
      localStorage.setItem("todolist", JSON.stringify(toDoArr));
    }
    setAddTodo("");
    setDescription("");
  };

  const handleToDelete = (index) => {
    const updatedTodos = newTodo.filter((_, i) => i !== index);
    setNewTodo(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos));
  };

  const handleComplete = (item, status) => {
    const updatedTodos = newTodo.map((todo) =>
      todo.title === item.title && todo.description === item.description
        ? { ...todo, status: status }
        : todo
    );
    setNewTodo(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos));
  };

  const handleEdit = (index) => {
    const todo = newTodo[index];
    setAddTodo(todo.title);
    setDescription(todo.description);
    setEditIndex(index);
  };

  useEffect(() => {
    const savedTodo = JSON.parse(localStorage.getItem("todolist"));
    if (savedTodo) {
      setNewTodo(savedTodo);
    }
  }, []);

  const filteredTodo = newTodo.filter((todo) => {
    if (statusFilter === "All") return true;
    return todo.status === statusFilter;
  });


  return (
    <div className="container mt-5">
      <FormFields
        handleButton={()=>{handleButton()}}
        addTodo={addTodo}
        setAddTodo={setAddTodo}
        description={description}
        setDescription={setDescription}
        editIndex={editIndex}
      />

      <div className="row mt-5">
        <MyTodo />
        <StatusFilter
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />
      </div>

      <div className="row d-flex justify-content-evenly">
        {filteredTodo.map((item, index) => {
          return (
            <Cards
              item={item}
              key={index}
              handleToDelete={() => {
                handleToDelete(index);
              }}
              handleComplete={handleComplete}
              handleEdit={() => handleEdit(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
