import {
    jassigill, kumarvishwas, instagram, youtube, twitter, facebook, gajendra, shruti, ravindra, naushad, rawaz, thirak, dj, sur, 
    celebrityNight, aaveg, aftermovie, logoreveal, football, volleyball, basketball, chess, carrom, cricket, tabletennis, tugofwar, 
    kabbadi, badminton, cosplay, bhagirath, masterchef, clashofband, paintball, kavyanjali, trailer, artexhi, rapbazzi, startupexpo, 
    nora, sunil, chinmay, gaurav, prashant, jashan, vishal, nushrat, glimpse10, glimpse9,
    sur1, sur2, sur3, sur4, sur5, sur6, sur7, sur8, sur9, sur10, sur11, sur12, sur13, sur14, sur15, sur16, sur17,
    rawaz1, rawaz2, rawaz3, rawaz4, rawaz5, rawaz6, rawaz8, rawaz9, rawaz10, rawaz11, rawaz12, rawaz13, rawaz14, rawaz15, rawaz16, 
    rawaz17, rawaz18, rawaz19, thirak1, thirak2, thirak4, thirak5, thirak6, thirak8, thirak9, thirak11, thirak12, thirak13, thirak14, 
    thirak15, thirak16, thirak17, thirak18, thirak19, dj1, dj2, dj3, dj4, dj5, dj6, dj7, dj8, dj9, dj10, dj11, cn1, cn2, cn3, cn4, 
    cn5, cn6, cn7, cn8, cn9, cn10, cn11, cn12, marhala, dummy, chinmayPhoto, devikPhoto, kanishkPhoto, kshitijPhoto, paridhiPhoto, abhishekPhoto, virendraPhoto, ankushPhoto, deeptiPhoto, poojaPhoto, avadheshPhoto, anirudhPhoto, maneeshaPhoto, nitinPhoto, naveenPhoto, kailash, akshat, rishika, archi, hardik, anirudh_core, aman, anantPhoto, ananya, anushka, escaperoom, screamandchill, cubecraze, essaywriting, youthtalk, circuit, bytechase, vstock, bgmi
} from "./public/index"

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
        celebrityName: "Nushrratt Bharuccha",
        celebrityPhoto: nushrat,
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
        celebrityName: "Sunil Shetty",
        celebrityPhoto: sunil,
        celebrityYear: "",
    },
    {
        celebrityName: "Jassie Gill",
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
        eventLink: "/majorEvents/thirak"
    },
    {
        id: 'eventTwo',
        imgUrl: dj,
        title: 'DJ Night',
        eventLink: "/majorEvents/dj_night"
    },
    {
        id: 'eventThree',
        imgUrl: rawaz,
        title: 'Rawaz',
        eventLink: "/majorEvents/rawaz"
    },
    {
        id: 'eventFour',
        imgUrl: sur,
        title: 'Sur',
        eventLink: "/majorEvents/sur"
    },
    {
        id: 'eventFive',
        imgUrl: celebrityNight,
        title: 'Celebrity Night',
        eventLink: "/majorEvents/celebrity_night"
    },
];

const glimpsesCard = [
    {
        title: "Pravah 23 After Story",
        displayState: false,
        thumbnail: aftermovie,
        youtubeLink: "https://youtu.be/V-094flkqjI?si=3I2KrRDReWjNbfxq",
    },
    {
        title: "Aaveg",
        displayState: false,
        thumbnail: aaveg,
        youtubeLink: "",

    },
    {
        title: "Pravah 2024 Logo Reveal",
        displayState: true,
        thumbnail: logoreveal,
        youtubeLink: "https://www.youtube.com/embed/DyuUx1obJ_M?si=UnMiaFsxONMeLVp0",

    },
    {
        title: "Pravah Trailer",
        displayState: false,
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
        eventName: "Marhala",
        eventPhoto: marhala,
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
        fieldName: 'mobileNo',
        fieldLabel: 'Mobile No',
        fieldType: 'tel',
        fieldPlaceholder: 'Mobile No'
    },
    {
        fieldName: 'email',
        fieldLabel: 'Email ID',
        fieldType: 'email',
        fieldPlaceholder: 'Email ID'
    },
    {
        fieldName: 'companyName',
        fieldLabel: 'Company Name',
        fieldType: 'text',
        fieldPlaceholder: 'Company Name'
    },
    {
        fieldName: 'designation',
        fieldLabel: 'Designation',
        fieldType: 'text',
        fieldPlaceholder: 'Designation'
    },
    {
        fieldName: 'companyFullAddress',
        fieldLabel: 'Company Full Address',
        fieldType: 'text',
        fieldPlaceholder: 'Company Full Address'
    },
    {
        fieldName: 'Monetary/NonMonetary',
        fieldLabel: 'Monetary / Non Monetary',
        fieldType: 'dropdown',
        fieldPlaceholder: 'Monetary / Non Monetary'
    },
    {
        fieldName: 'queries',
        fieldLabel: 'Queries',
        fieldType: 'textarea',
        fieldPlaceholder: 'Describe your Queries'
    },
    {
        fieldName: 'YourConsent',
        fieldLabel: 'Your consent',
        fieldType: 'textarea',
        fieldPlaceholder: 'Describe here'
    },
];

