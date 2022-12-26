import React, { Component } from 'react'
import './QuizComponent.css'
export default class QuizComponents extends Component {
  render() {
    return (
      <div className='questions'>
        <h1>Questions</h1>
        <div className='span'>
        <span>1 of 15</span>
        <h3>Which is the only mammal that can jump?</h3>
        </div>
        <div className='answer'>
            <p className='option'>Dog</p>
            <p className='option'>Goat</p>
        </div>
        <div className='answer'>
        <p className='option'>Elephant</p>
        <p className='option'>Lion</p>
        </div>
        <div className='button'>
            <button className='previous'>Previous</button>
            <button className='next'>Next</button>
            <button className='quit'>Quit</button>
        </div>
      </div>
    )
  }
}
