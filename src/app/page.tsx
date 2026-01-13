import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function PhoneIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-teal-500"
      />
    </svg>
  )
}

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>자세히 보기</Card.Cta>
    </Card>
  )
}

function ConsultationForm() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <PhoneIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">무료 상담 신청</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        세무 고민을 말씀해주세요. 24시간 내 연락드립니다.
      </p>
      <div className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="성함"
          aria-label="성함"
          required
          className="w-full appearance-none rounded-md bg-white px-3 py-2 shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
        />
        <input
          type="tel"
          placeholder="연락처"
          aria-label="연락처"
          required
          className="w-full appearance-none rounded-md bg-white px-3 py-2 shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
        />
        <select
          aria-label="상담 유형"
          required
          className="w-full appearance-none rounded-md bg-white px-3 py-2 shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 text-zinc-600 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/15 dark:text-zinc-200 dark:outline-zinc-700 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
        >
          <option value="">상담 유형 선택</option>
          <option value="income">종합소득세</option>
          <option value="corporate">법인세</option>
          <option value="vat">부가가치세</option>
          <option value="startup">창업/사업자등록</option>
          <option value="other">기타 상담</option>
        </select>
        <Button type="submit" className="w-full">
          상담 신청하기
        </Button>
      </div>
    </form>
  )
}

interface Credential {
  title: string
  organization: string
  year: string
}

function Credentials() {
  const credentials: Array<Credential> = [
    {
      title: '세무사',
      organization: '한국세무사회',
      year: '2024',
    },
    {
      title: '공학사 (컴퓨터공학)',
      organization: '부산대학교',
      year: '2019',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">자격 및 학력</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {credentials.map((credential, index) => (
          <li key={index} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-teal-500/10 text-teal-500">
              <CheckIcon className="h-6 w-6" />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">자격</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {credential.title}
              </dd>
              <dt className="sr-only">기관</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {credential.organization}
              </dd>
              <dt className="sr-only">연도</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500">
                {credential.year}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Services() {
  const services = [
    {
      title: '종합소득세 신고',
      description: '프리랜서, 임대소득, 금융소득 등 모든 소득에 대한 최적의 절세 전략',
    },
    {
      title: '법인세 신고',
      description: '중소기업 세액공제, 연구개발비 공제 등 법인 맞춤 절세 컨설팅',
    },
    {
      title: '부가가치세 신고',
      description: '매입세액 공제 극대화, 영세율 적용 등 VAT 전문 서비스',
    },
    {
      title: '창업 컨설팅',
      description: '사업자등록부터 세무기장까지 창업 전 과정 원스톱 지원',
    },
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        서비스
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
          >
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Features() {
  const features = [
    {
      title: 'AI 기반 절세 분석',
      description: '인공지능이 고객님의 재무 데이터를 분석하여 최적의 절세 방안을 제시합니다.',
    },
    {
      title: '실시간 세무 현황',
      description: '대시보드에서 세금 신고 현황과 납부 일정을 한눈에 확인하세요.',
    },
    {
      title: '빠른 응답',
      description: '카카오톡, 이메일 등 다양한 채널로 24시간 내 답변 드립니다.',
    },
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        왜 이준영 세무사인가요?
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/10">
              <CheckIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  const articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            공학 출신 세무사의
            <br />
            <span className="text-teal-500">스마트한 세무 서비스</span>
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            안녕하세요, 이준영 세무사입니다. 컴퓨터공학을 전공한 엔지니어 출신으로,
            AI와 자동화 기술을 활용해 더 정확하고 효율적인 세무 서비스를 제공합니다.
            복잡한 세금 문제, 함께 해결해 드리겠습니다.
          </p>
          <div className="mt-6 flex gap-4">
            <Button href="#consultation">무료 상담 신청</Button>
            <Button href="/about" variant="secondary">
              세무사 소개
            </Button>
          </div>
        </div>
      </Container>
      <Container className="mt-16 md:mt-20">
        <Services />
        <Features />
      </Container>
      <Container className="mt-24 md:mt-28" id="consultation">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Article key={article.slug} article={article} />
              ))
            ) : (
              <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  세무 정보 블로그
                </h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  사업자가 알아야 할 세무 정보와 절세 팁을 곧 연재합니다.
                </p>
              </div>
            )}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <ConsultationForm />
            <Credentials />
          </div>
        </div>
      </Container>
    </>
  )
}
