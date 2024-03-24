import React from 'react'

const NavBar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'><span className='badge bg-danger'>NEWS </span> BLOG</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav ">
      <li className="nav-item ">
          <div className="nav-link me-4" onClick={()=> setCategory("science")} style={{cursor:'pointer'}}>Science</div>
        </li>

        <li className="nav-item ">
          <div className="nav-link me-4" onClick={()=> setCategory("technology")} style={{cursor:'pointer'}}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link me-4" onClick={()=> setCategory("business")} style={{cursor:'pointer'}}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link me-4" onClick={()=> setCategory("health")} style={{cursor:'pointer'}}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link me-4" onClick={()=> setCategory("sports")} style={{cursor:'pointer'}} >Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link me-4" onClick={()=> setCategory("entertainment")} style={{cursor:'pointer'}} >Entertainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar

