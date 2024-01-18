import { Chip } from "@nextui-org/react";
import { FC } from "react";
import { teckStack } from "./hepler";

const TeckStack: FC<Props> = () => {
  return (
    <>
      <div className="w-full h-full mt-5">
        <p className="text-lg font-bold">KỸ NĂNG</p>
        <div className="w-full h-1 bg-blue800 rounded-lg mt-1" />
        <div className="flex flex-wrap gap-4 items-center justify-start min-h-20 mt-5">
          {teckStack.map((item) => (
            <div
              key={item.id}
              className="w-full h-full flex justify-start items-start gap-3"
            >
              <div className="w-[15%] flex justify-start items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M117.846 184.606c-11.362 11.579-29.419 2.755-29.182-12.927h-.001c.237-15.683.237-71.905.237-87.358c0-15.453 18.3-23.578 29.817-12.17c11.515 11.409 37.257 38.828 43.427 45.614c6.168 6.786 7.463 14.243 0 21.574c-4.855 4.769-17.331 17.589-28.586 29.155c-6.047 6.214-11.741 12.066-15.712 16.112m-12.381-15.368c-.012 2.217 1.246 2.732 2.808 1.162l39.283-39.46a4.055 4.055 0 0 0 .03-5.693l-38.874-39.606c-1.54-1.568-2.808-1.058-2.82 1.152z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="font-normal text-sm">{item.type}</p>
              </div>
              <div className="w-[85%] flex flex-wrap justify-start items-center gap-2">
                {item.tech.map((x) => (
                  <Chip key={x.id} className="cursor-pointer">
                    {x.name}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

type Props = {};

export default TeckStack;
