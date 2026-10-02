/* -------------------------------------------------------------
   NEW FANCY JEWELS - INTERACTIVE ENGINE
------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    initNavLinks();
    initActionButtons();
    initModelSwitcher();
});

/* Nav Links Active State Toggle */
function initNavLinks() {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

/* Action Icons Click Toast Feedback */
function initActionButtons() {
    const iconBtns = document.querySelectorAll('.icon-btn');
    iconBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const title = btn.getAttribute('title') || 'Action';
            showToast(`✨ Opened ${title} | New Fancy Jewels`);
        });
    });
}

/* Model Photo Switcher (Diamond Heritage <-> Royal Kundan) */
function initModelSwitcher() {
    const dots = document.querySelectorAll('.switcher-dot');
    const mainModelImg = document.getElementById('mainModelImg');

    if (!mainModelImg || !dots.length) return;

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const newSrc = dot.getAttribute('data-img');
            
            // Fade out animation
            mainModelImg.style.opacity = '0';
            
            setTimeout(() => {
                mainModelImg.src = newSrc;
                mainModelImg.style.opacity = '1';
            }, 300);

            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');
        });
    });
}

/* Toast Notification Utility */
function showToast(message) {
    let existingToast = document.querySelector('.custom-toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = message;

    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(11, 12, 16, 0.94)',
        border: '1px solid rgba(212, 175, 55, 0.5)',
        color: '#FFFFFF',
        padding: '0.8rem 1.6rem',
        borderRadius: '30px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
        zIndex: '99999',
        fontSize: '0.85rem',
        fontFamily: "'Montserrat', sans-serif",
        textAlign: 'center',
        opacity: '0',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
        backdropFilter: 'blur(12px)'
    });

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(-50%) translateY(-10px)';
    }, 50);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-50%) translateY(0)';
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}
