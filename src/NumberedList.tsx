import React, { ComponentType } from "react"


export interface NumberedListProps {
  items: [],
  resourceName: string,
  ItemComponent: ComponentType
}

export const NumberedList = ({ 
    items, 
    resourceName,
    ItemComponent
    }: NumberedListProps) => {
  return (
    <>
      {items.map((item, i) => (
        <>
            <h3>{i + 1}</h3>
            <ItemComponent key={i} {...{ [resourceName]: item}} />
        </>
      ))}
    </> 
  )
}