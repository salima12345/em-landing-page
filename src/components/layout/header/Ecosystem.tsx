import React from 'react'

interface EcosystemProps {
  onOpenModal: () => void
}

function Ecosystem({ onOpenModal }: EcosystemProps) {
  return (
    <div
      data-testid="ecosystem"
      className="rounded-[26px] bg-grayLight w-[218px] h-[56px] flex items-center justify-center cursor-pointer hidden xl:flex"
      onClick={onOpenModal}
    >
      <p className="tracking-[0.4rem] leading-[60px] uppercase">Ecosystem</p>
    </div>
  )
}

export default Ecosystem