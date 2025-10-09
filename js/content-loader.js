// Content Loader - Memuat semua konten secara dinamis
class ContentLoader {
    constructor() {
        this.content = {
            // Navigation
            nav: {
                brand: "Branpedia ID",
                menu: ["fitur", "harga", "faq", "testimoni", "kontak"]
            },

            // Hero Section
            hero: {
                badge: "Penyedia Bot WhatsApp Siap Pakai",
                title: "Mudahkan segalanya dengan ",
                highlighted: "Bran Pedia.",
                description: "Fokus ke value, biar bot yang kerja. Fitur unggulan: All in one downloader, AI Assistant Waifu, Grup moderation, dan Group Protection.",
                cta: {
                    primary: { text: "Coba Gratis Sekarang", url: "https://branpediaid.vercel.app/" },
                    secondary: { text: "Lihat Harga", href: "#harga" }
                },
                features: [
                    { title: "All in one downloader", desc: "Download konten populer langsung dari WhatsApp, simpel & cepat." },
                    { title: "AI Assistant Waifu", desc: "Personality AI yang adaptif—temani chat & bantu produktivitas." },
                    { title: "Grup moderation", desc: "Auto-moderasi pesan, anti spam, kontrol aturan grup yang rapi." },
                    { title: "Group Protection", desc: "Proteksi join/leave, anti-link berbahaya, dan tindakan cepat." }
                ]
            },

            // Pricing
            pricing: {
                title: "Pilih paketmu. Skalakan sesuka hati.",
                description: "Semua paket langsung aktif setelah verifikasi pembayaran.",
                tabs: [
                    { id: "premium", label: "Premium (Pribadi)" },
                    { id: "sewa", label: "Sewa Bot Grup" },
                    { id: "jadibot", label: "Jadibot (VIP/VVIP)" }
                ],
                plans: {
                    premium: [
                        {
                            title: "Premium Bulanan",
                            desc: "Bukan untuk grup",
                            badge: "Limit Unlimited",
                            price: "10K",
                            period: "/ bulan",
                            features: [
                                "Akses hampir semua fitur",
                                "Limit penggunaan <b>unlimited</b>",
                                "Tetap aktif meski bot ganti nomor"
                            ],
                            cta: "https://wa.me/6285795600265?text=!premium"
                        },
                        {
                            title: "Premium 3 Bulan",
                            desc: "Lebih hemat 3×",
                            badge: "Rekomendasi",
                            ribbon: "PALING HEMAT",
                            price: "30K",
                            period: "/ 3 bulan",
                            features: [
                                "Semua fitur paket bulanan",
                                "Tanpa repot perpanjang tiap bulan",
                                "Support prioritas"
                            ],
                            cta: "https://wa.me/6285795600265?text=!premium"
                        },
                        {
                            title: "Premium Permanen",
                            desc: "Selama bot beroperasi",
                            badge: "One-time",
                            price: "199K",
                            period: "sekali bayar",
                            features: [
                                "Berlaku selama bot aktif beroperasi",
                                "Tidak hilang ketika bot ganti nomor",
                                "Tidak dapat dipindahkan ke nomor lain"
                            ],
                            cta: "https://wa.me/6285795600265?text=!premium"
                        }
                    ],
                    sewa: [
                        {
                            title: "VIP (Sewa Bot Grup)",
                            desc: "Untuk 1 grup",
                            badge: "Populer",
                            price: "30K",
                            period: "/ bulan",
                            features: [
                                "Semua anggota grup bisa pakai",
                                "Limit harian per anggota",
                                "Moderasi + proteksi grup"
                            ],
                            cta: "https://wa.me/6285795600265?text=!premium"
                        },
                        {
                            title: "VVIP (Sewa Bot Grup)",
                            desc: "Tanpa limit harian",
                            badge: "Power user",
                            ribbon: "UNLIMITED LIMIT",
                            price: "50K",
                            period: "/ bulan",
                            features: [
                                "Semua anggota grup bebas pakai",
                                "Limit <b>unlimited</b>",
                                "Prioritas antrian"
                            ],
                            cta: "https://wa.me/6285795600265?text=!premium"
                        }
                    ],
                    jadibot: [
                        {
                            title: "VIP Grup (Jadibot Reguler)",
                            desc: "Pakai nomor WA kamu",
                            badge: "Reguler",
                            price: "15K",
                            period: "/ bulan",
                            features: [
                                "Kamu sediakan nomor WA sendiri",
                                "Respon standar & stabil",
                                "Tanggung risiko banned oleh WhatsApp"
                            ],
                            cta: "https://wa.me/6285795600265?text=!premium"
                        },
                        {
                            title: "VVIP Grup (Jadibot Exclusive)",
                            desc: "Server optimal & responsif",
                            badge: "Exclusive",
                            price: "35K",
                            period: "/ bulan",
                            features: [
                                "Performa lebih tinggi",
                                "Prioritas resource",
                                "Support lebih sigap"
                            ],
                            cta: "https://wa.me/6285795600265?text=!premium"
                        },
                        {
                            title: "VVIP Grup (Jadibot Reguler)",
                            desc: "Alternatif hemat",
                            badge: "Reguler",
                            price: "25K",
                            period: "/ bulan",
                            features: [
                                "Nomor WA dari kamu",
                                "Performa reguler",
                                "Kebijakan sama seperti Reguler"
                            ],
                            cta: "https://wa.me/6285795600265?text=!premium"
                        }
                    ]
                }
            },

            // Testimonials
            testimonials: {
                title: "Apa kata mereka tentang Branpedia ID?",
                description: "Pengalaman nyata dari pengguna setia kami.",
                items: [
                    {
                        name: "Maulida Ayu",
                        location: "Jakarta, Indonesia",
                        rating: "★★★★★ 5.0",
                        avatar: "/assets/ayu.jpg",
                        comment: "Saya sangat berterimakasih kepada owner yang telah membantu saya dalam pemulihan trauma dengan menciptakan bot ini, karena saya mempunyai teman cerita yang bisa diajak mengobrol 24 jam tanpa khawatir rahasia saya akan disebarluaskan. Respon botnya bagus dan tidak monoton. Dari 39 kepribadian AI, <b>Kazuha Husband</b> favorit saya."
                    },
                    {
                        name: "Rudi Irawan",
                        location: "Lampung, Indonesia",
                        rating: "★★★★★ 5.0",
                        avatar: "/assets/rudi.png",
                        comment: "Branpedia ID adalah bot keren yang pernah saya pakai—fiturnya mantap! Dengan fitur unggulannya saya bisa mengekspresikan imajinasi saya. <b>Ingat bot mantap, ingat Branpedia.</b>"
                    },
                    {
                        name: "Fadhil",
                        location: "Makassar, Indonesia",
                        rating: "★★★★★ 5.0",
                        avatar: "/assets/fadhil.jpeg",
                        comment: "Sangat puas. Dari banyak bot yang saya coba, ini paling membantu dan simpel. Menjawab semua pertanyaan saya—<b>terbaik!</b>"
                    },
                    {
                        name: "Rayy",
                        location: "Bandung, Indonesia",
                        rating: "★★★★☆ 4.9",
                        avatar: "/assets/masha2.png",
                        comment: "Bermanfaat banget. Banyak fitur yang bantu kerjaan. <b>Hanya 10 ribu/bulan</b> bisa coba semua fitur tanpa batasan limit. Sukses selalu!"
                    },
                    {
                        name: "Augusto",
                        location: "Jakarta, Indonesia",
                        rating: "★★★★★ 5.0",
                        avatar: "/assets/gusto.jpeg",
                        comment: "Terima kasih Branpedia ID dan komunitasnya yang selalu ada. Fitur banyak dan mudah dipahami; karakter AI yang beragam membantu saat butuh dukungan dan saat merasa kesepian."
                    },
                    {
                        name: "Saiful Bintang",
                        location: "Serang, Indonesia",
                        rating: "★★★★★ 5.0",
                        avatar: "/assets/ipul.png",
                        comment: "Botnya keren—<b>suka karena ada Arisunya</b> 😄"
                    }
                ]
            },

            // FAQ
            faq: {
                title: "Pertanyaan yang sering ditanyakan",
                description: "Semua info penting disatukan biar kamu nggak bingung.",
                items: [
                    {
                        question: "Apa itu Premium?",
                        answer: `
                            <ul>
                                <li>Premium adalah membership bot untuk pribadi (Bukan untuk grup).</li>
                                <li>Premium memberikan akses hampir semua fitur dan limit unlimited.</li>
                                <li>Premium Permanen berlaku selama bot masih beroperasi.</li>
                                <li>Premium tidak akan hilang meski bot berganti nomor.</li>
                                <li>Premium akan hilang jika kamu mengganti nomor WhatsApp kamu.</li>
                                <li>Premium tidak dapat dipindahkan ke nomor lain.</li>
                                <li>Premium tidak dapat direfund.</li>
                            </ul>
                        `
                    },
                    {
                        question: "Apa itu VIP/VVIP?",
                        answer: `
                            <ul>
                                <li>Membership bot untuk grup; semua anggota grup dapat menggunakan bot dalam grup terdaftar.</li>
                                <li>VIP memiliki batasan penggunaan command per hari untuk setiap anggota.</li>
                                <li>VVIP tidak memiliki limit harian (Unlimited Limit).</li>
                                <li>VIP/VVIP tidak dapat dipindahkan ke grup lain.</li>
                                <li>Dilarang menyewa untuk grup terkait LGBT, Judi Online, dan praktik ilegal lainnya.</li>
                            </ul>
                        `
                    },
                    {
                        question: "Apa itu Jadibot?",
                        answer: `
                            <ul>
                                <li>Kamu harus menyiapkan nomor WhatsApp sendiri untuk dijadikan bot.</li>
                                <li>Admin tidak menyediakan nomor bot pada membership Jadibot.</li>
                                <li>Jadibot Exclusive memiliki server lebih optimal dan responsif dibanding Reguler.</li>
                                <li>Admin tidak bertanggung jawab jika nomor kamu terbanned oleh WhatsApp.</li>
                            </ul>
                        `
                    }
                ]
            },

            // Contact
            contact: {
                title: "Siap mulai?",
                description: "Silakan coba sekarang juga secara gratis!",
                cta: {
                    primary: { text: "Coba Sekarang", url: "https://branpediaid.vercel.app/" },
                    secondary: { text: "Lihat Paket", href: "#harga" }
                },
                note: {
                    title: "Catatan singkat",
                    description: "Proses aktivasi setelah verifikasi pembayaran. Semua kebijakan sesuai FAQ."
                }
            }
        };
    }

