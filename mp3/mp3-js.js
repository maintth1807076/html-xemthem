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
//
//     }
// }
// xhtp.open("GET", MP3_API, true);
// xhtp.send();
span.onclick = function () {
    myModal.style.display = 'none';
    mp3Scr.src = '';
};
