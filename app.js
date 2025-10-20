
const QUESTIONS = [
  {
    id: 1,
    type: 'single',
    prompt: 'Indique el enunciado INCORRECTO cuando caracterizamos al hidrógeno:',
    options: [
      'El hidrógeno es un gas diatómico, inodoro e incoloro',
      'Es el elemento más abundante en el planeta',
      'En su estado puro, posee características energéticas excepcionales',
      'Se encuentra puro en la naturaleza'
    ],
    correct: 1,
    explanation:
      'El hidrógeno no es el elemento más abundante en la Tierra; en el planeta predomina combinado en compuestos como el agua.'
  },
  {
    id: 2,
    type: 'single',
    prompt: 'Obtener H₂ a partir del reformado o gasificación es posible a partir de energías…',
    helper: 'i. renovables	 ii. nuclear	 iii. no renovables',
    options: ['Solo iii', 'i y iii', 'ii y iii', 'Todas'],
    correct: 1,
    explanation:
      'El reformado o la gasificación pueden alimentarse con fuentes renovables (biomasa) o no renovables (gas natural); no dependen directamente de energía nuclear.'
  },
  {
    id: 3,
    type: 'single',
    prompt:
      'El mayor porcentaje de hidrógeno que se produce en la actualidad es a partir de combustibles fósiles y utilizando la técnica de reformado de gas natural, por lo tanto se lo denomina:',
    options: ['Negro', 'Gris', 'Azul', 'Verde'],
    correct: 1,
    explanation:
      'El hidrógeno generado a partir de gas natural con emisiones sin capturar se clasifica como hidrógeno gris.'
  },
  {
    id: 4,
    type: 'single',
    prompt: 'La innovación del hidrógeno azul que le permite ser considerado no perjudicial para el ambiente es:',
    options: [
      'Utilización de gas natural',
      'Producción de H₂ sin producción de CO₂',
      'Almacenamiento del CO₂ producido bajo tierra'
    ],
    correct: 2,
    explanation:
      'El hidrógeno azul incorpora captura y almacenamiento de carbono para evitar que el CO₂ llegue a la atmósfera.'
  },
  {
    id: 5,
    type: 'open',
    prompt:
      'Realice un esquema sintético de la formación del hidrógeno verde considerando: Materia prima – Técnica de separación – Fuente de energía – Productos (4 puntos).',
    explanation: 'Consigna de desarrollo: describí el flujo del proceso en tus propias palabras.'
  },
  {
    id: 6,
    type: 'single',
    prompt:
      'El H₂ tiene múltiples aplicaciones pero ambientalmente hay una industria que necesita virar al hidrógeno verde para disminuir significativamente las más de 700 millones de toneladas de CO₂ que emiten al año. La industria es:',
    options: ['Automotriz', 'Fertilizantes', 'Petroquímicos', 'Refinerías'],
    correct: 1,
    explanation:
      'La producción de amoníaco para fertilizantes emite gran cantidad de CO₂ y es un foco prioritario para el hidrógeno verde.'
  },
  {
    id: 7,
    type: 'single',
    prompt: 'La energía nuclear es considerada como energía:',
    options: ['Limpia', 'Muy contaminante', 'Renovable', 'De poco valor calorífico'],
    correct: 0,
    explanation:
      'En términos de emisiones operativas, la energía nuclear se clasifica como una fuente de baja emisión o “limpia”.'
  },
  {
    id: 8,
    type: 'open',
    prompt: 'En el gráfico, indique cuál es la radiación alfa, beta, gamma y neutrónica.',
    explanation: 'Identificá cada radiación a partir del esquema provisto en la evaluación impresa.'
  },
  {
    id: 9,
    type: 'single',
    prompt: 'La fisión nuclear libera en cada reacción calor y ____________:',
    options: [
      'Radiación alfa + neutrones',
      'Radiación beta + neutrones',
      'Radiación alfa + electrones',
      'Radiación alfa + protones'
    ],
    correct: 1,
    explanation:
      'Además de calor, la fisión libera neutrones y radiación beta/gamma provenientes de los productos de fisión.'
  },
  {
    id: 10,
    type: 'single',
    prompt: 'Para la reacción de fusión nuclear se necesitan como sustrato:',
    options: ['Hidrógeno – Helio', 'Deuterio – Hidrógeno', 'Deuterio – Tritio', 'Hidrógeno – Tritio'],
    correct: 2,
    explanation:
      'La fusión controlada más estudiada utiliza la mezcla de deuterio y tritio como combustibles.'
  },
  {
    id: 11,
    type: 'single',
    prompt: 'Durante la preparación del combustible para el reactor nuclear, el uranio se enriquece en la fase:',
    options: [
      'Mena de uranio (sólido)',
      '“Yellow cake” (sólido)',
      'Hexafluoruro de uranio (gas)',
      'Dióxido de uranio (polvo)'
    ],
    correct: 2,
    explanation:
      'El enriquecimiento isotópico se realiza sobre el hexafluoruro de uranio gaseoso, que permite métodos como difusión o centrifugación.'
  },
  {
    id: 12,
    type: 'single',
    prompt:
      'El agua pesada y el grafito son utilizados dentro de un reactor nuclear con diversas funciones, EXCEPTO:',
    options: ['Moderador', 'Combustible', 'Reflector'],
    correct: 1,
    explanation:
      'Actúan como moderadores o reflectores, pero ninguno cumple el rol de combustible nuclear.'
  },
  {
    id: 13,
    type: 'open',
    prompt: 'Indique el proceso de transformación de energía que ocurre dentro de un reactor nuclear para obtener electricidad. (2 puntos)',
    explanation: 'Describe la cadena de conversiones desde la energía nuclear hasta la energía eléctrica.'
  },
  {
    id: 14,
    type: 'single',
    prompt:
      'En Argentina, la energía nuclear aporta un 6,5% de la matriz energética pero también tiene otros usos que pueden ser:',
    helper: 'i. medicina	 ii. sector agropecuario	 iii. industria',
    options: ['Ninguno', 'i y iii', 'ii y iii', 'Todos'],
    correct: 3,
    explanation: 'La tecnología nuclear se aplica en salud, agro y procesos industriales, además de la generación eléctrica.'
  },
  {
    id: 15,
    type: 'single',
    prompt: 'En la energía solar activa de baja temperatura, el subsistema de captación:',
    options: [
      'Concentra la radiación solar',
      'Necesita la presencia de silicio',
      'Genera un efecto invernadero sin concentración de la radiación',
      'Eleva la temperatura entre 90 °C y 400 °C'
    ],
    correct: 2,
    explanation:
      'Los captadores planos trabajan en baja temperatura produciendo un efecto invernadero sin concentración solar.'
  },
  {
    id: 16,
    type: 'open',
    prompt:
      'Realice un esquema sintético de la producción de electricidad a partir de energía solar con transformación térmica de alta temperatura considerando: Etapas energéticas – Temperatura de producción – Tipos de dispositivos. (4 puntos)',
    explanation: 'Organizá las etapas clave del aprovechamiento solar térmico de alta temperatura.'
  },
  {
    id: 17,
    type: 'single',
    prompt:
      'La transformación fotovoltaica está evolucionando y existen diferentes materiales. Indique cuál de las células de silicio es más eficiente en el proceso de generación de electricidad:',
    options: ['Policristalina', 'Amorfa', 'Monocristalina'],
    correct: 2,
    explanation:
      'Las células de silicio monocristalino alcanzan las mayores eficiencias comerciales dentro de la familia del silicio.'
  },
  {
    id: 18,
    type: 'single',
    prompt: '¿Qué región de la Argentina es propicia para la instalación de parques solares?',
    options: ['Noroeste', 'Patagonia', 'Litoral', 'Noreste'],
    correct: 0,
    explanation:
      'El NOA posee los mayores niveles de irradiación global del país, ideales para parques solares.'
  },
  {
    id: 19,
    type: 'single',
    prompt: 'La DESVENTAJA de las células solares orgánicas es:',
    options: ['Costo de producción', 'Durabilidad', 'Eficiencia de conversión', 'Impacto ambiental'],
    correct: 1,
    explanation:
      'Su principal limitación actual es la baja durabilidad frente al envejecimiento y la humedad.'
  },
  {
    id: 20,
    type: 'single',
    prompt: 'El aire es una mezcla de gases que se mantiene sobre la superficie terrestre, indique el enunciado INCORRECTO:',
    options: [
      'Se mantiene en la troposfera por acción de la gravedad',
      'Cuando se calienta asciende y cuando se enfría desciende',
      'Se expande y comprime según las leyes de los gases',
      'Está constituido principalmente por nitrógeno'
    ],
    correct: 0,
    explanation:
      'La atmósfera se extiende más allá de la troposfera; limitarla solo a esa capa resulta incorrecto.'
  },
  {
    id: 21,
    type: 'single',
    prompt:
      'La ocurrencia del fenómeno del Niño está relacionada directamente a cambios en los patrones de circulación de los vientos:',
    options: ['Polares', 'Del Oeste', 'Del Este', 'Alisios'],
    correct: 3,
    explanation:
      'El Niño se asocia a un debilitamiento o inversión de los vientos alisios en el Pacífico ecuatorial.'
  },
  {
    id: 22,
    type: 'single',
    prompt:
      'La orografía regula la dirección e intensidad de vientos, los perfiles más beneficiosos para la instalación de aerogeneradores son:',
    options: [
      'Redondeados con pendientes bruscas',
      'Pendientes bruscas con ángulos de más de 30°',
      'Redondeados con pendientes suaves'
    ],
    correct: 2,
    explanation:
      'Los perfiles suaves y redondeados reducen la turbulencia y favorecen el rendimiento eólico.'
  },
  {
    id: 23,
    type: 'open',
    prompt:
      'Realice un esquema de un aerogenerador con sus componentes (2 puntos) y las transformaciones energéticas que ocurren. (2 puntos)',
    explanation: 'Dibujá o describí los componentes clave y cómo evoluciona la energía en el sistema eólico.'
  },
  {
    id: 24,
    type: 'single',
    prompt:
      'Si necesita extraer agua de una napa en una región aislada, instalará un aerogenerador:',
    options: ['Monopala', 'Multipala', 'Bipala', 'Tripala'],
    correct: 1,
    explanation:
      'Los aerogeneradores multipala están diseñados para bombeo con vientos bajos y alta capacidad de arranque.'
  },
  {
    id: 25,
    type: 'match',
    prompt:
      'En cada enunciado indique si se hace referencia a eólica offshore o continental haciendo un análisis comparativo.',
    left: [
      'Mayor continuidad del recurso eólico y bajas turbulencias',
      'Alto impacto auditivo y visual',
      'Alta complejidad de infraestructura civil asociada',
      'Menor eficiencia de conversión energética'
    ],
    right: ['Eólica offshore', 'Eólica continental'],
    correct: [0, 1, 0, 1],
    explanation:
      'Offshore ofrece recurso más constante pero exige más infraestructura; onshore suele tener más impacto visual y mayor variabilidad.'
  },
  {
    id: 26,
    type: 'single',
    prompt: 'Indique qué región de Argentina tiene las condiciones para establecer emprendimientos de energía eólica:',
    options: ['Patagonia', 'NOA', 'NOE', 'Litoral'],
    correct: 0,
    explanation:
      'La Patagonia dispone de vientos intensos y regulares, ideales para parques eólicos.'
  },
  {
    id: 27,
    type: 'single',
    prompt:
      'Indique cuál es el único subsistema involucrado en transformaciones energéticas de un aerogenerador:',
    options: ['Transmisión mecánica', 'Orientación', 'Regulación', 'Soporte'],
    correct: 0,
    explanation:
      'La transmisión mecánica vincula el rotor con el generador y es donde ocurre la conversión de energía.'
  },
  {
    id: 28,
    type: 'open',
    prompt:
      'Enumere las formas de energía desde el sol hasta obtener electricidad utilizando un aerogenerador. (2 puntos)',
    explanation: 'Detallá la secuencia de conversiones energéticas en la cadena eólica.'
  },
  {
    id: 29,
    type: 'single',
    prompt:
      'El principal problema (respecto a la eficiencia) de la instalación de paneles fotovoltaicos en las grandes ciudades es:',
    options: ['El albedo', 'El efecto sombra', 'La radiación difusa', 'La contaminación ambiental'],
    correct: 1,
    explanation:
      'Los edificios y estructuras generan sombras que reducen significativamente la captación solar.'
  },
  {
    id: 30,
    type: 'single',
    prompt:
      'Indique la afirmación INCORRECTA cuando caracterizamos a la brisa de mar:',
    options: [
      'Se origina durante la noche y el amanecer',
      'Se origina durante el mediodía y la tarde',
      'Se origina porque la tierra está más caliente que el mar',
      'El aire frío desciende hacia la superficie del mar e ingresa hacia la tierra'
    ],
    correct: 0,
    explanation:
      'La brisa marina se genera principalmente durante el día debido al mayor calentamiento de la tierra respecto del mar.'
  },
  {
    id: 31,
    type: 'single',
    prompt:
      'La energía electromagnética del sol se transmite a las partículas del aire, provocando un aumento de la energía cinética que se traduce en:',
    options: [
      'Disminución de la temperatura de las masas de aire',
      'Descenso de las masas de aire',
      'Elevación de las masas de aire',
      'Disminución de la energía gravitacional en un área determinada'
    ],
    correct: 2,
    explanation:
      'Al ganar energía cinética el aire se expande, disminuye su densidad y asciende.'
  },
  {
    id: 32,
    type: 'single',
    prompt: 'Las circulaciones globales se desvían hacia el oeste en el hemisferio sur debido a:',
    options: ['Fuerza de gravedad', 'Fuerza de Coriolis', 'Fuerza de atracción', 'Todas las opciones'],
    correct: 1,
    explanation:
      'El efecto Coriolis, consecuencia de la rotación terrestre, desvía los vientos hacia la izquierda en el hemisferio sur.'
  },
  {
    id: 33,
    type: 'single',
    prompt: 'Dentro de la góndola de un aerogenerador ocurre la transformación:',
    options: [
      'Energía solar a mecánica',
      'Energía cinética a eléctrica',
      'Energía solar a cinética',
      'Energía mecánica a eléctrica'
    ],
    correct: 3,
    explanation:
      'La góndola aloja el generador que convierte la energía mecánica del eje en energía eléctrica.'
  },
  {
    id: 34,
    type: 'single',
    prompt:
      'Si necesita implementar un aerogenerador en un campo para la obtención de agua, el más eficiente es:',
    options: ['Monopala', 'Bipala', 'Multipala', 'Tripala'],
    correct: 2,
    explanation:
      'Los rotores multipala entregan mayor par a bajas velocidades, adecuado para bombeo de agua.'
  },
  {
    id: 35,
    type: 'single',
    prompt:
      'La energía eólica offshore presenta ciertas ventajas sobre la eólica onshore, a saber:',
    options: [
      'Es una tecnología más barata',
      'Resulta en mayor generación eléctrica por la continuidad del viento en el mar dadas las bajas turbulencias',
      'Tiene un gran impacto visual',
      'Ofrece menor generación eléctrica'
    ],
    correct: 1,
    explanation:
      'En el mar el viento es más estable y turbulento, lo que favorece la generación eléctrica continua.'
  },
  {
    id: 36,
    type: 'single',
    prompt:
      'La radiación que incide sobre los objetos iluminados por el sol sin haber interactuado con nada y sin cambiar de dirección se denomina radiación…',
    options: ['Difusa', 'Reflejada', 'Albedo', 'Directa'],
    correct: 3,
    explanation: 'La radiación directa llega en línea recta desde el sol sin interacciones previas.'
  },
  {
    id: 37,
    type: 'single',
    prompt: 'Las centrales torre son subsistemas de captación de:',
    options: [
      'Tecnologías de alta temperatura',
      'Tecnologías de baja temperatura',
      'Tecnologías de media temperatura',
      'Tecnología de espejos parabólicos'
    ],
    correct: 0,
    explanation:
      'Las centrales de torre solar concentran radiación para alcanzar altas temperaturas.'
  },
  {
    id: 38,
    type: 'single',
    prompt: 'Para la energía fotovoltaica se utilizan materiales:',
    options: ['Conductores', 'Aislantes', 'Semiconductores', 'Ionizables'],
    correct: 2,
    explanation: 'Las células fotovoltaicas trabajan con materiales semiconductores como el silicio.'
  },
  {
    id: 39,
    type: 'single',
    prompt:
      'Si los recursos económicos no son limitantes para emprender una huerta solar ¿qué células fotovoltaicas elegiría para tener la mayor eficiencia de transformación energética?',
    options: ['Si policristalino', 'Si monocristalino', 'Si–Te–Cd', 'Células HIT'],
    correct: 3,
    explanation:
      'Las células HIT (heterounión) combinan silicio cristalino y capas delgadas alcanzando eficiencias superiores.'
  },
  {
    id: 40,
    type: 'single',
    prompt: 'La tecnología solar térmica de baja temperatura NO necesita un subsistema de:',
    options: ['Captación', 'Acumulación', 'Amplificación', 'Intercambiador'],
    correct: 2,
    explanation:
      'Los sistemas de baja temperatura trabajan sin etapas de amplificación térmica.'
  },
  {
    id: 41,
    type: 'single',
    prompt: 'Las centrales torre son subsistemas de captación de:',
    options: [
      'Tecnologías de baja temperatura',
      'Tecnologías de media temperatura',
      'Tecnologías de alta temperatura',
      'Concentración cilíndrico-parabólico'
    ],
    correct: 2,
    explanation:
      'Al concentrar radiación solar en un receptor puntual, alcanzan el rango de alta temperatura.'
  },
  {
    id: 42,
    type: 'single',
    prompt:
      'Si bien en toda la Argentina tenemos alta radiación, indique en qué región es ideal la instalación de huertas solares.',
    options: ['Patagonia', 'Noroeste', 'Litoral', 'Mesopotamia'],
    correct: 1,
    explanation: 'El noroeste argentino reúne las mejores condiciones de irradiación y cielo despejado.'
  },
  {
    id: 43,
    type: 'single',
    prompt: 'La arquitectura bioclimática se fundamenta en la utilización de la energía solar…',
    options: [
      'De forma pasiva',
      'De forma activa utilizando paneles solares',
      'De forma activa utilizando paneles fotovoltaicos',
      'De forma activa y pasiva de forma alternada'
    ],
    correct: 0,
    explanation:
      'La arquitectura bioclimática prioriza estrategias pasivas para aprovechar la energía solar.'
  },
  {
    id: 44,
    type: 'single',
    prompt: 'Indique qué afirmación es INCORRECTA cuando se caracteriza a la energía solar:',
    options: [
      'Es la energía contenida en la radiación solar',
      'Posee un carácter inagotable',
      'Se la asocia a grandes emisiones de gases contaminantes',
      'Se puede transformar en energía térmica'
    ],
    correct: 2,
    explanation:
      'La energía solar es considerada limpia; no se la asocia a grandes emisiones de gases contaminantes.'
  },
  {
    id: 45,
    type: 'single',
    prompt: 'Los elementos fundamentales de una huerta o granja solar son:',
    options: [
      'Transformadores y subestación',
      'Seguidores, contadores y transformadores',
      'Seguidores, contadores y subestación',
      'Seguidores, contadores, transformadores y subestación',
      'Seguidores y subestación'
    ],
    correct: 3,
    explanation:
      'Una granja solar integra seguidores, medición, transformación de tensión y conexión mediante subestación.'
  },
  {
    id: 46,
    type: 'single',
    prompt:
      'En el análisis estadístico del viento es habitual trabajar con funciones de densidad de probabilidad continuas. ¿Cuál es la función de densidad de probabilidad más frecuente utilizada?',
    options: [
      'La distribución de Weibull',
      'La distribución de frecuencia',
      'La distribución normal',
      'La distribución temporal',
      'La distribución de Rayleigh'
    ],
    correct: 0,
    explanation:
      'La distribución de Weibull modela con precisión la variabilidad de la velocidad del viento en estudios eólicos.'
  }
];

