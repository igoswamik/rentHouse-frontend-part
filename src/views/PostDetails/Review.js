import React, { useState } from "react";
import "./Review.css";
import ReviewPost from "./ReviewPost";
import axios from "axios";
import Toast from "../../Components/Toast";

const Url = "http://localhost:8081";
function Review(props) {
  const { postid, reviews } = props;

  const [RState, setRState] = useState({
    title: "",
    rate: "",
    body: "",
  });
  const submitAddReview = (e) => {
    axios
      .post(`${Url}/post/${postid}/createreview`, RState)
      .then((response) => {
        Toast.success("Review added!!");
      })
      .catch((err) => {
        Toast.error("Something went wrong!!");
        console.log(err.message);
      });
    e.preventDefault();
    closeModal();
  };

  const onChange = (e) => {
    RState[e.target.name] = e.target.value;
    setRState(RState);
  };
  var setFocus = (evt) => {
    var rateRadios = document.getElementsByName("rate");
    var rateRadiosArr = Array.from(rateRadios);
    var anyChecked = rateRadiosArr.some((radio) => {
      return radio.checked === true;
    });

    if (!anyChecked) {
      var star1 = document.getElementById("star1");
      star1.focus();
    }
  };

  var closeModal = () => {
    const modal = document.getElementById("modal");
    modal.className = "";
    var form = document.getElementById("review-form");
    form.reset();
  };

  var openModal = async () => {
    console.log("open model clicked!!");
    const modal = document.getElementById("modal");
    modal.className = "show";
  };

  var navRadioGroup = (evt) => {
    var star1 = document.getElementById("star1");
    var star2 = document.getElementById("star2");
    var star3 = document.getElementById("star3");
    var star4 = document.getElementById("star4");
    var star5 = document.getElementById("star5");

    if (["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(evt.key)) {
      evt.preventDefault();
      if (evt.key === "ArrowRight" || evt.key === "ArrowDown") {
        switch (evt.target.id) {
          case "star1":
            star2.focus();
            star2.checked = true;
            break;
          case "star2":
            star3.focus();
            star3.checked = true;
            break;
          case "star3":
            star4.focus();
            star4.checked = true;
            break;
          case "star4":
            star5.focus();
            star5.checked = true;
            break;
          case "star5":
            star1.focus();
            star1.checked = true;
            break;
          default:
            break;
        }
      } else if (evt.key === "ArrowLeft" || evt.key === "ArrowUp") {
        switch (evt.target.id) {
          case "star1":
            star5.focus();
            star5.checked = true;
            break;
          case "star2":
            star1.focus();
            star1.checked = true;
            break;
          case "star3":
            star2.focus();
            star2.checked = true;
            break;
          case "star4":
            star3.focus();
            star3.checked = true;
            break;
          case "star5":
            star4.focus();
            star4.checked = true;
            break;
          default:
            break;
        }
      }
    }
  };

  return (
    <div class="review_section">
      <h2>Add Review</h2>
      <button
        id="review-add-btn"
        aria-label="add review"
        title="Add Review"
        onClick={openModal}
      >
        +
      </button>
      {/* <ReviewPost /> */}
      {reviews
        ? reviews.map((review) => {
            return <ReviewPost postid={postid} review={review} />;
          })
        : ""}
      <div
        id="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-review-header"
        class=""
      >
        <button
          class="close-btn"
          aria-label="close"
          title="Close"
          onClick={closeModal}
        >
          x
        </button>
        <div id="review-form-container">
          <h2 id="add-review-header">Add Review</h2>
          <form id="review-form" onSubmit={submitAddReview}>
            <div class="fieldset">
              <label for="reviewName">Title</label>
              <input
                name="title"
                id="reviewName"
                onChange={onChange}
                required=""
              />
            </div>
            <div class="fieldset">
              <label>Rating</label>
              <div class="rate">
                <input
                  type="radio"
                  id="star5"
                  name="rate"
                  value="5"
                  onKeyDown={navRadioGroup}
                  onFocus={setFocus}
                  required=""
                  onChange={onChange}
                />
                <label for="star5" title="5 stars">
                  5 stars
                </label>
                <input
                  type="radio"
                  id="star4"
                  name="rate"
                  value="4"
                  onKeyDown={navRadioGroup}
                  onChange={onChange}
                />
                <label for="star4" title="4 stars">
                  4 stars
                </label>
                <input
                  type="radio"
                  id="star3"
                  name="rate"
                  value="3"
                  onKeyDown={navRadioGroup}
                  onChange={onChange}
                />
                <label for="star3" title="3 stars">
                  3 stars
                </label>
                <input
                  type="radio"
                  id="star2"
                  name="rate"
                  value="2"
                  onKeyDown={navRadioGroup}
                  onChange={onChange}
                />
                <label for="star2" title="2 stars">
                  2 stars
                </label>
                <input
                  type="radio"
                  id="star1"
                  name="https://codepen.io/pen/rate"
                  value="1"
                  onKeyDown={navRadioGroup}
                  onFocus={setFocus}
                  onChange={onChange}
                />
                <label for="star1" title="1 star">
                  1 star
                </label>
              </div>
            </div>

            <div class="fieldset">
              <label for="reviewComments">Comments</label>
              <textarea
                name="body"
                id="reviewComments"
                cols="20"
                rows="5"
                required=""
                onChange={onChange}
              ></textarea>
            </div>
            <div class="fieldset right">
              <button type="submit" id="submit-review-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div class="modal-overlay"></div>
    </div>
  );
}

export default Review;
