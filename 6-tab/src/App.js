import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState(0)

  const fethcJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fethcJobs()
  }, [])

  if (loading) {
    return (
      <section className="section loading">
        <h1>loading...</h1>
      </section>
    )
  }

  const { title, dates, duties, company } = jobs[value]
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn-container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                onClick={() => setValue(index)}
                key={job.id}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {job.company}
              </button>
            )
          })}
        </div>
        {/* jobs-container */}
        <div className="jobs-container">
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-date">{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className="job-desc" key={index}>
                  <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
      </div>
    </section>
  )
}

export default App
