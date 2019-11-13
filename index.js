console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Itishmita Mishra',
        age: 21,
        city: 'Raigarh',
        language: 'Python',
        framework: 'Spyder',
        image: 'img/iti.jfif'
    },

    {
        name: 'Anjali Deep',
        age: 22,
        city: 'Delhi',
        language: 'Python',
        framework: 'Django',
        image: 'img/anjali.jpg'
    },

    {
        name: 'Suraj Dhankhar',
        age: 21,
        city: 'Korba',
        language: 'Python',
        framework: 'Spyder',
        image: 'img/suraj.jpg'
    },
    {
        name: 'Sohaib Khan',
        age: 24,
        city: 'Delhi',
        language: 'Javascript',
        framework: 'Angular',
        image: 'img/sohaib.jpg'
    }
]


// CV Iterator
function cvIterator(profiles){
    let nextIndex=0;
    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true}
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src='${currentCandidate.image}'>`;
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }

}