// ─── SEO: meta tags, hreflang, Open Graph, JSON-LD schema ───
// Replace janenovikova.com with the real domain before deploying.
(function () {
  var SITE = 'https://janenovikova.com';
  var AUTHOR = 'Jane Novikova';

  // ── Per-page metadata (title + description in EN / ES / RU) ──
  var META = {
    '/': {
      type: 'WebSite',
      en: { title: 'Energy Body Healing Guide | Jane Novikova',
            desc:  'A complete guide to healing your energy body — understand how trauma is stored, identify energy blocks, and apply step-by-step healing protocols.' },
      es: { title: 'Guía de Sanación del Cuerpo Energético | Jane Novikova',
            desc:  'Guía completa para sanar el cuerpo energético: comprende cómo se almacena el trauma, identifica bloqueos energéticos y aplica protocolos de sanación.' },
      ru: { title: 'Руководство по Исцелению Энергетического Тела | Женя Новикова',
            desc:  'Полное руководство по исцелению энергетического тела: понять, как хранится травма, определить энергетические блоки и применить пошаговые протоколы исцеления.' }
    },
    '/understanding/': {
      type: 'Article',
      en: { title: 'Understanding Energy & Trauma | Energy Healing Guide',
            desc:  'Learn how your energy body works, how trauma gets stored as frozen low-frequency energy, and what emotion frequencies reveal about your healing path.' },
      es: { title: 'Comprendiendo la Energía y el Trauma | Guía de Sanación',
            desc:  'Aprende cómo funciona tu cuerpo energético, cómo el trauma se almacena como energía de baja frecuencia congelada y qué revelan las frecuencias emocionales.' },
      ru: { title: 'Понимание Энергии и Травмы | Руководство по Исцелению',
            desc:  'Узнай, как работает твоё энергетическое тело, как травма хранится в виде замороженной энергии низкой частоты и что частоты эмоций говорят о твоём пути исцеления.' }
    },
    '/understanding/emotions/': {
      type: 'Article',
      en: { title: 'Understanding Your Emotions | Energy Healing Guide',
            desc:  'How emotions are encoded in the energy body, the full frequency spectrum from shame to love, polyvagal biology, and why feeling is the gateway to healing.' },
      es: { title: 'Comprendiendo Tus Emociones | Guía de Sanación Energética',
            desc:  'Cómo las emociones se codifican en el cuerpo energético, el espectro de frecuencias desde la vergüenza hasta el amor, y por qué sentir es la puerta a la sanación.' },
      ru: { title: 'Понимание Своих Эмоций | Руководство по Исцелению',
            desc:  'Как эмоции кодируются в энергетическом теле, полный спектр частот от стыда до любви, поливагальная биология и почему чувствование — это путь к исцелению.' }
    },
    '/understanding/intention/': {
      type: 'Article',
      en: { title: 'Working with Intention | Energy Healing Guide',
            desc:  'The science and practice of focused intention in energy healing. How to direct healing energy, set clear commands, and work with your Higher Self.' },
      es: { title: 'Trabajando con la Intención | Guía de Sanación Energética',
            desc:  'La ciencia y práctica de la intención enfocada en la sanación energética. Cómo dirigir la energía curativa y trabajar con tu Yo Superior.' },
      ru: { title: 'Работа с Намерением | Руководство по Исцелению',
            desc:  'Наука и практика сфокусированного намерения в энергетическом исцелении. Как направлять исцеляющую энергию и работать со своим Высшим Я.' }
    },
    '/understanding/pinpoint-trauma/': {
      type: 'Article',
      en: { title: 'Pinpoint Your Trauma | Energy Healing Guide',
            desc:  'Step-by-step exercises to locate emotional triggers in your body, find the root of a pattern across past lives and ancestral lines, and begin conscious release.' },
      es: { title: 'Identifica Tu Trauma | Guía de Sanación Energética',
            desc:  'Ejercicios paso a paso para localizar desencadenantes emocionales en tu cuerpo, encontrar la raíz de un patrón en vidas pasadas y líneas ancestrales.' },
      ru: { title: 'Определи Свою Травму | Руководство по Исцелению',
            desc:  'Пошаговые упражнения для определения эмоциональных триггеров в теле, поиска корня паттерна через прошлые жизни и родовые линии.' }
    },
    '/understanding/release-numbness/': {
      type: 'Article',
      en: { title: 'Release Emotional Numbness | Energy Healing Guide',
            desc:  'Why you might feel nothing, how emotional numbness forms as a survival mechanism, signs to recognise it, and guided exercises to safely restore feeling.' },
      es: { title: 'Libera el Entumecimiento Emocional | Guía de Sanación',
            desc:  'Por qué puedes no sentir nada, cómo se forma el entumecimiento emocional como mecanismo de supervivencia y ejercicios guiados para restaurar el sentir.' },
      ru: { title: 'Освободись от Эмоционального Оцепенения | Исцеление',
            desc:  'Почему ты можешь ничего не чувствовать, как формируется эмоциональное оцепенение как защитный механизм, и упражнения для безопасного восстановления чувств.' }
    },
    '/energy-blocks/': {
      type: 'Article',
      en: { title: 'Energy Blocks — 8 Types | Energy Healing Guide',
            desc:  'The 8 types of energetic disturbances: emotional trauma, energy body fragmentation, soul contracts, implants, entities, programming, energy bonds, and templates.' },
      es: { title: '8 Tipos de Bloqueos Energéticos | Guía de Sanación',
            desc:  'Los 8 tipos de perturbaciones energéticas: trauma emocional, fragmentación del cuerpo energético, contratos del alma, implantes, entidades, programación, vínculos y plantillas.' },
      ru: { title: '8 Типов Энергетических Блоков | Руководство по Исцелению',
            desc:  '8 видов энергетических нарушений: эмоциональная травма, фрагментация энергетического тела, контракты души, импланты, сущности, программирование, связи и шаблоны.' }
    },
    '/energy-blocks/emotional-trauma/': {
      type: 'Article',
      en: { title: 'Emotional Trauma in the Energy Body | Energy Healing',
            desc:  'How unprocessed emotional wounds from this life, past incarnations, and ancestral lines are stored as frozen low-frequency energy — and how to identify them.' },
      es: { title: 'Trauma Emocional en el Cuerpo Energético | Sanación',
            desc:  'Cómo las heridas emocionales no procesadas de esta vida, encarnaciones pasadas y líneas ancestrales se almacenan como energía de baja frecuencia congelada.' },
      ru: { title: 'Эмоциональная Травма в Энергетическом Теле | Исцеление',
            desc:  'Как непроработанные эмоциональные раны этой жизни, прошлых воплощений и родовых линий хранятся в виде замороженной энергии низкой частоты.' }
    },
    '/energy-blocks/energy-body/': {
      type: 'Article',
      en: { title: 'Energy Body Fragmentation | Energy Healing Guide',
            desc:  'What happens when parts of your energy body are lost during extreme trauma — causing numbness, low vitality, and a magnetic pull toward those who hold them.' },
      es: { title: 'Fragmentación del Cuerpo Energético | Guía de Sanación',
            desc:  'Qué ocurre cuando partes de tu cuerpo energético se pierden durante un trauma extremo: entumecimiento, baja vitalidad y atracción magnética.' },
      ru: { title: 'Фрагментация Энергетического Тела | Руководство',
            desc:  'Что происходит, когда части энергетического тела теряются во время сильной травмы — онемение, низкая жизненная сила и магнетическое притяжение.' }
    },
    '/energy-blocks/soul-contracts/': {
      type: 'Article',
      en: { title: 'Soul Contracts Explained | Energy Healing Guide',
            desc:  'Pre-incarnation energetic agreements — vows, oaths, promises — creating invisible ceilings in relationships, finances, and personal freedom across lifetimes.' },
      es: { title: 'Contratos del Alma | Guía de Sanación Energética',
            desc:  'Acuerdos energéticos pre-encarnación — votos, juramentos, promesas — que crean techos invisibles en las relaciones, finanzas y libertad personal.' },
      ru: { title: 'Контракты Души | Руководство по Энергетическому Исцелению',
            desc:  'Доинкарнационные энергетические соглашения — клятвы, обеты, обещания — создающие невидимые потолки в отношениях, финансах и свободе.' }
    },
    '/energy-blocks/implants/': {
      type: 'Article',
      en: { title: 'Energetic Implants | Energy Healing Guide',
            desc:  'Foreign structures placed in the energy field that emit specific frequencies — influencing thoughts, emotions, and health in ways invisible to conventional medicine.' },
      es: { title: 'Implantes Energéticos | Guía de Sanación Energética',
            desc:  'Estructuras ajenas en el campo energético que emiten frecuencias específicas, influyendo en pensamientos, emociones y salud de maneras invisibles para la medicina.' },
      ru: { title: 'Энергетические Импланты | Руководство по Исцелению',
            desc:  'Чужеродные структуры в энергетическом поле, излучающие определённые частоты и влияющие на мысли, эмоции и здоровье способами, невидимыми для медицины.' }
    },
    '/energy-blocks/entities/': {
      type: 'Article',
      en: { title: 'Energy Entities | Energy Healing Guide',
            desc:  'What energy entities are, how they attach to the energy body, why they drive reactive behaviour, and the energetic reality behind obsession and emotional hijacking.' },
      es: { title: 'Entidades Energéticas | Guía de Sanación Energética',
            desc:  'Qué son las entidades energéticas, cómo se adhieren al cuerpo energético, por qué impulsan conductas reactivas y la realidad energética detrás de la obsesión.' },
      ru: { title: 'Энергетические Сущности | Руководство по Исцелению',
            desc:  'Что такое энергетические сущности, как они прикрепляются к энергетическому телу, почему управляют реактивным поведением и реальность за одержимостью.' }
    },
    '/energy-blocks/programming/': {
      type: 'Article',
      en: { title: 'Energetic Programming | Energy Healing Guide',
            desc:  'Belief loops from ancestors, culture, and trauma running on autopilot. Includes the nocebo effect, media programming, false memory research, and deprogramming.' },
      es: { title: 'Programación Energética | Guía de Sanación Energética',
            desc:  'Bucles de creencias de antepasados, cultura y trauma en piloto automático. Incluye el efecto nocebo, programación mediática e investigación sobre memoria falsa.' },
      ru: { title: 'Энергетическое Программирование | Руководство по Исцелению',
            desc:  'Петли убеждений от предков, культуры и травмы на автопилоте. Эффект ноцебо, медийное программирование, исследования ложной памяти и депрограммирование.' }
    },
    '/energy-blocks/energy-bonds/': {
      type: 'Article',
      en: { title: 'Energy Bonds & Cords | Energy Healing Guide',
            desc:  'Energetic cords to others that exchange energy continuously — draining you, fuelling obsession, and making separations impossible to complete. Castaneda recapitulation.' },
      es: { title: 'Vínculos y Cordones Energéticos | Guía de Sanación',
            desc:  'Cordones energéticos que intercambian energía continuamente: agotamiento, obsesión, rupturas imposibles de completar. Recapitulación de Castaneda.' },
      ru: { title: 'Энергетические Связи и Нити | Руководство по Исцелению',
            desc:  'Энергетические нити к другим людям, постоянно обменивающиеся энергией: истощение, навязчивые мысли, незавершённые расставания. Рекапитуляция Кастанеды.' }
    },
    '/energy-blocks/energy-templates/': {
      type: 'Article',
      en: { title: 'Energy Templates | Energy Healing Guide',
            desc:  'Emotional imprints left by other people\'s energy after interactions — making you carry emotions that are not originally yours, and how to clear them.' },
      es: { title: 'Plantillas Energéticas | Guía de Sanación Energética',
            desc:  'Impresiones emocionales dejadas por la energía de otras personas: cargas emociones que no son tuyas originalmente, y cómo limpiarlas.' },
      ru: { title: 'Энергетические Шаблоны | Руководство по Исцелению',
            desc:  'Эмоциональные отпечатки чужой энергии, остающиеся после взаимодействий: ты несёшь эмоции, которые изначально не твои. Как их очистить.' }
    },
    '/healing/': {
      type: 'Article',
      en: { title: 'Healing Protocols Overview | Energy Healing Guide',
            desc:  'Targeted step-by-step protocols for each of the 8 energy block types, plus essential preparation before you begin any healing session.' },
      es: { title: 'Protocolos de Sanación | Guía de Sanación Energética',
            desc:  'Protocolos paso a paso específicos para cada uno de los 8 tipos de bloqueos energéticos, más preparación esencial antes de comenzar cualquier sesión.' },
      ru: { title: 'Протоколы Исцеления | Руководство по Энергетическому Исцелению',
            desc:  'Пошаговые протоколы для каждого из 8 типов энергетических блоков, а также необходимая подготовка перед началом любого сеанса исцеления.' }
    },
    '/healing/emotional-trauma/': {
      type: 'HowTo',
      en: { title: 'Healing Emotional Trauma Protocol | Energy Healing',
            desc:  'Step-by-step guided protocol to identify, feel, and release emotional trauma stored across past lives, ancestral lines, and this current lifetime.' },
      es: { title: 'Protocolo: Sanar el Trauma Emocional | Sanación Energética',
            desc:  'Protocolo guiado paso a paso para identificar, sentir y liberar trauma emocional almacenado en vidas pasadas, líneas ancestrales y la vida actual.' },
      ru: { title: 'Протокол: Исцеление Эмоциональной Травмы | Энергетика',
            desc:  'Пошаговый протокол для выявления, проживания и освобождения эмоциональной травмы, хранящейся в прошлых жизнях, родовых линиях и текущей жизни.' }
    },
    '/healing/energy-body/': {
      type: 'HowTo',
      en: { title: 'Healing Energy Body Fragmentation | Energy Healing',
            desc:  'Protocol to call back lost energy body parts, clear attached contracts and implants, and restore wholeness and vitality to your energy field.' },
      es: { title: 'Protocolo: Sanar la Fragmentación del Cuerpo Energético',
            desc:  'Protocolo para recuperar partes perdidas del cuerpo energético, limpiar contratos e implantes adheridos, y restaurar la plenitud de tu campo energético.' },
      ru: { title: 'Протокол: Исцеление Фрагментации Энергетического Тела',
            desc:  'Протокол возвращения утраченных частей энергетического тела, очищения прикреплённых контрактов и имплантов, восстановления целостности поля.' }
    },
    '/healing/soul-contracts/': {
      type: 'HowTo',
      en: { title: 'Cancelling Soul Contracts Protocol | Energy Healing',
            desc:  'Step-by-step protocol to identify, declare, cancel, and annihilate soul contracts — reclaiming your sovereignty across all dimensions and timelines.' },
      es: { title: 'Protocolo: Cancelar Contratos del Alma | Sanación',
            desc:  'Protocolo paso a paso para identificar, declarar, cancelar y aniquilar contratos del alma — recuperando tu soberanía en todas las dimensiones.' },
      ru: { title: 'Протокол: Отмена Контрактов Души | Энергетическое Исцеление',
            desc:  'Пошаговый протокол для выявления, объявления, отмены и аннигиляции контрактов души — возвращения суверенитета во всех измерениях и временных линиях.' }
    },
    '/healing/implants/': {
      type: 'HowTo',
      en: { title: 'Removing Energetic Implants Protocol | Energy Healing',
            desc:  'Protocol to locate, deactivate, unfix, and expel energetic implants — including removal of the blue-film DNA remnant and field restoration.' },
      es: { title: 'Protocolo: Eliminar Implantes Energéticos | Sanación',
            desc:  'Protocolo para localizar, desactivar, desfijar y expulsar implantes energéticos, incluyendo la eliminación del remanente de ADN y restauración del campo.' },
      ru: { title: 'Протокол: Удаление Энергетических Имплантов | Исцеление',
            desc:  'Протокол для обнаружения, деактивации, расфиксации и изгнания энергетических имплантов, включая удаление остатка ДНК и восстановление поля.' }
    },
    '/healing/entities/': {
      type: 'HowTo',
      en: { title: 'Entity Removal Protocol | Energy Healing Guide',
            desc:  'Full step-by-step entity removal: cancel contracts, retrieve lost energy body parts, remove blue-film DNA remnant, seal and protect the field.' },
      es: { title: 'Protocolo de Eliminación de Entidades | Sanación',
            desc:  'Eliminación completa de entidades paso a paso: cancelar contratos, recuperar partes de energía, eliminar remanente de ADN, sellar y proteger el campo.' },
      ru: { title: 'Протокол Удаления Сущностей | Энергетическое Исцеление',
            desc:  'Полный пошаговый протокол удаления сущностей: отмена контрактов, возврат частей энергии, удаление остатка ДНК, запечатывание и защита поля.' }
    },
    '/healing/programming/': {
      type: 'HowTo',
      en: { title: 'Deprogramming Protocol | Energy Healing Guide',
            desc:  'Protocol to identify belief loops, cancel contracts with programming sources, and expel programs out of the energy field with white light.' },
      es: { title: 'Protocolo de Desprogramación | Sanación Energética',
            desc:  'Protocolo para identificar bucles de creencias, cancelar contratos con fuentes de programación y expulsar programas del campo energético con luz blanca.' },
      ru: { title: 'Протокол Депрограммирования | Энергетическое Исцеление',
            desc:  'Протокол выявления петель убеждений, отмены контрактов с источниками программирования и изгнания программ из энергетического поля белым светом.' }
    },
    '/healing/energy-bonds/': {
      type: 'HowTo',
      en: { title: 'Cutting Energy Bonds Protocol | Energy Healing Guide',
            desc:  'Protocol to release energetic cords to others, return misplaced energy from across timelines, and fully reclaim your own energy field.' },
      es: { title: 'Protocolo: Cortar Vínculos Energéticos | Sanación',
            desc:  'Protocolo para liberar cordones energéticos con otros, devolver energía desplazada a través de líneas de tiempo y recuperar por completo tu campo energético.' },
      ru: { title: 'Протокол Разрыва Энергетических Связей | Исцеление',
            desc:  'Протокол освобождения от энергетических нитей к другим, возврата смещённой энергии через временные линии и полного возвращения своего поля.' }
    },
    '/healing/energy-templates/': {
      type: 'HowTo',
      en: { title: 'Clearing Energy Templates Protocol | Energy Healing',
            desc:  'Protocol to deactivate and release emotional residue left by other people\'s energy in your field after daily interactions.' },
      es: { title: 'Protocolo: Limpiar Plantillas Energéticas | Sanación',
            desc:  'Protocolo para desactivar y liberar el residuo emocional dejado por la energía de otras personas en tu campo tras las interacciones diarias.' },
      ru: { title: 'Протокол Очищения Энергетических Шаблонов | Исцеление',
            desc:  'Протокол деактивации и освобождения от эмоционального остатка чужой энергии в твоём поле после ежедневных взаимодействий.' }
    },
    '/practices/': {
      type: 'Article',
      en: { title: 'Daily Energy Practices | Energy Healing Guide',
            desc:  'Preparation protocol, daily healing meditation, self-protection, space clearing, physical body guide, nutrition, and the 13 Transformations.' },
      es: { title: 'Prácticas Energéticas Diarias | Guía de Sanación',
            desc:  'Protocolo de preparación, meditación diaria, autoprotección, limpieza de espacios, guía del cuerpo físico, nutrición y las 13 Transformaciones.' },
      ru: { title: 'Ежедневные Энергетические Практики | Руководство',
            desc:  'Протокол подготовки, ежедневная медитация исцеления, самозащита, очищение пространства, руководство по физическому телу, питание и 13 Трансформаций.' }
    },
    '/practices/daily-meditation/': {
      type: 'HowTo',
      en: { title: 'Daily Healing Meditation | Energy Healing Guide',
            desc:  'A 10-minute daily energy maintenance meditation to clear daily templates, protect your field, stay grounded, and sustain high-frequency living.' },
      es: { title: 'Meditación Diaria de Sanación | Guía de Sanación Energética',
            desc:  'Meditación diaria de mantenimiento energético de 10 minutos para limpiar plantillas diarias, proteger tu campo, mantenerte anclado y vivir en alta frecuencia.' },
      ru: { title: 'Ежедневная Медитация Исцеления | Руководство',
            desc:  'Ежедневная 10-минутная медитация для очищения дневных шаблонов, защиты поля, заземления и поддержания жизни на высокой частоте.' }
    },
    '/practices/physical-body/': {
      type: 'HowTo',
      en: { title: 'Physical Body Quick Guide | Energy Healing Guide',
            desc:  'Rapid energy techniques for physical pain, inflammation, and somatic trauma release — bridge between the energy body and physical symptoms.' },
      es: { title: 'Guía Rápida del Cuerpo Físico | Guía de Sanación',
            desc:  'Técnicas energéticas rápidas para el dolor físico, la inflamación y la liberación del trauma somático: puente entre el cuerpo energético y los síntomas físicos.' },
      ru: { title: 'Краткое Руководство по Физическому Телу | Исцеление',
            desc:  'Быстрые энергетические техники для физической боли, воспаления и соматического освобождения от травмы — связь между энергетическим и физическим телом.' }
    },
    '/practices/self-protection/': {
      type: 'HowTo',
      en: { title: 'Energy Self-Protection Guide | Energy Healing Guide',
            desc:  'How to protect your energy field before charged situations, close your energy after interactions, and maintain healthy boundaries.' },
      es: { title: 'Guía de Autoprotección Energética | Sanación Energética',
            desc:  'Cómo proteger tu campo energético antes de situaciones cargadas, cerrar tu energía después de las interacciones y mantener límites saludables.' },
      ru: { title: 'Руководство по Энергетической Самозащите | Исцеление',
            desc:  'Как защитить энергетическое поле перед напряжёнными ситуациями, закрыть энергию после взаимодействий и сохранять здоровые границы.' }
    },
    '/practices/clear-space/': {
      type: 'HowTo',
      en: { title: 'Clearing New Space & Home | Energy Healing Guide',
            desc:  'Protocol to clear residual energy and emotional imprints from a new home, space, or object before you inhabit or use it.' },
      es: { title: 'Limpiar Nuevo Espacio y Hogar | Guía de Sanación',
            desc:  'Protocolo para limpiar energía residual e impresiones emocionales de un nuevo hogar, espacio u objeto antes de habitarlo o usarlo.' },
      ru: { title: 'Очищение Нового Пространства и Дома | Руководство',
            desc:  'Протокол для очищения остаточной энергии и эмоциональных отпечатков в новом доме, пространстве или предмете перед заселением или использованием.' }
    },
    '/practices/nutrition/': {
      type: 'Article',
      en: { title: 'Nutrition for Energy Healing | Energy Healing Guide',
            desc:  'Foods and dietary principles that support high-frequency living, energetic sensitivity, and the healing process.' },
      es: { title: 'Nutrición para la Sanación Energética | Guía',
            desc:  'Alimentos y principios dietéticos que apoyan la vida en alta frecuencia, la sensibilidad energética y el proceso de sanación.' },
      ru: { title: 'Питание для Энергетического Исцеления | Руководство',
            desc:  'Продукты и принципы питания, поддерживающие жизнь на высокой частоте, энергетическую чувствительность и процесс исцеления.' }
    },
    '/practices/13-transformations/': {
      type: 'Article',
      en: { title: 'The 13 Transformations | Energy Healing Guide',
            desc:  'Jonas Gervi\'s sequence of 13 targeted energetic commands for systematic energy field restoration — and why the sequence order matters.' },
      es: { title: 'Las 13 Transformaciones | Guía de Sanación Energética',
            desc:  'La secuencia de 13 comandos energéticos específicos de Jonas Gervi para la restauración sistemática del campo energético, y por qué importa el orden.' },
      ru: { title: '13 Трансформаций | Руководство по Энергетическому Исцелению',
            desc:  '13 целенаправленных энергетических команд Йонаса Герви для систематического восстановления энергетического поля — и почему важен порядок последовательности.' }
    },
    '/about/': {
      type: 'ProfilePage',
      en: { title: 'About Jane Novikova | Energy Healing Guide',
            desc:  'About Jane Novikova — energy healing practitioner. The research behind the practice: mainstream science (van der Kolk, Porges, Pert) and boundary researchers (Stevenson, Newton, Weiss).' },
      es: { title: 'Sobre Jane Novikova | Guía de Sanación Energética',
            desc:  'Sobre Jane Novikova — practicante de sanación energética. La investigación detrás de la práctica: ciencia principal y investigadores de frontera.' },
      ru: { title: 'О Жене Новиковой | Руководство по Энергетическому Исцелению',
            desc:  'О Жене Новиковой — практике энергетического исцеления. Исследования, лежащие в основе практики: официальная наука и исследователи на границе науки.' }
    }
  };

  // ── Derive current page info ──────────────────────────────
  var rawPath = window.location.pathname;
  var langPrefix = rawPath.startsWith('/es/') ? 'es'
                 : rawPath.startsWith('/ru/') ? 'ru'
                 : 'en';
  var canonPath = rawPath.replace(/^\/(es|ru)\//, '/');
  // Normalise: /foo → /foo/
  if (!canonPath.endsWith('/')) canonPath += '/';

  var pageMeta = META[canonPath] || META['/'];
  var lm = pageMeta[langPrefix] || pageMeta.en;
  var pageType = pageMeta.type;

  // ── Helper: get-or-create a <head> element ────────────────
  function headEl(sel, tag, attrs) {
    var el = document.querySelector(sel);
    if (!el) {
      el = document.createElement(tag);
      Object.keys(attrs || {}).forEach(function(k) { el.setAttribute(k, attrs[k]); });
      document.head.appendChild(el);
    }
    return el;
  }

  // ── Title ─────────────────────────────────────────────────
  document.title = lm.title;

  // ── Meta description ──────────────────────────────────────
  headEl('meta[name="description"]', 'meta', { name: 'description' }).content = lm.desc;

  // ── Meta robots ───────────────────────────────────────────
  headEl('meta[name="robots"]', 'meta', { name: 'robots' }).content = 'index, follow';

  // ── Canonical ─────────────────────────────────────────────
  headEl('link[rel="canonical"]', 'link', { rel: 'canonical' }).href = SITE + rawPath;

  // ── hreflang alternates ───────────────────────────────────
  [
    { hl: 'en',        url: SITE + canonPath },
    { hl: 'es',        url: SITE + '/es' + canonPath },
    { hl: 'ru',        url: SITE + '/ru' + canonPath },
    { hl: 'x-default', url: SITE + canonPath }
  ].forEach(function(alt) {
    var el = document.createElement('link');
    el.rel = 'alternate';
    el.hreflang = alt.hl;
    el.href = alt.url;
    document.head.appendChild(el);
  });

  // ── Open Graph ────────────────────────────────────────────
  var ogType = (pageType === 'WebSite') ? 'website' : 'article';
  [
    ['og:type',        ogType],
    ['og:url',         SITE + rawPath],
    ['og:title',       lm.title],
    ['og:description', lm.desc],
    ['og:site_name',   'Energy Healing Guide'],
    ['og:locale',      langPrefix === 'ru' ? 'ru_RU' : langPrefix === 'es' ? 'es_ES' : 'en_US']
  ].forEach(function(pair) {
    headEl('meta[property="' + pair[0] + '"]', 'meta', { property: pair[0] }).content = pair[1];
  });

  // ── Twitter Card ──────────────────────────────────────────
  [
    ['twitter:card',        'summary'],
    ['twitter:title',       lm.title],
    ['twitter:description', lm.desc]
  ].forEach(function(pair) {
    headEl('meta[name="' + pair[0] + '"]', 'meta', { name: pair[0] }).content = pair[1];
  });

  // ── JSON-LD Schema ────────────────────────────────────────
  var schema;
  var breadcrumbs = (function() {
    var parts = canonPath.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
    var items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' }];
    var acc = '';
    parts.forEach(function(part, i) {
      acc += '/' + part + '/';
      var name = part.replace(/-/g, ' ').replace(/\b\w/g, function(c) { return c.toUpperCase(); });
      items.push({ '@type': 'ListItem', position: i + 2, name: name, item: SITE + acc });
    });
    return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items };
  })();

  if (pageType === 'WebSite') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Energy Healing Guide',
      url: SITE + '/',
      description: pageMeta.en.desc,
      author: { '@type': 'Person', name: AUTHOR, url: SITE + '/about/' },
      inLanguage: ['en', 'es', 'ru']
    };
  } else if (pageType === 'ProfilePage') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: AUTHOR,
        jobTitle: 'Energy Healing Practitioner',
        url: SITE + '/about/',
        knowsAbout: ['Energy healing', 'Trauma release', 'Soul contracts', 'Energetic entities', 'Somatic therapy']
      }
    };
  } else if (pageType === 'HowTo') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: pageMeta.en.title.split('|')[0].trim(),
      description: pageMeta.en.desc,
      author: { '@type': 'Person', name: AUTHOR, url: SITE + '/about/' },
      inLanguage: langPrefix
    };
  } else {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: lm.title.split('|')[0].trim(),
      description: lm.desc,
      url: SITE + rawPath,
      author: { '@type': 'Person', name: AUTHOR, url: SITE + '/about/' },
      publisher: { '@type': 'Person', name: AUTHOR },
      inLanguage: langPrefix
    };
  }

  // Inject both schema and breadcrumbs
  [schema, breadcrumbs].forEach(function(s) {
    var el = document.createElement('script');
    el.type = 'application/ld+json';
    el.textContent = JSON.stringify(s);
    document.head.appendChild(el);
  });

})();
