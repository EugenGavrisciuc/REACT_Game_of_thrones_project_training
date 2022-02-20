import React, {Component} from 'react';
import './charDetails.css';
import Spinner from '../spinner';
export default class CharDetails extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        if(this.props.characterdata === null){
            return <Spinner/>
        }
        
        const {characterdata:{name, gender, born, died, culture}} = this.props;
        
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        );
    }
}