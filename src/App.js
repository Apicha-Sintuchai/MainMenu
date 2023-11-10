
import './App.css';
import { BrowserRouter,  Routes,Route } from 'react-router-dom'
import Main from './Component/Main';


import AllCost from './Component/AllCost/AllCost.jsx'
import ShowMenu from './Component/Addmenu/ShowMenu.jsx';
function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='' element={ <Main></Main>}></Route>
      <Route path='addmenu' element={ <ShowMenu></ShowMenu>}></Route>
      <Route path='Allcost' element={ <AllCost></AllCost>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
