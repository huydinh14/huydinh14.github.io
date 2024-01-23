"use client";
import { FC } from "react";
import { Image, Link } from "@nextui-org/react";
import { useTrans } from "@/services/useTrans";

const Info: FC<Props> = () => {
  const trans = useTrans();
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
            <p className="font-bold text-2xl">{trans.info.yourName}</p>
            <p className="font-normal text-md">FULL STACK DEVELOPER</p>
          </div>
        </div>
        <div className="w-full info font-normal text-md flex flex-col gap-1.5 items-end text-backBlur">
          <p className="text-backBlur dark:text-white cursor-pointer">
            {trans.info.birthDate}
          </p>
          <Link
            isExternal
            href="tel:+84335293294"
            className="text-backBlur dark:text-white"
          >
            {trans.info.phone}
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
      <div className="w-full mt-8 text-justify">
        <p>{trans.info.profile}</p>
      </div>
    </>
  );
};

type Props = {};

export default Info;
