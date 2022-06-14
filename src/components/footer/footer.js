import React from "react";
import logo from "../../images/logo.svg";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import topButton from "../../images/top-button.svg";
import "./footer.css";

const Footer = () => (
  <footer class="bd-footer py-4 py-md-5 mt-5 ">
    <div class="container py-4 py-md-5 px-4 px-md-3">
      <div className="divider"></div>
      <div class="row">
        <div class="col-lg-3 mb-3">
          <a
            class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none"
            href="/"
            aria-label="Digift"
          >
            <img
              src={logo}
              className=" d-inline-block align-top"
              alt="Digift"
            />
          </a>
          <ul class="list-unstyled small text-muted">
            <li class="mb-2 first-row">
              Creating Happiness One Giftcard at a Time
            </li>

            <li class="mb-2 mt-4">
              {" "}
              <img
                src={instagram}
                width={35}
                height={35}
                className=" d-inline-block align-top image"
                alt="instagram"
              />
              <img
                src={facebook}
                width={35}
                height={35}
                className=" d-inline-block align-top image"
                alt="facebook"
              />
              <img
                src={twitter}
                width={35}
                height={35}
                className=" d-inline-block align-top image"
                alt="twitter"
              />
              <img
                src={linkedin}
                width={35}
                height={35}
                className=" d-inline-block align-top image"
                alt="linkedin"
              />
            </li>
          </ul>
        </div>
        <div class="col-lg-3 col-lg-2  mb-3">
          <h5>Contact us</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="mailto:hello@digiftng.com">hello@digiftng.com</a>
            </li>

            <li class="mb-2 pt-4">
              <h5>Office</h5>
              <span>
                226, Awolowo road, Ikoyi,<br></br> Lagos State, Nigeria
              </span>
            </li>
            <li class="mb-2 d-flex">
              <a href="#">Our privacy policy</a>
              <a href="#">Terms and Condition</a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-2  mb-3">
          <h5>Company</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#">Careers</a>
            </li>
            <li class="mb-2">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3">
          <h5>Products</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#">Personal</a>
            </li>
            <li class="mb-2">
              <a href="#">Business</a>
            </li>
            <li class="mb-2">
              <a href="#">Vendor</a>
            </li>
          </ul>
        </div>
        <div class="col-6 col-lg-2 mb-3">
          <h5>Contacts</h5>
          <ul class="list-unstyled">
            <li class="mb-2">
              <a href="#">Instagram</a>
            </li>
            <li class="mb-2">
              <a href="#">Facebook</a>
            </li>
            <li class="mb-2">
              <a href="#">Twitter</a>
            </li>
            <li class="mb-2">
              <a href="#">Linkedin</a>
            </li>
          </ul>
        </div>
        <div className="divider"></div>
        <div className="d-flex ">
          <div className="col-2 col-lg-2 mb-3">
            <img
              src={topButton}
              //   width={35}
              //   height={35}
              className=" d-inline-block align-top "
              alt="twitter"
            />
          </div>
          <div className="col mb-3 sub-footer-text ">
            <span>
              The website www.digiftng.com is owned and operated by Blinksky
              Nigeria Limited, a company duly registered under the Laws of the
              Federal Republic of Nigeria with RC Number: 1656204. Trademark to
              all logos of Giftcards are owned by their respective brands and
              Blinksky Nigeria Limited doesn’t claim ownership of these
              trademarks. All Giftcards dominated in USD are provided in
              conjunction with BlinkSky Inc. Users must have valid US account
              and in some cases a valid US address before purchasing.
            </span>
          </div>
        </div>
        <div>
          <span>Copyright © 2022 Blinksky Nigeria Limited</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
