$(function() {
//Function Start

	$('#sort').sortable({
		// connectWith: '.sortable',
		update: function(event, ui) {

			// save();
		}
	});


// function save() {
//     chrome.storage.sync.set( {"lists": mainList} );
// }
// on ready function end
});
