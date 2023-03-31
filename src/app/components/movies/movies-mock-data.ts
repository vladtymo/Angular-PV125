import { IMovie } from "./movie";

export const MOVIES: IMovie[] = [
    { id: 1, title: "Wrath of Man", genres: ["Action", "Crime"], year: 2021, duration: "1:58", isCurrent: false },
    { id: 2, title: "Sniper", genres: ["Action", "War"], year: 2022, duration: "1:40", isCurrent: true },
    { id: 3, title: "Fall", genres: ["Thriller", "Survival"], year: 2022, duration: "1:47", isCurrent: true },
    { id: 4, title: "The Fast and the Furious", genres: ["Crime", "Adventure"], year: 2001, duration: "1:46", isCurrent: false }
];