import { Container } from 'react-bootstrap';
import './App.css'
import InformationPage from './pages/InformationPage';
import NavigationBar from './components/NavigationBar';
import HomePage from './pages/HomePage';
import { Route, Routes } from 'react-router';
import ErrorPage from './pages/ErrorPage';

function App() {
  const route = <>
    <NavigationBar/>
    <Container>
      <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='apropos' element={<InformationPage/>}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Container>
  </>;
  return (
    <div>
      {route}
    </div>
  )
}

export default App
