import React, { useState } from "react";

const Timeline: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setActiveButton(index);
  };

  interface EventData {
    Event: Record<number, string>;
    Timing: string;
  }

  const DataDayOne: EventData[] = [
    {
      Event: {
        1: "Inaugural",
      },
      Timing: "10:00 am - 11:00 am",
    },
    // ... (rest of the data)
  ];

  // Define DataDayTwo and DataDayThree similarly

  return (
    <>
      <div className="text-center text-[30px] md:text-[36px] font-extrabold mt-[20px]">
        <span>
          {" "}
          Timeline for Pravah 2024<span className="text-[#ff583e]">23</span>
        </span>
      </div>

      <div className="flex flex-wrap justify-center  gap-3 md:gap-5 mt-[20px]">
        <div>
          <button
            className={`${
              activeButton === 0 ? "btn_active" : "btn_deactive"
            } tracking-wide px-[30px] py-[14px] btn_active font-extrabold text-[16px] rounded-full `}
            onClick={() => handleButtonClick(0)}
          >
            Day 1
          </button>
        </div>

        <div>
          <button
            className={`${
              activeButton === 1 ? "btn_active" : "btn_deactive"
            } tracking-wide px-[30px] py-[14px] btn_active font-extrabold text-[16px] rounded-full `}
            onClick={() => handleButtonClick(1)}
          >
            Day 2
          </button>
        </div>

        <div>
          <button
            className={`${
              activeButton === 2 ? "btn_active" : "btn_deactive"
            } tracking-wide px-[30px] py-[14px] btn_active font-extrabold text-[16px] rounded-full `}
            onClick={() => handleButtonClick(2)}
          >
            Day 3
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-[20px]">
        <div
          className={`${
            activeButton === 0 ? "active-div" : "deactive-div"
          } text-[18px] `}
        >
          {
          DataDayOne.map((item, index) => (
            <div className="flex justify-center" key={index}>
              <div
                className="block md:flex justify-center items-center border-2 px-[30px] py-[20px] md:px-[40px] md:py-[20px] rounded-[20px] gap-[50px] border-[#ff583e] mb-[10px]"
              >
                <div className="max-[320px]:w-[210px] w-[250px] md:w-[250px]">
                  {Object.keys(item.Event).map((key, index) => (
                    <div key={index}>
                      <span className="font-bold">{item.Event[key]}</span>
                    </div>
                  ),}
                </div>
                <div className="max-[320px]:w-[210px] w-[250px] md:w-[200px]">
                  <span className="">{item.Timing}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Render DataDayTwo and DataDayThree similarly */}
      </div>
    </>
  );
};

export default Timeline;
