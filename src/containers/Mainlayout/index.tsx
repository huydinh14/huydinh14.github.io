import { FC } from "react";

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full relative">
        <div className="w-full sm:w-3/4 md:w-3/4 lg:w-[54%] flex justify-center items-center mx-auto my-5 rounded-xl bg-white dark:bg-blackDarkBlur text-backBlur dark:border-1 dark:border-gray-400 dark:text-white dark:shadow-white dark:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="w-full h-max min-h-content-mb flex flex-col items-center justify-start xl:min-h-content-pc">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

type Props = { children: React.ReactNode };

export default MainLayout;
