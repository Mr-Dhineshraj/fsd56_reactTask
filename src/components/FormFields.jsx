import React from 'react'

function FormFields({addTodo,setAddTodo,description,setDescription,handleButton,editIndex}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked")
    handleButton();
  };

   
      return (
        <>
        <div>
          <h5 className="text-center">My ToDo</h5>
        </div>
        <form className='mt-5' onSubmit={handleSubmit} >
        <div className='d-grid gap-3 d-flex justify-content-center align-items-center ms-5'>
        <div className="col-5">
        <input type="text" value={addTodo} onChange={(e)=>{setAddTodo(e.target.value)}} className='form-control' placeholder='Todo name' required />
        </div>
        <div className="col-5"><input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} className='form-control' placeholder='Todo Description' required/></div>
        <div className="col-2"><button type="submit" className="btn btn-success" >{editIndex !== null ? "Update Todo" : "Add Todo"}</button></div>
        </div>
      </form>
      </>
      )
    }

export default FormFields