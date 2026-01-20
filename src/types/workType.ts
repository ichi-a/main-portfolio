import { StaticImageData } from "next/image";

export type Tech = {
    names: string;
    icon: string;
}

export type Description = {
    heading: string
    body: string
}

export type Work = {
    title: string;
    image: StaticImageData;
    description?: Description[];
    techs?: Tech[];
    github?: string;
    vercel?: string;
    id: string;
};

export type WorksData = Work[];
