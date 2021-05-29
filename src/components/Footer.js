import React from 'react';
import './Footer.css'
import logo from '../images/logo-light.png'

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="foote-subscription-heading">
          Join the Sevice newsletter to receive our best working deals
        </p>
        <p className="footer-subscription-text">
          You can subscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input type="text" name="email" className="footer-input" placeholder="Your Email" />
            <button className='btn btn-primary'>Subscribe</button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a to='/sign-up'>How It works</a>
            <a to='/'>Testimonials</a>
            <a to='/'>Careers</a>
            <a to='/'>Investors</a>
            <a to='/'>Terms Of Services</a>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <a to='/'>Contact</a>
            <a to='/'>Support</a>
            <a to='/'>Destination</a>
            <a to='/'>Sponsorships</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a to='/'>Instagram</a>
            <a to='/'>Facebook</a>
            <a to='/'>LinkedIn</a>
            <a to='/'>Twitter</a>
          </div>
          <div className="footer-link-items">
            <h2>Videos</h2>
            <a to='/'>Submit Videos</a>
            <a to='/'>Ambassadors</a>
            <a to='/'>Agency</a>
            <a to='/'>Influencer</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a to='/' className='social-logo'>
              <img src={logo} alt="" />
            </a>
          </div>
          <small class='website-rights'>avo © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </a>
            <a
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a>
            <a
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;