import React, { useState } from "react";
import { Link } from "react-router-dom";
function ProfileHeader() {
  const [isdisable, setDisable] = useState(true);
  const toggleDisable = () => {
    setDisable(!isdisable);
  };
  return (
    <div className="profile__header">
      <div className="display__pic">
        <img
          className="dp"
          src="https://www.eguardtech.com/wp-content/uploads/2018/08/Network-Profile.png"
          alt="header-img "
        />
        <Link to="createpost">
          <button className="primary">create new post</button>
        </Link>
      </div>

      <div className="profile__details">
        <form className="myform">
          <div className="form__section">
            About
            <span className="edit__update_button">
              {isdisable ? (
                <img
                  className="edit__icon"
                  src="https://img.icons8.com/ios-glyphs/30/000000/edit--v4.png"
                  alt="header-icon "
                  onClick={toggleDisable}
                />
              ) : (
                <div>
                  <img
                    className="edit__icon"
                    src="https://img.icons8.com/plumpy/24/000000/ok--v2.png"
                    alt="header-icon "
                  />
                  <img
                    className="edit__icon"
                    onClick={toggleDisable}
                    src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"
                    alt="header-icon "
                  />
                </div>
              )}
            </span>
          </div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-name">
              Name:
            </label>
            <input
              className="form-control-alternative"
              id="input-name"
              disabled={isdisable}
              defaultValue={"name"}
              onChange={""}
              name="name"
              type="text"
            />
          </div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-name">
              Phone:
            </label>
            <input
              className="form-control-alternative"
              id="input-name"
              disabled={isdisable}
              defaultValue={"+912343235678"}
              onChange={""}
              name="phone"
              type="text"
            />
          </div>
          <div className="input__group">
            <label className="form-control-label" htmlFor="input-name">
              Email:
            </label>
            <input
              className="form-control-alternative"
              id="input-name"
              disabled={isdisable}
              defaultValue={"email@gmail.com"}
              onChange={""}
              name="email"
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileHeader;
