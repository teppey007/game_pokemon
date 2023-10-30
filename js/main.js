
    let card = 1;// 場にあるトランプのカード番号
    
    let Hi_L = 0;// Low(0) と High(1) どっちを選んだか仮の数字（実際にはクリックで決める）
    let Result = "●●を選んで、あなたの●●";//勝ち負けの結果
  
  
  function High_Low(Hi_L) {
  
    document.getElementById("Card_img_Before").src="img/" + "s_" + card + ".jpeg";
    console.log(Card_img_Before);
    let trump = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,]; // ハイアンドローをするカード番号
    let trump_n = Math.floor( Math.random() * 13) +1 ;// ランダムで数字を決める
  
  
    if (card < trump[trump_n]) {//賭けカードが、伏せカードより大きい場合
      if (Hi_L === 0){ Result = "　LOWを選んで、あなたの<span style='background:blue;'><span style='color:white;'>『 負け 』</span></span>";}
      if (Hi_L === 1){ Result = "　HIGHを選んで、あなたの<span style='background:red;'><span style='color:white;'>【 勝ち 】</span></span>";}
    }
  
    else if (card > trump[trump_n]) {//賭けカードが、伏せカードより小さい場合
      if (Hi_L === 0){ Result = "　LOWを選んで、あなたの<span style='background:red;'><span style='color:white;'>【 勝ち 】</span></span>";}
      if (Hi_L === 1){ Result = "　HIGHを選んで、あなたの<span style='background:blue;'><span style='color:white;'>『 負け 』</span></span>";}
    }
  
    else {Result = "　＜引き分け！！＞";}
  
    document.getElementById("Card_img_After").src="img/" + "s_" + trump_n + ".jpeg";
  
    document.getElementById("After").innerHTML ="めくったポケモンカードは" + trump[trump_n] + Result + "<br />次のポケモンカードが今の数字より高いか低いか考えてみよう！";
    document.getElementById("Before").innerHTML ="場にあるポケモンカードは" + card ;
  
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
  })    



})
