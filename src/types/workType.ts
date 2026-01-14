export type Tech = {
    names: string;
    icon: string;
}

export type Work = {
    title: string;
    image: string;
    description?: string;
    techs?: Tech[];
    github?: string;
    vercel?: string;
    id: string;
};

export type WorksData = Work[];
