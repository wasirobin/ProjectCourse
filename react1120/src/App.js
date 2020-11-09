import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseList from './pages/CourseList'
import CourseDetail from './pages/CourseDetail'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'
import './CourseList.css'
import './CourseDetail.css'
function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/CourseList">
            <CourseList />
          </Route>
          <Route path="/CourseDetail/:id?/">
            <CourseDetail />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default App
