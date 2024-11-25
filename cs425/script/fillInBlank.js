    let quizContainer = $('#quiz-container');
    // console.log(" HERER FILL IN THE BLANKS")

    // Render questions
    setTimeout(function(){
        questionsArray.forEach((item, index) => {
            let questionDiv = $(`
                <div class="question">
                    <p><strong>Q${index + 1}: ${item.question}</strong></p>
                    <input type="text" id="answer-${index}" placeholder="Your answer here">
                    <button class="check-answer-btn" data-index="${index}">Submit</button>
                    <p class="answer-feedback" id="feedback-${index}"></p>
                </div>
            `);
    
            quizContainer.append(questionDiv);
        });

        // Check answers on button click and show feedback
    $('.check-answer-btn').on('click', function() {
        let index = $(this).data('index');
        let userAnswer = $(`#answer-${index}`).val().trim().toLowerCase();
        let correctAnswer = questionsArray[index].answer.toLowerCase();

        if (userAnswer === correctAnswer) {
            $(`#feedback-${index}`).text(`Correct! The correct answer is "${correctAnswer}".`).addClass('correct').removeClass('incorrect').show();
        } else {
            $(`#feedback-${index}`).text(`Incorrect! The correct answer is "${correctAnswer}".`).addClass('incorrect').removeClass('correct').show();
        }
    });
    },100)
   

    
