// Marquee: each row's tags are repeated 4× so the -50% translate loops seamlessly.
document.querySelectorAll('.marquee__row').forEach(row => {
  const tags = row.dataset.tags.split('|');
  for (let i = 0; i < 4; i++) {
    tags.forEach(t => {
      const pill = document.createElement('span');
      pill.textContent = t;
      row.appendChild(pill);
    });
  }
});

// Booking form
const form = document.getElementById('booking-form');
const sent = document.getElementById('booking-sent');
const concern = form.elements.concern;
const chips = form.querySelectorAll('.chip');

chips.forEach(chip => {
  chip.addEventListener('click', () => {
    chips.forEach(c => c.setAttribute('aria-pressed', String(c === chip)));
    concern.value = chip.textContent;
  });
});

// Set data-endpoint on the form (e.g. a Formspree URL) to deliver requests.
// Without it, submitting only shows the confirmation, as in the design.
form.addEventListener('submit', async e => {
  e.preventDefault();
  const endpoint = form.dataset.endpoint;
  if (endpoint) {
    const btn = form.querySelector('[type="submit"]');
    btn.disabled = true;
    try {
      const res = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error(res.statusText);
    } catch (err) {
      btn.disabled = false;
      alert('Sorry, your request could not be sent. Please try again.');
      return;
    } finally {
      btn.disabled = false;
    }
  }
  form.hidden = true;
  sent.hidden = false;
  sent.focus();
});

document.getElementById('booking-reset').addEventListener('click', () => {
  form.reset();
  chips.forEach((c, i) => c.setAttribute('aria-pressed', String(i === 0)));
  concern.value = chips[0].textContent;
  sent.hidden = true;
  form.hidden = false;
});
