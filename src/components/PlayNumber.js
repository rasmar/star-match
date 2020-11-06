import React from 'react';
import ColorHelper from '../helpers/ColorHelper'

const PlayNumber = (props) => (
  <button
    className="number"
    onClick={() => props.numberClick(props.number, props.status)}
    style={{ backgroundColor: ColorHelper[props.status] }}
  >
    {props.number}
  </button>
)

export default PlayNumber;
