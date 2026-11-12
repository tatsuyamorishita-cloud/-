# トップページ デザイン案（モックアップ）

森下工務店 新ホームページのトップページを、静的な HTML / CSS / JavaScript で作ったデザイン案です。
**画像・動画・文章・数値はすべて仮**です。グレーの色面は「ここに写真が入る」という目印です。

## 完成イメージ（スクリーンショット）

- PC：[screenshots/pc-full.png](screenshots/pc-full.png)
- スマホ：[screenshots/sp-full.png](screenshots/sp-full.png)

## 見方

1. GitHub の「Code」→「Download ZIP」でダウンロードして展開する
2. `mockup/index.html` をダブルクリックしてブラウザで開く
3. スマホ表示は、ブラウザの幅を狭めるか、スマホでファイルを開くと確認できる

## ページの流れ（上から順に「興味 → 信用 → 行動」へ導く）

| 順 | セクション | 役割 | HPの目的との対応 |
|---|---|---|---|
| ① | フルスクリーン映像＋メッセージ | 第一印象でブランドを伝える | ①ブランド力 |
| ② | お知らせ（最新3件） | 「動いている会社」だと伝える | ①・④ |
| ③ | 私たちについて | 想いと体制（設計＋施工）を伝える | ①ブランド力 |
| ④ | 施工実績（ジャンル絞り込み） | 住宅／工場・倉庫／公共施設／店舗・事務所／リフォームで切替 | ①ポートフォリオ |
| ⑤ | 数字で見る森下工務店 | 創業年数・棟数・有資格者数で信用を裏付け | ①・②問い合わせ |
| ⑥ | 事業内容（3本柱） | 何を頼める会社かを整理 | ②問い合わせ |
| ⑦ | Instagram | 現場の日常を見せ、SNSへ誘導 | ④SNS連携 |
| ⑧ | 採用情報 | 写真＋メッセージで応募を後押し | ⑤リクルート |
| ⑨ | お問い合わせ | メール／電話／見学会予約の3つの入口 | ②問い合わせ |
| — | フッター | 施主・協力業者・社員向けページ（ログイン制）の入口 | ③省力化・社内教育 |

スマホでは、ファーストビューを過ぎると画面下に「お問い合わせ・ご相談」ボタンが常に表示されます。

## デザインの考え方

- **色**：生成り（背景）・墨（文字）・木の色（アクセント）・深緑（ボタン）の4色に絞り、建築写真を主役にする。色は `css/style.css` 冒頭の `:root` で一括変更できる。
- **文字**：見出しは明朝（Noto Serif JP）、本文はゴシック（Noto Sans JP）。
- **動き**：スクロールに合わせて要素がふわっと現れ、次のセクションへ自然に目線を送る。端末で「視差効果を減らす」設定をしている人には動きを止める。

## 本番化で差し替えるもの（素材準備リスト）

- [ ] ファーストビュー動画：mp4、無音、15〜30秒程度（ドローン空撮・現場・竣工シーン）＋代わりに表示する静止画1枚
- [ ] 施工実績写真：各ジャンル最低3件、1件につき外観・内観の横長写真
- [ ] 代表または職人の写真（縦長）、社員の集合写真・働く姿
- [ ] 数値の実数（創業年数・累計棟数・一級建築士数・職人数）
- [ ] 会社情報（住所・電話・建設業許可番号・建築士事務所登録番号）
- [ ] キャッチコピーの確定（案：「この街に、長く愛される建築を。」）

この構成は特定のテーマに依存しません。有料テーマを選んだ後、同じ順番でブロックを組めば再現できます。

## 根拠資料

- 自動再生する動画は無音（muted）が条件：Chrome の自動再生ポリシー https://developer.chrome.com/blog/autoplay
- 動画の属性（autoplay / muted / loop / playsinline / poster）：MDN `<video>` https://developer.mozilla.org/ja/docs/Web/HTML/Element/video
- 動きを減らす設定への配慮：MDN `prefers-reduced-motion` https://developer.mozilla.org/ja/docs/Web/CSS/@media/prefers-reduced-motion
- 動きの基準（WCAG 2.2 達成基準 2.3.3）：https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
- スクロール表示の仕組み：MDN Intersection Observer API https://developer.mozilla.org/ja/docs/Web/API/Intersection_Observer_API
- フォント：Google Fonts Noto Sans JP https://fonts.google.com/noto/specimen/Noto+Sans+JP ／ Noto Serif JP https://fonts.google.com/noto/specimen/Noto+Serif+JP
