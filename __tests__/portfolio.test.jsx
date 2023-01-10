import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import Portfolio from "../pages/portfolio";
import FacebookReport from "../pages/portfolio/facebook-report";
import LineReport from "../pages/portfolio/line-report";
import TikTokReport from "../pages/portfolio/tiktok-report";
import GoogleAndYouTubeReport from "../pages/portfolio/google-and-youtube-report";

describe('媒体ごとのレポート詳細ページへの遷移テスト', () => {
  it('Facebook広告レポートの画像部分クリックでFacebook広告レポート詳細ページへの遷移が正常に行われる', () => {
    render(<Portfolio />);
    userEvent.click(screen.getByRole('img', {name: "facebook-report"}));
    render(<FacebookReport />);
    expect(screen.getAllByText(/Facebook広告レポート/));
  });
  it('Facebook広告レポートのテキスト部分クリックでFacebook広告レポート詳細への遷移が正常に行われる', () => {
    render(<Portfolio />);
    userEvent.click(screen.getByText('Facebook広告レポート'));
    render(<FacebookReport />);
    expect(screen.getAllByText(/Facebook広告レポート/));
  });
  it('LINE広告レポートの画像部分クリックでLINE広告レポート詳細ページへの遷移が正常に行われる', () => {
    render(<Portfolio />);
    userEvent.click(screen.getByRole('img', {name: "line-report"}));
    render(<LineReport />);
    expect(screen.getAllByText(/LINE広告レポート/));
  });
  it('LINE広告レポートのテキスト部分クリックでLINE広告レポート詳細ページへの遷移が正常に行われる', () => {
    render(<Portfolio />);
    userEvent.click(screen.getByText('LINE広告レポート'));
    render(<LineReport />);
    expect(screen.getAllByText(/LINE広告レポート/));
  });
  it('TikTok広告レポートの画像部分クリックでTikTok広告レポート詳細ページへの遷移が正常に行われる', () => {
    render(<Portfolio />);
    userEvent.click(screen.getByRole('img', {name: "tiktok-report"}));
    render(<TikTokReport />);
    expect(screen.getAllByText(/TikTok広告レポート/));
  });
  it('TikTok広告レポートのテキスト部分クリックでTikTok広告レポート詳細ページへの遷移が正常に行われる', () => {
    render(<Portfolio />);
    userEvent.click(screen.getByText('TikTok広告レポート'));
    render(<TikTokReport />);
    expect(screen.getAllByText(/TikTok広告レポート/));
  });
  it('Google&YouTube広告レポートの画像部分クリックでGoogle&YouTube広告レポート詳細ページへの遷移が正常に行われる', () => {
    render(<Portfolio />);
    userEvent.click(screen.getByRole('img', {name: "google-and-youtube-report"}));
    render(<GoogleAndYouTubeReport />);
    expect(screen.getAllByText(/Google&YouTube広告レポート/));
  });
  it('Google&YouTube広告レポートのテキスト部分クリックでGoogle&YouTube広告レポート詳細ページへの遷移が正常に行われる', () => {
    render(<Portfolio />);
    userEvent.click(screen.getByText('Google&YouTube広告レポート'));
    render(<GoogleAndYouTubeReport />);
    expect(screen.getAllByText(/Google&YouTube広告レポート/));
  });
});
