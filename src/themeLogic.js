
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const hireModeBtn = document.getElementById('hire-mode-btn');
    const jobModeBtn = document.getElementById('job-mode-btn');
    const body = document.body;
    const pageContent = document.getElementById('page-content');

    function handleScroll() {
        const isScrolled = window.pageYOffset > 50;
        header.classList.toggle('scrolled', isScrolled);
    }

    function setMode(mode) {
        body.classList.remove('job-mode', 'hire-mode');
        body.classList.add(mode + '-mode');
        hireModeBtn.classList.toggle('active', mode === 'hire');
        jobModeBtn.classList.toggle('active', mode === 'job');
        updatePageContent(mode);
        handleScroll();
    }

    function updatePageContent(mode) {
        if (!pageContent) return;

        pageContent.classList.add('opacity-0');
        setTimeout(() => {
            let newHTML = '';
            if (mode === 'job') {
                newHTML = \`
                <section class="py-20 text-center bg-gradient-to-b from-primary/10 to-background">
                    <h1 class="text-4xl font-bold text-text mb-4">Find Your Dream Tech Job</h1>
                    <p class="text-text mb-6">Explore opportunities from leading companies worldwide.</p>
                    <a href="#" class="btn-primary">Search Jobs Now</a>
                </section>
                <section class="container mx-auto py-16 px-4">
                    <h2 class="text-3xl font-bold text-center mb-10 text-text">Why Job Seekers Choose Us</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-card-bg p-6 rounded-lg shadow-sm text-center text-text">Curated Listings</div>
                        <div class="bg-card-bg p-6 rounded-lg shadow-sm text-center text-text">Easy Application</div>
                        <div class="bg-card-bg p-6 rounded-lg shadow-sm text-center text-text">Career Resources</div>
                    </div>
                </section>
                \`;
            } else {
                newHTML = \`
                <section class="py-20 text-center bg-gradient-to-b from-primary/10 to-background">
                    <h1 class="text-4xl font-bold text-text mb-4">Hire Top Tech Talent</h1>
                    <p class="text-text mb-6">Access pre-vetted engineers and build your team fast.</p>
                    <a href="#" class="btn-primary">Post a Job</a>
                </section>
                <section class="container mx-auto py-16 px-4">
                    <h2 class="text-3xl font-bold text-center mb-10 text-text">Why Companies Use Us</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-card-bg p-6 rounded-lg shadow-sm text-center text-text">Vetted Talent</div>
                        <div class="bg-card-bg p-6 rounded-lg shadow-sm text-center text-text">Quick Hiring</div>
                        <div class="bg-card-bg p-6 rounded-lg shadow-sm text-center text-text">Support & Flexibility</div>
                    </div>
                </section>
                \`;
            }
            pageContent.innerHTML = newHTML;
            void pageContent.offsetWidth;
            pageContent.classList.remove('opacity-0');
        }, 300);
    }

    if (hireModeBtn && jobModeBtn) {
        hireModeBtn.addEventListener('click', () => {
            if (!body.classList.contains('hire-mode')) {
                setMode('hire');
            }
        });
        jobModeBtn.addEventListener('click', () => {
            if (!body.classList.contains('job-mode')) {
                setMode('job');
            }
        });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    setMode('job'); // Initial mode
});
