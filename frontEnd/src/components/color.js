import React, { Component } from 'react';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = { favoriteColor : "red" }
        console.log(this.state.favoriteColor);   }
    UNSAFE_componentWillMount() {
        console.log(this.state.favoriteColor);
        setTimeout(()=> {  
          this.setState({favoriteColor: this.props.favCol});  
        }, 5000);
    }
    componentDidMount() {
        setTimeout(()=> {
            this.setState({favoriteColor: "blue"})   
        }, 10000); }


    UNSAFE_componentWillUpdate() {
        console.log("componentWillUpdate()");
    }
            
    componentDidUpdate() {
        console.log("componentDidUpdate()");
    }
    
       
    render() { 
        console.log(this.state.favoriteColor);
        return(<h1>My Favourite color is : {this.state.favoriteColor}</h1>);
    }
}export default Color;
