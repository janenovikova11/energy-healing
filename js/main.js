// ─── Nav injection ───────────────────────────────────────
(function () {
  const b = '/';
  const p = '/';

  const nav = `
<nav>
  <div class="nav-inner">
    <a href="/" class="nav-logo">✦ Energy Healing</a>
    <button class="nav-toggle" aria-label="Menu">☰</button>
    <div class="nav-links">

      <div class="nav-item" data-section="understanding">
        <a href="/understanding/" class="nav-top"><span data-lang="en">Understanding</span><span data-lang="es">Comprensión</span><span data-lang="ru">Понимание</span> <span class="caret">▼</span></a>
        <div class="dropdown">
          <a href="/understanding/"><span data-lang="en">Overview</span><span data-lang="es">Visión general</span><span data-lang="ru">Обзор</span></a>
          <div class="dropdown-divider"></div>
          <a href="/understanding/emotions/"><span data-lang="en">Understanding Your Emotions</span><span data-lang="es">Comprendiendo tus emociones</span><span data-lang="ru">Понимание своих эмоций</span></a>
          <a href="/understanding/intention/"><span data-lang="en">Working with Intention</span><span data-lang="es">Trabajando con la intención</span><span data-lang="ru">Работа с намерением</span></a>
          <a href="/understanding/pinpoint-trauma/"><span data-lang="en">Pinpoint Your Trauma</span><span data-lang="es">Identifica tu trauma</span><span data-lang="ru">Определи свою травму</span></a>
          <a href="/understanding/release-numbness/"><span data-lang="en">Release Numbness</span><span data-lang="es">Libera el entumecimiento</span><span data-lang="ru">Освободись от онемения</span></a>
        </div>
      </div>

      <div class="nav-item" data-section="blocks">
        <a href="/energy-blocks/" class="nav-top"><span data-lang="en">Energy Blocks</span><span data-lang="es">Bloqueos Energéticos</span><span data-lang="ru">Энергетические блоки</span> <span class="caret">▼</span></a>
        <div class="dropdown">
          <a href="/energy-blocks/"><span data-lang="en">Overview</span><span data-lang="es">Visión general</span><span data-lang="ru">Обзор</span></a>
          <div class="dropdown-divider"></div>
          <a href="/energy-blocks/emotional-trauma/"><span data-lang="en">Emotional Trauma</span><span data-lang="es">Trauma emocional</span><span data-lang="ru">Эмоциональная травма</span></a>
          <a href="/energy-blocks/energy-body/"><span data-lang="en">Energy Body</span><span data-lang="es">Cuerpo energético</span><span data-lang="ru">Энергетическое тело</span></a>
          <a href="/energy-blocks/soul-contracts/"><span data-lang="en">Soul Contracts</span><span data-lang="es">Contratos del alma</span><span data-lang="ru">Контракты души</span></a>
          <a href="/energy-blocks/implants/"><span data-lang="en">Implants</span><span data-lang="es">Implantes</span><span data-lang="ru">Импланты</span></a>
          <a href="/energy-blocks/entities/"><span data-lang="en">Entities</span><span data-lang="es">Entidades</span><span data-lang="ru">Сущности</span></a>
          <a href="/energy-blocks/programming/"><span data-lang="en">Programming</span><span data-lang="es">Programación</span><span data-lang="ru">Программирование</span></a>
          <a href="/energy-blocks/energy-bonds/"><span data-lang="en">Energy Bonds</span><span data-lang="es">Vínculos energéticos</span><span data-lang="ru">Энергетические связи</span></a>
          <a href="/energy-blocks/energy-templates/"><span data-lang="en">Energy Templates</span><span data-lang="es">Plantillas energéticas</span><span data-lang="ru">Энергетические шаблоны</span></a>
        </div>
      </div>

      <div class="nav-item" data-section="healing">
        <a href="/healing/" class="nav-top"><span data-lang="en">Healing</span><span data-lang="es">Sanación</span><span data-lang="ru">Исцеление</span> <span class="caret">▼</span></a>
        <div class="dropdown">
          <a href="/healing/emotional-trauma/"><span data-lang="en">Emotional Trauma</span><span data-lang="es">Trauma emocional</span><span data-lang="ru">Эмоциональная травма</span></a>
          <a href="/healing/energy-body/"><span data-lang="en">Energy Body</span><span data-lang="es">Cuerpo energético</span><span data-lang="ru">Энергетическое тело</span></a>
          <a href="/healing/soul-contracts/"><span data-lang="en">Soul Contracts</span><span data-lang="es">Contratos del alma</span><span data-lang="ru">Контракты души</span></a>
          <a href="/healing/implants/"><span data-lang="en">Implants</span><span data-lang="es">Implantes</span><span data-lang="ru">Импланты</span></a>
          <a href="/healing/entities/"><span data-lang="en">Entities</span><span data-lang="es">Entidades</span><span data-lang="ru">Сущности</span></a>
          <a href="/healing/programming/"><span data-lang="en">Programming</span><span data-lang="es">Programación</span><span data-lang="ru">Программирование</span></a>
          <a href="/healing/energy-bonds/"><span data-lang="en">Energy Bonds</span><span data-lang="es">Vínculos energéticos</span><span data-lang="ru">Энергетические связи</span></a>
          <a href="/healing/energy-templates/"><span data-lang="en">Energy Templates</span><span data-lang="es">Plantillas energéticas</span><span data-lang="ru">Энергетические шаблоны</span></a>
        </div>
      </div>

      <div class="nav-item" data-section="practices">
        <a href="/practices/" class="nav-top"><span data-lang="en">Practices</span><span data-lang="es">Prácticas</span><span data-lang="ru">Практики</span> <span class="caret">▼</span></a>
        <div class="dropdown">
          <a href="/practices/"><span data-lang="en">Preparation Protocol</span><span data-lang="es">Protocolo de preparación</span><span data-lang="ru">Протокол подготовки</span></a>
          <div class="dropdown-divider"></div>
          <a href="/practices/daily-meditation/"><span data-lang="en">Daily Healing Meditation</span><span data-lang="es">Meditación diaria de sanación</span><span data-lang="ru">Ежедневная медитация исцеления</span></a>
          <a href="/practices/physical-body/"><span data-lang="en">Physical Body Quick Guide</span><span data-lang="es">Guía rápida del cuerpo físico</span><span data-lang="ru">Краткое руководство по физическому телу</span></a>
          <a href="/practices/self-protection/"><span data-lang="en">Self Protection Guide</span><span data-lang="es">Guía de autoprotección</span><span data-lang="ru">Руководство по самозащите</span></a>
          <a href="/practices/clear-space/"><span data-lang="en">Clean New Space / Home</span><span data-lang="es">Limpiar nuevo espacio / hogar</span><span data-lang="ru">Очищение нового пространства</span></a>
          <a href="/practices/nutrition/"><span data-lang="en">Nutrition</span><span data-lang="es">Nutrición</span><span data-lang="ru">Питание</span></a>
          <div class="dropdown-divider"></div>
          <a href="/practices/13-transformations/"><span data-lang="en">The 13 Transformations</span><span data-lang="es">Las 13 Transformaciones</span><span data-lang="ru">13 Трансформаций</span></a>
        </div>
      </div>

      <div class="nav-item" data-section="about">
        <a href="/about/" class="nav-top"><span data-lang="en">About</span><span data-lang="es">Sobre mí</span><span data-lang="ru">О себе</span></a>
      </div>

    </div>
    <div class="nav-lang" role="group" aria-label="Language">
      <button data-set-lang="en"><span>🇬🇧</span><span class="nav-lang-label"> EN</span></button>
      <button data-set-lang="es"><span>🇪🇸</span><span class="nav-lang-label"> ES</span></button>
      <button data-set-lang="ru"><span>🇷🇺</span><span class="nav-lang-label"> RU</span></button>
    </div>
  </div>
</nav>`;

  const banner = `<div class="ethics-banner"><div style="max-width:1100px;margin:0 auto;"><span data-lang="en"><strong>Practice with integrity:</strong> These tools are for personal healing only — never to harm others. Work only through love and gratitude. You may only ask for what is yours.</span><span data-lang="es"><strong>Practica con integridad:</strong> Estas herramientas son solo para sanación personal — nunca para dañar a otros. Trabaja solo a través del amor y la gratitud. Solo puedes pedir lo que es tuyo.</span><span data-lang="ru"><strong>Практикуй с честностью:</strong> Эти инструменты предназначены только для личного исцеления — никогда для причинения вреда другим. Работай только через любовь и благодарность. Ты можешь просить только то, что принадлежит тебе.</span></div></div>`;

  const el = document.getElementById('nav-placeholder');
  if (el) el.outerHTML = nav + banner;

  // Apply saved language before first paint to prevent flash
  const _savedLang = localStorage.getItem('site-lang') || 'en';
  // URL path overrides localStorage for language
  const _pathLang = window.location.pathname.startsWith('/es/') ? 'es'
                  : window.location.pathname.startsWith('/ru/') ? 'ru'
                  : null;
  const _lang = _pathLang || _savedLang;
  if (_pathLang) localStorage.setItem('site-lang', _pathLang); // persist URL-detected language
  document.body.classList.remove('lang-en', 'lang-es', 'lang-ru');
  if (_lang !== 'en') document.body.classList.add('lang-' + _lang);

  // Prefix all internal <a href="/..."> links with language prefix so /ru/ stays /ru/ while browsing
  if (_pathLang) {
    document.querySelectorAll('a[href^="/"]').forEach(function(a) {
      var href = a.getAttribute('href');
      if (!href.startsWith('/es/') && !href.startsWith('/ru/')) {
        a.setAttribute('href', '/' + _pathLang + href);
      }
    });
  }
})();

