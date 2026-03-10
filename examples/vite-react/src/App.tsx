import { useState } from 'react';
import '@openhow/ds-tokens/css';
import '@openhow/ds/styles.css';
import {
  Button, Text, Input, HStack, VStack, Badge, Chip, Divider, Spinner, Modal, Toast,
  Checkbox, Radio, RadioGroup, Switch, Select, TextArea, SearchField, Slider, Stepper, Rating,
  TabGroup, TabItem, SegmentedControl,
  BottomSheet, AlertDialog, ConfirmDialog, Tooltip, ActionSheet,
  Avatar, Card, ListRow, Skeleton, SkeletonText, ProgressBar, AccordionGroup, AccordionItem,
  IconButton, EmptyState,
  TextButton, SplitTextField, ListHeader, ListFooter, BoardRow, TableRow, GridList,
  Post, Highlight, Paragraph, ProgressStepper, Result, Bubble, BarChart,
  NumberKeypad, AlphabetKeypad, SecureKeypad, AgreementGroup, AgreementItem,
  AmountHeader, GradientView, ShadowView,
} from '@openhow/ds';

const sections = [
  { id: 'overview', label: 'Overview', group: '' },
  { id: 'button', label: 'Button', group: 'Actions' },
  { id: 'icon-button', label: 'IconButton', group: 'Actions' },
  { id: 'text-button', label: 'TextButton', group: 'Actions' },
  { id: 'text', label: 'Text', group: 'Typography' },
  { id: 'input', label: 'Input', group: 'Form' },
  { id: 'textarea', label: 'TextArea', group: 'Form' },
  { id: 'select', label: 'Select', group: 'Form' },
  { id: 'search', label: 'SearchField', group: 'Form' },
  { id: 'split-field', label: 'SplitTextField', group: 'Form' },
  { id: 'checkbox', label: 'Checkbox', group: 'Form' },
  { id: 'radio', label: 'Radio', group: 'Form' },
  { id: 'switch', label: 'Switch', group: 'Form' },
  { id: 'slider', label: 'Slider', group: 'Form' },
  { id: 'stepper', label: 'Stepper', group: 'Form' },
  { id: 'rating', label: 'Rating', group: 'Form' },
  { id: 'badge-chip', label: 'Badge & Chip', group: 'Data Display' },
  { id: 'avatar', label: 'Avatar', group: 'Data Display' },
  { id: 'card', label: 'Card', group: 'Data Display' },
  { id: 'list-row', label: 'ListRow', group: 'Data Display' },
  { id: 'skeleton', label: 'Skeleton', group: 'Data Display' },
  { id: 'progress', label: 'ProgressBar', group: 'Data Display' },
  { id: 'accordion', label: 'Accordion', group: 'Data Display' },
  { id: 'empty-state', label: 'EmptyState', group: 'Data Display' },
  { id: 'board-row', label: 'BoardRow', group: 'Data Display' },
  { id: 'table-row', label: 'TableRow', group: 'Data Display' },
  { id: 'grid-list', label: 'GridList', group: 'Data Display' },
  { id: 'post', label: 'Post', group: 'Data Display' },
  { id: 'highlight', label: 'Highlight', group: 'Data Display' },
  { id: 'bar-chart', label: 'BarChart', group: 'Data Display' },
  { id: 'progress-stepper', label: 'ProgressStepper', group: 'Data Display' },
  { id: 'result', label: 'Result', group: 'Feedback' },
  { id: 'bubble', label: 'Bubble', group: 'Feedback' },
  { id: 'keypad', label: 'Keypad', group: 'Input' },
  { id: 'secure-keypad', label: 'SecureKeypad', group: 'Input' },
  { id: 'agreement', label: 'Agreement', group: 'Domain' },
  { id: 'amount-header', label: 'AmountHeader', group: 'Domain' },
  { id: 'gradient', label: 'Gradient & Shadow', group: 'Visual' },
  { id: 'tab', label: 'Tab', group: 'Navigation' },
  { id: 'segmented', label: 'SegmentedControl', group: 'Navigation' },
  { id: 'feedback', label: 'Modal & Toast', group: 'Overlay' },
  { id: 'dialog', label: 'Dialog', group: 'Overlay' },
  { id: 'bottom-sheet', label: 'BottomSheet', group: 'Overlay' },
  { id: 'action-sheet', label: 'ActionSheet', group: 'Overlay' },
  { id: 'tooltip', label: 'Tooltip', group: 'Overlay' },
  { id: 'layout', label: 'Stack & Divider', group: 'Layout' },
];

