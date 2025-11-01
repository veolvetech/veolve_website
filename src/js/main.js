// notify + optional subtle parallax for floats
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('notify-form');
    const email = document.getElementById('email');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const val = email.value.trim();

        if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            showToast('Please enter a valid email.', 'error');
            return;
        }

        try {
            const res = await fetch('https://formspree.io/f/mzzkkwnw', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: val })
            });

            if (res.ok) {
                showToast('Thanks! We’ll notify you at launch 🚀', 'success');
                email.value = '';
            } else {
                showToast('Oops! Something went wrong. Try again later.', 'error');
            }
        } catch (err) {
            showToast('Network error. Please try again.', 'error');
        }
    });

    function showToast(message, type = 'info') {
        const t = document.createElement('div');
        t.className = 've-toast ' + type;
        t.textContent = message;
        document.body.appendChild(t);
        setTimeout(() => t.classList.add('visible'), 20);
        setTimeout(() => {
            t.classList.remove('visible');
            setTimeout(() => t.remove(), 300);
        }, 3000);
    }

    // subtle parallax for decorative floats (optional)
    const floats = Array.from(document.querySelectorAll('.float'));
    let supportsPointer = window.matchMedia('(pointer:fine)').matches;

    if (supportsPointer && floats.length) {
        document.addEventListener('mousemove', (e) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const dx = (e.clientX - cx) / cx;
            const dy = (e.clientY - cy) / cy;
            floats.forEach((el, i) => {
                // each float moves slightly different
                const depth = (i + 1) * 6;
                el.style.transform = `translate3d(${dx * depth}px, ${dy * depth * -1}px, 0) rotate(${(i % 2 ? 6 : -6)}deg)`;
            });
        });
        // reset on leave
        document.addEventListener('mouseleave', () => {
            floats.forEach(el => el.style.transform = '');
        });
    }
});
