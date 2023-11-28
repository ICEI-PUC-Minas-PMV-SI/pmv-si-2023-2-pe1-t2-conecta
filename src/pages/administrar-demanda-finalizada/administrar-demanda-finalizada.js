//modal.js
function modal(item, event) {
    let task_name = $('.headline .title').text()
    $('.task-name').html(task_name)
    
    let text = item.find('.person-description-text').text()
    $('.text').html(text)

    let NGO = $('.headline .task-owner').text()
    $('.NGO').html(NGO)

    let name = item.find('.person-name').text()
    $('.name').html(name)

    $('#myModal').css('display', 'block');
}

$(".close").click(function(){
    $('#myModal').css('display', 'none');
});

function fotoClick(event) {
    event.stopPropagation();
}
