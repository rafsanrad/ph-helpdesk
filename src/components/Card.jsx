import React from "react";

const Card = ({issue}) => {
  return (
      <div className="shadow-md cursor-pointer rounded-md bg-slate-100 p-4">
        <div>
          <img
            src={issue.userImg}
            title={issue.requestedBy}
            className="w-[80px] h-[80px] rounded-full"
            alt={issue.requestedBy}
          />
          <h2 className="font-semibold text-lg">{issue.requestedBy}</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="font-bold text-[25px]">{issue.subject}</h2>
          <div>
            <span
              className={`font-semibold py-1 px-2 shadow rounded mr-2 ${
                issue.priority == "High"
                  ? "text-red-500 bg-red-100"
                  : issue.priority == "Medium"
                  ? "text-yellow-500 bg-yellow-100"
                  : "text-green-500 bg-green-100"
              }`}
            >
              {issue.priority}
            </span>
            <span
              className={`font-semibold py-1 px-2 shadow rounded mr-2 ${
                issue.status == "Pending"
                  ? "text-red-500 bg-red-100"
                  : issue.status == "Submitted"
                  ? "text-yellow-500 bg-yellow-100"
                  : "text-green-500 bg-green-100"
              }`}
            >
              {issue.status}
            </span>
          </div>
        </div>
        <p className="text-[17px] text-slate-700">{issue.description}</p>
      </div>
    
  );
};

export default Card;
