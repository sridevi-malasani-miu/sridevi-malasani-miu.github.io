$(document).ready(function() {
    let quizContainer = $('#quiz-container');

    // Render questions
    questionsArray.forEach((item, index) => {
        let questionDiv = $(`
            <div class="question">
                <p><strong>Q${index + 1}: ${item.question}</strong></p>
                <ul class="choices">
                    ${item.choices.map((choice, i) => `
                        <li>
                            <input type="checkbox" id="q${index}-option${i}" name="q${index}" value="${choice}">
                            <label for="q${index}-option${i}">${choice}</label>
                        </li>
                    `).join('')}
                </ul>
                <button class="check-answer-btn" data-index="${index}">Check Answer</button>
                <p class="feedback" id="feedback-${index}"></p>
            </div>
        `);

        quizContainer.append(questionDiv);
    });

    // Check answers on button click
    $('.check-answer-btn').on('click', function() {
        console.log(" HERERRE ")
        let index = $(this).data('index');
        let selectedAnswers = $(`input[name=q${index}]:checked`).map(function() {
            return $(this).val();
        }).get();
        let correctAnswers = questionsArray[index].answer;

        // Sort to compare properly
        selectedAnswers.sort();
        correctAnswers.sort();

        if (JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswers)) {
            $(`#feedback-${index}`).text("Correct!").addClass('correct').removeClass('incorrect').show();
        } else {
            $(`#feedback-${index}`).text(`Incorrect! Correct answer: ${correctAnswers.join(', ')}`)
                .addClass('incorrect').removeClass('correct').show();
        }
    });
});
