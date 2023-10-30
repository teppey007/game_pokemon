
    let card = 1;// 場にあるトランプのカード番号
    
    let Hi_L = 0;// Low(0) と High(1) どっちを選んだか仮の数字（実際にはクリックで決める）
    let Result = "●●を選んで、あなたの●●";//勝ち負けの結果
    let cardname_before = "";
    let cardname_after = "";
  
  function High_Low(Hi_L) {
       
    document.getElementById("Card_img_Before").src="img/" + "s_" + card + ".jpeg";
    console.log(Card_img_Before);

   
    let trump = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,]; // ハイアンドローをするカード番号
    let trump_n = Math.floor( Math.random() * 13) +1 ;// ランダムで数字を決める
  
  
    if (card < trump[trump_n]) {//賭けカードが、伏せカードより大きい場合
      if (Hi_L === 0){
         Result = "<br />LOWを選んで、あなたの<span style='background:blue;'><span style='color:white;'>『 負け 』</span></span>";
         document.getElementById('btn_audio1').currentTime = 0; //連続クリックに対応
         document.getElementById('btn_audio1').play(); //クリックしたら音を再生
      }
      if (Hi_L === 1){
         Result = "<br />HIGHを選んで、あなたの<span style='background:red;'><span style='color:white;'>【 勝ち 】</span></span>";
         document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
         document.getElementById('btn_audio').play(); //クリックしたら音を再生
      }
    }
  
    else if (card > trump[trump_n]) {//賭けカードが、伏せカードより小さい場合
      if (Hi_L === 0){
         Result = "<br />LOWを選んで、あなたの<span style='background:red;'><span style='color:white;'>【 勝ち 】</span></span>";
         document.getElementById('btn_audio').currentTime = 0; //連続クリックに対応
         document.getElementById('btn_audio').play(); //クリックしたら音を再生
      }
      if (Hi_L === 1){
         Result = "<br />HIGHを選んで、あなたの<span style='background:blue;'><span style='color:white;'>『 負け 』</span></span>";
         document.getElementById('btn_audio1').currentTime = 0; //連続クリックに対応
         document.getElementById('btn_audio1').play(); //クリックしたら音を再生
      }
    }
  
    else {
      Result = "<br />＜引き分け！！＞";
      document.getElementById('btn_audio2').currentTime = 0; //連続クリックに対応
      document.getElementById('btn_audio2').play(); //クリックしたら音を再生
    }
  
    document.getElementById("Card_img_After").src="img/" + "s_" + trump_n + ".jpeg";
  
     // 左のカードの番号の名前を変数に入れる
    if (card === 1) {
      cardname_before = "「ピカチュー」HP40";
    }
       
    else if (card === 2) {
      cardname_before = "「ニャオハ」HP60";
    }

    else if (card === 3) {
      cardname_before = "「リザードン」HP120";
    }

    else if (card === 4) {
      cardname_before = "「ムゲンダイナ」HP170";
    }

    else if (card === 5) {
      cardname_before = "「イーユイ」HP190";
    }

    else if (card === 6) {
      cardname_before = "「ゲンガーＶ」HP210";
    }

    else if (card === 7) {
      cardname_before = "「ルギアＶ」HP220";
    }

    else if (card === 8) {
      cardname_before = "「ミュウツー」HP220";
    }

    else if (card === 9) {
      cardname_before = "「ザシアン」HP270";
    }

    else if (card === 10) {
      cardname_before = "「カイリュー」HP280";
    }

    else if (card === 11) {
      cardname_before = "「ゲンガーVMAX」HP320";
    }

    else if (card === 12) {
      cardname_before = "「リザードンVMAX」HP330";
    }

    else if (card === 13) {
      cardname_before = "「ラウドボーン」HP340";
    }

    else  {
      cardname_before = "ピチュー";
    }

    console.log(card);

    // 右のカードの乱数の名前を変数に入れる
    if (trump_n === 1) {
      cardname_after = "「ピカチュー」HP40";
    }
       
    else if (trump_n === 2) {
      cardname_after = "「ニャオハ」HP60";
    }

    else if (trump_n === 3) {
      cardname_after = "「リザードン」HP120";
    }

    else if (trump_n === 4) {
      cardname_after = "「ムゲンダイナ」HP170";
    }

    else if (trump_n === 5) {
      cardname_after = "「イーユイ」HP190";
    }

    else if (trump_n === 6) {
      cardname_after = "「ゲンガーＶ」HP210";
    }

    else if (trump_n === 7) {
      cardname_after = "「ルギアＶ」HP220";
    }

    else if (trump_n === 8) {
      cardname_after = "「ミュウツー」HP220";
    }

    else if (trump_n === 9) {
      cardname_after = "「ザシアン」HP270";
    }

    else if (trump_n === 10) {
      cardname_after = "「カイリュー」HP280";
    }

    else if (trump_n === 11) {
      cardname_after = "「ゲンガーVMAX」HP320";
    }

    else if (trump_n === 12) {
      cardname_after = "「リザードンVMAX」HP330";
    }

    else if (trump_n === 13) {
      cardname_after = "「ラウドボーン」HP340";
    }

    else  {
      cardname_after = "ピチュー";
    }

    console.log(trump_n);




    document.getElementById("After").innerHTML ="めくったポケモンカードは" + cardname_after + Result + "<br />次のポケモンカードが今の数字より高いか低いか考えてみよう！";
    document.getElementById("Before").innerHTML ="場にあるポケモンカードは" + cardname_before ;
  
    card = trump[trump_n];//場にあるカードを新しく引いたカードに変える

    

}   



$(function () {
  setInterval(()=>{
      $('#ball').css('left',Math.random()*450 +'px');
      $('#ball').css('top',Math.random()* 450 +'px');
  },2000)    

  let point = 0;

  $('#ball').on('click',()=>{
      point += 100;
      $('#point').html(point);
      document.getElementById('btn_audio3').currentTime = 0; //連続クリックに対応
      document.getElementById('btn_audio3').play(); //クリックしたら音を再生


  })    



})
