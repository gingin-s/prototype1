// IFrame Player API の読み込みタグを挿入
const tag = document.createElement('script'); // scriptタグを生成
tag.src = "https://www.youtube.com/iframe_api";  // APIのURLを付与
const firstScriptTag = document.getElementsByTagName('script')[0]; // 生成したタグをセット
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // HTML上に挿入
// 関数onYouTubeIframeAPIReadyでiframeとYoutubeプレイヤーを作成
let player
const youtubeId = gon.youtube_id
window.onYouTubeIframeAPIReady = function() { // APIが読み込まれて準備が整ったら実行
  player = new YT.Player('player', { // YT.Playerオブジェクトを作成
    videoId: youtubeId,
    playerVars: {
      'loop': 0,
    },
    events: {
			'onStateChange': onPlayerStateChange
    }
  });
};


let texts, seekTimes;
var movieTimeCounter, timerId;

//動画の時間に応じてpassageを表示
function onPlayerStateChange(event) { //プレーヤーの状態が変わったら実行
  if ( event.data == YT.PlayerState.PLAYING ) { //動画が再生中であれば実行
    const displayPassage = document.getElementById("display-passage");
    // 一秒ごとに実行
    movieTimeCounter = setInterval(() => {
      const videoTime = Math.floor(player.getCurrentTime());
      const passageNum = seekTimes.indexOf(videoTime);
      //現在の再生時間にpassageが存在する場合
      if ( passageNum != -1) {
        const text = texts[passageNum];
        displayPassage.innerHTML = text;
        //タイマーリセット
        clearTimeout(timerId)
        //5秒後にtextを非表示
        timerId = setTimeout(timer1, 5000);
      };
    }, 1000);
  } else {
    clearInterval(movieTimeCounter);
  }
};
//textを非表示にするタイマー
function timer1() {
  const displayPassage = document.getElementById("display-passage");
  displayPassage.innerHTML = ""
}
//seek_timeのリンクをクリックされたとき、動画をシークする
window.seekPlayer = function(seekTime){
  player.seekTo(seekTime);
};

//passagesを更新
window.reloadPassages = (passages) => {
  seekTimes = passages.map(item => item.seek_time);
  texts = passages.map(item => item.text);
};

function controlPlayer(){
  reloadPassages(gon.passages)
  const btn = document.getElementById("btn");
  btn.addEventListener("click", () => {
    const time = player.getCurrentTime();
    document.getElementById("seek_time").value = (Math.floor(time));
  });  
};

  window.addEventListener("load",controlPlayer);