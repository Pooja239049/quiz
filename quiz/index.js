const questions = [
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Transfer Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      choices: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>"
    },
    {
      question: "Which CSS property controls the text size?",
      choices: ["font-style", "text-size", "font-size", "text-style"],
      answer: "font-size"
    },
    {
      question: "Which language is used for styling web pages?",
      choices: ["HTML", "jQuery", "CSS", "XML"],
      answer: "CSS"
    },
    {
      question: "What does DOM stand for?",
      choices: [
        "Document Object Model",
        "Data Object Management",
        "Digital Ordinance Model",
        "Desktop Oriented Mode"
      ],
      answer: "Document Object Model"
    },
    {
      question: "Which HTML tag is used to display a picture on a webpage?",
      choices: ["<img>", "<picture>", "<src>", "<image>"],
      answer: "<img>"
    },
    {
      question: "Which programming language is used for web page behavior?",
      choices: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP"
      ],
      answer: "JavaScript"
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      choices: ["class", "style", "css", "font"],
      answer: "style"
    },
    {
      question: "Which CSS property is used to change the background color?",
      choices: ["background", "bgcolor", "color", "background-color"],
      answer: "background-color"
    },
    {
      question: "Which of these tags is used to define a table row in HTML?",
      choices: ["<td>", "<tr>", "<th>", "<table-row>"],
      answer: "<tr>"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;
  let timer;
  
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const timeEl = document.getElementById("time");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  
  function startTimer() {
    timer = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        showScore();
      }
    }, 1000);
  }
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    choicesEl.innerHTML = "";
  
    q.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.onclick = () => selectAnswer(btn, choice);
      choicesEl.appendChild(btn);
    });
  }
  
  function selectAnswer(button, choice) {
    const correct = questions[currentQuestion].answer;
    Array.from(choicesEl.children).forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
      }
    });
  
    if (choice === correct) {
      score++;
    }
  
    nextBtn.style.display = "inline-block";
  }
  
  nextBtn.onclick = () => {
    currentQuestion++;
    nextBtn.style.display = "none";
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      clearInterval(timer);
      showScore();
    }
  };
  
  function showScore() {
    questionEl.style.display = "none";
    choicesEl.style.display = "none";
    nextBtn.style.display = "none";
    document.getElementById("timer").style.display = "none";
    resultEl.textContent = `Your Score: ${score} / ${questions.length}`;
  }
  
  window.onload = () => {
    showQuestion();
    startTimer();
  };