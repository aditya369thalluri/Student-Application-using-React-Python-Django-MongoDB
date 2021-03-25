import React from 'react';
import axios from 'axios';
import constants from '../constants';
import { Form,FormControl,FormGroup,FormLabel,Button,Col} from 'react-bootstrap';
import history from './../history';

export default class UpdateRowDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        if(props.location.state!=null)
        {
            this.state = Object.assign({},props.location.state.data);
        }
    };
    componentWillReceiveProps(prevProps) {
        
        if (this.state !== prevProps) {
            var data = prevProps.data;
            this.setState({
                id: data.id,
                name: data.name,
                email: data.email,
                address: data.address
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
    updateStudent() {
        var res = {};
        axios.post(constants.url, this.state, { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } })
            .then(axios.get(constants.url).then(result=>
            history.push({
                pathname:'/',            
                state: result     
            })));
        
        
    }
    render() {
        return (

            <div >
                <h3>Update Student Details</h3>
                <Form>
                    <Form.Row column="lg" >
                        <Form.Label>Name</Form.Label>
                        <Col xs={7}><Form.Control defaultValue={this.state.name} onChange={this.updateName.bind(this)}  size="md" required type="text" placeholder="Enter email" /></Col>
                    </Form.Row>
                    <Form.Row column="lg" >
                        <Form.Label>UNM ID </Form.Label>
                        <Col xs={7}><Form.Control  defaultValue={this.state.id} onChange={this.updateID.bind(this)} size="md" required type="text" placeholder="Enter ID" /></Col>
                    </Form.Row>

                    <Form.Row column="lg" >
                        <Form.Label>Email</Form.Label>
                        <Col xs={7}><Form.Control defaultValue={this.state.email} onChange={this.updateEmail.bind(this)} size="md" required type="text" placeholder="Enter Email" /></Col>
                    </Form.Row>


                    <Form.Row column="lg" >
                        <Form.Label>Address</Form.Label>
                        <Col xs={7}><Form.Control defaultValue={this.state.address} onChange={this.updateAddress.bind(this)} size="md" required type="text" placeholder="Enter Address" /></Col>
                    </Form.Row>
                    <br/>
                    <Button onClick={this.updateStudent.bind(this)} variant="primary" type="submit" >
                       Update
                    </Button>
                </Form>
              
            </div>




        );
    }
}
