import {
    jassigill, kumarvishwas, instagram, youtube, twitter, facebook, gajendra, shruti, ravindra, naushad, rawaz, thirak, dj, sur, celebrityNight, glimpse1, glimpse4, glimpse7, glimpse12, aaveg, aftermovie, logoreveal, football, volleyball, basketball, chess, carrom, cricket, tabletennis, tugofwar, kabbadi, badminton, cosplay, bhagirath, masterchef, clashofband, paintball, kavyanjali, trailer, artexhi, rapbazzi, startupexpo, personOne, nora, sunil
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
        celebrityName: "Nora Fatehi",
        celebrityPhoto: nora,
        celebrityYear: "",
    },
    {
        celebrityName: "Sunil Sethi",
        celebrityPhoto: sunil,
        celebrityYear: "",
    },
    {
        celebrityName: "Jassi Gill",
        celebrityPhoto: jassigill,
        celebrityYear: "",
    },
    {
        celebrityName: "Naushad Ali kawa",
        celebrityPhoto: naushad,
        celebrityYear: "",
    },


]

const socialContact = [
    {
        socialName: "Twitter",
        socialIcon: twitter,
        socialLink: "https://twitter.com/@pravah_skit"
    },
    {
        socialName: "Instagram",
        socialIcon: instagram,
        socialLink: "https://www.instagram.com/skitpravah/"
    },
    {
        socialName: "Facebook",
        socialIcon: facebook,
        socialLink: ""
    },
    {
        socialName: "YouTube",
        socialIcon: youtube,
        socialLink: "https://www.youtube.com/@skitpravah4946"
    },
]


const majorEvents = [
    {
        id: 'eventOne',
        imgUrl: thirak,
        title: 'Thirak',
        titleInfo: "Energetic dance competition following the theme 'Time Traverse'",
    },
    {
        id: 'eventTwo',
        imgUrl: dj,
        title: 'DJ Night',
        titleInfo: "bla bla bla. give me description. it's not my responsibility",
    },
    {
        id: 'eventThree',
        imgUrl: rawaz,
        title: 'Rawaz',
        titleInfo: "RAWAZ is an adorable Fashion Competion where fashion and theme collides.",
    },
    {
        id: 'eventFour',
        imgUrl: sur,
        title: 'Sur',
        titleInfo: "Amazing singing competition with best vocals of all times.",
    },
    {
        id: 'eventFive',
        imgUrl: celebrityNight,
        title: 'Celebrity Night',
        titleInfo: "bla bla bla. give me description. it's not my responsibility",
    },
];

const glimpsesCard = [
    {
        title: "Pravah 23 After Story",
        displayState: false,
        marqueeDirection: "left",
        thumbnail: aftermovie,
        youtubeLink: "https://youtu.be/V-094flkqjI?si=3I2KrRDReWjNbfxq",
    },
    {
        title: "Aaveg",
        displayState: false,
        marqueeDirection: "right",
        thumbnail: aaveg,
        youtubeLink: "",

    },
    {
        title: "Pravah 2024 Logo Reveal",
        displayState: true,
        marqueeDirection: "right",
        thumbnail: logoreveal,
        youtubeLink: "",

    },
    {
        title: "Pravah Tralier",
        displayState: false,
        marqueeDirection: "left",
        thumbnail: trailer,
        youtubeLink: "https://youtu.be/DyuUx1obJ_M?si=uOPCONycuEP8fEnW",

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
        eventName: "Rawaz",
        eventPhoto: rawaz,
    },
    {
        eventName: "Thirak",
        eventPhoto: thirak,
    },
    {
        eventName: "Sur",
        eventPhoto: sur,
    },
    {
        eventName: "Clash of Bands",
        eventPhoto: clashofband,
    },
    {
        eventName: "Startup Expo",
        eventPhoto: startupexpo,
    },
    {
        eventName: "Cosplay",
        eventPhoto: cosplay,
    },
    {
        eventName: "Bhagirath",
        eventPhoto: bhagirath,
    },
    {
        eventName: "Rap'arazzi",
        eventPhoto: rapbazzi,
    },
    {
        eventName: "Paintball Battleground",
        eventPhoto: paintball,
    },
    {
        eventName: "Art Exibition",
        eventPhoto: artexhi,
    },
    {
        eventName: "Kavyanjali",
        eventPhoto: kavyanjali,
    },
    {
        eventName: "Masterchef",
        eventPhoto: masterchef,
    },
    {
        eventName: "DJ Night",
        eventPhoto: dj,
    },
    {
        eventName: "Celebrity Night",
        eventPhoto: celebrityNight,
    }
]

