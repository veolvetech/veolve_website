// Simple client-side handler for notify form
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('notify-form');
  const email = document.getElementById('email');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = email.value.trim();
    if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      showToast('Please enter a valid email.', 'error');
      return;
    }

    // Store locally (temporary). Replace with API call when ready.
    try {
      const list = JSON.parse(localStorage.getItem('veolve_notify')) || [];
      list.push({ email: val, ts: Date.now() });
      localStorage.setItem('veolve_notify', JSON.stringify(list));
      email.value = '';
      showToast('Thanks! We will notify you when we launch.', 'success');
      // visually bump button/shadow
    } catch (err) {
      console.error(err);
      showToast('Something went wrong. Try again.', 'error');
    }
  });

  function showToast(message, type = 'info') {
    // lightweight toast
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
});
