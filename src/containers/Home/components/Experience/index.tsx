import { FC } from "react";

const Experience: FC<Props> = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full mt-5">
          <p className="text-lg font-bold">KINH NGHIỆM</p>
          <div className="w-full h-1 bg-blue800 rounded-lg mt-1" />
          <div className="w-full flex flex-col gap-1 mt-3">
            <p className="font-bold text-md">Emage Development</p>
            <i className="font-normal">Tháng 04 2022 - Tháng 05 2023</i>
            <p className="font-semibold">FullStack Developer</p>
            <div className="w-full">
              <p>
                Phát triển các tính năng mới và duy trì ứng dụng web hiện có
                bằng cách sử dụng Angular và Material UI Thiết kế, code, thử
                nghiệm các ứng dụng di động hybrid với Ionic, Cordova và
                Capacitor Tối ưu hóa ứng dụng để có hiệu suất tốt hơn Xây dựng
                các thành phần có thể tái sử dụng Viết mã nguồn sạch sẽ, hiệu
                quả và có thể mở rộng Tài liệu hướng dẫn kỹ thuật, hướng dẫn sử
                dụng
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 mt-3">
            <p className="font-bold text-md">Emage Development</p>
            <i className="font-normal">Tháng 04 2022 - Tháng 05 2023</i>
            <p className="font-semibold">FullStack Developer</p>
            <div className="w-full">
              <p>
                Phát triển các tính năng mới và duy trì ứng dụng web hiện có
                bằng cách sử dụng Angular và Material UI Thiết kế, code, thử
                nghiệm các ứng dụng di động hybrid với Ionic, Cordova và
                Capacitor Tối ưu hóa ứng dụng để có hiệu suất tốt hơn Xây dựng
                các thành phần có thể tái sử dụng Viết mã nguồn sạch sẽ, hiệu
                quả và có thể mở rộng Tài liệu hướng dẫn kỹ thuật, hướng dẫn sử
                dụng
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

type Props = {};

export default Experience;
