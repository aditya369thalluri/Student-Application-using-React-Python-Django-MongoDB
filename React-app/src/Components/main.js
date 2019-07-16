import React from 'react';
import Row from './row.js'
import RowDetails from './rowdetails.js';
import axios from 'axios';


export default class Main extends React.Component{
    constructor(){
        debugger;
        super();
        this.state={ testData:[],data:{}}}
    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/api/`)
        .then(res => {   
          this.setState({ testData:res.data.Students,data:{} });
        })
    }
     createTable(){
        return(
            this.state.testData.map(( listValue ) => {
                return (
                  <Row data={listValue} dispRow={this.display.bind(this)}/>
                );
              })
        )
     }   
     display(e)
     { 
         this.setState({data:e.data});
     };
     modifyState(e)
     {
         this.state.testData.some(function (el) {
              if (el._id === e._id)
              {
                el.netid = e.netid;
                el.name=e.name;
                el.email=e.email;
                return true;
              }
              
         });
         this.setState({
             testData:this.state.testData,
             data:this.state.data
         });
        
     }
    render(){
        return(
            
            <div>
            <h1>Student Details</h1>
            <div>
                <table>
                
                    <tr>
                        <th>Full Name </th>
                        <th>Banner ID</th>
                        <th>Email ID</th>
                        
                    </tr>
                    {this.createTable()}
                </table>
            </div>
            <RowDetails data={this.state.data} modifyRow={this.modifyState.bind(this)}  />

            </div>
           
        )
    };
}