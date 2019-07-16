import React from 'react';
import axios from 'axios';

export default class RowDetails extends React.Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={};
    };
    componentWillReceiveProps(prevProps){
        
        if(this.state!==prevProps)
        {
            var data = prevProps.data;
            this.setState({
                _id:data._id,
                netid:data.netid,
                name:data.name,
                email:data.email
            });
        }
    }
    updateName(e){
      
        this.setState({
            
                name: e.target.value
            },() => {
                this.updateDB.bind(this);
                this.updateDB();
                this.props.modifyRow(this.state);

            });


       
    }
    updateID(e){
        this.setState({
           
            netid: e.target.value
            },() => {
                this.updateDB.bind(this);
                this.updateDB();
                this.props.modifyRow(this.state);

            });

    }
    updateEmail(e){
        this.setState({
           
                email: e.target.value
            
        },() => {
            this.updateDB.bind(this);
            this.updateDB();
            this.props.modifyRow(this.state);
        });
    }
    updateDB(){
      
        axios.post(`http://127.0.0.1:8000/api/`,  JSON.stringify(this.state),{headers:{  "Content-Type":"application/json"}})
        .then(res => {})
    }
    render(){
        return (          
            
                    <tr>
                       
                        <td>
                          <input type="text" value={this.state.name} onChange={this.updateName.bind(this)}></input>  
                        </td>
                    
                   
                        <td>
                        <input type="text" value={this.state.netid} onChange={this.updateID.bind(this)}></input>     
                        </td>
                    
                        <td>
                        <input type="text" value={this.state.email} onChange={this.updateEmail.bind(this)}></input>
                        </td>
                    </tr>
              
                
           
           
        );
    }
}
