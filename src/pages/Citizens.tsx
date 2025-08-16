import { useState } from "react"
import { Search, Plus, Filter, Eye, Edit, Trash2, UserCheck, UserX } from "lucide-react"

const citizensData = [
  {
    id: 1,
    name: "Ramesh Kumar",
    phone: "+91 98765 43210",
    email: "ramesh@email.com",
    address: "House No. 123, Main Street",
    status: "active",
    registrationDate: "2024-01-15",
    voterId: "VID001234",
  },
  {
    id: 2,
    name: "Priya Sharma",
    phone: "+91 87654 32109",
    email: "priya@email.com",
    address: "House No. 456, Park Road",
    status: "active",
    registrationDate: "2024-02-20",
    voterId: "VID001235",
  },
  {
    id: 3,
    name: "Suresh Patel",
    phone: "+91 76543 21098",
    email: "suresh@email.com",
    address: "House No. 789, Church Lane",
    status: "inactive",
    registrationDate: "2023-12-10",
    voterId: "VID001236",
  },
  {
    id: 4,
    name: "Anita Singh",
    phone: "+91 65432 10987",
    email: "anita@email.com",
    address: "House No. 321, Market Square",
    status: "active",
    registrationDate: "2024-03-05",
    voterId: "VID001237",
  },
]

export default function Citizens() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredCitizens = citizensData.filter((citizen) => {
    const matchesSearch = citizen.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         citizen.phone.includes(searchTerm) ||
                         citizen.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterStatus === "all" || citizen.status === filterStatus
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Citizens</h1>
          <p className="text-muted-foreground">Manage village citizen records</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Citizen
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 items-center bg-card p-4 rounded-lg border">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search citizens..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md bg-background"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border rounded-md bg-background"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Citizens Table */}
      <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-medium">Name</th>
                <th className="text-left p-4 font-medium">Contact</th>
                <th className="text-left p-4 font-medium">Address</th>
                <th className="text-left p-4 font-medium">Voter ID</th>
                <th className="text-left p-4 font-medium">Status</th>
                <th className="text-left p-4 font-medium">Registration</th>
                <th className="text-left p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCitizens.map((citizen) => (
                <tr key={citizen.id} className="border-t hover:bg-muted/25">
                  <td className="p-4">
                    <div>
                      <p className="font-medium">{citizen.name}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm">
                      <p>{citizen.phone}</p>
                      <p className="text-muted-foreground">{citizen.email}</p>
                    </div>
                  </td>
                  <td className="p-4 text-sm">{citizen.address}</td>
                  <td className="p-4 text-sm font-mono">{citizen.voterId}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
                        citizen.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {citizen.status === "active" ? (
                        <UserCheck className="h-3 w-3" />
                      ) : (
                        <UserX className="h-3 w-3" />
                      )}
                      {citizen.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm">{citizen.registrationDate}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-muted rounded" title="View">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-muted rounded" title="Edit">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="p-1 hover:bg-muted rounded text-destructive" title="Delete">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCitizens.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No citizens found matching your criteria.
          </div>
        )}
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center gap-2">
            <UserCheck className="h-5 w-5 text-green-500" />
            <span className="font-medium">Active Citizens</span>
          </div>
          <p className="text-2xl font-bold mt-2">
            {citizensData.filter(c => c.status === "active").length}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center gap-2">
            <UserX className="h-5 w-5 text-gray-500" />
            <span className="font-medium">Inactive Citizens</span>
          </div>
          <p className="text-2xl font-bold mt-2">
            {citizensData.filter(c => c.status === "inactive").length}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center gap-2">
            <Plus className="h-5 w-5 text-blue-500" />
            <span className="font-medium">Total Registered</span>
          </div>
          <p className="text-2xl font-bold mt-2">{citizensData.length}</p>
        </div>
      </div>
    </div>
  )
}