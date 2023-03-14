import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom/extend-expect';
import Layout from "../components/layout";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";
import Trial from "../pages/trial";
import PrivacyPolicy from "../pages/privacy-policy";
import Terms from "../pages/terms";

describe("ヘッダーリンクのページ遷移テスト", () => {
  it("レポートギャラリーページへ遷移する", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("footer-portfolio-link"));
    expect(render(<Portfolio />));
    expect(screen.getByRole('img', {name: "facebook-report"}));
    expect(screen.getByRole('img', {name: "line-report"}));
    expect(screen.getByRole('img', {name: "tiktok-report"}));
    expect(screen.getByRole('img', {name: "google-and-youtube-report"}));
  });
  it("お問い合わせページへ遷移する", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("footer-contact-link"));
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
    userEvent.click(screen.getByTestId("footer-trial-link"));
    expect(render(<Trial />));
    expect(screen.getByRole('textbox', {name: "お名前"}));
    expect(screen.getByRole('textbox', {name: "会社名"}));
    expect(screen.getByRole('textbox', {name: "メールアドレス"}));
    expect(screen.getByRole('textbox', {name: "電話番号"}));
    expect(screen.getByText('利用規約に同意する*')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', {name: "利用規約に同意する", checked: false}));
    expect(screen.getByRole('button', {name: "今すぐ無料で始める"}));
  });
  it("プライバシーポリシーページへ遷移する", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("footer-privacy-policy-link"));
    expect(render(<PrivacyPolicy />));
  });
  it("利用規約ページへ遷移する", () => {
    render(<Layout />);
    userEvent.click(screen.getByTestId("footer-terms-link"));
    expect(render(<Terms />));
  });
  it("ブログは別タブで開く外部ページである", () => {
    render(<Layout />);
    const blogLink = screen.getByTestId("footer-blog-link");
    expect(blogLink).toHaveAttribute('href', "https://next-report.jp/");
    expect(blogLink).toHaveAttribute('target', "_blank");
  });
  it("運営会社は別タブで開く外部ページである", () => {
    render(<Layout />);
    const companyLink = screen.getByTestId("footer-company-link");
    expect(companyLink).toHaveAttribute('href', "https://corp.next-stage.biz/");
    expect(companyLink).toHaveAttribute('target', "_blank");
  });
  it("採用情報は別タブで開く外部ページである", () => {
    render(<Layout />);
    const companyLink = screen.getByTestId("footer-recruit-link");
    expect(companyLink).toHaveAttribute('href', "https://corp.next-stage.biz/recruit/");
    expect(companyLink).toHaveAttribute('target', "_blank");
  });
});
