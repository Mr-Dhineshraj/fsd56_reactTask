import React from 'react'

function StatusFilter({statusFilter,setStatusFilter}) {

    const handleFilterChange = (status) => {
        setStatusFilter(status);
      };

      const getButtonColor = () => {
        switch (statusFilter) {
          case "Completed":
            return "btn btn-success dropdown-toggle btn-sm";
          case "Not Completed":
            return "btn btn-danger dropdown-toggle btn-sm";
          case "All":
          default:
            return "btn btn-secondary dropdown-toggle btn-sm";
        }
      };
    
  return (
    <div className='col-6 d-flex justify-content-end'>
                    <h5 className='mr-3'>Status Filter:</h5>
                    <div className="dropdown m">
                        <button className={getButtonColor()} type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {statusFilter}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          
                            <button className="dropdown-item" onClick={()=>{handleFilterChange('All')}}>All</button>
                            <button className="dropdown-item" onClick={()=>{handleFilterChange('Completed')}}>Completed</button>
                            <button className="dropdown-item" onClick={()=>{handleFilterChange('Not Completed')}}>Not Completed</button>
                        </div>
                    </div>
                </div>
  )
}

export default StatusFilter