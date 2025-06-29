import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const meta: Meta = {
  title: 'Layout/Grid System',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const GridSystem: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">12カラムグリッドシステム</h2>
        <div className="grid grid-cols-12 gap-4 mb-8">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="bg-primary-100 p-4 text-center rounded">
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">レスポンシブレイアウト例</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Array.from({ length: 8 }, (_, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>カード {i + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>レスポンシブグリッドの例です。</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const FlexboxLayouts: Story = {
  render: () => (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Flexboxレイアウト</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">水平配置</h3>
            <div className="flex gap-4 p-4 bg-neutral-100 rounded">
              <div className="bg-primary-500 text-white p-4 rounded">アイテム1</div>
              <div className="bg-secondary-500 text-white p-4 rounded">アイテム2</div>
              <div className="bg-success-500 text-white p-4 rounded">アイテム3</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">中央配置</h3>
            <div className="flex items-center justify-center h-32 bg-neutral-100 rounded">
              <div className="bg-primary-500 text-white p-4 rounded">中央配置</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">スペース配分</h3>
            <div className="flex justify-between items-center p-4 bg-neutral-100 rounded">
              <div className="bg-primary-500 text-white p-4 rounded">左</div>
              <div className="bg-secondary-500 text-white p-4 rounded">中央</div>
              <div className="bg-success-500 text-white p-4 rounded">右</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const ContainerSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">コンテナサイズ</h2>
        
        <div className="space-y-4">
          <div className="max-w-sm mx-auto bg-primary-100 p-4 rounded text-center">
            max-w-sm (384px)
          </div>
          <div className="max-w-md mx-auto bg-secondary-100 p-4 rounded text-center">
            max-w-md (448px)
          </div>
          <div className="max-w-lg mx-auto bg-success-100 p-4 rounded text-center">
            max-w-lg (512px)
          </div>
          <div className="max-w-xl mx-auto bg-warning-100 p-4 rounded text-center">
            max-w-xl (576px)
          </div>
          <div className="max-w-2xl mx-auto bg-error-100 p-4 rounded text-center">
            max-w-2xl (672px)
          </div>
          <div className="max-w-4xl mx-auto bg-info-100 p-4 rounded text-center">
            max-w-4xl (896px)
          </div>
        </div>
      </div>
    </div>
  ),
};

export const SpacingSystem: Story = {
  render: () => (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">スペーシングシステム</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">マージン例</h3>
          <div className="bg-neutral-100 p-4 rounded">
            <div className="bg-primary-500 text-white p-2 rounded mb-2">m-2</div>
            <div className="bg-primary-500 text-white p-2 rounded mb-4">m-4</div>
            <div className="bg-primary-500 text-white p-2 rounded mb-8">m-8</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">パディング例</h3>
          <div className="space-y-2">
            <div className="bg-primary-500 text-white p-2 rounded">p-2</div>
            <div className="bg-secondary-500 text-white p-4 rounded">p-4</div>
            <div className="bg-success-500 text-white p-8 rounded">p-8</div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">ギャップ例</h3>
          <div className="flex gap-2 mb-2">
            <div className="bg-primary-500 text-white p-2 rounded flex-1">gap-2</div>
            <div className="bg-primary-500 text-white p-2 rounded flex-1">gap-2</div>
          </div>
          <div className="flex gap-4 mb-2">
            <div className="bg-secondary-500 text-white p-2 rounded flex-1">gap-4</div>
            <div className="bg-secondary-500 text-white p-2 rounded flex-1">gap-4</div>
          </div>
          <div className="flex gap-8">
            <div className="bg-success-500 text-white p-2 rounded flex-1">gap-8</div>
            <div className="bg-success-500 text-white p-2 rounded flex-1">gap-8</div>
          </div>
        </div>
      </div>
    </div>
  ),
};