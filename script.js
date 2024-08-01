// instance variables
let currentQuestion = 0;

const questions = [
    {
        question: "Q1/10: Happy Monday! It's time to get to work! What best describes your work style?",
        image: "images/Q1.gif",
        answers: {
            A1: {
                text: "Steady and Focused",
                scores: { A: +1, B: 0, C: 0, D: 0, E: +1, F: 0, G: 0, H: 0, I: 0},
            },
            A2: {
                text: "Optimistic and Spontaneous",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A3: {
                text: "Organized and Methodical",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: +1, G: 0, H: 0, I: 0},
            },
            A4: {
                text: "Collaborative and Energetic",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: +1, I: 0},
            },
            A5: {
                text: "Supportive and Helpful",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: +1, H: 0, I: 0},
            },
            A6: {
                text: "Flexible and Adaptable",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },

        },
    },
    {
        question: "Q2/10: During your work day you encounter some unexpected challenges. How do you handle this?",
        image: "images/Q2.gif",
        answers: {
            A1: {
                text: "By adapting and finding a quick solution",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A2: {
                text: "By seeking advice and collaborating with others",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: +1, H: 0, I: 0},
            },
            A3: {
                text: "By reorganizing and prioritizing your task list to ensure future success",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: +1, G: 0, H: 0, I: 0},
            },
            A4: {
                text: "By staying calm and believing everything will turn out ok",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A5: {
                text: "By thinking quickly and creatively",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A6: {
                text: "By tackling it head on with no hesitation",
                scores: { A: 0, B: 0, C: 0, D: 0, E: +1, F: 0, G: 0, H: +1, I: 0},
            },

        },
    },
    {
        question: "Q3/10: Following all of these challenges is an important decision, how do you approach it?",
        image: "images/Q3.gif",
        answers: {
            A1: {
                text: "Taking the time to weigh each and every option",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: +1, G: 0, H: 0, I: 0},
            },
            A2: {
                text: "Considering the impact on everyone involved",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: +1, H: 0, I: 0},
            },
            A3: {
                text: "Seeking input from others",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A4: {
                text: "Making a quick choice with the information you already know",
                scores: { A: 0, B: 0, C: 0, D: 0, E: +1, F: 0, G: 0, H: 0, I: 0},
            },
            A5: {
                text: "Following your gut instinct",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A6: {
                text: "Adapting as new information comes in that could possibly alter your decision",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: 0, G: 0, H: +1, I: 0},
            },

        },
    },
    {
        question: "Q4/10: Time for a mid-day break! What kind of favorite food might you be spotted with at lunch?",
        image: "images/Q4.gif",
        answers: {
            A1: {
                text: "Comfort food, something that feels familiar and warm",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: +1, G: 0, H: 0, I: 0},
            },
            A2: {
                text: "New dishes from different cultures",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A3: {
                text: "Beautifully presented meals and desserts",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A4: {
                text: "Street food, where you can try a variety of dishes in small portions",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A5: {
                text: "Home-cooked meals that you can share with others",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: +1, H: 0, I: 0},
            },
            A6: {
                text: "High-energy foods that fuel you up",
                scores: { A: 0, B: 0, C: 0, D: 0, E: +1, F: 0, G: 0, H: +1, I: 0},
            },

        },
    },
    {
        question: "Q5/10: After a little break it's time to get back to work. What will help motivate you the most to get back at it?",
        image: "images/Q5.gif",
        answers: {
            A1: {
                text: "Seeing steady progress in your projects",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: +1, G: 0, H: 0, I: 0},
            },
            A2: {
                text: "Tackling difficult tasks and succeeding",
                scores: { A: 0, B: 0, C: 0, D: 0, E: +1, F: 0, G: 0, H: +1, I: 0},
            },
            A3: {
                text: "Upcoming experiences, events, and new people to meet",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A4: {
                text: "Supporting the team and offering help to colleagues ",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: +1, H: 0, I: 0},
            },
            A5: {
                text: "Settling back into your old routines",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A6: {
                text: "The next holiday!",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },

        },
    },
    {
        question: "Q6/10: You've worked hard and now it's finally the weekend! How will you spend your free time?",
        image: "images/Q6.gif",
        answers: {
            A1: {
                text: "Read a book quietly at home",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: +1, G: 0, H: 0, I: 0},
            },
            A2: {
                text: "Explore new places and hope to meet new people",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A3: {
                text: "Organize your space and plan for the coming week",
                scores: { A: 0, B: +1, C: 0, D: 0, E: +1, F: 0, G: 0, H: 0, I: 0},
            },
            A4: {
                text: "Plan a get-together for you and all your friends",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: +1, H: 0, I: 0},
            },
            A5: {
                text: "Follow the wind and have a spontaneous adventure",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A6: {
                text: "Hit the gym, play some sports, and have an active weekend",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: +1, I: 0},
            },

        },
    },
    {
        question: "Q7/10: You received a last-minute invite to a gathering with some friends! What do you hope the social situation looks like?",
        image: "images/Q7.gif",
        answers: {
            A1: {
                text: "A quiet, intimate dinner with a couple close friends",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A2: {
                text: "An absolute party with lots of people, loud music, and flashing lights",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A3: {
                text: "Something well thought out, with a clear plan and people you've met before",
                scores: { A: 0, B: +1, C: 0, D: 0, E: +1, F: 0, G: 0, H: 0, I: 0},
            },
            A4: {
                text: "A true spontaneous gathering, the plans were made literally 5 minutes ago",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: +1, I: 0},
            },
            A5: {
                text: "A gathering with a cause to celebrate!",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: +1, H: 0, I: 0},
            },
            A6: {
                text: "Is it last minute? You'd rather just stay home and be at peace",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: +1, G: 0, H: 0, I: 0},
            },

        },
    },
    {
        question: "Q8/10: It's time to take a well-deserved vacation! What does your ideal vacation look like?",
        image: "images/Q8.gif",
        answers: {
            A1: {
                text: "Off the beaten path adventures- you don't care about the tourist spots",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A2: {
                text: "Slow, scenic, and ultimately relaxing",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A3: {
                text: "A stay-cation where you can enjoy time in your own space",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: +1, G: 0, H: 0, I: 0},
            },
            A4: {
                text: "Anything as long as you're with friends and family",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: +1, H: 0, I: 0},
            },
            A5: {
                text: "Hiking and outdoor expeditions",
                scores: { A: 0, B: 0, C: 0, D: 0, E: +1, F: 0, G: 0, H: +1, I: 0},
            },
            A6: {
                text: "Something you've spent lots of time planning, complete with a detailed itinerary",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },

        },
    },
    {
        question: "Q9/10: You forgot to check in during vacation and you now have messages to respond to! How do you prefer to communicate with others?",
        image: "images/Q9.gif",
        answers: {
            A1: {
                text: "Through quick, clear, concise messages",
                scores: { A: 0, B: 0, C: 0, D: 0, E: +1, F: 0, G: 0, H: +1, I: 0},
            },
            A2: {
                text: "Through previously scheduled chats, calls, and meet-ups",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: +1, G: 0, H: 0, I: 0},
            },
            A3: {
                text: "It depends on the situation/topic",
                scores: { A: 0, B: 0, C: +1, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A4: {
                text: "With empathy to ensure everyone feels heard",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: +1, H: 0, I: 0},
            },
            A5: {
                text: "Face-to-face interactions where both parties can fully feel present",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A6: {
                text: "Spontaneously, having piled up messages isn't something new to you",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0},
            },

        },
    },
    {
        question: "Q10/10: Before you know it, the holidays have rolled around! How will you be celebrating?",
        image: "images/Q10.gif",
        answers: {
            A1: {
                text: "At home, enjoying a peaceful time with family",
                scores: { A: +1, B: 0, C: 0, D: 0, E: 0, F: +1, G: 0, H: 0, I: 0},
            },
            A2: {
                text: "Seeing and reconnecting with as many people as possible",
                scores: { A: 0, B: 0, C: 0, D: +1, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A3: {
                text: "Traveling and exploring new places",
                scores: { A: 0, B: 0, C: +1, D: 0, E: +1, F: 0, G: 0, H: 0, I: 0},
            },
            A4: {
                text: "Participating in community activities, like volunteering",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: +1, H: 0, I: 0},
            },
            A5: {
                text: "Organizing fun holiday events and gatherings for people to enjoy",
                scores: { A: 0, B: +1, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0, I: 0},
            },
            A6: {
                text: "Going with whatever invites and plans land on your calendar",
                scores: { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: +1, I: 0},
            },

        },
    },
    
];

