import React from "react"
import img1 from "../img/client-1.jpg"
import img2 from "../img/client-2.jpg"
import img3 from "../img/client-4.jpg"
import img4 from "../img/client-5.jpg"
import img5 from "../img/can-5.png"
import img6 from "../img/can-2.png"
import img7 from "../img/can-3.png"

const FreelancerData = [
    {
        id: 0,
        name:"Janelia Fragrintio",
        designation:"Full Stack PHP Developer",
        profile:img2,
        place: "Mack Star",
        location:"United Kingdom",
        availability:"Full Time",
        age:27,
        phone:"",
        experience:"5 Years",
        description:[
            {
                p1: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium\n" +
                    "                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint\n" +
                    "                                    occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt\n" +
                    "                                    mollitia animi, id est laborum et dolorum fuga.",
                p2:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum\n" +
                    "                                    soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime\n" +
                    "                                    placeat facere possimus.",
                p3:"Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum\n" +
                    "                                    soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime\n" +
                    "                                    placeat facere possimus."
            }
        ],
        rating:"4.2",
        verified:true,
        skills:[ "PHP","Android","HTML","CSS3","Photoshop","Wordpress","JavaScript"],
        hourlyRate:44,
        jobsDone:70,
        rehired:10,
        languages:["English","French","Dutch"],
        portfolio:
            {
                web:"www.mywebsite.com",
                blog:"My blog",
                portfolio:"my Portfolio",
                facebook:"fa fa-facebook",
                linkedin:"fa fa-linkedin",
                pinterest:"fa fa-pinterest",
                instagram:"fa fa-instagram",
                twitter:"fa fa-twitter"
            },

        online:true,
        reviews:[
            {
                imgSrc:img1,
                clientName:"Daniel Luke",
                tagline:"Web Developer",
                time:"3 days ago",
                message:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n" +
                    "                    praesentium voluptatum deleniti atque corrupti quos dolores et quas\n" +
                    "                    molestias excepturi sint occaecati cupiditate non provident, similique sunt\n" +
                    "                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum\n" +
                    "                    fuga."
            },
            {
                imgSrc:img2,
                clientName:"Ned Stark",
                tagline:"App Developer",
                time:"5 days ago",
                message:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n" +
                    "                    praesentium voluptatum deleniti atque corrupti quos dolores et quas\n" +
                    "                    molestias excepturi sint occaecati cupiditate non provident, similique sunt\n" +
                    "                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum\n" +
                    "                    fuga."
            },
            {
                imgSrc:img3,
                clientName:"Jon Snow",
                tagline:"Web Developer",
                time:"10 days ago",
                message:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n" +
                    "                    praesentium voluptatum deleniti atque corrupti quos dolores et quas\n" +
                    "                    molestias excepturi sint occaecati cupiditate non provident, similique sunt\n" +
                    "                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum\n" +
                    "                    fuga."
            },
            {
                imgSrc:img4,
                clientName:"Daniel Luke",
                tagline:"App Developer",
                time:"15 days ago",
                message:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis\n" +
                    "                    praesentium voluptatum deleniti atque corrupti quos dolores et quas\n" +
                    "                    molestias excepturi sint occaecati cupiditate non provident, similique sunt\n" +
                    "                    in culpa qui officia deserunt mollitia animi, id est laborum et dolorum\n" +
                    "                    fuga."
            }
        ]
    },
    {
        id:1,
        name:"Agustin L. Smith",
        designation:"At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
        profile:img1,
        place: "",
        location:"Australia",
        availability:"Available",
        age:20,
        phone:"",
        experience:"",
        description:"",
        rating:"",
        verified:true,
        skills:["PHP", "Android", "HTML"],
        hourlyRate:17,
        jobsDone:70,
        rehired:10,
        languages:[],
        portfolio:[
            {
                web:"",
                blog:"",
                portfolio:"",
                facebook:"",
                linkdin:"",
                pintererst:"",
                instagram:"",
                twitter:""
            }
        ],
        online:true,
        reviews:[
            {
                clientName:"",
                tagline:"",
                time:"",
                message:""
            }
        ]
    },
    {
        id:2,
        name:"Delores R. Williams",
        designation:"At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
        profile:img4,
        place: "",
        location:"United States",
        availability:"At Work",
        age:20,
        phone:"",
        experience:"",
        description:"",
        rating:"",
        verified:true,
        skills:["PHP", "Android", "HTML"],
        hourlyRate:22,
        jobsDone:70,
        rehired:10,
        languages:[],
        portfolio:[
            {
                web:"",
                blog:"",
                portfolio:"",
                facebook:"",
                linkdin:"",
                pintererst:"",
                instagram:"",
                twitter:""
            }
        ],
        online:true,
        reviews:[
            {
                clientName:"",
                tagline:"",
                time:"",
                message:""
            }
        ]
    },
    {
        id:3,
        name:"Daniel Disroyer",
        designation:"At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
        profile:img3,
        place: "",
        location:"Bangladesh",
        availability:"Available",
        age:20,
        phone:"",
        experience:"",
        description:"",
        rating:"",
        verified:true,
        skills:["PHP", "Android", "HTML"],
        hourlyRate:19,
        jobsDone:70,
        rehired:10,
        languages:[],
        portfolio:[
            {
                web:"",
                blog:"",
                portfolio:"",
                facebook:"",
                linkdin:"",
                pintererst:"",
                instagram:"",
                twitter:""
            }
        ],
        online:true,
        reviews:[
            {
                clientName:"",
                tagline:"",
                time:"",
                message:""
            }
        ]
    },
    {
        id:4,
        name:"Nancy D. Walker",
        designation:"At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
        profile:img2,
        place: "",
        location:"Indonesia",
        availability:"Busy",
        age:20,
        phone:"",
        experience:"",
        description:"",
        rating:"",
        verified:true,
        skills:["PHP", "Android", "HTML"],
        hourlyRate:32,
        jobsDone:70,
        rehired:10,
        languages:[],
        portfolio:[
            {
                web:"",
                blog:"",
                portfolio:"",
                facebook:"",
                linkdin:"",
                pintererst:"",
                instagram:"",
                twitter:""
            }
        ],
        online:true,
        reviews:[
            {
                clientName:"",
                tagline:"",
                time:"",
                message:""
            }
        ]
    },
    {
        id:5,
        name:"Larry A. Sherrod",
        designation:"At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
        profile:img1,
        place: "",
        location:"India",
        availability:"Available",
        age:20,
        phone:"",
        experience:"",
        description:"",
        rating:"",
        verified:true,
        skills:["PHP", "Android", "HTML"],
        hourlyRate:25,
        jobsDone:70,
        rehired:10,
        languages:[],
        portfolio:[
            {
                web:"",
                blog:"",
                portfolio:"",
                facebook:"",
                linkdin:"",
                pintererst:"",
                instagram:"",
                twitter:""
            }
        ],
        online:true,
        reviews:[
            {
                clientName:"",
                tagline:"",
                time:"",
                message:""
            }
        ]
    },
    {
        id:6,
        name:"Eva J. Simmon",
        designation:"At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
        profile:img4,
        place: "",
        location:"Australia",
        availability:"No Available",
        age:20,
        phone:"",
        experience:"",
        description:"",
        rating:"",
        verified:true,
        skills:["PHP", "Android", "HTML"],
        hourlyRate:29,
        jobsDone:70,
        rehired:10,
        languages:[],
        portfolio:[
            {
                web:"",
                blog:"",
                portfolio:"",
                facebook:"",
                linkdin:"",
                pintererst:"",
                instagram:"",
                twitter:""
            }
        ],
        online:true,
        reviews:[
            {
                clientName:"",
                tagline:"",
                time:"",
                message:""
            }
        ]
    },
    {
        id:7,
        name:"George M. Johnson",
        designation:"At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
        profile:img3,
        place: "",
        location:"Australia",
        availability:"Available",
        age:20,
        phone:"",
        experience:"",
        description:"",
        rating:"",
        verified:true,
        skills:["PHP", "Android", "HTML"],
        hourlyRate:17,
        jobsDone:70,
        rehired:10,
        languages:[],
        portfolio:[
            {
                web:"",
                blog:"",
                portfolio:"",
                facebook:"",
                linkdin:"",
                pintererst:"",
                instagram:"",
                twitter:""
            }
        ],
        online:true,
        reviews:[
            {
                clientName:"",
                tagline:"",
                time:"",
                message:""
            }
        ]
    },
    {
        id:8,
        name:"Ray D. Ramirez",
        designation:"At vero eos et accusamus et iusto odio dignissimos ducimus qui.",
        profile:img1,
        place: "",
        location:"Canada",
        availability:"Available",
        age:20,
        phone:"",
        experience:"",
        description:"",
        rating:"",
        verified:true,
        skills:["PHP", "Android", "HTML"],
        hourlyRate:47,
        jobsDone:70,
        rehired:10,
        languages:[],
        portfolio:[
            {
                web:"",
                blog:"",
                portfolio:"",
                facebook:"",
                linkdin:"",
                pintererst:"",
                instagram:"",
                twitter:""
            }
        ],
        online:true,
        reviews:[
            {
                clientName:"",
                tagline:"",
                time:"",
                message:""
            }
        ]
    }
]

