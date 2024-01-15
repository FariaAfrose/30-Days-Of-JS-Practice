const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  }


  // Check the requirement of this project from both images(jpg and gif). All the data and CSS has been implemented using JavaScript only. The data is found on starter folder project_3. The drop down button has been created using details HTML element.

const challanges=asabenehChallenges2020.challenges
  const div=document.getElementById('wrapper')
  const year=div.querySelector(' h1 span')
  year.style.fontSize="60px"
  const dateAndTime=document.getElementById('addHeader')
  const ul=document.createElement('ul')
  challanges.forEach(challange=>{
const topicName = challange.name.replace('30 Days Of ', '');
console.log(topicName)
    //name
    const li=document.createElement('li')
    const nameDiv=document.createElement('div')
    nameDiv.textContent=challange.name
    nameDiv.className='name'
    li.className='addColor'
    li.appendChild(nameDiv)

    //dropdown button
    const dropButton=document.createElement('details')
    dropButton.className='dropDown'
    const button=document.createElement('summary')
    button.textContent=topicName
    dropButton.appendChild(button)

    //dropdown content
    const dropButtonContent=document.createElement('div')
    dropButtonContent.className='dropDownContent'
     challange.topics.forEach(topic=>{
    const topicLink=document.createElement('p')
    topicLink.textContent=topic
    dropButtonContent.appendChild(topicLink)

     })
    dropButton.appendChild(dropButtonContent)

    //status
    const status=document.createElement('span')
    status.className='statusName'
    status.textContent=challange.status
    

    switch(challange.status){
        case 'Done':
            li.style.backgroundColor='#5BBC7A'
        break
        case 'Ongoing':
            li.style.backgroundColor='#F7DC5C'
        break
        case 'Coming':
            li.style.backgroundColor='#EB695B'
        break
        default:
            break
    }
  li.appendChild(dropButton)
  li.appendChild(status)
  ul.appendChild(li)
  })
  div.appendChild(ul)
  setInterval(()=>{
    year.style.color=randomColor()
},1000)

  function timeAndDate(){
  const currentDate=new Date()
  const date=currentDate.toDateString()
  const time=currentDate.toLocaleTimeString()
  dateAndTime.textContent=`${date} ${time}`
  }

  timeAndDate()
  
  
  setInterval(()=>{
  
      dateAndTime.style.backgroundColor=randomColor()
      timeAndDate()
  
  },1000)
  

  function randomColor(){
      const letter='ABCDEFGHIabcd'
      let color="#"
      for(let i=0;i<6;i++){
          color +=letter[Math.floor(Math.random()*16)]
      }
      return color
  }
//another part
    const anotherPartDiv=document.getElementById('anotherPart')
    const header=document.createElement('h2')
    header.textContent=asabenehChallenges2020.challengeTitle
    
    anotherPartDiv.appendChild(header)
    //socialLink
    // const icon=document.getElementById('socialLinks')
    // asabenehChallenges2020.socialLinks.forEach(link=>{
    //     const a=document.createElement('a')
    //  a.href=link.url
    //  a.innerHTML=link.fontawesomeIcon + link.social
    //  icon.appendChild(a)

     
    // })
         //boi

    const bio=document.createElement('p')
    
    bio.textContent=asabenehChallenges2020.author.bio
    bio.style.width='1200px'

    anotherPartDiv.appendChild(bio)

    //title
    const divTSQ=document.createElement('div')
    divTSQ.className='divTSQ'
    function myTQS(title ,items){
        const listDiv=document.createElement('div')
        listDiv.style.width='300px'
        listDiv.className='list'

        const head=document.createElement('h3')

        head.textContent=title
        listDiv.appendChild(head)

        const list=document.createElement('div')

        items.forEach(item=>{
            const itemList=document.createElement('p')
            itemList.textContent=item
            list.appendChild(itemList)
        })
        listDiv.appendChild(list)
        divTSQ.appendChild(listDiv)

    }

    const title=asabenehChallenges2020.author.titles
    const qualifications=asabenehChallenges2020.author.qualifications
    const skills=asabenehChallenges2020.author.skills
    const keywords=asabenehChallenges2020.keywords
        bio.style.width='1200px'

    for(let i=0; i<keywords.length ;i++){
        keywords[i]='#'+ keywords[i]
    }
    const hashTag=document.createElement('div')
    hashTag.id='hashTag'
    keywords.forEach(keyword=>{
    const hashtagP=document.createElement('p')
    hashtagP.textContent=keyword
    const random= `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    hashtagP.style.backgroundColor=random

    hashTag.appendChild(hashtagP)
})
document.body.appendChild(hashTag);

    const skillDiv=document.createElement('div')

    
    myTQS('Titles' , title)
    myTQS('Qualifications' , qualifications)
    myTQS('Skills' , skills)
    anotherPartDiv.appendChild(divTSQ)
