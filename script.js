// Espera a página carregar
document.addEventListener('DOMContentLoaded', () => {
    console.log("Site da Escola Exemplo carregado com sucesso!");

    // Lógica para o formulário de contato
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede a página de recarregar
            alert('Obrigado por sua mensagem! Entraremos em contato em breve.');
            form.reset(); // Limpa os campos
        });
    }

    // Exemplo de interatividade: Destacar o link da página atual
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.style.borderBottom = "2px solid #003d80";
        }
    });
});
