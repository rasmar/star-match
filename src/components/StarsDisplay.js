import React from 'react';
import MathHelper from '../helpers/MathHelper'

const StarsDisplay = (props) => (
  <>
    { MathHelper.range(1, props.count).map(starId =>
      <div key={starId} className="star" />
    )}
  </>
)

export default StarsDisplay;
