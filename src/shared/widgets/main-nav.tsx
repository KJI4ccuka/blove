'use client'

import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { Tabbar } from '@telegram-apps/telegram-ui'
import { Icon24Globe, Icon24Heart, Icon24Person } from '@/shared/icons/icons'
import { useLaunchParams } from '@telegram-apps/sdk-react'

interface IProps {
  className?: string
}

const NAV_ITEMS = [
  {
    id: 'Reg',
    text: 'Reg',
    href: 'registration',
    Icon: Icon24Heart
  },
  {
    id: 'Liked',
    text: 'Liked',
    href: '/liked',
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

  const lp = useLaunchParams()
  const currentPage = usePathname()

  const router = useRouter()

  const isIphone = ['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'

  const handleTabClick = (id: string, href: string) => {
    router.push(href)
  }

  console.log(isIphone === 'ios')

  return (
    <Tabbar>
      {NAV_ITEMS.map(({ id, text, href, Icon }) => (
        <Tabbar.Item
          className={isIphone === 'ios' ? 'mb-5' : ''}
          key={id}
          text={text}
          selected={currentPage === href}
          onClick={() => handleTabClick(id, href)}
        >
          <Icon />
        </Tabbar.Item>
      ))}
    </Tabbar>
  )
}