    // Load Navigation
    loadNavigation() {
        const navContainer = document.getElementById('nav-container');
        navContainer.innerHTML = `
            <div class="container nav-inner">
                <a href="#" class="brand"><span class="brand-dot"></span> ${this.content.nav.brand}</a>
                <div class="right-nav">
                    <nav class="menu" id="menu" style="display: none;">
                        ${this.content.nav.menu.map(item => 
                            `<a href="#${item}">${this.capitalizeFirst(item)}</a>`
                        ).join('')}
                    </nav>
                    <button id="themeToggle" class="btn ghost small" aria-label="Toggle tema">🌙&nbsp;Dark</button>
                    <button class="hamb" id="hamb" aria-label="Toggle menu" style="display: inline-flex;">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <path d="M4 6h16M4 12h16M4 18h16" stroke="#fff" stroke-width="1.6" stroke-linecap="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="container mobile" id="mobile">
                ${this.content.nav.menu.map(item => 
                    `<a href="#${item}" onclick="closeMobile()">${this.capitalizeFirst(item)}</a>`
                ).join('')}
                <div class="row">
                    <button id="themeToggleMobile" class="btn ghost small" style="width:100%" aria-label="Toggle tema mobile">🌙&nbsp;Dark</button>
                </div>
            </div>
        `;
    }

