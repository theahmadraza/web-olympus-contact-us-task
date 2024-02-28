import React from "react";
import { FooterMenu } from "./FooterMenu";
import { Link } from "react-router-dom";
import { legalLinks , companyLinks, quickLinks} from "../constants/footerLink";
import FooterLogo from "../assets/images/logo.svg";
import TwitterIcon from '../assets/images/twitter-icon.svg';
import InstaIcon from '../assets/images/insta-icon.svg';
import LinkedinIcon from '../assets/images/in-icon.svg';
import BeIcon from '../assets/images/be-icon.svg';
import DribbleIcon from '../assets/images/dribble-icon.svg';


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="mx-auto max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8">
        <div className="footer-top">
          <div className="flex">
            <div className="w-full">
              <div className="ft-row">
                <div className="ft-box ft-logo-outer">
                  <div className="footer-logo">
                    <Link to={"/"}>
                      <img src={FooterLogo}></img>
                    </Link>
                  </div>
                  <div className="footer-socials">
                    <ul>
                      <li>
                        <Link to={"/"}>
                          <img src={TwitterIcon}></img>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <img src={InstaIcon}></img>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <img src={LinkedinIcon}></img>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <img src={BeIcon}></img>
                        </Link>
                      </li>
                      <li>
                        <Link to={"/"}>
                          <img src={DribbleIcon}></img>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <FooterMenu footerData={quickLinks} />
                <FooterMenu footerData={companyLinks} />
                <FooterMenu footerData={legalLinks} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="flex">
            <div className="w-full text-center">
              <p> © 2023 Web Olympus. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer
