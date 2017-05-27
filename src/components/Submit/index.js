import React from 'react'

export default function Submit({ handleSubmit }) {
  return (
    <div className="Submit">
      <div className="ok" onClick={handleSubmit}>
        OK
      </div>
    </div>
  )
}
