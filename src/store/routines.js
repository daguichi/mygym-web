export default muscle;

const Routines = { favourites: [], history: [], propias: [] };
const muscle = [
  { title: "pecho" },
  { title: "gemelos" },
  { title: "espalda" },
  { title: "quads" },
];
class Routine {
  constructor(
    name,
    desc,
    isPublic,
    difficulty,
    duration,
    muscleGroups,
    color,
    cycle
  ) {
    this.name = name;
    this.desc = desc;
    this.isPublic = isPublic;
    this.difficulty = difficulty;
    this.duration = duration;
    this.muscleGroups = muscleGroups;
  }
}
const colors = ["FFFFFF", "DDDFFF", "ABCDEF"];
