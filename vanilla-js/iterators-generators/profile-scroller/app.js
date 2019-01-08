const data = [
  {
    name: 'Double Decker',
    age: 3,
    gender: 'other',
    lookingfor: 'articulated bus',
    location: 'London, UK',
    image: 'https://randomuser.me/api/portraits/men/12.jpg'
  },
  {
    name: 'Wonder Woman',
    age: 23,
    gender: 'female',
    lookingfor: 'male',
    location: 'Gotham City, NJ',
    image: 'https://randomuser.me/api/portraits/women/80.jpg'
  },
  {
    name: 'Aquaman',
    age: 30,
    gender: 'fishman',
    lookingfor: 'mermaid',
    location: 'Atlantic Ocean',
    image: 'https://randomuser.me/api/portraits/men/53.jpg'
  }
];

const profiles = profileIterator(data);

// Call the first profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);

// Next Profile Display
function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">Age: ${currentProfile.age}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}">
    `;
  } else {
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  };
}
