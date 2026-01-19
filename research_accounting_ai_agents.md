# 회계 AI 에이전트 기술 분석 보고서

## 연구 개요

- **조사 일자**: 2026-01-15
- **대상**: AIM Multiple에서 소개된 회계 AI 에이전트들의 기술적 동작 방식
- **방법론**: 공식 웹사이트, 기술 블로그, AWS 케이스 스터디, 투자 발표 자료 분석

---

## 1. 에이전트별 상세 기술 분석

### 1.1 Docyt (GARY 시스템)

#### 아키텍처 개요

```
                    +------------------------+
                    |    Docyt HpAI Engine   |
                    |  (128B data points)    |
                    +-----------+------------+
                                |
        +-----------------------+-----------------------+
        |                       |                       |
+-------v-------+    +----------v----------+    +-------v-------+
|  Fine-tuned   |    |   Precision AI      |    | Predictive AI |
|    LLMs       |    |     Models          |    |    Models     |
+-------+-------+    +----------+----------+    +-------+-------+
        |                       |                       |
        +----------+------------+-----------+-----------+
                   |                        |
           +-------v--------+       +-------v--------+
           | GARY Agents    |       | Docyt Copilot  |
           | (Bookkeeping)  |       | (Analytics)    |
           +----------------+       +----------------+
```

#### 기술 스택

| 구성 요소 | 기술 |
|-----------|------|
| **기반 모델** | Fine-tuned LLMs + Micro AI Models |
| **학습 데이터** | 128B 회계 데이터 포인트, 20+ 산업군 |
| **핵심 AI** | Precision AI (정확도), Generative AI (텍스트), Predictive AI (예측) |
| **특화 기능** | 거래 분류, 조정, 이상 탐지 |

#### 동작 방식

1. **데이터 수집**: 15,000+ 은행, 20+ POS 시스템, 300+ 급여 시스템에서 자동 연동
2. **처리**: Precision AI가 80%+ 백오피스 데이터 자동 처리
3. **검증**: 신뢰도 임계값 기반 자동/수동 처리 분기
4. **출력**: QuickBooks와 실시간 동기화

#### 핵심 차별화

- **5년간 자체 구축한 합성 데이터셋**: 전문 회계사가 레이블링한 고품질 학습 데이터
- **실시간 컨텍스트 적응**: 고객 데이터로 재학습 없이 메모리 기반 적응
- **Human-in-the-loop**: 신뢰도 임계값 미달 시 자동 검토 요청

---

### 1.2 Vic.ai

#### 아키텍처 개요

```
           +------------------+
           |   Invoice Input  |
           | (Email/Upload)   |
           +--------+---------+
                    |
           +--------v---------+
           | Computer Vision  |
           |  (OCR Engine)    |
           +--------+---------+
                    |
           +--------v---------+
           |  Deep Learning   |
           |  Models (1B+     |
           |  invoices)       |
           +--------+---------+
                    |
    +---------------+---------------+
    |                               |
+---v---+                       +---v---+
|Header |                       | Line  |
|Extract|                       | Items |
|       |                       |Extract|
+---+---+                       +---+---+
    |                               |
    +---------------+---------------+
                    |
           +--------v---------+
           | Confidence Score |
           |   Calculation    |
           +--------+---------+
                    |
        +-----------+-----------+
        |                       |
   [Score >= 95%]          [Score < 95%]
        |                       |
+-------v-------+       +-------v-------+
|  Autonomous   |       | Human Review  |
|   Posting     |       |   Queue       |
+---------------+       +-------+-------+
                                |
                        +-------v-------+
                        | Feedback Loop |
                        | (Continuous   |
                        |  Learning)    |
                        +---------------+
```

#### 기술 스택

| 구성 요소 | 기술 |
|-----------|------|
| **모델 유형** | 자체 개발 Deep Learning (비공개) |
| **학습 데이터** | 1B+ 송장 (익명화된 멀티테넌트 데이터) |
| **OCR** | 자체 Computer Vision 기술 |
| **NLP** | 송장 텍스트 이해 및 추출 |

#### 연속 학습 메커니즘

1. **글로벌 학습**: 모든 고객의 익명화된 데이터로 전역 모델 개선
2. **개별 학습**: 각 고객의 피드백으로 개인화 정확도 향상
3. **피드백 루프**: 수정 사항 → 알고리즘 학습 → 정확도 개선

#### 정확도 메트릭

- 헤더 레벨: 97-99% (Day 1부터)
- 템플릿 불필요: 새로운 벤더 송장도 즉시 처리
- 인간 정확도 초과: 지속적 학습으로 달성

---

