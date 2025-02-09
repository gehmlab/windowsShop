let formData = new FormData();

// ✅ Очищает formData и все поля ввода
function resetCalcData() {
    formData = new FormData();
    clearInputs();
}

// ✅ Очищает все поля формы
function clearInputs() {
    const widthInputElement = document.getElementById('width');
    const heightInputElement = document.getElementById('height');
    const viewTypeSelect = document.getElementById('view_type');
    const coldElement = document.getElementById('cold');
    const warmElement = document.getElementById('warm');

    if (widthInputElement) widthInputElement.value = '';
    if (heightInputElement) heightInputElement.value = '';
    if (viewTypeSelect) viewTypeSelect.value = '';

    if (coldElement) {
        const coldCheckbox = coldElement.previousElementSibling;
        if (coldCheckbox) coldCheckbox.checked = false;
    }

    if (warmElement) {
        const warmCheckbox = warmElement.previousElementSibling;
        if (warmCheckbox) warmCheckbox.checked = false;
    }
}

// ✅ Устанавливает размеры окна и обновляет formData
function setSizeWindows() {
    const widthInputElement = document.getElementById('width');
    const heightInputElement = document.getElementById('height');

    if (!widthInputElement || !heightInputElement) return;

    function filterOnlyNumbers(event) {
        event.target.value = event.target.value.replace(/[^0-9]/g, '');
    }

    function updateFormData() {
        formData.set('width', widthInputElement.value);
        formData.set('height', heightInputElement.value);
    }

    [widthInputElement, heightInputElement].forEach(input => {
        input.addEventListener('input', filterOnlyNumbers);
        input.addEventListener('change', updateFormData);
    });
}

// ✅ Устанавливает тип стеклопакета и обновляет formData
function selectTypeGlasses() {
    const viewTypeSelect = document.getElementById('view_type');
    const coldElement = document.getElementById('cold');
    const warmElement = document.getElementById('warm');

    if (!coldElement || !warmElement || !viewTypeSelect) return;

    const coldCheckbox = coldElement.previousElementSibling;
    const warmCheckbox = warmElement.previousElementSibling;

    if (!coldCheckbox || !warmCheckbox) return;

    function updateFormData() {
        const typeGlazing = coldCheckbox.checked ? 'холодное' : warmCheckbox.checked ? 'теплое' : '';

        formData.set('view_type', viewTypeSelect.value || '');
        formData.set('type_glazing', typeGlazing || '');
    }

    coldCheckbox.addEventListener('change', () => {
        if (coldCheckbox.checked) warmCheckbox.checked = false;
        updateFormData();
    });

    warmCheckbox.addEventListener('change', () => {
        if (warmCheckbox.checked) coldCheckbox.checked = false;
        updateFormData();
    });

    viewTypeSelect.addEventListener('change', updateFormData);
}

// ✅ Получает данные из formData
function getFormData() {
    return Object.fromEntries(formData.entries());
}

// ✅ Запуск модуля
function calc() {
    setSizeWindows();
    selectTypeGlasses();
    return { getFormData, selectTypeGlasses, setSizeWindows, resetCalcData, clearInputs };
}

export default calc;
