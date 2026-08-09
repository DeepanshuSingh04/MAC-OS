import { useEffect, useState } from 'react'

const DateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date())
    }, 60000)

    return () => clearInterval(timer)
  }, [])

  const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase()
  const month = currentDate.toLocaleDateString('en-US', { month: 'short' }).toLowerCase()
  const day = currentDate.getDate()
  const time = currentDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })

  return (
    <time dateTime={currentDate.toISOString()}>
      {weekday} {month} {day} {time}
    </time>
  )
}

export default DateTime
