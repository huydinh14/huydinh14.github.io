import { FC } from "react";

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-full relative">
        <div className="w-full h-max min-h-content-mb flex flex-col items-center justify-start xl:min-h-content-pc">
          {children}
        </div>
      </div>
    </>
  );
};

type Props = { children: React.ReactNode };

export default MainLayout;
