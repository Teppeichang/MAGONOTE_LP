import List from "@mui/material/List";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bottom-0 bg-slate-700 w-screen mt-32">
      <div className="lg:flex lg:justify-center">
        <div className="pt-24 px-16 lg:pt-48 lg:mr-24">
          <Image
          src="/images/footer_logo.svg"
          alt="MAGONOTEロゴ"
          width={257}
          height={40}
          quality={90}
          />
        </div>
        <div className="flex flex-col px-24 pt-9 text-center lg:text-left lg:pt-24 lg:px-0">
          <p className="font-mPlus2c text-white text-xl font-semibold tracking-wide lg:tracking-wider">サービス</p>
          <List sx={{ display: "flex", flexDirection: "column" }}>
            <Link href={"/portfolio"}>
              <a className="font-mPlus2c text-white py-2 tracking-wide lg:tracking-wider" data-testid="footer-portfolio-link">レポートギャラリー</a>
            </Link>
            <Link href={"https://next-report.jp/"}>
              <a className="font-mPlus2c text-white py-2 tracking-wide lg:tracking-wider" target="_blank" data-testid="footer-blog-link">ブログ</a>
            </Link>
            <Link href={"/contact"}>
              <a className="font-mPlus2c text-white py-2 tracking-wide lg:tracking-wider" data-testid="footer-contact-link">お問い合わせ</a>
            </Link>
            <Link href={"/trial"}>
              <a className="font-mPlus2c text-white py-2 tracking-wide lg:tracking-wider" data-testid="footer-trial-link">無料トライアル</a>
            </Link>
          </List>
        </div>
        <div className="flex flex-col px-24 pt-9 text-center lg:text-left lg:pt-24">
          <p className="font-mPlus2c text-white text-xl font-semibold tracking-wide lg:tracking-wider">運営会社</p>
          <List sx={{ display: "flex", flexDirection: "column" }}>
            <Link href={"https://corp.next-stage.biz/"}>
              <a className="font-mPlus2c text-white py-2 tracking-wide lg:tracking-wider" target="_blank" data-testid="footer-company-link">
                会社概要(運営会社)
              </a>
            </Link>
            <Link href={"https://corp.next-stage.biz/recruit/"}>
              <a className="font-mPlus2c text-white py-2 tracking-wide lg:tracking-wider" target="_blank" data-testid="footer-recruit-link">
                採用情報
              </a>
            </Link>
            <Link href={"/privacy-policy"}>
              <a className="font-mPlus2c text-white py-2 tracking-wide lg:tracking-wider" data-testid="footer-privacy-policy-link">
                プライバシーポリシー
              </a>
            </Link>
            <Link href={"/terms"}>
              <a className="font-mPlus2c text-white py-2 tracking-wide lg:tracking-wider" data-testid="footer-terms-link">
                利用規約
              </a>
            </Link>
          </List>
        </div>
      </div>
      <div className="pb-6 mt-16">
        <p className="font-mPlus2c text-white text-center tracking-wide lg:tracking-wider">© 2022 Next stage,Inc. All Rights <br className="lg:hidden" /> Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