export function App() {
  const [currentSection, setCurrentSection] = useState('overview');

  // Form states
  const [selectedChips, setSelectedChips] = useState<string[]>(['React']);
  const [checkboxA, setCheckboxA] = useState(true);
  const [checkboxB, setCheckboxB] = useState(false);
  const [radioVal, setRadioVal] = useState('option1');
  const [switchOn, setSwitchOn] = useState(true);
  const [selectVal, setSelectVal] = useState('');
  const [sliderVal, setSliderVal] = useState(40);
  const [stepperVal, setStepperVal] = useState(3);
  const [ratingVal, setRatingVal] = useState(3);
  const [tabVal, setTabVal] = useState('tab1');
  const [segVal, setSegVal] = useState('daily');

  // Overlay states
  const [modalOpen, setModalOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [actionSheetOpen, setActionSheetOpen] = useState(false);

  // Agreement states
  const [agreeAll, setAgreeAll] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [agree3, setAgree3] = useState(false);

  // SplitTextField state
  const [splitCode, setSplitCode] = useState('');
  const [splitPin, setSplitPin] = useState('');
  const [splitError, setSplitError] = useState('');

  // Keypad state
  const [keypadValue, setKeypadValue] = useState('');

  const toggleChip = (chip: string) => {
    setSelectedChips((prev) =>
      prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip],
    );
  };

  // Theme
  const themes = ['toss', 'dark', 'green', 'purple', 'orange', 'rose', 'bootpay', 'yanolja', 'naver', 'stripe', 'kakao', 'danggeun', 'coupang', 'vercel', 'csflow'] as const;
  const [currentTheme, setCurrentTheme] = useState<string>('toss');
  const applyTheme = (theme: string) => {
    setCurrentTheme(theme);
    if (theme === 'toss') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  };

  // Group sections for sidebar
  const groups: Record<string, typeof sections> = {};
  sections.forEach((s) => {
    const g = s.group || '_top';
    if (!groups[g]) groups[g] = [];
    groups[g].push(s);
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'var(--max-font-sans)', background: 'var(--max-color-bg)', color: 'var(--max-color-gray-900)', transition: 'background 0.3s, color 0.3s' }}>
      {/* Sidebar */}
      <nav
        style={{
          width: 220,
          borderRight: '1px solid var(--max-color-gray-200)',
          padding: 'var(--max-space-5)',
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflowY: 'auto',
          flexShrink: 0,
        }}
      >
        <Text variant="heading3" style={{ marginBottom: 'var(--max-space-3)' }}>Max DS</Text>
        <div style={{ display: 'flex', gap: 6, marginBottom: 'var(--max-space-2)', flexWrap: 'wrap' }}>
          {themes.map((t) => {
            const colors: Record<string, string> = {
              toss: '#3182F6', dark: '#191F28', green: '#00C471',
              purple: '#7C3AED', orange: '#F97316', rose: '#F43F5E',
              bootpay: '#507CF3', yanolja: '#4154FF',
              naver: '#03AA5A', stripe: '#533AFD',
              kakao: '#FAE100', danggeun: '#FF6F0F', coupang: '#E52528', vercel: '#171717', csflow: '#8B5CF6',
            };
            return (
              <button
                key={t}
                onClick={() => applyTheme(t)}
                title={t}
                style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: colors[t],
                  border: currentTheme === t ? '2px solid var(--max-color-brand-primary)' : '2px solid var(--max-color-gray-200)',
                  cursor: 'pointer', padding: 0,
                  boxShadow: currentTheme === t ? '0 0 0 2px var(--max-color-bg)' : 'none',
                }}
              />
            );
          })}
        </div>
        {(() => {
          const themeInfo: Record<string, { label: string; desc: string }> = {
            toss: { label: 'Toss', desc: '깔끔한 블루 기반 핀테크 스타일' },
            dark: { label: 'Dark', desc: '눈이 편한 다크 모드' },
            green: { label: 'Green', desc: '자연스러운 그린 톤' },
            purple: { label: 'Purple', desc: '세련된 퍼플 테마' },
            orange: { label: 'Orange', desc: '에너지 넘치는 오렌지' },
            rose: { label: 'Rose', desc: '부드러운 로즈 핑크' },
            bootpay: { label: 'Bootpay', desc: '부트페이 브랜드 블루' },
            yanolja: { label: 'Yanolja', desc: '야놀자 인디고 바이올렛' },
            naver: { label: 'Naver', desc: '네이버 그린' },
            stripe: { label: 'Stripe', desc: '스트라이프 퍼플' },
            kakao: { label: 'Kakao', desc: '카카오 옐로우' },
            danggeun: { label: 'Danggeun', desc: '당근마켓 오렌지' },
            coupang: { label: 'Coupang', desc: '쿠팡 레드' },
            vercel: { label: 'Vercel', desc: '버셀 모노톤 블랙' },
            csflow: { label: 'CSFlow', desc: 'AI 고객지원 퍼플' },
          };
          const info = themeInfo[currentTheme];
          return info ? (
            <div style={{ marginBottom: 'var(--max-space-4)' }}>
              <Text variant="caption" weight="semibold" style={{ color: 'var(--max-color-brand-primary)' }}>
                {info.label}
              </Text>
              <Text variant="caption" color="tertiary" style={{ marginTop: 2 }}>
                {info.desc}
              </Text>
            </div>
          ) : null;
        })()}
        <VStack gap={4}>
          {Object.entries(groups).map(([group, items]) => (
            <VStack key={group} gap={0}>
              {group !== '_top' && (
                <Text
                  variant="caption"
                  color="tertiary"
                  weight="semibold"
                  style={{ padding: '4px 10px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                >
                  {group}
                </Text>
              )}
              {items.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentSection(s.id)}
                  style={{
                    all: 'unset',
                    cursor: 'pointer',
                    padding: '5px 10px',
                    borderRadius: 'var(--max-radius-md)',
                    fontSize: '13px',
                    fontWeight: currentSection === s.id ? 600 : 400,
                    color: currentSection === s.id ? 'var(--max-color-brand-primary-text)' : 'var(--max-color-gray-600)',
                    background: currentSection === s.id ? 'var(--max-color-brand-secondary)' : 'transparent',
                    transition: 'all 150ms ease',
                    width: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  {s.label}
                </button>
              ))}
            </VStack>
          ))}
        </VStack>
      </nav>

      {/* Main */}
      <main style={{ flex: 1, padding: 'var(--max-space-8)', maxWidth: 760 }}>
        {/* ========== OVERVIEW ========== */}
        {currentSection === 'overview' && (
          <VStack gap={6}>
            <VStack gap={3}>
              <Text variant="display">Max Design System</Text>
              <Text variant="body1" color="secondary">
                Toss에서 영감받은 깔끔하고 미니멀한 디자인 시스템. 총 <strong>58개 컴포넌트</strong>와 <strong>14개 테마</strong>를 제공합니다.
              </Text>
            </VStack>
            <Divider spacing={4} />
            <VStack gap={3}>
              <Text variant="heading2">Component Count</Text>
              <HStack gap={2} wrap>
                <Badge variant="weak" color="blue">Actions 3</Badge>
                <Badge variant="weak" color="green">Form 11</Badge>
                <Badge variant="weak" color="yellow">Data Display 17</Badge>
                <Badge variant="weak" color="red">Overlay 6</Badge>
                <Badge variant="weak" color="gray">Navigation 2</Badge>
                <Badge variant="weak" color="gray">Feedback 4</Badge>
                <Badge variant="weak" color="gray">Layout 3</Badge>
              </HStack>
            </VStack>
          </VStack>
        )}

        {/* ========== BUTTON ========== */}
        {currentSection === 'button' && (
          <VStack gap={6}>
            <Text variant="heading1">Button</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Text variant="heading3">Variants</Text>
              <HStack gap={3} wrap align="center">
                <Button>Primary Fill</Button>
                <Button variant="weak">Primary Weak</Button>
                <Button color="danger">Danger Fill</Button>
                <Button color="dark">Dark Fill</Button>
                <Button variant="weak" color="dark">Dark Weak</Button>
              </HStack>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">Sizes</Text>
              <HStack gap={3} wrap align="center">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </HStack>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">States</Text>
              <HStack gap={3} wrap align="center">
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
              </HStack>
              <Button display="full">Full Width</Button>
            </VStack>
          </VStack>
        )}

        {/* ========== ICON BUTTON ========== */}
        {currentSection === 'icon-button' && (
          <VStack gap={6}>
            <Text variant="heading1">IconButton</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Text variant="heading3">Variants</Text>
              <HStack gap={3} align="center">
                <IconButton variant="ghost" label="Settings" icon={<span>⚙</span>} />
                <IconButton variant="outline" label="Edit" icon={<span>✎</span>} />
                <IconButton variant="filled" label="Add" icon={<span>+</span>} />
              </HStack>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">Sizes</Text>
              <HStack gap={3} align="center">
                <IconButton size="sm" variant="outline" label="Small" icon={<span>★</span>} />
                <IconButton size="md" variant="outline" label="Medium" icon={<span>★</span>} />
                <IconButton size="lg" variant="outline" label="Large" icon={<span>★</span>} />
              </HStack>
            </VStack>
          </VStack>
        )}

        {/* ========== TEXT ========== */}
        {currentSection === 'text' && (
          <VStack gap={6}>
            <Text variant="heading1">Text</Text>
            <Divider spacing={2} />
            <VStack gap={3}>
              <Text variant="display">Display</Text>
              <Text variant="heading1">Heading 1</Text>
              <Text variant="heading2">Heading 2</Text>
              <Text variant="heading3">Heading 3</Text>
              <Text variant="body1">Body 1 - 기본 본문 텍스트</Text>
              <Text variant="body2">Body 2 - 보조 본문 텍스트</Text>
              <Text variant="caption">Caption - 작은 설명 텍스트</Text>
              <Text variant="label">Label - 레이블 텍스트</Text>
            </VStack>
            <VStack gap={2}>
              <Text variant="heading3">Colors</Text>
              <HStack gap={4} wrap>
                <Text color="primary">Primary</Text>
                <Text color="secondary">Secondary</Text>
                <Text color="tertiary">Tertiary</Text>
                <Text color="brand">Brand</Text>
                <Text color="error">Error</Text>
                <Text color="success">Success</Text>
              </HStack>
            </VStack>
          </VStack>
        )}

        {/* ========== INPUT ========== */}
        {currentSection === 'input' && (
          <VStack gap={6}>
            <Text variant="heading1">Input</Text>
            <Divider spacing={2} />
            <VStack gap={4} style={{ maxWidth: 400 }}>
              <Text variant="heading3">Box (기본)</Text>
              <Input label="이메일" placeholder="name@example.com" />
              <Input label="비밀번호" type="password" placeholder="비밀번호 입력" help="8자 이상 입력해주세요" />
              <Input label="이름" placeholder="홍길동" error="필수 항목입니다" />
              <Input label="비활성" placeholder="수정 불가" disabled />
            </VStack>
            <VStack gap={4} style={{ maxWidth: 400 }}>
              <Text variant="heading3">Line</Text>
              <Input variant="line" label="계좌번호" placeholder="계좌번호 입력" />
              <Input variant="line" label="금액" prefix="₩" suffix="원" placeholder="0" />
            </VStack>
            <VStack gap={4} style={{ maxWidth: 400 }}>
              <Text variant="heading3">Big</Text>
              <Input variant="big" placeholder="얼마를 보낼까요?" suffix="원" />
            </VStack>
            <VStack gap={4} style={{ maxWidth: 400 }}>
              <Text variant="heading3">Clearable</Text>
              <Input label="검색" placeholder="검색어를 입력하세요" clearable />
            </VStack>
          </VStack>
        )}

        {/* ========== TEXTAREA ========== */}
        {currentSection === 'textarea' && (
          <VStack gap={6}>
            <Text variant="heading1">TextArea</Text>
            <Divider spacing={2} />
            <VStack gap={4} style={{ maxWidth: 400 }}>
              <TextArea label="메모" placeholder="내용을 입력하세요" rows={4} />
              <TextArea label="자기소개" placeholder="500자 이내" maxLength={500} showCount rows={3} />
              <TextArea label="에러 상태" error="필수 항목입니다" rows={2} />
            </VStack>
          </VStack>
        )}

        {/* ========== SELECT ========== */}
        {currentSection === 'select' && (
          <VStack gap={6}>
            <Text variant="heading1">Select</Text>
            <Divider spacing={2} />
            <VStack gap={4} style={{ maxWidth: 400 }}>
              <Select
                label="카테고리"
                placeholder="선택하세요"
                value={selectVal}
                onChange={(e) => setSelectVal(e.target.value)}
                options={[
                  { value: 'design', label: '디자인' },
                  { value: 'dev', label: '개발' },
                  { value: 'pm', label: '기획' },
                ]}
              />
              <Select
                label="비활성"
                placeholder="선택 불가"
                disabled
                options={[]}
              />
            </VStack>
          </VStack>
        )}

        {/* ========== SEARCH ========== */}
        {currentSection === 'search' && (
          <VStack gap={6}>
            <Text variant="heading1">SearchField</Text>
            <Divider spacing={2} />
            <VStack gap={4} style={{ maxWidth: 400 }}>
              <SearchField placeholder="검색어를 입력하세요" />
              <SearchField placeholder="Loading..." loading />
            </VStack>
          </VStack>
        )}

        {/* ========== CHECKBOX ========== */}
        {currentSection === 'checkbox' && (
          <VStack gap={6}>
            <Text variant="heading1">Checkbox</Text>
            <Divider spacing={2} />
            <VStack gap={3}>
              <Checkbox label="이용약관에 동의합니다" checked={checkboxA} onChange={setCheckboxA} />
              <Checkbox label="마케팅 수신 동의" description="선택사항입니다" checked={checkboxB} onChange={setCheckboxB} />
              <Checkbox label="전체 동의" indeterminate={checkboxA !== checkboxB} checked={checkboxA && checkboxB} onChange={(v) => { setCheckboxA(v); setCheckboxB(v); }} />
              <Checkbox label="비활성" disabled />
            </VStack>
          </VStack>
        )}

        {/* ========== RADIO ========== */}
        {currentSection === 'radio' && (
          <VStack gap={6}>
            <Text variant="heading1">Radio</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Text variant="heading3">Vertical</Text>
              <RadioGroup value={radioVal} onChange={setRadioVal} direction="column" gap={12}>
                <Radio value="option1" label="옵션 1" description="첫 번째 선택지입니다" />
                <Radio value="option2" label="옵션 2" description="두 번째 선택지입니다" />
                <Radio value="option3" label="옵션 3 (비활성)" disabled />
              </RadioGroup>
              <Text variant="body2" color="secondary">선택: {radioVal}</Text>
            </VStack>
          </VStack>
        )}

        {/* ========== SWITCH ========== */}
        {currentSection === 'switch' && (
          <VStack gap={6}>
            <Text variant="heading1">Switch</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Switch label="알림 설정" checked={switchOn} onChange={setSwitchOn} />
              <Switch label="다크 모드" size="sm" />
              <Switch label="비활성" disabled />
            </VStack>
          </VStack>
        )}

        {/* ========== SLIDER ========== */}
        {currentSection === 'slider' && (
          <VStack gap={6}>
            <Text variant="heading1">Slider</Text>
            <Divider spacing={2} />
            <VStack gap={4} style={{ maxWidth: 400 }}>
              <Slider label="볼륨" value={sliderVal} onChange={setSliderVal} showValue />
              <Slider label="밝기" min={0} max={200} step={10} defaultValue={100} showValue />
              <Slider label="비활성" disabled defaultValue={50} />
            </VStack>
          </VStack>
        )}

        {/* ========== STEPPER ========== */}
        {currentSection === 'stepper' && (
          <VStack gap={6}>
            <Text variant="heading1">Stepper</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <HStack gap={4} align="center">
                <Text variant="body1">수량:</Text>
                <Stepper value={stepperVal} onChange={setStepperVal} min={1} max={10} />
              </HStack>
              <HStack gap={4} align="center">
                <Text variant="body1">Small:</Text>
                <Stepper value={1} onChange={() => {}} size="sm" min={0} max={5} />
              </HStack>
            </VStack>
          </VStack>
        )}

        {/* ========== RATING ========== */}
        {currentSection === 'rating' && (
          <VStack gap={6}>
            <Text variant="heading1">Rating</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <VStack gap={2}>
                <Text variant="heading3">Interactive</Text>
                <Rating value={ratingVal} onChange={setRatingVal} size="lg" />
                <Text variant="body2" color="secondary">{ratingVal}점</Text>
              </VStack>
              <VStack gap={2}>
                <Text variant="heading3">Readonly</Text>
                <HStack gap={4} align="center">
                  <Rating value={4} readonly size="sm" />
                  <Rating value={3} readonly />
                  <Rating value={5} readonly size="lg" />
                </HStack>
              </VStack>
            </VStack>
          </VStack>
        )}

        {/* ========== BADGE & CHIP ========== */}
        {currentSection === 'badge-chip' && (
          <VStack gap={6}>
            <Text variant="heading1">Badge & Chip</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Text variant="heading3">Badge - Weak</Text>
              <HStack gap={2} wrap>
                <Badge variant="weak" color="blue">Brand</Badge>
                <Badge variant="weak" color="gray">Gray</Badge>
                <Badge variant="weak" color="green">Success</Badge>
                <Badge variant="weak" color="yellow">Warning</Badge>
                <Badge variant="weak" color="red">Error</Badge>
              </HStack>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">Badge - Fill</Text>
              <HStack gap={2} wrap>
                <Badge variant="fill" color="blue">Brand</Badge>
                <Badge variant="fill" color="green">Success</Badge>
                <Badge variant="fill" color="red">Error</Badge>
              </HStack>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">Chip</Text>
              <HStack gap={2} wrap>
                {['React', 'TypeScript', 'Vite', 'Tailwind', 'Next.js'].map((label) => (
                  <Chip key={label} selected={selectedChips.includes(label)} onClick={() => toggleChip(label)}>
                    {label}
                  </Chip>
                ))}
              </HStack>
            </VStack>
          </VStack>
        )}

        {/* ========== AVATAR ========== */}
        {currentSection === 'avatar' && (
          <VStack gap={6}>
            <Text variant="heading1">Avatar</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Text variant="heading3">Sizes</Text>
              <HStack gap={3} align="center">
                <Avatar name="김태수" size="sm" />
                <Avatar name="김태수" size="md" />
                <Avatar name="김태수" size="lg" />
                <Avatar name="김태수" size="xl" />
              </HStack>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">Shapes</Text>
              <HStack gap={3} align="center">
                <Avatar name="AB" shape="circle" size="lg" />
                <Avatar name="CD" shape="square" size="lg" />
              </HStack>
            </VStack>
          </VStack>
        )}

        {/* ========== CARD ========== */}
        {currentSection === 'card' && (
          <VStack gap={6}>
            <Text variant="heading1">Card</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Card border padding="md">
                <Text variant="heading3">기본 카드</Text>
                <Text variant="body2" color="secondary">border variant</Text>
              </Card>
              <Card shadow="md" padding="md" hoverable>
                <Text variant="heading3">Hoverable 카드</Text>
                <Text variant="body2" color="secondary">마우스를 올려보세요</Text>
              </Card>
              <Card shadow="lg" padding="lg" radius="xl">
                <Text variant="heading3">큰 카드</Text>
                <Text variant="body2" color="secondary">Large padding + shadow</Text>
              </Card>
            </VStack>
          </VStack>
        )}

        {/* ========== LIST ROW ========== */}
        {currentSection === 'list-row' && (
          <VStack gap={6}>
            <Text variant="heading1">ListRow</Text>
            <Divider spacing={2} />
            <Card border padding="sm">
              <ListRow
                left={<Avatar name="김토스" size="md" />}
                title="김토스"
                description="toss@toss.im"
                right={<Badge variant="weak" color="green">활성</Badge>}
                border="indented"
                onClick={() => {}}
              />
              <ListRow
                left={<Avatar name="이뱅크" size="md" />}
                title="이뱅크"
                description="bank@toss.im"
                right={<Badge variant="weak" color="gray">대기</Badge>}
                border="indented"
                onClick={() => {}}
              />
              <ListRow
                left={<Avatar name="박페이" size="md" />}
                title="박페이"
                description="pay@toss.im"
                withArrow
                onClick={() => {}}
              />
            </Card>
          </VStack>
        )}

        {/* ========== SKELETON ========== */}
        {currentSection === 'skeleton' && (
          <VStack gap={6}>
            <Text variant="heading1">Skeleton</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Text variant="heading3">Basic</Text>
              <HStack gap={3} align="center">
                <Skeleton variant="circular" width={48} height={48} />
                <VStack gap={2} style={{ flex: 1 }}>
                  <Skeleton variant="text" width="60%" height={16} />
                  <Skeleton variant="text" width="40%" height={14} />
                </VStack>
              </HStack>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">SkeletonText</Text>
              <SkeletonText lines={3} lastLineWidth="60%" />
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">Rectangular</Text>
              <Skeleton variant="rectangular" width="100%" height={160} />
            </VStack>
          </VStack>
        )}

        {/* ========== PROGRESS ========== */}
        {currentSection === 'progress' && (
          <VStack gap={6}>
            <Text variant="heading1">ProgressBar</Text>
            <Divider spacing={2} />
            <VStack gap={4} style={{ maxWidth: 400 }}>
              <ProgressBar value={65} label="업로드" showValue />
              <ProgressBar value={90} color="success" label="완료율" showValue />
              <ProgressBar value={40} color="warning" size="sm" />
              <ProgressBar value={20} color="error" animated />
            </VStack>
          </VStack>
        )}

        {/* ========== ACCORDION ========== */}
        {currentSection === 'accordion' && (
          <VStack gap={6}>
            <Text variant="heading1">Accordion</Text>
            <Divider spacing={2} />
            <Card border padding="sm">
              <AccordionGroup>
                <AccordionItem title="토스는 어떤 서비스인가요?" defaultOpen>
                  토스는 금융의 모든 것을 한 곳에서 해결할 수 있는 슈퍼앱입니다.
                  송금, 결제, 투자, 대출 등 다양한 금융 서비스를 제공합니다.
                </AccordionItem>
                <AccordionItem title="디자인 시스템은 무엇인가요?">
                  디자인 시스템은 일관된 사용자 경험을 만들기 위한 재사용 가능한 컴포넌트와
                  패턴의 모음입니다.
                </AccordionItem>
                <AccordionItem title="비활성 항목" disabled>
                  이 내용은 볼 수 없습니다.
                </AccordionItem>
              </AccordionGroup>
            </Card>
          </VStack>
        )}

        {/* ========== EMPTY STATE ========== */}
        {currentSection === 'empty-state' && (
          <VStack gap={6}>
            <Text variant="heading1">EmptyState</Text>
            <Divider spacing={2} />
            <Card border>
              <EmptyState
                icon={<span style={{ fontSize: 48 }}>📭</span>}
                title="아직 알림이 없어요"
                description="새로운 알림이 오면 여기에 표시됩니다."
                action={<Button variant="weak" size="small">새로고침</Button>}
              />
            </Card>
          </VStack>
        )}

        {/* ========== TAB ========== */}
        {currentSection === 'tab' && (
          <VStack gap={6}>
            <Text variant="heading1">Tab</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Text variant="heading3">Underline</Text>
              <TabGroup value={tabVal} onChange={setTabVal} variant="underline">
                <TabItem value="tab1" label="전체" />
                <TabItem value="tab2" label="입금" />
                <TabItem value="tab3" label="출금" />
                <TabItem value="tab4" label="비활성" disabled />
              </TabGroup>
              <Text variant="body2" color="secondary">선택: {tabVal}</Text>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">Filled</Text>
              <TabGroup value={tabVal} onChange={setTabVal} variant="filled">
                <TabItem value="tab1" label="전체" />
                <TabItem value="tab2" label="입금" />
                <TabItem value="tab3" label="출금" />
              </TabGroup>
            </VStack>
          </VStack>
        )}

        {/* ========== SEGMENTED CONTROL ========== */}
        {currentSection === 'segmented' && (
          <VStack gap={6}>
            <Text variant="heading1">SegmentedControl</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <SegmentedControl
                value={segVal}
                onChange={setSegVal}
                options={[
                  { value: 'daily', label: '일간' },
                  { value: 'weekly', label: '주간' },
                  { value: 'monthly', label: '월간' },
                ]}
              />
              <Text variant="body2" color="secondary">선택: {segVal}</Text>
              <SegmentedControl
                value={segVal}
                onChange={setSegVal}
                size="sm"
                options={[
                  { value: 'daily', label: 'Day' },
                  { value: 'weekly', label: 'Week' },
                  { value: 'monthly', label: 'Month' },
                ]}
              />
            </VStack>
          </VStack>
        )}

        {/* ========== MODAL & TOAST ========== */}
        {currentSection === 'feedback' && (
          <VStack gap={6}>
            <Text variant="heading1">Modal & Toast</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Text variant="heading3">Spinner</Text>
              <HStack gap={4} align="center">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="md" color="gray" />
              </HStack>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">Modal</Text>
              <Button onClick={() => setModalOpen(true)}>모달 열기</Button>
              <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                title="결제 확인"
                description="아래 내용을 확인해주세요."
                footer={
                  <>
                    <Button variant="weak" color="dark" onClick={() => setModalOpen(false)}>취소</Button>
                    <Button onClick={() => setModalOpen(false)}>확인</Button>
                  </>
                }
              >
                <Text variant="body1">30,000원을 결제하시겠습니까?</Text>
              </Modal>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">Toast</Text>
              <Button variant="weak" onClick={() => setToastVisible(true)}>토스트 표시</Button>
              <Toast text="성공적으로 저장되었습니다." open={toastVisible} position="bottom" onClose={() => setToastVisible(false)} />
            </VStack>
          </VStack>
        )}

        {/* ========== DIALOG ========== */}
        {currentSection === 'dialog' && (
          <VStack gap={6}>
            <Text variant="heading1">Dialog</Text>
            <Divider spacing={2} />
            <HStack gap={3}>
              <Button variant="weak" onClick={() => setAlertOpen(true)}>Alert Dialog</Button>
              <Button variant="weak" color="dark" onClick={() => setConfirmOpen(true)}>Confirm Dialog</Button>
            </HStack>
            <AlertDialog
              open={alertOpen}
              onClose={() => setAlertOpen(false)}
              title="알림"
              description="업데이트가 완료되었습니다."
              onConfirm={() => setAlertOpen(false)}
            />
            <ConfirmDialog
              open={confirmOpen}
              onClose={() => setConfirmOpen(false)}
              title="삭제 확인"
              description="정말로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다."
              confirmText="삭제"
              cancelText="취소"
              onConfirm={() => setConfirmOpen(false)}
              onCancel={() => setConfirmOpen(false)}
            />
          </VStack>
        )}

        {/* ========== BOTTOM SHEET ========== */}
        {currentSection === 'bottom-sheet' && (
          <VStack gap={6}>
            <Text variant="heading1">BottomSheet</Text>
            <Divider spacing={2} />
            <Button onClick={() => setSheetOpen(true)}>바텀시트 열기</Button>
            <BottomSheet open={sheetOpen} onClose={() => setSheetOpen(false)} header={<h2>결제 수단 선택</h2>}>
              <VStack gap={0}>
                <ListRow title="토스뱅크" description="****-1234" right={<Badge variant="weak" color="blue">기본</Badge>} border="indented" onClick={() => setSheetOpen(false)} />
                <ListRow title="신한카드" description="****-5678" border="indented" onClick={() => setSheetOpen(false)} />
                <ListRow title="카카오뱅크" description="****-9012" onClick={() => setSheetOpen(false)} />
              </VStack>
            </BottomSheet>
          </VStack>
        )}

        {/* ========== ACTION SHEET ========== */}
        {currentSection === 'action-sheet' && (
          <VStack gap={6}>
            <Text variant="heading1">ActionSheet</Text>
            <Divider spacing={2} />
            <Button onClick={() => setActionSheetOpen(true)}>액션시트 열기</Button>
            <ActionSheet
              open={actionSheetOpen}
              onClose={() => setActionSheetOpen(false)}
              title="더보기"
              actions={[
                { label: '공유하기', onClick: () => setActionSheetOpen(false) },
                { label: '수정하기', onClick: () => setActionSheetOpen(false) },
                { label: '삭제하기', onClick: () => setActionSheetOpen(false), destructive: true },
              ]}
              cancelLabel="취소"
            />
          </VStack>
        )}

        {/* ========== TOOLTIP ========== */}
        {currentSection === 'tooltip' && (
          <VStack gap={6}>
            <Text variant="heading1">Tooltip</Text>
            <Divider spacing={2} />
            <HStack gap={6} wrap>
              <Tooltip message="위쪽 툴팁" placement="top"><Button variant="weak" color="dark">Top</Button></Tooltip>
              <Tooltip message="아래쪽 툴팁" placement="bottom"><Button variant="weak" color="dark">Bottom</Button></Tooltip>
              <Tooltip message="위쪽 툴팁 2" placement="top"><Button variant="weak" color="dark">Top 2</Button></Tooltip>
              <Tooltip message="아래쪽 툴팁 2" placement="bottom"><Button variant="weak" color="dark">Bottom 2</Button></Tooltip>
            </HStack>
          </VStack>
        )}

        {/* ========== TEXT BUTTON ========== */}
        {currentSection === 'text-button' && (
          <VStack gap={6}>
            <Text variant="heading1">TextButton</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <HStack gap={4} align="center">
                <TextButton color="brand">자세히 보기</TextButton>
                <TextButton color="gray">건너뛰기</TextButton>
                <TextButton color="error">삭제</TextButton>
              </HStack>
              <HStack gap={4} align="center">
                <TextButton color="brand" underline>링크 스타일</TextButton>
                <TextButton color="brand" size="sm">Small</TextButton>
                <TextButton color="brand" size="lg">Large</TextButton>
              </HStack>
              <TextButton disabled>비활성</TextButton>
            </VStack>
          </VStack>
        )}

        {/* ========== SPLIT TEXT FIELD ========== */}
        {currentSection === 'split-field' && (
          <VStack gap={6}>
            <Text variant="heading1">SplitTextField</Text>
            <Text variant="body1" color="secondary">인증번호, PIN 입력용 분리 필드입니다.</Text>
            <Divider spacing={2} />

            {/* Mobile-like verification screen */}
            <div style={{
              width: 375,
              minHeight: 560,
              border: '8px solid #1a1a1a',
              borderRadius: 40,
              background: '#fff',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              position: 'relative',
            }}>
              {/* Status bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 24px 8px',
                fontSize: 12,
                fontWeight: 600,
                color: '#191f28',
              }}>
                <span>9:41</span>
                <div style={{ width: 80, height: 4, background: '#191f28', borderRadius: 2 }} />
                <span style={{ fontSize: 11 }}>●●●</span>
              </div>

              {/* Content */}
              <div style={{ padding: '32px 24px' }}>
                <div style={{ marginBottom: 8 }}>
                  <Text variant="heading2">인증번호를 입력해주세요</Text>
                </div>
                <Text variant="body2" color="secondary">010-1234-5678로 전송된 6자리 코드를 입력해주세요.</Text>

                <div style={{ marginTop: 32 }}>
                  <SplitTextField length={6} value={splitCode} onChange={setSplitCode} autoFocus />
                </div>

                {splitCode.length === 6 && (
                  <div style={{
                    marginTop: 16,
                    padding: '10px 16px',
                    background: 'var(--max-color-brand-primary)',
                    color: '#fff',
                    borderRadius: 12,
                    textAlign: 'center',
                    fontWeight: 600,
                    fontSize: 15,
                  }}>
                    인증 완료 ✓
                  </div>
                )}

                <div style={{ marginTop: 24, textAlign: 'center' }}>
                  <span style={{ fontSize: 13, color: 'var(--max-color-gray-400)' }}>인증번호가 오지 않나요? </span>
                  <span style={{ fontSize: 13, color: 'var(--max-color-brand-primary)', fontWeight: 600, cursor: 'pointer' }}>재전송</span>
                </div>
              </div>

              <Divider spacing={4} />

              {/* PIN section */}
              <div style={{ padding: '0 24px 32px' }}>
                <div style={{ marginBottom: 8 }}>
                  <Text variant="heading3">간편비밀번호 설정</Text>
                </div>
                <Text variant="caption1" color="secondary">4자리 숫자를 입력해주세요</Text>
                <div style={{ marginTop: 20 }}>
                  <SplitTextField length={4} type="number" size="lg" value={splitPin} onChange={setSplitPin} />
                </div>
              </div>
            </div>

            {/* Error state example */}
            <Text variant="heading3" style={{ marginTop: 8 }}>에러 상태</Text>
            <SplitTextField label="인증번호" length={6} value={splitError} onChange={setSplitError} error="인증번호가 올바르지 않습니다" />
          </VStack>
        )}

        {/* ========== BOARD ROW ========== */}
        {currentSection === 'board-row' && (
          <VStack gap={6}>
            <Text variant="heading1">BoardRow</Text>
            <Divider spacing={2} />
            <Card border padding="sm">
              <BoardRow prefix={<span>Q</span>}>토스는 어떤 서비스인가요?</BoardRow>
              <BoardRow prefix={<span>A</span>}>금융의 모든 것을 한 곳에서 해결할 수 있는 슈퍼앱입니다.</BoardRow>
              <BoardRow prefix={<span>Q</span>}>가입은 어떻게 하나요?</BoardRow>
              <BoardRow prefix={<span>A</span>}>앱스토어에서 토스를 다운받아 간편하게 가입할 수 있습니다.</BoardRow>
            </Card>
          </VStack>
        )}

        {/* ========== TABLE ROW ========== */}
        {currentSection === 'table-row' && (
          <VStack gap={6}>
            <Text variant="heading1">TableRow</Text>
            <Divider spacing={2} />
            <Card border padding="sm">
              <ListHeader title="결제 정보" />
              <TableRow label="상품명" value="프리미엄 구독" divider />
              <TableRow label="결제 금액" value="₩9,900" divider />
              <TableRow label="결제 수단" value="토스뱅크 ****-1234" divider />
              <TableRow label="결제일" value="2026.03.10" />
            </Card>
          </VStack>
        )}

        {/* ========== GRID LIST ========== */}
        {currentSection === 'grid-list' && (
          <VStack gap={6}>
            <Text variant="heading1">GridList</Text>
            <Divider spacing={2} />
            <GridList columns={3} gap={12}>
              {['송금', '결제', '투자', '대출', '보험', '카드'].map((item) => (
                <Card key={item} border padding="md" style={{ textAlign: 'center' }}>
                  <Text variant="body2" weight="semibold">{item}</Text>
                </Card>
              ))}
            </GridList>
          </VStack>
        )}

        {/* ========== POST ========== */}
        {currentSection === 'post' && (
          <VStack gap={6}>
            <Text variant="heading1">Post</Text>
            <Divider spacing={2} />
            <Card border padding="sm">
              <Post title="토스 디자인 시스템의 철학" description="일관된 사용자 경험을 위해 토스가 디자인 시스템을 만든 이유를 소개합니다." category="Design" date="2026.03.01" onClick={() => {}} />
              <Divider />
              <Post title="React Native에서 TDS 활용하기" description="모바일 앱 개발에서 디자인 시스템 컴포넌트를 효과적으로 사용하는 방법입니다." category="Engineering" date="2026.02.15" onClick={() => {}} />
            </Card>
          </VStack>
        )}

        {/* ========== HIGHLIGHT ========== */}
        {currentSection === 'highlight' && (
          <VStack gap={6}>
            <Text variant="heading1">Highlight</Text>
            <Divider spacing={2} />
            <VStack gap={3}>
              <Paragraph>이 문장에서 <Highlight color="brand">중요한 부분</Highlight>을 강조할 수 있습니다.</Paragraph>
              <Paragraph><Highlight color="yellow">노란색</Highlight>, <Highlight color="green">초록색</Highlight>, <Highlight color="red">빨간색</Highlight> 하이라이트를 지원합니다.</Paragraph>
              <Paragraph><Highlight color="brand" bold>굵은 강조</Highlight>도 가능합니다.</Paragraph>
            </VStack>
          </VStack>
        )}

        {/* ========== BAR CHART ========== */}
        {currentSection === 'bar-chart' && (
          <VStack gap={6}>
            <Text variant="heading1">BarChart</Text>
            <Divider spacing={2} />
            <BarChart
              data={[
                { label: '월', value: 45 },
                { label: '화', value: 72 },
                { label: '수', value: 60 },
                { label: '목', value: 90 },
                { label: '금', value: 55 },
                { label: '토', value: 30 },
                { label: '일', value: 20 },
              ]}
              height={200}
              showLabels
              showValues
              animated
            />
          </VStack>
        )}

        {/* ========== PROGRESS STEPPER ========== */}
        {currentSection === 'progress-stepper' && (
          <VStack gap={6}>
            <Text variant="heading1">ProgressStepper</Text>
            <Divider spacing={2} />
            <VStack gap={6}>
              <VStack gap={2}>
                <Text variant="heading3">Number variant</Text>
                <ProgressStepper
                  currentStep={1}
                  steps={[
                    { label: '약관동의' },
                    { label: '본인인증' },
                    { label: '정보입력' },
                    { label: '완료' },
                  ]}
                  variant="number"
                />
              </VStack>
              <VStack gap={2}>
                <Text variant="heading3">Dot variant</Text>
                <ProgressStepper
                  currentStep={2}
                  steps={[
                    { label: 'Step 1' },
                    { label: 'Step 2' },
                    { label: 'Step 3' },
                  ]}
                  variant="dot"
                />
              </VStack>
            </VStack>
          </VStack>
        )}

        {/* ========== RESULT ========== */}
        {currentSection === 'result' && (
          <VStack gap={6}>
            <Text variant="heading1">Result</Text>
            <Divider spacing={2} />
            <Card border>
              <Result
                status="success"
                icon={<span style={{ fontSize: 56 }}>✓</span>}
                title="송금 완료"
                description="김토스님에게 50,000원을 보냈습니다."
                action={<Button>확인</Button>}
                secondaryAction={<TextButton color="gray">영수증 보기</TextButton>}
              />
            </Card>
          </VStack>
        )}

        {/* ========== BUBBLE ========== */}
        {currentSection === 'bubble' && (
          <VStack gap={6}>
            <Text variant="heading1">Bubble</Text>
            <Divider spacing={2} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400 }}>
              <Bubble variant="gray" align="left">안녕하세요! 무엇을 도와드릴까요?</Bubble>
              <Bubble variant="blue" align="right">계좌 잔액을 확인하고 싶어요</Bubble>
              <Bubble variant="gray" align="left">현재 잔액은 1,234,567원입니다.</Bubble>
              <Bubble variant="blue" align="right" tail={false}>감사합니다!</Bubble>
            </div>
          </VStack>
        )}

        {/* ========== KEYPAD ========== */}
        {currentSection === 'keypad' && (
          <VStack gap={6}>
            <Text variant="heading1">Keypad</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Text variant="heading3">NumberKeypad</Text>
              <div style={{ padding: 'var(--max-space-4)', background: 'var(--max-color-gray-50)', borderRadius: 'var(--max-radius-lg)', textAlign: 'center' }}>
                <Text variant="heading2" style={{ marginBottom: 'var(--max-space-3)', minHeight: 40 }}>
                  {keypadValue || '0'}
                </Text>
                <NumberKeypad
                  onKeyPress={(key) => setKeypadValue((prev) => prev + key)}
                  onDelete={() => setKeypadValue((prev) => prev.slice(0, -1))}
                />
              </div>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">AlphabetKeypad</Text>
              <AlphabetKeypad
                onKeyPress={(key) => console.log('Key:', key)}
                onDelete={() => console.log('Delete')}
                onSpace={() => console.log('Space')}
              />
            </VStack>
          </VStack>
        )}

        {/* ========== SECURE KEYPAD ========== */}
        {currentSection === 'secure-keypad' && (
          <VStack gap={6}>
            <Text variant="heading1">SecureKeypad</Text>
            <Divider spacing={2} />
            <Text variant="body2" color="secondary">보안 키패드는 매 렌더링마다 숫자 위치가 랜덤으로 배치됩니다.</Text>
            <div style={{ padding: 'var(--max-space-4)', background: 'var(--max-color-gray-50)', borderRadius: 'var(--max-radius-lg)', maxWidth: 320 }}>
              <SecureKeypad
                maxLength={6}
                shuffle
                onComplete={(value) => alert('입력 완료: ' + value)}
              />
            </div>
          </VStack>
        )}

        {/* ========== AGREEMENT ========== */}
        {currentSection === 'agreement' && (
          <VStack gap={6}>
            <Text variant="heading1">Agreement</Text>
            <Divider spacing={2} />
            <div style={{ maxWidth: 400 }}>
              <AgreementGroup
                allChecked={agreeAll}
                onAllChange={(v) => {
                  setAgreeAll(v);
                  setAgree1(v);
                  setAgree2(v);
                  setAgree3(v);
                }}
              >
                <AgreementItem
                  checked={agree1}
                  onChange={setAgree1}
                  required
                  label="서비스 이용약관 동의"
                  link="#"
                />
                <AgreementItem
                  checked={agree2}
                  onChange={setAgree2}
                  required
                  label="개인정보 수집 및 이용 동의"
                  link="#"
                />
                <AgreementItem
                  checked={agree3}
                  onChange={setAgree3}
                  label="마케팅 정보 수신 동의"
                />
              </AgreementGroup>
            </div>
          </VStack>
        )}

        {/* ========== AMOUNT HEADER ========== */}
        {currentSection === 'amount-header' && (
          <VStack gap={6}>
            <Text variant="heading1">AmountHeader</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <AmountHeader
                label="총 자산"
                amount={12345678}
                currency="원"
                size="lg"
              />
              <AmountHeader
                label="이번 달 소비"
                amount={543210}
                currency="원"
                color="error"
              />
              <AmountHeader
                label="투자 수익"
                amount={88000}
                currency="원"
                color="success"
                animated
              />
            </VStack>
          </VStack>
        )}

        {/* ========== GRADIENT & SHADOW ========== */}
        {currentSection === 'gradient' && (
          <VStack gap={6}>
            <Text variant="heading1">Gradient & Shadow</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Text variant="heading3">GradientView</Text>
              <HStack gap={3}>
                <GradientView
                  colors={['#3182F6', '#A5D8FF']}
                  direction="to-right"
                  style={{ width: 160, height: 100, borderRadius: 'var(--max-radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text variant="body2" style={{ color: '#fff', fontWeight: 600 }}>Blue</Text>
                </GradientView>
                <GradientView
                  colors={['#F03E3E', '#FFA8A8']}
                  direction="to bottom right"
                  style={{ width: 160, height: 100, borderRadius: 'var(--max-radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text variant="body2" style={{ color: '#fff', fontWeight: 600 }}>Red</Text>
                </GradientView>
              </HStack>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">ShadowView</Text>
              <HStack gap={3}>
                {(['sm', 'md', 'lg'] as const).map((size) => (
                  <ShadowView
                    key={size}
                    level={size}
                    style={{ width: 140, height: 100, borderRadius: 'var(--max-radius-lg)', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <Text variant="body2" color="secondary">{size}</Text>
                  </ShadowView>
                ))}
              </HStack>
            </VStack>
          </VStack>
        )}

        {/* ========== LAYOUT ========== */}
        {currentSection === 'layout' && (
          <VStack gap={6}>
            <Text variant="heading1">Stack & Divider</Text>
            <Divider spacing={2} />
            <VStack gap={4}>
              <Text variant="heading3">VStack</Text>
              <VStack gap={2} style={{ padding: 'var(--max-space-4)', border: '1px dashed var(--max-color-gray-300)', borderRadius: 'var(--max-radius-lg)' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} style={{ padding: 'var(--max-space-3)', background: 'var(--max-color-brand-secondary)', borderRadius: 'var(--max-radius-md)', textAlign: 'center', color: 'var(--max-color-brand-primary)', fontWeight: 500 }}>
                    Item {i}
                  </div>
                ))}
              </VStack>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">HStack</Text>
              <HStack gap={2} style={{ padding: 'var(--max-space-4)', border: '1px dashed var(--max-color-gray-300)', borderRadius: 'var(--max-radius-lg)' }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} style={{ padding: 'var(--max-space-3) var(--max-space-5)', background: 'var(--max-color-brand-secondary)', borderRadius: 'var(--max-radius-md)', color: 'var(--max-color-brand-primary)', fontWeight: 500 }}>
                    Item {i}
                  </div>
                ))}
              </HStack>
            </VStack>
            <VStack gap={4}>
              <Text variant="heading3">Divider</Text>
              <VStack gap={3}>
                <Text variant="body2">위 내용</Text>
                <Divider />
                <Text variant="body2">아래 내용</Text>
              </VStack>
            </VStack>
          </VStack>
        )}
      </main>
    </div>
  );
}
