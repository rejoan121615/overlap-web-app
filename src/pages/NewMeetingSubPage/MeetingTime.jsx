import React from 'react'
import MeetingMask from '../../HOC/MeetingMask'

const MeetingTime = (props) => {
  console.log(props)
  return (
    <MeetingMask {...props}>
      <h1>Hello Mohd Rejoan</h1>
    </MeetingMask>
  )
}

export default MeetingTime