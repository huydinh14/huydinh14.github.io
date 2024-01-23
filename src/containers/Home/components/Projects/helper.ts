import { projectType } from "./types";

export const projectsVI: projectType[] = [
    {
        id: 1,
        name: "MediHealth",
        image: 'svg/project.svg',
        timeWork: "3 Tháng",
        memberTotal: 2,
        position: "Full Stack Developer",
        linkYT: "https://www.youtube.com/watch?v=NKFldOtwigo&t=1s",
        linkGit: "",
        data: [
            {
                desc: "Dự án theo dõi nhịp tim trên web và di động, thiết bị IOT tự thiết kế, cảnh báo khi nhịp tim tăng hoặc giảm đột ngột, sử dụng AI để dự đoán kịp thời tình trạng bệnh tật của bệnh nhân.",
                actions: [
                    "Phân tích và thiết kế hệ thống",
                    "Thực hiện cấu hình và phát triển các chức năng theo tài liệu",
                    "Triển khai CI/CD với Azure DevOps",
                    "Thiết kế và thực hiện triển khai thiết bị IOT đeo tay theo dõi nhịp tim",
                    "Tài liệu hướng dẫn kỹ thuật, hướng dẫn sử dụng"
                ],
                techStack: [
                    "ReactJS",
                    "NodeJS",
                    "MongoDB",
                    "Ant Design",
                    "SQL SERVER",
                    "IOT",
                    "Azure DevOps"
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Hallo Chat",
        image: 'svg/project.svg',
        timeWork: "4 tháng",
        memberTotal: 1,
        position: "Full Stack Developer",
        linkYT: "",
        linkGit: "",
        data: [
            {
                desc: "Dự án clone lại Zalo Web, bao gồm các tính năng như chat đơn, tạo nhóm chat, chat nhóm, gửi sticker, GIF, gửi ảnh và video,...",
                actions: [
                    "Thực hiện cấu hình và phát triển các chức năng theo Zalo web",
                    "Tài liệu hướng dẫn kỹ thuật, hướng dẫn sử dụng"
                ],
                techStack: [
                    "ReactJS",
                    "NodeJS",
                    "SocketIO",
                    "Ant Design",
                    "MongoDB"
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Snake",
        image: 'svg/project.svg',
        timeWork: "15 ngày",
        memberTotal: 1,
        position: "Software Developer",
        linkYT: "https://www.youtube.com/watch?v=XHxk-CwbUmA",
        linkGit: "",
        data: [
            {
                desc: "Một trong những trò chơi thời thơ ấu, rắn săn mồi.",
                actions: [
                    "Thực hiện các chức năng chính của một game rắn săn mồi",
                    "Tối ưu và thiết kế giao diện game"
                ],
                techStack: [
                    "C/C++"
                ]
            }
        ]
    },
]

export const projectsEN: projectType[] = [
    {
        id: 1,
        name: "MediHealth",
        image: 'svg/project.svg',
        timeWork: "3 months",
        memberTotal: 2,
        position: "Full Stack Developer",
        linkYT: "https://www.youtube.com/watch?v=NKFldOtwigo&t=1s",
        linkGit: "",
        data: [
            {
                desc: "Heart rate monitoring project on web and mobile, self-designed IOT device, warning when heart rate suddenly increases or decreases, using AI to promptly predict the patient's illness.",
                actions: [
                    "System analysis and design",
                    "Perform configuration and develop functions according to documentation",
                    "Deploy CI/CD with Azure DevOps",
                    "Design and implementation of wearable IOT heart rate monitoring device",
                    "Technical documentation, user manual"
                ],
                techStack: [
                    "ReactJS",
                    "NodeJS",
                    "MongoDB",
                    "Ant Design",
                    "SQL SERVER",
                    "IOT",
                    "Azure DevOps"
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Hallo Chat",
        image: 'svg/project.svg',
        timeWork: "4 months",
        memberTotal: 1,
        position: "Full Stack Developer",
        linkYT: "",
        linkGit: "",
        data: [
            {
                desc: "Zalo Web clone project, including features such as single chat, creating group chat, group chat, sending stickers, GIFs, sending photos and videos,...",
                actions: [
                    "Perform configuration and develop functions according to Zalo web",
                    "Technical documentation, user manual"
                ],
                techStack: [
                    "ReactJS",
                    "NodeJS",
                    "SocketIO",
                    "Ant Design",
                    "MongoDB"
                ]
            }
        ]
    },
    {
        id: 3,
        name: "Snake",
        image: 'svg/project.svg',
        timeWork: "15 days",
        memberTotal: 1,
        position: "Software Developer",
        linkYT: "https://www.youtube.com/watch?v=XHxk-CwbUmA",
        linkGit: "",
        data: [
            {
                desc: "One of the childhood games, snake hunting.",
                actions: [
                    "Performs the main functions of a snake hunting game",
                    "Optimize and design game interface"
                ],
                techStack: [
                    "C/C++"
                ]
            }
        ]
    },
]