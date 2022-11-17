import Layout from "../components/layout"
import TextField from '@mui/material/TextField';

const Contact = () => {
  return (
    <Layout>
      <div className="mt-40 mx-10">
        <h2>お問い合わせ・デモ予約はこちら</h2>
        <p>こちらのフォームに必要情報のご入力をお願いいたします。担当より1営業日以内にメール、またはお電話にてご連絡させていただきます。（既にご利用中のお客様はサポートへのお問い合わせからご連絡ください）</p>
      </div>
      <form className="flex flex-col m-10">
        <p className="font-semibold">姓(必須)</p>
        <TextField required id="outlined-required" label="姓" sx={{my: 1}}/>
        <p className="font-semibold">名(必須)</p>
        <TextField required id="outlined-required" label="名" sx={{my: 1}}/>
        <p className="font-semibold">会社名(必須)</p>
        <TextField required id="outlined-required" label="会社名" sx={{my: 1}}/>
        <p className="font-semibold">メールアドレス(必須)</p>
        <TextField required id="outlined-required" label="メールアドレス" sx={{my: 1}}/>
        <p className="font-semibold">電話番号(必須)</p>
        <TextField required id="outlined-required" label="電話番号" sx={{my: 1}}/>
        <p className="font-semibold">お問い合わせの詳細</p>
        <p>デモや商談をご希望の方は、候補日程を2,3個ご記載ください。担当より日程調整後、ZOOMのミーティングURL（30分〜最大1時間）をメールにてご送付いたします。</p>
        <TextField id="outlined-multiline-static" label="お問い合わせの詳細" multiline rows={4} defaultValue="Default Value" sx={{my: 1}}/>
      </form>
    </Layout>
  )
}

export default Contact
