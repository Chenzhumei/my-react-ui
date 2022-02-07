import {useState} from 'react'
import Button, {ButtonType, ButtonSize} from './components/Button/button'

function App() {
 
  return (
    <div className="App">
      <Button className='custom' onClick={(e) => {e.preventDefault();alert(123)}}>hello</Button>
      <Button disabled>disabled button</Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>large primary</Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>small danger</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com">baidu link</Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>disabled link</Button>
      <h1>hello world</h1>
      <h2>hello world</h2>
      <h3>hello world</h3>
      <h4>hello world</h4>
      <hr></hr>
      <code>const a = 'b'</code>
    </div>
  );
}

export default App;
