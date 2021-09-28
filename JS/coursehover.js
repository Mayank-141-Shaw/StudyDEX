let cardsDetails = {
    'python1' : {
        'author' : 'Jose Pimann',
        'title': 'Python Bootcamp Complete 2021',
        'desc': 'This is a premium python course created by Pyhton ML professional developer Jose Pimann. He is an ex-Google dev and now working in learning and development. This course provides fundamental concepts of python from beginner to advanced covering most of the trends and topics in the world of python',
        'link': 'python.html'
    },
    'python2' : {
        'author' : 'The Lazy Programmer',
        'title': 'Machine Learning in Python',
        'desc': 'This is a premium python course created by Pyhton ML professional developer The Lazy Programmer. He is an ex-Google dev and now working in learning and development. This course provides fundamental concepts of python from beginner to advanced covering most of the trends and topics in the world of python',
        'link': 'https://www.google.com'
    },
    'python3' : {
        'author' : 'Raghu Ramanujan',
        'title': 'Python Bootcamp for Data Science',
        'desc': 'This is a premium python course created by Pyhton ML professional developer Raghu Ramanujan. He is an ex-Google dev and now working in learning and development. This course provides fundamental concepts of python from beginner to advanced covering most of the trends and topics in the world of python',
        'link': 'https://www.google.com'
    },
    'design1' : {
        'author' : 'Adobe INC.',
        'title': 'Online Graphic Design Course: The Comprehensive Guide',
        'desc': 'A comprehensive course about design and drawing',
        'link': 'https://www.google.com'
    },
    'design2' : {
        'author' : 'Ashley Solaire',
        'title': 'UI/UX for complete noobs',
        'desc': 'A comprehensive course about design and drawing',
        'link': 'https://www.google.com'
    },
    'design3' : {
        'author' : 'Rick Robertson',
        'title': 'Learn Web Design: Step by Step',
        'desc': 'A comprehensive course about design and drawing',
        'link': 'https://www.google.com'
    },
    
}

function mouseOverCard(card){
    let cardId = card.id;
    let div = document.createElement('div');
    div.id = 'cardInfo';
    div.innerHTML = `<h3>${cardsDetails[cardId]['title']}</h3>
                    <p>${cardsDetails[cardId]['desc']}</p>
                    <a href=${cardsDetails[cardId]['link']}>
                        <div class="card-float-info">
                            Click to go
                        </div>
                    </a>
                    `;
    div.style.backgroundColor = '#7c6c83fe';
    div.style.color = 'white';
    div.style.zIndex = '100';
    div.style.width = `calc(${card.clientWidth}px - 4vw - 2vw)`;
    div.style.padding = '1vw';
    div.style.position = 'absolute';
    div.style.border = '2px solid black';
    div.style.boxShadow = '0 0 10px black';
    div.style.left = `calc(${card.offsetLeft}px + 2vw)`;
    card.appendChild(div);

}



function mouseOutsideCard(card){
    let div = document.getElementById('cardInfo');
    div.style.display = 'none';
    // removing the child destroys it
    card.removeChild(card.lastChild)
}