import { IGetMessages } from './../../models/forum/index';
import {IGetThemes} from "../../models/forum/index"
import { IGetCategories } from "../../models/forum/index";
import {$api} from "../../http/index"

export const getCategoryById = async () => {
    const response = await $api.get(`/Forum/getCategories`);
    console.log(getCategoryById())
    return response.data;
}

export const getThemeBySectionId = async (dto: IGetThemes) => {
    const response = await $api.get(`/Forum/getThemes?SectionId=${dto.SectionId}&skip=0&take=50`);
    return response.data;
}

export const getMessageByThemeId = async (dto: IGetMessages) => {
    const response = await $api.get(`/Forum/getMessages?themeId=${dto.themeId}&skip=${dto.skip}&take=${dto.take}`);
    return response.data;
}

export const getProgress = async () => {
    const response = await $api.get(`/User/addProgress`);
    return response.data;
}
console.log(getProgress());
console.log(getCategoryById());
// console.log(
//     getCategoryById());

// console.log(
//     getThemeBySectionId({SectionId: 2,skip: 0,take: 50}));

// console.log(
//     getMessageByThemeId({themeId: 3,skip: 0,take: 50}));
