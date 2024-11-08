import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Button from '@/components/ui/Button'
import Media from './MediaCard'

interface EcosystemModalProps {
  onClose: () => void
}

const EcosystemModal: React.FC<EcosystemModalProps> = ({ onClose }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  const modalContent = (
    <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm z-[9999] overflow-auto px-5 py-1">
      <div className="absolute top-4 right-4">
        <Button
          imageSrc="/images/icons/close.svg"
          altText="close"
          onClick={onClose}
        />
      </div>
      <div className="container mx-auto h-full flex justify-between py-10">
      <div className="flex flex-col gap-1 w-1/3 px-2">
    <div className="flex w-full gap-1">
      <div className="h-32  w-1/2">
      <Media/>
      </div>
      <div className="h-32 bg-red-500 w-1/2"></div>
    </div>

    <div className="h-64 bg-blue-500"></div>

    <div className="flex w-full gap-1">
      <div className="h-32 bg-orange-500 w-1/2"></div>
      <div className="h-32 bg-orange-500 w-1/2"></div>
    </div>
  </div>

  <div className="flex flex-col gap-1 w-1/3 px-2">
    <div className="flex w-full gap-1">
      <div className="h-32 bg-yellow-500 w-1/2"></div>
      <div className="h-32 bg-yellow-500 w-1/2"></div>
    </div>

    <div className="h-64 bg-purple-500"></div>

    <div className="flex w-full gap-1">
      <div className="h-32 bg-orange-500 w-1/2"></div>
      <div className="h-32 bg-orange-500 w-1/2"></div>
    </div>
  </div>

        <div className="flex flex-col gap-1 w-1/3 px-2">
          <div className="h-32 bg-indigo-500 "></div>
          <div className="h-32 bg-teal-500 "></div>
          <div className="h-32 bg-orange-500"></div>
          <div className="h-32 bg-orange-500"></div>

        </div>

      
      </div>
    </div>
  )

  return mounted ? createPortal(modalContent, document.body) : null
}

export default EcosystemModal