const sponsorFormFields = [
    {
        fieldName: 'firstName',
        fieldLabel: 'First name',
        fieldType: 'text',
        fieldPlaceholder: 'First Name'
    },
    {
        fieldName: 'lastName',
        fieldLabel: 'Last name',
        fieldType: 'text',
        fieldPlaceholder: 'Last Name'
    },
    {
        fieldName: 'email',
        fieldLabel: 'Email',
        fieldType: 'email',
        fieldPlaceholder: 'Email id'
    },
    {
        fieldName: 'companyPost',
        fieldLabel: 'Company Post',
        fieldType: 'text',
        fieldPlaceholder: 'Company Post'
    },
    {
        fieldName: 'queries',
        fieldLabel: 'Queries',
        fieldType: 'textarea',
        fieldPlaceholder: 'Queries'
    },
    {
        fieldName: 'designation',
        fieldLabel: 'Designation',
        fieldType: 'text',
        fieldPlaceholder: 'Designation'
    },
    {
        fieldName: 'mobileNo',
        fieldLabel: 'Mobile No',
        fieldType: 'tel',
        fieldPlaceholder: 'Mobile No'
    },
    {
        fieldName: 'whereAreYouFrom',
        fieldLabel: 'Where are you from',
        fieldType: 'text',
        fieldPlaceholder: 'Where are you from'
    },
    {
        fieldName: 'companyAddress',
        fieldLabel: 'Company Address',
        fieldType: 'text',
        fieldPlaceholder: 'Company Address'
    },
    {
        fieldName: 'whatYouGonnaSponsor',
        fieldLabel: 'What you gonna Sponsor',
        fieldType: 'textarea',
        fieldPlaceholder: 'What you gonna Sponsor'
    },
];

// eventCategory = non_tect, tech, cultural, literary, social, esports
// eventType = Team, Individual

const eventCategoryDesc = [
    {
        eventCategoryName: "Non Technical Events",
        eventCategoryID: "non_tech"
    },
    {
        eventCategoryName: "Technical Events",
        eventCategoryID: "tech"
    },
    {
        eventCategoryName: "Cultural Events",
        eventCategoryID: "cultural"
    },
    {
        eventCategoryName: "Literary Events",
        eventCategoryID: "literary"
    },
    {
        eventCategoryName: "Social Events",
        eventCategoryID: "social"
    },
    {
        eventCategoryName: "Esports Events",
        eventCategoryID: "esports"
    },
]

const testEventDetails = [
    {
        eventName: "Paintball Battleground",
        eventPhotoLink: celebrityNight,
        eventCategoryID: "non_tech",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 10,
        eventMaxParicipationLimit: 80,
    },
    {
        eventName: "Paintball Battleground",
        eventPhotoLink: celebrityNight,
        eventCategoryID: "non_tech",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 80,
        eventMaxParicipationLimit: 80,
    },
    {
        eventName: "Startup Expo",
        eventPhotoLink: dj,
        eventCategoryID: "tech",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 80,
        eventMaxParicipationLimit: 80,
    },
    {
        eventName: "Sur",
        eventPhotoLink: dj,
        eventCategoryID: "cultural",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 2,
        eventMaxParicipationLimit: 80
    },
    {
        eventName: "TOGGLE",
        eventPhotoLink: dj,
        eventCategoryID: "literary",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 2,
        eventMaxParicipationLimit: 80
    },
    {
        eventName: "Bhagirath",
        eventPhotoLink: dj,
        eventCategoryID: "social",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 2,
        eventMaxParicipationLimit: 80
    },
    {
        eventName: "Valorant",
        eventPhotoLink: dj,
        eventCategoryID: "esports",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 2,
        eventMaxParicipationLimit: 80
    }
]

