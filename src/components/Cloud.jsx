import React from 'react';


function Cloud({clouddata}) {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        {clouddata.map((item, index) => (
          <div className="card m-5" style={{ width: "18rem" }} key={index}>
            <img src={item.imgLink} className="card-img-top" alt="fsd img" />
            <div className="card-body">
              <h4 className="card-text">{item.headline}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cloud;
