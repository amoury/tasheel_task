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

// Employee Count
var employeeCount = document.getElementById('employeeCount').getContext('2d');

var myPieChart = new Chart(employeeCount,{
    type: 'pie',
    data: {
        	datasets: [{
						data: [50, 200, 30,80],
						backgroundColor: ['rgb(210,82,127)','rgb(102, 51, 153)', 'rgb(65, 131, 215)', 'rgb(38, 194, 129)']
					}],
					labels: ['IT Dept.','Customer Service','HR Dept.','Maintenance Dept.']
		},
		options: {}
});

// NEW APPLICANTS

var newApplicants = document.getElementById('newApplicants').getContext('2d');
var applicantsChart = new Chart(newApplicants,{
    type: 'doughnut',
    data: {
        	datasets: [{
						data: [75, 15],
						backgroundColor: ['rgb(108, 122, 137)','rgb(248, 148, 6)']
					}],
					labels: ['New Applicants','Interviewing']
		},
		options: {}
});


// CUSTOMER CASES
var customerCases = document.getElementById('customer-cases').getContext('2d');
var customerCaseChart = new Chart(customerCases,{
    type: 'doughnut',
    data: {
        	datasets: [{
						data: [35, 104, 7],
						backgroundColor: ['rgb(248, 148, 6)','rgb(38, 166, 91)', 'rgb(207, 0, 15)']
					}],
					labels: ['Open Cases','Resolved Cases', 'Under Dispute']
		},
		options: {}
});

// CUSTOMER GROWTH RATE
var customerGrowth = document.getElementById('customer__growth-chart').getContext('2d');
var customerGrowthChart = new Chart(customerGrowth,{
    type: 'bar',
    data: {
        	datasets: [{
						data: [200, 104, 120, 160, 134, 180, 170],
						backgroundColor: 'rgb(40,42,112)'
					}],
					labels: ['Jan','Feb', 'Mar','Apr','May','Jun','Jul']
		},
		options: {
			barThickness: 50
		}
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
		if($('body').attr('dir') == 'rtl') {
			window.location.replace("http://localhost:3000/ar/dashboard.html")
		} else {
			window.location.replace("http://localhost:3000/dashboard.html");
		}
	} else {
		$('#username').css("border-bottom-color","red");
		$('#passwordInput').css("border-bottom-color","red");
		$('form').effect("shake");
	}	
}


	// $('.submit-btn').on('click', function(e) {
	// 	e.preventDefault;
	// 	console.log("YES");
	// });
