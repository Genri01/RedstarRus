import images from './images'

const { 
  image_path,
  individuals,
  walk,
  walking,
  walking_x,
  walking_2,
  walking_2x,
  walking_3,
  walking_3x,
  walking_4,
  walking_4x,
  walking_5,
  walking_5x,
  walking_6,
  walking_6x,
  walking_7,
  walking_7x,
  walking_8,
  walking_8x,
  author,
  author_1,
  auto,
  advantages_1,
  advantages_2,
  advantages_3,
  hours,
  photostop_2,
  transfer,
  guide,
  start,
  photostop_1,
  museum,
  lunch,
  optional,
  header
 } = images;

const cards = [
  {
    header: "Пешеходные",
    img:walk
  },
  {
    header: "Авторские",
    img:author
  },
  {
    header: "Автомобильные",
    img:auto
  },
]

const sliderWalk = [

  {
    description:"Добро пожаловать на прогулку по классической части старого Петербурга,\n ставшей воплощением мечты императора Петра I о блестящей европейской столице. Мы пройдём по Невскому проспекту, парадной витрине столицы Российской Империи в эпоху её расцвета, и увидим его наиболее примечательные дома и дворцы. Вы узнаете о путешествиях знаменитых коней Клодта на Аничковом мосту и возвращении орла на куполе Дома Книги. Мы посетитим места заговоров, покушений и бунтов в самом сердце исторического Петербурга. Вы узнаете, где в центре города прямо перед дворцами выращивали капусту и как памятники российским императорам воюют друг с другом. Мы пройдёмся вдоль набережной Невы и увидим самые знаменитые панорамные виды города. Мы увидим, куда был сослан самый неуклюжий памятник в мире, полюбуемся на Спас на Крови и ужаснёмся разыгравшейся на месте его основания трагедии, остановимся у дома, где закончилась 300-летния российская монархия и попробуем заглянуть за завесу мистики вокруг судьбы самого загадочного российского императора - Павла Первого.",
    type: "Пешеходная",
    header:"Классический Петербург",
    img: walking,
    img_x: walking_x,
    btn_title:"Классический",
    routes:["Невский","Спас","Аничков мост","Дом Книги"],
    routes_times:[
      {
        img: start,
        time:"Невский проспект",
        title:"Городская атмосфера",
        delimeter:image_path,
      },
      {
        img: photostop_1,
        time:"Аничков мост",
        title:"Прекрасные виды на реках и каналах Санкт-Петербурга",
        delimeter:image_path,
      },
      {
        img: museum,
        time:"Спас на крови",
        title:"Собо́р Воскресе́ния Христо́ва на Крови́",
        delimeter:image_path,
      },
    ],
    price: 7000,
    link:"walk/0",
    info:[
      {
        img: hours,
        description:"3 часа"
      },
      {
        img: photostop_1,
        description:"Фотостопы"
      },
      {
        img: guide,
        description:"Гид"
      },
    ]
  },
  {
    description:"Признанное утверждение, что Санкт-Петербург - город дворцов, на слуху у многих. И жители и гости северной столицы единодушно с этим соглашаются. Сколько же дворцов сохранилось по сей день в историческом центре города? Почему цифры в путеводителях так разнятся? Чтобы это узнать, нам предстоит отправиться в увлекательное путешествие в глубь веков. Во время экскурсии мы увидим дворцы императоров и великих князей и вспомним их самых знаменитых владельцев, узнаем как менялся внешний вид дворцов на протяжении веков. Вы услышите увлекательные истории о событиях, происходивших рядом с дворцами и в самих дворцах, и легенды, которые эти дворцы породили. А также вы узнаете как увидеть дворец, который исчез с карты города!",
    type: "Пешеходная",
    header:"Дворцы центра Петербурга",
    img: walking_2,
    img_x:walking_2x,
    btn_title:"Дворцы",
    routes:["Дворцовая площадь","Невский проспект"],
    routes_times:[
      {
        img: start,
        time:"Невский проспект",
        title:"Городская атмосфера",
        delimeter:image_path,
      },
      {
        img: photostop_1,
        time:"Аничков мост",
        title:"Прекрасные виды на реках и каналах Санкт-Петербурга",
        delimeter:image_path,
      },
      {
        img: museum,
        time:"Спас на крови",
        title:"Собо́р Воскресе́ния Христо́ва на Крови́",
        delimeter:image_path,
      },
    ],
    price: 7000,
    link:"walk/1",
    info:[
      {
        img: hours,
        description:"3 часа"
      },
      {
        img: photostop_1,
        description:"Фотостопы"
      },
      {
        img: guide,
        description:"Гид"
      },
    ]
  },
  {
    description:"Современный Санкт-Петербург - это многомиллионный и многоконфессиональный город. Где же истоки этого самого религиозного разнообразия, и так ли оно обширно в XXI веке по сравнению с XIX столетием? Почему главный проспект Петербурга получил название «Улица толерантности»? К какой конфессии принадлежали представители знатнейших и богатейших семей Петербурга, и что скрывало русское дворянство северной столицы? Ответы на эти и многие другие вопросы Вы узнаёте в ходе нашей экскурсии. Во время прогулки мы познакомимся с армянской, немецкой, шведской и финской церквями, посетим главный кафедральный собор города, Исаакиевский собор, поговорим о главных символах православия, об их отличиях от католицизма, а также о скрытых символах масонства как весомого явления времен Российской империи. Вы узнаете о жизни разных общин и о том, что с этими церквями произошло в период Советского Союза и какова роль каждой из религий в настоящее время.",
    type: "Пешеходная",
    header:"Храмы Петербурга",
    img: walking_3,
    img_x:walking_3x,
    btn_title:"Храмы",
    routes:["Исаакиевский собор","Армянская церковь"],
    routes_times:[
      {
        img: start,
        time:"Исаакиевский собор",
        title:"Четвертый по величине христианский собор в мире",
        delimeter:image_path,
      },
      {
        img: photostop_1,
        time:"Армянская церковь",
        title:"Армянская уерковь Санкт-Петербурга",
        delimeter:image_path,
      },
      {
        img: museum,
        time:"Спас на крови",
        title:"Собо́р Воскресе́ния Христо́ва на Крови́",
        delimeter:image_path,
      },
    ],
    price: 7000,
    link:"walk/2",
    info:[
      {
        img: hours,
        description:"3 часа"
      },
      {
        img: photostop_1,
        description:"Фотостопы"
      },
      {
        img: guide,
        description:"Гид"
      },
    ]
  },
  {
    description:"Островами в Петербурге обычно называли Каменный, Крестовский и Елагин. В 18 и 19 веках на островах строились загородные дворцы знати и императорской семьи. Дворцы были окружены огромными парками в регулярном или пейзажном стиле. В конце 19 века на Каменном острове начинается дачный бум. В тени деревьев, на берегах рек, каналов и прудов появляются маленькие домики самых причудливых очертаний, которые уже в 20 веке становятся декорациями для фильмов про Шерлока Холмса и принца Флоризеля. Это были дачи ювелиров, архитекторов, врачей, владельцев магазинов. Каменный остров всегда привлекал к себе поэтов - Пушкина, Блока. Преисполненные поэтических чувств влюбленные тоже отправлялись гулять на острова. В советское время Каменный остров получает название Парк трудящихся, а дворцы и дачи превращаются в клубы и санатории, открытые для всех. Но постепенно Каменный остров становится закрытым местом отдыха политической элиты. Каким был и каким стал Каменный остров мы узнаем во время пешеходной экскурсии.",
    type: "Пешеходная",
    header:"Экскурсия по Каменному острову",
    img: walking_5,
    img_x:walking_5x,
    btn_title:"Остров",
    routes:["Каменный остров","Парк трудящихся"],
    routes_times:[
      {
        img: start,
        time:"Каменный остров",
        title:"В 18 и 19 веках на острове строились загородные дворцы знати",
        delimeter:image_path,
      },
    ],
    price: 7000,
    link:"walk/3",
    info:[
      {
        img: hours,
        description:"3 часа"
      },
      {
        img: photostop_1,
        description:"Фотостопы"
      },
      {
        img: guide,
        description:"Гид"
      },
    ]
  },
  {
    description:"Эксклюзивная экскурсия от коренной петербурженки, которой таки есть, что сказать, и что ответить. В ходе прогулки вы узнаете тайный пароль декабристов, о службе евреев в армии, их роли в революции, и как не перепутать консерваторию с Синагогой. Мы посмотрим дома, где жили значимые фигуры еврейской общины 18 и 19 веков, такие как Абрам Перец, Самуил Поляков, Гораций Гинзбург. Окунемся во времена развития традиционных еврейских профессий. Поговорим о культуре и искусстве. Узнаем как жизнь в удаленных уголках Российской империи отразилась на судьбе столицы. Для тех, кто в Петербурге недавно, будет еще и замечательная возможность посмотреть на столь известные достопримечательности: Дворцовую площадь, Медный всадник, Мариинский театр но немногого под иным углом обзора. Самым цимесом экскурсии станет посещение Большой Хоральной Синагоги с увлекательным рассказом о кошерной пище, еврейской свадьбе, и о еврейском происхождении известных русских жаргонов. Вся экскурсия, подобно гефельте фиш бабушки автора щедро нафарширована шутками, анекдотами и историями из жизни замечательных людей.",
    type: "Пешеходная",
    header:"Еврейский Петербург",
    img: walking_6,
    img_x:walking_6x,
    btn_title:"Еврейский",
    routes:["Синагога","Дворцовая площадь"],
    routes_times:[
      {
        img: start,
        time:"Синагога",
        title:"Еврейская синагога",
        delimeter:image_path,
      },
      {
        img: start,
        time:"Дворцовая площадь",
        title:"Главная площадь Санкт-Петербурга",
        delimeter:image_path,
      },
      {
        img: start,
        time:"Медный Всадник",
        title:"Памятник Петру I на Сенатской площади",
        delimeter:image_path,
      },
    ],
    price: 7000,
    link:"walk/4",
    info:[
      {
        img: hours,
        description:"3 часа"
      },
      {
        img: photostop_1,
        description:"Фотостопы"
      },
      {
        img: guide,
        description:"Гид"
      },
    ]
  },
  {
    description:"Как говорится: «в Питере – Пить!».\n Почему? – понять поможет прогулка в концепции «pub crawl» (родом из Нью-Йорка, известна так же как «экскурсия по барам»), которая начинается в районе знаменитой улицы Рубинштейна. Мы посетим 5 баров с разными концепциями и атмосферами, пройдем по заранее установленному маршруту. В каждом и них мы проведем 20-30 минут – это формат pubcrawl. Наша главная цель – повеселиться, познакомиться с большим количеством новых людей и атмосферных мест за один вечер. Отличный вариант проведения Вашей ночи в Питере!",
    type: "Пешеходная",
    header:"Вечерняя экскурсия Пора по пабам!",
    img: walking_8,
    img_x:walking_8x,
    btn_title:"Барная",
    routes:["ул. Рубинштейна","Пабы и бары"],
    routes_times:[
      {
        img: start,
        time:"ул. Рубинштейна",
        title:"Знаменитая улица Рубинштейна",
        delimeter:image_path,
      },
    ],
    price: 7000,
    link:"walk/5",
    info:[
      {
        img: hours,
        description:"3 часа"
      },
      {
        img: photostop_1,
        description:"Фотостопы"
      },
      {
        img: guide,
        description:"Гид"
      },
    ]
  }
]

