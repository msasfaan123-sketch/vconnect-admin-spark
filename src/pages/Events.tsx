import { useState } from "react"
import { Calendar, Clock, MapPin, Users, Plus, Filter } from "lucide-react"

const eventsData = [
  {
    id: 1,
    title: "Village Council Meeting",
    description: "Monthly meeting to discuss ongoing projects and new proposals.",
    date: "2024-03-25",
    time: "10:00 AM",
    location: "Community Hall",
    organizer: "Village Council",
    category: "Government",
    attendees: 45,
    maxAttendees: 100,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Health Awareness Campaign",
    description: "Free health checkup and awareness program about preventive healthcare.",
    date: "2024-03-28",
    time: "9:00 AM",
    location: "Village Health Center",
    organizer: "Health Committee",
    category: "Health",
    attendees: 78,
    maxAttendees: 150,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Cultural Festival",
    description: "Annual cultural festival showcasing local traditions and art forms.",
    date: "2024-04-05",
    time: "6:00 PM",
    location: "Village Square",
    organizer: "Cultural Committee",
    category: "Cultural",
    attendees: 234,
    maxAttendees: 500,
    status: "upcoming",
  },
  {
    id: 4,
    title: "Environmental Cleanup Drive",
    description: "Community effort to clean and beautify the village environment.",
    date: "2024-03-20",
    time: "7:00 AM",
    location: "Various Locations",
    organizer: "Youth Committee",
    category: "Environment",
    attendees: 67,
    maxAttendees: 100,
    status: "completed",
  },
  {
    id: 5,
    title: "Skill Development Workshop",
    description: "Training workshop on digital literacy and entrepreneurship skills.",
    date: "2024-03-30",
    time: "2:00 PM",
    location: "Community Learning Center",
    organizer: "Education Committee",
    category: "Education",
    attendees: 23,
    maxAttendees: 50,
    status: "upcoming",
  },
]

const categories = ["All", "Government", "Health", "Cultural", "Environment", "Education", "Sports"]
const statuses = ["All", "upcoming", "ongoing", "completed", "cancelled"]

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedStatus, setSelectedStatus] = useState("All")

  const filteredEvents = eventsData.filter((event) => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory
    const matchesStatus = selectedStatus === "All" || event.status === selectedStatus
    return matchesCategory && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "ongoing":
        return "bg-green-100 text-green-800"
      case "completed":
        return "bg-gray-100 text-gray-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Government: "bg-purple-100 text-purple-800",
      Health: "bg-green-100 text-green-800",
      Cultural: "bg-pink-100 text-pink-800",
      Environment: "bg-emerald-100 text-emerald-800",
      Education: "bg-blue-100 text-blue-800",
      Sports: "bg-orange-100 text-orange-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-muted-foreground">Manage village events and activities</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Event
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4 items-center bg-card p-4 rounded-lg border">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <div className="flex gap-4">
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
      </div>

      {/* Events Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold line-clamp-2">{event.title}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(event.status)}`}>
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </span>
            </div>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{event.description}</p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{event.attendees} / {event.maxAttendees} attendees</span>
              </div>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span className={`px-2 py-1 rounded-full text-xs ${getCategoryColor(event.category)}`}>
                {event.category}
              </span>
              <span className="text-sm text-muted-foreground">By {event.organizer}</span>
            </div>

            {/* Attendance Progress */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Attendance</span>
                <span>{Math.round((event.attendees / event.maxAttendees) * 100)}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 text-sm border rounded-md hover:bg-muted transition-colors">
                View Details
              </button>
              {event.status === "upcoming" && (
                <button className="px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                  Manage
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No events found matching your criteria.
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center gap-2 text-blue-600">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Upcoming Events</span>
          </div>
          <p className="text-2xl font-bold mt-2">
            {eventsData.filter(e => e.status === "upcoming").length}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center gap-2 text-green-600">
            <Users className="h-5 w-5" />
            <span className="font-medium">Total Attendees</span>
          </div>
          <p className="text-2xl font-bold mt-2">
            {eventsData.reduce((sum, e) => sum + e.attendees, 0)}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center gap-2 text-purple-600">
            <Calendar className="h-5 w-5" />
            <span className="font-medium">This Month</span>
          </div>
          <p className="text-2xl font-bold mt-2">
            {eventsData.filter(e => e.date.startsWith("2024-03")).length}
          </p>
        </div>
        <div className="bg-card p-4 rounded-lg border">
          <div className="flex items-center gap-2 text-orange-600">
            <Users className="h-5 w-5" />
            <span className="font-medium">Avg. Attendance</span>
          </div>
          <p className="text-2xl font-bold mt-2">
            {Math.round(eventsData.reduce((sum, e) => sum + (e.attendees / e.maxAttendees), 0) / eventsData.length * 100)}%
          </p>
        </div>
      </div>
    </div>
  )
}