import React from "react";
import Container from "./container";

const CountBox = ({data}) => {

  const pendingData=data.filter((element)=>element.status=="Pending");
  const submittedData=data.filter((element)=>element.status=="Submitted");
  const reviewedData=data.filter((element)=>element.status=="Reviewed");
  // console.log(pendingData,submittedData,reviewedData)
  return (
    <div>
      {/* box */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
          <div className="rounded-md p-7 h-[250px] text-white bg-gray-400 flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl">Pending</h2>
            <p className="font-semibold text-3xl">{pendingData.length}</p>
          </div>
          <div className="rounded-md p-7 h-[250px] text-white bg-purple-400 flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl">Submitted</h2>
            <p className="font-semibold text-3xl">{submittedData.length}</p>
          </div>
          <div className="rounded-md p-7 h-[250px] text-white bg-green-400 flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl">Reviewed</h2>
            <p className="font-semibold text-3xl">{reviewedData.length}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CountBox;
