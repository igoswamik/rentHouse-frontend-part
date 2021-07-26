import React from "react";

const Loading = () => {
  return (
    <div className="container">
      <div className="row h-100">
        <div className="col-sm-12 my-auto text-center py-8">
          <div className="spinner-grow my-8">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
