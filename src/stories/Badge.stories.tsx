import type { Meta, StoryObj } from '@storybook/nextjs';
import { Badge } from '@/components/ui/Badge';

const meta: Meta<typeof Badge> = {
  title: 'UI Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline', 'success', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'バッジ',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'セカンダリ',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'エラー',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'アウトライン',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: '成功',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: '警告',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: '情報',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">デフォルト</Badge>
      <Badge variant="secondary">セカンダリ</Badge>
      <Badge variant="destructive">エラー</Badge>
      <Badge variant="outline">アウトライン</Badge>
      <Badge variant="success">成功</Badge>
      <Badge variant="warning">警告</Badge>
      <Badge variant="info">情報</Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span>ステータス:</span>
        <Badge variant="success">アクティブ</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>優先度:</span>
        <Badge variant="warning">高</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>タイプ:</span>
        <Badge variant="info">お知らせ</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>エラー:</span>
        <Badge variant="destructive">失敗</Badge>
      </div>
    </div>
  ),
};

export const WithNumbers: Story = {
  render: () => (
    <div className="flex gap-4">
      <div className="flex items-center gap-2">
        <span>通知</span>
        <Badge variant="destructive">3</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>メッセージ</span>
        <Badge variant="info">12</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span>タスク</span>
        <Badge variant="warning">5</Badge>
      </div>
    </div>
  ),
};