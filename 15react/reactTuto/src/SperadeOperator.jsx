import React from "react";

const SperadeOperator = () => {
  const boytList = ["Ravi", "Sumit", "Ritesh", "Roushan"];
  const girlList = ["Raushni", "reshmi", "priya", "pinky"];
  const studentList = [...boytList, ...girlList];

  const mark1 = {
    math: 80,
    english: 70,
    science: 40,
  };

  const mark2 = {
    gk: 80,
    hindi: 70,
    sanskrit: 40,
  };

  const marks = {
    ...mark1,
    ...mark2,
  };

  return (
    <div className="p-2">
      <h1 className="text-2xl text-red-700 ">Sperad Operator</h1>
      <div className="flex justify-between items-center">
        <ul className="">
          {studentList.map((e, index) => {
            return (
              <li key={index} className="text-xl text-black text capitalize ">
                {index} : {e}
              </li>
            );
          })}
        </ul>
        <ul className="">
          {Object.entries(marks).map(([subject, mark]) => (
            <li key={subject}>
              {subject} :{mark}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SperadeOperator;
