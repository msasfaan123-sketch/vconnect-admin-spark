import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">V-Connect Admin</h1>
          <p className="text-muted-foreground">Village Governance Platform</p>
        </header>
        
        <main className="max-w-md mx-auto">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
            <p className="text-muted-foreground mb-4">
              Your V-Connect platform is ready for Web3 integration.
            </p>
            <button
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
              onClick={() => setCount((count) => count + 1)}
            >
              Count: {count}
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App