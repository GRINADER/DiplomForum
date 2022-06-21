export interface AllCategoriesType{
    totalCount: number,
    categories: Array<CategoriesType>,
}

export interface CategoriesType{
    id: number,
    title: string,
    sections: Array<SectionType>,
}

export interface SectionType{
    id: number,
    title: string,
    description: string,
    countThemes: number,
    categoryId: number,
}

export interface AllThemeType{
    totalCount: number,
    sectionId: number,
    sectionTitle: string,
    sectionDescription: string,
    sectionCategoryId: number,
    sectionCategoryName: string,
    themes: Array<ThemeType>,
}

export interface ThemeType{
    id: number,
    title: string,
    description: string,
    createDate: Date | null | string,
    sectionId: number,
    authorId: number,
    authorName: string,
    countMessages: number,    
}

export interface AllMessagesType{
    totalCount: number,
    themeId: number,
    themeName: string,
    themeDescription: string,
    themeSectionId: number,
    themeSectionName: string,
    themeAuthorId: number,
    themeAuthorName: string,
    messages: Array<MessageType>,
}

export interface MessageType{
    id: number,
    text: string,
    createDate: Date | null | string,
    authorId: number,
    authorName: string,
    themeId: number,
}

export interface ProgressType{
    id: number,
    value: number,
    userId: number,
}

