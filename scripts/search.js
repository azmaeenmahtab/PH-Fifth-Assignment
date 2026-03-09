document.getElementById('issue-search').onchange = function() {
    const query = this.value.toLowerCase();
    const filteredIssues = allIssues.filter((issue) => issue.title.toLowerCase().includes(query) || issue.description.toLowerCase().includes(query));
    renderCards(filteredIssues);
}