const questions = normalizeQuestions(QUESTIONS);

const typeLabels = {
  single: 'Selección única',
  multi: 'Selección múltiple',
  tf: 'Verdadero / Falso',
  match: 'Emparejar',
  group_tf: 'Verdadero / Falso (múltiple)',
  open: 'Respuesta abierta'
};

const USER_STORAGE_KEY = 'thermoQuizUsers_v1';
const LEGACY_STORAGE_KEY = 'thermoEngineeringQuiz_v1';
let currentUser = null;
let state = createDefaultState();

const authSection = document.getElementById('authSection');
const authTitle = document.getElementById('authTitle');
const authSubtitle = document.getElementById('authSubtitle');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const authMessage = document.getElementById('authMessage');
const showRegisterBtn = document.getElementById('showRegisterBtn');
const showLoginBtn = document.getElementById('showLoginBtn');
const quizSection = document.getElementById('quizSection');
const userBar = document.getElementById('userBar');
const currentUserLabel = document.getElementById('currentUserLabel');
const logoutBtn = document.getElementById('logoutBtn');

const summaryContainer = document.getElementById('summaryButtons');
const questionContent = document.getElementById('questionContent');
const retryButton = document.getElementById('retryButton');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');
const scoreCountEl = document.getElementById('scoreCount');
const scorePercentageEl = document.getElementById('scorePercentage');
const scoreBadgeEl = document.getElementById('scoreBadge');

