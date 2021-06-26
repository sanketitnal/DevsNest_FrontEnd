window.addEventListener("load", () => {
    let html_question = document.getElementById("question"),
        html_options  = [ document.getElementById("a"), document.getElementById("b"), document.getElementById("c"), document.getElementById("d") ],
        radio_options = [ document.getElementById("A"), document.getElementById("B"), document.getElementById("C"), document.getElementById("D") ],
        questions_status = document.getElementById("questions-status"),
        cur_QNumber = null, answer_selected = new Array(questions.length),
        loadQuestionsStatus = function() {
            const handleClick = event => loadQuestion(event.target.id)
            for(let i = 0; i < questions.length; ++i) {
                let Qitem = document.createElement("div");
                Qitem.className = "Q";
                Qitem.id = i;
                Qitem.innerHTML = i+1;
                Qitem.addEventListener("click", handleClick);
                questions_status.appendChild(Qitem);
            }
        },
        loadQuestion  = function(question_no) {
            if(question_no < 0 || question_no >= questions.length)  return;
            if(cur_QNumber !== null) {
                let Qitem = document.getElementById(cur_QNumber);
                Qitem.classList.toggle("QItemSelected");
                Qitem.style.backgroundColor = (answer_selected[cur_QNumber] == null ? "red": "green");
            }
            document.getElementById(question_no).classList.toggle("QItemSelected");
            cur_QNumber = Number(question_no);
            html_question.innerHTML = `Q${(Number(question_no)+1)}) ` + questions[question_no].question;
            for(let i = 0; i < 4; ++i) {
                html_options[i].innerHTML = questions[question_no].answers[i];
                radio_options[i].checked = answer_selected[question_no] == radio_options[i].id ? true: false;
            }
        };
    html_options.forEach(item => item.addEventListener("click", () => answer_selected[cur_QNumber] = item.htmlFor));
    for(let item of document.getElementsByClassName("move-button")) {
        if(item.id != null) {
            item.addEventListener("click", () => {
                switch(item.id) {
                    case "first": next_question = loadQuestion(0);break;
                    case "prev" : next_question = loadQuestion(Number(cur_QNumber)-1);break;
                    case "next" : next_question = loadQuestion(Number(cur_QNumber)+1);break;
                    case "last" : next_question = loadQuestion(questions.length-1);break;
                }
            })
        }
    }
    document.getElementById("clear").addEventListener("click", () => {
        answer_selected[cur_QNumber] = null;
        loadQuestion(cur_QNumber);
        document.getElementById(cur_QNumber).style.backgroundColor = "red";
    })
    loadQuestionsStatus();
    loadQuestion(0);
})