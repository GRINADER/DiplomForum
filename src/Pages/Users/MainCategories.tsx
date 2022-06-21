import React, {useState, useEffect} from "react";
import { Accordion, Button, Container, Table } from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import { fetchGetCategories, fetchGetThemes } from "../../features/forum/forumSlice";
import { OneCategory } from "./OneCategory";

export interface MainCategoriesType {
}

const MainCategories: React.FC<MainCategoriesType> = () =>{
   
  const dispatch = useAppDispatch();
  const categoryCount = useAppSelector(state => state.forum.allCategories.totalCount);
  const Categories = useAppSelector(state => state.forum.allCategories.categories)

  console.log(Categories)

  return (
    <>
    <Accordion defaultActiveKey="1" className="mt-3 mb-3" alwaysOpen >
    <Accordion.Item eventKey="0" >
      <Accordion.Header onClick={() => {dispatch(fetchGetCategories())}} >Загляни на Форум !</Accordion.Header>
      <Accordion.Body>
      Количество категорий: "{categoryCount}"
      {Categories.map((e)=>{
        return(
        <OneCategory key="{e.id}" id={e.id} title={e.title} allSections={e.sections} />)
    })}    
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
    </>
  )
}

export {MainCategories};