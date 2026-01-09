// Main JavaScript - Fungsi interaktif dengan hash redirect
document.addEventListener('DOMContentLoaded', function() {
    // Cek dan handle redirect berdasarkan hash URL
    if (handleHashRedirects()) {
        return; // Jika ada redirect, hentikan eksekusi kode lainnya
    }
    
    // Init year
    document.getElementById('y').textContent = new Date().getFullYear();

    // Theme persistence
    const root = document.documentElement;
    const THEME_KEY = 'branpedia-theme';
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    const saved = localStorage.getItem(THEME_KEY) || 'light';
    root.setAttribute('data-theme', saved || (prefersLight ? 'light' : 'dark'));

    const toggleBtns = [
        document.getElementById('themeToggle'),
        document.getElementById('themeToggleMobile')
    ].filter(Boolean);

    function syncToggleLabels() {
        const cur = root.getAttribute('data-theme');
        toggleBtns.forEach(b => b.textContent = (cur === 'light') ? '🌙\u00A0Dark' : '☀️\u00A0Light');
    }
    syncToggleLabels();

    toggleBtns.forEach(btn => btn && btn.addEventListener('click', () => {
        const cur = root.getAttribute('data-theme');
        const next = cur === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        localStorage.setItem(THEME_KEY, next);
        syncToggleLabels();
    }));

    // Mobile menu
    const hamb = document.getElementById('hamb');
    const mobile = document.getElementById('mobile');
    
    function closeMobile() { 
        if (mobile) mobile.style.display = 'none'; 
        if (hamb) hamb.setAttribute('aria-expanded', 'false'); 
    }
    window.closeMobile = closeMobile;
    
    if (hamb && mobile) {
        hamb.addEventListener('click', () => {
            const isOpen = mobile.style.display === 'flex';
            mobile.style.display = isOpen ? 'none' : 'flex';
            hamb.setAttribute('aria-expanded', String(!isOpen));
        });
    }

    // Desktop menu handling
    const mq = window.matchMedia('(min-width: 900px)');
    function handleMQ(e) {
        const menu = document.querySelector('.menu');
        const hamb = document.getElementById('hamb');
        const mobile = document.getElementById('mobile');
        
        if (menu) menu.style.display = e.matches ? 'flex' : 'none';
        if (hamb) hamb.style.display = e.matches ? 'none' : 'inline-flex';
        if (mobile && e.matches) mobile.style.display = 'none';
    }
    handleMQ(mq); 
    mq.addEventListener('change', handleMQ);

    // Smooth scroll with offset
    const OFFSET = 70;
    function smoothTo(hash) {
        const el = document.querySelector(hash); 
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
    }

    // Handle internal anchor links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            const href = e.target.getAttribute('href');
            if (href.length > 1) { 
                e.preventDefault(); 
                
                // Cek apakah ini redirect link (group/channel)
                if (href === '#group' || href === '#channel' || href === '#chanel') {
                    // Biarkan link default yang sudah ada di content-loader.js
                    return;
                }
                
                closeMobile(); 
                smoothTo(href); 
                history.pushState(null, '', href); 
            }
        }
    });

    // Tabs functionality (delegated)
    document.addEventListener('click', function(e) {
        if (e.target.matches('.tab')) {
            const tabs = document.querySelectorAll('.tab');
            const panels = document.querySelectorAll('[data-panel]');
            const key = e.target.dataset.tab;
            
            tabs.forEach(x => { 
                x.classList.remove('active'); 
                x.setAttribute('aria-selected', 'false'); 
            });
            e.target.classList.add('active'); 
            e.target.setAttribute('aria-selected', 'true');
            
            panels.forEach(p => { 
                const on = p.getAttribute('data-panel') === key; 
                p.hidden = !on; 
                p.setAttribute('aria-hidden', String(!on)); 
            });
            
            const top = e.target.getBoundingClientRect().top + window.scrollY - 88; 
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });

    // Accordion functionality (delegated)
    document.addEventListener('click', function(e) {
        if (e.target.matches('.acc-btn')) {
            const panel = e.target.parentElement.querySelector('.acc-panel');
            const open = panel.style.maxHeight;
            
            // Close all other accordions
            document.querySelectorAll('.acc-panel').forEach(p => { 
                p.style.maxHeight = null; 
            });
            document.querySelectorAll('.acc-btn span').forEach(s => s.textContent = '+');
            
            // Open clicked one if not already open
            if (!open) { 
                panel.style.maxHeight = panel.scrollHeight + 'px'; 
                e.target.querySelector('span').textContent = '–'; 
            }
        }
    });
});

// Function to handle hash redirects
function handleHashRedirects() {
    const hash = window.location.hash;
    const redirects = {
        '#group': 'https://chat.whatsapp.com/E75NYG8eKvyEXk6QtFtj92',
        '#channel': 'https://whatsapp.com/channel/0029VaR0ejN47Xe26WUarL3H',
        '#chanel': 'https://whatsapp.com/channel/0029VaR0ejN47Xe26WUarL3H'
    };
    
    if (hash && redirects[hash.toLowerCase()]) {
        // Tampilkan loading screen
        showRedirectLoading(redirects[hash.toLowerCase()]);
        return true;
    }
    return false;
}

// Function to show redirect loading
function showRedirectLoading(url) {
    // Buat elemen loading
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'redirect-loading';
    loadingDiv.innerHTML = `
        <div class="loading-spinner"></div>
        <h2 style="margin-bottom: 10px;">Mengalihkan...</h2>
        <p style="color: var(--muted); text-align: center; max-width: 300px;">
            Anda akan dialihkan ke WhatsApp dalam beberapa detik
        </p>
    `;
    
    document.body.appendChild(loadingDiv);
    
    // Redirect setelah 1.5 detik (untuk efek loading)
    setTimeout(() => {
        window.location.href = url;
    }, 1500);
}

// Juga handle hash changes (jika user mengubah hash secara manual)
window.addEventListener('hashchange', function() {
    handleHashRedirects();
});

// Handle jika page di-load dengan hash
window.addEventListener('load', function() {
    // Cek hash setelah semua konten dimuat
    setTimeout(() => {
        handleHashRedirects();
    }, 100);
});
