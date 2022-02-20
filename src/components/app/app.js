import React, { Component } from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../characterPage';
import ErrorMessage from '../errorMessage';
export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            showrandomchar: true,
            error: false
        };
        this.button_randomchar = this.button_randomchar.bind(this);
    }

    componentDidCatch() {
        this.setState({error:true})
    }

    button_randomchar() {
        this.setState(({showrandomchar}) => {
            return {showrandomchar: !showrandomchar}
        })
    }

    render(){
        const {showrandomchar} = this.state;
        const show_r_ch = showrandomchar ? <RandomChar/> : null;

        if (this.state.error){
            return <ErrorMessage/>
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {show_r_ch}
                        </Col>
                    </Row>
                    <Button onClick={this.button_randomchar}>Click me</Button>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
}