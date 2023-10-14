import React, { useRef, useState } from 'react'


const Question = ({question}) => {
    const [toggle, setToggle] = useState(false)
    const qRef = useRef();

    const handleClick = () => {
        setToggle(!toggle)
    }
  return (
    <div className='__main-question'onClick={handleClick}>
        <h2>{question.question}</h2>
        <p ref={qRef} className={toggle ? 'open' : 'close'}>{question.answer}</p>
    </div>
  )
}

export default Question