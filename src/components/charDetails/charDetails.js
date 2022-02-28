import React, {Component} from 'react';
import './charDetails.css';
import Spinner from '../spinner';

const Field = ({characterdata, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{characterdata[field]}</span>
        </li>
    )
}

export {Field};
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
        
        const {characterdata:{name}, characterdata} = this.props;
        
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {characterdata})
                        })
                    }
                </ul>
            </div>
        );
    }
}