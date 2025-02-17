// Функция для добавления заметки
function addNote() {
    const input = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');
    const noteText = input.value.trim();

    if (noteText) {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';

        const noteTitle = document.createElement('div');
        noteTitle.className = 'note-title';
        noteTitle.textContent = 'Новая заметка';

        const noteContent = document.createElement('p');
        noteContent.textContent = noteText;

        noteItem.appendChild(noteTitle);
        noteItem.appendChild(noteContent);

        notesContainer.insertBefore(noteItem, document.querySelector('.add-note'));

        input.value = '';
    }
}

// Функция для отображения выбранной категории
function showCategory(categoryName) {
    alert(`Вы выбрали категорию: ${categoryName}`);
}

// Функция для генерации календаря
function generateCalendar() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const startDay = firstDay.getDay(); // День недели первого дня месяца
    const daysInMonth = lastDay.getDate(); // Количество дней в месяце

    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = ''; // Очистка таблицы

    let date = 1;
    for (let i = 0; i < 6; i++) { // Максимум 6 строк в календаре
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) { // 7 дней в неделе
            const cell = document.createElement('td');

            if (i === 0 && j < startDay) {
                // Пустые ячейки перед первым днем месяца
                cell.textContent = '';
            } else if (date > daysInMonth) {
                // Если дата превышает количество дней в месяце, завершаем
                break;
            } else {
                cell.textContent = date;
                date++;
            }

            row.appendChild(cell);
        }

        calendarBody.appendChild(row);

        // Если все дни месяца добавлены, выходим из цикла
        if (date > daysInMonth) {
            break;
        }
    }
}

// Инициализация прогресс-бара
const progressBarFill = document.getElementById('progress-bar-fill');
progressBarFill.style.width = '75%'; // Установка начального значения

// Генерация календаря при загрузке страницы
generateCalendar();
