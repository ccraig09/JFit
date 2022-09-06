const workouts = [
  {
    id: 1,
    day: "Monday",
    muscle: "Chest / Back",
    description: "Chest and Back Day",
    exercises: [
      `DB bench ${"\n"}  -   Lat pulldowns ${"\n"} + Burpees (body to ground) 10x`,
      `Incline DB bench ${"\n"}  -   Seated Rows ${"\n"} + Elevated shoulder touches 10x`,
      `Chest Flys ${"\n"}  -   Seated Good Mornings ${"\n"} + Exercise ball squeeze 15-20sec ${"\n"} + knee pushups to failure`,
      `+ Resistance band pulsing pushups ${"\n"}  -   Assisted Pullups (to Failure)`,
    ],
    abs: "https://youtu.be/j22ncHwoRkU?t=260",
  },
  {
    id: 2,
    day: "Tuesday",
    muscle: "Legs",
    description: "Leg Day",
    exercises: [
      `KB or DB Sumo Squats ${"\n"}  -   + 10 Jump Squats (heel touches)`,
      `Single Leg Leg Press ${`\n`}  -   + Single Leg Box Jumps (lateral bound)`,
      `Hip Thrusters (2 sec hold) ${"\n"}  -   + 30 Lateral Bounds`,
      `Bulgarian Lunge (3 sec negative) ${"\n"}  -  + 8 Step up jumps(alt in air)`,
      `Calf Raises (15 slow, 20 fast) ${"\n"}  -   +200 Pogo Hops`,
    ],
    abs: "https://youtu.be/DHD1-2P94DI?t=167",
  },
  {
    id: 3,
    day: "Wednesday",
    muscle: "Bi / Tri",
    description: "Biceps and Triceps (lighter weight, higher reps)",
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
      `Pull up bar hang`,
      `TRX Glute Bridges ${"\n"}  -   15 reps`,
      `Exercise ball straight leg lifts ${"\n"}  -   15 reps`,
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
      `Arnold Press  ${"\n"}  -   + Plate jump squat push outs 10x`,
      `Raise Circuit ${"\n"} -   Seated Bent over Raises ${"\n"} -   Lateral Raises ${"\n"} -   Front Raises ${"\n"} -   7 reps each  ${"\n"}  -   + Plate twist (driving)`,
      `Cable or Banded Face Pulls ${"\n"}  -   15 reps  ${"\n"}  -   + Overhead med ball slams (alt sides) 12x`,
    ],
    abs: "https://youtu.be/DHD1-2P94DI?t=167",
  },
];

export default workouts;
