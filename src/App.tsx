import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import Dashboard from "@/pages/Dashboard"
import Citizens from "@/pages/Citizens"
import Governance from "@/pages/Governance"
import Events from "@/pages/Events"
import './App.css'

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          
          <div className="flex-1 flex flex-col">
            <header className="h-16 flex items-center border-b bg-card px-6">
              <SidebarTrigger />
              <div className="ml-4">
                <h1 className="text-lg font-semibold text-primary">V-Connect Admin</h1>
                <p className="text-sm text-muted-foreground">Village Governance Platform</p>
              </div>
            </header>

            <main className="flex-1 p-6 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/citizens" element={<Citizens />} />
                <Route path="/governance" element={<Governance />} />
                <Route path="/events" element={<Events />} />
                <Route path="/communication" element={<div className="text-center py-8 text-muted-foreground">Communication module coming soon...</div>} />
                <Route path="/finance" element={<div className="text-center py-8 text-muted-foreground">Finance module coming soon...</div>} />
                <Route path="/services" element={<div className="text-center py-8 text-muted-foreground">Services module coming soon...</div>} />
                <Route path="/reports" element={<div className="text-center py-8 text-muted-foreground">Reports module coming soon...</div>} />
                <Route path="/admin/users" element={<div className="text-center py-8 text-muted-foreground">User management coming soon...</div>} />
                <Route path="/settings" element={<div className="text-center py-8 text-muted-foreground">Settings coming soon...</div>} />
              </Routes>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </Router>
  )
}

export default App