const monthsEl = document.getElementById('num_months')
const daysEl = document.getElementById('num_days')
const hoursEl = document.getElementById('num_hours')
const minutesEl = document.getElementById('num_minutes')
const secondsEl = document.getElementById('num_seconds')

const newYearsTime = '1 Jan 2023'

function countdown () {
  const newYearsDate = new Date(newYearsTime)
  const currentTime = new Date()

  const totalSeconds = (newYearsDate - currentTime) / 1000
  const months = Math.floor(totalSeconds / 3600 / 24 / 30)
  const days = Math.floor(totalSeconds / 3600 / 24) % 30
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds % 60)

  monthsEl.innerHTML = months
  daysEl.innerHTML = days
  hoursEl.innerHTML = hours
  minutesEl.innerHTML = minutes
  secondsEl.innerHTML = seconds
}


countdown()

setInterval(countdown, 1000)

