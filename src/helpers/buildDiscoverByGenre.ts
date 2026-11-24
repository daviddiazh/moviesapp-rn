import { Explore } from "../types/explore";

export const buildDiscoverByGenre = (payload: Explore) => {
    const genresObj: Partial<Record<Explore[number]["genres"][number], { name: Explore[number]["genres"][number] }>> = {}

    payload.forEach(item => {
        item.genres.map(genre => {
           if (genresObj[genre]) return
           genresObj[genre] = {
                name: genre
           };
        });
    })

    const genres: {
        name: Explore[0]["genres"]
    }[] = [];

    for (const item of Object.values(genresObj)) {
        genres.push(item as any)
    }

    return genres;
}
