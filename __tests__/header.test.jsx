import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import Layout from "../components/layout";
import Pricing from "../pages/pricing";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";
import Trial from "../pages/trial";

describe("ヘッダーリンクのページ遷移テスト", () => {
  it("料金プランページへ遷移する", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("header-pricing-link"));
    expect(render(<Pricing />));
    expect(screen.getByRole('img', {name: "youtube-pricing"}));
    expect(screen.getByRole('img', {name: "listing-and-display-pricing"}));
  });
  it("料金プランページへ遷移する_SP", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("header-pricing-link-sp"));
    expect(render(<Pricing />));
    expect(screen.getByRole('img', {name: "youtube-pricing"}));
    expect(screen.getByRole('img', {name: "listing-and-display-pricing"}));
  });
  it("レポートギャラリーページへ遷移する", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("header-portfolio-link"));
    expect(render(<Portfolio />));
    expect(screen.getByRole('img', {name: "facebook-report"}));
    expect(screen.getByRole('img', {name: "line-report"}));
    expect(screen.getByRole('img', {name: "tiktok-report"}));
    expect(screen.getByRole('img', {name: "google-and-youtube-report"}));
  });
  it("レポートギャラリーページへ遷移する_SP", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("header-portfolio-link-sp"));
    expect(render(<Portfolio />));
    expect(screen.getByRole('img', {name: "facebook-report"}));
    expect(screen.getByRole('img', {name: "line-report"}));
    expect(screen.getByRole('img', {name: "tiktok-report"}));
    expect(screen.getByRole('img', {name: "google-and-youtube-report"}));
  });
  it("お問い合わせページへ遷移する", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("header-contact-link"));
    expect(render(<Contact />));
    expect(screen.getByRole('textbox', {name: "お名前"}));
    expect(screen.getByRole('textbox', {name: "会社名"}));
    expect(screen.getByRole('textbox', {name: "メールアドレス"}));
    expect(screen.getByRole('textbox', {name: "電話番号"}));
    expect(screen.getByRole('textbox', {name: "お問い合わせの詳細"}));
    expect(screen.getByRole('button', {name: "送信する"}));
  });
  it("お問い合わせページへ遷移する_SP", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("header-contact-link-sp"));
    expect(render(<Contact />));
    expect(screen.getByRole('textbox', {name: "お名前"}));
    expect(screen.getByRole('textbox', {name: "会社名"}));
    expect(screen.getByRole('textbox', {name: "メールアドレス"}));
    expect(screen.getByRole('textbox', {name: "電話番号"}));
    expect(screen.getByRole('textbox', {name: "お問い合わせの詳細"}));
    expect(screen.getByRole('button', {name: "送信する"}));
  });
  it("無料トライアルページへ遷移する", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("header-trial-link"));
    expect(render(<Trial />));
    expect(screen.getByRole('textbox', {name: "お名前"}));
    expect(screen.getByRole('textbox', {name: "会社名"}));
    expect(screen.getByRole('textbox', {name: "メールアドレス"}));
    expect(screen.getByRole('textbox', {name: "電話番号"}));
    expect(screen.getByText('利用規約に同意する*')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', {name: "利用規約に同意する", checked: false}));
    expect(screen.getByRole('button', {name: "今すぐ無料で始める"}));
  });
  it("無料トライアルページへ遷移する_SP", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("header-trial-link-sp"));
    expect(render(<Trial />));
    expect(screen.getByRole('textbox', {name: "お名前"}));
    expect(screen.getByRole('textbox', {name: "会社名"}));
    expect(screen.getByRole('textbox', {name: "メールアドレス"}));
    expect(screen.getByRole('textbox', {name: "電話番号"}));
    expect(screen.getByText('利用規約に同意する*')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', {name: "利用規約に同意する", checked: false}));
    expect(screen.getByRole('button', {name: "今すぐ無料で始める"}));
  });
  it("ブログは別タブで開く外部ページである", () => {
    render(<Layout />);
    const blogLink = screen.getByTestId("header-blog-link");
    expect(blogLink).toHaveAttribute('href', "https://next-report.jp/");
    expect(blogLink).toHaveAttribute('target', "_blank");
  });
  it("ブログは別タブで開く外部ページである_SP", () => {
    render(<Layout />);
    const blogLink = screen.getByTestId("header-blog-link-sp");
    expect(blogLink).toHaveAttribute('href', "https://next-report.jp/");
    expect(blogLink).toHaveAttribute('target', "_blank");
  });
});