### 1.3 FloQast (Transform AI Agents)

#### 아키텍처 개요

```
                    +------------------------+
                    |    Amazon Bedrock      |
                    |  (Claude 3.5 Sonnet)   |
                    +-----------+------------+
                                |
                    +-----------v------------+
                    |   Bedrock Agents       |
                    | (Multi-step Orchestr.) |
                    +-----------+------------+
                                |
        +-----------------------+-----------------------+
        |                       |                       |
+-------v-------+    +----------v----------+    +-------v-------+
|  Document     |    |   Code Interpreter  |    |  Memory/      |
|  Processing   |    |   (Secure Sandbox)  |    |  Session Mgmt |
|  (Textract)   |    +----------+----------+    +---------------+
+---------------+               |
                    +-----------v------------+
                    |  Reconciliation Agent  |
                    +-----------+------------+
                                |
                    +-----------v------------+
                    |   Human Approval       |
                    |      Interface         |
                    +------------------------+
```

#### 기술 스택

| 구성 요소 | 기술 |
|-----------|------|
| **LLM** | Anthropic Claude 3.5 Sonnet |
| **인프라** | Amazon Bedrock |
| **문서 처리** | Amazon Textract |
| **오케스트레이션** | Amazon Bedrock Agents |
| **코드 실행** | Secure Code Interpreter |

#### 핵심 기능

1. **자연어 명령**: 사용자가 일상 언어로 조정 규칙 정의
2. **보안 코드 실행**: 격리된 환경에서 계산 및 검증 수행
3. **멀티스텝 워크플로우**: 데이터 조회 → 계산 → 코드 생성 → 결과 제시

#### 성과

- 조정 시간 38% 감소
- 감사 프로세스 기간 23% 단축
- 워크로드 관리 44% 개선

---

### 1.4 Stacks (Bank Rec Agent)

#### 아키텍처 개요

```
           +------------------+
           |  NetSuite ERP    |
           +--------+---------+
                    |
           +--------v---------+
           |  Secure API      |
           |  Integration     |
           +--------+---------+
                    |
           +--------v---------+
           |  Google Cloud    |
           | (GKE Autopilot)  |
           +--------+---------+
                    |
    +---------------+---------------+
    |                               |
+---v---+                       +---v---+
|Vertex |                       | Cloud |
|  AI   |                       |Spanner|
+---+---+                       +-------+
    |
+---v-----------------------+
|      Gemini Models        |
| (Bank Statement Parsing)  |
+---+-----------------------+
    |
+---v-----------------------+
|   Bank Rec Agent          |
|   - Pattern Recognition   |
|   - Exception Handling    |
|   - Auto-Matching         |
+-----------+---------------+
            |
+-----------v---------------+
|   Human Review Interface  |
+---------------------------+
```

#### 기술 스택

| 구성 요소 | 기술 |
|-----------|------|
| **클라우드** | Google Cloud Platform |
| **컨테이너** | GKE Autopilot |
| **데이터베이스** | Cloud SQL, Cloud Spanner |
| **AI 모델** | Vertex AI, Gemini |
| **보안** | Security Command Center |

#### 동작 방식

1. **데이터 수집**: 다양한 형식의 은행 명세서 자동 파싱
2. **패턴 학습**: 날짜 지연, 배치 식별자 등 패턴 기억
3. **자동 매칭**: GL vs 은행 잔액 매칭
4. **예외 처리**: 제안 매칭, 이상 항목, 누락 항목 분류

#### 성과

- 거래 자동 조정률 97%
- 마감 시간 50% 단축
- 조정 시간 96% 감소

---

### 1.5 Circit (GL Transformation Agent)

#### 아키텍처 개요

```
+------------------+
|  CSV/Excel       |
|  Upload (Ledger) |
+--------+---------+
         |
+--------v---------+
|   Streamlit UI   |
+--------+---------+
         |
+--------v---------+
|   LangChain      |
|   Framework      |
+--------+---------+
         |
+--------v---------+
|  LLM (Claude/    |
|   GPT)           |
+--------+---------+
         |
+--------v---------+
| Schema Mapping   |
| AI Suggestions   |
+--------+---------+
         |
+--------v---------+
| Human Review     |
| (Dropdown Menu)  |
+--------+---------+
         |
+--------v---------+
| Transformed CSV  |
| Download         |
+------------------+
```

#### 기술 스택

| 구성 요소 | 기술 |
|-----------|------|
| **프레임워크** | LangChain |
| **UI** | Streamlit |
| **LLM** | Claude / GPT |
| **개발 도구** | GitHub Copilot |
| **배포** | Streamlit Cloud |

#### 워크플로우 단계

