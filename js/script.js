const callApi = (url, method, data) =>
    new Promise((resolve, reject) => {
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

//Theme
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


var ctx = document.getElementById('myChart').getContext('2d');
// Khởi tạo dữ liệu cho biểu đồ (Ví dụ: biểu đồ cột)
var data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'My First Dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [65, 59, 80, 81, 56, 55, 40]
    }]
};

// Khởi tạo và vẽ biểu đồ
var myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
