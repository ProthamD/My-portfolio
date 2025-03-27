function showDescription(service) {
    const title = document.getElementById("description-title");
    const content = document.getElementById("description-content");
    const descriptionArea = document.getElementById("description-area");
 
    // Set the title and content based on the clicked service
    if (service === 'web-developer') {
        title.innerText = "Web Developer";
        content.innerText = "Full description for Web Developer service goes here. This includes details about technologies used, project examples, and more.";
        title.style.color = "white";
        content.style.color = "White";
        title.style.margin = "6px";
    } else if (service === 'software-developer') {
        title.innerText = "Software Developer";
        content.innerText = "Full description for Software Developer service goes here. This includes details about programming languages used, methodologies followed, etc.";
        title.style.color = "white";
        content.style.color = "white";
        title.style.margin = "6px";
    }
    // Add more conditions for other services as needed
 
    // Show the description area
    descriptionArea.style.display = "block";
    descriptionArea.style.background = "black";

 }
 
 function hideDescription() {
    const descriptionArea = document.getElementById("description-area");
    descriptionArea.style.display = "none"; // Hide the description area
 }
 