if (showRegisterBtn) {
  showRegisterBtn.addEventListener('click', () => {
    toggleAuthMode('register');
  });
}

if (showLoginBtn) {
  showLoginBtn.addEventListener('click', () => {
    toggleAuthMode('login');
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async event => {
    event.preventDefault();
    await handleLogin();
  });
}

if (registerForm) {
  registerForm.addEventListener('submit', async event => {
    event.preventDefault();
    await handleRegister();
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    handleLogout();
  });
}

prevBtn.addEventListener('click', () => {
  if (!currentUser) return;
  goToQuestion(state.currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  if (!currentUser) {
    toggleAuthMode('login');
    showQuizSection(false);
    showAuthSection(true);
    showAuthMessage('Iniciá sesión o registrate para continuar con la evaluación.', 'error');
    return;
  }
  const question = questions[state.currentIndex];
  if (!question) {
    return;
  }

  const mode = nextBtn.dataset.mode ?? 'check';

  if (mode === 'check') {
    const answer = collectCurrentAnswer(question, true);
    if (answer === null) {
      showIncompleteAnswerMessage();
      return;
    }
    applyEvaluation(question, answer);
    return;
  }

  if (mode === 'results') {
    document.getElementById('resultsCard').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  goToQuestion(state.currentIndex + 1);
});

retryButton.addEventListener('click', () => {
  if (!currentUser) return;
  const question = questions[state.currentIndex];
  delete state.answers[question.id];
  delete state.evaluations[question.id];
  saveState();
  renderQuestion();
  renderSummary();
  updateResults();
});

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    if (!currentUser) {
      toggleAuthMode('login');
      showAuthSection(true);
      showQuizSection(false);
      showAuthMessage('Iniciá sesión para reiniciar la evaluación.', 'error');
      return;
    }
    resetQuiz();
  });
}

