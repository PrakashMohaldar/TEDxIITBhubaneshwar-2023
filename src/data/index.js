// data for logo
import logoLight from '../assets/images/logo.png'

// data for slider
// import sliderOne02 from "../assets/images/slider/1.2.png";
import sliderOne02 from "../assets/images/slider/overlay1.png";
import sliderOne01 from "../assets/images/slider/4.2.png";
// import sliderOne01 from "../assets/images/slider/easy.jpg";
// import sliderOne02 from "../assets/images/slider/without_watermark2_big.jpg";



// data for speaker cards
import speaker01 from "../assets/images/current_speakers/sandeep_jain_img.jpg";
import speaker02 from "../assets/images/current_speakers/manya_singh_img.jpg";
import speaker03 from "../assets/images/current_speakers/vandana_sharma_img.jpg";
import speaker04 from "../assets/images/current_speakers/satyanarayan_kuchibatla_img.jpg";
// import speaker05 from "../assets/images/current_speakers/swapnil_mishra_img.jpg";
import speaker06 from "../assets/images/current_speakers/satya_narayan_img.jpg";

//  data for previous speaker cards
import portfolio01 from "../assets/images/previous_speaker/naveli_deshmukh_img.jpg";
import portfolio02 from "../assets/images/previous_speaker/ajay_kumar_img.jpg";
import portfolio03 from "../assets/images/previous_speaker/anwesha_mishra_img.jpg";
import portfolio04 from "../assets/images/previous_speaker/revant_himmatsingka_img.jpg";
import portfolio05 from "../assets/images/previous_speaker/swayam_prakash_baral_img.jpg";
import portfolio06 from "../assets/images/previous_speaker/aditi_sharma_img.jpg";
import portfolio07 from "../assets/images/previous_speaker/sushant_verma_img.jpg";
import portfolio08 from "../assets/images/previous_speaker/sanjana_sanghi_img.jpg";
import portfolio09 from "../assets/images/previous_speaker/jagdish_chaturvedi_img.jpg";
import portfolio10 from "../assets/images/previous_speaker/anuj_tiwari_img.jpg";
import portfolio11 from "../assets/images/previous_speaker/rohit_suraj_img.jpg";

// data for about-theme
import aboutTheme01 from "../assets/images/about_theme/rising_img1.jpg";
import aboutTheme02 from "../assets/images/about_theme/rising_img2.jpg";

// data for about-ted
import aboutTed01 from "../assets/images/about_ted_tedx/about_ted_img.jpg";
import aboutTed02 from "../assets/images/about_ted_tedx/about_tedx_img.jpg";

// data for partners
import partner01 from "../assets/images/partners/1.png";

// data for team
import prakash from "../assets/images/organizers/prakash_img.jpg";
import shishir from "../assets/images/organizers/Sishir_muppidi_img.jpg";
import shreya from "../assets/images/organizers/shreya_img.jpg";
import shikhar from "../assets/images/organizers/Shikhar_img.jpg";
import satyansh from "../assets/images/organizers/Satyansh_img.jpg";
import nischal from "../assets/images/organizers/Nischal_img.jpg";
import mohith from "../assets/images/organizers/mohith_senapathi_img.jpg";
import koushik from "../assets/images/organizers/koushik_img.jpg";
import kalyan from "../assets/images/organizers/kaylan_img.jpg";
import katkam from "../assets/images/organizers/katkam_teja_img.jpg";
import karthikey from "../assets/images/organizers/karthikey_img.jpg";
import navya from "../assets/images/organizers/jasthi_navya_img.jpg";
import girish from "../assets/images/organizers/girish_img.jpg";
import dazmini from "../assets/images/organizers/dazmini_img.jpg";
import lavanya from "../assets/images/organizers/Bula Lavanya_img.jpg";
import aditya from "../assets/images/organizers/Aditya_img.jpg";
import abhiram from "../assets/images/organizers/Abhiram_img.jpg";

export const LogoImage = {
  light: logoLight,
};

export const NavLinks = [
  {
    name: "Theme",
    url: "abTheme"
  },
  {
    name: "About Tedx",
    url: "tedx",
  },
  {
    name: "Speakers",
    url: "speakers",
  },
  {
    name: "Reasons to Attend?",
    url: "reasons",
  },
  {
    name: "Organizers",
    url: "organizers"
  },
  {
    name: "Venue",
    url: "venue",
  },
];




