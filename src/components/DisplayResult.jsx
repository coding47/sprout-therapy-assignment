import React from 'react';

export default (props) => {
  return(
    <section>
      <h2>Result</h2>
      <p id="H">H: {props.Result.H}</p>
      <p id="K">K: {props.Result.K}</p>
    </section>
  )
}