１．タイトル：ポケモンカードBattle
URL：https://github.com/teppey007/game_pokemon

２．紹介と使い方

①場に出ているカードとランダムにめくられたカードのどちらが強いかをHigh&Lowを当てるアプリです。

②ランダムに動くモンスターボールを追いかけてクリックすると得点が入るアプリです。

３．工夫した点

①ボタンがクリックされたら、右の画像を左に表示して、右の画像はランダムに画像表示させる
（配列を使って、値を取得し画像ファイル名とリンクして表示する）

②if文で、左右の画像のHPを比較して、選択したHigh&Lowボタンに従い「勝ち」「負け」「引き分け」判断

③ボタンクリックの動作に合わせて、音声ファイルの実行（勝ち負け引き分け）

④ランダムに動くボールにモンスターボール画像を使用し、クリックで得点が入る

４．苦戦した点

①配列と値の取得から、どのように画像ファイルをリンクさせるか、また値からポケモンカードの名前の表示でif文を書きまくったこと