// eventRegStatus - live, closed, upcoming
const aavegEventDetails = [
    {
        eventName: "Badminton",
        eventPhotoLink: badminton,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Basketball",
        eventPhotoLink: basketball,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Chess",
        eventPhotoLink: chess,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Carrom",
        eventPhotoLink: carrom,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Football",
        eventPhotoLink: football,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Gully Circket",
        eventPhotoLink: cricket,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Table Tennis",
        eventPhotoLink: tabletennis,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Tug of War",
        eventPhotoLink: tugofwar,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Volleyball",
        eventPhotoLink: volleyball,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    },
    {
        eventName: "Kabbadi",
        eventPhotoLink: kabbadi,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    }

]

const pravahWebTeam = [
    {
        memberName: "@ChinmayBhatnagar",
        memberPhoto: personOne,
        memberIntroStack: "Frontend Developer",
        memberGithub: "",
        memberLinkedIn: "",
        memberPhone: "",
    },
    {
        memberName: "@PrashantSingh",
        memberPhoto: personOne,
        memberIntroStack: "MERN Stack Developer",
        memberGithub: "",
        memberLinkedIn: "",
        memberPhone: "",
    },
    {
        memberName: "@Jashan",
        memberPhoto: personOne,
        memberIntroStack: "Frontend Developer",
        memberGithub: "",
        memberLinkedIn: "",
        memberPhone: "",
    },
    {
        memberName: "@VishalKhandelwal",
        memberPhoto: personOne,
        memberIntroStack: "Backend Developer",
        memberGithub: "",
        memberLinkedIn: "",
        memberPhone: "",
    },
    {
        memberName: "@GauravSharma",
        memberPhoto: personOne,
        memberIntroStack: "Frontend Developer",
        memberGithub: "",
        memberLinkedIn: "",
        memberPhone: "",
    },
]

const centralWorkingCommittee = [
    {
        memberName: "Mr. Abhishek Gupta",
        memberPhoto: jassigill,
        memberPost: "Associate Professor",
        memberDepartment: "EE Department",
        memberPhone: "9079215052"
    },
    {
        memberName: "Mr. Abhishek Gupta",
        memberPhoto: jassigill,
        memberPost: "Associate Professor",
        memberDepartment: "EE Department",
        memberPhone: "9079215052"
    },
    {
        memberName: "Mr. Abhishek Gupta",
        memberPhoto: jassigill,
        memberPost: "Associate Professor",
        memberDepartment: "EE Department",
        memberPhone: "9079215052"
    },
    {
        memberName: "Mr. Abhishek Gupta",
        memberPhoto: jassigill,
        memberPost: "Associate Professor",
        memberDepartment: "EE Department",
        memberPhone: "9079215052"
    },
    {
        memberName: "Mr. Abhishek Gupta",
        memberPhoto: jassigill,
        memberPost: "Associate Professor",
        memberDepartment: "EE Department",
        memberPhone: "9079215052"
    }
]

const coreTeam = [
    {
        memberName: "Prashant Singh",
        memberPhoto: jassigill,
        memberPost: "Web Team",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "9079215052"
    },
    {
        memberName: "Prashant Singh",
        memberPhoto: jassigill,
        memberPost: "Web Team",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "9079215052"
    },
    {
        memberName: "Prashant Singh",
        memberPhoto: jassigill,
        memberPost: "Web Team",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "9079215052"
    },
    {
        memberName: "Prashant Singh",
        memberPhoto: jassigill,
        memberPost: "Web Team",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "9079215052"
    },
    {
        memberName: "Prashant Singh",
        memberPhoto: jassigill,
        memberPost: "Web Team",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "9079215052"
    },
]




export {

    previousCelebrities,
    socialContact,
    majorEvents,
    glimpsesCard,
    EventMenuLinks,
    priorEvents,
    sponsorFormFields,
    testEventDetails,
    eventCategoryDesc,
    aavegEventDetails,
    pravahWebTeam,
    centralWorkingCommittee,
    coreTeam
}



