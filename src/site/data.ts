export const DONATE_URL =
  "https://www.spotfund.com/story/0d40d323-3211-4750-b8ed-6bb0546a0145/donate";

export const FORM_EN =
  "https://docs.google.com/forms/d/e/1FAIpQLSfy-9rmjmdDP37iNhgRfadvzulf0CTg235biLh2jA03Kqkcpw/viewform";

export const FORM_ES =
  "https://docs.google.com/forms/d/e/1FAIpQLSeS-zlyvZolKIWAIsfdmtjQc8vOQQUurm2ejEA-cH5OUR4KnQ/viewform";

export const IG = "https://www.instagram.com/academyproject/";
export const LI = "https://www.linkedin.com/company/theacademyproject/";
export const FB = "https://www.facebook.com/theacademyproject/";

export const EMAIL = "info@theacademyproject.org";
export const LAUREN_EMAIL = "lcosta@theacademyproject.org";
export const PHONE_DISPLAY = "323-839-0665";
export const PHONE_TEL = "+13238390665";
export const LOCATION = "Los Angeles, CA 90015";
export const EIN = "47-1205640";

export const LOGO =
  "https://static.wixstatic.com/media/6bc62c_ce1ff9244b834f90af5fd0dfc0d6641d~mv2.jpeg/v1/fill/w_240,h_254,al_c,q_85,usm_0.66_1.00_0.01/TAP%20logo%20new%202021%20shield.jpeg";

export const TAP_PHOTO =
  "https://static.wixstatic.com/media/6bc62c_d48b11a795eb41eb9b8922cf4c27209c~mv2.jpeg/v1/fill/w_1600,h_1066,fp_0.61_0.12,q_85,usm_0.66_1.00_0.01/TAP%202.jpeg";

export const MODEL_PHOTO =
  "https://static.wixstatic.com/media/6bc62c_9d7803a8bef44449bddeecc19dab70b0~mv2.png/v1/fill/w_1400,h_880,fp_0.51_0.40,q_90,usm_0.66_1.00_0.01/model.png";

export const photos = {
  hero: "https://images.pexels.com/photos/18870256/pexels-photo-18870256.jpeg?auto=compress&cs=tinysrgb&w=1800",
  serve: "https://images.pexels.com/photos/6214649/pexels-photo-6214649.jpeg?auto=compress&cs=tinysrgb&w=1400",
  tutor: "https://images.pexels.com/photos/18870251/pexels-photo-18870251.jpeg?auto=compress&cs=tinysrgb&w=1400",
  art: "https://images.pexels.com/photos/8382222/pexels-photo-8382222.jpeg?auto=compress&cs=tinysrgb&w=1400",
  artGroup: "https://images.pexels.com/photos/8107697/pexels-photo-8107697.jpeg?auto=compress&cs=tinysrgb&w=1600",
  sketch: "https://images.pexels.com/photos/8382260/pexels-photo-8382260.jpeg?auto=compress&cs=tinysrgb&w=1200",
  music: "https://images.pexels.com/photos/7520932/pexels-photo-7520932.jpeg?auto=compress&cs=tinysrgb&w=1400",
  piano: "https://images.pexels.com/photos/8520514/pexels-photo-8520514.jpeg?auto=compress&cs=tinysrgb&w=1200",
  camp: "https://images.pexels.com/photos/9302795/pexels-photo-9302795.jpeg?auto=compress&cs=tinysrgb&w=1600",
  play: "https://images.pexels.com/photos/5278809/pexels-photo-5278809.jpeg?auto=compress&cs=tinysrgb&w=1400",
  friends: "https://images.pexels.com/photos/8841091/pexels-photo-8841091.jpeg?auto=compress&cs=tinysrgb&w=1200",
  walk: "https://images.pexels.com/photos/12886711/pexels-photo-12886711.jpeg?auto=compress&cs=tinysrgb&w=1000",
  reading: "https://images.pexels.com/photos/5905491/pexels-photo-5905491.jpeg?auto=compress&cs=tinysrgb&w=1200",
  classArt: "https://images.pexels.com/photos/8382234/pexels-photo-8382234.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "model", label: "Our Model" },
  { id: "programs", label: "Programs" },
  { id: "impact", label: "Impact" },
  { id: "give", label: "Ways to Give" },
  { id: "involved", label: "Get Involved" },
  { id: "contact", label: "Contact" },
] as const;

