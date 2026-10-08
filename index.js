const students = [
  { name: 'Rehan', marks: [78, 85, 92, 67, 88] },
  { name: 'Ali', marks: [45, 52, 61, 38, 55] },
  { name: 'Sara', marks: [95, 89, 92, 98, 91] },
  { name: 'Hina', marks: [33, 28, 41, 35, 30] },
  { name: 'Usman', marks: [60, 72, 68, 75, 70] },
  { name: 'Ayesha', marks: [88, 92, 85, 90, 87] },
]
function studentsDetails(studentsList) {
  return studentsList.map((student) => {
    const totalMarks = student.marks.reduce((acc, curr) => acc + curr, 0)
    const avg = totalMarks / student.marks.length
    return {
      name: student.name,
      marks: student.marks,
      average: avg,
    }
  })
}
function getGrade(avg) {
  if (avg >= 90) return 'A+'
  if (avg >= 80) return 'A'
  if (avg >= 70) return 'B'
  if (avg >= 60) return 'C'
  if (avg >= 50) return 'D'
  return 'Fail'
}

function getStatus(avg) {
  if (avg >= 50) return 'Pass'
  return 'Fail'
}

const tbody = document.querySelector('tbody')
const resultButton = document.querySelector('.result')
const topper = document.querySelector('.topper')
const classTotalAverage = document.querySelector('.classAverage')
const passedStudents = document.querySelector('.passed')

function getResult() {
  const details = studentsDetails(students)

  const reduce = details.reduce((prev, curr) => {
    return curr.average > prev.average ? curr : prev
  })
  topper.innerHTML = `${reduce.name} (${reduce.average})`

  const totalAverage = details.map((e) => e.average)
  const classAverage =
    totalAverage.reduce((acc, curr) => acc + curr, 0) / totalAverage.length
  classTotalAverage.innerHTML = `${classAverage.toFixed(2)}`

  const passed = details.filter((e) => e.average >= 50)
  const passPercentage = (passed.length / details.length) * 100
  passedStudents.innerHTML = ` ${passed.length}/${details.length} (${passPercentage.toFixed(2)}%)`
  
   tbody.innerHTML = ''
  details.forEach((e) => {
    tbody.innerHTML += `<tr>
      <td>${e.name}</td>
      <td>${e.average}</td>
      <td>${getGrade(e.average)}</td>
      <td>${getStatus(e.average)}</td>
    </tr>`})
}
resultButton.addEventListener('click', getResult)