export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "WISSENAIRE brings to you",
    title: `TEDx IIT Bhubaneswar\n Live in `,
    button: {
      label: "DISCOVER MORE",
      url: "abTheme"
    }
  },
  {
    image: sliderOne02,
    subTitle: "WISSENAIRE brings to you",
    title: `Tedx IIT Bhubaneswar\n Live in `,
    button: {
      label: "DISCOVER MORE",
      url: "abTheme"
    }
  }
];

export const ThemeData  = {
  sectionContent: {
    title: "RISING THROUGH RESILIENCE",
    subTitle: "TEDx-2023 Theme",
    text:
      "Life is full of challenges and setbacks, and it is easy to feel discouraged and like giving up when faced with these obstacles. However, it is during these tough times that we can rise and prove to ourselves and others that we are capable of overcoming adversity. One key to rising in the face of challenges is to stay positive and keep a growth mindset. This means believing that we can learn and grow from our mistakes and setbacks and that we can improve and succeed. It's important to focus on the progress we have made rather than dwelling on our failures. Ultimately, rising in the face of challenges requires perseverance and hard work. It won’t always be easy, but it will be worth it in the end. By facing our challenges head-on and working towards our goals with determination, we can rise and achieve success."
  },
  gallery: [aboutTheme01, aboutTheme02]
};


export const SpeakerData = {
  sectionContent: {
    title: "Meet Our Speakers",
    subTitle: "",
    text:"Speakers sharing their passions and bringing inspiring stories of \n overcoming adversity to the main stage"
  },
  posts: [
    {
      image: speaker01,
      name: "Sandeep Jain",
      designation: "Founder & CEO, GEEKS FOR GEEKS",
      index:100,
      url: "/#",
      socials: [
        {
          name: "Instagram",
          url: "https://instagram.com/sandeep_gfg?igshid=NDk5N2NlZjQ="
        },
        {
          name: "Twitter",
          url: "https://twitter.com/sandeep_jain?t=Rvrdah-8uyFYUuAYK4o1ZQ&s=09"
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/sandeep-jain-b3940815"
        }
      ]
    },
    {
      image: speaker02,
      name: "Manya Singh",
      designation: "Femina Miss India 2020 runner-up",
      url: "/#",
      index:101,
      socials: [
        {
          name: "Instagram",
          url: "https://instagram.com/manyasingh993?igshid=NDk5N2NlZjQ="
        },
        {
          name: "Twitter",
          url: "https://twitter.com/ManyaSinghMI?t=qCTBr8jPRCKXwWLFMtkgvQ&s=09"
        }
      ]
    },
    {
      image: speaker03,
      name: "Maj. Vandana Sharma ",
      designation: "Military Veteran, HR Leader, Adj Faculty IIM Kashipur",
      url: "/#",
      index:102,
      socials: [
        {
          name: "Instagram",
          url: "https://instagram.com/majorvandanasharma?igshid=NDk5N2NlZjQ="
        },
        {
          name: "Twitter",
          url: "https://twitter.com/MajorvanSharma?t=FW_kB9APU09i97cWXlBgrA&s=09"
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/majorvansharma"
        }
      ]
    },
    {
      image: speaker04,
      name: "Dr. Satyanarayan Kuchibhatla ",
      designation: "Co-founder, Parisodhana Tech Pvt. Ltd.",
      url: "/#",
      index:103,
      socials: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/satyanarayana-kuchibhatla-0866a818"
        }
      ]
    },
    // {
    //   image: speaker05,
    //   name: "Swapnil Mishra",
    //   designation: "Founder, Wedium",
    //   url: "/#",
    //   index:104,
    //   socials: [
    //     {
    //       name: "Linkedin",
    //       url: "https://www.linkedin.com/in/swapnilmishra2"
    //     }
    //   ]
    // },
    {
      image: speaker06,
      name: "Satya Narayan",
      designation: "Founder, Gdroomd & Co-founder,Gocarwash ",
      url: "/#",
      index:105,
      socials: [
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/satya-narayan-242470a0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bm34RBGENTTennGXKXvHmBA%3D%3D"
        },
        {
          name: "Twitter",
          url: "https://twitter.com/satya2890"
        },
      ]
    },
  ]
};

