import React from "react";
import "./Post.css";
import StarsIcon from "@material-ui/icons/Stars";
import { Link } from "react-router-dom";
function Post(props) {
  const { city = "dummy", price = 0, _id, title = "dummy" } = props.post;
  return (
    <div className="post">
      <div className="post__body">
        <div className="post__img">
          <img
            src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="post pic"
          ></img>
        </div>
        <div className="post__info">
          <StarsIcon className="fav__logo" />
          <div className="line1">
            <span>Residencial land/plot in sector xyz Noida</span>
          </div>
          <div className="line2">
            <div className="row">
              <div className="row__option">
                <span className="row__optionLineOne">price</span>
                <span className="row__optionLineTwo">${price}</span>
              </div>
              <div className="row__option">
                <span className="row__optionLineOne">size</span>
                <span className="row__optionLineTwo">345 sq.m</span>
              </div>
              <div className="row__option">
                <span className="row__optionLineOne">bedroom</span>
                <span className="row__optionLineTwo">3BHK</span>
              </div>
            </div>
            <div>
              East facing plot in gated society, near to park for more detail
              pls call
            </div>
          </div>
        </div>
      </div>
      <div className="post__footer">
        <span>Posted on XYZ by ABC</span>
        <Link to={`/post/${_id}`}>
          <button className="primary">View</button>
        </Link>
      </div>
    </div>
  );
}

export default Post;
