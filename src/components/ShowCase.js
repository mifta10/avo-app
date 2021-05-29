import React from 'react'

const ShowCase = () => {
  return (
    <div className="showcase">
      <div className="container rel">
        <div className="showcase__content">
          <div className="showcase__content-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          </div>
          <h1>So That's Us.There's No Other</h1>
          <h1>Way to Put It</h1>
        </div>
        <div className="showcase__card">
          <h6 className="showcase__card-h6">Our happy Clients</h6>
          <div className="showcase__card-h4">What Client's Say?</div>
          <div className="showcase__card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam saepe labore harum at magnam in libero voluptate hic facere beatae nemo sit, aperiam suscipit cupiditate maiores eveniet, totam itaque enim?</div>
        </div>
      </div>
    </div>
  )
}

export default ShowCase
