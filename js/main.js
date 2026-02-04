// Main JavaScript - Fungsi interaktif dengan hash redirect
document.addEventListener('DOMContentLoaded', function() {
    // Cek dan handle redirect berdasarkan pathname atau hash URL
    handleAllRedirects();
    
    // Init year - PERBAIKI ERROR: Hanya set jika element ada
    const yearElement = document.getElementById('y');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

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
        toggleBtns.forEach(b => {
            if (b) b.textContent = (cur === 'light') ? '🌙\u00A0Dark' : '☀️\u00A0Light';
        });
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
                
                // Cek apakah ini redirect link (group/channel/owner)
                const redirectUrls = getRedirectUrls();
                
                if (redirectUrls[href.toLowerCase()]) {
                    // Langsung redirect tanpa loading
                    window.location.href = redirectUrls[href.toLowerCase()];
                    return;
                }
                
                // Jika bukan redirect, lakukan smooth scroll biasa
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

// Function to get all redirect URLs
function getRedirectUrls() {
    const baseChannelUrl = 'https://whatsapp.com/channel/0029VaR0ejN47Xe26WUarL3H';
    
    return {
        // Hash URLs
        '#group': 'https://chat.whatsapp.com/E75NYG8eKvyEXk6QtFtj92',
        '#channel': baseChannelUrl,
        '#chanel': baseChannelUrl,
        '#owner': 'https://api.whatsapp.com/send/?phone=6285795600265&text&type=phone_number&app_absent=0&wame_ctl=1',
        
        // Path URLs
        '/group': 'https://chat.whatsapp.com/E75NYG8eKvyEXk6QtFtj92',
        '/channel': baseChannelUrl,
        '/chanel': baseChannelUrl,
        '/owner': 'https://api.whatsapp.com/send/?phone=6285795600265&text&type=phone_number&app_absent=0&wame_ctl=1',
        
        // Channel v2 URLs (short version)
        '/ch': baseChannelUrl,
        '#ch': baseChannelUrl
    };
}

// Function to handle all redirects - support both hash and pathname
function handleAllRedirects() {
    const path = window.location.pathname; // /group, /channel, /owner, /ch
    const hash = window.location.hash; // #group, #channel, #owner, #ch
    
    // Dapatkan parameter tambahan jika ada (misal: /ch/5878)
    const pathSegments = path.split('/').filter(segment => segment !== '');
    
    const redirects = getRedirectUrls();
    
    // Handle channel v2 dengan parameter (misal: /ch/5878)
    if (pathSegments.length > 0) {
        const mainPath = '/' + pathSegments[0]; // /ch
        const param = pathSegments[1]; // 5878
        
        // Cek apakah ini URL channel v2 dengan parameter
        if ((mainPath === '/ch' || mainPath === '/chanel' || mainPath === '/channel') && param) {
            const baseUrl = redirects['/ch'] || 'https://whatsapp.com/channel/0029VaR0ejN47Xe26WUarL3H';
            // Redirect ke URL dengan parameter tambahan
            window.location.href = `${baseUrl}/${param}`;
            return true;
        }
    }
    
    // Cek pathname dulu (misal: /group, /ch, /chanel)
    if (path && path !== '/' && redirects[path]) {
        // Langsung redirect tanpa delay
        window.location.href = redirects[path];
        return true;
    }
    
    // Cek hash (misal: #group, #ch)
    if (hash && redirects[hash.toLowerCase()]) {
        // Langsung redirect tanpa delay
        window.location.href = redirects[hash.toLowerCase()];
        return true;
    }
    
    return false;
}

// Juga handle hash changes (jika user mengubah hash secara manual)
window.addEventListener('hashchange', function() {
    handleAllRedirects();
});

// Handle jika page di-load
window.addEventListener('load', function() {
    handleAllRedirects();
});

// Handle popstate (untuk browser back/forward)
window.addEventListener('popstate', function() {
    handleAllRedirects();
});
