import React, {Component} from 'react';
import Spinner from "../spinner/spinner"
import './itemList.css';
import {Link} from 'react-router-dom';

export default class ItemList extends Component {
    constructor(props){
        super(props);
            this.state = {
                char: null
            }
        
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then( (charList) => {
                this.props.updateCH(charList[0]);
                this.setState({char: charList})
            })
        // this.foo.bar = 0; //Simulate an error
    }

    renderItem(arr) {
        
        return arr.map((item) => {
            return (
                <Link key={item.url+"1"} to={`${item.name}`}>
                <li
                    key={item.url}
                    className="list-group-item"
                    onClick={() => this.props.showCH(item)}>
                    {item.name}
                </li>
                </Link>
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