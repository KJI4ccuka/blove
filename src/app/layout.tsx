import type { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { getLocale } from 'next-intl/server'

import { Root } from '@/shared/components/root/root'
import { I18nProvider } from '@/core/i18n/provider'

import '@telegram-apps/telegram-ui/dist/styles.css'
import 'normalize.css/normalize.css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blove',
  description: 'Your bloved place application'
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale()

  return (
    <html lang={locale}>
    <script src="https://telegram.org/js/telegram-web-app.js" defer></script>
    <body>
    <I18nProvider>
      <Root>
        {children}
      </Root>
    </I18nProvider>
    </body>
    </html>
  )
}
