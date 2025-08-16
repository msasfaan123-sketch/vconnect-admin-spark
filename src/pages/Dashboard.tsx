import { Users, FileText, Calendar, DollarSign, TrendingUp, AlertCircle } from "lucide-react"

const stats = [
  {
    title: "Total Citizens",
    value: "2,847",
    change: "+12%",
    changeType: "positive" as const,
    icon: Users,
  },
  {
    title: "Active Proposals",
    value: "18",
    change: "+3",
    changeType: "positive" as const,
    icon: FileText,
  },
  {
    title: "Upcoming Events",
    value: "7",
    change: "This week",
    changeType: "neutral" as const,
    icon: Calendar,
  },
  {
    title: "Village Budget",
    value: "₹12.5L",
    change: "85% utilized",
    changeType: "warning" as const,
    icon: DollarSign,
  },
]

const recentActivities = [
  {
    id: 1,
    type: "proposal",
    title: "New Street Light Installation",
    time: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    type: "event",
    title: "Village Council Meeting",
    time: "1 day ago",
    status: "completed",
  },
  {
    id: 3,
    type: "citizen",
    title: "New citizen registration: Rahul Sharma",
    time: "2 days ago",
    status: "approved",
  },
  {
    id: 4,
    type: "finance",
    title: "Budget allocation for road repair",
    time: "3 days ago",
    status: "approved",
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to V-Connect Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="bg-card p-6 rounded-lg border shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <Icon className="h-8 w-8 text-muted-foreground" />
              </div>
              <div className="mt-2">
                <span
                  className={`text-sm ${
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : stat.changeType === "warning"
                      ? "text-yellow-600"
                      : "text-muted-foreground"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activities */}
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 rounded-md hover:bg-muted/50">
                <div className="mt-1">
                  {activity.type === "proposal" && <FileText className="h-4 w-4 text-blue-500" />}
                  {activity.type === "event" && <Calendar className="h-4 w-4 text-green-500" />}
                  {activity.type === "citizen" && <Users className="h-4 w-4 text-purple-500" />}
                  {activity.type === "finance" && <DollarSign className="h-4 w-4 text-orange-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.title}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    activity.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : activity.status === "approved"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {activity.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid gap-3">
            <button className="flex items-center gap-3 p-3 text-left rounded-md hover:bg-muted transition-colors">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Register New Citizen</p>
                <p className="text-sm text-muted-foreground">Add a new citizen to the system</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-3 text-left rounded-md hover:bg-muted transition-colors">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Create Proposal</p>
                <p className="text-sm text-muted-foreground">Submit a new governance proposal</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-3 text-left rounded-md hover:bg-muted transition-colors">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Schedule Event</p>
                <p className="text-sm text-muted-foreground">Plan a new village event</p>
              </div>
            </button>
            <button className="flex items-center gap-3 p-3 text-left rounded-md hover:bg-muted transition-colors">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">View Reports</p>
                <p className="text-sm text-muted-foreground">Check analytics and reports</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Alerts */}
      <div className="bg-card p-6 rounded-lg border shadow-sm">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-amber-500" />
          Important Alerts
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-md">
            <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5" />
            <div>
              <p className="font-medium text-amber-800">Budget Review Required</p>
              <p className="text-sm text-amber-700">Q4 budget utilization needs approval from council members.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <AlertCircle className="h-4 w-4 text-blue-500 mt-0.5" />
            <div>
              <p className="font-medium text-blue-800">Upcoming Deadline</p>
              <p className="text-sm text-blue-700">Voter registration deadline is approaching in 5 days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}