initializeAuth();

function initializeAuth() {
  toggleAuthMode('login');
  if (loginForm) {
    loginForm.reset();
  }
  if (registerForm) {
    registerForm.reset();
  }
  const database = loadUserDatabase();
  const storedUser = database.currentUser;
  if (storedUser && database.users?.[storedUser]) {
    enterQuiz(storedUser, database);
    return;
  }

  currentUser = null;
  state = createDefaultState();
  showAuthSection(true);
  showQuizSection(false);
  updateUserBar();
  clearQuizUI();
}

async function handleLogin() {
  if (!loginForm) return;
  const usernameInput = loginForm.querySelector('input[name="username"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');
  const username = usernameInput?.value?.trim() ?? '';
  const password = passwordInput?.value ?? '';

  if (!username || !password) {
    showAuthMessage('Completá usuario y contraseña para iniciar sesión.', 'error');
    return;
  }

  const database = loadUserDatabase();
  const userRecord = database.users?.[username];
  if (!userRecord) {
    showAuthMessage('No encontramos una cuenta con ese usuario.', 'error');
    return;
  }

  const passwordHash = await hashPassword(password);
  if (userRecord.passwordHash !== passwordHash) {
    showAuthMessage('La contraseña no coincide.', 'error');
    return;
  }

  database.currentUser = username;
  saveUserDatabase(database);
  loginForm.reset();
  if (registerForm) {
    registerForm.reset();
  }
  enterQuiz(username, database);
}

async function handleRegister() {
  if (!registerForm) return;
  const usernameInput = registerForm.querySelector('input[name="username"]');
  const passwordInput = registerForm.querySelector('input[name="password"]');
  const confirmInput = registerForm.querySelector('input[name="confirmPassword"]');
  const username = usernameInput?.value?.trim() ?? '';
  const password = passwordInput?.value ?? '';
  const confirmation = confirmInput?.value ?? '';

  if (username.length < 3) {
    showAuthMessage('El usuario debe tener al menos 3 caracteres.', 'error');
    return;
  }

  if (password.length < 4) {
    showAuthMessage('La contraseña debe tener al menos 4 caracteres.', 'error');
    return;
  }

  if (password !== confirmation) {
    showAuthMessage('Las contraseñas no coinciden.', 'error');
    return;
  }

  const database = loadUserDatabase();
  if (database.users?.[username]) {
    showAuthMessage('Ese usuario ya está registrado.', 'error');
    return;
  }

  const passwordHash = await hashPassword(password);
  const initialState = getInitialStateForNewUser(database);

  database.users = database.users ?? {};
  database.users[username] = {
    passwordHash,
    state: initialState
  };
  database.currentUser = username;
  saveUserDatabase(database);

  registerForm.reset();
  if (loginForm) {
    loginForm.reset();
  }
  enterQuiz(username, database);
}

function handleLogout() {
  if (currentUser) {
    saveState();
  }
  const database = loadUserDatabase();
  if (currentUser && database.users?.[currentUser]) {
    database.users[currentUser] = {
      ...database.users[currentUser],
      state: createStateSnapshot(state)
    };
  }
  database.currentUser = null;
  saveUserDatabase(database);

  currentUser = null;
  state = createDefaultState();
  showQuizSection(false);
  showAuthSection(true);
  updateUserBar();
  toggleAuthMode('login');
  if (loginForm) {
    loginForm.reset();
  }
  if (registerForm) {
    registerForm.reset();
  }
  clearQuizUI();
  showAuthMessage('Sesión cerrada. Iniciá sesión cuando quieras para continuar.', 'success');
}

function enterQuiz(username, database = null) {
  currentUser = username;
  state = loadState(username, database);
  showAuthSection(false);
  showQuizSection(true);
  updateUserBar();
  showAuthMessage('');
  init();
}

function toggleAuthMode(mode) {
  const isRegister = mode === 'register';
  if (loginForm) {
    loginForm.hidden = isRegister;
  }
  if (registerForm) {
    registerForm.hidden = !isRegister;
  }
  if (authTitle) {
    authTitle.textContent = isRegister ? 'Creá tu cuenta' : 'Ingresá a tu cuenta';
  }
  if (authSubtitle) {
    authSubtitle.textContent = isRegister
      ? 'Ingresá un usuario y contraseña para guardar tus respuestas en este dispositivo.'
      : 'Iniciá sesión para continuar con tu progreso guardado o crear una cuenta nueva.';
  }
  showAuthMessage('');
}

function showAuthSection(show) {
  if (authSection) {
    authSection.hidden = !show;
  }
}

function showQuizSection(show) {
  if (quizSection) {
    quizSection.hidden = !show;
  }
}

function showAuthMessage(message, type = 'info') {
  if (!authMessage) return;
  authMessage.textContent = message;
  authMessage.classList.remove('is-error', 'is-success');
  if (type === 'error') {
    authMessage.classList.add('is-error');
  } else if (type === 'success') {
    authMessage.classList.add('is-success');
  }
}

function updateUserBar() {
  if (!userBar) return;
  if (!currentUser) {
    userBar.hidden = true;
    if (currentUserLabel) {
      currentUserLabel.textContent = '';
    }
    return;
  }
  userBar.hidden = false;
  if (currentUserLabel) {
    currentUserLabel.textContent = currentUser;
  }
}

function clearQuizUI() {
  if (summaryContainer) {
    summaryContainer.innerHTML = '';
  }
  if (questionContent) {
    questionContent.innerHTML = '';
  }
  toggleRetryButton(false);
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  nextBtn.dataset.mode = 'check';
  nextBtn.textContent = 'Siguiente';
  updateResults();
  updateNavigation();
}

function getInitialStateForNewUser(database) {
  const users = database?.users ?? {};
  const existingUsers = Object.keys(users).length;
  if (existingUsers === 0) {
    const legacyState = readLegacyState();
    if (legacyState) {
      clearLegacyState();
      return createStateSnapshot(legacyState);
    }
  }
  return createDefaultState();
}

function readLegacyState() {
  try {
    const stored = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!stored) {
      return null;
    }
    return JSON.parse(stored);
  } catch (error) {
    console.warn('No se pudo leer el progreso guardado previamente:', error);
    return null;
  }
}

function clearLegacyState() {
  try {
    localStorage.removeItem(LEGACY_STORAGE_KEY);
  } catch (error) {
    console.warn('No se pudo limpiar el progreso anterior:', error);
  }
}

