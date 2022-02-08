import {useState} from 'react'
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import Menu, {MenuProps} from './components/Menu/menu';
import MenuItem, {MenuItemProps} from './components/Menu/menuItem';

function App() {
 
  return (
    <div className="App">
      <Menu defaultIndex={0} mode={'vertical'} onSelect={(index) => {alert(index)}}>
         <MenuItem>
            cool link
         </MenuItem>
         <MenuItem disabled>
            cool link 2
         </MenuItem>
         <MenuItem>
            cool link 3
         </MenuItem>
      </Menu>



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
