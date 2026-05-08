// ===========================
// FUNÇÕES DE INTERATIVIDADE
// ===========================

/**
 * Toggle FAQ Items
 */
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Fechar todos os outros itens
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Abrir o item clicado se não estava aberto
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

/**
 * Scroll para a seção de checkout
 */
function scrollToCheckout() {
    const checkoutSection = document.getElementById('checkout');
    if (checkoutSection) {
        checkoutSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Se não houver seção de checkout, rolar para o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Animações ao entrar em viewport
 */
document.addEventListener('DOMContentLoaded', function() {
    // Observar elementos para animações
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cards e itens
    document.querySelectorAll('.benefit-card, .ebook-card, .learning-item, .faq-item').forEach(el => {
        observer.observe(el);
    });

    // Adicionar animação CSS
    if (!document.querySelector('style[data-animations]')) {
        const style = document.createElement('style');
        style.setAttribute('data-animations', 'true');
        style.textContent = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
});

/**
 * Smooth scroll para links de navegação
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/**
 * Adicionar classe ao navbar quando scrollar
 */
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.12)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

/**
 * Contador de números (para estatísticas)
 */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

/**
 * Validação básica de formulário (se houver)
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return false;
    
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#f5576c';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

/**
 * Copiar para clipboard (para código PIX, por exemplo)
 */
function copyToClipboard(text, buttonElement) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = buttonElement.textContent;
        buttonElement.textContent = 'Copiado!';
        setTimeout(() => {
            buttonElement.textContent = originalText;
        }, 2000);
    });
}

/**
 * Rastrear cliques em CTAs (para analytics)
 */
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function() {
        // Aqui você pode adicionar rastreamento com Google Analytics, Hotjar, etc.
        console.log('CTA clicado:', this.textContent);
    });
});

/**
 * Detectar modo escuro do sistema
 */
function detectDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Usuário prefere modo escuro
        return true;
    }
    return false;
}

/**
 * Adicionar suporte a teclado para acessibilidade
 */
document.addEventListener('keydown', function(event) {
    // Fechar FAQ com ESC
    if (event.key === 'Escape') {
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
    }
});

/**
 * Função para rastrear tempo de permanência na página
 */
let pageStartTime = Date.now();

window.addEventListener('beforeunload', function() {
    const timeOnPage = Math.round((Date.now() - pageStartTime) / 1000);
    console.log('Tempo na página:', timeOnPage, 'segundos');
});

/**
 * Melhorar performance de scroll
 */
let ticking = false;
let lastScrollY = 0;

window.addEventListener('scroll', function() {
    lastScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(function() {
            // Aqui você pode adicionar lógica que depende do scroll
            ticking = false;
        });
        ticking = true;
    }
});

// ===========================
// INICIALIZAÇÃO
// ===========================

console.log('✓ Script carregado com sucesso');
