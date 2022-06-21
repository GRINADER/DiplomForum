import React, {useState, useEffect} from "react";
import { Accordion, Button, Container, Nav, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import { fetchGetCategories, fetchGetThemes } from "../features/forum/forumSlice";
import { OneTheme } from "./Users/OneCategory/OneSection/OneTheme";
// import {AllThemeType} from "../features/forum/types/index"
//import {IGetThemes} from "../models/forum/index"

export interface AllThemeType {
    // id: number,
    // title: string,
    // description: string,
    // createDate: Date | null | string,
    // sectionId: number,
    // authorId: number,
    // authorName: string,
    // countMessages: number,
    //themes: Array<ThemeType>,
}

const MessagePage: React.FC<AllThemeType> = ({}) =>{
    //const CategoriesCount = fetchGetCategories(); 
    const dispatch = useAppDispatch();
    const totalCount = useAppSelector(state => state.forum.allThemes.totalCount);
    const sectionId = useAppSelector(state => state.forum.allThemes.sectionId);
    const sectionTitle = useAppSelector(state => state.forum.allThemes.sectionTitle);
    const sectionDescription = useAppSelector(state => state.forum.allThemes.sectionDescription);
    const sectionCategoryId = useAppSelector(state => state.forum.allThemes.sectionCategoryId);
    const sectionCategoryName = useAppSelector(state => state.forum.allThemes.sectionCategoryName);
    const themes = useAppSelector(state => state.forum.allThemes.themes);
    
    // console.log(useAppSelector(state => state.forum.allThemes.themes))
    // console.log(totalCount)
    // console.log(sectionId)
    // console.log(themes)

        return(
            
            
            <Accordion defaultActiveKey="1" className="mt-3 mb-3" alwaysOpen>
                <Accordion.Item eventKey={`${sectionId}`+1} > 
                    <Accordion.Header onClick={() => {dispatch(fetchGetThemes({SectionId:2}))}}>
                        Название темы : NEW
                        </Accordion.Header>
                    <Accordion.Body>
                        Количество сообщений: 2

                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                
                                <th>authorId</th>
                                <th>authorName</th>
                                <th>createdDate</th>
                                <th>Text Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                
                                <td>3</td>
                                <td>user</td>
                                <td>2022-05-21T22:45:36.092434Z</td>
                                <td>SDFSDfdfSDFSDfdfSDFSDfdf</td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg></td>
                                </tr>
                                <tr>
                                
                                <td>3</td>
                                <td>user</td>
                                <td>2022-05-21T22:45:36.092434Z</td>
                                <td>AAAAAaaaaa</td>
                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
</svg></td>
                                </tr>
                            </tbody>
                        </Table>
                        {/* <Accordion.Item eventKey={`${sectionId}`+2} >
                            
                        <Accordion.Header onClick={() => {dispatch(fetchGetThemes({SectionId:2}))}}>
                        

                        </Accordion.Header>
                            </Accordion.Item>  */}
                            
                            {/* <Accordion>
                                <Accordion.Item eventKey={`${sectionId}`+2} >
                                    <Accordion.Header></Accordion.Header>
                                        <Accordion.Body>
                                            fdf
                                        </Accordion.Body>
                                </Accordion.Item>
                            </Accordion> */}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
                
        )
}

export {MessagePage};

// export const Sectionpage = () => (
//     <>
//         <Button></Button>
//     </>
// );


{/* <div>Секция № {id} {title}</div>
                <div>Описание: {description} </div> */}
                {/* <div>Количество тем: {countThemes}</div>  */}
                {/* <Accordion.Item eventKey={`${id}`+`${CategoriesCount}`+1+10} className="mt-2"> */}
                {/* <Accordion.Header>Тема № {id} {title}</Accordion.Header> */}
                {/* {console.log(id)} */}
                {/* onClick={() => {dispatch(fetchGetCategories())}} */}
                {/* <Accordion.Body>
                    <div>{description}</div>
                    <div>{`${createDate}`}</div>
                    <div></div> */}
                    {/* {Themes.map((e)=>{
        return(
            <OneTheme key="{e.id}" id={e.id} title={e.title} 
            description={e.description} 
            createDate={e.createDate} 
            sectionId={e.sectionId} authorId={e.authorId} 
            authorName={e.authorName} countMessages={e.countMessages}
            />)
        })} */}
                {/* </Accordion.Body>
                </Accordion.Item> */}
            