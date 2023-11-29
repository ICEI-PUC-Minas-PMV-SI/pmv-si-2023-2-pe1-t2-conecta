function modal(item, event) {
    let title = item.find('.task-name').text()
    $('.job-title').html(title)
    
    let text = item.find('.task-description-text').text()
    $('.text').html(text)

    let NGO = item.find('.task-owner').text()
    $('.NGO').html(NGO)

    let city = item.find('.location-tag').text()
    $('.city').html(city)

    if (city != 'REMOTO') {
        let addres = item.find('.addres').text()
        $('.addres').html(addres)
    } else {
        $('.addres').html('')
    }

    $('#myModal').css('display', 'block');
}

$(".close").click(function(){
    $('#myModal').css('display', 'none');
});

function fotoClick(event) {
    event.stopPropagation();
}
