import React from 'react'
import ReactDOM from 'react-dom'

class NewItem extends React.Component {
  constructor(props){
    super()
    this.state = props
  }
  render(){
    return <form onSubmit={ e => this.create(e) }>
      <input type='text' value={this.state.newItem} onChange={ e => this.change(e) } />
    </form>
  }
  change(e){
    this.setState({
      newItem: e.target.value
    })
  }
  create(e){
    e.preventDefault()
    // add this below to existing array
    this.props.onCreate(this.state.newItem)
    this.setState({newItem: ''})
  }
}

class List extends React.Component {
  constructor(props){
    super()
    this.state = props
  }
  addItem(text){
    let items = this.state.items
    items.push(text)
    this.setState({items})
  }

  render(){
    return <div>
      <NewItem newItem='' onCreate={ text => this.addItem(text) }/>
      <ul>
        {this.props.items.map( (item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  }
}

let items = [
  "learn react",
  "learn comp sci"
]
ReactDOM.render(
  <List items={items}/>,
  document.getElementById('root')
)
