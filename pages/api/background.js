const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'MS, Carleton University',
                degree: 'Ottawa, Canada',
                detail: 
                    "Master's Degree in Computer Science from Carleton University\n\n" + 
                    "During the two-year master's course, I focused on artificial intelligence, including image processing and interactive robot making, and completed a master's thesis by completing 'A method of optimization search using the Adaboost algorithm' in the process.",
                year: '2012-2014'
            },
            {
                id: 1,
                title: 'BS, Carleton University',
                degree: 'Ottawa, Canada',
                detail: 
                    "Bachelor's Degree in Computer Science from Carleton University\n\n" + 
                    "During the four-year college course, I focused on learning the web programming language including Frontend and Backend, and in the process completed the bachelor's thesis 'Improving website speed and a problem in network security' and won a bachelor's degree.",
                year: '2008-2012'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Neuralwave',
                role: 'Senior Full-Stack Developer',
                url: 'https://neuralwave.tech/',
                desc: 
                    "- Developed and maintained full-stack applications, utilizing modern technologies and frameworks to deliver robust and user-friendly solutions.\n" + 
                    "- Collaborated with cross-functional teams to gather requirements, design system architecture, and implement scalable and efficient solutions.\n" + 
                    "- Integrated third-party APIs and services, ensuring seamless data flow and enhancing the functionality of web applications.\n" + 
                    "- Conducted code reviews, implemented best practices, and mentored junior developers to improve code quality and foster a collaborative development environment.\n",
                year: '04/2019 – 02/2023',
                location: 'Atlanta, USA'
            },
            {
                id: 2,
                title: 'Essential Designs',
                role: 'Back-end Java Developer',
                url: 'https://www.essentialdesigns.net/',
                desc: 
                    "- Created a search system for finding branches and ATMs filtered by various criteria, including a nearby feature.\n" + 
                    "- Wrote unit tests and integration tests using JUnit and Cucumber.\n" + 
                    "- Implemented performance optimizations by introducing lat/long caching on top of a Geo Time Zone API.\n" + 
                    "- Ensured that all of the REST APIs adhered to JSON API standards.\n" + 
                    "- Implemented the front end using React and developed components from scratch.\n",
                year: '06/2016 – 03/2019',
                location: 'Vancouver, Canada'
            },
            {
                id: 3,
                title: 'iQlance Solution',
                role: 'Junior Full-Stack Developer',
                url: 'https://www.iqlance.com/',
                desc: 
                    "- Developed an element with an innovative UI using React(and hooks) to build a custom virtual (windowed) list that efficiently renders lists with tens of thousands of rows, a specialized rich text editor, and various widgets.\n" + 
                    "- Developed a Django (Python) web application for a company that works with insurance companies and radiologists.\n" + 
                    "- Worked on chat features for a financial guidance app through an integration with the Salesforce Chat SDK and MessageKit.\n",
                year: '08/2014 – 05/2016',
                location: 'Manitoba, Canada'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