export const aboutSpeakerData = [
  {
    // sandeep jain
    subtitle:"Founder & CEO at GeeksforGeeks",
    content: "Sandeep Jain is the founder of GeeksforGeeks. He completed a bachelor’s degree in Engineering in 2004 and joined MTech at IIT Roorkee in 2005. His platform, GeeksforGeeks is well recognized among all the engineering students throughout all colleges in India and abroad. He loves to solve programming problems in the most efficient ways. Apart from GeeksforGeeks, he has worked with DE Shaw and Co. as a software developer and with JIIT Noida as an assistant professor. Love for teaching led Sandeep Jain to quit his job and start Noida-based GeeksforGeeks, a content platform for developers. Growing up in the city of Firozabad, he had seen really bad quality teaching. He began teaching while he was at school - he used to teach his elder brother. With time, this love for teaching became stronger and stronger. This, along with the poor teaching quality he witnessed, set him on his mission to provide quality education."
  },
  {
    // Manya Singh 
    subtitle:"Femina Miss India 2020 runner-up ",
    content:"Manya Singh is an Indian model and beauty queen who rose to prominence after finishing as the first runner-up in the VLCC Femina Miss India 2020 competition. Manya was born and raised in Uttar Pradesh in a middle-class family, but thanks to her hard work and passion, she rose through the ranks. In an interview with SheThePeople, Manya opened up about training herself by watching YouTube videos. “I jumped into modeling during my college days. I learned to observe people there. I learned the walk from YouTube and worked hard. I was told to imitate others while walking, but I always have one thing in my mind: never lose yourself. Learn from people, behold yourself and improvise. I always wanted to become a model because I aimed at becoming Miss India,” she said. She is an excellent example of a self-learner. For Manya Singh, being on a platform like Miss India is about honoring and representing every girl from her state, who has dreamt of a successful life."
  },
  {
    // vandana sharma
    subtitle:"Military Veteran, HR Leader, Motivational Speaker, Adj Faculty IIM Kashipur",
    content:"Major Vandana Sharma represents the face of today’s multi-talented bold Indian woman who persued excellence in every field, from the country’s defence to the corporate sector. Having served for over a decade in the Indian army, she returned to studies at IIM Lucknow and is now a senior industry leader whose diverse experiences span Strategy, HR, Resource Management, General Management, and Operations. She is the Head of People at SuperGaming and an adjunct professor at the Indian Institute of Management Kashipur.\n Being from a defence family, she was inspired by the Armed Forces and aspired to be one of them. Vandana’s dream was soon fulfilled when she joined the Indian Army. Major Sharma played a back-end role in the Kargil War in 1999. Her contributions in the management sector include many value chain projects and people initiatives across organizations like Wipro, GMR Group, TNT, Myntra and HolidayIQ.com, and she also founded StartupPeopleConsulting.\nShe is an experienced TedX speaker who has spoken about “Follow Your Calling“, “ Risk To Rise”, and “Work on an Epitaph, not on a Resume”. Having given her insightful thoughts on various topics and breaking many stereotypes, we hope to hear her thoughts on the theme “Rising through Resilience“."
  },
  {
    // Satyanarayan Kuchibhatla
    subtitle: "Co-founder, Parisodhana Technologies Pvt. Ltd.",
    content:"Dr. Satyanarayana Kuchibhatla is the Co-founder of Parisodhana Technologies, created to realize the vision to positively impact lives and livelihoods through innovative products with special focus on low and middle income countries.  He completed his Bachelor of Metallurgical Engineering at Andhra University in 2001 and joined IIT Bombay for M.Tech, in nanomaterials. He did his Ph.D. at the University of Central Florida in Materials Science.\nAt Parisodhana, Dr. Kuchibhatla is on a mission to support million premature babies and offer pain relief to adolescent girls during menstruation to reduce absenteeism at schools through made in India instant, portable, non-electric heating technology based products. The same technology is also used to support Indian armed forces located at high-altitudes and extreme cold conditions to keep them warm. As part of Billion Social Masks initiative, conceptualized in response to the COVID-19 pandemic in collaboration with Tata Power CSR and Tata Steel Foundation, SEWA Federation, SEWA Bharat and other like minded organizations, Dr. Kuchibhatla was instrumental in creating 200,000 hours of employment across 16 states in India with 85% of the work for female artisans.\nFrom creating and characterizing materials at an atomic level using highly sophisticated instruments during his tenure at Pacific Northwest National Laboratory, USA, Dr. Kuchibhatla transitioned to creating products to support and save lives using minimal infrastructure from the small kitchen in a rented apartment in Hyderabad, Telangana, India. Product development at Parisodhana is supported by Grand Challenges Canada, WIN Foundations, IKP Knowledge Park and BIRAC."
  },
  // {
  //   // Swapnil Mishra
  //   subtitle:"Founder of Wedium, a wedding services marketplace",
  //   content:"Founder of Wedium, a wedding services marketplace. Swapnil Mishra is the founder of Wedium, a wedding services marketplace based in Bhubaneswar and Puri. He completed his education at B.J.B college, Bhubaneswar, and obtained a Bachelor’s degree in Business Administration and Management, General, in 2021. Wedium is an event management start-up homegrown in IIT Bhubaneswar itself. It is exclusively curated to handle events in conducting a hassle-free wedding. Launching a startup in this turbulent market is challenging, but persistently continuing it requires sheer hard work and dedication."
  // },
  {
    // Satya Narayan
    subtitle:"Founder of Ggroomd+Co-founder of Gocarwash",
    content:"Satyanarayan is an entrepreneur building a Tech-enabled salon chain named Ggroomd. He is also the Co-founder of Gocarwash, a professional mobile car care service operating in Bangalore, Hyderabad and Chennai. Satyanarayan started his education at DAV public school and earned an MBA. He was placed in 5 companies, but his dream to pursue entrepreneurship compelled him to drop out of the placement. He became an entrepreneur in 2012 but failed in execution as he had to taste the bitterness of betrayal. Satyanarayan believes in growing by helping others grow and with clarity of goals. He also admits that this can't be taught to the students through our education system, and only working in a team can build such an attitude. He insists on never giving up until making it."
  }

]

