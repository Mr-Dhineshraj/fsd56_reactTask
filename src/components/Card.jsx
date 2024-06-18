import React from 'react'

function Card({data}) {
  return (
    <div className='col-lg-4'>
  <div className='card'>
    <div className="card-body">
      <p className='text-center'><strong className='text-muted'>{data.package}</strong></p>
      <h2 className='text-center'>{data.value}{data.duration}</h2>
      <hr />
      <ul className='fa-ul'>
        <li className={data.isUser?"":'text-muted'}><span className='fa-li'><i className={data.isUser? "fas fa-check":'fas fa-times'}></i></span>{data.user}</li>
        <li className={data.isStorage?"":'text-muted'}><span className='fa-li'><i className={data.isStorage?"fas fa-check":'fas fa-times'}></i></span>{data.storage}</li>
        <li className={data.isPublicProjects?"":'text-muted'}><span className='fa-li'><i className={data.isPublicProjects?"fas fa-check":'fas fa-times'}></i></span>{data.PublicProjects}</li>
        <li className={data.isAccess?"":"text-muted"}><span className='fa-li'><i className={data.isAccess?"fas fa-check":'fas fa-times'}></i></span>{data.access}</li>
        <li className={data.isPrivateProjects?"":'text-muted'}><span className='fa-li'><i className={data.isPrivateProjects?"fas fa-check":'fas fa-times'}></i></span>{data.PrivateProjects}</li>
        <li className={data.isSupport?"":'text-muted'}><span className='fa-li'><i className={data.isSupport?"fas fa-check":'fas fa-times'}></i></span>{data.support}</li>
        <li className={data.isSubdomain?"":'text-muted'}><span className='fa-li'><i className={data.isSubdomain?"fas fa-check":'fas fa-times'}></i></span>{data.subdomain}</li>
        <li className={data.isreports?"":'text-muted'}><span className='fa-li'><i className={data.isreports?"fas fa-check":'fas fa-times'}></i></span>{data.reports}</li>
      </ul>
      <div className='d-grid'>
        <a href="#" className={data.isreports?"btn btn-primary text-uppercase":'btn btn-primary text-uppercase disabled'} >button</a>
      </div>
      </div>
  </div>

 </div>


  )
}

export default Card