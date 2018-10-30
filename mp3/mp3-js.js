// var MP3_API = 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs';
// var xhtp = new XMLHttpRequest();
// xhtp.onreadystatechange = function () {
//     if(this.readyState == 4 && this.status == 200) {
//         var jsObject =JSON.parse(xhtp.responseText);
//         // var content = '';
//         // for (var i = 0; i < jsObject.items.length; i++) {
//         //     var mp3 = '<div>';
//         //     mp3 += jsObject.items[i].thumbnail;
//         //     mp3 += '</div>';
//         //     content += mp3;
//         // }
//             var mp3Item = '<div>';
//             // mp3Item += jsObject.thumbnail;
//             mp3Item += '<img onclick="doSomething()" src="http://static.amusic.vn/amusic/albums/s2/10/82660/82660.jpg?v=1523961932">';
//             mp3Item += '</div>';
//             document.body.innerHTML = mp3Item;
//     }
// }
// xhtp.open("GET", MP3_API, true);
// xhtp.send();
// var myModal = document.getElementById(myModal);
// var mp3Scr = document.getElementById(mp3Scr);
// var span = document.getElementsByClassName("close")[0];
// document.getElementByIfunction doSomething() {
//     mp3Scr.src = 'https://s1.vocaroo.com/media/download_temp/Vocaroo_s1cqKcLqsxJ5.mp3';
//     myModal.style.display = 'block';
// }
// span.onclick = function () {
//     myModal.style.display = 'none';
//     mp3Scr.src = '';
// };
var mp3Scr = document.getElementById(mp3Scr);
function fun() {
    mp3Src.src = 'https://s1.vocaroo.com/media/download_temp/Vocaroo_s1cqKcLqsxJ5.mp3';
}