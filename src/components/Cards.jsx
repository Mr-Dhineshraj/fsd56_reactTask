import React, { useState,useEffect } from 'react'

function Cards({item,handleToDelete,handleComplete,handleEdit }) {
    const [selectedOption, setSelectedOption] = useState(item.status);


    useEffect(() => {
      setSelectedOption(item.status);
    }, [item.status]);

    const handleSelect = (option) => {
        setSelectedOption(option);
        handleComplete(item, option);
      };
   

   
    const getButtonColor=()=>{

       switch (selectedOption){
        case "Completed": return "btn btn-success dropdown toggle btn-sm";
        case "Not Completed": return "btn btn-danger dropdown toggle btn-sm";
        default:return "btn btn-success dropdown toggle btn-sm";
       }
        
    };
  return (
    
            <div className="card mt-5" style={{width:'18rem',backgroundColor:'rgb(204,245,211)'}}>
                      <div className="card-body">
                          <p className='card-text'><strong>Name:</strong>{item.title}</p>
                         <p className='card-text'><strong>Description:</strong>{item.description}</p>

                         <div className='d-flex '>
                             <p className="card-text mt-2"><strong>Status:</strong></p>
                               <div  className={getButtonColor()} >
                                <button className="btn dropdown-toggle" 
                                 type="button" 
                                 id="dropdownMenuButton" 
                                 data-bs-toggle="dropdown" 
                                 aria-haspopup="true" 
                                 aria-expanded="false"
                                 size='sm'>
                                 
                            {selectedOption}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className={`dropdown-item ${selectedOption==="Not Completed" && 'active'}`} onClick={()=>handleSelect('Completed')}>Completed</button>
                            <button className={`dropdown-item ${selectedOption==="Completed" && 'active'}`}   onClick={()=>handleSelect('Not Completed')}>Not Completed</button>
                        </div>
                       
                    </div>
                    </div>
                    <br />
                    <br />
                    <div className='d-flex justify-content-end gap-2'>
                                <a href="#" className="btn btn-success" onClick={handleEdit}>Edit</a>
                                <a href="#" className="btn btn-delete" onClick={handleToDelete}>Delete</a>
                                </div>   
           </div>
           </div>
                           
           
  )
}

export default Cards