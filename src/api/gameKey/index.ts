import {IGetGameKey} from "../../models/gameKey/index"
import {$api} from "../../http/index"
export const getGameKey = async (dto: IGetGameKey) => {
    const response = await $api.get(`/Forum/getNews}`);
    return response.data;
}
const x = getGameKey({
    SectionId: 1,
    skip: 0,
    take: 50
});
console.log(getGameKey({SectionId: 0,
    skip: 0,
    take: 50}));
    
    console.log(20);
    console.log("ABC");
    console.log(23)
    const z = 4;
    console.log(7);

    //&skip=${dto.skip}&take=${dto.take}