const resultOptions = {
    "Bulk": {
        image: "bulk.png",
    },
    "Container": {
        image: "container.png"
    },
    "General": {
        image: "general.png"
    },
    "Passenger": {
        image: "passenger.png"
    },
    "RoRo": {
        image: "roro.png"
    },
    "Tanker": {
        image: "tanker.png"
    },
    "Tug": {
        image: "tug.png"
    },
    "Vehicle": {
        image: "vehicle.png"
    },
    "Other": {
        image: "other.png"
    },
};

// listen for the start button
document.getElementById('start-button').addEventListener('click', function() {
    // hide title page and display the quiz pages
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    // initialize instance variables and call display function to start
    currentQuestion = 0;
    // key-value pairs
    userAnswers = {};
    // start the quiz
    displayQuestions();
});

// display questions dynamically in index.html
function displayQuestions() {
    // access the html quiz div and questions
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];

    // while there's questions to ask, generate into the html along with answers
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<div class="image-container"><img src="${question.image}" alt="Question ${currentQuestion + 1}"></div>`;
        }
        for (const option in question.answers) {
            html += `<button class="answer-option" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        // stitch the generated html into the index.html
        quizElement.innerHTML = html;
        attatchButtonClickHandlers();
    } else {

    }
}

// listen for option click
function attatchButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.answer-option');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}

