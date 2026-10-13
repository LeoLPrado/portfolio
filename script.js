(function () {
  var r = document.documentElement,
    $ = function (s) {
      return document.querySelectorAll(s);
    },
    lang = 'pt';
  var M = 'mailto:leonardo.lopes@ges.inatel.br';
  var D = [
    [
      'nav a',
      ['Início', 'Sobre', 'Projetos', 'Habilidades', 'Contato'],
      ['Home', 'About', 'Projects', 'Skills', 'Contact'],
    ],
    ['h1', ['Olá, eu sou<br>Leonardo Prado'], ['Hello, I’m<br>Leonardo Prado'], 1],
    [
      '.lead',
      [
        'Estudante de Engenharia de Software no <b>Inatel</b>, construindo uma base prática em Engenharia de Dados para o mercado de trabalho.',
      ],
      [
        'Software Engineering student at <b>Inatel</b>, building a practical foundation in Data Engineering for the job market.',
      ],
      1,
    ],
    [
      '.sub',
      [
        'Foco em projetos práticos de dados, desenvolvimento web e soluções que fazem sentido para empresas.',
      ],
      [
        'Focused on practical data projects, web development, and solutions that make sense for businesses.',
      ],
    ],
    ['.btn.main', ['Baixar currículo'], ['Download Resume']],
    ['.btns .btn:not(.main)', ['Ver meus projetos'], ['View My Work']],
    ['#sobre h2', ['Sobre'], ['About']],
    [
      '.about',
      [
        'Estudante de Engenharia de Software no Instituto Nacional de Telecomunicações (INATEL), atualmente no 4º período, com formação prevista para 2029. Reconhecido pela excelência acadêmica, com média semestral acima de 90.',
        'Foco em Engenharia de Dados, desenvolvendo projetos com tecnologias como Python, SQL, Spark e Databricks. Estudo e aplico fundamentos sólidos de ETL/ELT, arquiteturas de dados como data lakes, data warehouses e lakehouses, Arquitetura Medallion e processamento distribuído de dados e, mais recentemente, modelagem relacional, esquemas estrela (star schema) e snowflake.',
        'Tenho experiência prática com projetos de desenvolvimento web e engenharia de dados, além de ensino voluntário. Conheço também C++, bancos de dados relacionais e plataformas de Big Data como Databricks e Apache Spark. Possuo a certificação Databricks Accreditation e inglês em nível intermediário (B1).',
      ],
      [
        'Software Engineering student at the National Institute of Telecommunications (INATEL), currently in the 4th semester, with graduation expected in 2029. Recognized for academic excellence, with a semester average above 90.',
        'Focused on Data Engineering, building projects with technologies like Python, SQL, Spark, and Databricks. I study and apply solid fundamentals in ETL/ELT, data architectures such as data lakes, data warehouses, and lakehouses, Medallion Architecture, and distributed data processing, and more recently relational data modeling, star schemas, and snowflake schemas.',
        'I have hands-on experience with web development and data engineering projects, as well as volunteer teaching. I also know C++, relational databases, and Big Data platforms such as Databricks and Apache Spark. I hold the Databricks Accreditation certification and intermediate English (B1).',
      ],
    ],
    ['#habilidades h2', ['Minha caixa de ferramentas'], ['My toolbox']],
    [
      '.grp h3',
      ['Frontend', 'Backend', 'Ferramentas', 'Soft skills'],
      ['Frontend', 'Backend', 'Tools', 'Soft skills'],
    ],
    [
      '.soft li span:last-child',
      ['Ensino', 'Trabalho em equipe', 'Comunicação', 'Comprometimento'],
      ['Teaching', 'Teamwork', 'Communication', 'Commitment'],
    ],
    ['#projetos h2', ['Projetos'], ['Projects']],
    [
      '.pg>h3',
      ['Engenharia de Dados', 'Projetos acadêmicos'],
      ['Data Engineering', 'Academic projects'],
    ],
    [
      '#habilidades .lede',
      ['Linguagens, plataformas e ferramentas que uso para construir meus projetos.'],
      ['Languages, platforms, and tools I use to build my projects.'],
    ],
    [
      '#projetos .lede',
      ['Trabalhos práticos em dados e desenvolvimento, dentro e fora da sala de aula.'],
      ['Hands-on work in data and development, in and out of the classroom.'],
    ],
    [
      '.gsub',
      [
        'Coletando, organizando e estruturando dados para análise.',
        'Projetos desenvolvidos durante a graduação no Inatel.',
      ],
      [
        'Collecting, organizing, and structuring data for analysis.',
        'Projects developed during my studies at Inatel.',
      ],
    ],
    [
      '.pc .h',
      [
        'Ingestão de dados em Batch',
        'Modelagem Dimensional Databricks',
        'NYCTaxiTrips',
        'FETIN Ecomind',
        'Interface Acadêmica',
      ],
      [
        'Batch data ingestion',
        'Databricks Dimensional Modeling',
        'NYCTaxiTrips',
        'FETIN Ecomind',
        'Academic Interface',
      ],
    ],
    [
      '.pc .more',
      ['Ver detalhes', 'Ver detalhes', 'Ver detalhes', 'Ver detalhes', 'Ver detalhes'],
      ['View details', 'View details', 'View details', 'View details', 'View details'],
    ],
    ['.ct-h', ['Vamos construir algo juntos.'], ['Let us build something together.']],
    [
      '.ct-sub',
      ['Tem um projeto, uma vaga de estágio ou uma ideia?<br>Vamos conversar.'],
      ['Have a project, an internship opening, or an idea?<br>Let us talk.'],
      1,
    ],
    ['.ct-t', ['Me encontre por aqui.'], ['Find me here.']],
    [
      '.ct-d',
      [
        'Para falar sobre dados, software, tecnologia ou oportunidades de estágio, entre em contato.',
      ],
      ['To talk about data, software, technology, or internship opportunities, get in touch.'],
    ],
    ['.ct-row .ct-l', ['Email', 'WhatsApp', 'Localização'], ['Email', 'WhatsApp', 'Location']],
    ['.ct-loc', ['Santa Rita do Sapucaí, MG, Brasil'], ['Santa Rita do Sapucaí, MG, Brazil']],
  ];
  function put(el, t, h) {
    if (h) {
      el.innerHTML = t;
    } else if (el.children.length) {
      el.lastChild.textContent = t;
    } else {
      el.textContent = t;
    }
  }
  function apply(l) {
    D.forEach(function (d) {
      var a = d[l === 'en' ? 2 : 1];
      $(d[0]).forEach(function (el, i) {
        if (a[i] != null) put(el, a[i], d[3]);
      });
    });
    r.lang = l === 'en' ? 'en' : 'pt-BR';
    $('.nx').forEach(function (n) {
      var pv = n.classList.contains('pv');
      n.setAttribute(
        'aria-label',
        l === 'en'
          ? pv
            ? 'Previous project'
            : 'Next project'
          : pv
            ? 'Projeto anterior'
            : 'Próximo projeto'
      );
    });
    document.title = 'Leonardo Prado - Portfolio';
    var b = document.querySelector('.lang');
    b.textContent = l === 'en' ? 'PT' : 'EN';
    b.setAttribute('aria-label', l === 'en' ? 'Traduzir para português' : 'Translate to English');
  }
  function setLang(l, anim) {
    var go = function () {
      lang = l;
      apply(l);
      try {
        localStorage.setItem('lang', l);
      } catch (x) {}
    };
    if (anim) {
      r.classList.add('swapping');
      setTimeout(function () {
        go();
        r.classList.remove('swapping');
      }, 170);
    } else {
      go();
    }
  }
  document.querySelector('.lang').addEventListener('click', function () {
    setLang(lang === 'pt' ? 'en' : 'pt', true);
  });
  var tb = document.querySelector('.theme'),
    SUN =
      '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    MOON = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>';
  function applyTheme(t) {
    r.dataset.theme = t;
    tb.querySelector('svg').innerHTML = t === 'dark' ? MOON : SUN;
  }
  tb.addEventListener('click', function () {
    var t = r.dataset.theme === 'dark' ? 'light' : 'dark',
      rm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    try {
      localStorage.setItem('theme', t);
    } catch (x) {}
    tb.classList.remove('spin');
    void tb.offsetWidth;
    tb.classList.add('spin');

    {
    }
    if (!rm) {
      r.classList.add('tx');
      setTimeout(function () {
        r.classList.remove('tx');
      }, 700);
    }
    applyTheme(t);
  });
  var st, sl;
  try {
    st = localStorage.getItem('theme');
    sl = localStorage.getItem('lang');
  } catch (x) {}
  if (st === 'dark') applyTheme('dark');
  setLang(sl === 'en' ? 'en' : 'pt', false);
  var links = $('nav a'),
    S = [
      ['main>.hero', '#inicio'],
      ['#sobre', '#sobre'],
      ['#projetos', '#projetos'],
      ['#habilidades', '#habilidades'],
      ['footer', '#contato'],
    ];
  function spy() {
    var cur = '#inicio',
      line = innerHeight * 0.35;
    S.forEach(function (s) {
      var e = document.querySelector(s[0]);
      if (e && e.getBoundingClientRect().top <= line) cur = s[1];
    });
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = '#contato';
    links.forEach(function (a) {
      a.classList.toggle('on', a.getAttribute('href') === cur);
    });
  }
  addEventListener('scroll', spy, { passive: true });
  addEventListener('resize', spy);
  spy();
  var PR = {
      ing: {
        t: ['Ingestão de dados em Batch', 'Batch data ingestion'],
        d: [
          'Pipeline de ingestão batch de dados de transações, com arquitetura em camadas (Source, Bronze e Silver) em um Data Lake e orquestração com Airflow.\nArquivos CSV diários de um sistema de transações são lidos com Apache Spark e gravados em tabelas Delta, que guardam o histórico de versões e garantem transações ACID.\nA carga da Source para a Bronze é idempotente: reprocessar o mesmo dia não gera duplicidade. Da Bronze para a Silver, só os registros novos ou mais recentes são processados e mesclados por upsert (merge) usando o ID da transação, o que também cobre correções tardias.\nUma DAG do Airflow orquestra todo o fluxo. O projeto foi feito com foco em estudo e aprendizado, simulando a chegada diária de dados em um Data Lake local.',
          'Batch ingestion pipeline for transaction data, with a layered architecture (Source, Bronze, and Silver) in a Data Lake and orchestration with Airflow.\nDaily CSV files from a transaction system are read with Apache Spark and written to Delta tables, which keep the version history and guarantee ACID transactions.\nThe Source to Bronze load is idempotent: reprocessing the same day does not create duplicates. From Bronze to Silver, only new or more recent records are processed and merged by upsert using the transaction ID, which also covers late corrections.\nAn Airflow DAG orchestrates the whole flow. The project was built for study and learning, simulating the daily arrival of data in a local Data Lake.',
        ],
        k: [
          ['Python', 'Apache Airflow', 'PySpark', 'Delta Lake', 'Pandas', 'Arquitetura em camadas'],
          ['Python', 'Apache Airflow', 'PySpark', 'Delta Lake', 'Pandas', 'Layered architecture'],
        ],
        img: 'assets/projeto-ingestao-batch.svg',
        gh: 'https://github.com/LeoLPrado/IngestaoBatch',
      },
      dw: {
        t: ['Modelagem Dimensional Databricks', 'Databricks Dimensional Modeling'],
        d: [
          'Data Warehouse de vendas construído do zero no Databricks, usando modelagem multidimensional (Star e Snowflake).\nA partir de um dataset sintético de 1.000 itens de pedido, gerado em Python, os dados passam pelas camadas landing e bronze, com schema explícito e métricas calculadas, até chegar ao modelo dimensional.\nO grão do modelo é o item de pedido. No Star Schema, uma tabela fato é cercada por 5 dimensões desnormalizadas; no Snowflake, as dimensões de produto e loja são normalizadas em hierarquias, chegando a 10 dimensões. Tudo é organizado no Unity Catalog, com chaves substitutas (surrogate keys).\nO mesmo modelo de negócio foi implementado nas duas abordagens para comparar, na prática, a organização das dimensões, a redundância dos dados e o número de joins nas consultas analíticas.',
          'Sales data warehouse built from scratch on Databricks, using multidimensional modeling (Star and Snowflake).\nStarting from a synthetic dataset of 1,000 order items, generated in Python, the data goes through landing and bronze layers, with an explicit schema and calculated metrics, before reaching the dimensional model.\nThe model grain is the order item. In the Star Schema, a fact table is surrounded by 5 denormalized dimensions; in the Snowflake Schema, the product and store dimensions are normalized into hierarchies, reaching 10 dimensions. Everything is organized in Unity Catalog, using surrogate keys.\nThe same business model was implemented in both approaches to compare, in practice, how dimensions are organized, data redundancy, and the number of joins in analytical queries.',
        ],
        k: [
          [
            'Databricks',
            'SQL',
            'Python',
            'Data Warehouse',
            'Modelagem Multidimensional (Star e Snowflake)',
          ],
          [
            'Databricks',
            'SQL',
            'Python',
            'Data Warehouse',
            'Multidimensional Modeling (Star and Snowflake)',
          ],
        ],
        img: 'assets/projeto-modelagem-dimensional.svg',
        gh: 'https://github.com/LeoLPrado/Modelagem-Dimensional-Databricks',
      },
      nyc: {
        t: ['NYCTaxiTrips', 'NYCTaxiTrips'],
        d: [
          'Pipeline de engenharia de dados no Databricks para analisar viagens de táxi amarelo de Nova York, com arquitetura Medallion (Bronze, Silver e Gold).\nOs dados brutos vêm de um dataset público do Databricks, com 10.000 viagens de dezembro de 2019. Na camada Silver, eles são limpos e transformados: colunas renomeadas, duração da viagem calculada, data e hora extraídas e tipo de pagamento normalizado.\nA camada Gold reúne KPIs de comportamento de pagamento: total de corridas, custo médio e distância média por tipo de pagamento. A análise mostrou valor médio negativo nas corridas do tipo dispute, um possível indício de estornos ou cobranças contestadas.\nTodo o fluxo é orquestrado por um Job do Databricks, que executa em sequência a configuração do ambiente, a ingestão Bronze, a transformação Silver e o cálculo dos KPIs Gold.',
          'Data engineering pipeline on Databricks to analyze New York yellow taxi trips, using the Medallion architecture (Bronze, Silver, and Gold).\nThe raw data comes from a public Databricks dataset with 10,000 trips from December 2019. In the Silver layer, it is cleaned and transformed: columns renamed, trip duration calculated, date and time extracted, and payment type normalized.\nThe Gold layer gathers payment behavior KPIs: total trips, average cost, and average distance per payment type. The analysis showed a negative average amount for dispute trips, a possible sign of refunds or contested charges.\nThe whole flow is orchestrated by a Databricks Job, which runs the environment setup, Bronze ingestion, Silver transformation, and Gold KPI calculation in sequence.',
        ],
        k: [
          [
            'Databricks',
            'PySpark',
            'SQL',
            'Delta Lake',
            'Arquitetura Medallion',
            'Databricks Jobs',
          ],
          [
            'Databricks',
            'PySpark',
            'SQL',
            'Delta Lake',
            'Medallion Architecture',
            'Databricks Jobs',
          ],
        ],
        img: 'assets/projeto-nyctaxitrips.svg',
        gh: 'https://github.com/LeoLPrado/NYCTaxiTrips',
      },
      eco: {
        t: ['FETIN Ecomind', 'FETIN Ecomind'],
        d: null,
        img: 'assets/projeto-fetin-ecomind.svg',
        gh: '',
      },
      ia: {
        t: ['Interface Acadêmica', 'Academic Interface'],
        d: null,
        img: 'assets/projeto-interface-academica.svg',
        gh: '',
      },
    },
    SOON = ['Descrição em breve.', 'Description coming soon.'];
  var ov = document.getElementById('ov'),
    pnl = ov.querySelector('.pnl'),
    last = null,
    introT;
  function rmq() {
    return matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  function geo(btn) {
    var c = btn.getBoundingClientRect(),
      p = pnl.getBoundingClientRect();
    return (
      'translate(' +
      (c.left + c.width / 2 - p.left - p.width / 2) +
      'px,' +
      (c.top + c.height / 2 - p.top - p.height / 2) +
      'px) scale(' +
      Math.min(c.width / p.width, 1) +
      ')'
    );
  }
  function openP(btn) {
    var i = lang === 'en' ? 1 : 0;
    last = btn;
    var P = PR[btn.dataset.k];
    document.getElementById('pt').textContent = P.t[i];
    var D2 = document.getElementById('pd');
    D2.textContent = '';
    (P.d ? P.d[i] : SOON[i]).split('\n').forEach(function (t) {
      var q = document.createElement('p');
      q.textContent = t;
      D2.appendChild(q);
    });
    var K = document.getElementById('pk');
    K.textContent = '';
    K.hidden = !P.k;
    if (P.k) {
      var kl = document.createElement('span');
      kl.className = 'kl';
      kl.textContent = i ? 'Technologies' : 'Tecnologias';
      var kp = document.createElement('div');
      kp.className = 'kp';
      P.k[i].forEach(function (t) {
        var s = document.createElement('span');
        s.textContent = t;
        kp.appendChild(s);
      });
      K.appendChild(kl);
      K.appendChild(kp);
    }
    ov.querySelector('.img').style.backgroundImage = P.img ? 'url(' + P.img + ')' : '';
    var g = document.getElementById('gh');
    g.hidden = !P.gh;
    if (P.gh) {
      g.href = P.gh;
      g.querySelector('span').textContent = i ? 'View on GitHub' : 'Ver no GitHub';
    }
    pnl.getAnimations().forEach(function (a) {
      a.cancel();
    });
    ov.setAttribute('aria-hidden', 'false');
    ov.classList.add('open');
    document.body.classList.add('lock');
    var tx = ov.querySelector('.txt');
    clearTimeout(introT);
    tx.classList.remove('intro');
    if (!rmq()) {
      var hb = document.getElementById('pt').getBoundingClientRect(),
        pb = pnl.getBoundingClientRect();
      tx.style.setProperty('--ty', pb.top + pb.height / 2 - hb.top - hb.height / 2 + 'px');
      tx.classList.add('intro');
      introT = setTimeout(function () {
        tx.classList.remove('intro');
      }, 550);
    }
    var from = geo(btn);
    void ov.offsetWidth;
    ov.classList.add('show');
    if (!rmq())
      pnl.animate(
        [
          { transform: from, opacity: 0.3 },
          { transform: 'none', opacity: 1 },
        ],
        { duration: 380, easing: 'cubic-bezier(.2,.8,.2,1)' }
      );
    ov.querySelector('.x').focus({ preventScroll: true });
  }
  function closeP() {
    if (!last) return;
    var btn = last;
    last = null;
    clearTimeout(introT);
    ov.classList.remove('show');
    var done = function () {
      ov.classList.remove('open');
      ov.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('lock');
      btn.focus({ preventScroll: true });
    };
    if (rmq()) {
      done();
      return;
    }
    var a = pnl.animate(
      [
        { transform: 'none', opacity: 1 },
        { transform: geo(btn), opacity: 0 },
      ],
      { duration: 300, easing: 'ease-in', fill: 'forwards' }
    );
    a.onfinish = done;
  }
  $('.pc').forEach(function (b) {
    var im = PR[b.dataset.k].img;
    if (im) b.querySelector('.img').style.backgroundImage = 'url(' + im + ')';
  });
  $('.pc').forEach(function (b) {
    b.addEventListener('click', function () {
      if (!b.dataset.d || b.dataset.d === '0') openP(b);
    });
  });
  ov.addEventListener('click', function (e) {
    if (e.target === ov) closeP();
  });
  ov.querySelector('.x').addEventListener('click', closeP);
  addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && last) closeP();
  });
  $('.prow').forEach(function (row, gi) {
    var deck = row.querySelector('.deck'),
      cards = [].slice.call(deck.children),
      n = cards.length,
      cur = 0,
      timer,
      paused = false;
    function place() {
      cards.forEach(function (c, i) {
        var s = (i - cur + n) % n;
        if (s > n / 2) s -= n;
        c.style.setProperty('--s', s);
        c.style.setProperty('--a', Math.abs(s));
        c.dataset.d = s;
        var h = Math.abs(s) > 1;
        c.tabIndex = h ? -1 : 0;
        c.setAttribute('aria-hidden', h ? 'true' : 'false');
      });
    }
    function go(k) {
      cur = ((k % n) + n) % n;
      place();
    }
    function tick() {
      if (document.hidden || paused || ov.classList.contains('open')) return;
      go(cur + 1);
    }
    function restart() {
      clearInterval(timer);
      if (!rmq()) timer = setInterval(tick, 5500 + gi * 1500);
    }
    place();
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        deck.classList.add('rdy');
      });
    });
    row.querySelector('.nx:not(.pv)').addEventListener('click', function () {
      go(cur + 1);
      restart();
    });
    row.querySelector('.pv').addEventListener('click', function () {
      go(cur - 1);
      restart();
    });
    cards.forEach(function (c, i) {
      c.addEventListener('click', function () {
        if (c.dataset.d !== '0') {
          go(i);
          restart();
        }
      });
    });
    row.addEventListener('pointerenter', function (e) {
      if (e.pointerType === 'mouse') paused = true;
    });
    row.addEventListener('pointerleave', function (e) {
      if (e.pointerType === 'mouse') paused = false;
    });
    row.addEventListener('focusin', function () {
      paused = true;
    });
    row.addEventListener('focusout', function () {
      paused = false;
    });
    restart();
  });
})();
