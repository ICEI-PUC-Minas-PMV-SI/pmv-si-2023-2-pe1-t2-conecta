// select all elements with class '.task-description > p'
const descriptions = document.querySelectorAll('.task-description > p');

// loop through each element and apply the logic
descriptions.forEach(description => {
    const showMoreButton = description.nextElementSibling; // Assuming the button is a sibling element

    // check if the description needs a 'Show More' button
    if (description.offsetHeight < description.scrollHeight) {
        showMoreButton.style.display = 'block';
    }
});
