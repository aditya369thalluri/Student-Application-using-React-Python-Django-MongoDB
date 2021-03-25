import React from 'react';
import Row from './row.js'
import axios from 'axios';
import constants from '../constants';
import { Table, Badge, Button } from 'react-bootstrap';
import history from './../history';


export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { testData: [], data: {} }
        if(props.location.state!=null)
        {
            axios.get(constants.url)
            .then(res => {
                this.setState({ testData: res.data, data: {} });
            })
        }
    }
    
    componentDidMount() {
        axios.get(constants.url)
            .then(res => {
                this.setState({ testData: res.data, data: {} });
            })
    }
    createTable() {
        return (
            this.state.testData.map((listValue) => {
                return (
                    <Row data={listValue} dispRow={this.display.bind(this)} />
                );
            })
        )
    }
    display(e) {
        this.setState({ data: e.data });
    };
    modifyState(e) {
        this.state.testData.some(function (el) {
            if (el._id === e._id) {
                el.id = e.id;
                el.name = e.name;
                el.email = e.email;
                el.address = e.address;
                return true;
            }
        });
        this.setState({
            testData: this.state.testData,
            data: this.state.data
        });
    }
    render() {
        return (

            <div style={{display:'flex', flexDirection:'row'}}>
                <div style={{ width: 50 + '%' }}>
                    <h1><Badge variant="secondary">Student Details</Badge></h1>
                    <div style={{ float: 'left' }}>
                        <Button onClick={()=>history.push('/add')}>Add New</Button>
                    </div>
                    <div>
                        <Table >
                            <tr>
                                <th>Full Name </th>
                                <th>Banner ID</th>
                                <th>Email ID</th>
                                <th>Address</th>
                                <th>Actions</th>

                            </tr>
                            {this.createTable()}
                        </Table>

                    </div>

                </div>
               
                 {/* <div style={{ width: 50 + '%' }}>
                    <RowDetails data={this.state.data} modifyRow={this.modifyState.bind(this)} />
                </div>  */}

            </div>

        )
    };
}