export type PageId = (typeof nav)[number]["id"] | "home" | "register";

export const pageTitles: Record<PageId, string> = {
  home: "The Academy Project | Foster Youth Empowerment in Los Angeles",
  about: "About",
  model: "Our Model",
  programs: "Programs",
  impact: "Impact",
  give: "Ways to Give",
  involved: "Get Involved",
  contact: "Contact",
  register: "Join / Register",
};

export const stats = [
  {
    value: "750+",
    label: "Youth impacted",
    note: "Foster, unhoused, and other underserved young people reached through out-of-school and summer programs.",
  },
  {
    value: "2015",
    label: "Founded",
    note: "Established in Los Angeles as a 501(c)(3) by Lauren Costa.",
  },
  {
    value: "10+",
    label: "Years of support",
    note: "More than ten years beside the child welfare community.",
  },
  {
    value: "Free",
    label: "For eligible members",
    note: "No cost to families or schools. Transportation is offered if needed.",
  },
];

export const services = [
  {
    id: "academic",
    title: "Academic Support",
    text: "Tutoring, homework help, and reading support are part of the daily rhythm at The Co-Op. Academic assessments help the team understand where a young person is, and where steady encouragement can help.",
  },
  {
    id: "art",
    title: "Art Enrichment",
    text: "Creative time gives young people room to explore artistic interests with peers and caring adults. Art enrichment is one of the ways TAP supports joy, well-being, and growth — not only grades.",
  },
  {
    id: "music",
    title: "Music Enrichment",
    text: "Music lessons and creative development let young people try something of their own and build skill over time. A gift of $25 contributes toward music lessons.",
  },
  {
    id: "social",
    title: "Social & Community Development",
    text: "Peer activities, relationships, and time with consistent adults help young people practice belonging and social skills. Community is not an extra. It is the heart of the work.",
  },
  {
    id: "out-of-school",
    title: "Out-of-School Programs",
    text: "Programs are designed to offer meaningful support beyond the school day. The Co-Op meets on weekday afternoons, with special programs over some weekends and other out-of-school time.",
  },
  {
    id: "summer",
    title: "Summer / Special Programs",
    text: "Camp Xavier is a summer, full-day program held in week-long sessions each July at Loyola High School. It offers current and former foster youth the ordinary, powerful experience of camp.",
  },
];

export const journey = [
  {
    title: "Support",
    text: "A steady place, and relationships with consistent, caring adults.",
  },
  {
    title: "Education",
    text: "School as a point of stability, with tutoring, reading support, and enrichment.",
  },
  {
    title: "Confidence",
    text: "Skills, self-confidence, and room to discover strengths.",
  },
  {
    title: "Community",
    text: "Belonging with peers and adults who stay.",
  },
  {
    title: "Independence",
    text: "Preparation for the transition toward adulthood.",
  },
  {
    title: "Brighter Future",
    text: "Resources, relationships, and guidance to thrive in school and in life.",
  },
];

export const gifts = [
  {
    amount: "$500",
    text: "Helps send a foster youth to Camp Xavier.",
  },
  {
    amount: "$100",
    text: "Helps ensure safe transportation with our partners to and from TAP services.",
  },
  {
    amount: "$50",
    text: "Gives our youth the chance to enjoy a special day out with our partners.",
  },
  {
    amount: "$25",
    text: "Contributes toward music lessons.",
  },
];

