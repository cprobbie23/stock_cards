import React from 'react'
import './BigCard.scss'
import { RaisedButton } from 'material-ui';


export default function BigCard(props) {
  return (
    <div className="bigCard">
      <header style={{fontSize:18, display:'flex', justifyContent:'space-between'}}>
        <span>Code: {props.symbol}</span>
        <span>Exchange: {props.exchange}</span>
      </header>
      <h3>{props.name}</h3>
      <div className='content'>
        <div style={{ display: 'flex',justifyContent:'space-around' }} >
          <span className='price' >{props.price}</span>
          <div style={{display: 'flex', flexFlow: 'column wrap'}} >
            <span className='change' >{props.change}</span>
            <span className='pChange' >{props.pChange}</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }} >
          <ul>
            <li>Open: {props.openPrice}</li>
            <li>High: {props.dayHi}</li>
            <li>Low: {props.dayLo}</li>
            <li>Volume: {props.vol}</li>
            <li>Market Cap: {props.marketCap}</li>
          </ul>
          <ul>
            <li>P/E Ratio: {props.pe}</li>
            <li>52 Wk High: {props.hi52}</li>
            <li>52 Wk Low: {props.lo52}</li>
            <li>EPS: {props.eps}</li>
            <li>Dividend: {props.dividend}</li>
          </ul>
        </div>
      </div>
      <RaisedButton label="You can only trade the stocks you draw!" fullWidth={true} secondary={true} />
    </div>
  )
}