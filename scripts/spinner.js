function showSpinner() {
    const cardsSection = document.getElementById('cards-section');
    cardsSection.innerHTML = `
        <div id="spinner" class="col-span-4 flex justify-center items-center py-20">
            <span class="loading loading-spinner loading-lg text-primary"></span>
        </div>
    `;
}

function hideSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) spinner.remove();
}
