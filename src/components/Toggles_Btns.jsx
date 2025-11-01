import React from "react";
import Container from "./container";

const Toggles_Btns = ({toggleStatus,setToggleStatus}) => {
  return (
    <div>
      <Container>
        <div className="text-right mb-[30px]">
          <button
            className={`toggle-btn border-r-2 rounded-l-md ${
              toggleStatus == "All" && " !bg-purple-500  !text-white"
            }`}
            onClick={() => setToggleStatus("All")}
          >
            All
          </button>
          <button
            className={`toggle-btn border-r-2 ${
              toggleStatus == "Pending" && " !bg-purple-500  !text-white"
            }`}
            onClick={() => setToggleStatus("Pending")}
          >
            Pending
          </button>
          <button
            className={`toggle-btn border-r-2 ${
              toggleStatus == "Submitted" && " !bg-purple-500  !text-white"
            }`}
            onClick={() => setToggleStatus("Submitted")}
          >
            Submitted
          </button>
          <button
            className={`toggle-btn  rounded-r-md ${
              toggleStatus == "Reviewed" && " !bg-purple-500  !text-white"
            }`}
            onClick={() => setToggleStatus("Reviewed")}
          >
            Reviewed
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Toggles_Btns;
