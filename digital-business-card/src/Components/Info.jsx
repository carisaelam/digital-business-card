import React from "react";

export default function Info() {
  return (
    <>
      <img
        className="info__image"
        src="src/assets/profilepic.jpg"
        alt="profile-picture"
      />
      <hgroup className="info__title__group">
        <h1 className="info__title">Laura Smith</h1>
        <h2 className="info__subtitle">Frontend Developer</h2>
        <p className="info__website">laurasmith.website</p>
      </hgroup>
      <div className="info__buttons">
        <button className="info__button-email">
          <i className="fa-solid fa-envelope"></i>Email
        </button>
        <button className="info__button-linkedin">
          <i className="fa-brands fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </>
  );
}
