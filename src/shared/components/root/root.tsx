'use client'

import { type PropsWithChildren, useEffect } from 'react'
import { initData, miniApp, useLaunchParams, useSignal } from '@telegram-apps/sdk-react'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import { AppRoot } from '@telegram-apps/telegram-ui'

import { ErrorBoundary } from '@/shared/components/error-boundary'
import { Error } from '@/shared/components/error'
import { useTelegramMock } from '@/hooks/useTelegramMock'
import { useDidMount } from '@/hooks/useDidMount'
import { useClientOnce } from '@/hooks/useClientOnce'
import { setLocale } from '@/core/i18n/locale'
import { init } from '@/core/init'

function RootInner({ children }: PropsWithChildren) {
  const isDev = process.env.NODE_ENV === 'development'

  // Mock Telegram environment in development mode if needed.
  if (isDev) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTelegramMock()
  }

  const lp = useLaunchParams()
  const debug = isDev || lp.startParam === 'debug'
  const isBrowser = typeof window !== 'undefined'
  const bot = isBrowser ? window?.Telegram?.WebApp : null

  // Initialize the library.
  useClientOnce(() => {
    init(debug)
  })

  const isDark = useSignal(miniApp.isDark)
  const initDataUser = useSignal(initData.user)

  // Set the user locale.
  useEffect(() => {
    initDataUser && setLocale(initDataUser.languageCode)
  }, [initDataUser])

  useEffect(() => {
    if (bot) {

      if (!bot.isExpanded) {
        bot.expand()
      }

      // bot.setBackgroundColor("#ffffff") // Цвет фона
      // bot.setHeaderColor("#ff0000") // Цвет заголовка
    }
  }, [bot])

  return (
    <TonConnectUIProvider manifestUrl="/tonconnect-manifest.json">
      <AppRoot
        appearance={isDark ? 'dark' : 'light'}
        platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
      >
        {children}
      </AppRoot>
    </TonConnectUIProvider>
  )
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of
  // the Server Side Rendering. That's why we are showing loader on the server
  // side.
  const didMount = useDidMount()

  return didMount ? (
    <ErrorBoundary fallback={Error}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : <div className={'absolute text-lg font-medium text-foreground flex justify-center items-center w-full h-full'}
  >
     Loading...
  </div>
}
