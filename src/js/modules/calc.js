const formData = new FormData();

function setSizeWindows() {
    const widthInputElement = document.getElementById('width');
    const heightInputElement = document.getElementById('height');

    function filterOnlyNumbers(event) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    }

    function updateFormData() {
        formData.set('width', widthInputElement.value);
        formData.set('height', heightInputElement.value);
    }

    [widthInputElement, heightInputElement].forEach(input => {
        input.addEventListener('input', (event) => {
            filterOnlyNumbers(event);
            updateFormData();
        });
    });
}

function selectTypeGlasses() {
    const viewTypeSelect = document.getElementById('view_type');
    const coldCheckbox = document.getElementById('cold').previousElementSibling;
    const warmCheckbox = document.getElementById('warm').previousElementSibling;

    const typeGlazing = coldCheckbox.checked ? 'холодное' : warmCheckbox.checked ? 'теплое' : '';

    formData.set('view_type', viewTypeSelect.value);
    formData.set('type_glazing', typeGlazing);
}

// ✅ Возвращаем объект вместо `FormData`
function getFormData() {
    return Object.fromEntries(formData.entries());
}

// Экспортируем методы
function calc() {
    setSizeWindows();
    return { getFormData, selectTypeGlasses, setSizeWindows };
}

export default calc;
