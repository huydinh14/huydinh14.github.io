import { FC } from "react";

const Education: FC<Props> = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full mt-5">
          <p className="text-lg font-bold">HỌC VẤN</p>
          <div className="w-full h-1 bg-blue800 rounded-lg mt-1" />
          <div className="w-full flex flex-col gap-1 mt-3">
            <p className="font-semibold text-md">
              Đại học Công nghiệp Thành phố Hồ Chí Minh
            </p>
            <i className="font-normal">Tháng 09 2019 - Tháng 09 2023</i>
            <p className="font-normal">Kĩ thuật phần mềm | GPA: 7.7</p>
          </div>
        </div>
      </div>
    </>
  );
};

type Props = {};

export default Education;
