import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import {robots} from '../Robots';
import Searchbox from '../Components/Searchbox'
import Scroll from '../Components/Scroll'
import './App.css'

class App extends Component  {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
            // note: searchfield is parameter delcared in Searchbox.js
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>{
            this.setState({robots: users})
        })
    }

    changeOnSearch = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const {robots,searchfield} = this.state
        const filteredRobots = robots.filter(robot => {
            return (
                robot.name.toLowerCase().includes(searchfield.toLowerCase())
            )
        });
        return    !robots.length ?
            <h1 className='tc f1'>Loading...</h1>
        :
            (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <Searchbox searchChange={this.changeOnSearch}/> 
                {/* note: searchChange is parameter delcared in Searchbox.js */}
                <Scroll>
                    <Cardlist robots = {filteredRobots}/>
                </Scroll>
            </div>
        );

    };
};

export default App;