// ─── Init after DOM ready ─────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  // Mobile toggle
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Mobile: tap nav-top to open its dropdown
  document.querySelectorAll('.nav-top').forEach(top => {
    top.addEventListener('click', function (e) {
      if (window.innerWidth > 820) return;
      const item = this.closest('.nav-item');
      const wasOpen = item.classList.contains('mob-open');
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('mob-open'));
      if (!wasOpen) {
        item.classList.add('mob-open');
        e.preventDefault();
      }
    });
  });

  // Mark active section
  const path = window.location.pathname;
  document.querySelectorAll('.nav-item').forEach(item => {
    const links = item.querySelectorAll('a');
    links.forEach(a => {
      const href = a.getAttribute('href') || '';
      if (href !== '/' && path.startsWith(href)) {
        a.classList.add('active');
        item.classList.add('active');
      }
    });
  });

  // Language switcher
  (function () {
    const applyLang = (lang) => {
      document.body.classList.remove('lang-en', 'lang-es', 'lang-ru');
      if (lang !== 'en') document.body.classList.add('lang-' + lang);
      document.querySelectorAll('.nav-lang [data-set-lang]').forEach(b => {
        b.classList.toggle('active', b.dataset.setLang === lang);
      });
      localStorage.setItem('site-lang', lang);
    };
    const setLang = (lang) => {
      applyLang(lang);
      const path = window.location.pathname;
      const stripped = path.replace(/^\/(es|ru)\//, '/');
      const newPath = lang === 'en' ? stripped : '/' + lang + stripped;
      if (newPath !== path) window.location.href = newPath;
    };
    // Init: URL prefix takes priority over localStorage (prevents redirect away from /es/ or /ru/ pages)
    const urlLang = window.location.pathname.startsWith('/es/') ? 'es'
                  : window.location.pathname.startsWith('/ru/') ? 'ru'
                  : null;
    applyLang(urlLang || localStorage.getItem('site-lang') || 'en');
    document.querySelectorAll('.nav-lang [data-set-lang]').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.setLang));
    });
  })();

  // Footer YouTube link
  const footerP = document.querySelector('footer p');
  if (footerP) {
    footerP.innerHTML += ' · <a href="https://www.youtube.com/@Jane-Novikova" target="_blank" rel="noopener">YouTube</a>';
  }

  // Accordion
  document.querySelectorAll('.acc-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const isOpen = body.classList.contains('open');
      document.querySelectorAll('.acc-body').forEach(b => b.classList.remove('open'));
      document.querySelectorAll('.acc-trigger').forEach(b => b.classList.remove('open'));
      if (!isOpen) { body.classList.add('open'); btn.classList.add('open'); }
    });
  });
});
