"use client";
import { Accordion, AccordionItem, Chip, Image, Link } from "@nextui-org/react";
import { FC } from "react";
import { projects } from "./helper";
import { useTrans } from "@/services/useTrans";
const Projects: FC<Props> = () => {
  const trans = useTrans();
  return (
    <>
      <div className="w-full h-full">
        <div className="w-full h-full mt-5">
          <p className="text-lg font-bold">{trans.project}</p>
          <div className="w-full h-1 bg-blue800 rounded-lg mt-1" />
          <Accordion className="mt-5" variant="bordered">
            {projects.map((company) => (
              <AccordionItem
                key={company.id}
                aria-label={company.name}
                title={company.name}
                subtitle={company.timeWork}
                classNames={{ title: "font-bold" }}
                startContent={
                  <Image
                    src={company.image}
                    className="dark:invert"
                    alt="iconCity"
                  />
                }
              >
                <div className="w-[90%] mx-auto flex flex-col justify-center items-start gap-2">
                  <div className="w-full flex justify-start items-center">
                    <p className="w-full font-semibold text-lg first-letter:text-blue800 first-letter:text-[20px]">
                      {company.position}
                    </p>
                    <div className="flex items-center justify-end gap-2">
                      <Link isExternal href={company.linkYT}>
                        {company.linkYT === "" ? "" : "Video"}
                      </Link>
                      <Link isExternal href={company.linkGit}>
                        {company.linkGit === "" ? "" : "Github"}
                      </Link>
                    </div>
                  </div>

                  <p className="font-semibold">
                    Thành viên: {company.memberTotal}
                  </p>
                  {company.data.map((act, index) => (
                    <div className="w-full" key={index}>
                      <div className="w-full flex gap-2 justify-start items-start">
                        <p className="font-semibold underline min-w-max">
                          Mô tả:{" "}
                        </p>
                        <p>{act.desc}</p>
                      </div>
                      <p className="font-semibold underline">Trách nhiệm:</p>
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
                        className="w-full h-full flex justify-start items-start gap-3 my-4"
                      >
                        <div className="w-[15%] flex justify-start items-center">
                          <p className="font-semibold text-md">Công nghệ :</p>
                        </div>
                        <div className="w-[85%] flex flex-wrap justify-start items-center gap-2">
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

export default Projects;
