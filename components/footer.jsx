import List from "@mui/material/List";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bottom-0 bg-slate-700 w-screen">
      <div className="lg:flex justify-center">
        <div className="pt-48 mr-96">
          <Image
          src="/images/footer_logo_wh.svg"
          alt="MAGONOTEロゴ"
          width={257}
          height={40}
          quality={90}
          />
        </div>
        <div className="flex flex-col pt-24">
          <p className="text-white text-xl font-semibold">サービス</p>
          <List sx={{ display: "flex", flexDirection: "column" }}>
            <Link href={"/pricing"}>
              <a className="text-white py-2" data-testid="footer-pricing-link">料金プラン</a>
            </Link>
            <Link href={"/portfolio"}>
              <a className="text-white py-2" data-testid="footer-portfolio-link">レポートギャラリー</a>
            </Link>
            <Link href={"https://next-report.jp/"}>
              <a className="text-white py-2" target="_blank" data-testid="footer-blog-link">ブログ</a>
            </Link>
            <Link href={"/contact"}>
              <a className="text-white py-2" data-testid="footer-contact-link">お問い合わせ</a>
            </Link>
            <Link href={"/trial"}>
              <a className="text-white py-2" data-testid="footer-trial-link">無料トライアル</a>
            </Link>
          </List>
        </div>
        <div className="flex flex-col ml-20 pt-24">
          <h2 className="text-white text-xl font-semibold">運営会社</h2>
          <List sx={{ display: "flex", flexDirection: "column" }}>
            <Link href={"https://corp.next-stage.biz/"}>
              <a className="text-white py-2" target="_blank" data-testid="footer-company-link">
                会社概要(運営会社)
              </a>
            </Link>
            <Link href={"https://corp.next-stage.biz/recruit/"}>
              <a className="text-white py-2" target="_blank" data-testid="footer-recruit-link">
                採用情報
              </a>
            </Link>
            <Link href={"/privacy-policy"}>
              <a className="text-white py-2" data-testid="footer-privacy-policy-link">
                プライバシーポリシー
              </a>
            </Link>
            <Link href={"/terms"}>
              <a className="text-white py-2" data-testid="footer-terms-link">
                利用規約
              </a>
            </Link>
          </List>
        </div>
      </div>
      <div className="pb-6 mt-16">
        <p className="text-white text-center">© 2022 Next stage,Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
