function enableInlineEditing(sectionId) {
    const section = document.getElementById(sectionId);
    section.setAttribute("contenteditable", "true");
    section.classList.add("editable");
  }
  
  function disableInlineEditing(sectionId) {
    const section = document.getElementById(sectionId);
    section.setAttribute("contenteditable", "false");
    section.classList.remove("editable");
  }
  
  // Function to disable inline editing for all sections
  function disableAllInlineEditing() {
    disableInlineEditing("contact");
    disableInlineEditing("education");
    disableInlineEditing("experience");
    disableInlineEditing("skills");
  }
  
  // Add click event listeners to each "Edit" button to enable inline editing for the corresponding section
  document.getElementById("contactEditButton").addEventListener("click", () => enableInlineEditing("contact"));
  document.getElementById("educationEditButton").addEventListener("click", () => enableInlineEditing("education"));
  document.getElementById("experienceEditButton").addEventListener("click", () => enableInlineEditing("experience"));
  document.getElementById("skillsEditButton").addEventListener("click", () => enableInlineEditing("skills"));
  
  // Disable inline editing when clicking outside the editable sections
  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const isEditableSection = clickedElement.classList.contains("editable");
    if (!isEditableSection) {
      disableAllInlineEditing();
    }
  });
  
  
