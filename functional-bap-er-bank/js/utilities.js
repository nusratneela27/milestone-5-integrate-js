function getInputFieldById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const TextElement = document.getElementById(elementId);
    const TextElementValueString = TextElement.innerText;
    const TextElementValue = parseFloat(TextElementValueString);
    return TextElementValue;
}

function setTextElementValueById(elementId, newValue){
    const TextElement = document.getElementById(elementId);
    TextElement.innerText = newValue;
}