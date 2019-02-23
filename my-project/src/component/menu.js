import app from '../Pages/menu'
class UnsignedOrders extends React.Component {
	constructor(props) {
		super(props)
		this.state = { data: [] }
	}
	
	loadData() {
		fetch('https://facebook.github.io/react-native/movies.json')
			.then(response => response.json())
			.then(data => {
				this.setState({data: data })
		})
			.catch(err => console.error(this.props.url, err.toString()))
	}
	
	signOrder(id) {
		let ids = [
		{ 'orderId': id }
		];
		console.log(ids)
		fetch('https://facebook.github.io/react-native/movies.json', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(ids)
		})
		
	}
	
	componentDidMount() {
		this.loadData()
	}
	
  render() {
    return <ul>
			<li className='title'>
				<span>id</span>
				<span>Title</span>
				<span>Release Year</span>
				<span>Signature</span>
			</li>
      { this.state.data.map((item, i) => {
				let statusClass = 'sign'
				// if (item.signStatus === 'Out for signature') statusClass += ' sign-complete'
				let boundClick = this.signOrder.bind(this, i)
				return <li className='item'>
					<span>{item.id}</span>
					<span>{item.title}</span>
					<span>{item.releaseYear}</span>
					{/* <span><span className={statusClass} onClick={() => this.signOrder(item.orderID)}>{item.signStatus}</span></span> */}
				</li>
        })
      }
    </ul>;
  }
}
			
ReactDOM.render(<UnsignedOrders />, document.getElementById('app'));
