import { companyType } from "./types";

export const companyHistory: companyType[] = [
    {
        id: 1,
        name: "Lạc Việt Computing Corporation",
        image: 'svg/city.svg',
        timeWork: "Tháng 06 2023 - Tháng 2 2024",
        position: "Full Stack Developer",
        data: [
            {
                name: "ACCNET ERP",
                link: "",
                desc: "Dự án làm về phần mềm kế toán, quản lý trong doanh nghiệp.",
                actions: [
                    "Phát triển các tính năng mới theo các chức năng yêu cầu của bên khách hàng",
                    "Thực hiện cấu hình và kết nối bankhub, thanh toán với ngân hàng điện tử giữa phần mềm với MB, OCB và ACB",
                    "Thực hiện sửa lỗi của các khách hàng",
                    "Tài liệu hướng dẫn kỹ thuật, hướng dẫn sử dụng"
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
                desc: "Ứng dụng di động về cho vay tiền.",
                link: "",
                actions: [
                    "Phát triển các tính năng mới theo các chức năng yêu cầu của bên khách hàng",
                    "Thực hiện sửa lỗi của các khách hàng",
                    "Tài liệu hướng dẫn kỹ thuật, hướng dẫn sử dụng"
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
        image: 'svg/city.svg',
        timeWork: "Tháng 04 2022 - Tháng 05 2023",
        position: "Software Developer",
        data: [
            {
                name: "GPredictor",
                link: "",
                desc: "Phần mềm dự đoán ảnh các lends kính, có sai sót hay không dựa trên model AI để đưa ra kết quả.",
                actions: [
                    "Phát triển các tính năng mới theo yêu cầu ứng dụng có sẵn",
                    "Thực hiện cấu hình và chuyển đổi việc lưu trữ dữ liệu và thống kê về các dự đoán của phần mềm được thông qua website thay vì excel",
                    "Tài liệu hướng dẫn kỹ thuật, hướng dẫn sử dụng",
                ],
                techStack: [
                    "C#",
                    "C/C++",
                    "WPF",
                    "ReactJS",
                    "Ant Design",
                    ".NET CORE API",
                    "SQL SERVER"
                ]
            },
            {
                name: "GLabeler",
                link: "",
                desc: "Ứng dụng giúp người dùng thu thập dữ liệu các vùng bị lỗi trên hình ảnh.",
                actions: [
                    "Phát triển các tính năng mới theo yêu cầu ứng dụng có sẵn",
                    "Tài liệu hướng dẫn kỹ thuật, hướng dẫn sử dụng",
                ],
                techStack: [
                    "C#",
                    "WPF"
                ]
            }
        ]
    },
    {
        id: 3,
        image: 'svg/laptop.svg',
        name: "Freelancer",
        timeWork: "",
        position: "Software Developer",
        data: [
            {
                name: "Solid Safe",
                desc: "Website bán két sắt từ một công ty của Hàn Quốc",
                link: "https://solidsafe.tuanit.vn",
                actions: [
                    "Phát triển giao diện theo design Figma được cung cấp",
                    "Thảo luận và tham gia sửa lỗi dự án"
                ],
                techStack: [
                    "NextJS",
                    "Tailwind CSS",
                    "TypeScript",
                    "CI/CD",
                ]
            }
        ]
    }
]