async function hashPassword(password) {
  try {
    if (window.crypto?.subtle && typeof TextEncoder !== 'undefined') {
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const digest = await window.crypto.subtle.digest('SHA-256', data);
      return Array.from(new Uint8Array(digest))
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
    }
  } catch (error) {
    console.warn('No se pudo generar un hash seguro, se utilizará una codificación simple.', error);
  }
  return Array.from(password)
    .map(char => char.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('');
}

function normalizeQuestions(rawQuestions) {
  return rawQuestions.map((raw, index) => {
    const baseId = typeof raw.id === 'number' || typeof raw.id === 'string' ? raw.id : index + 1;
    const questionId = `q${baseId}`;
    const unscored = raw.unscored ?? raw.type === 'open';
    const base = {
      id: questionId,
      type: raw.type,
      prompt: raw.prompt ?? raw.title ?? '',
      explanation: raw.explanation ?? '',
      helper: raw.helper ?? null,
      unscored
    };

    switch (raw.type) {
      case 'single': {
        const options = createOptionObjects(raw.options);
        const correctIndex = Array.isArray(raw.correct) ? raw.correct[0] : raw.correct;
        return {
          ...base,
          type: 'single',
          options,
          correct: toStringIndex(correctIndex)
        };
      }
      case 'multi': {
        if (Array.isArray(raw.subitems)) {
          const statements = raw.subitems.map((text, idx) => ({
            id: `${questionId}-s${idx}`,
            text,
            correct: Array.isArray(raw.correct) ? Boolean(raw.correct[idx]) : Boolean(raw.correct)
          }));
          return {
            ...base,
            type: 'group_tf',
            statements
          };
        }
        const options = createOptionObjects(raw.options);
        const correctValues = Array.isArray(raw.correct)
          ? raw.correct.map(value => toStringIndex(value)).filter(value => value !== '')
          : [];
        return {
          ...base,
          type: 'multi',
          options,
          correct: correctValues
        };
      }
      case 'tf': {
        return {
          ...base,
          type: 'tf',
          options: [
            { value: 'true', label: 'Verdadero' },
            { value: 'false', label: 'Falso' }
          ],
          correct: raw.correct ? 'true' : 'false'
        };
      }
      case 'match': {
        return {
          ...base,
          type: 'match',
          pairs: normalizeMatchPairs(raw)
        };
      }
      case 'open': {
        return {
          ...base,
          type: 'open',
          unscored: true
        };
      }
      default: {
        const options = createOptionObjects(raw.options);
        const correct = Array.isArray(raw.correct)
          ? raw.correct.map(value => toStringIndex(value)).filter(value => value !== '')
          : toStringIndex(raw.correct);
        return {
          ...base,
          options,
          correct
        };
      }
    }
  });
}

function createOptionObjects(optionList) {
  if (!Array.isArray(optionList)) {
    return [];
  }
  return optionList.map((label, idx) => ({
    value: toStringIndex(idx),
    label
  }));
}

function normalizeMatchPairs(raw) {
  const rightOptions = Array.isArray(raw.right)
    ? raw.right.map((label, idx) => ({ value: toStringIndex(idx), label }))
    : [];
  const correctIndexes = Array.isArray(raw.correct) ? raw.correct : [];
  return Array.isArray(raw.left)
    ? raw.left.map((leftText, idx) => ({
        left: leftText,
        options: rightOptions.map(option => ({ ...option })),
        correct: toStringIndex(correctIndexes[idx])
      }))
    : [];
}

function toStringIndex(value) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value);
}
function init() {
  if (!currentUser) {
    return;
  }
  renderSummary();
  renderQuestion();
  updateResults();
}

function loadUserDatabase() {
  try {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    if (!stored) {
      return { currentUser: null, users: {} };
    }
    const parsed = JSON.parse(stored);
    const users = parsed && typeof parsed.users === 'object' && parsed.users !== null ? parsed.users : {};
    const storedUser = typeof parsed.currentUser === 'string' ? parsed.currentUser : null;
    return { currentUser: storedUser, users };
  } catch (error) {
    console.warn('No se pudo recuperar la información de usuarios:', error);
    return { currentUser: null, users: {} };
  }
}

function saveUserDatabase(database) {
  try {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(database));
  } catch (error) {
    console.warn('No se pudo guardar la información de usuarios:', error);
  }
}

function createDefaultState() {
  return {
    currentIndex: 0,
    answers: {},
    evaluations: {}
  };
}

function createStateSnapshot(sourceState) {
  const baseState = sourceState ?? createDefaultState();
  return {
    currentIndex: clampIndex(baseState.currentIndex ?? 0),
    answers: cloneAnswers(baseState.answers ?? {}),
    evaluations: cloneEvaluations(baseState.evaluations ?? {})
  };
}

function cloneAnswers(answers) {
  const result = {};
  Object.entries(answers ?? {}).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      result[key] = [...value];
      return;
    }
    if (value && typeof value === 'object') {
      result[key] = { ...value };
      return;
    }
    if (value !== undefined) {
      result[key] = value;
    }
  });
  return result;
}

function cloneEvaluations(evaluations) {
  const result = {};
  Object.entries(evaluations ?? {}).forEach(([key, value]) => {
    if (!value) return;
    const correctAnswers = Array.isArray(value.correctAnswers)
      ? value.correctAnswers.map(item => (item && typeof item === 'object' ? { ...item } : item))
      : [];
    result[key] = {
      isCorrect: Boolean(value.isCorrect),
      correctAnswers,
      explanation: value.explanation ?? '',
      unscored: Boolean(value.unscored)
    };
  });
  return result;
}

function loadState(username = currentUser, database = null) {
  const defaultState = createDefaultState();
  if (!username) {
    return defaultState;
  }
  const sourceDatabase = database ?? loadUserDatabase();
  const stored = sourceDatabase.users?.[username]?.state;
  if (!stored) {
    return defaultState;
  }
  return createStateSnapshot(stored);
}

function saveState() {
  if (!currentUser) {
    return;
  }
  const database = loadUserDatabase();
  const users = database.users ?? {};
  const existingRecord = users[currentUser] ?? {};
  users[currentUser] = {
    ...existingRecord,
    state: createStateSnapshot(state)
  };
  database.users = users;
  database.currentUser = currentUser;
  saveUserDatabase(database);
}

