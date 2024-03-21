
$(document).ready(function () {
    // Toggle sidebar expand class
    $(".toggle-btn").click(function () {
        $("#sidebar").toggleClass("expand");
    });
    // Toggle wrapper toggled class
    $("#menu-toggle").click(function () {
        $("#wrapper").toggleClass("toggled");
    });
});


$(document).ready(function () {
    $(".sidebar-link").click(function (e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        var url = $(this).attr("href");
        $("#page-content-wrapper").load(url);
    });
});


$(document).ready(function () {
    $(".theme-toggle").click(function () {
        toggleLocalStorage();
        toggleRootClass();
    });
    //Hàm lấy thuộc tính và chuyển đổi giá trị
    function toggleRootClass() {
        const current = $("html").attr("data-bs-theme");
        const inverted = current == "dark" ? "light" : "dark";
        $("html").attr("data-bs-theme", inverted);
    }

    function isLight() {
        return localStorage.getItem("light");
    }

    if (isLight()) {
        toggleRootClass();
    }
    //Hàm xác định chế độ sáng tối hiện tại
    function toggleLocalStorage() {
        if (isLight()) {
            localStorage.removeItem("light");
        } else {
            localStorage.setItem("light", "set");
        }
    }
});

// Active sidebar
const sidebarLinks = document.querySelectorAll('.sidebar-link')
sidebarLinks.forEach(link => {
    link.addEventListener('click', function () {
        sidebarLinks.forEach(item => {
            item.parentElement.classList.remove('active')
        })
        this.parentElement.classList.add('active')
    })
})

