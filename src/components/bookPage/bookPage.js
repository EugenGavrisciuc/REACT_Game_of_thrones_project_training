import React, { Component } from 'react';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../services/gotService';
import RowBlock from '../rowBlock/rowBlock';
import {Field} from "../charDetails/charDetails";

export default class BookPage extends Component{
    gotService = new GotService();

    constructor(props){
        super(props);
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
        // console.log(el) //Debugging - On click, show clicked element
        // console.log(el.name)
        this.props.getStateData(el);
        this.setState({
            showcharclicked: el
        });
    }

    update_showcharclicked = (value) => {
        this.setState({showcharclicked: value})
    }

    render(){
        const {showcharclicked, titleclicked} = this.state;
        if (this.state.error){
            return <ErrorMessage/>
        }

        // const itemList = (
        //     <ItemList
        //         showCH={this.showChar}
        //         updateCH={this.update_showcharclicked}
        //         getData={this.gotService.getAllBooks}
        //     />
        // )

        // const charDetails = (
        //     <CharDetails characterdata={showcharclicked}>
        //         <Field field="numberOfPages" label="Number of pages"/>
        //         <Field field="publisher" label="Publisher"/>
        //         <Field field="released" label="Released"/>
        //     </CharDetails>
        // )


        return (
            // <RowBlock left={itemList} right={charDetails}/>

                <ItemList
                    showCH={this.showChar}
                    updateCH={this.update_showcharclicked}
                    getData={this.gotService.getAllBooks}
                />
        )
    }



}
