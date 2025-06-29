import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const meta: Meta<typeof Card> = {
  title: 'UI Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>カードタイトル</CardTitle>
        <CardDescription>カードの説明文がここに入ります。</CardDescription>
      </CardHeader>
      <CardContent>
        <p>カードのメインコンテンツがここに表示されます。</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">キャンセル</Button>
        <Button>確認</Button>
      </CardFooter>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardContent className="pt-6">
        <p>シンプルなカードの例です。ヘッダーやフッターがない場合の表示です。</p>
      </CardContent>
    </Card>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Card className="w-[350px]">
      <div className="h-48 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-t-lg"></div>
      <CardHeader>
        <CardTitle>画像付きカード</CardTitle>
        <CardDescription>画像を含むカードの例です。</CardDescription>
      </CardHeader>
      <CardContent>
        <p>画像と組み合わせたカードレイアウトの表示例です。</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">詳細を見る</Button>
      </CardFooter>
    </Card>
  ),
};

export const ProductCard: Story = {
  render: () => (
    <Card className="w-[300px]">
      <div className="h-40 bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-lg flex items-center justify-center">
        <span className="text-primary-600 font-semibold">商品画像</span>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">商品名</CardTitle>
        <CardDescription>商品の簡単な説明文</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-primary-600">¥2,980</span>
          <span className="text-sm text-neutral-500 line-through">¥3,980</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">カートに追加</Button>
      </CardFooter>
    </Card>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <Card key={i} className="w-full">
          <CardHeader>
            <CardTitle>カード {i}</CardTitle>
            <CardDescription>カード {i} の説明文です。</CardDescription>
          </CardHeader>
          <CardContent>
            <p>カード {i} のコンテンツがここに表示されます。</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              詳細
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  ),
};