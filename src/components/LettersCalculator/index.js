import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputVal: ''}

  inputStr = event => {
    this.setState({inputVal: event.target.value})
  }

  render() {
    const {inputVal} = this.state
    const noOfLetters = inputVal.length

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-phrase-container">
              <label className="label" htmlFor="input">
                Enter the phrase
              </label>
              <input
                className="input"
                onChange={this.inputStr}
                id="input"
                type="text"
                placeholder="Enter the phrase"
                value={inputVal}
              />
            </div>

            <p className="count">No.of letters: {noOfLetters}</p>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
