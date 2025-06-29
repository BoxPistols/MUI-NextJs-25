import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

const meta: Meta<typeof Input> = {
  title: 'UI Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
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
    placeholder: 'テキストを入力してください',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">メールアドレス</Label>
      <Input type="email" id="email" placeholder="example@email.com" />
    </div>
  ),
};

export const Password: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="password">パスワード</Label>
      <Input type="password" id="password" placeholder="パスワードを入力" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '無効な入力フィールド',
  },
};

export const WithError: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="error-input">ユーザー名</Label>
      <Input
        type="text"
        id="error-input"
        placeholder="ユーザー名を入力"
        className="border-error-500 focus-visible:ring-error-500"
      />
      <p className="text-sm text-error-600">このフィールドは必須です</p>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="w-full max-w-sm space-y-4">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="name">お名前</Label>
        <Input type="text" id="name" placeholder="山田太郎" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="email-form">メールアドレス</Label>
        <Input type="email" id="email-form" placeholder="example@email.com" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="phone">電話番号</Label>
        <Input type="tel" id="phone" placeholder="090-1234-5678" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="website">ウェブサイト</Label>
        <Input type="url" id="website" placeholder="https://example.com" />
      </div>
    </form>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      <div>
        <Label>小さいサイズ</Label>
        <Input className="h-8 text-sm" placeholder="小さい入力フィールド" />
      </div>
      <div>
        <Label>デフォルトサイズ</Label>
        <Input placeholder="デフォルト入力フィールド" />
      </div>
      <div>
        <Label>大きいサイズ</Label>
        <Input className="h-12 text-base" placeholder="大きい入力フィールド" />
      </div>
    </div>
  ),
};