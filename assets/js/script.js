$(document).ready(function() {
	$('#aione_header').load('template/header.html', function() {
		var options = {
			valueNames: ['aione-search-item'],
			searchClass: 'aione-search-input',
			listClass: 'aione-search-list'
		};
		var search = new List('aione_nav', options);
	});
	$('#aione_footer').load('template/footer.html');
	$('#aione_copyright').load('template/copyright.html');

	$('body').on('click','.aione-nav > ul > li > a',function(e){
		var target = $(this).attr('href');
		if(target.indexOf("#") >= 0){
			e.preventDefault();
		}

		$(target).addClass('active').siblings().removeClass('active');
		var nav_item = $(this).parent();
		nav_item.toggleClass('nav-item-selected').siblings().removeClass('nav-item-selected');
		
	});
});