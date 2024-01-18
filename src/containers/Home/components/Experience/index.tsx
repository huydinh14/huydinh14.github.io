"use client";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { FC } from "react";
import { responsibilities } from "./hepler";

const Experience: FC<Props> = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full mt-5">
          <p className="text-lg font-bold">KINH NGHIỆM</p>
          <div className="w-full h-1 bg-blue800 rounded-lg mt-1" />
          <Accordion className="mt-5" variant="bordered">
            <AccordionItem
              key="1"
              aria-label="Emage Development"
              title="Emage Development"
              subtitle="Tháng 04 2022 - Tháng 05 2023"
              classNames={{ title: "font-medium" }}
              startContent={
                <Image src="/svg/city.svg" className="dark:invert" alt="iconCity"/>
              }
            >
              <div className="w-full flex flex-col gap-2">
                <p className="font-semibold">FullStack Developer</p>
                <div className="w-full">
                  {responsibilities.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Lac Viet Computing Corporation"
              title="Lac Viet Computing Corporation"
              subtitle="Tháng 06 2023 - Tháng 2 2024"
              classNames={{ title: "font-medium" }}
              startContent={
                <Image src="/svg/city.svg" className="dark:invert" alt="iconCity"/>
              }
            >
              <div className="w-full flex flex-col gap-2">
                <p className="font-semibold">Full Stack Developer</p>
                <div className="w-full">
                  {responsibilities.map((item) => (
                  <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

type Props = {};

export default Experience;
