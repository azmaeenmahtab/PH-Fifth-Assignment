

let allIssues = [];

function renderCards(cardsArray) {
    let totalIssues = cardsArray.length;
    document.getElementById('total-issue-number').textContent = totalIssues;
    const cardsSection = document.getElementById('cards-section');
    cardsSection.innerHTML = '';
    cardsArray.forEach((card) => {
        const cardHTML = document.createElement('div');
        cardHTML.classList.add('card', 'w-full', 'bg-base-100', 'shadow-md');
        cardHTML.style.borderTop = card.status && card.status.toLowerCase() === 'closed' ? '4px solid #A78BFA' : '4px solid #22C55E';
        cardHTML.innerHTML = `
            <div class="card-body">
                <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center justify-between w-full">
                        <!-- Status Icon Left -->
                        <img src="${card.status && card.status.toLowerCase() === 'closed' ? 'assets/Closed- Status .png' : 'assets/Open-Status.png'}" alt="status" class="w-6 h-6" />
                        <!-- Priority Badge Right -->
                        ${(() => {
                if (card.priority.toLowerCase() === 'high') {
                    return `<span class="badge badge-lg font-semibold text-[#EF4444] bg-[#FEECEC]">HIGH</span>`;
                } else if (card.priority.toLowerCase() === 'medium') {
                    return `<span class="badge badge-lg font-semibold text-[#F59E0B] bg-[#FFF7E0]">MEDIUM</span>`;
                } else if (card.priority.toLowerCase() === 'low') {
                    return `<span class="badge badge-lg font-semibold text-[#A3A3A3] bg-[#F3F3F3]">LOW</span>`;
                } else {
                    return `<span class="badge badge-lg">${card.priority}</span>`;
                }
            })()}
                    </div>
                </div>
                <h3 class="font-bold text-lg mb-1">${card.title}</h3>
                <p class="text-gray-600 text-sm mb-3">${card.description}</p>
                <div class="flex flex-wrap gap-2 mb-3" id="labels">
                    ${card.labels.map(label => {
                if (label.toLowerCase() === 'bug') {
                    return `<span class="badge badge-error text-[#EF4444] bg-[#FEECEC] flex items-center gap-1"><img src="assets/BugDroid.png" alt="bug" class="w-4 h-4"> BUG</span>`;
                } else {
                    return `<span class="badge badge-warning text-[#F59E0B] bg-[#FFF7E0] flex items-center gap-1"><img src="assets/Lifebuoy.png" alt="help wanted" class="w-4 h-4"> ${label}</span>`;
                }
            }).join('')}
                </div>
                <div class="flex items-center justify-between text-xs text-gray-500 mb-1">
                    <span>by <span class="font-semibold">${card.author}</span></span>
                    <span>${card.createdAt ? new Date(card.createdAt).toLocaleDateString() : ''}</span>
                </div>
            </div>
        `;
        cardsSection.appendChild(cardHTML);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then(response => response.json())
        .then(data => {
            allIssues = data.data;
            renderCards(allIssues);
        })
        .catch(error => {
            console.error('Error fetching issues:', error);
        });
});



document.getElementById('openbtn').addEventListener('click', () => {
    renderCards(allIssues.filter(card => card.status && card.status.toLowerCase() === 'open'));
});


document.getElementById('closedbtn').addEventListener('click', () => {
    renderCards(allIssues.filter(card => card.status && card.status.toLowerCase() === 'closed'));
});

document.getElementById('allbtn').addEventListener('click', () => {
    renderCards(allIssues);
});


