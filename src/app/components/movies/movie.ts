import { Time } from "@angular/common";

export interface IMovie {
    id: number;
    title: string;
    year: number;
    isCurrent: boolean;
    genres?: string[];
    duration?: string;
};