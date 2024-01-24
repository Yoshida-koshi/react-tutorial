import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {title: "Welcome Tsutomu!"};
    }
    changeTitle(title) {
        this.setState({title: title});
    }
    render() {
        let commaceName = "rubik's cube";
        return (
            <div>
               <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
               <h1>Hello World!</h1> 
               <h1>Welcome!</h1>
               <h1>It's {this.state.name}!</h1>
               <h1>Here is {commaceName}</h1>
               <h1>price is {this.get_result(3)}</h1>
               <Footer />
            </div>
        );
    }
    get_result(num) {
        return 1 + num;
    }
}