const sliderAuto = [
  {
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type: "Автомобильная",
    header:"TEST",
    img:author_1,
    img_x: walking_x,
    btn_title:"testing",
    routes:["st.Pitersburg","tuda","zdes","tam","tut"],
    routes_times:[
      {
        img: start,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
      {
        img: photostop_1,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
      {
        img: museum,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
      {
        img: lunch,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
      {
        img: museum,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
      {
        img: optional,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
  
    ],
    price: 2000050,
    link:"auto/0",
    info:[
      {
        img: hours,
        description:"340 часов"
      },
      {
        img: transfer,
        description:"Трансфер"
      },
      {
        img: transfer,
        description:"Трансфер"
      },
      {
        img: transfer,
        description:"Трансфер"
      },
    ]
  }
]

const sliderAuthor = [
  {
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type: "Авторская",
    header:"Пушкинский Петербург",
    img:header,
    img_x: walking_x,
    btn_title:"А.С. ПУШКИН",
    routes:["st.Pitersburg","tallin","Helsinki","Stockholm","Oslo"],
    routes_times:[
      {
        img: start,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
      {
        img: photostop_1,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
      {
        img: museum,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
      {
        img: lunch,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
      {
        img: museum,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
      {
        img: optional,
        time:"08:00 am",
        title:"Lorem ipsum dolor sit amet, consectetur ",
        delimeter:image_path,
      },
  
    ],
    price: 2050,
    link:"author/0",
    info:[
      {
        img: hours,
        description:"34 часа"
      },
      {
        img: transfer,
        description:"Трансфер"
      },
      {
        img: transfer,
        description:"Трансфер"
      },
      {
        img: transfer,
        description:"Трансфер"
      },
    ]
  },
  {
    description:"В ходе этого авторского тура слушатели погрузятся в уникальную музыкальную и творческую среду второй половины XIX-XX века – период становления и небывалого расцвета национального музыкального искусства. Гости увидят: Мариинский театр, здание Петербургской консерватории, Большой и Малой филармонии, дом, где жил П.И. Чайковский, посетят Дом музыки – музей музыкальных инструментов, музей-квартиру Н.А. Римского-Корсакова и Ф.И. Шаляпина.",
    type: "Авторская",
    header:"Музыкальный Санкт-Петербург",
    img: walking_7,
    img_x:walking_7x,
    btn_title:"Музыкальный",
    routes:["Мариинский театр","Петербургская консерватория"],
    routes_times:[
      {
        img: museum,
        time:"Мариинский театр",
        title:"Один из ведущих музыкальных театров России и мира",
        delimeter:image_path,
      },
      {
        img: start,
        time:"Большая филармония",
        title:"Большая филармония Санкт-Петербурга",
        delimeter:image_path,
      },
      {
        img: start,
        time:"Малая филармония",
        title:"Малая филармония Санкт-Петербурга",
        delimeter:image_path,
      },
    ],
    price: 7000,
    link:"author/1",
    info:[
      {
        img: hours,
        description:"3 часа"
      },
      {
        img: photostop_1,
        description:"Фотостопы"
      },
      {
        img: guide,
        description:"Гид"
      },
    ]
  },
  {
    description:"Этот авторский тур с особым трепетом и гордостью был разработан для тех, кто хочет побольше узнать о русской культуре и непосредственно соприкоснуться с ней. Гид-искусствовед расскажет и продемонстрирует основные достижения и вехи развития русской культуры от древних икон до наших дней. Особое внимание уделяется периоду небывалого подъема русской культуры на рубеже XIX-XX веков, тому удивительному времени, когда достижения нашей культуры и науки стали по праву считаться общемировыми. В ходе тура Вы увидите: Площадь Искусств, центральную часть Невского проспекта, Первый в России офисный центр, Первую Российскую Национальную Библиотеку, первый русский универмаг – Гостиный двор, Аничков дворец и Аничков мост со знаменитой конной скульптурной группой, поговорим об особенностях строительства метрополитена в России и в Петербурге в частности, зайдем в Елисеевский магазин - гастроном для аристократов начала XX столетия, Екатерининский сад и Александринский театр, в котором русская монархия провела свой последний театральный вечер. А так же посетите: Русский музей, Храм-памятник Спас на Крови, Казанский Собор, Музей театрального и музыкального искусства, музей ювелирного искусства Фаберже.",
    type: "Авторская",
    header:"Сокровища русской культуры",
    img: walking_4,
    img_x:walking_4x,
    btn_title:"Культура",
    routes:["Площадь Искусств","Невский проспект"],
    routes_times:[
      {
        img: start,
        time:"Площадь Искусств",
        title:"Площадь Искусств это сосредоточение духа Искусств",
        delimeter:image_path,
      },
      {
        img: photostop_1,
        time:"Невский проспект",
        title:"Центральная улица Санкт-Петербурга",
        delimeter:image_path,
      },
      {
        img: museum,
        time:"Российская Национальная Библиотека",
        title:"Первая Российская Национальная Библиотека",
        delimeter:image_path,
      },
      {
        img: start,
        time:"Гостиный двор",
        title:"Первый русский универмаг",
        delimeter:image_path,
      },
    ],
    price: 14000,
    link:"author/2",
    info:[
      {
        img: hours,
        description:"8 часов"
      },
      {
        img: photostop_1,
        description:"Фотостопы"
      },
      {
        img: guide,
        description:"Гид"
      },
    ]
  },
  {
    description:"В ходе этого уникального авторского тура мы особо выделим основных представителей литературных эпох Золотого (XIX) и Серебряного (XX) века, запечатленных в каменной летописи Петербурга. Мы узнаем, где учился, женился, жил, черпал литературное вдохновение и встречал прототипы своих героев Ф.М. Достоевский, где были основные литературные салоны XIX столетия, где жили, куда ходили и какие развлечения предпочитали в молодости писатели Н.В. Гоголь, А.С. Пушкин, М.Ю. Лермонтов и их современники, как родилась и с чем связана метафора Б.Л. Пастернака «Жизнь прожить – не поле перейти», где началась столичная поэтическая карьера и трагически оборвалась земная жизнь поэта С.А. Есенина, какой петербургский мост А.А. Блок с супругой называли «Мостом вздохов», где жила и любила прогуливаться Анна Ахматова и многое другое.",
    type: "Авторская",
    header:"Литературный Санкт-Петербург",
    img: walking_4,
    img_x:walking_4x,
    btn_title:"Литература",
    routes:["Площадь Искусств","Невский проспект"],
    routes_times:[
      {
        img: start,
        time:"Площадь Искусств",
        title:"Площадь Искусств это сосредоточение духа Искусств",
        delimeter:image_path,
      },
      {
        img: photostop_1,
        time:"Невский проспект",
        title:"Центральная улица Санкт-Петербурга",
        delimeter:image_path,
      },
      {
        img: museum,
        time:"Российская Национальная Библиотека",
        title:"Первая Российская Национальная Библиотека",
        delimeter:image_path,
      },
      {
        img: start,
        time:"Гостиный двор",
        title:"Первый русский универмаг",
        delimeter:image_path,
      },
    ],
    price: 7000,
    link:"author/3",
    info:[
      {
        img: hours,
        description:"3 часа"
      },
      {
        img: photostop_1,
        description:"Фотостопы"
      },
      {
        img: guide,
        description:"Гид"
      },
    ]
  }
]

const blocks = [
  {
    header: "Recycle",
    img: advantages_1,
    img_x: walking_x,
    description:"Тут будет ответ на вопрос почему с нами работать выгодно и удобно.И какие услуги мы можем предложить за не большую цену."
  },
  {
    header: "Charity",
    img: advantages_2,
    description:"Тут будет ответ на вопрос почему с нами работать выгодно и удобно.И какие услуги мы можем предложить за не большую цену."
  },
  {
    header: "3rd avantage",
    img: advantages_3,
    description:"Тут будет ответ на вопрос почему с нами работать выгодно и удобно.И какие услуги мы можем предложить за не большую цену."
  },
]

const answers = [
  {
    answer: "Как заказать экскурсию",
    description:"Это сделать очень просто достаточно набрать нам!"
  },
  {
    answer: "Как заказать экскурсию",
    description:"Это сделать очень просто достаточно набрать нам!"
  },
  {
    answer: "Как заказать экскурсию",
    description:"Это сделать очень просто достаточно набрать нам!"
  },
  {
    answer: "Как заказать экскурсию",
    description:"Это сделать очень просто достаточно набрать нам!"
  },
]


const aboutcards = [
  {
    img: advantages_1,
    title:"Reliable",
    li: [
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
    ]
  },
  {
    img: advantages_2,
    title:"Unique",
    li: [
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
    ]
  },
  {
    img: advantages_3,
    title:"Modern",
    li: [
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
      "тут написано в чем мы лучшие!",
    ]
  }
]

const objectsSection = {
  cards,
  sliderWalk,
  sliderAuto,
  sliderAuthor,
  blocks,
  answers,
  aboutcards
}

export default objectsSection;