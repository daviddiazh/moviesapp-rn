import { Explore } from "../types/explore";

export const buildFeatured = (data: Explore) => {
    return [...data]
        .sort((a, b) => a.weight - b.weight)
        .slice(0, 10);
}