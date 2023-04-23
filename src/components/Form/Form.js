import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Form = ({ poets, setPoet }) => {

  const handleChange = (event) => {
    setPoet(event.target.value);
  }

  const options = poets.map(poet => {
   return <option value={poet} key={poet}>{poet}</option>
  })

  return (
    <main className='form-main'>
      <h1 className='form-title'>Choose A Poet!</h1>
      <p className='form-text'> The following poems will be styled in one of five categories:</p>
      <ul>
        <li className='list-time'>Time</li>
        <li className='list-love'>Love</li>
        <li className='list-body'>the Body</li>
        <li className='list-spooky'>Spooky</li>
        <li className='list-nature'>Nature</li>
      </ul>
      <p className='form-text'> These categories were based on the occurance of one of the 25 most commonly used words in around 3,000 poems from <a href='https://www.poetryfoundation.org/poetrymagazine'>Poetry Magazine</a>. This analysis was done by Robert Peake. You can read more about it at <a href='https://www.robertpeake.com/archives/6676-top-poetry-words.html'>his website</a>. If the poem does not contain one of those words, it will have a default style.</p>
      <form>
        <select className='form-select' name='authors' id='authors' onChange={handleChange}>
          <option value='' defaultValue> Select Your Poet</option>
          <option value='random'>random</option>
          {options}
        </select>
      <Link id='form-link' className='form-link' to='/poem/1'>proceed</Link>
      </form>
    </main>
  )
};


export default Form;

Form.propTypes = {
  poets: PropTypes.array,
  setPoet: PropTypes.func
}
