import { type Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: '%s - [세무사 이름]',
    default: '[세무사 이름] | 신뢰할 수 있는 세무 파트너',
  },
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 종합소득세, 법인세, 부가가치세 신고부터 절세 컨설팅까지. 무료 상담 신청하세요.',
  keywords: ['세무사', '종합소득세', '법인세', '부가가치세', '절세', '세무상담'],
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`h-full antialiased ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="flex h-full bg-white font-mono dark:bg-zinc-950">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
