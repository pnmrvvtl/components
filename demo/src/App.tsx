import { Button as MyButton } from 'pnmrvvtl-components';
import Button from '@mui/material/Button';
import './index.css';

function App() {
  return (
    <div className="buttonsContainer">
      <h1>Component Library Demo</h1>
      <Button >Primary Button</Button>
      <Button >Secondary Button</Button>
      <Button disabled>Disabled Button</Button>
      <MyButton back={'asd'}>Primary Button</MyButton>
      <MyButton variant="secondary" >Secondary Button</MyButton>
      <MyButton disabled>Disabled Button</MyButton>
    </div>
  );
}

export default App;
