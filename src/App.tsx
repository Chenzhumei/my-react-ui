import {useState} from 'react'
import Button, {ButtonType, ButtonSize} from './components/Button/button'
import Menu, {MenuProps} from './components/Menu/menu';
import MenuItem, {MenuItemProps} from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/Transition';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Menu defaultIndex={'0'} mode={'horizontal'} defaultOpenSubMenus={['2']} onSelect={(index) => {alert(index)}}>
         <MenuItem>
            cool link
         </MenuItem>
         <MenuItem disabled>
            cool link 2
         </MenuItem>
         <SubMenu title='dropdown'>
          <MenuItem>
              dropdown 1
          </MenuItem>
          <MenuItem>
              dropdown 2
          </MenuItem>
          <MenuItem>
              dropdown 3
          </MenuItem>
         </SubMenu>
         <MenuItem>
            cool link 3
         </MenuItem>
      </Menu>  

      <Button onClick={() => setShow(!show)}>Toggle</Button>
      <Transition in={show} timeout={300} animation="zoom-in-left">
         <div>hjfakdfjdasklfjasdlfjklads</div>
      </Transition>
      <Transition in={show} timeout={300} animation="zoom-in-left" wrapper>
         <Button btnType='primary' size='lg'>hjfakdfjdasklfjasdlfjklads</Button>
      </Transition>
    </div>
  );
}

export default App;
