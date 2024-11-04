function addGratitude () {
    const input = document.getElementById('gratitudeInput');
    const gratitudeText = input.value.trim();
    if (gratitudeText) {
        const li = document.createElement('li');
        li.textContent = gratitudeText;
        li.creatTextNode = gratitudeText; 
        document.getElementById('gratitudeList').appendChild(li);
        input.value = ''; // clear the input box after adding
    } 

    var newEl = document.createElement('li');
    var newText = document.createTextNode('gratitude');
    newEl.appendChild(newText);
 
} 


 
