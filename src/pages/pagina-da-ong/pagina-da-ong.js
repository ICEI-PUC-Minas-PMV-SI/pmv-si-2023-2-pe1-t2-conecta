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


//modal.js
function modal(item, event) {
    let title = item.find('.task-name').text()
    $('.job-title').html(title)
    
    let text = item.find('.task-description-text').text()
    $('.text').html(text)

    let NGO = item.find('.task-owner').text()
    $('.NGO').html(NGO)

    let city = item.find('.location-tag').text()
    $('.city').html(city)

    $('#myModal').css('display', 'block');
}

$(".close").click(function(){
    $('#myModal').css('display', 'none');
});

function fotoClick(event) {
    event.stopPropagation();
}