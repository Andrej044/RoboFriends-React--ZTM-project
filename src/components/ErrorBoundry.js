import React, {Component} from 'react';


export default class ErrorBoundry extends Component{
  constructor(props){
    super(props);
    this.state = {
      hasError:false,
      message:''
    }
  }

  componentDidCatch(error) {
      this.setState({
        hasError:true,
        message: error
      })
  }

  render(){
    if(this.state.hasError){
      return (
       <div className='tc'>
        <h1>Something WRONG!!!!</h1>
        <p>{this.state.message}</p>
       </div> 
      )
    }
    else return this.props.children
  }
}