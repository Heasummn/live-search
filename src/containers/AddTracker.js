import React from 'react'

import styles from './AddTracker.css'
import { connect } from 'react-redux'
import { addTracker } from '../actions'

// <input type="submit" value="foo" className={styles.Button}/>

let AddTracker = ({ dispatch }) => {
  let input;

  return (
    <li>
      <form autoComplete="off" className={styles.Form} onSubmit={e => {
          e.preventDefault();
          if(!input.value.trim()) {
            return;
          }
          dispatch(addTracker(input.value.toLowerCase()));
          input.value = '';
        }}
      >
      <div className={styles.Input} > 
        <input className={styles.Search} type="text" name="tracker" ref={node => {
          input = node;
        }}/>
      </div>
      </form>
    </li>
  );
}

AddTracker = connect()(AddTracker)
export default AddTracker;