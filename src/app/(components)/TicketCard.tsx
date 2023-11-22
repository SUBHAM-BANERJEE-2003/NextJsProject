import React from 'react'
import DeleteButton from './DeleteButton'
import RatingDisplay from './RatingDisplay'
import StatusDisplay from './StatusDisplay'
import ProgressBar from './ProgressBar'

function TicketCard() {
  return (
    <div className='flex flex-col bg-gray-600 hover:bg-gray-300 rounded-md shadow-lg p-3 m-2'>
      <div className="flex mb-3 ">
        <RatingDisplay/>
      </div>
      <div className="ml-auto">
        <DeleteButton/>
      </div>
      <h4 className="text-3xl font-semibold">Ticket Title</h4>
      <hr className='h-px border-0 bg-gray-900 mb-2'></hr>
      <p className="whitespace-pre-wrap">This is a ticket description</p>
      <div className="flex-grow"></div>
        <div className="flex mt-2">
          <div className="flex flex-col">
            <p className="text-xs  my-1">08/31/23 10:43PM</p>
              <ProgressBar/>
      </div>
      <div className="ml-auto  flex items-end">
        <StatusDisplay/>
      </div>
    </div>
  </div>
  )
}

export default TicketCard