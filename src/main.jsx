import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href='https://facebook.com' target='_blank'>visit the site</a>
)

const anotherUser = 'abhi';

const reactElement = React.createElement(
  'a',
  {href: 'https://youtube.com',target: '_blank'},
  'click Me',
               anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    reactElement  
)
