const workouts = [
  {
    id: 1,
    day: "Monday",
    muscle: "Chest / Back",
    description: "Chest and Back Day",
    exercises: [
      `DB bench ${"\n"}  -   Lat pulldowns`,
      `Incline DB bench ${"\n"}  -   Seated Rows`,
      `Chest Flys ${"\n"}  -   Seated Good Mornings`,
      `Knee Pushups ${"\n"}  -   Assisted Pullups (to Failure)`,
    ],
    abs: "https://youtu.be/j22ncHwoRkU?t=260",
  },
  {
    id: 2,
    day: "Tuesday",
    muscle: "Legs",
    description: "Leg Day",
    exercises: [
      `KB or DB Sumo Squats ${"\n"}  -   10 Jump Squats`,
      `Single Leg Leg Press ${`\n`}  -   Single Leg Box Jumps`,
      `Hip Thrusters (2 sec hold) ${"\n"}  -   20 Lateral Bounds`,
      `Bulgarian Lunge (3 sec negative) ${"\n"}  -   8 Single Leg Box Jumps`,
      `Calf Raises (15 slow, 20 fast) ${"\n"}  -   50 Pogo Hops`,
    ],
    abs: "https://youtu.be/DHD1-2P94DI?t=167",
  },
  {
    id: 3,
    day: "Wednesday",
    muscle: "Bi / Tri",
    description: "Biceps and Triceps",
    exercises: [
      `Barbell Curl ${"\n"}  -   Tricep Pulldown`,
      `Incline DB curl ${`\n`}  -   Close Grip Barbell Press`,
      `DB Hammer Curl ${"\n"}  -   Tricep Overhead Pushaway`,
      `Wrist Curls ${"\n"}  -   Dips`,
    ],
    abs: "https://youtu.be/N9rQIk9puXI?t=23",
  },
  {
    id: 4,
    day: "Thursday",
    muscle: "Active Rest",
    description: `Active Rest Day ${"\n"}25 Reps ${"\n"}2 Sets`,
    exercises: [
      `Tibialis Raise ${"\n"}  -   Wall Calf Raise`,
      `Patrick Step`,
      `Banded Glute Bridges ${"\n"}  -   15 reps`,
      `Clams ${"\n"}  -   15 reps`,
      "Mobility Circuit from IG",
    ],
    abs: "https://youtu.be/Ehy8G39d_PM",
  },
  {
    id: 5,
    day: "Friday",
    muscle: "Shoulder",
    description: `Shoulder Day`,
    exercises: [
      "Banded External Rotation",
      "Banded Overhead Press (3 sec hold at top)",
      `Arnold Press`,
      `Raise Circuit ${"\n"} -   Seated Bent over Raises ${"\n"} -   Lateral Raises ${"\n"} -   Front Raises ${"\n"} -   7 reps each`,
      `Banded Glute Bridges ${"\n"}  -   15 reps`,
      `Cable or Banded Face Pulls ${"\n"}  -   15 reps`,
    ],
    abs: "https://youtu.be/DHD1-2P94DI?t=167",
  },
];

export default workouts;
