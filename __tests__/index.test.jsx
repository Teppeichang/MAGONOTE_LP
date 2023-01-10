import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import Index from '../pages/index';
import Trial from "../pages/trial";
import Portfolio from "../pages/portfolio";

describe('Indexに配置したリンク付きボタンのページ遷移テスト', () => {
  it('「今すぐ無料で始める」「無料で始める」ボタンのクリックで無料トライアルページへの遷移が正常に行われる', () => {
    render(<Index />)
    const trialLinkList = screen.getAllByText(/無料で始める/);
    trialLinkList.forEach( (link) => {
      userEvent.click(link)
      expect(render(<Trial />))
    });
  });
  it('「すべてのレポートを見る」ボタンのクリックでレポートギャラリーページへの遷移が正常に行われる', () => {
    render(<Index />)
    const portfolioLink = screen.getByText("すべてのレポートを見る");
    userEvent.click(portfolioLink)
    expect(render(<Portfolio />))
  });
})