import React from "react"

function App() {
    
    
   
 const[text, setText] = React.useState("") 
 const[timeLeft, setTimeLeft] = React.useState(10)
 const[wordCount,setWordCount] = React.useState(0)
 const[gameIsRunning, setGameIsRunning] = React.useState(false)
 const [gameHasRan, setGameHasRan] = React.useState(false)
  const inputRef = React.useRef(null)
 
 React.useEffect(() => {
 
    if(timeLeft > 0 && gameIsRunning) {
        setGameHasRan(true)
       setTimeout(() => {
           setTimeLeft(prevTime => prevTime - 1)
            
       },1000)  
    }else {
        setTimeLeft(0)
        setGameIsRunning(false)
        const numOfWords = countWords(text)
        setWordCount(numOfWords)
    
  
        
    }
           
          
       console.log(timeLeft)
 
     
     
 },[timeLeft])
 
const startGame = () => {
    setGameIsRunning(true)
    setTimeLeft(10)
    setText("")
    inputRef.current.focus()
}
 
function handleChange(event) {
    const {value} = event.target
    setText(value)
}

function countWords(text) {
    
    let numOfWords = text.split(" ")
   return numOfWords.filter(word => word !== "").length
       
}



const startBtn = <button onClick={startGame} className="start-btn">{gameHasRan ? "Play Again" : "Start"}  </button>



 
 
 return (
     <div>
  <h1> How fast can You Type? </h1>
  <textarea
  ref={inputRef}
  onChange = {handleChange}
  value={text}
  readOnly = {gameIsRunning === true ? false : true} 
  />
  <h4> Time Remaining: {timeLeft} </h4>
  {gameIsRunning === false ? startBtn : ""}
   <h1>  {gameIsRunning === false && timeLeft === 0 ?   `Word Count: ${wordCount}` : ""} </h1>
  </div>
     
     
     
     
     
     
 )  
    
    
    
}
export default App 






