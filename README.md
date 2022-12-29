# メモ
## ブランチについて

```
main - 本番環境(Product)用
staging - ステージング環境(Staging)用
develop - 実装&ローカル環境動作確認用
```

developで実装→stagingへマージ→staging環境動作確認→mainへマージ

## 使用技術
Next.js(12.3.3)  
Docker(w/ Node.js LTS(*), React 18.2.0)  
Netlify(Product&Staging)
  
(*)ver18.12.1(2022/12/29時点のLTS)