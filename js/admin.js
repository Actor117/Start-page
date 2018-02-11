// SOF
$(function() {
// ----- Code starts from here ----- //

    //  Makes the sites boxes sortable (drag to re-arrange)
	$('.sites-icons').sortable({ // Sortable: Start
        // For connecting with another list
		connectWith: '.sortable',
        // Each time a box is dragged, do the hwats inside the function
		update: function(event, ui) { // Update: Start
            // Execute the save function to save the position
            // of the boxes to chrome.storage
			save();
		} // Update: Ends
	}); // Sortable: Ends


//  Saves the list of websites
function save() { // Save: Starts
    // chrome.storage.sync.set( {"lists": mainList} );
} // Save: Ends

// ----- Code ends right here ----- //
});
// EOF
