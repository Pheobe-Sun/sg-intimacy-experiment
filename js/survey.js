var surveyJSON = {
    title:"Your Personal Space",
    completedHtml:"<div id='complete' class='sg-instruct sg-end'><p>Thank you for your participation.</p></div>",
    pages:[
        {name:"short consent",
        elements:[
            {type:"html",
            name:"Experiment Explanation",
            html:"<div id='intro' class='sg-instruct'><p>This is a social experiment investigating the perception of personal space. " +
                "Your decisions in the game will be collected as part of the research.</p> " +
                "<p>If you agree to proceed, tick the consent box below. </p>" +
                "<p class='sg-smallprint'>*You will have to be above 13 years old to give us the consent to collect your responses. </p></div>"},
            {type:"boolean",
                name:"Age Check",
                //isRequired:true,
                titleLocation:"hidden",
                label:" Hereby I confirm to participate in this research."}]},

        {name:"preparation",
            elements:[
                {type:"html",
                    name:"preparation",
                    html:"<div id='preparation' class='sg-instruct'><img class='sg-img' src='data/img/headphone.jpg' alt='headphone' width=\"300\"><p class='sg-prep'> Now put on the headphone.</p> " +
                        "<p class='sg-smallprint'>Tick the box when you are ready.</p></div>"},
                {type:"boolean",
                    name:"Equipment Check",
                    //isRequired:true,
                    titleLocation:"hidden",
                    label:" I'm ready"}]},

        {name:"wooo-first",
            elements:[
                {type:"html",
                    name:"Instruction",
                    html:"<div id='experiment1' class='sg-instruct'><p><strong>Experiment 1 of 2</strong>" +
                        "<br><em>Imagine a female acquaintance is talking to you.</em>" +
                        "<p>Use the slider to change the distance of the acquaintance. " +
                        "<br>Click the 'submit' button when you have placed the acquaintance at your most comfortable position.</p></div> "},
                {type:"html",
                name:"wooo",
                html:"<div id=\"wooo_first\"></div>"}]},

        {name:"wooo-second",
            elements:[
                {type:"html",
                    name:"Instruction",
                    html:"<div id='experiment2' class='sg-instruct'><p><strong>Experiment 2 of 2</strong>" +
                        "<br><em>Imagine a male acquaintance is talking to you.</em> " +
                        "<p>Use the slider to change the distance of the acquaintance. " +
                        "<br>Click on 'submit' when you have placed the acquaintance at your most comfortable position.</p></div>"},
                {type:"html",
                name:"question1",
                html:"<div id=\"wooo_second\"></div>"}]},

        {name:"long consent",
            elements:[
                {type:"html",
                name:"Survey Explanation",
                html:"<div id='survey' class='sg-instruct'>" +
                    "<p>Quick Survey<strong>optional</strong></p>" +
                    "<p>You are going to do a 5-question survey telling us your demographic information. " +
                    "Your responses are collected anonymously and will only be used for research purpose.</p></div>"},
                {type:"radiogroup",
                    name:"Survey Consent",
                    title:"Are you willing to provide us with your demographic information?",
                    //isRequired:true,
                    choices:["Yes","No"]}]},

        {name:"personal data",
            elements:[
                {type:"matrix",
                name:"Demographic Info 1",
                title:"Gender",
                columns:[{value:"female",text:"Female"}, {value:"male",text:"Male"}, {value:"na",text:"Prefer not to say"}],
                rows:["Gender"]},
                {type:"matrix",
                    name:"Age Group",
                    columns:["13-19","20-29","30-39","40-49",{value:"50+",text:"above 50"}],
                    rows:["age group"]},
                {type:"rating",
                    name:"Personality",
                    minRateDescription:"Introvert",
                    maxRateDescription:"Extrovert"},
                {type:"dropdown",
                    name:"question3",
                    title:"Which continent are you from",
                    choices:[{value:"item1",text:"Europe"},
                        {value:"item6",text:"Africa"},
                        {value:"item2",text:"Asia"},
                        {value:"item3",text:"North America"},
                        {value:"item4",text:"South America"},
                        {value:"item5",text:"Oceanic "}]}],
            visibleIf:"{Survey Consent} = \"Yes\""},

        {name:"visualisation",
            elements:[
                    {type:"html",
                        name:"Circles Visualisation",
                        html:"<div id='visualisation'><svg id='sg-circles' width='300' height='300'>" +
                            "</svg></div>"}]}],


    showNavigationButtons:true,showQuestionNumbers:"off",
    showProgressBar:"off",goNextPageAutomatic:true}