const StarRatingData = [
    {
        icon: 'fa fa-star fill'
    },
    {
        icon: 'fa fa-star fill'
    },
    {
        icon: 'fa fa-star fill'
    },
    {
        icon: 'fa fa-star fill'
    },
    {
        icon: 'fa fa-star-half fill'
    }
]

const SimilarProfileData = [
    {
        ImgSrc: img5,
        name: "Adam Crivatinly",
        designation: "Web Developer",
        occupation: "Freelancer"
    },
    {
        ImgSrc: img6,
        name: "Adam Creek",
        designation: "App Developer",
        occupation: "Freelancer"
    },
    {
        ImgSrc: img7,
        name: "Adam Sandler",
        designation: "Python Developer",
        occupation: "Freelancer"
    }

]

const SocialShareData = [
    {
        facebook: "fa fa-facebook",
        twitter: "fa fa-twitter",
        instagram: "fa fa-instagram",
        gplus: "fa fa-google-plus",
        linkedin: "fa fa-linkedin",
        beshare: "fa fa-behance"
    }
]

const Freelancer2InnerHeaderData = [
    {
        heading:"Hire The Best UI Specialists",
        tagline:"Work with the world’s best talent on Upwork — the top freelancing website trusted by over 5\n" +
            "                        million businesses."
    }
]

export {FreelancerData, StarRatingData, SimilarProfileData, SocialShareData, Freelancer2InnerHeaderData}

