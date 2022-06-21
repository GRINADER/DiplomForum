import {IGetNews} from "../../models/news/index"
import {$api} from "../../http/index"
export const getNews = async (dto: IGetNews) => {
    const response = await $api.get(`/Forum/getNews}`);
    return response.data;
}
const x = getNews({
    SectionId: 1,
    skip: 0,
    take: 50
});
console.log(getNews({SectionId: 0,
    skip: 0,
    take: 50}));
    
    console.log(20);
    console.log("ABC");
    console.log(23)
    const z = 4;
    console.log(7);

    //&skip=${dto.skip}&take=${dto.take}