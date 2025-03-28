// เมื่อกดปุ่มจะ FullScreen
document.getElementById("fullscreen-btn").addEventListener("click", function () {
    let elem = document.documentElement; // เลือกให้ทั้งหน้าเว็บ Fullscreen

    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // สำหรับ Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // สำหรับ Chrome, Safari และ Opera
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // สำหรับ IE/Edge
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
});