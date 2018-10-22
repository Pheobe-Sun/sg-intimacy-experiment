var surveyJSON = {
    title: "Your Personal Space",
    completedHtml: "<p id='visualisation'>" +
        "<p class='sg-thankyou'> Your own personal space " +
        "is in <font color='#1899FF' >blue</font>. " +
        "<br> Thanks for your participation! </p>" +
        "<svg id='sg-circles' class='sg-circles' viewbox='0 0 420 250'>" +
        "<g fill='none' stroke='#FFFDE4' stroke-width='8'>"+
        "<circle class='pop_circle1_1' cx='220' cy='150' r='120'></circle></g>" +
        "<g fill='none' stroke='#FFFBB1' stroke-width='20'>" +
        "<circle class='pop_circle1' cx='220' cy='150' r='130'></circle></g>" +
        "<g fill='none' stroke='#FFF218' stroke-width='48'>" +
        "<circle class='pop_circle0' cx='220' cy='150' r='153'></circle></g>" +
        "<g fill='none' stroke='#FFFBB1' stroke-width='17'>" +
        "<circle class='pop_circle2' cx='220' cy='150' r='170'></circle></g>" +
        "<g fill='none' stroke='#FFFDE4' stroke-width='6'>" +
        "<circle class='pop_circle1_1' cx='220' cy='150' r='175'></circle></g>" +
        "<g class='indi_circle' fill='none' stroke='#1899FF' stroke-width='2'>" +
        "<circle data-delay='240' class='indi_circle' cx='220' cy='150' r='155'></circle></g>" +
        "</svg>" +
        "</div>",
    pages: [
        {
            name: "short consent",
            elements: [
                {
                    type: "html",
                    name: "Experiment Explanation",
                    html: "<div id='intro'><p><strong>Your Personal Space</strong></p>" +
                        "<p class='sg-instruct'>This is a social experiment. It investigates the perception of personal space. " +
                        "Your decisions in the game will be collected as part of the research.</p> " +
                        "<p><br>You will have to be above 13 years old to give us the consent to collect your responses.</p></div>"
                },
                {
                    type: "boolean",
                    name: "Age Check",
                    //isRequired:true,
                    titleLocation: "hidden",
                    label: " Hereby I confirm to participate in this research. "
                }]
        },

        {
            name: "preparation",
            elements: [
                {
                    type: "html",
                    name: "preparation",
                    html: "<div id='preparation' class='sg-instruct'>" +
                        "<img class='sg-icon' src='data/img/headphones.svg' height='100' alt='headphones'/>"+
                        "<p class='sg-instruct'> Now put on the headphones.</p></div>" +
                        "<!--<p class='sg-smallprint'>Tick the box when you are ready.</p></div>-->"
                },
                {
                    type: "boolean",
                    name: "Equipment Check",
                    //isRequired:true,
                    titleLocation: "hidden",
                    label: " I'm ready"
                }]
        },

        {
            name: "wooo-first",
            elements: [
                {
                    type: "html",
                    name: "Instruction",
                    html: "<div id='experiment1'><p class='sg-title'><strong>Experiment 1 of 2</strong></p>" +
                        "<p><em>Imagine a female acquaintance is talking to you.</em></p>" +
                        "<p class='sg-instruct'><br>Use the slider to change the distance of the acquaintance. " +
                        "<br>Click the 'submit' button when you have placed the acquaintance at your most comfortable position.</p></div> "
                },
                {
                    type: "html",
                    name: "wooo",
                    html: "<div id=\"wooo_first\"></div>"
                },
                {
                    type: "boolean",
                    name: "Submit_experiment1",
                    //isRequired:true,
                    titleLocation: "hidden",
                    label: "Submit"
                }
            ]
        },

        {
            name: "wooo-second",
            elements: [
                {
                    type: "html",
                    name: "Instruction",
                    html: "<div id='experiment2'><p class='sg-title'><strong>Experiment 2 of 2</strong></p>" +
                        "<p><em>Imagine a male acquaintance is talking to you.</em></p> " +
                        "<p  class='sg-instruct'><br>Use the slider to change the distance of the acquaintance. " +
                        "<br>Click on 'submit' when you have placed the acquaintance at your most comfortable position.</p></div>"
                },
                {
                    type: "html",
                    name: "question1",
                    html: "<div id=\"wooo_second\"></div>"
                },
                {
                    type: "boolean",
                    name: "Submit_experiment_2",
                    //isRequired:true,
                    titleLocation: "hidden",
                    label: "Submit"
                }
            ]
        },

        {
            name: "long consent",
            elements: [
                {
                    type: "html",
                    name: "Survey Explanation",
                    html: "<div id='survey'>" +
                        "<p class='sg-title'><strong>Quick Survey</strong>  <em>optional</em></p>" +
                        "<p  class='sg-instruct'>You are going to do a 5-question survey telling us your demographic information. " +
                        "Your responses are collected anonymously and will only be used for research purpose.</p></div>"
                },
                {
                    type: "radiogroup",
                    name: "Survey Consent",
                    title: "Are you willing to provide us with your demographic information?",
                    //isRequired:true,
                    choices: ["Yes", "No"]
                },
                {
                    type: "boolean",
                    name: "Submit_survey_consent",
                    //isRequired:true,
                    titleLocation: "hidden",
                    label: "Submit"
                }
            ]
        },

        {
            name: "personal data",
            elements: [
                {
                    type:"radiogroup",
                    name:"Q1",
                    startWithNewLine:true,
                    title:"Gender",
                    choices:["female","male","prefer not to say"],
                    colCount:0
                },
                {
                    type:"radiogroup",
                    name:"Q2",
                    startWithNewLine:true,
                    title:"Age Group",
                    choices:["13-19","20-29","30-39","40-49","above 50"],
                    colCount:0
                },
                {
                    type:"radiogroup",
                    name:"Q3",
                    startWithNewLine:true,
                    title:"Personality",
                    choices:["shy","in-between","outgoing"],
                    colCount:0
                },
                {
                    type: "dropdown",
                    name: "Q4",
                    title: "Which continent are you from",
                    choices: [{value: "europe", text: "Europe"},
                        {value: "africa", text: "Africa"},
                        {value: "asia", text: "Asia"},
                        {value: "northamerica", text: "North America"},
                        {value: "southamerica", text: "South America"},
                        {value: "oceanic", text: "Oceanic "}]
                },
                // {
                //     type: "matrix",
                //     name: "Demographic Info 1",
                //     title: "Gender",
                //     columns: [{value: "female", text: "female"}, {value: "male", text: "male"}, {
                //         value: "na",
                //         text: "prefer not to say"
                //     }],
                //     rows: ["Gender"]
                // },
                // {
                //     type: "matrix",
                //     name: "Age Group",
                //     columns: ["13-19", "20-29", "30-39", "40-49", {value: "50+", text: "above 50"}],
                //     rows: ["age group"]
                // },
                // {
                //     type: "matrix",
                //     name: "Personality",
                //     columns: ["shy", "in-between", "outgoing"],
                //     rows: ["personality"]
                // },
                // {
                //     type: "dropdown",
                //     name: "question3",
                //     title: "Which continent are you from",
                //     choices: [{value: "item1", text: "Europe"},
                //         {value: "item6", text: "Africa"},
                //         {value: "item2", text: "Asia"},
                //         {value: "item3", text: "North America"},
                //         {value: "item4", text: "South America"},
                //         {value: "item5", text: "Oceanic "}]
                // },
                {
                    type: "boolean",
                    name: "Submit_survey",
                    //isRequired:true,
                    titleLocation: "hidden",
                    label: "Submit"
                }
            ],
            visibleIf: "{Survey Consent} = \"Yes\""
        }],

    showNavigationButtons: false, showQuestionNumbers: "off",
    showProgressBar: "off", goNextPageAutomatic: true
}
