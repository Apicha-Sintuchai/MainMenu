
import './App.css';
import { BrowserRouter,  Routes,Route } from 'react-router-dom'
import Main from './Component/Main';
import AllCost from './Component/AllCost/AllCost';
import AddMenu from './Component/Addmenu/AddMenu';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='' element={ <Main></Main>}></Route>
      <Route path='addmenu' element={ <AddMenu></AddMenu>}></Route>
      <Route path='Allcost' element={ <AllCost></AllCost>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
