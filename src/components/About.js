import React, { useState } from 'react'

const About = () => {
  const [state] = useState({ heading: 'who we are?', text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, adipisci fuga facilis harum ipsam quia ea deleniti sequi eos reiciendis dolor natus, saepe dolorem, illo tempore atque optio numquam. Tempora deleniti temporibus corrupti dolor voluptatibus dignissimos, porro officiis delectus saepe, facere quo nihil asperiores perspiciatis aut ad et fugiat corporis.' });

  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4 className="about__h4">{state.heading}</h4>
          </div>
          <div className="col-9">
            <div className="about__text">
              <p>{state.text}</p>
            </div>
          </div>
        </div>

        <div className="row mt-60">
          <div className="col-4 pl-15">
            <div className="about__section">
              <div className="about__section-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                  <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                </svg>
              </div>
              <div className="about__section-heading">
                <h6>Digital Marketing</h6>
              </div>
              <div className="about__section-text">
                <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
              </div>
            </div>
          </div>
          <div className="col-4 pl-15">
            <div className="about__section">
              <div className="about__section-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <div className="about__section-heading">
                <h6>Web Development</h6>
              </div>
              <div className="about__section-text">
                <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
              </div>
            </div>
          </div>
          <div className="col-4 pl-15">
            <div className="about__section">
              <div className="about__section-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
                  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                </svg>
              </div>
              <div className="about__section-heading">
                <h6>Graphics Design</h6>
              </div>
              <div className="about__section-text">
                <p>Tempore corrupti temporibus fuga earum asperiores fugit laudantium.</p>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}

export default About
