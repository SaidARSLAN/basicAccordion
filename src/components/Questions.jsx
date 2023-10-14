import React from 'react'
import { useSelector } from 'react-redux'
import Question from './Question'

const Questions = () => {
    const questions = useSelector(state => state.questions.questions)
  return (
    <div className='__main-question-list'>
        {questions.map((question) => {
                return <Question question={question}/>
        })}
    </div>
  )
}

export default Questions