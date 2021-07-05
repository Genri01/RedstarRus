import images from './images'

const { 
  image_path,
  individuals,
  walk,
  walking,
  walking_x,
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
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type: "Пешеходная",
    header:"Пушкинский Петербург",
    img: walking,
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
    prise: 2050,
    link:"walk/0",
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
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type: "Пешеходная",
    header:"Пушкинский Петербург!!!!!!!!",
    img: walking,
    img_x:walking_x,
    btn_title:"А.С. ПУШКИН",
    routes:["st.Pitersburg","tallin","Helsinki","Stockholm","Oslo"],
    prise: 2050,
    link:"walk/1",
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
  }
]

const sliderAuto = [
  {
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    type: "Автомобильная",
    header:"TEST",
    img:author_1,
    btn_title:"testing",
    routes:["st.Pitersburg","tuda","zdes","tam","tut"],
    prise: 2000050,
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
    btn_title:"А.С. ПУШКИН",
    routes:["st.Pitersburg","tallin","Helsinki","Stockholm","Oslo"],
    prise: 2050,
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
  }
]

const blocks = [
  {
    header: "Recycle",
    img: advantages_1,
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