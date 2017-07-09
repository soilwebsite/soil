import React from 'react'
import { SubmitUI } from './ui'

export default function Submit({ handleSubmit }) {
  return (
    <SubmitUI>
      <div className="ok" onClick={handleSubmit}>
        OK
      </div>
    </SubmitUI>
  )
}
