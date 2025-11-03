import React, { use, useState } from "react";
import Container from "./container";
import Toggles_Btns from "./Toggles_Btns";
import CountBox from "./CountBox";
import Card from "./Card";

const IssuesManagement = ({ fetchPromise }) => {
  const [toggleStatus, setToggleStatus] = useState("All");
  const initialData = use(fetchPromise);
  const [data,setData]=useState(initialData)
  return (
    <div>
      <CountBox data={data}></CountBox>

      {/* toggle button  */}
      <Toggles_Btns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></Toggles_Btns>

      {/* cards */}
      <Container>
      <div className="grid grid-cols-3 gap-4 mb-5">
        {data.map((issue,ind) => {
          console.log(issue);
          return (
            <Card key={ind} issue={issue}></Card>
          );
        })}
      </div>
      </Container>
    </div>
  );
};

export default IssuesManagement;
