fetch('staticData/json/fugg.json')
.then(res => res.json())
.then(data => {
    const box = document.getElementById('output');

    let html = `<h2>${data.title}</h2><ul>`;

    data.fruits.forEach(fruit => {
    html += `<li>${fruit.name} - ${fruit.price}</li>`;
    });

    html += `</ul>`;

    box.innerHTML = html;
})
.catch(err => console.error('Error loading JSON:', err));
