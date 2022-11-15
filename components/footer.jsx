import List from "@mui/material/List";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="absolute inset-x-0 bottom-0 bg-slate-200">
      <div>
        <h1>MAGONOTE</h1>
      </div>
      <div>
        <h2>サービス</h2>
        <List>
          <Link href={"/pricing"}>料金プラン</Link>
          <Link href={"/portfolio"}>レポートギャラリー</Link>
          <Link href={"/contact"}>お問い合わせ</Link>
          <Link href={"/trial"}>無料トライアル</Link>
        </List>
      </div>
      <div>
        <h2>運営会社</h2>
        <List>
          <Link href={"https://next-stage.biz/"}>会社概要(運営会社)</Link>
          <Link href={"/portfolio"}>採用情報</Link>
          <Link href={"/contact"}>公式SNS</Link>
          <Link href={"/trial"}>プライバシーポリシー</Link>
          <Link href={"/trial"}>利用規約</Link>
        </List>
      </div>
    </footer>
  );
};

export default Footer;
