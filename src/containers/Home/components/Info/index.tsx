import { FC } from "react";
import { Image, Link } from "@nextui-org/react";

const Info: FC<Props> = () => {
  return (
    <>
      <div className="w-full h-full flex justify-between items-center">
        <div className="w-full flex gap-5">
          <div className="avatar w-[122px] h-[122px] overflow-hidden rounded-full flex justify-center items-start">
            <Image
              src="/images/avatar.jpg"
              className="scale-125"
              width={98}
              alt="Avatar huydinh14"
            />
          </div>
          <div className="w-auto flex flex-col items-start justify-center">
            <p className="font-bold text-2xl">DINH QUANG HUY</p>
            <p className="font-normal text-md">FULL STACK DEVELOPER</p>
          </div>
        </div>
        <div className="w-full info font-normal text-md flex flex-col gap-1.5 items-end text-backBlur">
          <p className="text-backBlur dark:text-white cursor-pointer">
            Tháng 3 Năm 2001
          </p>
          <Link
            isExternal
            href="tel:+84335293294"
            className="text-backBlur dark:text-white"
          >
            0335 293 294
          </Link>
          <Link
            isExternal
            href="https://github.com/huydinh14"
            className="text-backBlur dark:text-white"
          >
            GitHub: github.com/huydinh14
          </Link>
          <Link
            isExternal
            href="mailto:huydinhse@gmail.com"
            className="text-backBlur dark:text-white"
          >
            Email: huydinhse@gmail.com
          </Link>
          <Link
            isExternal
            href="https://www.linkedin.com/in/huydinhse/"
            className="text-backBlur dark:text-white"
          >
            Linkedin: huydinhse
          </Link>
        </div>
      </div>
      <div className="w-full mt-8 text-justify animate-pulse">
        <p>
          Tôi đang tìm kiếm cơ hội làm Nhà phát triển Full Stack, nơi tôi có thể
          sử dụng kỹ năng đa ngôn ngữ lập trình của mình. Trong phần backend,
          tôi có kinh nghiệm làm việc với C#, .NET, và .NET Core. Ở mặt trước,
          tôi đã làm việc với nhiều công nghệ như HTML, CSS, JavaScript, và các
          framework như ReactJs và NextJs. Tôi tin rằng khả năng làm việc cả hai
          phía của ứng dụng sẽ giúp tôi đóng góp mạnh mẽ vào việc phát triển và
          duy trì hệ thống. Đồng thời, sự linh hoạt này cũng giúp tôi nắm bắt và
          áp dụng nhanh chóng các công nghệ mới, làm tăng khả năng thích ứng của
          đội ngũ.
        </p>
      </div>
    </>
  );
};

type Props = {};

export default Info;
