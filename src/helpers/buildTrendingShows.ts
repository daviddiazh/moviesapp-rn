import { Explore } from "../types/explore";

export const buildTrendingShows = (data: Explore) => {
    return [...data]
        .sort((a, b) => Math.round(((b.rating.average ?? 0) - (a.rating.average ?? 0)) * 100) / 100)
        .slice(0, 10);
}