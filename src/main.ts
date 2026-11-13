import './style.css'

const weddingDate = '2026-12-05T07:30:00'
const scrollCue = (target: string, destination: string) => `
  <div class="scroll-cue">
    <a class="round-link" href="#${target}" aria-label="Scroll to ${destination}"><span>↓</span></a>
    <span class="scroll-label">Scroll</span>
  </div>
`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <section class="opening-cover" id="opening-cover" aria-label="Sandeep and Sucharitha's wedding invitation cover">
    <span class="cover-panel cover-panel-left" aria-hidden="true"></span>
    <span class="cover-panel cover-panel-right" aria-hidden="true"></span>
    <span class="cover-fold" aria-hidden="true"></span>
    <p class="cover-quote"><span>“It’s never late when love finds</span><span>its perfect time.”</span></p>
    <div class="cover-center">
      <button class="open-invitation" type="button" aria-label="Open Sandeep and Sucharitha's wedding invitation">
        <span class="ring-pair" aria-hidden="true"><i></i><i></i></span>
      </button>
      <span class="open-label">TAP TO OPEN</span>
    </div>
    <div class="cover-names" aria-label="Sandeep, the groom, and Sucharitha, the bride">
      <div class="cover-name cover-groom"><span>Sandeep</span><small>THE GROOM</small></div>
      <div class="cover-name cover-bride"><span>Sucharitha</span><small>THE BRIDE</small></div>
    </div>
  </section>

  <header class="topbar">
    <a class="monogram" href="#home" aria-label="Sandeep and Sucharitha, home">S<span>&</span>S</a>
    <nav aria-label="Main navigation">
      <a href="#story">Our story</a>
      <a href="#events">Events</a>
      <a href="#locations">Location</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home" aria-labelledby="hero-title">
      <div class="hero-shade"></div>
      <div class="hero-content">
        <p class="eyebrow hero-eyebrow">WITH OUR FAMILIES, WITH FULL HEARTS</p>
        <p class="hero-intro">A day to gather. A lifetime to begin.</p>
        <h1 id="hero-title">Sandeep <span>&</span><br />Sucharitha</h1>
        <div class="hero-bottom">
          <p>JOYFULLY INVITE YOU TO CELEBRATE<br />THE BEGINNING OF OUR FOREVER</p>
        </div>
      </div>
      ${scrollCue('countdown-page', 'the countdown')}
      <span class="hero-index">01 / A NEW BEGINNING</span>
    </section>

    <section class="countdown-screen" id="countdown-page" aria-label="Wedding countdown">
      <div class="countdown-content reveal">
        <p class="countdown-kicker">COUNTING DOWN</p>
        <h2>Until We Say <span>“I Do”</span></h2>
        <div class="countdown" id="countdown" aria-live="polite">
          <div class="time-unit"><strong>00</strong><span>DAYS</span></div>
          <div class="time-unit"><strong>00</strong><span>HOURS</span></div>
          <div class="time-unit"><strong>00</strong><span>MINUTES</span></div>
          <div class="time-unit"><strong>00</strong><span>SECONDS</span></div>
        </div>
        <p class="countdown-pending">DATE AND TIME TO BE ANNOUNCED</p>
      </div>
      ${scrollCue('story', 'our story')}
    </section>

    <section class="couple-intro" id="story">
      <div class="couple-content reveal">
        <p class="couple-kicker">WITH JOYFUL HEARTS</p>
        <div class="ornament-divider" aria-hidden="true"><span></span><i>◆</i><span></span></div>
        <div class="couple-columns">
          <div class="person groom">
            <p class="person-label">GROOM</p>
            <h2>Sandeep</h2>
            <p class="family-line">Son of Mr. Sanjeeva Rayudu Chokkam &amp; Mrs. Thulasamma</p>
          </div>
          <span class="couple-ampersand" aria-hidden="true">&</span>
          <div class="person bride">
            <p class="person-label">BRIDE</p>
            <h2>Sucharitha</h2>
            <p class="family-line">Daughter of Mr. Pasupuletti Mallikarjuna &amp; Mrs. Madhavi</p>
          </div>
        </div>
        <p class="invitation-line">Your gracious presence and heartfelt prayers will make our celebration complete as we begin this new chapter, hand in hand.</p>
      </div>
      ${scrollCue('events', 'events')}
    </section>

    <section class="events-section" id="events">
      <div class="center-heading reveal">
        <p class="section-eyebrow">CELEBRATIONS</p>
        <h2>Events</h2>
        <div class="ornament-divider" aria-hidden="true"><span></span><i>◆</i><span></span></div>
      </div>
      <div class="event-cards">
        <article class="event-card reveal">
          <h3>Reception</h3>
          <div class="event-facts">
            <p><span aria-hidden="true">▦</span><span>4TH DECEMBER 2026 — FRIDAY<small>7:30 PM</small></span></p>
            <p><span aria-hidden="true">⌖</span><span>Sri Srinivasa Kalyana Mandapam<small>Mydukur</small></span></p>
          </div>
        </article>
        <article class="event-card reveal">
          <h3>Marriage</h3>
          <div class="event-facts">
            <p><span aria-hidden="true">▦</span><span>5TH DECEMBER 2026 — SATURDAY<small>7:30 - 8:30 AM</small></span></p>
            <p><span aria-hidden="true">⌖</span><span>Sri Srinivasa Kalyana Mandapam<small>Mydukur, Kadapa</small></span></p>
          </div>
        </article>
      </div>
      ${scrollCue('locations', 'the location')}
    </section>

    <section class="locations-section" id="locations">
      <div class="center-heading reveal">
        <p class="section-eyebrow">WHERE TO FIND US</p>
        <h2>Location</h2>
        <div class="ornament-divider" aria-hidden="true"><span></span><i>◆</i><span></span></div>
      </div>
      <div class="location-cards">
        <article class="location-card reveal">
          <p class="location-label">✦ MARRIAGE &amp; RECEPTION ✦</p>
          <h3>Sri Srinivasa Kalyana Mandapam</h3>
          <p>Mydukur, Kadapa</p>
          <a class="map-placeholder" href="https://maps.app.goo.gl/guMYyjEsWYYFbMHM9" target="_blank" rel="noopener noreferrer" aria-label="Open Sri Srinivasa Kalyana Mandapam in Google Maps (opens in a new tab)">OPEN IN GOOGLE MAPS <span aria-hidden="true">↗</span></a>
        </article>
      </div>
      ${scrollCue('moments', 'moments')}
    </section>

    <section class="moments-section" id="moments">
      <div class="center-heading reveal">
        <p class="section-eyebrow">CHERISHED MOMENTS</p>
        <h2>Moments of Love</h2>
        <div class="ornament-divider" aria-hidden="true"><span></span><i>◆</i><span></span></div>
      </div>
      <p class="moments-note reveal">Two souls, one timeless promise</p>
      ${scrollCue('closing', 'the closing message')}
    </section>

    <section class="closing-section" id="closing">
      <div class="closing-content reveal">
        <div class="ornament-divider" aria-hidden="true"><span></span><i>◆</i><span></span></div>
        <p>With love and prayers,<br />looking forward to celebrating with you.</p>
        <h2>Love and love only.<br /><span>Sandeep &amp; Sucharitha</span></h2>
        <p class="closing-date">05 DECEMBER 2026 · 7:30 AM</p>
      </div>
    </section>
  </main>

  <footer class="footer"><a href="#home">S <span>&</span> S</a><p>WITH LOVE, SANDEEP &amp; SUCHARITHA</p></footer>
  <audio id="wedding-song" src="/audio/Manasa%20ye%20maya%20chesave.mpeg" preload="auto" loop></audio>
  <button class="music-toggle" type="button" aria-label="Pause Manasa Ye Maya Chesave" aria-pressed="false" title="Pause Manasa Ye Maya Chesave" hidden>
    <span aria-hidden="true">♫</span>
  </button>
