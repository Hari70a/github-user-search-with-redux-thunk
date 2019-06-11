import React from 'react';
import { connect } from 'react-redux';
import store from './store'

const action = type => store.dispatch({ type })

const Counter = (props) => {
  return (
    <div>
      <button onClick={() => action('INCREMENT_ASYNC')} className="button">
        Increment after 1 second
    </button>
      {' '}
      <button className="button" onClick={() => action('INCREMENT')}>
        Increment
    </button>
      {' '}
      <button className="button" onClick={() => action('DECREMENT')}>
        Decrement
    </button>
      <hr />
      <div>
        Clicked: {props.value} times
    </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.counterReducer.value
  }
}



export default connect(mapStateToProps)(Counter)