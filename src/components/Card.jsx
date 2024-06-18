import React from 'react'

function Card({cardData}) {
  return (
    
  <div className="col mb-5">  
  <div className="card h-100">
    <div className="badge bg-dark text-white position-absolute" style={{top:"0.5rem", right:"0.5rem" }}>{cardData.status}</div>
      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /> 
      <div className="card-body p-4">
          <div className="text-center">  
              <h5 className="fw-bolder">{cardData.item}</h5>
              <div className="d-flex justify-content-center small text-warning mb-2">
                  <div className={cardData.isItem?"bi-star-fill":""}></div>
                  <div className={cardData.isItem?"bi-star-fill":""}></div>
                  <div className={cardData.isItem?"bi-star-fill":""}></div>
                  <div className={cardData.isItem?"bi-star-fill":""}></div>
                  <div className={cardData.isItem?"bi-star-fill":""}></div>
              </div> 
              {cardData.isStatus?"":<span className="text-muted text-decoration-line-through">{cardData.errPrice }</span> } 
              {cardData.price}
          </div>
      </div>
      </div>
</div>
  )
}

export default Card