//initial function for a specific quiz
function javascriptfunction() {



    const javascript = document.getElementById("javascript");

    //second function after clicking the  button
    javascript.addEventListener("click", () => {

        let quiz = document.getElementById("quiz");
        quiz.style.display = "block";

        let selector = document.getElementById("selector");
        selector.style.display = "none"

        const quizDB = [
            {
                question: "Q1. Inside which HTML element do we put the JavaScript?",
                a: "<script>",
                b: "<js>",
                c: "<javascript>",
                d: "<scripting>",
                ans: "ans1"
                //ans1
            },
            {
                question: "Q2. How do you write 'Hello World' in an alert box?",
                a: "alertBox('Hello World');",
                b: "msgBox('Hello World');",
                c: "msg('Hello World');",
                d: "alert('Hello World');",
                ans: "ans4"
                //ans1
            },
            {
                question: "Q3. How does a FOR loop start?",
                a: "for (i = 0; i <= 5; i++)  ",
                b: "for (i = 0; i <= 5)",
                c: "for (i <= 5; i++)",
                d: "for i = 1 to 5",
                ans: "ans1"
                //ans1
            },
            {
                question: "Q4. How do you find the number with the highest value of x and y?",
                a: "top(x, y)",
                b: "Math.max(x, y)  ",
                c: "Math.ceil(x, y)",
                d: "ceil(x, y)",
                ans: "ans2"
                //ans2
            },
            {
                question: "Q5. Which event occurs when the user clicks on an HTML element?",
                a: "onmouseclick",
                b: "onmouseover",
                c: "onclick",
                d: "onchange",
                ans: "ans3"
                //ans3
            },

        ]


        let question = document.getElementById("question");
        const opt1 = document.querySelector("#opt1");
        const opt2 = document.querySelector("#opt2");
        const opt3 = document.querySelector("#opt3");
        const opt4 = document.querySelector("#opt4");


        let selectedAnswers = []; // Array to store the selected answers

        let i = 0

        const loadquestion = () => {
            const currentQuestion = quizDB[i]; // Get the current question from the quizDB array
            question.innerText = currentQuestion.question; // Set the question text

            // Set the answer choices for the options
            opt1.innerText = currentQuestion.a;
            opt2.innerText = currentQuestion.b;
            opt3.innerText = currentQuestion.c;
            opt4.innerText = currentQuestion.d;
        }

        loadquestion();



        //now we have to get the id of our options and see if its match with the correct answer.
        const answers = document.querySelectorAll(".answer");

        const submit = document.querySelector("#submit");
        let showscore = document.querySelector("#score");


        const getanswers = () => {

            let ans;
            answers.forEach((currentans) => {
                if (currentans.checked) {
                    ans = currentans.id;
                }
            })

            selectedAnswers[i] = ans; // Store the selected answer for the current question in the array
            return ans;

        };
        //this is for deselect the previoous option
        const deselectall = () => {
            answers.forEach((currentans) => {
                currentans.checked = false;
            })
        }
        let score = 0
        // this for submiting your answer 
        submit.addEventListener("click", () => {
            const checkedanswer = getanswers();
            console.log(checkedanswer);


            if (checkedanswer === quizDB[i].ans) {
                score++
            }

            deselectall();//this function will deselect the option we have selected in the previouus question. function is above
            i++

            if (i < quizDB.length) {
                loadquestion()
            } else {
                showscore.innerHTML = `
        <h3>you scored: ${score}/${quizDB.length} 😃 </h3>
        <button class="btn" onclick="location.reload()">Retake<button>
    `
                showscore.classList.remove("scorearea");
            }


        });


        //this is for reverse button 
        // previousButton= document.getElementById("previous")
        // previousButton.addEventListener("click", () => {
        //     if (i > 0) {
        //       i--; // Decrement the value of i to move to the previous question
        //       loadquestion(); // Load the previous question's data

        //       deselectall(); // Deselect the previously selected answer

          
        //       const prevAnswer = selectedAnswers[i];
        //       if (prevAnswer && prevAnswer === quizDB[i].ans) {
        //         score++; // Increment the score if the previously selected answer was correct
        //       }
        //       showscore.textContent = score; // Update the score display


        //     }
        //   });
          


    })

}

javascriptfunction();


