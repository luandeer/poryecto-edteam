import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@styles/globals.css'
import { Provider } from '@/common/store/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
