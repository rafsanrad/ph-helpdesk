import React, { use, useState } from "react";
import Container from "./container";
import Toggles_Btns from "./Toggles_Btns";
import CountBox from "./CountBox";

const IssuesManagement = ({fetchPromise}) => {
  const [toggleStatus,setToggleStatus]=useState("All");
  const initialData= use(fetchPromise);
  console.log(initialData)
  return (
    <div>
      <CountBox></CountBox>


      {/* toggle button  */}
      <Toggles_Btns toggleStatus={toggleStatus} setToggleStatus={setToggleStatus}></Toggles_Btns>

      {/* cards */}
      {
        initialData.map(issue=>{
            console.log(issue)
            return <div className="shadow-md cursor-pointer rounded-md bg-slate-100">
                <div>
                    <img src={issue.userImg} className="w-[80px] h-[80px] rounded-full" alt="" />
                </div>
            </div>
        })
      }
    </div>
  );
};

export default IssuesManagement;
