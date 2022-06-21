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

const SectionPage: React.FC<AllThemeType> = ({}) =>{
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
    console.log(totalCount)
    console.log(sectionId)
    console.log(themes)

        return(
            
            
            <Accordion defaultActiveKey="1" className="mt-3 mb-3" alwaysOpen>
                <Accordion.Item eventKey={`${sectionId}`+1} > 
                    <Accordion.Header onClick={() => {dispatch(fetchGetThemes({SectionId:2}))}}>
                    <div>Секция № {sectionId} {sectionTitle}</div> 
                        </Accordion.Header>
                    <Accordion.Body>
                        <div>Описание: {sectionDescription} </div>
                        <div>Количество тем : "{totalCount}"</div>
                        <Table striped bordered hover>
  <tbody>
    <tr>
        <td>
        <Nav.Link>
                <Link to="/MessagePage">NEW <div>Количество сообщений : 2</div></Link>
                
              </Nav.Link>
        </td>
    </tr>
</tbody>
</Table>
                        {/* <Accordion.Item eventKey={`${sectionId}`+2} >
                        <Accordion.Header onClick={() => {dispatch(fetchGetThemes({SectionId:2}))}}>
                            

                        </Accordion.Header>
                            </Accordion.Item>  */}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
                
        )
}

export {SectionPage};

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
            