import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Finanxer',
  description: 'The complete financial management solution for your business.',
  keywords: [
    'finanxer',
    'financial management',
    'business finance',
    'expense tracking',
    'income tracking',
    'budgeting',
    'financial reporting',
    'cash flow management',
    'profit and loss',
    'financial analysis',
    'financial planning',
    'business intelligence',
  ],
  generator: 'prosevo',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#009879" />
        <meta name="msapplication-navbutton-color" content="#009879" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="yes" />
      </head>
      <body>{children}</body>
    </html>
  )
}