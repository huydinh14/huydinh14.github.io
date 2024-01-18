export interface companyType {
    id: number,
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