function resetQuiz() {
  if (!currentUser) {
    return;
  }
  state = createDefaultState();
  saveState();
  renderSummary();
  renderQuestion();
  updateResults();
  const main = document.querySelector('main.app');
  if (main) {
    main.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function clampIndex(index) {
  if (typeof index !== 'number' || Number.isNaN(index)) {
    return 0;
  }
  return Math.min(Math.max(index, 0), questions.length - 1);
}

function goToQuestion(index) {
  if (!currentUser) {
    return;
  }
  state.currentIndex = clampIndex(index);
  saveState();
  renderQuestion();
  renderSummary();
}

function renderSummary() {
  summaryContainer.innerHTML = '';
  if (!currentUser) {
    return;
  }
  questions.forEach((question, idx) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'summary-btn';
    button.textContent = idx + 1;
    const evaluation = state.evaluations[question.id];
    if (evaluation?.unscored) {
      button.classList.add('is-unscored');
    } else if (evaluation?.isCorrect) {
      button.classList.add('is-correct');
    } else if (evaluation && !evaluation.isCorrect) {
      button.classList.add('is-incorrect');
    }
    if (state.currentIndex === idx) {
      button.classList.add('is-active');
    }
    button.setAttribute('aria-label', `Ir a la pregunta ${idx + 1}`);
    button.addEventListener('click', () => {
      goToQuestion(idx);
    });
    summaryContainer.appendChild(button);
  });
}

function renderQuestion() {
  if (!currentUser) {
    questionContent.innerHTML = '';
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    toggleRetryButton(false);
    return;
  }
  const question = questions[state.currentIndex];
  if (!question) return;

  questionContent.innerHTML = '';
  const titleId = `${question.id}-title`;
  const evaluation = state.evaluations[question.id];
  const storedAnswer = state.answers[question.id];
  const isLocked = Boolean(evaluation);

  const promptText = question.prompt ?? question.title ?? '';
  const helperText = question.helper ?? '';
  const helperId = helperText ? `${question.id}-helper` : undefined;

  const header = document.createElement('div');
  header.className = 'question-header';
  header.innerHTML = `
    <div class="question-meta">
      <span class="chip">${typeLabels[question.type] ?? 'Pregunta'}</span>
      <span class="counter">Pregunta ${state.currentIndex + 1} de ${questions.length}</span>
    </div>
    <h2 class="question-title" id="${titleId}">${promptText}</h2>
    ${helperText ? `<p class="question-helper" id="${helperId}">${helperText}</p>` : ''}
  `;
  questionContent.appendChild(header);

  let optionsWrapper = null;

  if (question.type === 'open') {
    const openWrapper = document.createElement('div');
    openWrapper.className = 'open-answer-wrapper';

    const textarea = document.createElement('textarea');
    textarea.className = 'open-answer-input';
    textarea.id = `${question.id}-answer`;
    textarea.rows = 6;
    textarea.placeholder = 'Escribí tu respuesta aquí...';
    if (typeof storedAnswer === 'string') {
      textarea.value = storedAnswer;
    }
    if (isLocked) {
      textarea.disabled = true;
    }
    textarea.dataset.question = question.id;
    openWrapper.appendChild(textarea);
    questionContent.appendChild(openWrapper);

    if (!isLocked) {
      textarea.addEventListener('input', () => {
        recordAnswer(question, textarea.value);
      });
    }
  } else {
    optionsWrapper = document.createElement('div');
    optionsWrapper.className = 'options-wrapper';
    const role = question.type === 'single' || question.type === 'tf' ? 'radiogroup' : 'group';
    optionsWrapper.setAttribute('role', role);
    optionsWrapper.setAttribute('aria-labelledby', titleId);
    if (helperId) {
      optionsWrapper.setAttribute('aria-describedby', helperId);
    }
    questionContent.appendChild(optionsWrapper);
  }

  if (question.type === 'match' && optionsWrapper) {
    question.pairs.forEach(pair => {
      const row = document.createElement('div');
      row.className = 'match-row';
      row.dataset.left = pair.left;

      const label = document.createElement('span');
      label.className = 'match-term';
      label.textContent = pair.left;

      const select = document.createElement('select');
      select.dataset.left = pair.left;
      const placeholderOption = document.createElement('option');
      placeholderOption.value = '';
      placeholderOption.textContent = 'Seleccioná una opción';
      select.appendChild(placeholderOption);

      pair.options.forEach(option => {
        const optEl = document.createElement('option');
        optEl.value = option.value;
        optEl.textContent = option.label;
        select.appendChild(optEl);
      });

      if (storedAnswer && storedAnswer[pair.left]) {
        select.value = storedAnswer[pair.left];
      }
      if (isLocked) {
        select.disabled = true;
      }

      const helper = document.createElement('span');
      helper.className = 'match-answer';
      helper.setAttribute('aria-hidden', 'true');

      row.append(label, select, helper);
      optionsWrapper.appendChild(row);

      if (!isLocked) {
        select.addEventListener('change', () => {
          const answer = collectMatchAnswer(false);
          recordAnswer(question, answer);
          if (!state.evaluations[question.id]) {
            updateFeedbackUI(question, null);
          }
        });
      }
    });
  } else if (question.type === 'group_tf') {
    question.statements.forEach((statement, idx) => {
      const row = document.createElement('div');
      row.className = 'match-row group-tf-row';
      row.dataset.index = String(idx);
      row.dataset.question = question.id;

      const term = document.createElement('span');
      term.className = 'match-term';
      term.textContent = statement.text;

      const controls = document.createElement('div');
      controls.className = 'group-tf-controls';

      ['true', 'false'].forEach(value => {
        const optionLabel = document.createElement('label');
        optionLabel.className = 'group-tf-option';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `${question.id}-${idx}`;
        input.value = value;

        if (Array.isArray(storedAnswer) && storedAnswer[idx] === value) {
          input.checked = true;
        }
        if (isLocked) {
          input.disabled = true;
        }

        const text = document.createElement('span');
        text.textContent = value === 'true' ? 'Verdadero (V)' : 'Falso (F)';

        optionLabel.append(input, text);
        controls.appendChild(optionLabel);

        if (!isLocked) {
          input.addEventListener('change', () => {
            updateGroupTfOptionState(controls);
            const answer = collectGroupTfAnswer(question, false);
            recordAnswer(question, answer);
            if (!state.evaluations[question.id]) {
              updateFeedbackUI(question, null);
            }
          });
        }
      });

      const helper = document.createElement('span');
      helper.className = 'match-answer';
      helper.setAttribute('aria-hidden', 'true');

      row.append(term, controls, helper);
      optionsWrapper.appendChild(row);

      updateGroupTfOptionState(controls);

      if (isLocked) {
        row.classList.add('is-locked');
      }
    });
  } else if (optionsWrapper) {
    const isMulti = question.type === 'multi';
    question.options.forEach(option => {
      const label = document.createElement('label');
      label.className = 'option-card option-card--' + question.type;
      label.dataset.value = option.value;

      const input = document.createElement('input');
      input.type = isMulti ? 'checkbox' : 'radio';
      input.name = question.id;
      input.value = option.value;
      if (isMulti && Array.isArray(storedAnswer) && storedAnswer.includes(option.value)) {
        input.checked = true;
      }
      if (!isMulti && storedAnswer === option.value) {
        input.checked = true;
      }
      if (isLocked) {
        input.disabled = true;
        label.classList.add('is-locked');
      }

      const indicator = document.createElement('span');
      indicator.className = 'option-indicator';

      const textWrapper = document.createElement('span');
      textWrapper.className = 'option-text';
      const mainText = document.createElement('span');
      mainText.className = 'option-main';
      mainText.textContent = option.label;
      textWrapper.appendChild(mainText);

      label.append(input, indicator, textWrapper);
      optionsWrapper.appendChild(label);

      if (!isLocked) {
        if (isMulti) {
          input.addEventListener('change', () => {
            const selectedValues = collectMultiAnswer(question.id);
            recordAnswer(question, selectedValues);
            if (!state.evaluations[question.id]) {
              updateFeedbackUI(question, null);
            }
          });
        } else {
          input.addEventListener('change', () => {
            if (input.checked) {
              recordAnswer(question, option.value);
              if (!state.evaluations[question.id]) {
                updateFeedbackUI(question, null);
              }
            }
          });
        }
      }
    });
  }

  const feedback = document.createElement('div');
  feedback.className = 'feedback-area';
  feedback.innerHTML = `
    <p class="feedback-message" id="feedbackMessage" role="status" aria-live="polite"></p>
    <p class="correct-answer" id="correctAnswer"></p>
    <p class="explanation-text" id="explanationText"></p>
  `;
  questionContent.appendChild(feedback);

  if (evaluation && storedAnswer !== undefined) {
    showCorrection(question, evaluation, storedAnswer);
    updateFeedbackUI(question, evaluation);
  } else {
    updateFeedbackUI(question, null);
  }

  toggleRetryButton(isLocked);
  updateNavigation();
}

function applyEvaluation(question, rawAnswer) {
  if (!question || !currentUser) return;
  const storedAnswer = cloneAnswer(question, rawAnswer);
  const evaluation = evaluateQuestion(question, storedAnswer);

  state.answers[question.id] = storedAnswer;
  state.evaluations[question.id] = evaluation;
  saveState();

  showCorrection(question, evaluation, storedAnswer);
  updateFeedbackUI(question, evaluation);
  toggleRetryButton(true);
  renderSummary();
  updateResults();
  updateNavigation();
}

function recordAnswer(question, answer) {
  if (!question || !currentUser) return;
  const key = question.id;

  if (answer === null) {
    delete state.answers[key];
    saveState();
    return;
  }

  let shouldStore = true;
  if (Array.isArray(answer)) {
    shouldStore = answer.some(value => value !== null && value !== undefined && value !== '');
  } else if (typeof answer === 'object') {
    const values = Object.values(answer ?? {});
    shouldStore = values.some(value => value !== null && value !== undefined && value !== '');
  }

  if (!shouldStore) {
    delete state.answers[key];
  } else {
    state.answers[key] = cloneAnswer(question, answer);
  }
  saveState();
}

function cloneAnswer(question, answer) {
  if (question.type === 'multi') {
    return Array.isArray(answer) ? [...answer] : [];
  }
  if (question.type === 'group_tf') {
    return Array.isArray(answer) ? [...answer] : [];
  }
  if (question.type === 'match') {
    return answer ? { ...answer } : {};
  }
  return typeof answer === 'string' ? answer : null;
}

function evaluateQuestion(question, userAnswer) {
  let isCorrect = false;
  let correctAnswers;

  switch (question.type) {
    case 'single':
    case 'tf': {
      const correctValue = Array.isArray(question.correct) ? question.correct[0] : question.correct;
      isCorrect = userAnswer === correctValue;
      correctAnswers = Array.isArray(question.correct) ? [...question.correct] : [question.correct];
      break;
    }
    case 'multi': {
      const expected = Array.isArray(question.correct) ? [...question.correct].sort() : [];
      const received = Array.isArray(userAnswer) ? [...userAnswer].sort() : [];
      isCorrect = expected.length === received.length && expected.every((value, idx) => value === received[idx]);
      correctAnswers = expected;
      break;
    }
    case 'group_tf': {
      const expected = Array.isArray(question.statements)
        ? question.statements.map(item => Boolean(item.correct))
        : [];
      const received = Array.isArray(userAnswer)
        ? expected.map((_, idx) => userAnswer[idx] === 'true')
        : [];
      isCorrect = expected.length === received.length && expected.every((value, idx) => received[idx] === value);
      correctAnswers = expected;
      break;
    }
    case 'match': {
      correctAnswers = question.pairs.map(pair => ({ left: pair.left, value: pair.correct }));
      const provided = userAnswer || {};
      isCorrect = question.pairs.every(pair => provided[pair.left] === pair.correct);
      break;
    }
    case 'open': {
      isCorrect = true;
      correctAnswers = [];
      break;
    }
    default:
      correctAnswers = [];
  }

  return {
    isCorrect,
    correctAnswers,
    explanation: question.explanation,
    unscored: question.unscored || question.type === 'open'
  };
}

function showCorrection(question, evaluation, userAnswer) {
  if (question.type === 'open') {
    const textarea = questionContent.querySelector(`textarea[data-question="${question.id}"]`);
    if (textarea) {
      textarea.disabled = true;
    }
    return;
  }
  const correctAnswers = evaluation.correctAnswers;
  if (question.type === 'match') {
    const rows = questionContent.querySelectorAll('.match-row');
    rows.forEach(row => {
      const key = row.dataset.left;
      const select = row.querySelector('select');
      const helper = row.querySelector('.match-answer');
      const expected = correctAnswers.find(item => item.left === key);
      if (select) {
        select.disabled = true;
      }
      if (helper && expected) {
        helper.textContent = `Correcta: ${getMatchLabel(question, key, expected.value)}`;
        row.classList.add('show-answer');
      }
      if (userAnswer && userAnswer[key] === expected?.value) {
        row.classList.add('is-correct');
      } else {
        row.classList.add('is-incorrect');
      }
    });
  } else if (question.type === 'group_tf') {
    const rows = questionContent.querySelectorAll('.group-tf-row');
    rows.forEach(row => {
      const index = Number(row.dataset.index ?? -1);
      const helper = row.querySelector('.match-answer');
      const controls = row.querySelector('.group-tf-controls');
      const expectedValue = correctAnswers[index] ? 'true' : 'false';
      const selectedValue = Array.isArray(userAnswer) ? userAnswer[index] : undefined;

      row.classList.add('show-answer', 'is-locked');

      row.querySelectorAll('input').forEach(input => {
        input.disabled = true;
      });

      if (controls) {
        updateGroupTfOptionState(controls);
      }

      if (helper && correctAnswers[index] !== undefined) {
        helper.textContent = `Correcta: ${correctAnswers[index] ? 'Verdadero' : 'Falso'}`;
      }

      const expectedOption = row.querySelector(`.group-tf-option input[value="${expectedValue}"]`);
      if (expectedOption?.parentElement) {
        expectedOption.parentElement.classList.remove('is-active');
        expectedOption.parentElement.classList.add('show-correct', 'is-correct');
      }

      if (selectedValue) {
        const selectedOption = row.querySelector(`.group-tf-option input[value="${selectedValue}"]`);
        if (selectedOption?.parentElement) {
          selectedOption.parentElement.classList.remove('is-active');
          if (selectedValue === expectedValue) {
            selectedOption.parentElement.classList.add('is-correct');
          } else {
            selectedOption.parentElement.classList.add('is-incorrect');
          }
        }
      }

      if (selectedValue === expectedValue) {
        row.classList.add('is-correct');
      } else {
        row.classList.add('is-incorrect');
      }
    });
  } else {
    const selectedValues = Array.isArray(userAnswer) ? userAnswer : userAnswer ? [userAnswer] : [];
    const cards = questionContent.querySelectorAll('.option-card');
    cards.forEach(card => {
      const value = card.dataset.value;
      const input = card.querySelector('input');
      if (input) {
        input.disabled = true;
      }
      card.classList.add('is-locked');
      if (selectedValues.includes(value)) {
        card.classList.add(correctAnswers.includes(value) ? 'is-correct' : 'is-incorrect');
      }
      if (correctAnswers.includes(value)) {
        card.classList.add('show-correct');
      }
    });
  }
}

function updateFeedbackUI(question, evaluation) {
  const feedbackMessage = document.getElementById('feedbackMessage');
  const correctAnswerEl = document.getElementById('correctAnswer');
  const explanationEl = document.getElementById('explanationText');
  if (!feedbackMessage || !correctAnswerEl || !explanationEl) return;

  if (question.type === 'open') {
    if (!evaluation) {
      feedbackMessage.textContent = 'Completá la respuesta y presioná "Siguiente" para guardarla.';
      feedbackMessage.className = 'feedback-message';
      correctAnswerEl.textContent = '';
      explanationEl.textContent = question.explanation ?? '';
    } else {
      feedbackMessage.textContent = 'Respuesta registrada. La corrección es manual según la consigna.';
      feedbackMessage.className = 'feedback-message info';
      correctAnswerEl.textContent = 'Respuesta abierta: verificá tu desarrollo con el material de estudio.';
      explanationEl.textContent = question.explanation ?? '';
    }
    return;
  }

  if (!evaluation) {
    feedbackMessage.textContent = 'Seleccioná una respuesta y presioná "Siguiente" para corregirla.';
    feedbackMessage.className = 'feedback-message';
    correctAnswerEl.textContent = '';
    explanationEl.textContent = '';
    return;
  }

  feedbackMessage.textContent = evaluation.isCorrect
    ? '¡Correcto! Podés avanzar con "Siguiente".'
    : 'Respuesta incorrecta. Revisá la explicación y luego presioná "Siguiente" para continuar.';
  feedbackMessage.className = 'feedback-message ' + (evaluation.isCorrect ? 'success' : 'error');
  correctAnswerEl.textContent = 'Respuesta correcta: ' + formatCorrectAnswer(question, evaluation);
  explanationEl.textContent = evaluation.explanation;
}

function showIncompleteAnswerMessage() {
  const feedbackMessage = document.getElementById('feedbackMessage');
  const correctAnswerEl = document.getElementById('correctAnswer');
  const explanationEl = document.getElementById('explanationText');
  if (!feedbackMessage || !correctAnswerEl || !explanationEl) return;

  feedbackMessage.textContent = 'Completá la respuesta antes de continuar.';
  feedbackMessage.className = 'feedback-message warning';
  correctAnswerEl.textContent = '';
  explanationEl.textContent = '';
}

function toggleRetryButton(show) {
  if (show) {
    retryButton.hidden = false;
    retryButton.disabled = false;
  } else {
    retryButton.hidden = true;
    retryButton.disabled = true;
  }
}

function updateNavigation() {
  if (!currentUser) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    nextBtn.dataset.mode = 'check';
    nextBtn.textContent = 'Siguiente';
    return;
  }

  prevBtn.disabled = state.currentIndex === 0;
  const question = questions[state.currentIndex];
  if (!question) {
    nextBtn.disabled = true;
    nextBtn.dataset.mode = 'check';
    nextBtn.textContent = 'Siguiente';
    return;
  }
  nextBtn.disabled = false;
  const hasEvaluation = question ? Boolean(state.evaluations[question.id]) : false;

  if (!hasEvaluation) {
    nextBtn.dataset.mode = 'check';
    nextBtn.textContent = 'Siguiente';
    return;
  }

  if (state.currentIndex === questions.length - 1) {
    nextBtn.dataset.mode = 'results';
    nextBtn.textContent = 'Ver resultados';
  } else {
    nextBtn.dataset.mode = 'next';
    nextBtn.textContent = 'Siguiente';
  }
}

