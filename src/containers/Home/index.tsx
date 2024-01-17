import { FC } from "react";
import {
  Education,
  Experience,
  Header,
  Info,
  Projects,
  TeckStack,
} from "./components";

const Home: FC<Props> = () => {
  return (
    <>
      <div className="w-full min-h-screen py-2 px-12">
        <Header />
        <Info />
        <TeckStack />
        <Education />
        <Experience />
        <Projects />
      </div>
    </>
  );
};

type Props = {};

export default Home;
