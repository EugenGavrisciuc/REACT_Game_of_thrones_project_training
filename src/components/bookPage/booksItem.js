import React, {Component} from "react";
import CharDetails from "../charDetails";
import {Field} from "../charDetails/charDetails";
import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
  

// Guide, how to make withRouter avaible in class:
// https://reactrouter.com/docs/en/v6/faq#what-happened-to-withrouter-i-need-it
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

class BooksItem extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            showcharclicked: this.props.getStateData
            }
    }
  
    render() {
        const {showcharclicked} = this.state;
        // console.log(this.props.router.params)

        return(
            <CharDetails characterdata={showcharclicked}>
                 <Field field="numberOfPages" label="Number of pages"/>
                 <Field field="publisher" label="Publisher"/>
                 <Field field="released" label="Released"/>
            </CharDetails>
        )
    }
}

const BooksItemShow = withRouter(BooksItem);

export {BooksItemShow}
