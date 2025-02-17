document.addEventListener("DOMContentLoaded", function () {
    alert("WELCOME ДОРОГАЯ!");
});
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Домашний Университет</title>
    <style>
        /* Стили оставим без изменений */
    </style>
</head>
<body>
    <header>
        <h1>Домашний Университет</h1>
        <p>Ваш личный центр обучения и развития.</p>
    </header>

    <div class="container">
        <section>
            <h2>О нас</h2>
            <p>Домашний Университет — это пространство для изучения новых навыков и расширения знаний. Мы предоставляем доступ к образовательным материалам, курсам и ресурсам, чтобы каждый мог учиться в удобном темпе.</p>
        </section>

        <section>
            <h2>Шкала готовности материалов</h2>
            <div class="progress-bar">
                <div class="progress-bar-fill" id="progress-bar-fill"></div>
            </div>
            <p style="text-align: center; margin-top: 0.5rem;">75% материалов доступны сейчас</p>
        </section>

        <section>
            <h2>Категории</h2>
            <div class="categories">
                <button class="category-button" onclick="showCategory('English')">English</button>
                <button class="category-button" onclick="showCategory('Психология')">Психология</button>
                <button class="category-button" onclick="showCategory('Педагогика')">Педагогика</button>
                <button class="category-button" onclick="showCategory('Классика')">Классика</button>
                <button class="category-button" onclick="showCategory('Movies')">Movies</button>
            </div>
        </section>

        <section>
            <h2>Календарь мероприятий</h2>
            <div class="calendar">
                <table>
                    <thead>
                        <tr>
                            <th>Пн</th>
                            <th>Вт</th>
                            <th>Ср</th>
                            <th>Чт</th>
                            <th>Пт</th>
                            <th>Сб</th>
                            <th>Вс</th>
                        </tr>
                    </thead>
                    <tbody id="calendar-body">
                        <!-- Дни месяца будут генерироваться динамически -->
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h2>Заметки</h2>
            <div class="notes" id="notes-container">
                <div class="note-item">
                    <div class="note-title">Первая заметка</div>
                    <p>Это пример текста вашей заметки.</p>
                </div>
                <div class="note-item">
                    <div class="note-title">Вторая заметка</div>
                    <p>Добавьте свои важные идеи здесь.</p>
                </div>
            </div>
            <div class="add-note">
                <input type="text" id="note-input" placeholder="Введите заметку...">
                <button onclick="addNote()">Добавить</button>
            </div>
        </section>
    </div>

    <footer>
        <p>&copy; 2023 Домашний Университет. Все права защищены.</p>
    </footer>

    <script>
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
    </script>
</body>
</html>