const sponsorFormContact = [
    {
        memberName: "Devik Rathore",
        memberPhoto: jassigill,
        memberPhone: "8000342116",
        memberLinkedIn: "https://www.linkedin.com/in/devik-rathore-a882a11b4"

    },
    {
        memberName: "Ayush Agarwal",
        memberPhoto: jassigill,
        memberPhone: "9828074219",
        memberLinkedIn: "https://www.linkedin.com/in/ayush-agarwal-038863254"

    },
    {
        memberName: "Archi Rathore",
        memberPhoto: jassigill,
        memberPhone: "6375061517",
        memberLinkedIn: "https://www.linkedin.com/in/aarchi-rathore-a703a7258"

    },
    {
        memberName: "Aman Joshi",
        memberPhoto: jassigill,
        memberPhone: "8764401145",
        memberLinkedIn: "https://www.linkedin.com/in/aman-joshi-060340296"

    },
]

// eventCategory = non_tech, tech, cultural, literary, social, esports
// eventType = Team, Individual

const eventCategoryDesc = [
    {
        eventCategoryName: "Cultural Events",
        eventCategoryID: "cultural",
        eventCategoryPhoto:[sur, rawaz, clashofband, thirak]
    },
    {
        eventCategoryName: "Technical Events",
        eventCategoryID: "tech",
        eventCategoryPhoto:[vstock,bytechase, circuit,startupexpo]
    },
    {
        eventCategoryName: "Non Technical Events",
        eventCategoryID: "non-tech",
        eventCategoryPhoto:[tugofwar,escaperoom,screamandchill,cubecraze]
    },
    {
        eventCategoryName: "Literary Events",
        eventCategoryID: "literary",
        eventCategoryPhoto:[essaywriting,kavyanjali,youthtalk]
    },
    {
        eventCategoryName: "Social Events",
        eventCategoryID: "social",
        eventCategoryPhoto:[bhagirath, marhala]
    },
    {
        eventCategoryName: "Esports Events",
        eventCategoryID: "esports",
        eventCategoryPhoto:[bgmi]
    },
]

const testEventDetails = [
    {
        eventName: "Paintball Arena",
        eventPhotoLink: dj,
        eventCategoryID: "non_tech",
        eventType: "Team",
        eventRegistrationFee: "200",
        eventDate: "20th November, 2023",
        eventTime: "06:00 PM - 08:00 PM",
        eventVenue: "Football Ground",
        eventCurrentParticipation: 50,
        eventMaxParicipationLimit: 80,
    },
    {
        eventName: "Paintball Arena",
        eventPhotoLink: dj,
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
        eventName: "Kabaddi",
        eventPhotoLink: kabbadi,
        eventRegStatus: "upcoming",
        eventBrochureLink: "/",
    }

]

const pravahWebTeam = [
    {
        memberName: "@ChinmayBhatnagar",
        memberPhoto: chinmay,
        memberIntroStack: "Full Stack Developer",
        memberGithub: "https://github.com/ChinmayBhatnagar",
        memberLinkedIn: "https://www.linkedin.com/in/chinmay-bhatnagar-4140a424a/",
        memberPhone: "7976227748",
    },
    {
        memberName: "@PrashantSingh",
        memberPhoto: prashant,
        memberIntroStack: "MERN Stack Developer",
        memberGithub: "https://github.com/Prashant-S29",
        memberLinkedIn: "https://www.linkedin.com/in/prashant-singh-529391250/",
        memberPhone: "9079215052",
    },
    {
        memberName: "@Jashan",
        memberPhoto: jashan,
        memberIntroStack: "Frontend Developer",
        memberGithub: "https://github.com/jashan-bhayana",
        memberLinkedIn: "https://www.linkedin.com/in/jashan-bhayana-6b1348226/",
        memberPhone: "9680433825",
    },
    {
        memberName: "@VishalRawat",
        memberPhoto: vishal,
        memberIntroStack: "Backend Developer",
        memberGithub: "https://github.com/Vicky2114",
        memberLinkedIn: "https://www.linkedin.com/in/vishal-rawat-13739823a",
        memberPhone: "9376744239",
    },
    // {
    //     memberName: "@GauravSharma",
    //     memberPhoto: gaurav,
    //     memberIntroStack: "Frontend Developer",
    //     memberGithub: "https://github.com/gauravsharma25404",
    //     memberLinkedIn: "https://www.linkedin.com/in/gaurav-sharma-476173229/",
    //     memberPhone: "8690574054",
    // },
]

