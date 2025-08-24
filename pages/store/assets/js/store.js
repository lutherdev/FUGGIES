fetch('/staticData/json/fugg.json')
.then(res => res.json())
.then(products => {
    products.forEach(product => {
        // find the right category container
        const categoryDiv = document.querySelector(
            `.fuggCategory[name="${product.category}"]`
        );

        if (categoryDiv) {
            // create the box
            const box = document.createElement('div');
            box.classList.add('fuggBox');
            box.style.backgroundColor = product.color;
            box.innerHTML = `
                <div class="img"><img src="${product.img}" alt="${product.name}"></div>
                <div class="desc">${product.name} | ₱${product.price} | ${product.quantity} left</div>
            `;
            categoryDiv.appendChild(box);
        } else {
            console.warn(`No category container found for: ${product.category}`);
        }
    });
})
.catch(err => console.error('Error loading products:', err));


//Fart fugg - P750 (damaged box P700)

// New Fuggs on the block- P550

// Festive fugg - P400 each/Pair P750

// Gold Fuggs - P600

// Family Fuggs - P700

// Gremlins - P900 each/ P1600 Pair

// Mini Rascals - P900

// LOTR - P700each /P1200Pair / P1700 Set of 3

// Glow - P600

// DC - P750 each / P1300 Pair / P1800 Pair of 3 / P2300 Pair of 4

// Love Fugg - P900

// Keyrings P450 (Chase me button P550)

// Baby fugg P450
// Algernon
// Hairy  fuggs - P650
