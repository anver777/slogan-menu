export const menuData = {
  categories: [
    { id: 'salads', name: 'Салаты', icon: '🥗' },
    { id: 'soups', name: 'Супы', icon: '🥣' },
    { id: 'pizza', name: 'Пицца', icon: '🍕' },
    { id: 'pasta', name: 'Паста', icon: '🍝' },
    { id: 'grill', name: 'Мангал', icon: '🔥' },
    { id: 'snacks', name: 'Закуски', icon: '🍟' },
    { id: 'sets', name: 'Сеты', icon: '🍱' },
    { id: 'croissants', name: 'Круассаны', icon: '🥐' },
    { id: 'desserts', name: 'Десерты', icon: '🍰' },
  
    { id: 'bar', name: 'Бар', icon: '🍺' },
    { id: 'sauces', name: 'Соуса', icon: '🏺' }
  ],
  items: [
    // --- САЛАТЫ ---
    { id: 1, categoryId: 'salads', name: 'С КАЛЬМАРОМ', price: 590, weight: '200г', desc: 'кальмар, огурец, ореховый соус, кинза, кунжут, имбирь, чеснок, соевый соус, лимон' },
    { id: 4, categoryId: 'salads', name: 'ПАНАЗИАТСКИЙ', price: 380, weight: '200г', desc: 'баклажан, кляре, зелень, помидор, кинза, соус сладкий чили' },
    { id: 2, categoryId: 'salads', name: 'ЦЕЗАРЬ С КУРИЦЕЙ', price: 370, weight: '200г', desc: 'куриза, айсберг, соус церярь, пармезан, черри, гренки' },
    { id: 3, categoryId: 'salads', name: 'ЦЕЗАРЬ С КРЕВЕТКАМИ', price: 490, weight: '200г', desc: 'айсберг, криветки, пармезан, соус церярь, черри, гренки' },
    { id: 3, categoryId: 'salads', name: 'ЦЕЗАРЬ С СЕМГОЙ', price: 490, weight: '200г', desc: 'айсберг, семга, пармезан, соус церярь, черри, гренки' },
    { id: 3, categoryId: 'salads', name: 'ОВОЩНОЙ', price: 350, weight: '200г', desc: 'огурец, помидор, масло оливковое, зелень' },
    

    // --- СУПЫ ---
    { id: 12, categoryId: 'soups', name: 'КРЕМ-СУП ГРИБНОЙ', price: 300, weight: '300г', desc: '  ' },
    { id: 11, categoryId: 'soups', name: 'СОЛЯНКА МЯСНАЯ', price: 350, weight: '300г', desc: '  ' },
    { id: 12, categoryId: 'soups', name: 'БУЛЬОН КУРИНЫЙ С ЛАПШОЙ И ЯЙЦОМ', price: 250, weight: '300г', desc: '  ' },
    { id: 10, categoryId: 'soups', name: 'ТОМ ЯМ', price: 360, weight: '300г', desc: '  ' },
    
    

    // --- ПИЦЦА ---
    { id: 20, categoryId: 'pizza', name: 'МОРЕПРОДУКТЫ', price: 710, weight: '450г', desc: 'креветки, кальмары, мидии, моцарелла, соус' },
    { id: 21, categoryId: 'pizza', name: 'ПЕПЕРОНИ', price: 690, weight: '450г', desc: 'острые колбаски пеперони, моцарелла, томатный соус' },
    { id: 22, categoryId: 'pizza', name: 'МАРГАРИТА', price: 650, weight: '400г', desc: 'томаты, базилик, увеличенная порция моцареллы' },
    { id: 23, categoryId: 'pizza', name: 'BBQ', price: 690, weight: '450г', desc: 'бекон, курица, красный лук, соус барбекю' },
    { id: 24, categoryId: 'pizza', name: 'ЦЕЗАРЬ ПИЦЦА', price: 680, weight: '430г', desc: 'курица, соус цезарь, черри, салат айсберг' },
    { id: 25, categoryId: 'pizza', name: 'ВЕТЧИНА С ГРИБАМИ', price: 660, weight: '420г', desc: 'классическое сочетание ветчины и шампиньонов' },
    { id: 26, categoryId: 'pizza', name: 'ДОРБЛЮ ГРУША', price: 690, weight: '400г', desc: 'сливочный соус, сыр дорблю, груша, моцарелла' },

    // --- ПАСТА ---
    { id: 30, categoryId: 'pasta', name: 'КАРБОНАРА', price: 520, weight: '250г', desc: '  ' },
    { id: 31, categoryId: 'pasta', name: 'С ФОРЕЛЬЮ', price: 690, weight: '250г', desc: '  ' },
    { id: 32, categoryId: 'pasta', name: 'С МОРЕПРОДУКТАМИ', price: 690, weight: '300г', desc: '  ' },
    { id: 33, categoryId: 'pasta', name: 'С ВЕТЧИННОЙ И ГРИБАМИ', price: 570, weight: '250г', desc: '  ' },
    { id: 34, categoryId: 'pasta', name: 'С ПЕСТО И КРЕВЕТКАМИ', price: 660, weight: '250г', desc: '  ' },
    { id: 35, categoryId: 'pasta', name: 'С ДОР БЛЮ И КУРИЦЕЙ', price: 660, weight: '250г', desc: '  ' },

    // --- МАНГАЛ ---
    { id: 40, categoryId: 'grill', name: 'ШАШЛЫК СВИНОЙ', price: 560, weight: '200г', desc: 'шейка свиная, лук маринованный, соус' },
    { id: 41, categoryId: 'grill', name: 'ШАШЛЫК КУРИНЫЙ', price: 550, weight: '200г', desc: 'филе бедра куриного, маринад, соус' },
    { id: 42, categoryId: 'grill', name: 'КОЛБАСКИ КУРИНЫЕ', price: 500, weight: '200г', desc: 'куриные колбаски собственного производства' },
    { id: 43, categoryId: 'grill', name: 'ОВОЩИ НА ГРИЛЕ', price: 590, weight: '250г', desc: 'баклажан, кабачок, перец, помидор, грибы' },
    { id: 44, categoryId: 'grill', name: 'ШАМПИНЬОНЫ', price: 350, weight: '200г', desc: 'целые грибы на углях в маринаде' },
    { id: 45, categoryId: 'grill', name: 'КАРТОФЕЛЬ С САЛОМ', price: 340, weight: '200г', desc: 'картофель на шампуре с прослойкой сала' },
    { id: 46, categoryId: 'grill', name: 'КУПАТЫ ДОМАШНИЕ', price: 700, weight: '300г', desc: 'сочные купаты с дымком' },

    // --- ЗАКУСКИ ---
    { id: 70, categoryId: 'snacks', name: 'ГРЕНКИ С ЧЕСНОКОМ', price: 150, weight: '120г', desc: 'бородинский хлеб, чесночное масло, соус' },
    { id: 71, categoryId: 'snacks', name: 'КРЕВЕТКИ ТЕМПУРА', price: 450, weight: '150г', desc: 'тигровые креветки в хрустящем кляре' },
    { id: 72, categoryId: 'snacks', name: 'КАРТОФЕЛЬ ФРИ', price: 150, weight: '150г', desc: 'классический картофель фри' },
    { id: 73, categoryId: 'snacks', name: 'КАРТОФЕЛЬ ПО-ДЕРЕВЕНСКИ', price: 170, weight: '150г', desc: 'дольки картофеля со специями' },
    { id: 74, categoryId: 'snacks', name: 'КОЛЬЦА КАЛЬМАРА', price: 390, weight: '150г', desc: 'кальмары в панировке с соусом' },
    { id: 75, categoryId: 'snacks', name: 'ЛУКОВЫЕ КОЛЬЦА', price: 150, weight: '150г', desc: 'хрустящие луковые кольца' },
    { id: 76, categoryId: 'snacks', name: 'КРЫЛЫШКИ ХРУСТЯЩИЕ', price: 380, weight: '200г', desc: 'куриные крылышки в острой панировке' },
    { id: 77, categoryId: 'snacks', name: 'СТРИПСЫ ХРУСТЯЩИЕ', price: 350, weight: '180г', desc: 'филе в золотистой панировке' },
    { id: 78, categoryId: 'snacks', name: 'КОРН ДОГИ В АСС-ТЕ', price: 280, weight: '2шт', desc: 'классика / с картофелем / читос' },

    // --- СЕТЫ ---
    { id: 80, categoryId: 'sets', name: 'ПИВНОЙ СЕТ', price: 950, weight: '650г', desc: 'картофель дерев., кольца кальмара, гренки, стрипсы, корнишоны, соус' },
    { id: 81, categoryId: 'sets', name: 'СУПЕР СЕТ', price: 1800, weight: '1000г', desc: 'колбаски, кальмары, гренки, черри, стрипсы, картофель дерев., соусы' },

    // --- КРУАССАНЫ ---
    { id: 90, categoryId: 'croissants', name: 'ФРУКТОВЫЙ', price: 250, weight: '180г', desc: 'банан, киви, груша, шоколадный топпинг' },
    { id: 91, categoryId: 'croissants', name: 'ЦЕЗАРЬ', price: 260, weight: '200г', desc: 'курица, салат, томат, соус цезарь' },
    { id: 92, categoryId: 'croissants', name: 'С ТОМАТАМИ И МОЦАРЕЛЛОЙ', price: 260, weight: '200г', desc: 'моцарелла, свежие томаты, песто' },

    // --- ДЕСЕРТЫ ---
    { id: 100, categoryId: 'desserts', name: 'ЧИЗКЕЙК', price: 230, weight: '150г', desc: 'классический сливочный десерт' },
    { id: 101, categoryId: 'desserts', name: 'МОРОЖЕНОЕ В АСС-ТЕ', price: 220, weight: '150г', desc: 'ванильное / шоколадное / клубничное' },

    

    // --- БАР (ПИВО / НАСТОЙКИ / Б/А) ---
    { id: 120, categoryId: 'bar', name: 'KOZEL (СВЕТЛОЕ / ТЕМНОЕ)', price: 180, weight: '0.5л', desc: 'чешское классическое пиво' },
    { id: 121, categoryId: 'bar', name: 'BUD (СВЕТЛОЕ / Б/А)', price: 170, weight: '0.5л', desc: 'светлый лагер' },
    { id: 122, categoryId: 'bar', name: 'НАСТОЙКИ (50МЛ)', price: 210, weight: '50мл', desc: 'клюква, лимон, барбарис, зубровка, блю кюрасао' },
    { id: 123, categoryId: 'bar', name: 'СЕТ НАСТОЕК', price: 900, weight: '250мл', desc: '5 любых настоек на ваш выбор' },
    { id: 124, categoryId: 'bar', name: 'ЧАЙ В АСС-ТЕ', price: 250, weight: '500мл', desc: 'черный / зеленый / фруктовый' },
    { id: 125, categoryId: 'bar', name: 'КОФЕ (ЛАТТЕ / КАПУЧИНО)', price: 150, weight: '250мл', desc: 'зерновой свежесваренный кофе' },

    // --- СОУСА ---
    { id: 150, categoryId: 'sauces', name: 'СЫРНЫЙ', price: 70, weight: '30г', desc: 'Heinz' },
    { id: 151, categoryId: 'sauces', name: 'БАРБЕКЮ', price: 70, weight: '30г', desc: 'Heinz' },
    { id: 152, categoryId: 'sauces', name: 'ТАР-ТАР', price: 70, weight: '30г', desc: 'белый соус с огурчиками' },
    { id: 153, categoryId: 'sauces', name: 'СЛАДКИЙ ЧИЛИ', price: 70, weight: '30г', desc: 'пикантный соус' }
  ]
};