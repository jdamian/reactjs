import React from 'react'

export const GifGridItem = ({id, title, url}) => {
  return (
    <div class="animate__animated animate__fadeIn m-3">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <img class="rounded-t-lg" src={url} alt={title} />
        <div class="p-6">
          <h5 class="text-gray-900 text-xm font-medium mb-2">{title}</h5>
        </div>
      </div>
    </div>
  )
}
