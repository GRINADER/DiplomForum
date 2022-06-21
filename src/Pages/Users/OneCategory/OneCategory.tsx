import React, {useState, useEffect} from "react";
import { Accordion, Button, Container, Table } from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";

import { OneSection } from "./OneSection/OneSection";
import {SectionType} from "../../../features/forum/types/index"
//import { fetchGetCategories, fetchGetThemes } from "../../../../features/forum/forumSlice";

export interface OneCategoryType {
    id: number,
    title: string,
    allSections: Array<SectionType>,
}

const OneCategory: React.FC<OneCategoryType> = ({id,title,allSections}) =>{

    return(
        <Accordion.Item eventKey={`${id}`} className="mt-2">
        <Accordion.Header >Категория № {id} Название: {title}</Accordion.Header> 
        {/* onClick={() => {dispatch(fetchGetCategories())}} */}
        <Accordion.Body>
            
        
        {allSections.map((e)=>{
            return(
                <OneSection key="{e.id}" id={e.id} title={e.title} description={e.description} countThemes={e.countThemes} categoryId={e.categoryId}/>)
            })}
            
        </Accordion.Body>
        </Accordion.Item>
    )
   
}

export {OneCategory};