`

document.body.classList.add('is-closed')

const weddingSong = document.querySelector<HTMLAudioElement>('#wedding-song')!
const musicToggle = document.querySelector<HTMLButtonElement>('.music-toggle')!
weddingSong.volume = 0.7

function updateMusicToggle() {
  const action = weddingSong.paused ? 'Play' : 'Pause'
  musicToggle.setAttribute('aria-label', `${action} Manasa Ye Maya Chesave`)
  musicToggle.setAttribute('aria-pressed', String(!weddingSong.paused))
  musicToggle.title = `${action} Manasa Ye Maya Chesave`
}

weddingSong.addEventListener('play', updateMusicToggle)
weddingSong.addEventListener('pause', updateMusicToggle)
musicToggle.addEventListener('click', () => {
  if (weddingSong.paused) {
    weddingSong.play().catch(() => updateMusicToggle())
  } else {
    weddingSong.pause()
  }
})

document.querySelector<HTMLButtonElement>('.open-invitation')!.addEventListener('click', () => {
  weddingSong.currentTime = 4
  musicToggle.hidden = false
  weddingSong.play().catch(() => updateMusicToggle())

  const cover = document.querySelector<HTMLElement>('#opening-cover')!
  cover.classList.add('is-opening')
  window.setTimeout(() => {
    cover.remove()
    document.body.classList.remove('is-closed')
    window.location.hash = '#home'
  }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 900)
})

const countdown = document.querySelector<HTMLDivElement>('#countdown')!

function renderCountdown() {
  const pending = document.querySelector<HTMLParagraphElement>('.countdown-pending')!
  const target = new Date(weddingDate).getTime()
  if (!weddingDate || Number.isNaN(target)) {
    pending.hidden = false
    return
  }
  pending.hidden = true

  const remaining = Math.max(0, target - Date.now())
  const units = [
    ['DAYS', Math.floor(remaining / 86_400_000)],
    ['HOURS', Math.floor((remaining / 3_600_000) % 24)],
    ['MINUTES', Math.floor((remaining / 60_000) % 60)],
    ['SECONDS', Math.floor((remaining / 1_000) % 60)],
  ] as const

  countdown.innerHTML = units.map(([label, value]) => `<div class="time-unit"><strong>${String(value).padStart(2, '0')}</strong><span>${label}</span></div>`).join('')
}

renderCountdown()
if (weddingDate) window.setInterval(renderCountdown, 1000)

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.countdown-content, .couple-content, .center-heading, .event-card, .location-card, .moments-figure, .closing-content').forEach((element) => {
  element.classList.add('reveal')
  revealObserver.observe(element)
})