export const previousSpeakerData = {
  sectionContent: {
    title: "Previous Speakers",
    subTitle: "",
    text: "TEDx19, TEDx20",
  },
  posts:[
    {
      title: "Swayam Baral",
      subTitle: "Entrepreneur, Social Worker",
      image: portfolio05,
      url: "/#"
    },
    {
      title: "Naveli Deshmukh",
      subTitle: "Model, Brand Ambassador",
      image: portfolio01,
      url: "/#"
    },
    {
      title: "Anwesha Mishra",
      subTitle: "Founder, Rays of Smile",
      image: portfolio03,
      url: "/#"
    },
    {
      title: "Revant Himatsingka",
      image: portfolio04,
      subTitle: "Author of Selfienomics(Bestseller)",
      url: "/#"
    },
    {
      title: "Aditi Sharma",
      image: portfolio06,
      subTitle: "Actress, Model",
      url: "/#"
    },
    {
      title: "Ajay Kumar Reddy",
      subTitle: "Captain, Indian National Blind Cricket Team",
      image: portfolio02,
      url: "/#"
    },
    {
      title: "Sushant Verma",
      subTitle: "Founder, RAT-LAB",
      image: portfolio07,
      url: "/#"
    },
    {
      title: "Sanjana Sanghi",
      subTitle: "Actress, Model",
      image: portfolio08,
      url: "/#"
    },
    {
      title: "Dr. Jagdish Chatur",
      subTitle: "Doctor, Standup comedian",
      image: portfolio09,
      url: "/#"
    },
    {
      title: "Anuj Tiwari",
      subTitle: "Author",
      image: portfolio10,
      url: "/#"
    },
    {
      title: "Rohit Suraj",
      subTitle: "Founder, Urban Zen",
      image: portfolio11,
      url: "/#"
    },
  ],
}

export const aboutTedData = {
  posts: [
    {
      title: "What is TEDx ?",
      content: "In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxIITBhubaneswar, where x = independently organized TED event. At our TEDxIITBhubaneswar event, TED Talks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.",
      image: aboutTed02,
      url: "https://www.ted.com/about/programs-initiatives/tedx-program"
    },
    {
      title: "What is TED ?",
      content: "TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.",
      image: aboutTed01,
      url: "https://www.ted.com/about/our-organization"
    }
  ]
}

export const ReasonsData = {
  sectionContent:{
    title:"Reasons To Attend"
  },
  posts:[
    {
      title: "Know Diverse Ideas",
      iconName: "mei-lightbulb"
    },
    {
      title: "Networking Opportunity",
      iconName: "mei-connectdevelop"
    },
    {
      title: "Inspirational Performance",
      iconName: "mei-mic"
    },
    {
      title: "Experience to cherish",
      iconName: "mei-sign-language"
    },
  ]
}



export const PartnersData = {
  sectionContent: {
    title: "Partners",
  },
  items: [
    {
      url: "/#",
      image: partner01
    },
    {
      url: "/#",
      image: partner01
    },
    {
      url: "/#",
      image: partner01
    },
    {
      url: "/#",
      image: partner01
    },
    {
      url: "/#",
      image: partner01
    },
    {
      url: "/#",
      image: partner01
    }
  ]
}

