// speaker container
const speakerContainer = document.querySelector('.speakers');
// speaker list
const speakers = [
  {
    id: 1,
    name: 'Alazar yilma',
    speakerTitle:
      'Ex-senior web developer @ Ethiopian airlines | Microverse student',
    speakerBio:
      'Alazar studies information science from Haramaya university and have deep understanding of machine learning. Currently working as a remote developer.',
    photo: 'images/person-one.jpg',
  },
  {
    id: 2,
    name: 'SohYeong Noh',
    speakerTitle: 'Director of Art Centre Nabi and A board memeber of CC Korea',
    speakerBio:
      'As the main Venue for ne media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.',
    photo: 'images/person-two.jpg',
  },
  {
    id: 3,
    name: 'Yochai Benkler',
    speakerTitle:
      'Berkman professor of Enterpreneurial Legal Studies at Harvard Law School',
    speakerBio:
      'Benkler studies commons-based peer productio, and published his seminal book The wealth of Networks in 2006.',
    photo: 'images/person-three.jpg',
  },
  {
    id: 4,
    name: 'Chebude Abdisa',
    speakerTitle: 'Director of Art Centre Nabi and A board memeber of CC Korea',
    speakerBio:
      'As the main Venue for ne media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.',
    photo: 'images/person-four.jpg',
  },
];
// function to generate card
function generateCard(speaker) {
  const speakerHtml = ` <div class="speaker">\
    <div class="speaker-photo">\
      <img src="${
  speaker.photo
}" alt=" sohyeong noh photo">\
    </div>\
    <div class="speaker-detail">\
      <p class="black speaker-name">${
  speaker.name
}</p>\
      <p class="speaker-title orange">${
  speaker.speakerTitle
}</p>\
      <p class="speaker-bio black"> ${
  speaker.speakerBio
}</p>\
    </div>\
  </div>`;
  return speakerHtml;
}
let htmlContent = '';
speakers.forEach((speaker) => {
  htmlContent += generateCard(speaker);
});
speakerContainer.innerHTML = htmlContent;
