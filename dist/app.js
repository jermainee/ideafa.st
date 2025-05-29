document.addEventListener('DOMContentLoaded', function () {
    fetchIdea();
});
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        fetchIdea();
    }
});
const fetchIdea = () => {
    fetch('/dist/1M_stupid_saas_ideas.txt')
        .then(response => response.text())
        .then(text => {
            const ideas = text.split('\n').filter(line => line.trim() !== '');
            const index = Math.floor(Math.random() * ideas.length);

            document.querySelector('.idea').textContent = ideas[index];
        })
        .catch(error => {
            document.querySelector('.idea').textContent = 'Failed to load idea.';
            console.error('Error loading ideas:', error);
        });
}
