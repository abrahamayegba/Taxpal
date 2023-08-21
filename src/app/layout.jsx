import { Inter, Lexend, DM_Sans } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - TaxPal',
    default: 'TaxPal - Simplified Accounting Solutions for Small Businesses.',
  },
  description:
    'Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const DMSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-DM_Sans',
  weight: ['400', '500', '700'],
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        DMSans.variable,
        lexend.variable
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
