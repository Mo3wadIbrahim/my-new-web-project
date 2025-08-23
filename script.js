    
        // Quiz logic
        const quizQuestions = [
            { question: "q1", answer: "b" },
            { question: "q2", answer: "b" },
            { question: "q3", answer: "c" },
            { question: "q4", answer: "a" },
            { question: "q5", answer: "c" },
            { question: "q6", answer: "c" },
            { question: "q7", answer: "b" },
            { question: "q8", answer: "c" }
        ];

        function submitQuiz() {
            let score = 0;
            const resultsList = document.getElementById('answers-list');
            resultsList.innerHTML = '';
            
            quizQuestions.forEach((q, index) => {
                const questionNumber = index + 1;
                const userAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);
                const listItem = document.createElement('li');
                
                if (userAnswer) {
                    const isCorrect = userAnswer.value === q.answer;
                    const answerText = userAnswer.nextElementSibling.innerText;
                    
                    if (isCorrect) {
                        score++;
                        listItem.innerHTML = `Question ${questionNumber}: <span class="correct-answer-text">Correct!</span> (You chose: "${answerText}")`;
                    } else {
                        const correctAnswerElement = document.querySelector(`input[name="q${questionNumber}"][value="${q.answer}"]`);
                        const correctAnswerText = correctAnswerElement.nextElementSibling.innerText;
                        listItem.innerHTML = `Question ${questionNumber}: <span class="wrong-answer-text">Incorrect.</span> The correct answer was: "${correctAnswerText}"`;
                    }
                } else {
                    listItem.innerHTML = `Question ${questionNumber}: <span class="wrong-answer-text">Unanswered.</span>`;
                }
                resultsList.appendChild(listItem);
            });
            
            document.getElementById('score-display').innerText = `You scored ${score} out of ${quizQuestions.length}.`;
            document.getElementById('results-container').style.display = 'block';
        }
        
        function resetQuiz() {
            document.getElementById('quiz-form').reset();
            document.getElementById('results-container').style.display = 'none';
        }
    