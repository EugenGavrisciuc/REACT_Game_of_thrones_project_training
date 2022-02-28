import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage';
import GotService from '../services/gotService';
import {HousePage, HouseItem}from '../housePage';
import {BookPage} from "../bookPage"
import {BooksItemShow} from "../bookPage/booksItem"
import {Routes, Route} from "react-router-dom";
import CharacterItem from "../characterPage/characterItem"
export default class App extends Component {
    gotService =  new GotService();
    constructor(props){
        super(props);
        this.state = {
            showrandomchar: true,
            error: false,
            clickedBook: null,
            clickedChar: null,
            clickedHouse: null
        };
        this.button_randomchar = this.button_randomchar.bind(this);
        this.setBookValue = this.setBookValue.bind(this);
        this.setCharValue = this.setCharValue.bind(this);
        this.setHouseValue = this.setHouseValue.bind(this);
    }

    componentDidCatch() {
        this.setState({error:true})
    }

    button_randomchar() {
        this.setState(({showrandomchar}) => {
            return {showrandomchar: !showrandomchar}
        })
    }
    
    setBookValue(el) {
        this.setState({clickedBook:el})
    }
    
    setCharValue(el) {
        this.setState({clickedChar:el})
    }

    setHouseValue(el) {
        this.setState({clickedHouse:el})
    }

    render(){
        const {showrandomchar} = this.state;
        const show_r_ch = showrandomchar ? <RandomChar/> : null;

        if (this.state.error){
            return <ErrorMessage/>
        }

        return (
            <>
                    <Container>
                        <Header/>
                    </Container>
                    <Container>
                        <Row>
                            <Col lg={{size: 5, offset: 0}}>
                                {show_r_ch}
                            </Col>
                        </Row>
                            <Button color="primary" onClick={this.button_randomchar} style={{marginBottom: "35px"}}>Stop random characters</Button>
                        <Routes>
                            <Route path="/characters" element={<CharacterPage getStateData={this.setCharValue}/>}/>
                            <Route path="/houses" element={<HousePage getStateData={this.setHouseValue}/>}/>
                            <Route path="/books" element={<BookPage getStateData={this.setBookValue}/>}/>

                            <Route path="/houses/:id" element={<HouseItem getStateData={this.state.clickedHouse}/>}/>
                            <Route path="/characters/:id" element={<CharacterItem getStateData={this.state.clickedChar}/>}/>
                            <Route path="/books/:id" element={<BooksItemShow getStateData={this.state.clickedBook}/>}/>
                        </Routes>
                    </Container>
                </>
        );
    }
}
