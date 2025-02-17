// Using Map Data Structure to keep the record-

const poll = new Map();
poll.set('React', 0);
poll.set('Angular', 0);
poll.set('Vue', 0);
poll.set('Svelte', 0);
poll.set('Others', 0);

function submitForm(e) {
    e.preventDefault();
    
    const selectOption = document.querySelector("input[name='poll-option']:checked");
    
    if(!selectOption) {
        alert('First Select any Framework!');
        return;
    }

    let voteCount = poll.get(selectOption.value);
    poll.set(selectOption.value, voteCount + 1);
    
    displayResults();

    // Disable options and button after submit-
    document.querySelector('#poll-form')
        .querySelectorAll('input, button')
        .forEach((element) => element.setAttribute('disabled', true));
}

// Displaying the result in the DOM--
function displayResults() {
    const result = document.querySelector('#results');
    result.innerHTML = '';
    
    for(let [option,votes] of poll) {
        const optionElement = document.createElement('div');
        optionElement.classList.add('border-bottom', 'd-flex','justify-content-between','p-2', 'text-danger');
        optionElement.innerHTML = `<strong>${option}:</strong> ${votes} votes`;

        result.appendChild(optionElement);
    }
}

document.getElementById('poll-form').addEventListener('submit',submitForm);