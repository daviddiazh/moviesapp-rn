import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { fetchApi } from "../api";
import { endpoints } from "../constants";
import { Explore, Genre } from "../types/explore";
import { buildFeatured } from "../helpers/buildFeatured";
import { buildTrendingShows } from "../helpers/buildTrendingShows";
import { buildTopRated } from "../helpers/buildTopRated";
import { buildDiscoverByGenre } from "../helpers/buildDiscoverByGenre";

const initialValue = [
    {
        title: 'Featured',
        data: [] as ReturnType<typeof buildFeatured>,
    },
    {
        title: 'Trending Shows',
        data: [] as ReturnType<typeof buildTrendingShows>,
    },
    {
        title: 'Top Rated',
        data: [] as ReturnType<typeof buildTopRated>,
    },
    {
        title: 'Discover by Genre',
        data: [] as { name: Genre[] }[],
    },
];

const ExploreContext = createContext(initialValue);

export const ExploreProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState(initialValue);

    const handleData = async (payload: Explore) => {
        const featured = buildFeatured(payload);
        const trendingShows = buildTrendingShows(payload);
        const topRated = buildTopRated(payload);
        const genres = buildDiscoverByGenre(payload);

        setData([
            {
                title: 'Featured',
                data: featured,
            },
            {
                title: 'Trending Shows',
                data: trendingShows,
            },
            {
                title: 'Top Rated',
                data: topRated,
            },
            {
                title: 'Discover by Genre',
                data: genres,
            },
        ]);
    };

    const value = useMemo(() => data, [data]);

    useEffect(() => {
        fetchApi(endpoints.initialPage)
            .then(handleData)
            .catch(console.log);
    }, []);

    return (
        <ExploreContext.Provider value={value}>
            {children}
        </ExploreContext.Provider>
    );
};

export const useExploreContext = () => {
    const value = useContext(ExploreContext);

    if (!value) throw Error('Explore Context is empty')

    return value;
};