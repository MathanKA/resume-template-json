
var bio = {
    "name": "Mathan K A",
    "role": "UI Developer",
    "contacts": {
        "mobile": "8015571079",
        "email": "hello@mathanka.in",
        "github": "mathanka",
        "twitter": "mathanka",
        "location": "Coimbatore,Tamilnadu"
    },
    "welcomeMessage": "Welcome to my Portfolio Page",
    "skills": ["HTML5","CSS3","Javascript","Wordpress","jQuery"],
    "biopic": "images/cb.png",
};

var education = {
    "schools": [
    {
        "name": "SVS College of Engineering",
        "location": "Coimbatore",
        "degree": "B.E.",
        "majors": ["Computer Science","Software developement"],
        "dates": "2010 - 2014",
        "url": "http://www.svsce.edu.in/"
    },
    {
        "name": "Kikani Higher Sec. School",
        "location": "Coimbatore",
        "degree": "12th",
        "majors": ["Computer Science","Maths"],
        "dates": "2008 - 2010",
        "url": "http://www.svsce.edu.in/"
    },
    {
        "name": "St.Thomas Higher Sec. School",
        "location": "Erode",
        "degree": "10th",
        "majors": ["Science","Maths"],
        "dates": "2008",
        "url": "http://www.svsce.edu.in/"
    }],

    "onlineCourses": [
    {
        "title": "Front End developer",
        "school": "Udacity",
        "date": "june,2016 - july 2016",
        "url": "https://profiles.udacity.com/?_ga=1.191526058.1657317119.1460480024"
    }]
};

var work = {
    "jobs": [
    {
        "employer": "Blue Web Solutions",
        "title": "UI Developer",
        "location": "Coimbatore",
        "dates": "2014 - 2016",
        "description": "To develop the required web pages for the above site, Monitoring and managing the website administration, Maintenance of database and web server, Html5 designs for emails and Leading the social media marketing team in the company."
    },
    {
        "employer": "Red Solutions",
        "title": "UI Developer",
        "location": "Chennai",
        "dates": "2012 - 2014",
        "description": "To develop the required web pages for the above site, Monitoring and managing the website administration, Maintenance of database and web server, Html5 designs for emails and Leading the social media marketing team in the company."
    }]
};

var projects = {
    "projects": [
    {
        "title": "Website Design",
        "dates": "Jan 2014 - feb 2015",
        "description": "I am one of the member in the development team. I have also worked on static pages on this website.",
        "images": ["images/projects/pro1.png", "images/projects/pro12.png"]
    },
    {
        "title": "Website Design",
        "dates": "Jan 2015 - feb 2015",
        "description": "I am one of the member in the development team. I have also worked on static pages on this website.",
        "images": ["images/projects/pro2.png", "images/projects/pro22.png"]
    }]
};


//Bio Functions //
bio.display = function() {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        //displaying
        $("#header").prepend(formattedName,formattedRole);
        $("#header").append(formattedPic, formattedMessage);
        //contact List
        for (var contact in bio.contacts){
            var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var formattedEmail  = HTMLemail.replace("%data%", bio.contacts.email);
            var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
            var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        }
        $("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
        $("#footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);

        if (bio.skills.length > 0){
            $("#header").append(HTMLskillsStart);
            for (var skill in bio.skills){
                if (bio.skills.hasOwnProperty(skill)) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#skills").append(formattedSkills);
            }
        }
    }
};
//Work Function //
work.display = function(){
    $("#workExperience").append(HTMLworkStart);
    for (var job in work.jobs){
        var formattedEmp = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formatworkLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry").append(formattedEmp + formattedTitle);
        $(".work-entry").append(formattedDate);
        $(".work-entry").append(formatworkLoc);
        $(".work-entry").append(formattedDesc);
    }
};

//Projects Function //
projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    for (var project in projects.projects){
        var formprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formprojectDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formprojectDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry").append(formprojectTitle);
        $(".project-entry").append(formprojectDate);
        $(".project-entry").append(formprojectDesc);
        for (var image in projects.projects[project].images){
            var formprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
            $(".project-entry:last").append(formprojectImage);
        }
    }
};

// //Education Function //
education.display = function(){
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools){
        var formatschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formatschooldeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formatschoolmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        var formatschooldates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formatschoolLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry").append(formatschoolName + formatschooldeg);
        $(".education-entry").append(formatschooldates);
        $(".education-entry").append(formatschoolmajor);
        $(".education-entry").append(formatschoolLoc);
    }
};
education.displayonlinecourse = function(){
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (var onlineCourse in education.onlineCourses){

        var formatonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
        var formatonlineschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        var formatonlinedates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
        var formatonlineurl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
        $(".education-entry").append(formatonlineTitle + formatonlineschool);
        $(".education-entry").append(formatonlinedates);
        $(".education-entry").append(formatonlineurl);
    }
};


//Google Map code//

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

function inName(name) {
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
    return newName;
}

bio.display();
education.display();
work.display();
projects.display();
education.displayonlinecourse();
