import React from 'react';
import axios from 'axios';
import constants from '../constants';
import { Form, FormControl, FormGroup, FormLabel, Button,Col } from 'react-bootstrap';
import history from './../history';

export default class AddRowDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    };
    componentWillReceiveProps(prevProps) {
        if (this.state !== prevProps) {
            var data = prevProps.data;
            this.setState({
                id: 0,
                name: '',
                email:'',
                address: ''
            });
        }
    }
    updateName(e) {
        this.setState({
            name: e.target.value
        });
    }
    updateID(e) {
        this.setState({
            id: e.target.value
        });

    }
    updateEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    updateAddress(e) {
        this.setState({
            address: e.target.value
        });
    }
    addStudent() {
        var res = {};
        axios.post(constants.url, this.state, { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } })
        .then(res={});

        axios.get(constants.url).then(result=>{res = Object.assign({},result)});
            history.push({
                pathname:'/',            
                state: res      
            });
    }
    render() {
        return (

            <div>
                <h3>Add New Student Details</h3>

                <Form>
                    <Form.Row column="lg" >
                        <Form.Label>Name</Form.Label>
                        <Col xs={7}><Form.Control onChange={this.updateName.bind(this)} size="md" required type="text" placeholder="Enter email" /></Col>
                    </Form.Row>

                    <Form.Row column="lg" >
                        <Form.Label>UNM ID </Form.Label>
                        <Col xs={7}><Form.Control  onChange={this.updateID.bind(this)} size="md" required type="text" placeholder="Enter ID" /></Col>
                    </Form.Row>


                    <Form.Row column="lg" >
                        <Form.Label>Email</Form.Label>
                        <Col xs={7}><Form.Control onChange={this.updateEmail.bind(this)} size="md" required type="text" placeholder="Enter Email" /></Col>
                    </Form.Row>


                    <Form.Row column="lg" >
                        <Form.Label>Address</Form.Label>
                        <Col xs={7}><Form.Control  onChange={this.updateAddress.bind(this)} size="md" required type="text" placeholder="Enter Address" /></Col>
                    </Form.Row>
                    <br/>
                    <Button onClick={this.addStudent.bind(this)} variant="primary" type="submit" >
                        Add
                    </Button>
                </Form>

                {/* <div>
                    <span>Name: </span>
                    <span><input type="text" value={this.state.name} onChange={this.updateName.bind(this)}></input></span>
                </div>
                <div>
                    <span>ID: </span>
                    <span><input type="text" value={this.state.id} onChange={this.updateID.bind(this)}></input></span>
                </div>
                <div>
                    <span>Email: </span>
                    <span><input type="text" value={this.state.email} onChange={this.updateEmail.bind(this)}></input></span>
                </div>
                <div>
                    <span>Address: </span>
                    <span><input type="text" value={this.state.address} onChange={this.updateAddress.bind(this)}></input></span>
                </div> */}
            </div>




        );
    }
}
