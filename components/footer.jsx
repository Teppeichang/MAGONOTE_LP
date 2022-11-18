import List from "@mui/material/List";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bottom-0 bg-slate-200">
      <div className="lg:flex justify-center">
        <div>
          <h1 className="py-10 px-40">MAGONOTE</h1>
        </div>
        <div className="flex flex-col py-10 px-10">
          <h2 className="text-xl font-semibold">サービス</h2>
          <List sx={{ display: "flex", flexDirection: "column" }}>
            <Link href={"/pricing"}>
              <a className="text-black py-2">料金プラン</a>
            </Link>
            <Link href={"/portfolio"}>
              <a className="text-black py-2">レポートギャラリー</a>
            </Link>
            <Link href={"https://next-report.jp/"}>
              <a className="text-black py-2">ブログ</a>
            </Link>
            <Link href={"/contact"}>
              <a className="text-black py-2">お問い合わせ</a>
            </Link>
            <Link href={"/trial"}>
              <a className="text-black py-2">無料トライアル</a>
            </Link>
          </List>
        </div>
        <div className="flex flex-col py-10 px-10">
          <h2 className="text-xl font-semibold">運営会社</h2>
          <List sx={{ display: "flex", flexDirection: "column" }}>
            <Link href={"https://next-stage.biz/"}>
              <a href="" className="text-black py-2">
                会社概要(運営会社)
              </a>
            </Link>
            <Link href={"https://corp.next-stage.biz/recruit/"}>
              <a href="" className="text-black py-2">
                採用情報
              </a>
            </Link>
            <Link href={"/privacy-policy"}>
              <a className="text-black py-2">
                プライバシーポリシー
              </a>
            </Link>
            <Link href={"/terms"}>
              <a className="text-black py-2">
                利用規約
              </a>
            </Link>
          </List>
        </div>
      </div>
      <div className="p-5 mx-5 border-solid border-t border-black">
        <p className="text-center">© 2022 Next stage,Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
