import React, { Component } from 'react';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../services/gotService';
import RowBlock from '../rowBlock/rowBlock';
import {Field} from '../charDetails/charDetails';
export default class CharacterPage extends Component{
    gotService = new GotService();

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
        this.props.getStateData(el);
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

        // const itemList = (
        //     <ItemList
        //         showCH={this.showChar}
        //         updateCH={this.update_showcharclicked}
        //         getData={this.gotService.getallCharacters}
        //     />
        // )

        // const charDetails = (
        //     <CharDetails characterdata={showcharclicked}>
        //         <Field field="gender" label="Gender"/>
        //         <Field field="born" label="Born"/>
        //         <Field field="died" label="Died"/>
        //         <Field field="culture" label="Culture"/>
        //     </CharDetails>
        // )


        return (
            // <RowBlock left={itemList} right={charDetails}/>
            <ItemList
                showCH={this.showChar}
                updateCH={this.update_showcharclicked}
                getData={this.gotService.getallCharacters}
            />
        )
    }



}