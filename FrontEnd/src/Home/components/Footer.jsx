import React from "react";
import "../../styles/Footer.css";
import { AiOutlineWhatsApp, AiFillPhone, AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-item1">
          {/*  */}
          <div className="footer-holder">
            <div className="footer-header">
              <h1>FashionNexus</h1>
            </div>

            <div className="footer-details">
              <p>
                Transform Your Wardrobe with Hero Fashion: Where Heroes Rule the
                Runway
              </p>
            </div>
          </div>
          {/*  */}
          <div className="footer-holder">
            <div className="footer-header">
              <h1>Contact</h1>
            </div>
            <div className="footer-details">
              <li>
                <AiOutlineMail /> ndegwavincent7@gmail.com
              </li>
              <li>
                <AiFillPhone /> 0769287724
              </li>
              <li>
                <AiOutlineWhatsApp /> 0707382488
              </li>
            </div>
          </div>
          {/*  */}
          <div className="footer-holder">
            <div className="footer-header">
              <h1>Products</h1>
            </div>
            <div className="footer-details">
              <li>Male</li>
              <li>Female</li>
              <li>Kids</li>
              <li>Trending</li>
            </div>
          </div>
          {/*  */}
          <div className="footer-holder">
            <div className="footer-header">
              <h1>NewsLetter</h1>
            </div>
            <div className="footer-details">
              <p>Always be the first to get the updates of the best offers</p>
              <form action="">
                <input
                  type="email"
                  placeholder="ndegwavincent7@gmail.com"
                  className="input-email"
                />
                <input type="button" value="Send" />
              </form>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="footer-item2">
          <p>Copyright© 2023. VincentNdegwa. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
