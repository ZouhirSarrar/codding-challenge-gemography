const TimeInterval = (startDate) => {
  const start = new Date(startDate) 
  const end = new Date(Date.now()) 
  let dayCount = 0

  while (end > start) {
    dayCount++
    start.setDate(start.getDate() + 1)
  }

  return dayCount
}
export default TimeInterval;