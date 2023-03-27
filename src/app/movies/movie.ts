import { Time } from "@angular/common";

export interface IMovie {
    title: string;
    year: number;
    isCurrent: boolean;
    genres?: string[];
    duration?: string;
};