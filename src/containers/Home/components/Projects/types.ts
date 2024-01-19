export interface projectType {
    id: number,
    image: string,
    name: string,
    timeWork: string,
    memberTotal: number,
    position: string,
    linkYT: string,
    linkGit: string,
    data: {
        desc: string,
        actions: string[],
        techStack: string[],
    }[];

}