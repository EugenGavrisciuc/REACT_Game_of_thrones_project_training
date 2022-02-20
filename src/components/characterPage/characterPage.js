import React, { Component } from 'react';
import {Col, Row} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';

export default class CharacterPage extends Component{
    constructor(){
        super();
        this.state ={
            showcharclicked: null,
            error: false
        }

        this.showChar = this.showChar.bind(this);
        this.update_showcharclicked = this.update_showcharclicked.bind(this);
    }

    componentDidCatch() {
        this.setState({error:true})
    }

    showChar = (el) => {
        this.setState({showcharclicked: el});
    }

    update_showcharclicked = (value) => {
        this.setState({showcharclicked: value})
    }

    render(){
        const {showcharclicked} = this.state;
        if (this.state.error){
            return <ErrorMessage/>
        }
        return (
            <Row>
            <Col md='6'>
                <ItemList showCH={this.showChar} updateCH={this.update_showcharclicked}/>
            </Col>
            <Col md='6'>
                <CharDetails characterdata={showcharclicked}/>
            </Col>
            </Row>
        )
    }



}