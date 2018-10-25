var celebrationNames = [
    'Ngô Thị Ngọc Ánh',
    'Ngô Thị Mai',
    'Giang Thị Tình',
    'Giang Thị Hạnh',
    'Trần Thị Hương Ly',
    'Đặng Danh Quảng'
];
listName = document.getElementById('list-name');
showMore = document.getElementById('show-more');
showMore.onclick = function () {
    this.classList.add('hidden-tag');
    for (var i = 0; i < celebrationNames.length ; i++) {
        listName.innerHTML += '<li>' + celebrationNames[i] + '</li>';
    }

}
