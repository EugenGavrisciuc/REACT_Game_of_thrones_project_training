import React, {Component} from "react";
import CharDetails from "../charDetails";
import { Field } from "../charDetails/charDetails";

export default class CharacterItem extends Component{
    
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
                 <Field field="gender" label="Gender"/>
                 <Field field="born" label="Born"/>
                 <Field field="died" label="Died"/>
                 <Field field="culture" label="Culture"/>
            </CharDetails>
        )
    }
}