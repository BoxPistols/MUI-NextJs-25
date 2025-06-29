import type { Meta, StoryObj } from '@storybook/nextjs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/Alert';

const meta: Meta<typeof Alert> = {
  title: 'UI Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'success', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert className="w-96">
      <AlertTitle>お知らせ</AlertTitle>
      <AlertDescription>
        これはデフォルトのアラートメッセージです。
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="w-96">
      <AlertTitle>エラーが発生しました</AlertTitle>
      <AlertDescription>
        処理中にエラーが発生しました。もう一度お試しください。
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert variant="success" className="w-96">
      <AlertTitle>成功しました</AlertTitle>
      <AlertDescription>
        操作が正常に完了しました。
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert variant="warning" className="w-96">
      <AlertTitle>注意</AlertTitle>
      <AlertDescription>
        この操作は元に戻すことができません。続行してもよろしいですか？
      </AlertDescription>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => (
    <Alert variant="info" className="w-96">
      <AlertTitle>情報</AlertTitle>
      <AlertDescription>
        新しい機能が追加されました。詳細はドキュメントをご確認ください。
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <Alert className="w-96">
      <AlertDescription>
        タイトルなしのシンプルなアラートメッセージです。
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Alert>
        <AlertTitle>デフォルト</AlertTitle>
        <AlertDescription>デフォルトのアラートです。</AlertDescription>
      </Alert>
      
      <Alert variant="info">
        <AlertTitle>情報</AlertTitle>
        <AlertDescription>情報を伝えるアラートです。</AlertDescription>
      </Alert>
      
      <Alert variant="success">
        <AlertTitle>成功</AlertTitle>
        <AlertDescription>成功を示すアラートです。</AlertDescription>
      </Alert>
      
      <Alert variant="warning">
        <AlertTitle>警告</AlertTitle>
        <AlertDescription>注意を促すアラートです。</AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertTitle>エラー</AlertTitle>
        <AlertDescription>エラーを示すアラートです。</AlertDescription>
      </Alert>
    </div>
  ),
};