const centralWorkingCommittee = [
    {
        memberName: "Mr. Abhishek Gupta",
        memberPhoto: abhishekPhoto,
        memberPost: "Associate Professor",
        memberDepartment: "Department of Electrical Engineering ",
        memberPhone: "9079215052",
        memberMail:"abhigupta@skit.ac.in"
    },
    {
        memberName: "Dr. Virendra Sangtani",
        memberPhoto: virendraPhoto,
        memberPost: "Associate Professor",
        memberDepartment: "Department of Electrical Engineering ",
        memberPhone: "9799884938",
        memberMail:"virendra.sangtani@skit.ac.in"
    },
    {
        memberName: "Mr. Ankush Tandon",
        memberPhoto: ankushPhoto,
        memberPost: "Associate Professor",
        memberDepartment: "Department of Electrical Engineering ",
        memberPhone: "9460066186",
        memberMail:"ankush@skit.ac.in"
    },
    {
        memberName: "Mr. Kailash Soni",
        memberPhoto: kailash,
        memberPost: "Associate Professor",
        memberDepartment: "Department of Computer Science and Engineering",
        memberPhone: "9460066186",
        memberMail:"virendra.sangtani@skit.ac.in"
    },
    {
        memberName: "Dr. Maneesha Kaushik",
        memberPhoto: maneeshaPhoto,
        memberPost: "Associate Professor",
        memberDepartment: "Department of Management Studies",
        memberPhone: "9785381999",
        memberMail:"maneesha.kaushik@skit.ac.in"
    },
    {
        memberName: "Mrs. Deepti Arela",
        memberPhoto: deeptiPhoto,
        memberPost: "Assistant Professor",
        memberDepartment: "Department of Electrical Engineering ",
        memberPhone: "9929417474",
        memberMail:"deepti.arela@skit.ac.in"
    },
    {
        memberName: "Mr. Nitin Goyal",
        memberPhoto: nitinPhoto,
        memberPost: "Assistant Professor",
        memberDepartment: "Department of Mechanical Engineering ",
        memberPhone: "9799884938",
        memberMail:"nitin.goyal@skit.ac.in"
    },
    {
        memberName: "Dr. Pooja Jain",
        memberPhoto: poojaPhoto,
        memberPost: "Associate Professor",
        memberDepartment: "Department of Electrical Engineering ",
        memberPhone: "9785050506",
        memberMail:"pooja@skit.ac.in"
    },
    {
        memberName: "Mr. Naveen Kumar Sain",
        memberPhoto: naveenPhoto,
        memberPost: "Assistant Professor",
        memberDepartment: "Department of Mechanical Engineering ",
        memberPhone: "9413065501",
        memberMail:"naveen.sain@skit.ac.in"
    },
    {
        memberName: "Mr. Anirudh Mathur",
        memberPhoto: anirudhPhoto,
        memberPost: "Associate Professor",
        memberDepartment: "Department of Civil Engineering ",
        memberPhone: "7891993999",
        memberMail:"anirudh.mathur@skit.ac.in"
    },
    {
        memberName: "Mr. Avadhesh Sharma",
        memberPhoto: avadheshPhoto,
        memberPost: "Assistant Professor",
        memberDepartment: "Department of Electrical Engineering ",
        memberPhone: "9783840829",
        memberMail:"avadhesh@skit.ac.in"
    },
]

