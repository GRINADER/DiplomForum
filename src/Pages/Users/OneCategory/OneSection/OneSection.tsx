import React, {useState, useEffect} from "react";
import { Accordion, Button, Container, Nav, Table } from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

export interface OneSectionType {
    id: number,
    title: string,
    description: string,
    countThemes: number,
    categoryId: number,
}

const OneSection: React.FC<OneSectionType> = ({id,title}) =>{
    const Themes = useAppSelector(state => state.forum.allThemes.themes);
    console.log(Themes)
    
    return(
        <>
            <Table striped bordered hover>
  <tbody>
    <tr>
        <td>
        <Nav.Link>
                <Link to="/SectionPage">Секция № {id} {title}</Link>
              </Nav.Link>
        </td>
    </tr>
</tbody>
</Table>
        </>
    )
}

export {OneSection};