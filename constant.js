import {
    jassigill, kumarvishwas, instagram, youtube, twitter, facebook, gajendra, shruti, ravindra, naushad, rawaz, thirak, dj, sur, celebrityNight, glimpse1, glimpse4, glimpse7, glimpse12
} from "./assets/index"




const previousCelebrities = [
    {
        celebrityName: "Gajendra Verma",
        celebrityPhoto: gajendra,
        celebrityYear: "",
    },
    {
        celebrityName: "Shruti Sinha",
        celebrityPhoto: shruti,
        celebrityYear: "",
    },
    {
        celebrityName: "Kumar Vishwas",
        celebrityPhoto: kumarvishwas,
        celebrityYear: "",
    },
    {
        celebrityName: "Ravindra Upadhyay",
        celebrityPhoto: ravindra,
        celebrityYear: "",
    },

    {
        celebrityName: "jassigill",
        celebrityPhoto: kumarvishwas,
        celebrityYear: "",
    },
    {
        celebrityName: "jassigill",
        celebrityPhoto: kumarvishwas,
        celebrityYear: "",
    },
    {
        celebrityName: "jassigill",
        celebrityPhoto: jassigill,
        celebrityYear: "",
    },
    {
        celebrityName: "Naushad Ali kawa",
        celebrityPhoto: naushad,
        celebrityYear: "",
    },
    {
        celebrityName: "jassigill",
        celebrityPhoto: jassigill,
        celebrityYear: "",
    },


]

const socialContact = [
    {
        socialName: "Twitter",
        socialIcon: twitter,
        socialLink: ""
    },
    {
        socialName: "Instagram",
        socialIcon: instagram,
        socialLink: ""
    },
    {
        socialName: "Facebook",
        socialIcon: facebook,
        socialLink: ""
    },
    {
        socialName: "YouTube",
        socialIcon: youtube,
        socialLink: ""
    },
]


const majorEvents = [
    {
        id: 'eventOne',
        imgUrl: thirak,
        title: 'Thirak',
    },
    {
        id: 'eventTwo',
        imgUrl: dj,
        title: 'DJ Night',
    },
    {
        id: 'eventThree',
        imgUrl: rawaz,
        title: 'Rawaz',
    },
    {
        id: 'eventFour',
        imgUrl: sur,
        title: 'Sur',
    },
    {
        id: 'eventFive',
        imgUrl: celebrityNight,
        title: 'Celebrity Night',
    },
];

const glimpsesCard = [
    {
        title: "Pravah 23 After Story",
        displayState: false,
        marqueeDirection: "left",
        youtubeLink:
            "https://www.youtube.com/embed/DZ6q5X7fAmU?si=k3Mmbb5kRc9_E5yv",
    },
    {
        title: "Aaveg",
        displayState: false,
        marqueeDirection: "right",
        youtubeLink:
            "https://www.youtube.com/embed/R5MGusrjK1Q?si=FF26GAvO3VK5nmDg",
    },
    {
        title: "Crowd Work",
        displayState: false,
        marqueeDirection: "left",
        youtubeLink:
            "https://www.youtube.com/embed/uOAHix3zF-Q?si=ekOWBoCUF4eawF4m",
    },
    {
        title: "Pravah 2024 Logo Reveal",
        displayState: true,
        marqueeDirection: "right",
        youtubeLink:
            "https://www.youtube.com/embed/DZ6q5X7fAmU?si=k3Mmbb5kRc9_E5yv",
    },
    {
        title: "Pravah Tralier",
        displayState: false,
        marqueeDirection: "left",
        youtubeLink:
            "https://www.youtube.com/embed/DZ6q5X7fAmU?si=k3Mmbb5kRc9_E5yv",
    },
]

const EventMenuLinks = [
    {
        navLinkInfo: "Non Technical Events",
        navLinkTarget: "#nonTech"
    },
    {
        navLinkInfo: "Technical Events",
        navLinkTarget: "#tech"
    },
    {
        navLinkInfo: "Cultural Events",
        navLinkTarget: "#cultural"
    },
    {
        navLinkInfo: "Literary Events",
        navLinkTarget: "#literary"
    },
    {
        navLinkInfo: "Social Events",
        navLinkTarget: "#social"
    },
    {
        navLinkInfo: "Esports Events",
        navLinkTarget: "#esports"
    },

]

const priorEvents = [
    {
        eventName: "Paintball Arena",
        eventPhoto: celebrityNight,
    },
    {
        eventName: "Paintball Arena",
        eventPhoto: celebrityNight,
    },
    {
        eventName: "Paintball Arena",
        eventPhoto: celebrityNight,
    },
    {
        eventName: "Paintball Arena",
        eventPhoto: celebrityNight,
    },
    {
        eventName: "Paintball Arena",
        eventPhoto: celebrityNight,
    },
    {
        eventName: "Paintball Arena",
        eventPhoto: celebrityNight,
    },
    {
        eventName: "Paintball Arena",
        eventPhoto: celebrityNight,
    },
    {
        eventName: "Paintball Arena",
        eventPhoto: celebrityNight,
    }
]


const team = [
    {
      id: 1,
      img: 'https://randomuser.me/api/portraits/men/1.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      name: 'John Doe',
      speciality: 'Physics Teacher',
    },
    {
      id: 2,
      img: 'https://randomuser.me/api/portraits/women/2.jpg',
      quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Jane Smith',
      speciality: 'Mathematics Teacher',
    },
    {
      id: 3,
      img: 'https://randomuser.me/api/portraits/men/3.jpg',
      quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'Bob Johnson',
      speciality: 'Computer Science Teacher',
    },
    {
      id: 4,
      img: 'https://randomuser.me/api/portraits/women/4.jpg',
      quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      name: 'Alice Williams',
      speciality: 'English Teacher',
    },
    {
      id: 5,
      img: 'https://randomuser.me/api/portraits/men/5.jpg',
      quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Charlie Davis',
      speciality: 'History Teacher',
    },
    {
      id: 6,
      img: 'https://randomuser.me/api/portraits/women/6.jpg',
      quote: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      name: 'Eva Rodriguez',
      speciality: 'Chemistry Teacher',
    },
    {
      id: 7,
      img: 'https://randomuser.me/api/portraits/men/7.jpg',
      quote: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      name: 'Michael Brown',
      speciality: 'Biology Teacher',
    },
    {
      id: 8,
      img: 'https://randomuser.me/api/portraits/women/8.jpg',
      quote: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      name: 'Sophia Martinez',
      speciality: 'Physical Education Teacher',
    },
    {
      id: 9,
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      name: 'Daniel Lee',
      speciality: 'Coordinator',
    },
    {
      id: 10,
      img: 'https://randomuser.me/api/portraits/women/10.jpg',
      quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Emily Taylor',
      speciality: 'Coordinator',
    },
  ];
  

export {
    previousCelebrities,
    socialContact,
    majorEvents,
    glimpsesCard,
    EventMenuLinks,
    priorEvents,
    team
}
