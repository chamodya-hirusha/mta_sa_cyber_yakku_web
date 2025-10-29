export const playerStats = {
  level: 73,
  name: "Shadow Player",
  class: "Assault Rifle",
  health: 100,
  armor: 85,
  ammo: 240,
  stats: [
    { label: "Kills", value: "1,245", color: "text-red-400" },
    { label: "Deaths", value: "342", color: "text-red-400" },
    { label: "K/D Ratio", value: "3.64", color: "text-green-400" },
    { label: "Headshots", value: "542", color: "text-yellow-400" },
    { label: "Streak", value: "Lost", color: "text-gray-400" },
    { label: "Accuracy", value: "78%", color: "text-blue-400" },
    { label: "Flying", value: "Enabled", color: "text-purple-400" },
    { label: "Mode Info", value: "Loaded", color: "text-cyan-400" }
  ],
  abilities: [
    { name: "Thermal", icon: "🔥", status: "Ready" },
    { name: "UAV Strike", icon: "📡", status: "Ready" },
    { name: "Tactical Nuke", icon: "☢️", status: "Ready" }
  ]
};

export const demoPlayers = [
  {
    level: 45,
    name: "Storm Breaker",
    class: "Sniper",
    health: 95,
    armor: 78,
    ammo: 180,
    stats: [
      { label: "Kills", value: "892", color: "text-red-400" },
      { label: "Deaths", value: "156", color: "text-red-400" },
      { label: "K/D Ratio", value: "5.72", color: "text-green-400" },
      { label: "Headshots", value: "445", color: "text-yellow-400" },
      { label: "Streak", value: "12", color: "text-orange-400" },
      { label: "Accuracy", value: "92%", color: "text-blue-400" },
      { label: "Flying", value: "Disabled", color: "text-gray-400" },
      { label: "Mode Info", value: "Active", color: "text-cyan-400" }
    ],
    abilities: [
      { name: "Cloak", icon: "👤", status: "Ready" },
      { name: "EMP", icon: "⚡", status: "Charging" },
      { name: "Portal", icon: "🌀", status: "Ready" }
    ]
  },
  {
    level: 89,
    name: "Cyber Ninja",
    class: "Stealth",
    health: 88,
    armor: 92,
    ammo: 320,
    stats: [
      { label: "Kills", value: "2,134", color: "text-red-400" },
      { label: "Deaths", value: "234", color: "text-red-400" },
      { label: "K/D Ratio", value: "9.12", color: "text-green-400" },
      { label: "Headshots", value: "1,023", color: "text-yellow-400" },
      { label: "Streak", value: "25", color: "text-orange-400" },
      { label: "Accuracy", value: "85%", color: "text-blue-400" },
      { label: "Flying", value: "Enabled", color: "text-purple-400" },
      { label: "Mode Info", value: "Elite", color: "text-cyan-400" }
    ],
    abilities: [
      { name: "Smoke Bomb", icon: "💨", status: "Ready" },
      { name: "Dash", icon: "💨", status: "Ready" },
      { name: "Invisibility", icon: "👻", status: "Ready" }
    ]
  },
  {
    level: 67,
    name: "Titan Warrior",
    class: "Heavy",
    health: 120,
    armor: 95,
    ammo: 450,
    stats: [
      { label: "Kills", value: "1,567", color: "text-red-400" },
      { label: "Deaths", value: "289", color: "text-red-400" },
      { label: "K/D Ratio", value: "5.42", color: "text-green-400" },
      { label: "Headshots", value: "234", color: "text-yellow-400" },
      { label: "Streak", value: "8", color: "text-orange-400" },
      { label: "Accuracy", value: "67%", color: "text-blue-400" },
      { label: "Flying", value: "Disabled", color: "text-gray-400" },
      { label: "Mode Info", value: "Loaded", color: "text-cyan-400" }
    ],
    abilities: [
      { name: "Shield", icon: "🛡️", status: "Ready" },
      { name: "Rocket", icon: "🚀", status: "Ready" },
      { name: "Heal", icon: "💚", status: "Ready" }
    ]
  }
];