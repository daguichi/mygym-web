const _exercises = [
    { "id": 1, "title": "Ex 1", "duration": 100},
    { "id": 2, "title": "Ex 2", "duration": 200},
    { "id": 3, "title": "Ex 3", "duration": 300}
]
const _grupos=[
    "gluteos",
    "Gemelos",
    "Biceps"
]
export default {
    getExercises(okCallback) {
        setTimeout(() => okCallback(_exercises), 100)
    },
    getGrupos(okCallback) {
        setTimeout(() => okCallback(_grupos), 100)
    },
}