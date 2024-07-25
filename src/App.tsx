
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ViewSegmentComponent from './component/ViewSegmentComponent';

function App() {

  return (
    <>
        <Router>
          <Routes>
                <Route  path={"/"} element={<ViewSegmentComponent />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
