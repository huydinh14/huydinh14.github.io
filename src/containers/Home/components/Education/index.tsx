"use client";
import { FC } from "react";
import { useTrans } from "@/services/useTrans";
const Education: FC<Props> = () => {
  const trans = useTrans();
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full mt-5">
          <p className="text-lg font-bold">{trans.education.name}</p>
          <div className="w-full h-1 bg-blue800 rounded-lg mt-1" />
          <div className="w-full flex flex-col gap-1 mt-3">
            <p className="font-semibold text-md">
              {trans.education.school}
            </p>
            {/* <i className="font-normal">Tháng 09 2019 - Tháng 12 2023</i> */}
            <p className="font-normal">{trans.education.speGPA}</p>
          </div>
        </div>
      </div>
    </>
  );
};

type Props = {};

export default Education;
