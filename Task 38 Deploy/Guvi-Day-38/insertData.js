db.users.insertMany([{
    userid: 1,
    name: "Divi",
    email: "dd@gmail.com",
    mentorid: 1,
},
{
    userid: 2,
    name: "tes6",
    email: "tes6@gmail.com",
    mentorid: 2,
},
{
    userid: 3,
    name: "danny",
    email: "danny@gmail.com",
    mentorid: 3,
},
{
    userid: 4,
    name: "test2en",
    email: "test2@gmail.com",
    mentorid: 1,
},
{
    userid: 5,
    name: "testt",
    email: "testt@gmail.com",
    mentorid: 2,
},
]);
/*.............................................................................................................................................*/
/*codekata*/

db.codekata.insertMany([{
    userid: 1,
    problems: 10,
},
{
    userid: 2,
    problems: 40,
},
{
    userid: 3,
    problems: 20,
},
{
    userid: 4,
    problems: 50,
},
{
    userid: 5,
    problems: 70,
},
]);

/*....................................................................................................................................................*/
/*topics*/

db.topics.insertMany([{
    topicid: 1,
    topic: "html",
    topic_date: new Date("02-mar-2024"),
},
{
    topicid: 2,
    topic: "css",
    topic_date: new Date("04-mar-2024"),
},
{
    topicid: 3,
    topic: "Javascript",
    topic_date: new Date("06-mar-2024"),
},
{
    topicid: 4,
    topic: "React",
    topic_date: new Date("07-mar-2024"),
},
{
    topicid: 5,
    topic: "NodeJs",
    topic_date: new Date("08-mar-2024"),
},
]);

/*..............................................................................................................................................................*/
/*tasks*/

db.tasks.insertMany([{
    taskid: 1,
    topicid: 1,
    userid: 1,
    task: "html task",
    due_date: new Date("02-mar-2024"),
    submitted: true,
},
{
    taskid: 2,
    topicid: 2,
    userid: 2,
    task: "css task",
    due_date: new Date("03-mar-2024"),
    submitted: true,
},
{
    taskid: 3,
    topicid: 3,
    userid: 3,
    task: "Javascript task",
    due_date: new Date("04-mar-2024"),
    submitted: false,
},
{
    taskid: 4,
    topicid: 4,
    userid: 4,
    task: "React task",
    due_date: new Date("07-mar-2024"),
    submitted: false,
},
{
    taskid: 5,
    topicid: 5,
    userid: 5,
    task: "Node task",
    due_date: new Date("08-mar-2024"),
    submitted: false,
},
]);
/*....................................................................................................................................................*/
/*attendance*/

db.attendance.insertMany([{
    userid: 1,
    topicid: 1,
    attended: true,
},
{
    userid: 2,
    topicid: 2,
    attended: true,
},
{
    userid: 3,
    topicid: 3,
    attended: false,
},
{
    userid: 4,
    topicid: 4,
    attended: false,
},
{
    userid: 5,
    topicid: 5,
    attended: false,
},
]);

/*...................................................................................................................................................*/
/*mentors*/

db.mentors.insertMany([{
    mentorid: 1,
    mentorname: "tutor1",
    mentor_email: "tutor1@gmail.com",
},
{
    mentorid: 2,
    mentorname: "tutor2",
    mentor_email: "tutor2@gmail.com",
},
{
    mentorid: 3,
    mentorname: "tutor3",
    mentor_email: "tutor3@gmail.com",
},
{
    mentorid: 4,
    mentorname: "tutor4",
    mentor_email: "tutor4@gmail.com",
},
{
    mentorid: 5,
    mentorname: "tutor5",
    mentor_email: "tutor5@gmail.com",
},
]);

/*.................................................................................................................................................*/
/*company drives*/

db.comapnydrives.insertMany([{
    userid: 1,
    drive_date: new Date("01-mar-2024"),
    company: "Google",
},
{
    userid: 1,
    drive_date: new Date("05-mar-2024"),
    company: "Amazon",
},
{
    userid: 2,
    drive_date: new Date("06-mar-2024"),
    company: "SAP labs",
},
{
    userid: 3,
    drive_date: new Date("07-mar-2024"),
    company: "Mac App studio",
},
{
    userid: 4,
    drive_date: new Date("08-mar-2024"),
    company: "Freshworks",
},
]);