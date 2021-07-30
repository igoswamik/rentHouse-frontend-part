import React, { useState } from "react";
import axios from "axios";
import Toast from "../../Components/Toast";
import { Redirect } from "react-router-dom";
const Url = "http://localhost:8081/post";
function ReviewPost(props) {
  const { postid, review } = props;
  const [redirect, setRedirect] = useState(false);

  const deleteReview = () => {
    axios
      .delete(`${Url}/${postid}/${review._id}`)
      .then((response) => {
        Toast.success("Review deleted successfully!!");
        setRedirect(true);
      })
      .catch((err) => {
        Toast.error("Something went wrong!!");
        console.log(err.message);
      });
  };

  if (redirect === true) {
    return <Redirect to={`/post/${postid}`} />;
  }
  return (
    <div>
      <div class="blog-card">
        <div class="meta">
          <img
            class="photo"
            src="https://adittyadey.xyz/img/pp.jpg"
            alt="imageOfReviewer"
          ></img>
        </div>
        {review ? (
          <div class="description">
            <h1>{review.title}</h1>
            {[...Array(5)].map((v, i) => {
              const count = review.rate;
              if (i < count) {
                return <span class="fa fa-star checked"></span>;
              } else {
                return <span class="fa fa-star"></span>;
              }
            })}

            <br />
            <h2>Adittya Dey</h2>
            <p>{review.body}</p>
            <button className="danger" onClick={deleteReview}>
              delete
            </button>
          </div>
        ) : (
          <div class="description">
            <h1>Great Product!!</h1>
            <span class="fa fa-star checked"></span>;
            <span class="fa fa-star checked"></span>;
            <span class="fa fa-star checked"></span>;
            <span class="fa fa-star "></span>;<span class="fa fa-star "></span>;
            <br />
            <h2>Adittya Dey</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
              dolorum architecto obcaecati enim dicta praesentium, quam nobis!
              Neque ad aliquam facilis numquam. Veritatis, sit.
            </p>
            <button className="danger">delete</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewPost;
