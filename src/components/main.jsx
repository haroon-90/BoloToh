import React from 'react'

const main = (prop) => {
  return (
    <div className='m-10 max-w-[70%]'>
      <h1>Poem</h1>
      <article>
        <pre className='poem-container'> {prop.formdata}
        </pre>
      </article>
    </div>
  )
}

export default main
