# TaxCode 세무사 마케팅 사이트

세무사 마케팅 웹사이트. Next.js + Tailwind CSS 기반.

**Live**: https://www.taxcode.co.kr

---

## Tech Stack

| 항목 | 기술 |
|------|------|
| Framework | Next.js 15.5.9 |
| Styling | Tailwind CSS 4 |
| Template | Spotlight (Tailwind Plus) |
| Hosting | Vercel |
| Domain | taxcode.co.kr |

---

## Quick Start

```bash
npm install
npm run dev
# http://localhost:3000
```

**배포**:
```bash
vercel --prod
```

---

## Architecture Decision Records (ADR)

### ADR-001: Hugo → Next.js 전환

**일시**: 2026-01-13

**상황**:
- 기존: Hugo + Blowfish 테마 (정적 블로그)
- 문제: 마케팅 랜딩페이지, 동적 폼, 커스텀 디자인에 한계

**결정**:
Next.js + Tailwind CSS (Spotlight 템플릿)로 전환

**이유**:
1. **권위 구축 + 리드 획득** 목표에 적합
2. 프로페셔널한 랜딩페이지 디자인
3. 상담 폼, 동적 기능 확장 가능
4. React 생태계 활용 (향후 기능 추가 용이)

**대안 검토**:
- Hugo 커스터마이징 → 마케팅 랜딩페이지 디자인 한계
- 네이버 블로그 → AI 크롤링 어려움, 전문성 부족

**결과**:
- 빌드/배포 정상 작동
- Vercel 자동 배포 연결

---

### ADR-002: 네이버 블로그 vs 직접 홈페이지

**일시**: 2026-01-13

**상황**:
한국 시장에서 네이버 블로그 vs 자체 웹사이트 선택

**분석**:

| 구분 | 네이버 블로그 | 직접 홈페이지 |
|------|-------------|--------------|
| 네이버 검색 | 우대 | 불리 |
| AI 시대 | 크롤링 어려움 | AI가 읽기 쉬움 |
| 신뢰도 | "블로거" | "전문 사무실" |
| 기능 | 제한적 | 무제한 |

**결정**:
직접 홈페이지 우선 구축. 네이버 블로그는 추후 유입 채널로 병행 고려.

**이유**:
- AI 시대에 구조화된 웹사이트가 더 유리
- "세무사 추천해줘" 같은 AI 질문에 노출 가능
- 전문성/신뢰도 어필

---

### ADR-003: Spotlight 템플릿 선택

**일시**: 2026-01-13

**상황**:
Tailwind Plus 템플릿 중 선택 필요

**후보**:
- Spotlight: 개인 브랜딩/포트폴리오
- Salient: 마케팅 랜딩페이지
- Commit: SaaS 스타일

**결정**:
Spotlight 선택

**이유**:
1. 1인 세무사 개인 브랜딩에 적합
2. Hero + 서비스 + 블로그 + 상담폼 구조
3. 깔끔하고 전문적인 디자인
4. MDX 블로그 내장

---

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx          # 메인 (Hero, 서비스, 상담폼)
│   ├── about/page.tsx    # 소개
│   ├── articles/         # 블로그 (MDX)
│   └── layout.tsx        # 레이아웃, 메타데이터
├── components/
│   ├── Header.tsx        # 네비게이션
│   ├── Footer.tsx
│   └── ...
├── images/
│   ├── avatar.jpg        # 프로필 (교체 필요)
│   └── portrait.jpg      # 소개 페이지 (교체 필요)
└── styles/
    └── tailwind.css
