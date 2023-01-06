import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Index from '../pages/index';

describe('トップページ(index.jsx)のレンダリングテスト', () => {
  it('アクセス解析・広告・SNSなどすべてのレポートに対応 のテキストが表示されていること', () => {
    render(<Index />);
    expect(screen.getByText('アクセス解析・広告・SNSなどすべてのレポートに対応')).toBeInTheDocument();
  })
})