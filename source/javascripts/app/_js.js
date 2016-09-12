
// Plugin to clear text fields
(function ($, undefined) {  
    $.fn.clearable = function () {  
        var $this = this;  
        $this.wrap('<div class="clear-holder" />');  
        var helper = $('<span class="clear-helper">×</span>');  
        $this.parent().append(helper);  
        helper.click(function(){  
            $this.val(""); 
            $('.search-results').removeClass('visible'); 
        });  
    };  
})(jQuery);

$(document).ready(function() {


// Hide document title in site header if you're at the top of the page
// This is to avoid duplication with the H1 of the documentation
/*
var $document = $(document);
$('#proposition-name').addClass('visually-hidden');
$document.scroll(function() {
	$('#proposition-name').toggleClass('visually-hidden', $document.scrollTop() <= 60);
});
*/


$("#input-search").clearable();

});