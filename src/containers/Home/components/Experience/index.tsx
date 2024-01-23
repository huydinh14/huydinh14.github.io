"use client";
import { Accordion, AccordionItem, Chip, Image, Link } from "@nextui-org/react";
import { FC } from "react";
import { useTrans } from "@/services/useTrans";

const Experience: FC<Props> = () => {
  const trans = useTrans();
  const conpanyHistory = trans.expCompany;
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full mt-5">
          <p className="text-lg font-bold">{trans.experience}</p>
          <div className="w-full h-1 bg-blue800 rounded-lg mt-1" />
          <Accordion className="mt-5" variant="bordered">
            {conpanyHistory.map((company) => (
              <AccordionItem
                key={company.id}
                aria-label={company.name}
                title={company.name}
                subtitle={
                  <div className="flex justify-between">
                    <p>{company.timeWork}</p>
                    <p>{company.timeExp}</p>
                  </div>
                }
                classNames={{ title: "font-bold", subtitle: "font-medium" }}
                startContent={
                  <Image
                    src={company.image}
                    className="dark:invert"
                    alt="iconCity"
                  />
                }
              >
                <div className="w-[90%] mx-auto flex flex-col justify-center items-start gap-2">
                  <p className="font-semibold text-lg first-letter:text-blue800 first-letter:text-[20px]">
                    {company.position}
                  </p>
                  {company.data.map((act, index) => (
                    <div className="w-full" key={index}>
                      <div
                        className={`w-full flex items-center ${
                          act.link !== ""
                            ? "flex-col sm:flex-row justify-start"
                            : "flex-row justify-between"
                        }`}
                      >
                        <div className="w-full flex justify-start items-center gap-2">
                          <Image
                            src="svg/tag.svg"
                            alt="Tag Project"
                            className="dark:invert"
                          />
                          <p className="w-full font-semibold text-md">
                            {trans.projectName} {act.name}
                          </p>
                        </div>
                        <div
                          className={`w-full flex items-center justify-start sm:justify-end ${
                            act.link === "" ? "hidden" : "justify-start"
                          }`}
                        >
                          <Link isExternal href={act.link}>
                            {act.link}
                          </Link>
                        </div>
                      </div>
                      <div className="w-full sm:flex gap-2 justify-start items-start">
                        <p className="font-semibold underline min-w-max">
                          {trans.desc}
                        </p>
                        <p>{act.desc}</p>
                      </div>
                      <p className="font-semibold underline">
                        {trans.responsibility}
                      </p>
                      {act.actions.map((item, index) => (
                        <div
                          key={index}
                          className="w-full flex items-start justify-start gap-2"
                        >
                          <p>- </p>
                          <p>{item}</p>
                        </div>
                      ))}
                      <div
                        key={index}
                        className="w-full h-full sm:flex justify-start items-start gap-3 my-4"
                      >
                        <div className="w-full sm:w-[15%] flex justify-start items-center">
                          <p className="w-full font-semibold text-md mb-2 sm:mb-0">
                            {trans.tech}
                          </p>
                        </div>
                        <div className="w-full sm:w-[85%] flex flex-wrap justify-start items-center gap-2">
                          {act.techStack.map((item, index) => (
                            <Chip
                              className="cursor-pointer"
                              key={index}
                              color="danger"
                            >
                              {item}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

type Props = {};

export default Experience;
