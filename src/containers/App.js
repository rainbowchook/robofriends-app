import React, { Component } from 'react'
import './App.css'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
// import { robots } from './robots'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        // this.onSearchChange = this.onSearchChange.bind(this)
    }

    onSearchChange = (event) => {
        console.log(event.target.value)
        this.setState({searchfield: event.target.value})
        
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(users => this.setState({robots: users}))
    }

    render() {
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter(robot => (
            robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase()) 
        ))
        return !robots.length ? <h1>Loading</h1> : (
            <div className='tc'>
                <h1 className='f2'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} searchfield={searchfield} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )
    }
}

// const App = () => {
//   return (
//     <div className='tc'>
//         <h1>RoboFriends</h1>
//         <SearchBox />
//         <CardList robots={robots}/>
//     </div>
//   )
// }

export default App