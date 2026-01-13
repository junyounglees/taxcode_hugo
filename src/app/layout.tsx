import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - 이준영 세무사',
    default: '이준영 세무사 | AI 기반 스마트 세무 서비스',
  },
  description:
    '공학 출신 세무사가 제공하는 AI 기반 스마트 세무 서비스. 종합소득세, 법인세, 부가가치세 신고부터 절세 컨설팅까지. 무료 상담 신청하세요.',
  keywords: ['세무사', '종합소득세', '법인세', '부가가치세', '절세', 'AI세무', '세무상담'],
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
    <html lang="ko" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
