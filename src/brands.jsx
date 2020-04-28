import React from "react";
import "./App.css";
import ReactCSSTransitionGroup from "react-transition-group";
import { Link } from "react-router-dom";
import { findByLabelText } from "@testing-library/react";
import { Button } from "react-bootstrap";
const Brands = () => {
  return (
    <div className="container-fluid">
      <div className="h">
        <h1 className="title2">Available brands</h1>
        <a href="https://play.google.com/store/apps/details?id=com.syntax.gcamports&hl=en&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img
            className="kk"
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
      </div>
      <div className="cards">
        <Link to="/POCO" style={{ textDecoration: "none" }}>
          <button className="card" id="c5">
            POCO
          </button>
        </Link>
        <Link to="/Redmi" style={{ textDecoration: "none" }}>
          <button className="card" id="c1">
            Redmi
          </button>
        </Link>
        <Link to="/realme" style={{ textDecoration: "none" }}>
          <button className="card" id="c2">
            Realme
          </button>
        </Link>
        <Link to="/Oneplus" style={{ textDecoration: "none" }}>
          <button className="card" id="c3">
            Oneplus
          </button>
        </Link>
      </div>
      <div className="cards">
        <Link to="/Xiaomi" style={{ textDecoration: "none" }}>
          <button className="card" id="c4">
            Xiaomi
          </button>
        </Link>
        <Link to="/Asus" style={{ textDecoration: "none" }}>
          <button className="card" id="c6">
            Asus
          </button>
        </Link>
        <Link to="/OPPO" style={{ textDecoration: "none" }}>
          <button className="card" id="c7">
            OPPO
          </button>
        </Link>
        <Link to="/Samsung" style={{ textDecoration: "none" }}>
          <button className="card" id="c8">
            Samsung
          </button>
        </Link>
      </div>
      <div className="cards">
        <Link to="/Nokia" style={{ textDecoration: "none" }}>
          <button className="card" id="c7">
            Nokia
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Brands;