function updateResults() {
  if (!currentUser) {
    const total = questions.filter(question => !question.unscored).length;
    scoreCountEl.textContent = `0 / ${total}`;
    scorePercentageEl.textContent = '0%';
    scoreBadgeEl.textContent = getBadgeLabel(0);
    return;
  }
  const scoredQuestions = questions.filter(question => !question.unscored);
  const total = scoredQuestions.length;
  const correctCount = scoredQuestions.reduce((count, question) => {
    const evaluation = state.evaluations[question.id];
    return evaluation?.isCorrect ? count + 1 : count;
  }, 0);
  const percentage = total === 0 ? 0 : Math.round((correctCount / total) * 100);

  scoreCountEl.textContent = `${correctCount} / ${total}`;
  scorePercentageEl.textContent = `${percentage}%`;
  scoreBadgeEl.textContent = getBadgeLabel(percentage);
}

function getBadgeLabel(percentage) {
  if (percentage >= 90) return 'Excelente';
  if (percentage >= 75) return 'Muy bien';
  return 'A seguir';
}

function formatCorrectAnswer(question, evaluation) {
  if (question.type === 'open') {
    return 'Respuesta abierta (evaluación manual).';
  }
  if (question.type === 'match') {
    return evaluation.correctAnswers
      .map(item => `${item.left} → ${getMatchLabel(question, item.left, item.value)}`)
      .join('; ');
  }
  if (question.type === 'group_tf') {
    const statements = Array.isArray(question.statements) ? question.statements : [];
    return statements
      .map((statement, idx) => {
        const expected = evaluation.correctAnswers?.[idx];
        const label = expected ? 'Verdadero' : 'Falso';
        return `${statement.text ?? `Enunciado ${idx + 1}`} → ${label}`;
      })
      .join('; ');
  }
  const optionMap = new Map();
  if (Array.isArray(question.options)) {
    question.options.forEach(option => {
      optionMap.set(option.value, option.label);
    });
  }
  return evaluation.correctAnswers
    .map(value => optionMap.get(value) ?? value)
    .join(', ');
}