1. **데이터 수집(Ingestion)**: CSV/Excel 파일 업로드
2. **스키마 매핑**: AI가 컬럼을 타겟 스키마에 매핑 제안
3. **인간 검토**: 드롭다운으로 제안 수정 또는 승인
4. **변환**: 데이터 타입 변환 규칙 적용
5. **검증**: 필드 검증 및 정리
6. **출력**: 표준화된 CSV 다운로드

#### 특징

- **PoC 수준**: 프로덕션용이 아닌 개념 증명
- **오픈소스 스택**: 누구나 유사 시스템 구축 가능
- **Human-in-the-loop 필수**: AI 제안에 대한 전문가 검토 강조

---

### 1.6 Relevance AI (에이전트 빌더)

#### 아키텍처 개요

```
+---------------------------+
|     Natural Language      |
|     Agent Description     |
+-----------+---------------+
            |
+-----------v---------------+
|   No-Code Agent Builder   |
+-----------+---------------+
            |
+-----------v---------------+
|    LLM Selection Layer    |
| (OpenAI/Anthropic/Google) |
+-----------+---------------+
            |
    +-------+-------+
    |               |
+---v---+       +---v---+
|  RAG  |       | Tool  |
|System |       |Builder|
+---+---+       +---+---+
    |               |
+---v---------------v---+
|   Trigger-based       |
|   Automation          |
+-----------+-----------+
            |
+-----------v-----------+
|  Pre-built            |
|  Integrations (100+)  |
|  Slack/Intercom/etc   |
+-----------------------+
```

#### 기술 스택

| 구성 요소 | 기술 |
|-----------|------|
| **LLM 제공자** | OpenAI, Anthropic, Google, Meta |
| **RAG** | 자체 벡터 스토어 |
| **통합** | REST API, Python SDK |
| **보안** | SOC 2 Type II |

#### 핵심 기능

1. **노코드 에이전트 생성**: 자연어 설명만으로 에이전트 정의
2. **툴 빌더**: API 연결, LLM 프롬프트 체인, 커스텀 코드 실행
3. **에스컬레이션**: 자동 인간 개입 요청
4. **벌크 실행**: 데이터셋에 대한 일괄 처리

---

### 1.7 Akira AI (멀티 에이전트 오케스트레이션)

#### 아키텍처 개요

```
                +---------------------------+
                |   Master Orchestrator     |
                |        Agent              |
                +-----------+---------------+
                            |
    +-----------+-----------+-----------+-----------+
    |           |           |           |           |
+---v---+   +---v---+   +---v---+   +---v---+   +---v---+
|Ingest |   |Prepro-|   |Analyt-|   |Routing|   |Monitor|
|Agent  |   |cess   |   |ics    |   |Agent  |   |Agent  |
|       |   |Agent  |   |Agent  |   |       |   |       |
+---+---+   +---+---+   +---+---+   +---+---+   +---+---+
    |           |           |           |           |
    +-----+-----+-----+-----+-----+-----+-----+-----+
          |                 |                 |
    +-----v-----+     +-----v-----+     +-----v-----+
    | Bank      |     | ERP       |     | Invoice   |
    | Statements|     | Systems   |     | Sources   |
    +-----------+     +-----------+     +-----------+
```

#### 에이전트 역할

| 에이전트 | 역할 |
|----------|------|
| **수집(Ingestion)** | 다중 소스 데이터 수집 및 표준화 |
| **전처리(Preprocessing)** | 누락값 처리, 형식 교정, 변환 규칙 적용 |
| **분석(Analytics)** | 중복/이상 거래 실시간 감지 |
| **라우팅(Routing)** | 불일치 항목 심각도 분류 및 에스컬레이션 |
| **모니터링(Monitoring)** | 성능 추적, 병목 식별, 워크플로우 최적화 |

#### 기술 스택

| 구성 요소 | 기술 |
|-----------|------|
| **NLP** | 송장/명세서 텍스트 이해 |
| **이상 탐지** | 아웃라이어 패턴 식별 알고리즘 |
| **예측 분석** | 거래 패턴 학습 |
| **블록체인** | 감사 추적 보안 (선택적) |
| **배포** | 하이브리드 (클라우드 + 온프레미스) |

---

## 2. 공통 아키텍처 패턴

### 2.1 계층적 구조

