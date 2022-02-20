import React, {Component} from 'react';
import './randomChar.css';
import GotService from '../services/gotService';
import Spinner from '../spinner';
import ErrorMessage from "../errorMessage"

export default class RandomChar extends Component {
    constructor(){
        super();
        this.state = {
            char: {},
            loading: true,
            error: false
        };
    }
    gotService = new GotService();

    componentDidMount() {
        this.setTimer = setInterval(() => {this.updateCharacter()}, 1500)
    }

    componentWillUnmount() {
        clearInterval(this.setTimer);
    }

    verify_data = () => {
        // console.log({...this.state.char}); // or simple this.state.char
        this.setState(({char}) => {
            // console.log(char);
            for (var el in char){
                // console.log(char[el])
                if(char[el] === ""){
                    char[el] = "-no data-";
                }
            }
            return {char}
            // console.log(char);
        })
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError= () => {
        this.setState({
            error: true,
            loading: false
        })
    }
    updateCharacter(){
        // const id = 10000; //Debugging for error
        const id = Math.floor(Math.random()*140 + 25);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .then(this.verify_data)
            .catch(this.onError)
    }

    render() {
        const {char, loading, error} = this.state;
        const error_process = error ? <ErrorMessage/> : null;
        const load_process = loading ? <Spinner/> : null;
        const done_process = (loading === false && error === false) ?  <View char={char}/> : null;

        return (
            <div className="random-block rounded">
                {error_process}
                {load_process}
                {done_process}
            </div>
        );
    }
}

const View = ({char}) => {

    const {name, gender, born, died, culture} = char;
    return (
        <>
        <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>
        </>
    )
}
