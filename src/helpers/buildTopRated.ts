import { Explore } from "../types/explore";

export const buildTopRated = (data: Explore) => {
    const top5 = [...data]
        .sort((a, b) => b.weight - a.weight)
        .slice(0, 10);
    
    return top5;
}