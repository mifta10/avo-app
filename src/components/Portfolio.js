import React from 'react'
import Img1 from '../images/01.jpg'
import Img2 from '../images/02.jpg'
import Img3 from '../images/03.jpg'

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="container">
        <div className="portfolio__section">
        <div className="row">
        <div className="col-4">
          <div className="portfolio__content">
            <h6 className="portfolio__content-h6">
              EMPLOYEES
            </h6>
            <h3 className="portfolio__content-h3">OUR TEAM</h3>
          </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-4 pl-15">
                  <div className="portfolio__card">
                    <div className="portfolio__card-img">
                      <img src={Img1} alt="" />
                    </div>
                    <h5 className="portfolio__card-name">Shakil Khan</h5>
                    <p className="portfolio__card-expert">Flutter Developer</p>
                  </div>
              </div>
              <div className="col-4 pl-15">
                  <div className="portfolio__card">
                    <div className="portfolio__card-img">
                      <img src={Img2} alt="" />
                    </div>
                    <h5 className="portfolio__card-name">Fawad Khan</h5>
                    <p className="portfolio__card-expert">React Developer</p>
                  </div>
              </div>
              <div className="col-4 pl-15">
                  <div className="portfolio__card">
                    <div className="portfolio__card-img">
                      <img src={Img3} alt="" />
                    </div>
                    <h5 className="portfolio__card-name">Fatma Khan</h5>
                    <p className="portfolio__card-expert">Vue JS Developer</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
