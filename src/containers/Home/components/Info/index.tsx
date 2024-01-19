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
          Tôi đang tìm kiếm vị trí Nhà phát triển web, nơi tôi có thể áp dụng
          kiến thức và kinh nghiệm của mình với C#, .NET, và .NET Core trong
          việc xử lý backend. Đồng thời, tôi có đam mê tìm hiểu và làm việc với
          các công nghệ mới, đặc biệt là các JavaScript frameworks khác. Tôi tin
          rằng sự đa dạng về kỹ năng này sẽ giúp tôi đóng góp mạnh mẽ vào dự án
          và phát triển công nghệ của đội ngũ.
        </p>
      </div>
    </>
  );
};

type Props = {};

export default Info;