```

---

## TODO

### 콘텐츠 (placeholder 교체)
- [ ] 세무사 이름/소개 작성
- [ ] 프로필 이미지 교체 (`src/images/avatar.jpg`, `portrait.jpg`)
- [ ] 연락처 정보 수정
- [ ] 자격/학력 정보 수정

### 기능
- [ ] 상담 폼 백엔드 연결 (Pipedream/Formspree)
- [ ] Google Analytics 설정
- [ ] 카카오톡 채널 연결

### 콘텐츠 전략 (rodemtax.com 참고)
- [ ] 타겟별 서비스 섹션 (자영업자/법인/프리랜서)
- [ ] 성과 사례 섹션 (절세 금액)
- [ ] 사업용 계산기 도구
- [ ] 실무 블로그 글 작성

### SEO
- [ ] 블로그 글 작성 (세무 키워드)
- [ ] 네이버 서치어드바이저 등록
- [ ] 구글 서치콘솔 등록

---

## 참고 자료

- **경쟁사 참고**: https://www.rodemtax.com/
  - 타겟 세분화 (자영업자/중소기업/종교단체/개인자산가)
  - 실제 절세 사례 ("3천만원 환급")
  - 낮은 진입장벽 도구 (계산기)
  - 유튜브 채널 연계

### 스크래핑 & 간편인증 연구

- **토스 스크래핑 발표**: https://www.youtube.com/watch?v=dP8S3kIQysk
  - Slash 22 - "스크래핑으로 우아한 조회 경험을 만든 방법"
  - 토스는 외부 솔루션 → 자체 개발로 전환
  - 에러율 30% → 0.5%, 속도 20초 → 5초 개선
  - 삼쩜삼/토스 등 대형 플랫폼 모두 스크래핑 방식 사용

- **간편인증 API 연동 옵션**:

  | 방식 | 장점 | 단점 |
  |-----|-----|-----|
  | **바로써트** | 카카오/네이버/PASS/토스 통합 연동, SDK 제공 | 비용 |
  | **CODEF** | 스크래핑+인증 통합, 홈택스 데이터 제공 | 비용 |
  | **직접 계약** | 비용 절감, 완전한 통제 | 개별 계약/연동 필요 |

- **개별 인증사 정보**:

  | 인증사 | 비용 (건당) | 연동 방법 | 비고 |
  |-------|-----------|----------|-----|
  | 카카오 | 200-400원 | [kakaosign.com](https://www.kakaosign.com/) | 4000만+ 이용자 |
  | PASS | 300-500원 | [passauth.co.kr](https://www.passauth.co.kr/) | 통신3사 공동운영, 5000만+ 이용자 |
  | 네이버 | 250-450원 | [BaroCert](https://developers.barocert.com/guide/naver/sign/java/getting-started/naver-sign) | Push/앱투앱 방식 |
  | 토스 | 별도문의 | [toss.im/tosscert](https://toss.im/tosscert/docs) | 2000개+ 이용기관 |

- **통합 연동 플랫폼**:
  - [바로써트 (BaroCert)](https://www.barocert.com/): 카카오/네이버/PASS/토스 통합
  - SDK: Java, PHP, .NET, Node.js, Python, Ruby
  - 연동 절차: 신청 → API Key 발급 → 테스트 → 운영 전환

### 마케팅 포지셔닝 (네거티브 마케팅)

- **삼쩜삼 공정위 제재 기사**: https://www.intn.co.kr/news/articleView.html?idxno=2048133
  - 2025.12.29 공정위, 삼쩜삼에 과징금 7100만원 (거짓·과장·기만광고)
  - 국세청 전수조사: 세무플랫폼 이용자 **99%가 부당공제** 신청
  - 국민들 약 **40억원 추징금+가산세** 부담
  - 2026년 개정 세무사법: 무자격 플랫폼 "세금환급" 광고 전면 금지

- **차별화 포인트: "세무사가 직접 수행"**
  - 플랫폼: AI/알고리즘 자동 처리 → 부당공제 위험
  - 세무사: 전문가 검토 → 정확한 신고, 책임 보장
  - 메시지: "환급 몇 만원 받으려다 추징금+가산세 맞지 마세요"

---

## 변경 이력

| 날짜 | 내용 |
|------|------|
| 2026-01-13 | Hugo → Next.js 전환, Spotlight 템플릿 적용 |
| 2026-01-13 | Vercel 배포, GitHub 연결 |
| 2026-01-13 | 콘텐츠 placeholder로 변경 |

---

## License

Template: [Tailwind Plus License](https://tailwindcss.com/plus/license)