export const values = [
  "Empowerment",
  "Integrity",
  "Inclusivity",
  "Compassion",
  "Community",
];

export const schools = [
  "Richard Merkin Middle School",
  "Downtown Value School",
  "Berendo Middle School",
  "Oscar Romero Charter",
];

export const dailyIncludes = [
  "Snack",
  "Tutoring",
  "Reading support",
  "Art enrichment",
  "Peer activities",
];

export const programAreas = [
  "Tutoring and Reading Support",
  "Gardening",
  "Music Enrichment (lessons)",
  "Dance",
  "Arts — Film",
  "Book Club",
  "Cooking / Nutrition",
  "Field Trips",
  "Love4Life Group / Individual Therapy",
];

export const targetYouth = [
  "Have been in the child welfare system for years, with many experiencing homelessness",
  "Are performing below grade level",
  "Have an Individualized Education Program (IEP) or special education needs",
  "Have demonstrated trust or attachment issues",
  "Have never, or only very recently, experienced a stable home placement",
];

export type Person = {
  name: string;
  role: string;
  image?: string;
  bio?: string;
};

export const team: Person[] = [
  {
    name: "Lauren Costa",
    role: "Executive Director & Founder",
    image:
      "https://static.wixstatic.com/media/c6d49a_378eec70ab3b411b860931e84bac3cdc~mv2.png/v1/fill/w_800,h_800,al_c,q_85,usm_0.66_1.00_0.01/Lauren-900x900.png",
    bio: "Lauren founded The Academy Project as a result of her passion for and career working with foster youth. She attended New York University, where she graduated cum laude with a degree in Theater and Psychology. She has been a lifelong advocate for foster youth and continues to work to strengthen the relationships between the systems and organizations that support foster youth.",
  },
  {
    name: "Sheila Cutchlow",
    role: "Board of Directors",
    image:
      "https://static.wixstatic.com/media/c6d49a_134650a106e34d3390b72ec1cfbc23ad~mv2.jpg/v1/fill/w_720,h_960,al_c,q_85,usm_0.66_1.00_0.01/Headshot.jpg",
    bio: "Sheila came from a strong family foundation. Her mother, Shirley, was a kindergarten teacher, and spent her weekends as a Sunday school teacher. Education and activism were a priority, and these experiences instilled the values of community service, generosity, and care for others. Sheila’s work with The Academy Project is a reflection of this commitment. As a board member, Sheila seeks to lend a creative, collaborative, and knowledgeable presence to address the challenges facing foster care today. She brings expertise in fundraising, strategic planning, and public relations to help TAP achieve its mission to impact and disrupt the burdened cycle, and build a stable environment where foster children can progress and thrive with the emotional, physical, and financial support they need. Above all, Sheila is honored to be on The Academy Project team and looks forward to all we can achieve together.",
  },
  {
    name: "Michele Kawamoto Perry",
    role: "Board of Directors",
    image:
      "https://static.wixstatic.com/media/00f3bf_c999e2d7829c45979c403d6e6becd161~mv2.jpg/v1/fill/w_720,h_830,al_c,q_85,usm_0.66_1.00_0.01/IMG_9333.jpg",
    bio: "Michele is the Founder of The Forward Project, a Los Angeles-based consultancy that designs powerful culture transformation, leadership development, and high-performing teams programs to help organizations discover new ways to grow revenues, strengthen their culture, and accelerate their impact. She is an angel investor, a Certified Sommelier, and a lover of travel, food, and languages. Most of all, she is deeply passionate about making a positive difference in the lives of foster youth.",
  },
  {
    name: "Mary Gastineau",
    role: "Board of Directors",
    image:
      "https://static.wixstatic.com/media/c6d49a_52389351aac24aa489d95715721dacd6~mv2.jpg/v1/fill/w_800,h_840,al_c,q_85,usm_0.66_1.00_0.01/Mary.jpg",
    bio: "Mary has had a long and established career as a critical care and research RN. Wanting a more active role in changing and shaping current situations and events, Mary left the nursing role and went on to become an entrepreneur who has been a significant part of starting several successful businesses in the pharmaceutical and retail arenas. During all of her jobs and endeavors she has maintained being an advocate for people’s rights.",
  },
  {
    name: "Tammy Watson-Smith",
    role: "Board of Directors",
    image:
      "https://static.wixstatic.com/media/f4fddb_caa6e63b872848ba91b31ff9bdcfc991~mv2.jpg/v1/fill/w_900,h_640,al_c,q_85,usm_0.66_1.00_0.01/TWS.jpg",
    bio: "Tammy Watson-Smith is a Principal and the Operations Leader for Mercer in the West Market. She is responsible for managing improvement processes and communication activities as well as project scoping and planning to ensure that projects are delivered on time and within budget. She acts as a strategic thinking partner with the Market CEO on new initiatives, business issues, or concerns. Mercer is one of the operating companies of Marsh & McLennan Companies, Inc.",
  },
  {
    name: "Claire Conley",
    role: "Board of Directors",
    image:
      "https://static.wixstatic.com/media/c6d49a_988d1f9554254bfd912c31f293d88952~mv2.jpg/v1/fill/w_800,h_674,al_c,q_85,usm_0.66_1.00_0.01/Claire.jpg",
    bio: "Claire Conley joined The Academy Project in 2019 as a volunteer with the Co-Op, where she cultivated a strong passion for the organization and the community it serves. She attended UCLA, where she graduated summa cum laude with a degree in Political Science. In addition to the work with The Academy Project, she sits on the tribal council for the Gabrielino-Tongva Indians of California and has developed a professional career as an M&A analyst.",
  },
  {
    name: "Maria Cristel",
    role: "Board of Directors",
    image:
      "https://static.wixstatic.com/media/6bc62c_1bac15091d5b46cfb34a6e9ec36f7502~mv2.jpg/v1/fill/w_800,h_726,al_c,q_85,usm_0.66_1.00_0.01/IMG_2848.jpg",
    bio: "Maria has been actively involved with The Academy Project since 2021 and has become a valued member of the organization’s community and leadership. Over the years, she has supported several initiatives focused on creating stability, opportunity, and meaningful resources for young people impacted by the foster care system. With a strong commitment to youth advocacy and community service, Maria brings a thoughtful, collaborative approach to the Board and is passionate about helping foster youth feel supported as they navigate important transitions in their lives. Through her continued involvement with The Academy Project, she remains dedicated to advancing the organization’s mission and helping expand the programs, partnerships, and opportunities available to the young people it serves.",
  },
  {
    name: "Celia Botet",
    role: "Treasurer",
  },
];

export const quotes = [
  {
    text: "From the bench, I have witnessed our system’s gaps first-hand, including a lack of consistent care and support for our middle school children. The Academy Project fills this need like no other organization. I have seen their safe, loving, and educational environment turn around the lives of middle schoolers for whom previous services simply didn’t work.",
    name: "The Hon. Sherri Sobel",
    role: "Former LA juvenile court referee and California Juvenile Court Judge of the Year",
  },
  {
    text: "My children are having such a great time at the camp. They really look forward every day to be there. They have gone to other camps in the past, yet none have made such an impact on them. Thank you so much for taking care of our children. They are having such a great time that it makes me want to relive my childhood again.",
    name: "Carlos S.",
    role: "Foster/adoptive parent",
  },
];

export const reasons = [
  "General Question",
  "Volunteer",
  "Partnership",
  "Donation",
  "Registration",
  "Programs",
  "Other",
] as const;

export const reasonFromSection: Record<string, (typeof reasons)[number]> = {
  volunteer: "Volunteer",
  partnership: "Partnership",
  donation: "Donation",
  registration: "Registration",
  programs: "Programs",
};
