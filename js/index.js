const callApi = (url, method, data) => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: method,
            data: JSON.stringify(data),
            contentType: "application/json",
            success: function (response) {
                resolve(response.result);
            },
            error: function (err) {
                reject(err.responseJSON.message);
            },
        });
    });
};

// $("#av").click(() => {
//     callApi("http://localhost:3030/users/login", "POST", {
//         email: "datminiphi@gmail.com",
//         password: "5rZd6IQ8eG",
//     })
//         .then(alert)
//         .catch(alert);
// });

//Toggle sidebar

$(document).ready(function () {
    $(".sidebar-link").click(function (e) {
        e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
        var url = $(this).attr("href");
        $("#page-content").load(url);
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
