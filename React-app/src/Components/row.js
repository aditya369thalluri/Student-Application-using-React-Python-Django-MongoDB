import React from 'react';




export default class Row extends React.Component {
    constructor(props){
        debugger;
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
    
    render(){
        return (          
            
                    <tr>
                       
                        <td>
                        <a onClick={this.handleClick.bind(this)}>{this.state.data.name} </a>
                        </td>
                    
                   
                        <td>
                        <a onClick={this.handleClick.bind(this)}>{this.state.data.netid}   </a> 
                        </td>
                    
                        <td>
                        <a onClick={this.handleClick.bind(this)}>{this.state.data.email} </a>
                        </td>
                    </tr>
                   

            
           
           
        );
    }
}
