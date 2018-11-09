import React, { Component } from 'react';
// import './Wizard.css';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
    constructor(){
        super()

        this.state={
            name:'',
            address: '',
            city: '',
            state: '',
            zip: 0,
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleChangeZip = this.handleChangeZip.bind(this);
        //this.newHouse = this.newHouse.bind(this);
    }

    handleChangeName(val){
        this.setState({name: val})
    }
    handleChangeAddress(val){
        this.setState({address: val})
    }
    handleChangeCity(val){
        this.setState({city: val})
    }
    handleChangeState(val){
        this.setState({state: val})
    }
    handleChangeZip(val){
        this.setState({zip: val})
    }


    render(){
        return(
            <div className="background">
                <div>Add New Listing</div>
                <Link to='/'><button path="/">Cancel</button></Link>
                <section>
                    <div>Property Name</div>
                    <input onChange={e=>this.handleChangeName(e.target.value)}/>
                </section>
                <section>
                    <div>Address</div>
                    <input onChange={e=>this.handleChangeAddress(e.target.value)}/>
                </section>
                <section>
                    <section>
                        <div>City</div>
                        <input onChange={e=>this.handleChangeCity(e.target.value)}/>
                    </section>
                    <section>
                        <div>State</div>
                        <input onChange={e=>this.handleChangeState(e.target.value)}/>
                    </section>
                    <section>
                        <div>Zip</div>
                        <input type="number" onChange={e=>this.handleChangeZip(e.target.value)}/>
                    </section>
                </section>
            </div>
        )
    }
}