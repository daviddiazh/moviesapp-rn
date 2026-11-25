export type Search = SearchElement[];

export interface SearchElement {
    score: number;
    show:  Show;
}

export interface Show {
    id:             number;
    url:            string;
    name:           string;
    type:           string;
    language:       string;
    genres:         string[];
    status:         string;
    runtime:        number | null;
    averageRuntime: number | null;
    premiered:      Date | null;
    ended:          Date | null;
    officialSite:   null | string;
    schedule:       Schedule;
    rating:         Rating;
    weight:         number;
    network:        Network | null;
    webChannel:     Network | null;
    dvdCountry:     null;
    externals:      Externals;
    image:          Image | null;
    summary:        null | string;
    updated:        number;
    _links:         Links;
}

export interface Links {
    self:             Self;
    previousepisode?: Previousepisode;
}

export interface Previousepisode {
    href: string;
    name: string;
}

export interface Self {
    href: string;
}

export interface Externals {
    tvrage:  number | null;
    thetvdb: number | null;
    imdb:    null | string;
}

export interface Image {
    medium:   string;
    original: string;
}

export interface Network {
    id:           number;
    name:         string;
    country:      Country | null;
    officialSite: null | string;
}

export interface Country {
    name:     string;
    code:     string;
    timezone: string;
}

export interface Rating {
    average: number | null;
}

export interface Schedule {
    time: string;
    days: string[];
}
