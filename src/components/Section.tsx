import React from 'react'

type SectionProps = {
    title: string
    children: React.ReactNode
}

export default function Section({title, children}: SectionProps) {
  return (
    <section className='section'>
        <h2 className='section__title'>{title}</h2>
        <div className='section__items'>{children}</div>
    </section>
  )
}
