const LineReport = () => {
  return (
    <div>
      <h2>LINE広告レポートの概要</h2>
      <p>LINE広告レポートをルッカースタジオ（旧Googleデータポータル）で自動化。LINE広告APIを使って自動でデータ更新。</p>
      <ul className="list-disc list-inside">
        <li>広告クリエイティブレポート付き</li>
        <li>広告代理店向けの手数料設定</li>
      </ul>
      <p>デモレポートを見る</p>
      <h2>LINE広告レポートの基本情報</h2>
      <ul className="list-disc list-inside">
        <li>データソース：LINE広告</li>
        <li>出力先：ルッカースタジオ（旧Googleデータポータル）</li>
        <li>更新頻度：日次</li>
        <li>自動更新タイミング：深夜0時~午前6の間に前日までのデータを更新</li>
      </ul>
      <h2>LINE広告レポートの導入の流れ</h2>
      <ul className="list-disc list-inside">
        <li>お申し込み（お客様）</li>
        <li>権限付与とフォーム連絡（お客様）</li>
        <li>レポートの作成と共有（MAGONOTE）【通常1営業日で完成】</li>
        <li>必要に応じてレポートのカスタマイズ（お客様）</li>
      </ul>
      <h2>LINE広告レポートに含まれるレポート一覧</h2>
      <ul className="list-disc list-inside">
        <li>日別レポート</li>
        <li>週別レポート</li>
        <li>月別レポート</li>
        <li>キャンペーンレポート</li>
        <li>広告グループレポート</li>
        <li>クリエイティブレポート</li>
        <li>広告ごとの累計フリークエンシーレポート</li>
      </ul>
      <h2>LINE広告レポートに含まれるディメンションと指標</h2>
      <p>LINE広告の管理画面で使えるほぼすべての項目が利用可能です。詳しくは無料トライアルの実際のレポートでご確認ください。また、項目の不足があれば追加も可能ですのでお問合せください。</p>
    </div>
  )
}

export default LineReport
