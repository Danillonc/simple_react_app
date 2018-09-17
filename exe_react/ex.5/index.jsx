import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
 <Family lastName='Coradello'>
     <Member name='Danillo' />
     <Member name='João' />
     <Member name='Julia' />
 </Family>, 
 document.getElementById('app'))