# @openhow/ds

Toss Design System에서 영감받은 깔끔하고 미니멀한 React 디자인 시스템.
58개 컴포넌트와 14개 테마를 제공합니다.

## 프로젝트 구성

```
@openhow/ds 생태계
├── core (Private)              ← 소스코드 비공개
│   ├── core/tokens/            ← @openhow/ds-tokens (npm)
│   ├── core/react/             ← @openhow/ds (npm)
│   └── apps/docs/              ← 개발용 docs 앱
│
├── openhow-ds (Public)         ← 이 저장소
│   ├── README.md               ← 설치 가이드, 컴포넌트 목록, MCP 매뉴얼
│   └── examples/
│       └── vite-react/         ← Vite + React 데모 (npm 패키지 사용)
│       └── (android/)          ← 예정
│       └── (ios/)              ← 예정
│
└── npm
    ├── @openhow/ds-tokens      ← CSS 변수, 14개 테마
    └── @openhow/ds             ← React 컴포넌트 58개
```

| 구분 | 저장소 | 공개 여부 | 설명 |
|------|--------|----------|------|
| 소스코드 | core (Private) | 비공개 | 컴포넌트 원본, 빌드 파이프라인 |
| 문서 + 예제 | openhow-ds | 공개 | 사용법, 예제 코드 |
| 배포 패키지 | npm | 공개 | `dist/`만 포함 (소스코드 미포함) |

## 설치

```bash
npm install @openhow/ds @openhow/ds-tokens
```

## 사용법

```tsx
import '@openhow/ds-tokens/css';
import '@openhow/ds/styles.css';
import { Button, Text, Input } from '@openhow/ds';

function App() {
  return (
    <div>
      <Text variant="headline">Hello</Text>
      <Button variant="fill" color="primary">Click me</Button>
      <Input label="Name" placeholder="Enter your name" />
    </div>
  );
}
```

## 테마

`data-theme` 속성으로 테마를 전환할 수 있습니다. 기본 테마는 Toss입니다.

```html
<html data-theme="kakao">
```

| 테마 | 설명 |
|------|------|
| `toss` | 깔끔한 블루 기반 핀테크 스타일 (기본) |
| `dark` | 눈이 편한 다크 모드 |
| `kakao` | 카카오 옐로우 |
| `naver` | 네이버 그린 |
| `danggeun` | 당근마켓 오렌지 |
| `coupang` | 쿠팡 레드 |
| `yanolja` | 야놀자 핑크 |
| `bootpay` | 부트페이 인디고 |
| `stripe` | Stripe 퍼플 |
| `vercel` | Vercel 모노톤 |
| `github` | GitHub 블루-그레이 |
| `linear` | Linear 바이올렛 |
| `ocean` | 시원한 바다 느낌 |
| `forest` | 자연 친화적 그린 톤 |

## 컴포넌트 목록

### Actions
Button, IconButton, TextButton, BottomCTA

### Form
Input, TextArea, SearchField, Select, Checkbox, Radio, Switch, Slider, Stepper, Rating, SplitTextField

### Navigation
TabGroup, SegmentedControl

### Overlay
Modal, BottomSheet, AlertDialog, ConfirmDialog, Tooltip, ActionSheet, Toast

### Data Display
Text, Badge, Chip, Avatar, Card, ListRow, ListHeader, ListFooter, BoardRow, TableRow, GridList, Post, Highlight, Paragraph, Skeleton, SkeletonText, ProgressBar, ProgressStepper, Result, BarChart, Bubble

### Layout
HStack, VStack, Divider, Spinner, EmptyState, GradientView, ShadowView, AmountHeader

### Input
NumberKeypad, AlphabetKeypad, SecureKeypad

### Compound
AgreementGroup, AgreementItem, AccordionGroup, AccordionItem

## Claude Code에서 사용하기 (MCP)

Claude Code와 함께 사용하면 AI가 컴포넌트를 자동으로 조합해서 UI를 만들어줍니다.

### 프로젝트 CLAUDE.md에 추가

```markdown
## 디자인 시스템

이 프로젝트는 @openhow/ds 디자인 시스템을 사용합니다.

- 토큰: `import '@openhow/ds-tokens/css'`
- 스타일: `import '@openhow/ds/styles.css'`
- 컴포넌트: `import { Button, Text, ... } from '@openhow/ds'`
- 테마 변경: `<html data-theme="kakao">`
- 58개 컴포넌트 사용 가능 (Button, Text, Input, Modal, Toast, Card 등)
```

이렇게 CLAUDE.md에 명시하면 Claude Code가 컴포넌트를 인지하고 올바르게 사용합니다.

### 사용 예시

Claude Code에게 다음과 같이 요청할 수 있습니다:

- "로그인 페이지를 @openhow/ds 컴포넌트로 만들어줘"
- "카카오 테마로 설정 화면을 만들어줘"
- "Card와 ListRow를 사용해서 상품 목록을 만들어줘"

## Examples

- [Vite + React](./examples/vite-react/) — 58개 전체 컴포넌트 데모

## License

MIT
