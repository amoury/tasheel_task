// Dashboard Chart 
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
            label: "Invoices Generated",
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'transparent',
            data: [50, 85, 125, 110, 75, 95, 145],
        }]
    },

    // Configuration options go here
    options: {}
});

$(document).ready(function() {
    $('.delete-button').on('click', function(e) {
        e.preventDefault();
        $( this ).parent().fadeOut( "slow", function() {
            this.remove();
        });
    });

    $('.side__nav-item').on('click', function(e) {
        e.preventDefault();
        $('.side__nav-item').removeClass("menu-active");
        $( this ).addClass("menu-active");
    });
});


function showPassword(obj) {
    var obj = document.getElementById('passwordInput');
    if(obj.type == "password") {
        obj.type = "text";
        $('.showPassword').removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
        obj.type = "password";
        $('.showPassword').removeClass('fa-eye-slash').addClass('fa-eye');
    }
}


function getFormValues(event) {
	var username = $("#username").val();
	var password = $("#passwordInput").val();
	var href = $('#submit-btn').attr('href');

	event.preventDefault();

	if (username == "admin" && password == "admin123") {
		window.location.replace("http://localhost:3000/dashboard.html");
	} else {
		console.log(href);
	}	
}


	// $('.submit-btn').on('click', function(e) {
	// 	e.preventDefault;
	// 	console.log("YES");
	// });