function getMatchLabel(question, left, value) {
  const pair = question.pairs.find(item => item.left === left);
  if (!pair) return value;
  const option = pair.options.find(opt => opt.value === value);
  return option ? option.label : value;
}

function collectCurrentAnswer(question, requireComplete = false) {
  if (!question) return null;
  switch (question.type) {
    case 'single':
    case 'tf': {
      const selected = questionContent.querySelector(`input[name="${question.id}"]:checked`);
      return selected ? selected.value : null;
    }
    case 'multi': {
      const values = collectMultiAnswer(question.id);
      if (requireComplete && values.length === 0) {
        return null;
      }
      return values;
    }
    case 'group_tf': {
      return collectGroupTfAnswer(question, requireComplete);
    }
    case 'match': {
      return collectMatchAnswer(requireComplete);
    }
    case 'open': {
      const textarea = questionContent.querySelector(`textarea[data-question="${question.id}"]`);
      if (!textarea) {
        return requireComplete ? null : '';
      }
      const value = textarea.value ?? '';
      if (requireComplete && value.trim() === '') {
        return null;
      }
      return value;
    }
    default:
      return null;
  }
}

function collectGroupTfAnswer(question, requireComplete = true) {
  if (!question) {
    return requireComplete ? null : [];
  }
  const rows = questionContent.querySelectorAll(`.group-tf-row[data-question="${question.id}"]`);
  const answer = [];
  let filled = true;
  rows.forEach(row => {
    const index = Number(row.dataset.index ?? -1);
    const checked = row.querySelector('input:checked');
    if (!checked) {
      filled = false;
      answer[index] = null;
      return;
    }
    answer[index] = checked.value;
  });
  if (requireComplete && !filled) {
    return null;
  }
  return answer;
}

function updateGroupTfOptionState(container) {
  if (!container) return;
  container.querySelectorAll('.group-tf-option').forEach(option => {
    const input = option.querySelector('input');
    option.classList.toggle('is-active', Boolean(input?.checked));
  });
}

function collectMultiAnswer(questionId) {
  return Array.from(document.querySelectorAll(`input[name="${questionId}"]:checked`)).map(input => input.value);
}

function collectMatchAnswer(requireComplete = true) {
  const rows = questionContent.querySelectorAll('.match-row');
  const answer = {};
  let filled = true;
  rows.forEach(row => {
    const select = row.querySelector('select');
    const key = select?.dataset.left;
    if (!key) return;
    const value = select?.value || null;
    if (!value) {
      filled = false;
    }
    answer[key] = value;
  });
  if (requireComplete && !filled) {
    return null;
  }
  return answer;
}

