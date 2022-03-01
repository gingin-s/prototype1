// function onPlayerStateChange (event) { //プレーヤーの状態が変わったら実行
//   if ( event.data == YT.PlayerState.PLAYING ) { //動画が再生中であれば実行
//     const seekTimes = gon.passages.map(item => item.seek_time);
//     const texts = gon.passages.map(item => item.text);
//     const displayPassage = document.getElementById("display-passage");
//     // 一秒ごとに実行
//     setInterval(() => {
//       const videoTime = Math.floor(player.getCurrentTime());
//       const passageNum = seekTimes.indexOf(videoTime);
//       if ( passageNum != -1) {
//         const text = texts[passageNum];
//         displayPassage.innerHTML = text;
//       };
//     }, 1000);
//   }
// };

// //passageの時間の取得
// function controlPlayer(){
//   const btn = document.getElementById("btn");

//   btn.addEventListener("click", () => {
//     const time = player.getCurrentTime();
//     document.getElementById("seek_time").value = (Math.floor(time));
//   });  
// };

// //passageの時間をクリックしたら動画をシーク
// window.seekPlayer = function (seekTime){
//   // const seekTime = seek.dataset.seconds
//   player.seekTo(seekTime)
// };
