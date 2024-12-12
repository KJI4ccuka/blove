import React from 'react'
import { Navigation } from '@/shared/widgets/main-nav'

export default function Layout({ children }: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Navigation />
    </>
  )
}
