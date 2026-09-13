document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const btnSearch = document.getElementById('btnSearch');
    const btnClear = document.getElementById('btnClear');
    const resultsContainer = document.getElementById('resultsContainer');

    btnSearch.addEventListener('click', performSearch);
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    btnClear.addEventListener('click', () => {
        searchInput.value = '';
        resultsContainer.innerHTML = '';
    });

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            resultsContainer.innerHTML = '';
            return;
        }

        fetch('travel_recommendation_api.json')
            .then(res => res.json())
            .then(data => {
                let results = [];

                if (query.includes('beach')) {
                    results = data.beaches;
                } else if (query.includes('temple')) {
                    results = data.temples;
                } else if (query.includes('country') || query.includes('countries')) {
                    results = data.countries.flatMap(c => c.cities);
                } else {
                    // search by matching country name or city name
                    const matchedCountry = data.countries.find(c => c.name.toLowerCase().includes(query));
                    if (matchedCountry) {
                        results = matchedCountry.cities;
                    } else {
                        // check temples or beaches by name
                        const matchedTemple = data.temples.filter(t => t.name.toLowerCase().includes(query));
                        const matchedBeach = data.beaches.filter(b => b.name.toLowerCase().includes(query));
                        results = [...matchedTemple, ...matchedBeach];
                    }
                }

                displayResults(results);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
                resultsContainer.innerHTML = '<p style="color:#f87171;">Unable to load recommendations.</p>';
            });
    }

    function displayResults(items) {
        resultsContainer.innerHTML = '';

        if (!items || items.length === 0) {
            resultsContainer.innerHTML = '<p style="color:#cbd5e1; padding: 20px;">No recommendations found. Try searching for "beach", "temple", or a country.</p>';
            return;
        }

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'recommendation-card';
            card.innerHTML = `
                <div class="card-image-wrap">
                    <img src="${item.imageUrl}" alt="${item.name}">
                </div>
                <div class="card-body">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <a href="#" class="btn-visit">Visit</a>
                </div>
            `;
            resultsContainer.appendChild(card);
        });
    }
});
