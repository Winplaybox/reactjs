import React, { Component } from 'react';
class Menu1 extends Component {
    constructor(props) {
		super(props)
		this.state = { data: [] }
	}
	
	loadData() {
		fetch('https://randomuser.me/api?results=500')
			.then(response => response.json())
			.then(data => {
				this.setState({
                    data: data 
                
                })
                console.log(data)
                
		})
			.catch(err => console.error(this.props.url, err.toString()))
	}
	
	componentDidMount() {
		this.loadData()
	}
    render() {
        var audienses = this.state.data.map((value, index) => (
            <test key={value.results.gender}/>
         ));
        return (
            <div>
               {this.state.data.map((item, key)=> {
             
             return (
               <test/>
              )
           
           })}
            </div>
        );
        
        
        
    }
  }

  export default Menu1;