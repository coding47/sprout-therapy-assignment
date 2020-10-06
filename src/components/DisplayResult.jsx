import React from 'react';

export default (props) => {
  return(
    <section>
      <h2>Result</h2>
      <p>H: {props.Result.H}</p>
      <p>K: {props.Result.K}</p>
    </section>
  )
}