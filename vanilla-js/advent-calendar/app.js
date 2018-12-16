const calendarButton = document.querySelector('.btn-start');
const calendarContainer = document.querySelector('.container');

const calendarDays = 24;

const openDoor = (path, e) => {
  e.target.parentNode.style.backgroundImage = `url(${path})`;
  e.target.style.opacity = '0';
  e.target.style.backgroundColor = '#9140aa';
};

const createCalendar = () => {
  for (let i = 0; i < calendarDays; i++) {
    const calendarHatchet = document.createElement('div');
    const calendarHatchetText = document.createElement('div');

    calendarHatchet.classList.add('image');
    calendarHatchet.style.gridArea = 'door' + (i + 1);
    calendarContainer.appendChild(calendarHatchet);

    calendarHatchetText.classList.add('text');
    calendarHatchetText.innerHTML = i + 1;
    calendarHatchet.appendChild(calendarHatchetText);

    courseNumber = i + 1;
    let coursePath = `./img/course-${courseNumber}.jpg`;

    calendarHatchetText.addEventListener(
      'click',
      openDoor.bind(null, coursePath)
    );
  }
};

calendarButton.addEventListener('click', createCalendar);
