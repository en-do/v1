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

	/* Select 2 */
	if ($("select").length){
		$("select").select2();
	}

	/* exit pop*/
	if ($("#exit_pop").length) {
		var ouiBo = ouibounce($('#exit_pop')[0], {
			aggressive: true,
			timer: 5,
			sensitivity: 0,
			callback: function() { $("#overlay").show(); loop2();}
		});
	}
	$("#exit_pop").find(".close,.btn").on('click', function(e) {
		$("#overlay").css("display","none");
		$(e.target).parents(".popup").css("display","none");
		return false;
	});
	$("#overlay").on('click', function(e) {
		$("#overlay").css("display","none");
		$("#exit_pop").css("display","none");
		return false;
	});

	/* Phone mask */
	if ($("#phone_id").length){
		$("#phone_id").mask("999-999-9999", {placeholder:'x'});
	}

	/* JQery Datepicker */
	if ($("#startdate").length) {
		$("#startdate").datepicker();
	}

	if ($.validator) {
		/* Validation */

		/* dropdown*/
		/*$.validator.addMethod("valueNotEquals", function (value, element, arg){
			return arg != value;
		});*/


		/* phone */
		/*$.validator.addMethod("phone", function (phone_number, element) {
			phone_number = phone_number.replace(/\s+|\W/g, "");
			return this.optional(element) || (phone_number.length > 9 && phone_number.match(/^\(?[\d\s]{3}[\d\s]{3}[\d\s]{4}$/));
		});*/
		
		/* regexp (only text) */
		$.validator.addMethod(
			'regexp',
			function(value, element, regexp) {
				var re = new RegExp(regexp);
				return this.optional(element) || re.test(value);
			}
		);

		/* Step 2 form validation */
		var main_form = $("#mainform").validate({
			showErrors: function(errorMap, errorList) {
				if (this.numberOfInvalids() != 0){
					$(".steps_errors span").html("^ Your form contains "+ this.numberOfInvalids()+ " errors, see details below. ^");
					$(".steps_errors").slideDown();
					this.defaultShowErrors();
				} else {
					$(".steps_errors").slideUp();
				}
					
			},
			rules: {
				fname: {required: true, minlength: 3,maxlength: 30, regexp: "^[a-zA-Z]+$"},
				lname: {required: true, minlength: 3,maxlength: 30, regexp: "^[a-zA-Z]+$"},
				phone: {required: true, regexp: "^[0-9-]+$"},
			},
			onkeyup: function() {
				/*if (main_form.form()) {
					$("#step_submit").focus();
				}*/
				main_form.form();
			},
			errorPlacement: function(error, element) {
				error.appendTo(element.siblings('ins'));
			},
			submitHandler: function(form) {
				//form.submit();	
			},
			success: function() {
			},
			highlight: function(element, errorClass) {
				$(element).parent('.input_container').addClass('attention').removeClass('check');

			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).parent('.input_container').addClass('check').removeClass('attention');
			}
		});

		/* Nav Buttons */
		$("#mainform").find(".next").on('click', function(e) {
			e.preventDefault();
			/* Act on the event */
			current_page = $(this).parents(".block_step");
			next_page = $(this).parents(".block_step").next();

			//$("#").eq($("").index( )).addClass("active");

			//validate
			if (main_form.form()) {
				current_page.toggleClass('hidden');
				next_page.toggleClass('hidden');
			}

			/* delete cookie to show popup one more time */
			delete_cookie("viewedOuibounceModal");
			/*  oiuBounce init */
			var ouiBo = ouibounce($('#exit_pop')[0], {
				aggressive: true,
				timer: 5,
				sensitivity: 0,
				callback: function() { $("#overlay").show(); loop2();}
			});

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
