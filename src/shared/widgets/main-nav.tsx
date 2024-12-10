'use client'

import React, { useState } from 'react'
import { Tabbar } from '@telegram-apps/telegram-ui'
import { Icon24QR } from '@telegram-apps/telegram-ui/dist/icons/24/qr'
import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat'
import { Icon28Heart } from '@telegram-apps/telegram-ui/dist/cjs/icons/28/heart'
import { Link } from '@/shared/components/ui/link/link'

interface IProps {
  className?: string
}

const tabs = [
  {
    id: 'Liked',
    text: 'Liked',
    href: '',
    Icon: Icon28Heart
  },
  {
    id: 'Home',
    text: 'Home',
    href: '/home',
    Icon: Icon24QR
  },
  {
    id: 'Profile',
    text: 'Profile',
    href: '/profile',
    Icon: Icon28Chat
  }
]

export const Navigation: React.FC<IProps> = ({ className }) => {
  const [currentTab, setCurrentTab] = useState(tabs[1].id)

  return (
    <Tabbar>
      {tabs.map((
          {
            id,
            text,
            href,
            Icon
          }) => (
          <Link key={id} href={href}>
            <Tabbar.Item text={text} selected={id === currentTab} onClick={() => setCurrentTab(id)}>
              <Icon />
            </Tabbar.Item>
          </Link>
        )
      )}
    </Tabbar>
  )
}