```
┌─────────────────────────────────────────────────────────────┐
│                    User Interface Layer                      │
│              (Web UI, API, Natural Language)                 │
├─────────────────────────────────────────────────────────────┤
│                   Orchestration Layer                        │
│         (Task Distribution, Workflow Management)             │
├─────────────────────────────────────────────────────────────┤
│                      Agent Layer                             │
│    (Specialized Agents: OCR, Classification, Matching)       │
├─────────────────────────────────────────────────────────────┤
│                    AI/ML Engine Layer                        │
│          (LLMs, Deep Learning, Precision Models)             │
├─────────────────────────────────────────────────────────────┤
│                   Integration Layer                          │
│            (ERP, Banks, POS, Payroll APIs)                   │
├─────────────────────────────────────────────────────────────┤
│                     Data Layer                               │
│           (Vector Store, Transaction DB, Audit Log)          │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 핵심 디자인 패턴

#### Pattern 1: Confidence-Based Routing

```
Input → AI Processing → Confidence Score
                            │
              ┌─────────────┴─────────────┐
              │                           │
        [High: >=95%]              [Low: <95%]
              │                           │
        Autonomous                  Human Review
         Action                       Queue
```

**적용 솔루션**: Vic.ai, Docyt, FloQast

#### Pattern 2: Continuous Learning Loop

```
Transaction → Prediction → Human Feedback
      ↑                          │
      │                          │
      └──── Model Update ←───────┘
```

**적용 솔루션**: Vic.ai (1B+ 송장), Docyt (128B 데이터포인트)

#### Pattern 3: Multi-Agent Orchestration

```
Master Agent
    │
    ├── Data Collection Agent
    ├── Processing Agent
    ├── Validation Agent
    ├── Routing Agent
    └── Monitoring Agent
```

**적용 솔루션**: Akira AI, Docyt GARY

#### Pattern 4: Human-in-the-Loop Verification

```
AI Suggestion → Review Interface → Human Decision → Action
                     │
                     └── Escalation Path
```

**적용 솔루션**: Circit, FloQast, Stacks

---

## 3. 기술 스택 비교

### 3.1 LLM 선택

| 솔루션 | LLM |
|--------|-----|
| FloQast | Claude 3.5 Sonnet (Amazon Bedrock) |
| Circit | Claude / GPT (LangChain) |
| Relevance AI | OpenAI, Anthropic, Google, Meta (선택 가능) |
| Docyt | Fine-tuned LLMs (자체) |
| Vic.ai | 자체 Deep Learning 모델 |
| Stacks | Gemini (Vertex AI) |

### 3.2 인프라

| 솔루션 | 클라우드 인프라 |
|--------|-----------------|
| FloQast | AWS (Bedrock, Textract) |
| Stacks | Google Cloud (GKE, Vertex AI) |
| Circit | Streamlit Cloud |
| Akira AI | 하이브리드 (AWS Marketplace) |

### 3.3 학습 방식

| 솔루션 | 학습 방식 |
|--------|-----------|
| Vic.ai | Continuous Learning (멀티테넌트) |
| Docyt | Pre-trained + Real-time Adaptation |
| FloQast | Foundation Model (Fine-tuning 없음) |
| Stacks | Transfer Learning (Gemini) |

---

## 4. 핵심 기술 요소

### 4.1 문서 처리

1. **OCR/Computer Vision**
   - Vic.ai: 자체 Computer Vision
   - FloQast: Amazon Textract
   - 일반: Tesseract, Google Vision API

2. **데이터 추출**
   - 구조화: 필드별 파싱 (송장 번호, 날짜, 금액)
   - 비구조화: NLP 기반 엔티티 추출

### 4.2 분류/매칭

1. **거래 분류**
   - Rule-based: 키워드/패턴 매칭
   - ML-based: 학습된 분류 모델
   - Hybrid: 규칙 + ML 조합

2. **조정 매칭**
   - Exact Match: 금액/날짜/참조번호
   - Fuzzy Match: 유사도 기반 매칭
   - Pattern Learning: 과거 매칭 패턴 학습

### 4.3 이상 탐지

```
Transaction Stream
       │
       v
┌──────────────────┐
│ Pattern Analysis │ ← Historical Patterns
└────────┬─────────┘
         │
    ┌────┴────┐
    │         │
 Normal   Anomaly
    │         │
  Process   Alert
