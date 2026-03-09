
 document.addEventListener('DOMContentLoaded', () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')  
        .then(response => response.json())
        .then(data => {
        console.log('Fetched issues:', data.data);
        

        const cardsSection = document.getElementById('cards-section');

        const cardsArray = data.data;
        document.getElementById('cards-section').innerHTML = '';


        cardsArray.forEach((card) => {
            const cardHTML = document.createElement('div');
            cardHTML.classList.add('card', 'w-full', 'bg-base-100', 'shadow-md');
            cardHTML.innerHTML = `
                <div class="card-body">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center justify-between flex-row-reverse w-full">
                            <span class="badge badge-lg font-semibold text-[#EF4444]" style="background-color: #FEECEC;">${card.priority}</span>
                            <img src="assets/Open-Status.png" alt="" srcset=""> 
                        </div>
                    </div>
                    <h3 class="font-bold text-lg mb-1">${card.title}</h3>
                    <p class="text-gray-600 text-sm mb-3">${card.description}</p>
                    <div class="flex flex-wrap gap-2 mb-3" id="labels">
                        ${card.labels.map(label => `<span class="badge badge-error text-[#EF4444] bg-[#FEECEC]">${label}</span>`).join('')}
                    </div>
                    <div class="flex items-center justify-between text-xs text-gray-500 mb-1">
                        <span>by <span class="font-semibold">${card.author}</span></span>
                        <span>${new Date(card.created_at).toLocaleDateString()}</span>
                    </div>
                </div>
            `;
            document.getElementById('cards-section').appendChild(cardHTML);
        })

        })
        .catch(error => {
            console.error('Error fetching issues:', error);
        });
});