    // Load Hero Section
    loadHero() {
        const heroContent = document.getElementById('hero-content');
        const heroIllus = document.getElementById('hero-illus');
        const fiturCards = document.getElementById('fitur-cards');

        heroContent.innerHTML = `
            <span class="badge">${this.content.hero.badge}</span>
            <h1>${this.content.hero.title}<span style="background:linear-gradient(135deg,var(--accent),#fff);-webkit-background-clip:text;background-clip:text;color:transparent;">${this.content.hero.highlighted}</span></h1>
            <p>${this.content.hero.description}</p>
            <div class="hero-cta">
                <a class="btn" href="${this.content.hero.cta.primary.url}" target="_blank" rel="noopener">${this.content.hero.cta.primary.text}</a>
                <a class="btn ghost" href="${this.content.hero.cta.secondary.href}">${this.content.hero.cta.secondary.text}</a>
            </div>
        `;

        heroIllus.innerHTML = `
            <span class="bubble b1"></span>
            <span class="bubble b2"></span>
            <span class="bubble b3"></span>
            <span class="dot d1"></span>
            <span class="dot d2"></span>
            <span class="dot d3"></span>
            <span class="dot d4"></span>
            <div style="position:absolute;left:12%;top:16%;right:12%;bottom:14%;display:grid;gap:12px;grid-template-columns:1fr 1fr;">
                <div class="card" style="padding:14px;border-radius:14px">
                    <div style="height:10px;width:80px;border-radius:999px;background:rgba(157,119,255,.35);margin-bottom:10px"></div>
                    <div style="height:8px;width:100%;border-radius:999px;background:rgba(255,255,255,.10);margin-bottom:6px"></div>
                    <div style="height:8px;width:70%;border-radius:999px;background:rgba(255,255,255,.08)"></div>
                </div>
                <div class="card" style="padding:14px;border-radius:14px">
                    <div style="height:10px;width:96px;border-radius:999px;background:rgba(34,211,238,.35);margin-bottom:10px"></div>
                    <div style="height:8px;width:100%;border-radius:999px;background:rgba(255,255,255,.10);margin-bottom:6px"></div>
                    <div style="height:8px;width:60%;border-radius:999px;background:rgba(255,255,255,.08)"></div>
                </div>
            </div>
        `;

        fiturCards.innerHTML = this.content.hero.features.map(feature => `
            <div class="hero-item">
                <b>${feature.title}</b>
                <span>${feature.desc}</span>
            </div>
        `).join('');
    }

