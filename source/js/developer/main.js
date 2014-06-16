$(document).ready(function(){
/* IE* placeholder fix */
	var IE='\v'=='v'
	if (IE) {
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
			}).blur(function() {
				var input = $(this);
				if (input.val() == '' || input.val() == input.attr('placeholder')) {
					input.addClass('placeholder');
					input.val(input.attr('placeholder'));
				}
			}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});
	}

	/* url params */
	var GETArr = parseGetParams();
	if (GETArr){
		var state = GETArr.state ? GETArr.state : 'USA';
		var name = GETArr.name ? GETArr.name : '{Name}';
		$('.p_state').html(toUp(state));
		$('.p_name').html(toUp(name));		
	}





	$('.subm_js').on('click',function(){
		if ($(this).parent().prev().find('input').val().length < 5) {
			$(this).next('.error_lp').slideDown(300);
		}
		else{
			$(this).next('.error_lp').slideUp(300);
		}
	});

	function loop() {
		var $a_left = $( ".arrow_l" ),
			$a_right = $( ".arrow_r" );
		$a_left.animate({
			left: "245"
			}, 1000, function() {

			});
		$a_right.animate({
			right: "245"
			}, 1000, function() {
				
			});
		$a_left.animate({
			left: "275"
			}, 1000, function() {

			});
		$a_right.animate({
			right: "275"
			}, 1000, function() {
				loop();
			});
	}
	loop();

	function loop2() {
		var $a_left = $( ".arrow_l2" ),
			$a_right = $( ".arrow_r2" );
		$a_left.animate({
			left: "90"
			}, 1000, function() {

			});
		$a_right.animate({
			right: "90"
			}, 1000, function() {
				
			});
		$a_left.animate({
			left: "70"
			}, 1000, function() {

			});
		$a_right.animate({
			right: "70"
			}, 1000, function() {
				loop2();
			});
	}


});

function parseGetParams() { 
	var $_GET = {};
	if (window.location.search.substring(1)){
		var __GET = window.location.search.substring(1).split("&"); 

		for(var i=0; i<__GET.length; i++) { 
			var getVar = __GET[i].split("="); 
			$_GET[getVar[0]] = typeof(getVar[1])=="undefined" ? "" : getVar[1]; 
		}
	return $_GET;
	}
}
function toUp(string) {
	return string.replace(/^\w/, string[0].toUpperCase());
}
function delete_cookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
