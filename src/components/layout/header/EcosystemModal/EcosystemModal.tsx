import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Button from '@/components/ui/Button'
import Media from './MediaCard'
import Statistics from './Statistics'
import QuoteCarousel from './Quotes'
import DateTimeWeather from './DateTimeWeather'
import EmImage from './EmImage'
import MiroviaImage from './MiroviaImage'
import LawCareImage from './LawCareImage'
import BlancheImage from './BlancheImage'
import WiloImage from './WiloImage'
import DeskImage from './DeskImage'

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
    <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm z-[50] overflow-auto px-5 py-1">
      <div className="absolute top-4 right-4">
        <Button
          imageSrc="/images/icons/close.svg"
          altText="close"
          onClick={onClose}
        />
      </div>
      <div className="container mx-auto h-full flex justify-between py-10">
        <div className="flex flex-col gap-5 w-1/3 px-2">
          <div className="flex w-full gap-5">
            <div className="h-32 w-1/2">
              <Media/>
            </div>
            <div className="h-32 w-1/2">
              <Statistics value={45} title='Consultants and experts'/>
            </div>
          </div>
          <div className="h-96">
            <QuoteCarousel/>
          </div>
          <div className="flex w-full gap-5">
            <div className="h-40 w-1/2">
              <DateTimeWeather city="Paris" continent="Europe" isDark={false} />
            </div>
            <div className="h-40 w-1/2">
              <DateTimeWeather city="Casablanca" continent="Africa" isDark={true} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-1/3 px-2">
          <div className="flex w-full gap-5">
            <div className="h-32 w-1/2">
              <Statistics value={800} title='References'/>
            </div>
            <div className="h-32 w-1/2">
              <Statistics value={4} title='Continents'/>
            </div>
          </div>
          <div className="h-96">
            <EmImage/>
          </div>
          <div className="h-40">
            <BlancheImage/>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-1/3 px-2">
          <div className="h-40">
            <MiroviaImage/>
          </div>
          <div className="h-40">
            <LawCareImage/>
          </div>
          <div className="h-40">
            <DeskImage/>
          </div>
          <div className="h-40 bg-[#F3F0E7] rounded-[25px]">
            <WiloImage/>
          </div>
        </div>
      </div>
    </div>
  )

  return mounted ? createPortal(modalContent, document.body) : null
}

export default EcosystemModal