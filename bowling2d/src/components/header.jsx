import React, { Component } from 'react';
import '../styles/header.scss';
import Swal from 'sweetalert'

class Header extends Component{
    render(){

        const Rules = (event) => {
          Swal({
                title: `Each game consists of 10 turns per person. The number of pins knocked down in the two shots is added together to count the points scored in each turn. When chuza is performed, the score on that turn is 10 plus the number of pins knocked down on the next turn. When all 10 pins are knocked down on the second throw, the score for that turn is 10 plus the number of pins knocked down on the next throw.`,
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                },
                className: "rules"
              })
        }

        const Instructions = (event) => {
          Swal({
                title: `First you enter the players' usernames. Pressing the Start button in the game will start the game and the ball will move automatically. May the best player win!.`,
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                },
                className:"rules"
              })
        }

        return(
            <div className="header">
                <ul className="div-ul-options">
                    <li onClick={Rules} className='button'>Rules</li>
                    <li onClick={Instructions} className='button'>Instructions</li>
                    <li><a href="./newgame" className="button">Home</a></li>
                </ul>
            </div>

        )
    }
}

export default Header;