export const TeamData = [
  {
    sectionContent: {
      title: "License Holder"
    },
    posts: [
      {
        name: "Koushik Kumar Kamsali",
        occupation:"License Holder",
        image: koushik,
        url: 'https://www.linkedin.com/in/koushik-2001?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkYn%2FYtJQScyrdgFJpi0L2Q%3D%3D'
      },
    ]
  },
  {
    sectionContent: {
      title: "Lead"
    },
    posts: [
      {
        name: "Muppidi Shishir Reddy",
        occupation:"Chief Coordiator, Wissenaire'23",
        image: shishir,
        url: 'https://www.linkedin.com/in/shishir-reddy-737b42239/?originalSubdomain=in'
      },
      {
        name: "Shikhar Agrawal",
        occupation: "Events Core Head",
        image: shikhar,
        url: 'https://www.linkedin.com/in/shikhar-agrawal-ba7978231/?locale=es_ES'
      },
      {
        name: "Aditya Balakrishnan",
        occupation: "Events Core Head",
        image: aditya,
        url: 'https://www.linkedin.com/in/aditya-balakrishnan?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWH9%2FQC94RZOwpscNgDx2Xw%3D%3D'
      },
    ]
  },
  {
    sectionContent: {
      title: "Planning & Curation"
    },
    posts: [
      {
        name: "Geesidi Abhiram Reddy",
        occupation: "Core Head",
        image: abhiram,
        url: 'https://www.linkedin.com/in/abhiram-reddy-geesidi-87174a213?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxXSJzH3OQeC2aS8NuUSrKQ%3D%3D'
      },
      {
        name: "Kailasa Nischal Yarasuri",
        occupation: "Core Head",
        image: nischal,
        url: 'https://www.linkedin.com/in/kailasa-nischal-45b501202?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1nWN1%2FTmSFuYYcgmgZE2vA%3D%3D'
      },
      {
        name: "Shreya Mohanty",
        occupation: "Core Head",
        image: shreya,
        url: 'https://www.linkedin.com/in/shreya-mohanty-5b7783201?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCfqhOyGQSQOwwsdgYLXs0w%3D%3D'
      },
      {
        name: "Jasthi Navya",
        occupation: "Core Head",
        image: navya,
        url: 'https://www.linkedin.com/in/navya-jasthi-68428922a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbDjmok1BQIOnDzB7INEpWQ%3D%3D'
      },
      {
        name: "Yedla Karthikeya",
        occupation: "Core Head",
        image: karthikey,
        url: 'https://www.linkedin.com/in/karthikeya-yedla-a21a09210?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2cwrZbWMQ5GIMYBtNN4ikA%3D%3D'
      },
      {
        name: "Mohith Senapathi",
        occupation: "Core Head",
        image: mohith,
        url: 'https://www.linkedin.com/in/mohith-kumar-senapathi-060a9b233?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXuZ8h4eVTVKDkWI8QIaZfA%3D%3D'
      },
      {
        name: "Bula Lavanya",
        occupation: "Core Head",
        image: lavanya,
        url: 'https://www.linkedin.com/in/bula-lavanya-247605218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSu85FKzlRheU1EUelfQ2VQ%3D%3D'
      },
      {
        name: "Shaik Dazminisha",
        occupation: "Core Head",
        image: dazmini,
        url: 'https://www.linkedin.com/in/shaik-dazminisha?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmmgaDciXQUKymfFPJBPItQ%3D%3D'
      },
    ]
  },
  {
    sectionContent: {
      title: "Sponsorship"
    },
    posts: [
      {
        name: "Satyansh Shukla",
        occupation: "Core Head",
        image: satyansh,
        url: 'https://www.linkedin.com/in/satyansh-shukla-a03830222?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhCmoFxROTay42GP5TLOEyQ%3D%3D'
      },
      {
        name: "Sabari Girish Lade",
        occupation: "Core Head",
        image: girish,
        url: 'https://www.linkedin.com/in/lade-sabari-girish-010986209?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT%2FvOOkcZQMay9jhkvIUvHg%3D%3D'
      },
    ]
  },
  {
    sectionContent: {
      title: "Web and Design"
    },
    posts: [
      {
        name: "Prakash Mohaldar",
        occupation: "Web Core Head",
        image: prakash,
        url: 'https://www.linkedin.com/in/prakash-mohaldar-341b84241?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B1APrG7JeRHKY9BVuTAhG1g%3D%3D'
      },
      {
        name: "Raja Vishwa Teja",
        occupation: "Web Core Head",
        image: katkam,
        url: 'https://www.linkedin.com/in/rvtkatkam?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLNUTRCuRSSiJbn%2B5mEDJnQ%3D%3D'
      },
      {
        name: "Kalyan TVSPV",
        occupation: "Design Core Head",
        image: kalyan,
        url: 'https://www.linkedin.com/in/thummala-v-s-p-v-kalyan-000516188?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLkPLgP0gTSSCRnk0PctwjQ%3D%3D'
      },
    ]
  },
]