import React, {Component} from 'react';
import GotService from "../services/gotService"
import Spinner from "../spinner/spinner"
import './itemList.css';

export default class ItemList extends Component {
    constructor(props){
        super(props);
            this.state = {
                char: null
            }
        
    }
    gotService = new GotService();

    componentDidMount() {
        this.gotService.getallCharacters()
            .then( (charList) => {
                this.props.updateCH(charList[0]);
                this.setState({char: charList})
            })
        // this.foo.bar = 0; //Simulate an error
    }

    renderItem(arr) {
        
        return arr.map((item) => {
            return (
                <li
                key={item.url}
                className="list-group-item"
                onClick={() => this.props.showCH(item)}>
                {item.name}
                 </li>
            )
        })
    }

    render() {
        const {char} = this.state;

        if(!char){
            return <Spinner/>
        }

        const renderChar = this.renderItem(char);

        return (
            <ul className="item-list list-group">
                {renderChar}
            </ul>
        );
    }
}