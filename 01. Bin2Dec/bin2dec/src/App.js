import React, {useState} from 'react'

const App = () => {
  const [result, setResult] = useState(0)
  const [value, setValue] = useState('')

  const computeDecimal = (binaryNumber) => {
    let result = 0
    for (let i = binaryNumber.length - 1; i >= 0; i--) {
      result += (binaryNumber[i] - '0') * Math.pow(2, (binaryNumber.length - i - 1))
    }
    return result
  }

  const isBinaryNumber = (binaryNumber) => {
    const result = /^[0-1]{0,8}$/.test(binaryNumber)
    console.log('test result: ', result)
    return result
  }

  const handleTextChange = (event) => {
    setValue(event.target.value)
  }

  const handleOnClick = (event) => {
    event.preventDefault()
    console.log('value = ', value)
    if (value.trim() === '') {
      return
    }
    if (!isBinaryNumber(value)) {
      setResult(NaN.toString())
      return
    }
    setResult(computeDecimal(value))
  }

  return (
    <div className="App">
      <form onSubmit={handleOnClick}>
        <label htmlFor="bin">Please input a binary number (max 8-digits): </label>
        <input type="text" id="bin" name="bin" maxLength="8" onChange={handleTextChange} value={value} />
        <button type="submit">submit</button>
        <div>
          <p>The result is: <span>{result}</span></p>
        </div>
      </form>
    </div>
  );
}

export default App;
