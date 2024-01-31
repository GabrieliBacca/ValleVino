function changeLanguage(event) {
    const selectedLanguage = event.target.value;
    const translations = {
        'pt-BR': {
            mainTitle: 'VINÍCOLA TRADICIONAL<br /><span class="texto-1">Vinhos de todo o MUNDO</span><br /><span class="texto-2"></span>',
            mainText: 'A Valle Vino é sua porta de entrada para o sabor italiano excepcional. Em nosso site, apresentamos uma seleção única de vinhos, cada garrafa uma verdadeira obra de arte engarrafada. Descubra a paixão e a tradição italianas em cada taça com a Valle Vino.',
            placeholder: 'Qual vinho você busca?',
            searchButton: 'Procurar Vinho'
        },
        'en': {
            mainTitle: 'TRADITIONAL WINERY<br /><span class="texto-1">Wines from around the WORLD</span><br /><span class="texto-2"></span>',
            mainText: 'Valle Vino is your gateway to exceptional Italian flavor. On our website, we showcase a unique selection of wines, each bottle a true bottled masterpiece. Discover Italian passion and tradition in every glass with Valle Vino.',
            placeholder: 'What wine are you looking for?',
            searchButton: 'Search Wine'
        }
    };

    document.getElementById('mainTitle').innerHTML = translations[selectedLanguage].mainTitle;
    document.getElementById('mainText').innerHTML = translations[selectedLanguage].mainText;
    document.querySelector('input[type="text"]').placeholder = translations[selectedLanguage].placeholder;
    document.getElementById('searchButton').innerHTML = translations[selectedLanguage].searchButton;
}