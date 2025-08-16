import { useState } from "react"
import { Plus, Clock, CheckCircle, XCircle, Users, FileText, Calendar } from "lucide-react"

const proposalsData = [
  {
    id: 1,
    title: "Street Light Installation on Market Road",
    description: "Install 15 LED street lights along Market Road for improved safety during night hours.",
    proposer: "Ramesh Kumar",
    proposerRole: "Citizen",
    category: "Infrastructure",
    status: "voting",
    votes: { for: 142, against: 23, abstain: 8 },
    totalVoters: 200,
    submissionDate: "2024-03-15",
    votingEndDate: "2024-03-22",
    budget: "₹2,50,000",
  },
  {
    id: 2,
    title: "Community Health Center Upgrade",
    description: "Upgrade the village health center with new medical equipment and facilities.",
    proposer: "Dr. Priya Sharma",
    proposerRole: "Council Member",
    category: "Healthcare",
    status: "approved",
    votes: { for: 189, against: 45, abstain: 12 },
    totalVoters: 246,
    submissionDate: "2024-02-28",
    votingEndDate: "2024-03-08",
    budget: "₹15,00,000",
  },
  {
    id: 3,
    title: "Solar Panel Installation for School",
    description: "Install solar panels on the village school to reduce electricity costs and promote green energy.",
    proposer: "Environmental Committee",
    proposerRole: "Committee",
    category: "Environment",
    status: "rejected",
    votes: { for: 67, against: 156, abstain: 23 },
    totalVoters: 246,
    submissionDate: "2024-02-10",
    votingEndDate: "2024-02-20",
    budget: "₹8,50,000",
  },
  {
    id: 4,
    title: "Village Park Development",
    description: "Create a new recreational park with playground equipment and walking trails.",
    proposer: "Youth Committee",
    proposerRole: "Committee",
    category: "Recreation",
    status: "draft",
    votes: { for: 0, against: 0, abstain: 0 },
    totalVoters: 0,
    submissionDate: "2024-03-18",
    votingEndDate: null,
    budget: "₹5,75,000",
  },
]

const categories = ["All", "Infrastructure", "Healthcare", "Environment", "Recreation", "Finance", "Education"]
const statuses = ["All", "draft", "voting", "approved", "rejected"]

export default function Governance() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  const filteredProposals = proposalsData.filter((proposal) => {
    const matchesCategory = selectedCategory === "All" || proposal.category === selectedCategory
    const matchesStatus = selectedStatus === "All" || proposal.status === selectedStatus
    return matchesCategory && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "voting":
        return <Clock className="h-4 w-4 text-blue-500" />
      default:
        return <FileText className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "voting":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const calculateVotingPercentage = (votes: any, total: number) => {
    if (total === 0) return { for: 0, against: 0, abstain: 0 }
    return {
      for: Math.round((votes.for / total) * 100),
      against: Math.round((votes.against / total) * 100),
      abstain: Math.round((votes.abstain / total) * 100),
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Governance</h1>
          <p className="text-muted-foreground">Manage proposals and village decision-making</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Proposal
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center bg-card p-4 rounded-lg border">
        <div className="flex gap-2 items-center">
          <span className="text-sm font-medium">Category:</span>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-1 border rounded-md bg-background text-sm"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-sm font-medium">Status:</span>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-1 border rounded-md bg-background text-sm"
          >
            {statuses.map((status) => (
              <option key={status} value={status}>
                {status === "All" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Proposals Grid */}
      <div className="grid gap-6">
        {filteredProposals.map((proposal) => {
          const percentage = calculateVotingPercentage(proposal.votes, proposal.totalVoters)
          return (
            <div key={proposal.id} className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{proposal.title}</h3>
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getStatusColor(proposal.status)}`}>
                      {getStatusIcon(proposal.status)}
                      {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3">{proposal.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {proposal.proposer} ({proposal.proposerRole})
                    </span>
                    <span className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      {proposal.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Submitted: {proposal.submissionDate}
                    </span>
                    <span className="font-medium text-foreground">Budget: {proposal.budget}</span>
                  </div>
                </div>
              </div>

              {/* Voting Results */}
              {proposal.status !== "draft" && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Voting Results</span>
                    {proposal.votingEndDate && (
                      <span className="text-muted-foreground">
                        {proposal.status === "voting" 
                          ? `Ends: ${proposal.votingEndDate}` 
                          : `Ended: ${proposal.votingEndDate}`
                        }
                      </span>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-16">For:</span>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${percentage.for}%` }}
                        />
                      </div>
                      <span className="text-sm w-16 text-right">{proposal.votes.for} ({percentage.for}%)</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-16">Against:</span>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-red-500 h-2 rounded-full" 
                          style={{ width: `${percentage.against}%` }}
                        />
                      </div>
                      <span className="text-sm w-16 text-right">{proposal.votes.against} ({percentage.against}%)</span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-sm w-16">Abstain:</span>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gray-500 h-2 rounded-full" 
                          style={{ width: `${percentage.abstain}%` }}
                        />
                      </div>
                      <span className="text-sm w-16 text-right">{proposal.votes.abstain} ({percentage.abstain}%)</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    Total voters: {proposal.totalVoters} / {proposal.totalVoters > 0 ? '2,847' : 'TBD'} eligible
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 mt-4 pt-4 border-t">
                <button className="px-4 py-2 text-sm border rounded-md hover:bg-muted transition-colors">
                  View Details
                </button>
                {proposal.status === "voting" && (
                  <>
                    <button className="px-4 py-2 text-sm bg-green-100 text-green-800 rounded-md hover:bg-green-200 transition-colors">
                      Vote For
                    </button>
                    <button className="px-4 py-2 text-sm bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors">
                      Vote Against
                    </button>
                    <button className="px-4 py-2 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors">
                      Abstain
                    </button>
                  </>
                )}
                {proposal.status === "draft" && (
                  <button className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                    Start Voting
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {filteredProposals.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No proposals found matching your criteria.
        </div>
      )}
    </div>
  )
}