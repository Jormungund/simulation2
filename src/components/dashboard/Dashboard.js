import React, { Component } from 'react';
//import './dashboard.css';
import House from '../house/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state={
            houses: []
        }
    }

    componentDidMount() {
        axios.get(`/api/houses`).then(results=>{
          this.setState({houses: results.data})
        })
    }

    render(){
        const { houses } = this.state
        return(
            <div /*className="dashboard"*/>
                <Link to="/wizard"><button>Add New Property</button></Link>
                {houses.map(houses=>(
                    <House houses={houses} key={houses.id}/>
                ))}
            </div>
        )
    }
}