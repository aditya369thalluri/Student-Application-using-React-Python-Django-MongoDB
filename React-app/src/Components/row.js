import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';
import history from './../history';
import axios from 'axios';
import constants from '../constants';
import {Button} from 'react-bootstrap';
export default class Row extends React.Component {
    constructor(props){
        super(props);
        this.state={
           data:props.data
        };
    };
    componentWillReceiveProps(prevProps){
        debugger;
        var data = prevProps.data;
        if(this.state.data!==prevProps.data)
        {
            this.setState({
                data:data
            });
        }
    }
    handleClick()
    {
        this.props.dispRow(this.state);
    }
    deleteStudentDetails(e)
    {
        var res = {};

        axios.delete(constants.url, this.state, { headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } })
        .then(res={});
        
        axios.get(constants.url).then(result=>{res = Object.assign({},result)});
        history.push({
            pathname:'/',            
            state: res     
        });

    }   
    pushUpdateDetails()
    {
        debugger;
        history.push({
            pathname: '/update',
            state: { data: this.state.data}
          })
    }
    render(){
        return (             
                    <tr>
                       
                        <td>
                        <a onClick={this.handleClick.bind(this)}>{this.state.data.name} </a>
                        </td>                    
                   
                        <td>
                        <a onClick={this.handleClick.bind(this)}>{this.state.data.id}   </a> 
                        </td>
                    
                        <td>
                        <a onClick={this.handleClick.bind(this)}>{this.state.data.email} </a>
                        </td>
                        <td>
                        <a onClick={this.handleClick.bind(this)}>{this.state.data.address} </a>
                        </td>
                        <td>
                          <Button onClick={this.pushUpdateDetails.bind(this)}><FaRegEdit/></Button> 
                          <Button onClick={this.deleteStudentDetails.bind(this)}><AiFillDelete/></Button>
                        </td>
                    </tr>
                   

            
           
           
        );
    }
}
