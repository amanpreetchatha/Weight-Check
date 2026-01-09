
import './App.css'
import Dashboard from './dashboard'
export const appName = "Weight Check"
function App() {
  return (
    <div className="container">
      <header>
        {appName}
      </header>
      <main>
        <Dashboard>

        </Dashboard>
      </main>
      <nav>
        <li>Dashboard</li>
        <li>Trends</li>
      </nav>
      
    </div>
  )
}

export default App
