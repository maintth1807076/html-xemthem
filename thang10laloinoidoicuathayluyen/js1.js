var arrayTubes = new Array(
    {
        id: 'UCXao7aTDQM',
        title: 'Tháng Tư Là Lời Nói Dối Của Em',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'dns2WLu8Su8',
        title: 'Người Tình Mùa Đông',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'XyjhXzsVdiI',
        title: 'Tình Thôi Xót Xa',
        author: 'Hà Anh Tuấn'
    },
    {
        id: 'nrpjNgZCdlM',
        title: 'Tái Bút Anh Yêu Em',
        author: 'Hà Anh Tuấn'
    }
);

var myTube = document.getElementById('myTubes');
if (myTube != null || myTube.length > 0) {
    for (var i = 0; i < arrayTubes.length; i++) {
        var itemTube = '<div class="tube-item">';
        itemTube += '<iframe width="660" height="355" src="https://www.youtube.com/embed/' + arrayTubes[i].id + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
        itemTube += '<h3>Bài hát: ' + arrayTubes[i].title + ' - Ca sĩ: ' + arrayTubes[i].author + '</h3>';
        itemTube += '</div>';
        myTube.innerHTML += itemTube;
    }
}



