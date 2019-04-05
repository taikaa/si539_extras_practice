	function toggle_nav() {
	
	var hamburger = document.querySelector('#hamburger')
	if (hamburger.style.visibility === 'visible') {
		hamburger.style.visibility = 'hidden';
	}
	else {
		hamburger.style.visibility = 'visible';
	}
}
// console.log(document.getElementById('hamburger').style.visibility)
document.querySelector('#hamburger').addEventListener('click', toggle_nav)


I want the ___ to be display block and width 100%
I want to set the text to margin auto 
I also want the hamburger to be display block 

visibility: hidden;
// nav ul {
// 	display: flex;
// 	justify-content: flex-start;
// 	margin: 0;
// 	padding: 5px 5px;
// 	background-color: #f1f1f1;
// 	text-align: right;
// 	align-items: center;
// }

// /* hiding header icon(s) when on mobile */ 
// .social_header{
// 	display: none;
// }

// nav li {
// 	display: inline-block;
// 	width: 24%;
// 	text-align: center;
// 	min-height: 6vh;
// 	background-color: white;
// }
// nav li a {
// 	display: inline-block;
// 	color: #000000;
// 	line-height: 3;
// 	width: 100%;
// 	text-decoration: none;
// 	text-align: center;
// 	/*font-family: Roboto, Helvetica, Verdana; */
// }