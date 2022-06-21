import React, {useState, useEffect} from "react";
import { Accordion, Button, Container, Table } from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../../../app/hooks";
import { fetchGetCategories } from "../../../../../features/forum/forumSlice";
import {ThemeType} from "../../../../../features/forum/types/index"

export interface OneThemeType {
    id: number,
    title: string,
    description: string,
    createDate: Date | null | string,
    sectionId: number,
    authorId: number,
    authorName: string,
    countMessages: number,
    //themes: Array<ThemeType>,
}

const OneTheme: React.FC<OneThemeType> = ({id,title,description,createDate}) =>{
  
    // const dispatch = useAppDispatch();
    // const themeId = useAppSelector(state => state.forum.themes.id);
    // const themeTitle = useAppSelector(state => state.forum.themes.title);
    // const themeDescription = useAppSelector(state => state.forum.themes.description);
    // const themeCreateDate = useAppSelector(state => state.forum.themes.createDate);
    // const themeSection = useAppSelector(state => state.forum.themes.sectionId);
    // const themeAuthorId = useAppSelector(state => state.forum.themes.authorId);
    // const themeAuthorName = useAppSelector(state => state.forum.themes.authorName);
    // const themeMessagesCount = useAppSelector(state => state.forum.themes.countMessages);
    //console.log(useAppSelector(state => state.forum.allThemes.themes))
    const CategoriesCount = fetchGetCategories(); 

            return(
                <Accordion.Item eventKey={`${id}`+`${CategoriesCount}`+1+10} className="mt-2">
                <Accordion.Header >Тема № {id} {title}</Accordion.Header>
                {/* {console.log(id)} */}
                {/* onClick={() => {dispatch(fetchGetCategories())}} */}
                <Accordion.Body>
                    <div>{description}</div>
                    <div>{`${createDate}`}</div>
                    <div></div>
                </Accordion.Body>
                </Accordion.Item>
            )
}

export {OneTheme};