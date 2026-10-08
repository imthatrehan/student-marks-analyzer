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

// Problem 1: Average Marks
function averageMarks() {
  const details = studentsDetails(students)
    details.forEach((e) => console.log(`${e.name} : ${e.average}`))
}
averageMarks()

// Problem 2: Grade Assign
function getGrades() {
  const details = studentsDetails(students)
  return details.forEach((e) => {
    const grade = getGrade(e.average)
    console.log(`${e.name} : ${grade}`)
  })
}
getGrades()

// Problem 3: Class Topper

function classTopperBySort() {
  const details = studentsDetails(students)
  const sort = [...details].sort((a, b) => b.average - a.average)
  console.log(`Topper: ${sort[0].name} (${sort[0].average})`)
}
classTopperBySort()

function classTopperByReduce() {
  const details = studentsDetails(students)
  const reduce = details.reduce((prev, curr) => {
    return curr.average > prev.average ? curr : prev
  })
  console.log(`Topper: ${reduce.name} (${reduce.average})`)
}
classTopperByReduce()

// Problem 4: Fail Students List

function failStudents() {
  const details = studentsDetails(students)
  const filter = details.filter((e) => e.average < 50)
  filter.forEach((e) => {
    console.log(`Fail Students: ["${e.name}"]`)
  })
}
failStudents()

// Problem 5: Subject-wise Topper

function SubjectWiseTopper() {
  const details = studentsDetails(students)
  const totalSubjects = details[0].marks.length
  for (let i = 0; i < totalSubjects; i++) {
    const topper = details.reduce((prev, curr) =>
      curr.marks[i] > prev.marks[i] ? curr : prev,
    )
    console.log(`Subject ${i + 1}: ${topper.name} (${topper.marks[i]})`)
  }
}
SubjectWiseTopper()

// Problem 6: Passing Percentage

function passingPercentage() {
  const details = studentsDetails(students)
  const passed = details.filter((e) => e.average >= 50)
  const passPercentage = (passed.length / details.length) * 100
  console.log(
    `Passed: ${passed.length}/${details.length} (${passPercentage.toFixed(2)}%)`,
  )
}
passingPercentage()

// Problem 7: Class Average

function classAverage() {
  const details = studentsDetails(students)
  const totalAverage = details.map((e) => e.average)
  const classAverage =
    totalAverage.reduce((acc, curr) => acc + curr, 0) / totalAverage.length
  console.log(`Class Average: ${classAverage.toFixed(2)}`)
}
classAverage()

// Problem 8: Grade Distribution

function gradeDistribution() {
  const details = studentsDetails(students)
  const result = details.reduce(
    (acc, student) => {
      const grade = getGrade(student.average)
      acc[grade] = acc[grade] + 1
      return acc
    },
    { 'A+': 0, A: 0, B: 0, C: 0, D: 0, Fail: 0 },
  )
  return result
}
const a = gradeDistribution()
console.log(a)
