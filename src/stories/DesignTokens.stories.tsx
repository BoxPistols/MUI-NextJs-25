import type { Meta, StoryObj } from '@storybook/react';
import { designTokens } from '@/lib/utils';

const meta: Meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export const Colors: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">カラーパレット</h2>
        {Object.entries(designTokens.colors).map(([colorName, colorShades]) => (
          <div key={colorName} className="mb-6">
            <h3 className="text-lg font-semibold mb-3 capitalize">{colorName}</h3>
            <div className="grid grid-cols-10 gap-2">
              {Object.entries(colorShades).map(([shade, value]) => (
                <div key={shade} className="text-center">
                  <div
                    className="w-16 h-16 rounded-lg border border-neutral-200 mb-2"
                    style={{ backgroundColor: value }}
                  />
                  <div className="text-xs font-mono">{shade}</div>
                  <div className="text-xs text-neutral-500 font-mono">{value}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const Typography: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">タイポグラフィ</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-3">フォントサイズ</h3>
            {Object.entries(designTokens.typography.fontSizes).map(([size, value]) => (
              <div key={size} className="flex items-center gap-4 mb-2">
                <div className="w-16 text-sm font-mono">{size}</div>
                <div className="w-20 text-sm font-mono text-neutral-500">{value}</div>
                <div style={{ fontSize: value }}>
                  サンプルテキスト Sample Text
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">フォントウェイト</h3>
            {Object.entries(designTokens.typography.fontWeights).map(([weight, value]) => (
              <div key={weight} className="flex items-center gap-4 mb-2">
                <div className="w-20 text-sm font-mono">{weight}</div>
                <div className="w-16 text-sm font-mono text-neutral-500">{value}</div>
                <div style={{ fontWeight: value }}>
                  サンプルテキスト Sample Text
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
};

export const Spacing: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">スペーシング</h2>
        <div className="space-y-4">
          {Object.entries(designTokens.spacing).map(([size, value]) => (
            <div key={size} className="flex items-center gap-4">
              <div className="w-16 text-sm font-mono">{size}</div>
              <div className="w-20 text-sm font-mono text-neutral-500">{value}</div>
              <div
                className="bg-primary-500 h-4"
                style={{ width: value }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const BorderRadius: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">ボーダー半径</h2>
        <div className="grid grid-cols-4 gap-4">
          {Object.entries(designTokens.borderRadius).map(([size, value]) => (
            <div key={size} className="text-center">
              <div
                className="w-16 h-16 bg-primary-500 mx-auto mb-2"
                style={{ borderRadius: value }}
              />
              <div className="text-sm font-mono">{size}</div>
              <div className="text-xs text-neutral-500 font-mono">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const Shadows: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">シャドウ</h2>
        <div className="grid grid-cols-3 gap-6">
          {Object.entries(designTokens.shadows).map(([size, value]) => (
            <div key={size} className="text-center">
              <div
                className="w-24 h-24 bg-white rounded-lg mx-auto mb-2"
                style={{ boxShadow: value }}
              />
              <div className="text-sm font-mono">{size}</div>
              <div className="text-xs text-neutral-500 font-mono break-all">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};