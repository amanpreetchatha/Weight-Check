
import './App.css'
import useUserContext from './context'
import Dashboard from './dashboard'
import Login from './login';
import Register from './register';
export const appName = "Weight Check"
function App() {
  const user=useUserContext();

  return (
    <div className="container">
      <header>
        {appName}
      </header>
      <main>
        { user===undefined ? <Login /> : <Dashboard /> }
      </main>
      <nav>
        <li>Dashboard</li>
        <li>Trends</li>
      </nav>
      
    </div>
  )
}

export default App