function gitfunction() {


    const git = document.getElementById("git");

    git.addEventListener("click", () => {

        let quiz = document.getElementById("quiz");
        quiz.style.display = "block";

        let selector = document.getElementById("selector");
        selector.style.display = "none"


        const quizDB = [
            {
                question: "Q1. What is Git?",
                a: "a) A version control system",
                b: "b) A programming language",
                c: "c) A text editor",
                d: "d) An operating system",
                ans: "ans1"
                //ans1
            },
            {
                question: "Q2.Who developed Git?",
                a: "saad ansari",
                b: " Bill Gates",
                c: "Steve Jobs",
                d: " Linus Torvalds",
                ans: "ans4"
                //ans1
            },
            {
                question: "Q3.What is the primary purpose of Git?",
                a: " Creating graphical user interfaces ",
                b: "Managing project documentation",
                c: " Managing and tracking changes in source code",
                d: "Managing databases",
                ans: "ans3"
                //ans1
            },
            {
                question: "Q4. Which command is used to create a new Git repository?",
                a: " git new-repo",
                b: " git init  ",
                c: "git create",
                d: "git start",
                ans: "ans2"
                //ans2
            },
            {
                question: "Q5. What does 'git clone' do?",
                a: "Deletes the local repository",
                b: "Creates a copy of the remote repository on the local machine",
                c: "Creates a new branch",
                d: "Reverts the last commit",
                ans: "ans2"
                //ans3
            },

        ]

        let question = document.getElementById("question");
        const opt1 = document.querySelector("#opt1");
        const opt2 = document.querySelector("#opt2");
        const opt3 = document.querySelector("#opt3");
        const opt4 = document.querySelector("#opt4");

        let i = 0

        const loadquestion = () => {
            const currentQuestion = quizDB[i]; // Get the current question from the quizDB array
            question.innerText = currentQuestion.question; // Set the question text

            // Set the answer choices for the options
            opt1.innerText = currentQuestion.a;
            opt2.innerText = currentQuestion.b;
            opt3.innerText = currentQuestion.c;
            opt4.innerText = currentQuestion.d;
        }

        loadquestion();



        //now we have to get the id of our options and see if its match with the correct answer.
        const answers = document.querySelectorAll(".answer");

        const submit = document.querySelector("#submit");
        let showscore = document.querySelector("#score");


        const getanswers = () => {

            let ans;
            answers.forEach((currentans) => {
                if (currentans.checked) {
                    ans = currentans.id;
                }
            })

            return ans;
        };
        //this is for deselect the previoous option
        const deselectall = () => {
            answers.forEach((currentans) => {
                currentans.checked = false;
            })
        }
        let score = 0

        submit.addEventListener("click", () => {
            const checkedanswer = getanswers();
            console.log(checkedanswer);


            if (checkedanswer === quizDB[i].ans) {
                score++
            }

            deselectall();//this function will deselect the option we have selected in the previouus question. function is above
            i++

            if (i < quizDB.length) {
                loadquestion()
            } else {
                showscore.innerHTML = `
        <h3>you scored: ${score}/${quizDB.length} 😃 </h3>
        <button class="btn" onclick="location.reload()">Retake<button>
    `
                showscore.classList.remove("scorearea");
            }


        });




    })

}

gitfunction()


function htmlfunction() {


    const html = document.getElementById("html");

    html.addEventListener("click", () => {

        let quiz = document.getElementById("quiz");
        quiz.style.display = "block";

        let selector = document.getElementById("selector");
        selector.style.display = "none"


        const quizDB = [
            {
                question: "Q1.What does HTML stand for?",
                a: "Hyperlinks and Text Markup Language",
                b: " Hypertext Markup Language",
                c: "Home Tool Markup Language",
                d: " Hyper Text Modeling Language",
                ans: "ans1"
                //ans1
            },
            {
                question: "Q2.Which HTML tag is used to define the main content of a web page?",
                a: "<body>",
                b: " <head>",
                c: " <title>",
                d: " <main>",
                ans: "ans4"
                //ans1
            },
            {
                question: "Q3. Which attribute is used to provide alternative text for an image in HTML?",
                a: "  alt ",
                b: "src",
                c: "  title",
                d: "href",
                ans: "ans1"
                //ans1
            },
            {
                question: "Q4. What is the correct HTML tag for creating a hyperlink?",
                a: "<url>",
                b: " <link>  ",
                c: "<a>",
                d: "<hyperlink>",
                ans: "ans3"
                //ans2
            },
            {
                question: "Q5. Which HTML element is used to define a table row?",
                a: "<row>",
                b: "<td>",
                c: "<tr>",
                d: "<table-row>",
                ans: "ans3"
                //ans3
            },

        ]

        let question = document.getElementById("question");
        const opt1 = document.querySelector("#opt1");
        const opt2 = document.querySelector("#opt2");
        const opt3 = document.querySelector("#opt3");
        const opt4 = document.querySelector("#opt4");

        let i = 0

        const loadquestion = () => {
            const currentQuestion = quizDB[i]; // Get the current question from the quizDB array
            question.innerText = currentQuestion.question; // Set the question text

            // Set the answer choices for the options
            opt1.innerText = currentQuestion.a;
            opt2.innerText = currentQuestion.b;
            opt3.innerText = currentQuestion.c;
            opt4.innerText = currentQuestion.d;
        }

        loadquestion();



        //now we have to get the id of our options and see if its match with the correct answer.
        const answers = document.querySelectorAll(".answer");

        const submit = document.querySelector("#submit");
        let showscore = document.querySelector("#score");


        const getanswers = () => {

            let ans;
            answers.forEach((currentans) => {
                if (currentans.checked) {
                    ans = currentans.id;
                }
            })

            return ans;
        };
        //this is for deselect the previoous option
        const deselectall = () => {
            answers.forEach((currentans) => {
                currentans.checked = false;
            })
        }
        let score = 0

        submit.addEventListener("click", () => {
            const checkedanswer = getanswers();
            console.log(checkedanswer);


            if (checkedanswer === quizDB[i].ans) {
                score++
            }

            deselectall();//this function will deselect the option we have selected in the previouus question. function is above
            i++

            if (i < quizDB.length) {
                loadquestion()
            } else {
                showscore.innerHTML = `
            <h3>you scored: ${score}/${quizDB.length} 😃 </h3>
            <button class="btn" onclick="location.reload()">Retake<button>
        `
                showscore.classList.remove("scorearea");
            }


        });




    })

}

