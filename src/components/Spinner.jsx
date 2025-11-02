import React from 'react'
import loader from './spinner.gif'

const spinner = () => (
  <div className='text-center '>
    <img src={loader} alt="loading" />
  </div>
)

export default spinner
