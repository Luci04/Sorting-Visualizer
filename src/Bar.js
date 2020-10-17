import React, { Component } from 'react'
import "./Bar.css";

class Bar extends Component {

    render() {
        return (
            <div className="Bar" style={{ height: `${this.props.height}px`, left: `${this.props.left}px` }}></div>
        )
    }
}

export default Bar