htmlfunction()



function cssfunction() {


    const css = document.getElementById("css");

    css.addEventListener("click", () => {

        let quiz = document.getElementById("quiz");
        quiz.style.display = "block";

        let selector = document.getElementById("selector");
        selector.style.display = "none"


        const quizDB = [
            {
                question: "Q1.What does CSS stand for?",
                a: " Computer Style Sheets",
                b: " Cascading Style Sheets",
                c: " Creative Style Sheets",
                d: "Colorful Style Sheets",
                ans: "ans2"
                //ans1
            },
            {
                question: "Q2.Which CSS property is used to change the text color of an element?",
                a: "font-color",
                b: " color",
                c: " text-color",
                d: " font-style",
                ans: "ans2"
                //ans1
            },
            {
                question: "Q3.Which CSS property is used to control the spacing between lines of text?",
                a: "  line-height ",
                b: " text-spacing",
                c: " letter-spacing",
                d: " word-spacing",
                ans: "ans1"
                //ans1
            },
            {
                question: "Q4. What does the CSS property 'display: none;' do?",
                a: "Hides the element from the page without affecting the layout.",
                b: "Removes the element from the DOM completely.",
                c: "Displays the element as an inline element.",
                d: " Displays the element as a block-level element.",
                ans: "ans2"
                //ans2
            },
            {
                question: "Q5. Which CSS selector selects all the elements of a specific type?",
                a: ".class",
                b: "#id",
                c: "element",
                d: "*",
                ans: "ans3"
                //ans3
            },

        ]

        let question = document.getElementById("question");
        const opt1 = document.querySelector("#opt1");
        const opt2 = document.querySelector("#opt2");
        const opt3 = document.querySelector("#opt3");
        const opt4 = document.querySelector("#opt4");

        let i = 0

        const loadquestion = () => {
            const currentQuestion = quizDB[i]; // Get the current question from the quizDB array
            question.innerText = currentQuestion.question; // Set the question text

            // Set the answer choices for the options
            opt1.innerText = currentQuestion.a;
            opt2.innerText = currentQuestion.b;
            opt3.innerText = currentQuestion.c;
            opt4.innerText = currentQuestion.d;
        }

        loadquestion();



        //now we have to get the id of our options and see if its match with the correct answer.
        const answers = document.querySelectorAll(".answer");

        const submit = document.querySelector("#submit");
        let showscore = document.querySelector("#score");


        const getanswers = () => {

            let ans;
            answers.forEach((currentans) => {
                if (currentans.checked) {
                    ans = currentans.id;
                }
            })

            return ans;
        };
        //this is for deselect the previoous option
        const deselectall = () => {
            answers.forEach((currentans) => {
                currentans.checked = false;
            })
        }
        let score = 0

        submit.addEventListener("click", () => {
            const checkedanswer = getanswers();
            console.log(checkedanswer);


            if (checkedanswer === quizDB[i].ans) {
                score++
            }

            deselectall();//this function will deselect the option we have selected in the previouus question. function is above
            i++

            if (i < quizDB.length) {
                loadquestion()
            } else {
                showscore.innerHTML = `
            <h3>you scored: ${score}/${quizDB.length} 😃 </h3>
            <button class="btn" onclick="location.reload()">Retake<button>
        `
                showscore.classList.remove("scorearea");
            }


        });




    })

}

cssfunction()