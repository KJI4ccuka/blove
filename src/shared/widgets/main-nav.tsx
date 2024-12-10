'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

import { Tabbar } from '@telegram-apps/telegram-ui'
import { Icon24Globe, Icon24Heart, Icon24Person } from '@/shared/icons/icons'

interface IProps {
  className?: string
}

const tabs = [
  {
    id: 'Liked',
    text: 'Liked',
    href: '',
    Icon: Icon24Heart
  },
  {
    id: 'Home',
    text: 'Home',
    href: '/home',
    Icon: Icon24Globe
  },
  {
    id: 'Profile',
    text: 'Profile',
    href: '/profile',
    Icon: Icon24Person
  }
]

export const Navigation: React.FC<IProps> = ({ className }) => {
  const [currentTab, setCurrentTab] = useState(tabs[1].id)
  const router = useRouter()

  const handleTabClick = (id: string, href: string) => {
    setCurrentTab(id)
    router.push(href)
  }

  return (
    <Tabbar>
      {tabs.map(({ id, text, href, Icon }) => (
        <Tabbar.Item
          key={id}
          text={text}
          selected={id === currentTab}
          onClick={() => handleTabClick(id, href)}
        >
          <Icon />
        </Tabbar.Item>
      ))}
    </Tabbar>
  )
}
