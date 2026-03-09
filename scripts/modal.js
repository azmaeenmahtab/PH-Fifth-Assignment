function openModal(card) {
    document.getElementById('modal-title').textContent = card.title;
    document.getElementById('modal-description').textContent = card.description;
    document.getElementById('modal-author').textContent = card.author || '—';
    document.getElementById('modal-assignee').textContent = card.assignee || 'Unassigned';
    document.getElementById('modal-created').textContent = card.createdAt
        ? new Date(card.createdAt).toLocaleDateString('en-GB') : '—';

    // Status badge
    const status = document.getElementById('modal-status-badge');
    if (card.status && card.status.toLowerCase() === 'closed') {
        status.textContent = 'Closed';
        status.style.cssText = 'color:#fff;background:#A78BFA;border:none;';
    } else {
        status.textContent = 'Opened';
        status.style.cssText = 'color:#fff;background:#22C55E;border:none;';
    }

    // Priority badge
    const priorityEl = document.getElementById('modal-priority');
    if (card.priority.toLowerCase() === 'high') {
        priorityEl.textContent = 'HIGH';
        priorityEl.style.cssText = 'color:#fff;background:#EF4444;border:none;';
    } else if (card.priority.toLowerCase() === 'medium') {
        priorityEl.textContent = 'MEDIUM';
        priorityEl.style.cssText = 'color:#fff;background:#F59E0B;border:none;';
    } else if (card.priority.toLowerCase() === 'low') {
        priorityEl.textContent = 'LOW';
        priorityEl.style.cssText = 'color:#fff;background:#A3A3A3;border:none;';
    }

    // Labels
    const labelsEl = document.getElementById('modal-labels');
    labelsEl.innerHTML = card.labels.map(label => {
        if (label.toLowerCase() === 'bug') {
            return `<span class="badge text-[#EF4444] bg-[#FEECEC] flex items-center gap-1 border-0"><img src="assets/BugDroid.png" class="w-4 h-4"> BUG</span>`;
        } else {
             return `<span class="badge badge-warning text-[#F59E0B] bg-[#FFF7E0] flex items-center gap-1"><img src="assets/Lifebuoy.png" alt="help wanted" class="w-4 h-4"> ${label}</span>`;
        }
    }).join('');

    document.getElementById('issue-modal').showModal();
}