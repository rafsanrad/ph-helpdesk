import React from "react";
import Container from "./container";

const Toggles_Btns = ({ toggleStatus, setToggleStatus }) => {
  const btns = ["All", "Pending", "Submitted", "Reviewed"];
  return (
    <div>
      <Container>
        <div className="text-right mb-[30px]">
          {btns.map((btn,ind) => {
            //ind is use for index.
            return (
              <button
                key={ind}
                className={`${ind==0 && "rounded-l-md"}
                ${ind==btns.length-1 && "rounded-r-md"} toggle-btn ${
                  toggleStatus == btn && " !bg-purple-500  !text-white"
                }`}
                onClick={() => setToggleStatus(btn)}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Toggles_Btns;
