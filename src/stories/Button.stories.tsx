import type { Meta, StoryObj } from '@storybook/nextjs';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Button> = {
  title: 'UI Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ボタン',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'セカンダリボタン',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: '削除',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'アウトライン',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'ゴースト',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'リンク',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: '小さいボタン',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: '大きいボタン',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '無効なボタン',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">デフォルト</Button>
      <Button variant="secondary">セカンダリ</Button>
      <Button variant="destructive">削除</Button>
      <Button variant="outline">アウトライン</Button>
      <Button variant="ghost">ゴースト</Button>
      <Button variant="link">リンク</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">小</Button>
      <Button size="default">デフォルト</Button>
      <Button size="lg">大</Button>
    </div>
  ),
};