const coreTeam = [
    {
        memberName: "Chinmay Bhatnagar",
        memberPhoto: chinmayPhoto,
        memberPost: "",
        memberDepartment: "3rd Yr - IT",
        memberPhone: "7976227748",
        memberMail:"chinmaybhatnagar2002@gmail.com"
    },
    {
        memberName: "Devik Rathore",
        memberPhoto: devikPhoto,
        memberPost: "",
        memberDepartment: "2nd Yr - EE",
        memberPhone: "8000342116",
        memberMail:"devikrathore123@gmail.com"
    }, 
    {
        memberName: "Kanishk Bharadwaj",
        memberPhoto: kanishkPhoto,
        memberPost: "",
        memberDepartment: "3rd Yr - CE",
        memberPhone: "8949294354",
        memberMail:"kannu.sharmabtp@gmail.com"
    },
    {
        memberName: "Paridhi Jain",
        memberPhoto: paridhiPhoto,
        memberPost: "",
        memberDepartment: "2nd Yr - IT",
        memberPhone: "9929425337",
        memberMail:"jain04paridhi@gmail.com"
    },
    {
        memberName: "Anushka Singh Sisodia",
        memberPhoto: anushka,
        memberPost: "",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "7976971372",
        memberMail:"singhanushka0605@gmail.com"
    },
    {
        memberName: "Anirudh Singh Naruka",
        memberPhoto: anirudh_core,
        memberPost: "",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "7357418512",
        memberMail:"anisingh1304@gmail.com"
    },
    {
        memberName: "Aman Joshi",
        memberPhoto: aman,
        memberPost: "",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "8764401145",
        memberMail:"joshiamancchs@gmail.com"
    },
    {
        memberName: "Ananya Singh Choudhary",
        memberPhoto: ananya,
        memberPost: "",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "9929482611",
        memberMail:"ananysingh268@gmail.com"
    },
    {
        memberName: "Anant khandelwal",
        memberPhoto: anantPhoto,
        memberPost: "",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "8209172026",
        memberMail:"anantk.k.15@gmail.com"
    },
    {
        memberName: "Archi Rathore",
        memberPhoto: archi,
        memberPost: "",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "6375061517",
        memberMail:"aarchirathore13@gmail.com"
    },
    {
        memberName: "Kshitij Agrawal",
        memberPhoto: kshitijPhoto,
        memberPost: "",
        memberDepartment: "2nd Yr - IT",
        memberPhone: "7877598110",
        memberMail:"kshitijagrawal53@gmail.com"
    },
    {
        memberName: "Akshat Tanwar",
        memberPhoto: akshat,
        memberPost: "",
        memberDepartment: "3rd Yr - IT",
        memberPhone: "7340062629",
        memberMail:"akshat21042004@gmail.com"
    },
    {
        memberName: "Hardik Agarwal",
        memberPhoto: hardik,
        memberPost: "",
        memberDepartment: "2nd Yr - CSE",
        memberPhone: "8619658589",
        memberMail:"b220518@skit.ac.in"
    },
    {
        memberName: "Rishika Bansal",
        memberPhoto: rishika,
        memberPost: "",
        memberDepartment: "4th Yr - CSE",
        memberPhone: "8058654258",
        memberMail:"bansalrishika25@gmail.com"
    },
]

const majorEventCards = [

    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: nora
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: dj
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: sur
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: volleyball
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: masterchef
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: masterchef
    },
    {
        cardType: "video",
        cardID: "thirak",
        cardItemLink: "https://res.cloudinary.com/demo/video/upload/ski_jump.mp4"
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: dj
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: sur
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: volleyball
    },
    {
        cardType: "video",
        cardID: "thirak",
        cardItemLink: "https://res.cloudinary.com/demo/video/upload/ship.mp4"
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: masterchef
    },
    {
        cardType: "video",
        cardID: "thirak",
        cardItemLink: "https://res.cloudinary.com/demo/video/upload/dog.mp4"
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: dj
    },
    {
        cardType: "video",
        cardID: "thirak",
        cardItemLink: "https://res.cloudinary.com/demo/video/upload/docs/sunglasses.mp4"
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: sur
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: glimpse10
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: glimpse9
    },
    {
        cardType: "image",
        cardID: "thirak",
        cardItemLink: volleyball
    },
    {
        cardType: "video",
        cardID: "thirak",
        cardItemLink: "https://res.cloudinary.com/demo/video/upload/ship.mp4"
    },
]

const surImages = [
    sur7,
    sur12,
    sur9,
    sur14,
    sur1,
    sur16,
    sur6,
    sur3,
    sur4,
    sur17,
    sur11,
    sur5,
    sur13,
    sur2,
    sur8,
    sur15,
    sur10
]

const rawazImages = [
    rawaz1,
    rawaz6,
    rawaz11,
    rawaz15,
    rawaz3,
    rawaz18,
    rawaz9,
    rawaz12,
    rawaz2,
    rawaz5,
    rawaz4,
    rawaz8,
    rawaz17,
    rawaz14,
    rawaz13,
    rawaz16,
    rawaz19

]

const thirakImages = [
    thirak1, thirak2, thirak4, thirak5, thirak6, thirak8, thirak9, thirak11, thirak12, thirak13, thirak14, thirak15, thirak16, thirak17, thirak18, thirak19
]

const djImages = [
    dj1, dj2, dj3, dj4, dj5, dj6, dj7, dj8, dj9, dj10, dj11
]

const celebrity_night = [
    cn1, cn2, cn3, cn4, cn5, cn6, cn7, cn8, cn9, cn10, cn11, cn12
]

export {
    sponsorFormContact,
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
    coreTeam,
    majorEventCards,
    surImages,
    rawazImages,
    thirakImages,
    djImages,
    celebrity_night
}

