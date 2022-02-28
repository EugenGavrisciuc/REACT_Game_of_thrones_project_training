import React, {Component} from "react";
import CharDetails from "../charDetails";
import { Field } from "../charDetails/charDetails";

export default class HouseItem extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            showcharclicked: this.props.getStateData
            }
    }
  
    render() {
        const {showcharclicked} = this.state;
        
        return(
            <CharDetails characterdata={showcharclicked}>
                <Field field="region" label="Region"/>
                <Field field="words" label="Words"/>
                <Field field="titles" label="Titles"/>
                <Field field="ancestralWeapons" label="Ancestral weapons"/>
            </CharDetails>
        )
    }
}