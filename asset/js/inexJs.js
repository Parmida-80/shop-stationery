document.getElementById('menu').addEventListener('click', function () {
    var leaderList = document.getElementById('leader');
    if (leaderList.style.visibility === 'hidden') {
        leaderList.style.visibility = 'visible';
    } else {
        leaderList.style.visibility = 'hidden';
    }
});