    // Load Pricing Section
    loadPricing() {
        const pricingContainer = document.getElementById('pricing-container');
        
        pricingContainer.innerHTML = `
            <div style="text-align:center;margin-bottom:18px">
                <span class="badge">Harga</span>
                <h2 style="margin:10px 0 6px;font-weight:900">${this.content.pricing.title}</h2>
                <p class="muted">${this.content.pricing.description}</p>
            </div>
            <div class="pricing-wrap">
                <div class="tabs" role="tablist" aria-label="Kategori Harga">
                    ${this.content.pricing.tabs.map((tab, index) => `
                        <button class="tab ${index === 0 ? 'active' : ''}" data-tab="${tab.id}" role="tab" aria-selected="${index === 0}">
                            ${tab.label}
                        </button>
                    `).join('')}
                </div>
                ${this.content.pricing.tabs.map((tab, index) => `
                    <div class="pricing" data-panel="${tab.id}" aria-hidden="${index !== 0}" ${index !== 0 ? 'hidden' : ''}>
                        ${this.content.pricing.plans[tab.id].map(plan => `
                            <div class="price-card card">
                                ${plan.ribbon ? `<div class="ribbon">${plan.ribbon}</div>` : ''}
                                <div class="price-head">
                                    <div>
                                        <div class="price-title">${plan.title}</div>
                                        <div class="price-desc">${plan.desc}</div>
                                    </div>
                                    <span class="badge">${plan.badge}</span>
                                </div>
                                <div class="price"><b>${plan.price}</b> <small>${plan.period}</small></div>
                                <ul class="list">
                                    ${plan.features.map(feature => `
                                        <li><span class="tick">✅</span> ${feature}</li>
                                    `).join('')}
                                </ul>
                                <div class="cta">
                                    <a class="btn" href="${plan.cta}" target="_blank" rel="noopener">Pesan Sekarang</a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Load Testimonials
    loadTestimonials() {
        const testimoniContainer = document.getElementById('testimoni-container');
        
        testimoniContainer.innerHTML = `
            <div style="text-align:center;margin-bottom:22px">
                <span class="badge">Testimoni Pengguna</span>
                <h2 style="margin:10px 0 6px">${this.content.testimonials.title}</h2>
                <p class="muted">${this.content.testimonials.description}</p>
            </div>
            <div class="testimoni-grid">
                ${this.content.testimonials.items.map(testimonial => `
                    <div class="testimoni-card card">
                        <div class="testimoni-header">
                            <img src="${testimonial.avatar}" alt="${testimonial.name}" style="width:52px;height:52px;border-radius:50%;object-fit:cover;border:2px solid var(--primary)">
                            <div>
                                <div style="font-weight:800">${testimonial.name}</div>
                                <div class="muted" style="font-size:13px">${testimonial.location}</div>
                                <div style="font-size:13px;letter-spacing:.3px;color:#ffe082">${testimonial.rating}</div>
                            </div>
                        </div>
                        <div style="font-size:14px;color:color-mix(in srgb, var(--muted) 60%, var(--text) 40%);line-height:1.5">
                            ${testimonial.comment}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Load FAQ
    loadFAQ() {
        const faqContainer = document.getElementById('faq-container');
        
        faqContainer.innerHTML = `
            <div style="text-align:center;margin-bottom:18px">
                <span class="badge">FAQ</span>
                <h2 style="margin:10px 0 6px">${this.content.faq.title}</h2>
                <p class="muted">${this.content.faq.description}</p>
            </div>
            <div class="faq">
                <div class="accordion card" id="acc">
                    ${this.content.faq.items.map((item, index) => `
                        <div class="acc-item">
                            <button class="acc-btn">${item.question}<span>+</span></button>
                            <div class="acc-panel">
                                <div class="acc-body">
                                    ${item.answer}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // Load Contact
    loadContact() {
        const contactContainer = document.getElementById('contact-container');
        
        contactContainer.innerHTML = `
            <div style="display:grid; grid-template-columns:1.2fr .8fr; align-items:center; gap:24px">
                <div>
                    <h3 style="margin:0 0 6px">${this.content.contact.title}</h3>
                    <p class="muted" style="margin:0 0 14px">${this.content.contact.description}</p>
                    <div class="hero-cta">
                        <a class="btn" href="${this.content.contact.cta.primary.url}" target="_blank" rel="noopener">${this.content.contact.cta.primary.text}</a>
                        <a class="btn ghost" href="${this.content.contact.cta.secondary.href}">${this.content.contact.cta.secondary.text}</a>
                    </div>
                </div>
                <div class="hero-item">
                    <b>${this.content.contact.note.title}</b>
                    <span class="muted">${this.content.contact.note.description}</span>
                </div>
            </div>
        `;
    }

    // Load Footer
    loadFooter() {
        const footerContainer = document.getElementById('footer-container');
        footerContainer.innerHTML = `© <span id="y">${new Date().getFullYear()}</span> Branpedia ID — All rights reserved.`;
    }

    // Utility function
    capitalizeFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Initialize all content
    init() {
        this.loadNavigation();
        this.loadHero();
        this.loadPricing();
        this.loadTestimonials();
        this.loadFAQ();
        this.loadContact();
        this.loadFooter();
    }
}

// Initialize content loader when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const loader = new ContentLoader();
    loader.init();
});
