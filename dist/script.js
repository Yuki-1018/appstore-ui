var
  max,
  bingo = [],
  $number = $("#number"),
  $result = $("#result"),
  $sound_play = $("#sound-play"),
  $sound_pause = $("#sound-pause");

// ビンゴマシーンを作成する。
function generateBINGO(){
  max = document.querySelector('#max-num').value;
  for(var i = 1; i <= max; i++) {
    bingo.push(i);
    $number.append($("<li>").text(("0" + i).slice(-2)));
  }
  document.querySelector('#bingo-info').style.display = "none";
  document.querySelector('#bingo-machine').style.display = "block";
  window.alert('最大値'+max+'でビンゴマシーンが生成されました！\nSTARTボタンを押してビンゴを始めてみてください！！\n※音が出るので注意してください。')
};

$(function(){
  var
    status = true,
    roulette,
    random,
    number,
    result;

  $("#button").on("click", function(){
    // ルーレットを回す
    if(status) {
      status = false;
      $(this).text("STOP");
      $sound_play.trigger("play");
      $sound_pause.trigger("pause");
      $sound_pause[0].currentTime = 0;

      roulette = setInterval(function(){
        random = Math.floor(Math.random() * bingo.length);
        number = bingo[random];
        $result.text(number);
      }, 10); // 10ms毎にイベント(数字を回す)を起動。
    // ルーレットを止める
    } else {
      status = true;
      $(this).text("START");
      $sound_pause.trigger("play");
      $sound_play.trigger("pause");
      $sound_play[0].currentTime = 0;

      clearInterval(roulette); // 起動していたイベントを終了

      result = bingo[random];
      bingo.splice(random, 1); // 配列から削除

      $result.text(result);
      $number.find("li").eq(parseInt(result, 10) - 1).addClass("hit");
    }
  });
});