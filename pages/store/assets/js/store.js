fetch('/FUGGIES/staticData/json/fugg.json')
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

