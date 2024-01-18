import { companyType } from "./types";

export const companyHistory: companyType[] = [
    {
        id: 1,
        name: "Lạc Việt Computing Corporation",
        timeWork: "Tháng 06 2023 - Tháng 2 2024",
        position: "Full Stack Developer",
        data: [
            {
                name: "ACCNET ERP",
                desc: "Dự án làm về phần mềm kế toán, quản lý trong doanh nghiệp",
                actions: [
                    "Tham gia",
                    "Tham gia",
                    "Tham gia",
                    "Tham gia",
                    "Tham gia",
                    "Tham gia",
                ],
                techStack: [
                    "C#",
                    ".NET",
                    ".NET CORE",
                    "SAP",
                    "OPENUI5",
                    "TypeScript",
                    "SQL SERVER"
                ]
            },
            {
                name: "GÓP VIỆT APP",
                desc: "Ứng dụng di động về cho vay tiền",
                actions: [
                    "Tham gia",
                    "Tham gia",
                    "Tham gia",
                ],
                techStack: [
                    "C#",
                    ".NET",
                    'Ionic',
                    "Angular",
                    "SQL SERVER"
                ]
            }
        ]
    },
    {
        id: 2,
        name: "Emage Development",
        timeWork: "Tháng 04 2022 - Tháng 05 2023",
        position: "Software Developer",
        data: [
            {
                name: "GPredictor",
                desc: "Phần mềm dự đoán ảnh các lends kính, có sai sót hay không dựa trên model AI để đưa ra kết quả",
                actions: [
                    "Tham gia",
                    "Tham gia",
                    "Tham gia",
                    "Tham gia",
                ],
                techStack: [
                    "C#",
                    "C/C++",
                    "WPF",
                    "ReactJS",
                    ".NET API",
                    "SQL SERVER"
                ]
            },
            {
                name: "GLabeler",
                desc: "Thu thập dữ liệu bị lỗi từ các hình ảnh bằng tay, tập trung vào những vùng bị lỗi trên hình ảnh",
                actions: [
                    "Tham gia",
                    "Tham gia",
                ],
                techStack: [
                    "C#",
                    "WPF",
                    "SQL SERVER"
                ]
            }
        ]
    }
]