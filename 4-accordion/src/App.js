import React, { useState } from 'react'
import OneQuestion from './Questions'
import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <OneQuestion key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