// calculate answers based on choices
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];

    // iterate over the "answers" array from the current question
    for (const option in answer.scores) {
        // userAnswers[] initialized in start button listener
        // update the current total for each option AKA vessel type
        userAnswers[option] = (userAnswers[option] || 0) + answer.scores[option];
    }

    // move onto the next question
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestions();
    } else {
        showResult();
    }
}

// show the final results
function showResult() {
    const resultTitleContainer = document.querySelector('.result-title');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');

    // dictionary to translate type code
    let translate = {
        "A": "Bulk Carrier",
        "B": "Container Ship",
        "C": "General Cargo Vessel",
        "D": "Passenger Vessel",
        "E": "Roll-On, Roll-Off Vessel",
        "F": "Tank Ship",
        "G": "Tug & Articulated Tug Barge",
        "H": "Vehicle Carrier",
        "I": "Other Vessel"
    };

    let descriptions = {
        "A": "You are the person who can handle anything life throws at you. Friends and family know they can always count on you, as you bounce back from challenges with unwavering strength. You are the rock in any situation, providing steadfast support and resilience. <br><br> Like a bulk carrier, you take on heavy loads. Bulk carriers are designed to carry large quantities of cargo such as coal, grain, and ore, ensuring that vital resources reach their destinations efficiently. Your ability to manage and support significant responsibilities mirrors the vital role of bulk carriers in global trade, making you an indispensable asset in any scenario.",
        "B": "You love making lists and checking off tasks. You're all about maximizing your time and resources, thriving on routines and having everything in its place. Your keen eye for detail allows you to notice the little things that others might miss, ensuring nothing slips through the cracks. Like a container ship, you excel at compartmentalizing and organizing various tasks simultaneously. <br><br> Container ships are designed to transport goods in a systematic and orderly fashion, with each container securely placed in its designated spot. Your ability to organize reflects the precision and reliability of container ships in global logistics, making you an invaluable asset in any endeavor.",
        "C": "You can handle a variety of tasks and situations with ease. Creative solutions and quick thinking are your specialty, allowing you to make the best of what you have in any situation. Quick to adjust, you're always ready for change, embracing new challenges with flexibility and resourcefulness. Like a general cargo ship, you are versatile and adaptable, capable of carrying a wide range of goods and materials. <br><br> General cargo ships are designed to handle various types of cargo, ensuring that diverse shipments reach their destinations efficiently. Your ability to manage and adapt to different tasks mirrors the flexibility and versatility of general cargo ships, making you an essential asset in any circumstance.",
        "D": "You're always the life of the party, making everyone feel welcomed. You're great at taking care of others and making them feel special. You love to keep people engaged and having fun, and your charm and warmth draw people to you effortlessly. Like a passenger vessel, you excel at bringing people together and ensuring their comfort and enjoyment. <br><br> Passenger vessels are designed to provide a pleasant and engaging experience for their passengers, fostering a sense of community and well-being. Your ability to create a welcoming and enjoyable atmosphere mirrors the hospitality and charm of passenger vessels, making you a delightful presence in any social setting.",
        "E": "You get things done quickly and effectively, focusing on what works and not wasting time on unnecessary details. A realist who believes in facts and evidence, you handle tasks with speed and precision, utilizing smooth and straightforward processes to achieve your goals. Like a Roll-on/Roll-off (RoRo) vessel, you are efficient and pragmatic. <br><br> RoRo vessels carry trucks that in turn transport more cargo, streamlining the logistics process. Your ability to focus on practical solutions and deliver results mirrors the functionality and efficiency of RoRo vessels, making you a valuable asset in any operation",
        "F": "You take safety and rules seriously, making sure you follow all guidelines. You plan things out carefully and stick to the plan, maintaining a cool demeanor under pressure by adhering to your strategies. People trust you with important and sensitive tasks, knowing your commitment to thoroughness and reliability. Like a tanker vessel, you prioritize precision and safety in all your endeavors. <br><br> Tanker vessels are designed to transport liquid cargo, such as oil and chemicals, with utmost care, adhering to strict safety protocols to prevent accidents and ensure secure delivery. Your meticulous approach and dedication to safety mirror the precision and reliability of tanker vessels, making you a trusted and dependable individual in any situation.",
        "G": "You're always ready to lend a hand to those in need. A natural at reading social situations, you excel in understanding how others are feeling. Making sure everyone feels included and heard is important to you, and you always try to see the best in those around you. Like a tug vessel, you are dependable and always ready to assist, providing crucial support and guidance. <br><br> Tug vessels play a vital role in helping larger ships navigate difficult waters and dock safely, showcasing their strength and reliability. Your ability to offer support and understand the needs of others mirrors the essential role of tug vessels in the maritime world, making you a trusted and invaluable presence.",
        "H": "You handle multiple tasks with energy and enthusiasm, anticipating needs and addressing them before they become issues. Managing various responsibilities with ease, you feel a sense of pride and accomplishment in your leadership skills. Like a vehicle vessel, you are capable of carrying and organizing many different tasks at once. <br><br> Vehicle vessels are designed to transport numerous cars and vehicles efficiently, ensuring they are delivered safely and on time. Your ability to manage various responsibilities and anticipate needs mirrors the organizational and logistical prowess of vehicle vessels, making you an effective and dynamic leader.",
        "I": "You are special and unique, just like the diverse vessels in this category. Whether it's a luxurious yacht, a formidable military vessel, a diligent fishing vessel, or a cutting-edge research ship, you stand out with your distinct qualities and capabilities. <br><br> Your ability to adapt and excel in various roles sets you apart, making you an invaluable asset in any situation. Like these specialized vessels, your unique attributes and versatility enable you to handle diverse challenges with grace and effectiveness, showcasing your exceptional nature."
    }

    // if there's a tie for highest count, make OTHER category highest value
    const highestCount = Math.max(...Object.values(userAnswers));
    let count = Object.values(userAnswers).filter(value => value === highestCount).length;
    if (highestCount == 2) {userAnswers["I"] = 20};
    
    // find highest occurrence in answers then assign category
    const highestCountType = Object.keys(userAnswers).reduce((a, b) => userAnswers[a] > userAnswers[b] ? a : b);
    const personalityData = translate[highestCountType];
    const paragraph = descriptions[highestCountType];

    // display personality data pieces
    if (personalityData) {
        resultTitleContainer.innerHTML = `<h2>${personalityData}</h2>`;
        resultImage.src = "images/" + highestCountType + ".png";
        resultImage.alt = `${highestCountType.image} Image`;
        resultTextContainer.innerHTML = `<p1>${paragraph}</p1>`;
    } else {
        resultTitleContainer.innerHTML = `<p> ERROR: No result found</p>`;
    }

    // hide the quiz and show results
    document.getElementById('quiz').style.display = 'none'; // Hide the quiz
    document.getElementById('result').style.display = 'block'; // Show the result
    document.getElementById('restart-button').style.display = 'block'; // Show the restart button
}