```

---

## 5. 성공적인 구현의 공통점

### 5.1 기술적 공통점

1. **도메인 특화 학습 데이터**
   - 범용 LLM이 아닌 회계 특화 데이터로 학습
   - Docyt: 128B 회계 데이터포인트
   - Vic.ai: 1B+ 송장

2. **신뢰도 기반 자동화**
   - 모든 예측에 신뢰도 점수 부여
   - 임계값 기반 자동/수동 분기
   - 점진적 자동화 확대

3. **Human-in-the-loop 설계**
   - 완전 자동화가 아닌 협업 모델
   - 전문가 검토 워크플로우 내장
   - 피드백 → 학습 루프

4. **ERP 네이티브 통합**
   - QuickBooks, NetSuite, SAP 등 직접 연동
   - API 기반 실시간 동기화
   - 기존 워크플로우 유지

### 5.2 아키텍처 공통점

1. **모듈화된 에이전트 구조**
   - 단일 모놀리식이 아닌 특화 에이전트
   - 각 에이전트가 독립적 책임
   - 오케스트레이터가 조율

2. **멀티레이어 AI**
   - LLM: 자연어 이해/생성
   - Precision AI: 정확도 중심 특화 모델
   - Predictive AI: 예측/이상탐지

3. **감사 추적 기본 제공**
   - 모든 AI 결정에 대한 로깅
   - 규제 준수 (SOX, GDPR 등)
   - 투명한 의사결정 경로

---

## 6. 결론 및 시사점

### 6.1 기술 트렌드

1. **Agentic AI로의 전환**
   - 단순 자동화 → 자율 에이전트
   - Copilot → Autopilot 모드
   - 작업 수행 → 워크플로우 관리

2. **Foundation Model 활용**
   - 자체 모델 개발 → 기존 LLM 활용
   - Fine-tuning → Prompt Engineering + RAG
   - FloQast 사례: Claude 3.5를 그대로 사용

3. **No-Code/Low-Code 트렌드**
   - Relevance AI: 코드 없이 에이전트 구축
   - Circit: AI 지원 개발
   - 전문가도 직접 구축 가능

### 6.2 한계점

1. **기술 상세 비공개**
   - 대부분 마케팅 자료 중심
   - 구체적 알고리즘/모델 미공개
   - 백서/기술문서 접근 제한

2. **검증된 성과 제한적**
   - 벤더 제공 수치에 의존
   - 독립적 벤치마크 부재
   - 실제 운영 환경 차이

### 6.3 권장 접근법

1. **PoC 우선**
   - Circit처럼 작은 범위부터 시작
   - LangChain + Streamlit으로 빠른 검증
   - 점진적 확대

2. **하이브리드 모델**
   - 완전 자동화 지양
   - Human-in-the-loop 필수
   - 신뢰도 기반 분기

3. **기존 인프라 활용**
   - ERP 교체 없이 통합
   - API 기반 연동
   - 기존 워크플로우 유지

---

## Sources

- [Docyt GARY Introduction](https://docyt.com/article/introducing-gary-the-worlds-first-ai-bookkeeper/)
- [Docyt HpAI Launch](https://secure.businesswire.com/news/home/20250806268093/en/Docyt-Sets-New-Standard-for-AI-Powered-Accounting-with-Launch-of-High-Precision-Accounting-Intelligence-HpAI-Purpose-Built-AI-for-Accounting-Automation)
- [SiliconANGLE - Docyt AI Agents](https://siliconangle.com/2025/08/06/ai-bookkeeper-docyt-debuts-precision-trained-ai-agents-accelerate-accounting-automation/)
- [Vic.ai How It Works](https://www.vic.ai/how-it-works)
- [Vic.ai Technical Overview](https://bestaitoolsforfinance.com/accounting/vic-ai-overview-features)
- [FloQast AWS Bedrock Case Study](https://aws.amazon.com/blogs/machine-learning/floqast-builds-an-ai-powered-accounting-transformation-solution-with-anthropics-claude-3-on-amazon-bedrock/)
- [FloQast AI Transaction Matching](https://www.floqast.com/blog/how-floqast-ai-transaction-matching-simplifies-reconciliation-for-modern-accountants)
- [Stacks Google Cloud Case Study](https://cloud.google.com/customers/stacks)
- [Stacks Bank Rec Agent](https://stacks.ai/resources/bank-rec-agent-how-agentic-ai-is-redefining-reconciliation)
- [Circit AI Agent Development](https://www.circit.io/post/i-built-my-first-ai-agent-using-ai)
- [PrimeGlobal Circit Case Study](https://www.primeglobal.net/news/circit-ai-agent-standardise-client-data-2025)
- [Relevance AI Documentation](https://relevanceai.com/docs/get-started/introduction)
- [Akira AI Transaction Reconciliation](https://www.akira.ai/blog/transaction-reconciliation-in-ai-agents)
- [Akira AI Multi-Agent Systems](https://www.akira.ai/blog/multi-agent-systems-process-automation)
- [AIM Multiple - Agentic AI Design Patterns](https://research.aimultiple.com/agentic-ai-design-patterns/)
- [AIM Multiple - Agentic Frameworks](https://research.aimultiple.com/agentic-frameworks/)
