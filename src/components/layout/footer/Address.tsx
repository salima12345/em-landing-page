"use client"

import React from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/layout/footer/Accordian'

type AddressItem = {
  text: string
}

type AddressSection = {
  title: string
  items: AddressItem[]
}

const addressSections: AddressSection[] = [
  {
    title: "Europe",
    items: [
      { text: "10, rue Myrha 75018 Paris" },
      { text: "Tél. + 33 (0)1 53 41 41 96" },
      { text: "paris@eliott-markus.com" },
    ],
  },
  {
    title: "Africa",
    items: [
      { text: "4 Rue Abdelkader Mouftakar, Casablanca 20080" },
      { text: "Tél. + 212 522270645" },
      { text: "africa@eliott-markus.com" },
    ],
  },
]

const renderAddressItem = (item: AddressItem, index: number) => (
  <div
    key={index}
    className="group relative flex items-center cursor-pointer transition-colors duration-500"
  >
    <p>{item.text}</p>
  </div>
)

export default function Address() {
  return (
    <Accordion className="w-full" defaultExpandedItem={addressSections[0].title}>
      {addressSections.map((section) => (
        <AccordionItem key={section.title} value={section.title}>
          <AccordionTrigger>
            {section.title}
          </AccordionTrigger>
          <AccordionContent isExpanded={section.title === addressSections[0].title}>
            <div className="flex flex-col space-y-1">
              {section.items.map((item, itemIndex) =>
                renderAddressItem(item, itemIndex)
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}