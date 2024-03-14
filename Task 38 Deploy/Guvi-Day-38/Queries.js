db.topics.aggregate([{
    $lookup: {
        from: "tasks",
        localField: "topicid",
        foreignField: "topicid",
        as: "taskinfo",
    },
},
{
    $match: {
        $and: [{
                $or: [
                    { topic_date: { $gt: new Date("12-mar-2024") } },
                    { topic_date: { $lt: new Date("02-mar-2024") } },
                ],
            },

            {
                $or: [
                    { "taskinfo.due_date": { $gt: new Date("04-mar-2024") } },
                    { "taskinfo.due_date": { $lt: new Date("09-mar-2024") } },
                ],
            },
        ],
    },
},
]);


db.comapnydrives.find({
$or: [
    { drive_date: { $gte: new Date("12-mar-2024") } },
    { drive_date: { $lte: new Date("03-mar-2024") } },
],
});


db.comapnydrives.aggregate([{
    $lookup: {
        from: "users",
        localField: "userid",
        foreignField: "userid",
        as: "userinfo",
    },
},
{
    $project: {
        _id: 0,
        "userinfo.name": 1,
        company: 1,
        drive_date: 1,
        "userinfo.email": 1,
        "userinfo.userid": 1,
    },
},
]);


db.codekata.aggregate([{
    $lookup: {
        from: "users",
        localField: "userid",
        foreignField: "userid",
        as: "userinfo",
    },
},
{
    $project: {
        _id: 0,
        userid: 1,
        problems: 1,
        "userinfo.name": 1,
    },
},
]);

db.users.aggregate([{
    $lookup: {
        from: "mentors",
        localField: "mentorid",
        foreignField: "mentorid",
        as: "mentorInfo",
    },
},
{
    $group: {
        _id: {
            mentorid: "$mentorInfo.mentorid",
            mentorname: "$mentorInfo.mentorname",
        },
        mentee_count: { $sum: 1 },
    },
},
{ $match: { mentee_count: { $gt: 15 } } },
]);
/*.............................................................................................................................................................................*/
/*Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020*/

db.attendance.aggregate([{
    $lookup: {
        from: "topics",
        localField: "topicid",
        foreignField: "topicid",
        as: "topics",
    },
},
{
    $lookup: {
        from: "tasks",
        localField: "topicid",
        foreignField: "topicid",
        as: "tasks",
    },
},
{ $match: { $and: [{ attended: false }, { "tasks.submitted": false }] } },
{
    $match: {
        $and: [{
                $or: [
                    { "topics.topic_date": { $gte: new Date("13-mar-2024") } },
                    { "topics.topic_date": { $lte: new Date("10-mar-2024") } },
                ],
            },
            {
                $or: [
                    { "tasks.due_date": { $gte: new Date("05-mar-2024") } },
                    { "tasks.due_date": { $lte: new Date("10-mar-2024") } },
                ],
            },
        ],
    },
},
{
    $count: "No_of_students_absent",
},
]);