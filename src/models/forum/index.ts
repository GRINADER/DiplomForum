export interface IGetCategories{
    skip: number;
    take: number;
}

export interface IGetThemes {
    SectionId: number;
}

export interface IGetMessages {
    themeId: number;
    skip: number;
    take: number;
}