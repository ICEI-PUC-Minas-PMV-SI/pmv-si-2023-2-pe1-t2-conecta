$("#filtroSelect").click(function(){
    if ($('.filterButton').hasClass('visible')) {
        $('.filterButton').addClass('invisible')
        $('.filterButton').removeClass('visible')
        $('.filterButton').css('display', 'none')
        $('.icon_black').css('display', 'none')
        $('.icon_white').css('display', 'block')
    } else {
        $('.filterButton').addClass('visible')
        $('.filterButton').removeClass('invisible')
        $('.filterButton').css('display', 'block')
        $('.icon_black').css('display', 'block')
        $('.icon_white').css('display', 'none')
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

//filtro.js
function buscaCidade(element) {
        $('.cidades_selecionadas').remove();
        $.ajax({
                url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"+element+"/municipios?orderBy=nome",
                context: {}
        }).done(function(data) {
                for (var uf in data) {
                        let html = "<option class='cidades_selecionadas'>"+data[uf].nome+"</option>";
                        $('.cidade').append(html);
                }
        });
}

$.ajax({
        url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome",
        context: {}
}).done(function(data) {
        for (var uf in data) {
                let html = "<option  value='"+data[uf].id+"'>"+data[uf].sigla+"</option>";
                $('.state').append(html);
        }
});