import React from 'react'

const ShowCase = () => {
  return (
    <div className="showcase">
      <div className="container">
        <div className="showcase__content">
          <div className="showcase__content-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
          </div>
          <h1>So That's Us.There's No Other</h1>
          <h1>Way to Put It</h1>
        </div>
      </div>
    </div>
  )
}

export default ShowCase