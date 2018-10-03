var surveyJSON = {
    title:"The best survey ever",
    completedHtml:"Thanks. I am Pheobe, is it not awesome???",
    pages:[{
        name:"short consent",
        elements:[{
            type:"html",
            name:"Experiment Explanation",
            html:"This is a social experiment testing individuals' perceptions of personal space. " +
                "Your decisions in the game will be collected for research purpose. " +
                "You will have to be above 13 years old to give us the consent for collecting your responses."},
            {type:"boolean",
                name:"Age Check",
                isRequired:true,
                titleLocation:"hidden",
                label:"I hereby confirm I'm above 13 and I agree to participate in this research voluntarily."}]},

        {name:"wooo-first",
            elements:[{type:"html",
                name:"wooo",
                html:"<div id=\"wooo_first\"></div>"}]},

        {name:"wooo-second",
            elements:[{type:"html",
                name:"question1",
                html:"<div id=\"wooo_second\"></div>"}]},

        {name:"long consent",
            elements:[{type:"html",
                name:"Survey Explanation",
                html:"This is optional.\nYou are going to do a 5-question survey telling us your demographic information. " +
                    "The data are collected anonymously. Your responses will be used for this research only. "},
                {type:"radiogroup",
                    name:"Survey Consent",
                    title:"Are you willing to provide us with your demographic information?",
                    isRequired:true,
                    choices:["yes","no"]}]},

        {name:"personal data",
            elements:[{type:"matrix",
                name:"Demographic Info 1",
                title:"Gender",
                columns:[{value:"female",text:"Female"}, {value:"male",text:"Male"}, {value:"na",text:"Prefer not to say"}],
                rows:["Gender"]},
                {type:"matrix", 
                    name:"Age Group",
                    columns:["13-19","20-29","30-39","40-49",{value:"50+",text:"above 50"}],
                    rows:["age group"]},{type:"rating",name:"Personality",minRateDescription:"Introvert",maxRateDescription:"Extrovert"},{type:"dropdown",name:"question3",title:"Which continent are you from",choices:[{value:"item1",text:"Europe"},{value:"item6",text:"Africa"},{value:"item2",text:"Asia"},{value:"item3",text:"North America"},{value:"item4",text:"South America"},{value:"item5",text:"Oceanic "}]}],visible:false,visibleIf:"{Survey Consent} = \"yes\""}],showNavigationButtons:false,showQuestionNumbers:"off",showProgressBar:"top",goNextPageAutomatic:true}
