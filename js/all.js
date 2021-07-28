$(document).ready(function() {
    $('.burgerBtn').on('click', function(e) {
        // 用 on 監聽 .burgar_btn 的點擊功能
        e.preventDefault();
        // 點擊 burgar_btn 時，讓原本的 a 連結效果無效
        $('body').toggleClass('menu-show');
        // 讓瀏覽器知道有點擊 .burgar_btn 的時候，會有收合功能，並在 body 產生一個新的 Class 名稱 burgar_btn-show
    });
});