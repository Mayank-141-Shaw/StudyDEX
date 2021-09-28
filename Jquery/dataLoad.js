
var dataArr = {
    'python1': {
        'title': 'Python Bootcamp Complete 2021',
        'author': 'Jose Pimann',
        'rating': '4.5',
        'user-count': '123,456',
        'desc': 'This is a premium python course created by Pyhton ML professional developer Jose Pimann. He is an ex-Google dev and now working in learning and development. This course provides fundamental concepts of python from beginner to advanced covering most of the trends and topics in the world of python.',
        'price': '$99'
    }
}

$(document).ready(function(){
    let section = $('.course-dets')[0];
    let id = section.id;
    $('#cData').html(`<h2 class="title">${dataArr[id]['title']}</h2>
                <p class="author">${dataArr[id]['author']}</p>
                <p class="rating">${dataArr[id]['rating']} <span class="users-count">(${dataArr[id]['user-count']})</span></p>
                <p class="price">Price : ${dataArr[id]['price']} USD</p>
                <p class="desc">${dataArr[id]['desc']}</p>`);

    
    let cStartBtn = $('#cStartBtn');
    cStartBtn.hover(function(){
        $(this).css({ 'cursor': 'pointer' , 'background-color': '#46344e', 'color': 'white', 'box-shadow': '2px 2px 5px 5px #221527' });
    }, function(){
        $(this).css({ 'background-color': '#46344e', 'color': 'white', 'box-shadow': 'none'});
    });
    
    cStartBtn.click(function(){
        alert('Course Started');
        $('#msg').html("Course Has Started");
    })
});
