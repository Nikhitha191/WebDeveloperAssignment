export const navigationItems = [
  { title: "Dashboard", icon: "LayoutDashboard", active: true },
  { title: "History", icon: "History" },
  { title: "Calendar", icon: "Calendar" },
  { title: "Appointments", icon: "Clock" },
  { title: "Statistics", icon: "BarChart3" },
  { title: "Tests", icon: "TestTube" },
  { title: "Chat", icon: "MessageCircle" },
  { title: "Support", icon: "HelpCircle" },
  { title: "Settings", icon: "Settings" }
];

export const healthIndicators = [
  {
    id: "heart",
    name: "Healthy Heart",
    status: "healthy",
    position: { top: "25%", left: "45%" },
    color: "#10B981"
  },
  {
    id: "lungs",
    name: "Lungs",
    status: "attention",
    position: { top: "20%", left: "35%" },
    color: "#EF4444"
  },
  {
    id: "teeth",
    name: "Teeth",
    status: "healthy",
    position: { top: "10%", left: "50%" },
    color: "#10B981"
  },
  {
    id: "bone",
    name: "Bone",
    status: "healthy",
    position: { top: "60%", left: "40%" },
    color: "#10B981"
  }
];

export const healthStatusCards = [
  {
    id: "lungs",
    title: "Lungs",
    date: "Oct 15, 2021",
    status: "needs_attention",
    color: "#EF4444"
  },
  {
    id: "teeth",
    title: "Teeth",
    date: "Oct 12, 2021",
    status: "healthy",
    color: "#10B981"
  },
  {
    id: "bone",
    title: "Bone",
    date: "Oct 10, 2021",
    status: "healthy",
    color: "#10B981"
  }
];

export const calendarAppointments = {
  "2021-10-15": [
    { time: "09:00", type: "consultation" },
    { time: "11:00", type: "checkup" }
  ],
  "2021-10-20": [
    { time: "13:00", type: "specialist" }
  ],
  "2021-10-25": [
    { time: "15:00", type: "followup" }
  ]
};

export const appointmentDetails = [
  {
    id: 1,
    type: "Dentist",
    doctor: "Dr. Sarah Johnson",
    time: "09:00 AM",
    date: "Oct 15, 2021",
    status: "confirmed"
  },
  {
    id: 2,
    type: "Physiotherapy Appointment",
    doctor: "Dr. Mike Chen",
    time: "02:00 PM",
    date: "Oct 20, 2021",
    status: "pending"
  }
];

export const upcomingSchedule = [
  {
    day: "On Thursday",
    date: "Oct 21, 2021",
    appointments: [
      {
        id: 1,
        title: "Health checkup complete",
        time: "10:00 AM",
        type: "checkup"
      },
      {
        id: 2,
        title: "Ophthalmologist",
        time: "02:30 PM",
        type: "specialist"
      }
    ]
  },
  {
    day: "On Saturday",
    date: "Oct 23, 2021",
    appointments: [
      {
        id: 3,
        title: "Cardiologist",
        time: "11:00 AM",
        type: "specialist"
      },
      {
        id: 4,
        title: "Neurologist",
        time: "03:00 PM",
        type: "specialist"
      }
    ]
  }
];

export const activityData = {
  weeklyAppointments: 3,
  chartData: [
    { day: "Mon", appointments: 2 },
    { day: "Tue", appointments: 1 },
    { day: "Wed", appointments: 0 },
    { day: "Thu", appointments: 3 },
    { day: "Fri", appointments: 1 },
    { day: "Sat", appointments: 2 },
    { day: "Sun", appointments: 0 }
  ]
};

export const userProfile = {
  name: "John Doe",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
  role: "Patient"
};
