import { TechType } from "./types";

export const teckStack: TechType[] = [
    {
        id: "FE",
        type: "Front End",
        tech: [
            {
                id: "1",
                name: "HTML",
                isMain: true
            },
            {
                id: "2",
                name: "CSS",
                isMain: true
            },
            {
                id: "3",
                name: "JavaScript",
                isMain: true
            },
            {
                id: "4",
                name: "ReactJs",
                isMain: true
            },
            {
                id: "5",
                name: "NextJs",
                isMain: true
            },
            {
                id: "6",
                name: "SASS",
                isMain: true
            },
            {
                id: "7",
                name: "Tailwind CSS",
                isMain: true
            },
            {
                id: "8",
                name: "TypeScript",
                isMain: true
            },
        ]
    },
    {
        id: "BE",
        type: "Back End",
        tech: [
            {
                id: "1",
                name: "C#",
                isMain: true
            },
            {
                id: "2",
                name: ".NET",
                isMain: true
            },
            {
                id: "3",
                name: ".NET CORE",
                isMain: true
            },
            {
                id: "4",
                name: "NodeJS",
                isMain: false
            }
        ]
    },
    {
        id: "DB",
        type: "DataBase",
        tech: [
            {
                id: "1",
                name: "SQL SERVER",
                isMain: true
            },
            {
                id: "2",
                name: "MongoDB",
                isMain: false
            }
        ]
    },
    {
        id: "Git",
        type: "Git",
        tech: [
            {
                id: "1",
                name: "Github",
                isMain: true
            },
            {
                id: "2",
                name: "Bitbucket",
                isMain: false
            }
        ]
    },
    {
        id: "Other",
        type: "Other",
        tech: [
            {
                id: "1",
                name: "Agile Scrum",
                isMain: true
            },
            {
                id: "2",
                name: "Understanding Technical Documentation",
                isMain: false
            }
        ]
    }
]