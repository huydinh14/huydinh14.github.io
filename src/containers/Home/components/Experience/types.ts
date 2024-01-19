export interface companyType {
    id: number,
    image: string,
    name: string,
    timeWork: string,
    position: string,
    data: {
        name: string,
        desc: string,
        actions: string[],
        techStack: string[],
    }[];

}