//Toggle sidebar

$(document).ready(function () {
    $(".sidebar-link").click(function (e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        var url = $(this).attr("href");
        $("#page-content").load(url);
    });
    $(".logoutBtn").click(function () {
        window.location.href = "/pages/Auth/Login.html";
    });
    $(window).resize(function () {
        const sidebar = $("#sidebar");
        if ($(window).width() < 768) {
            // 768 là kích thước cho màn hình md
            sidebar.addClass("hide");
        } else {
            sidebar.removeClass("hide");
        }
    });
});

const allSideMenu = $("#sidebar .side-menu.top li a");

allSideMenu.each(function () {
    const li = $(this).parent();

    $(this).on("click", function () {
        allSideMenu.each(function () {
            $(this).parent().removeClass("active");
        });
        li.addClass("active");
    });
});

// TOGGLE SIDEBAR
const menuBar = $("#sidebar .brand .fa.fa-bars");
const sidebar = $("#sidebar");

menuBar.on("click", function () {
    sidebar.toggleClass("hide");
});

const switchMode = $("#switch-mode");

switchMode.on("change", function () {
    if ($(this).is(":checked")) {
        $("body").addClass("dark");
    } else {
        $("body").removeClass("dark");
    }
});
