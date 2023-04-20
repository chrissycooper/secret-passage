import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const Form = ({ poets, setPoet }) => {

  const handleChange = (event) => {
    setPoet(event.target.value);
  }

  const options = poets.map(poet => {
   return <option value={poet} key={poet}>{poet}</option>
  })

  return (
    <>
      <form>
        <select name='authors' id='authors' onChange={handleChange}>
          <option value='' defaultValue> Select Your Poet</option>
          <option value='random'>random</option>
          {options}
        </select>
      </form>
      <Link to='/poem/1'>proceed</Link>
    </>
  )
};


export default Form;
