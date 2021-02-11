'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	// $('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);

	$.get("http://URL", callBackFn);
}

function projectClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#7fff00");

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) {
	$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		$(".project-description").toggle();
	}
}

$("#testjs").click(function(result) {
	$.get("http://URL", callBackFn);
}

function callBackFn(result) {
	console.log(result.data);
}
