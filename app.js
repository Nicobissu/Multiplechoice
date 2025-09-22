const QUESTIONS = [
  {
    id: 1,
    type: 'multi',
    prompt: 'Seleccionar cuáles son los modos de transferencia de energía en termodinámica:',
    options: ['Energía Potencial', 'Trabajo', 'Energía Cinética', 'Energía Interna', 'Entropía', 'Calor'],
    correct: [1, 5],
    explanation: 'En termodinámica, la energía se transfiere como trabajo o como calor; las demás son formas almacenadas o propiedades.'
  },
  {
    id: 2,
    type: 'multi',
    prompt: 'Seleccionar cuáles son los modos de transferencia de calor:',
    options: ['Radiación', 'Convección', 'Evaporación', 'Fusión', 'Conducción'],
    correct: [0, 1, 4],
    explanation: 'Los mecanismos fundamentales de transferencia de calor son conducción, convección y radiación.'
  },
  {
    id: 3,
    type: 'tf',
    prompt: 'Según el convenio de signos, Q > 0 cuando el calor entra al sistema.',
    correct: true,
    explanation: 'Por convenio clásico, Q>0 hacia el sistema y Q<0 desde el sistema.'
  },
  {
    id: 4,
    type: 'multi',
    prompt: 'Ciclos utilizados solo en motores de combustión externa:',
    options: ['Ciclo Diésel', 'Ciclo Rankine', 'Ciclo Brayton', 'Ciclo Otto'],
    correct: [1],
    explanation: 'El ciclo Rankine (máquinas de vapor) es de combustión externa en su configuración típica.'
  },
  {
    id: 5,
    type: 'match',
    prompt: 'Emparejar cada principio con su definición:',
    left: [
      'Transferir calor de un cuerpo frío a uno caliente como único efecto es imposible.',
      'No existe ciclo que convierta íntegramente el calor absorbido en trabajo.',
      'Relación entre calor, trabajo y energía interna en un sistema.'
    ],
    right: [
      'Formulación de Clausius',
      'Enunciado de Kelvin–Planck',
      'Principio de conservación de la energía'
    ],
    correct: [0, 1, 2],
    explanation: 'Clausius prohíbe transferencia espontánea de frío a caliente; Kelvin–Planck prohíbe la conversión total de Q en W; el primero es la 1ª Ley.'
  },
  {
    id: 6,
    type: 'multi',
    prompt: 'Componentes principales de un motor de turbina de gas de ciclo abierto:',
    options: ['Cámara de combustión', 'Filtro', 'Turbina', 'Compresor', 'Trampa de agua', 'Bomba'],
    correct: [0, 2, 3],
    explanation: 'Las tres etapas básicas: compresor, combustor, turbina.'
  },
  {
    id: 7,
    type: 'single',
    prompt: '¿Cuál curva corresponde a un ciclo de Carnot?',
    options: ['Dos isotermas y dos isobaras', 'Dos isobaras y dos adiabáticas', 'Dos isotermas y dos isocoras', 'Dos isotermas y dos adiabáticas'],
    correct: 3,
    explanation: 'Carnot se compone de dos procesos isotermos y dos adiabáticos reversibles.'
  },
  {
    id: 8,
    type: 'multi',
    prompt: 'Seleccione cuáles son etapas de diseño en ingeniería:',
    options: [
      'Identificar alternativas realizables',
      'Determinar restricciones y criterios',
      'Elegir la solución solo por menor costo',
      'Definir objetivos del diseño',
      'Concretar especificaciones cualitativas'
    ],
    correct: [0, 1, 3, 4],
    explanation: 'Elegir solo por costo ignora criterios esenciales del diseño.'
  },
  {
    id: 9,
    type: 'tf',
    prompt: 'El rendimiento de un ciclo Ericsson ideal es el mismo que el de Carnot.',
    correct: true,
    explanation: 'Con regeneración ideal e isotermas, Ericsson alcanza la eficiencia de Carnot.'
  },
  {
    id: 10,
    type: 'match',
    prompt: 'Metodología: emparejar cada paso con su definición.',
    left: [
      'Establecer con tus palabras lo que debe calcularse.',
      'Listar consideraciones e idealizaciones.',
      'Establecer brevemente lo que es conocido.',
      'Dibujar el esquema y rotular datos.',
      'Expresar ecuaciones y relaciones y resolver.'
    ],
    right: [
      'Determinar lo que se debe hallar',
      'Establecer consideraciones e hipótesis',
      'Determinar lo conocido',
      'Determinar los datos y diagramas',
      'Realizar el análisis'
    ],
    correct: [0, 1, 2, 3, 4],
    explanation: 'Corresponde al flujo clásico de resolución de problemas en ingeniería.'
  },
  {
    id: 11,
    type: 'match',
    prompt: 'Ordenar los pasos (1→5).',
    left: [
      'Paso 5. Realizar el análisis.',
      'Paso 4. Establecer consideraciones e hipótesis.',
      'Paso 3. Determinar los diagramas y datos.',
      'Paso 2. Determinar lo que se debe hallar.',
      'Paso 1. Determinar lo conocido.'
    ],
    right: ['1', '2', '3', '4', '5'],
    correct: [4, 3, 2, 1, 0],
    explanation: 'Secuencia lógica del método propuesto.'
  },
  {
    id: 12,
    type: 'multi',
    prompt: 'Ejemplos de restricción en diseño y análisis:',
    options: ['Estándares de seguridad', 'Estética final', 'Estándares ambientales', 'Costos'],
    correct: [0, 2, 3],
    explanation: 'Seguridad, ambiente y costos suelen figurar como restricciones; la estética es criterio pero no siempre una restricción dura.'
  },
  {
    id: 13,
    type: 'tf',
    prompt: 'Un flujo unidimensional es un flujo de materia que entra o sale de un volumen de control.',
    correct: false,
    explanation: '1D describe variación principal en una sola dirección; lo otro describe un sistema abierto.'
  },
  {
    id: 14,
    type: 'single',
    prompt: '¿En qué componente la velocidad del fluido disminuye en la dirección del flujo?',
    options: ['Difusor', 'Compresor', 'Intercambiador de calor', 'Bomba', 'Tobera'],
    correct: 0,
    explanation: 'El difusor ensancha el área y reduce la velocidad aumentando la presión.'
  },
  {
    id: 15,
    type: 'tf',
    prompt: 'Una turbomáquina donde "se produce calor" al pasar un fluido por álabes solidarios a un eje.',
    correct: false,
    explanation: 'La función principal es intercambio de trabajo, no producir calor como único efecto.'
  },
  {
    id: 16,
    type: 'tf',
    prompt: 'Las variaciones de energía cinética y potencial suelen ser muy pequeñas y pueden despreciarse.',
    correct: true,
    explanation: 'Es una aproximación común en balances de energía de equipos.'
  },
  {
    id: 17,
    type: 'multi',
    prompt: 'Ejemplos de compresores alternativos:',
    options: ['Centrífugos', 'Tipo Roots', 'De biela y pistón', 'De diafragma', 'De flujo axial'],
    correct: [2, 3],
    explanation: 'Biela-pistón y diafragma son alternativos; centrífugos/axiales son turbocompresores; Roots es de lóbulos rotativos.'
  },
  {
    id: 18,
    type: 'multi',
    prompt: 'En qué componentes se realiza trabajo para modificar el estado del fluido:',
    options: ['Bombas', 'Compresores', 'Difusores', 'Toberas', 'Turbinas'],
    correct: [0, 1],
    explanation: 'Bombas/compresores consumen trabajo; la turbina entrega trabajo al eje.'
  },
  {
    id: 19,
    type: 'tf',
    prompt: 'Los compresores aumentan la presión por transferencia de energía en forma de calor.',
    correct: false,
    explanation: 'El aumento de presión se logra por trabajo mecánico sobre el fluido.'
  },
  {
    id: 20,
    type: 'multi',
    prompt: 'Aplicaciones de intercambiadores de calor:',
    options: [
      'Cámara de combustión',
      'Condensador de heladera',
      'Bomba de central térmica',
      'Compresor de heladera',
      'Radiador de automóvil',
      'Evaporador de un generador de vapor',
      'Turbina de vapor'
    ],
    correct: [1, 4, 5],
    explanation: 'Condensadores, radiadores y generadores de vapor intercambian calor entre corrientes.'
  },
  {
    id: 21,
    type: 'match',
    prompt: 'Unir cada modo con su descripción.',
    left: [
      'Calor entre cuerpos en contacto a distinta T.',
      'Calor mediado por un fluido por efecto de campo de T y velocidades.',
      'Calor por emisión/absorción de radiación electromagnética.'
    ],
    right: ['Conducción', 'Convección', 'Radiación'],
    correct: [0, 1, 2],
    explanation: 'Definiciones estándar de conducción, convección y radiación.'
  },
  {
    id: 22,
    type: 'multi',
    prompt: 'Verdadero o falso (marca V para verdadero y F para falso).',
    subitems: [
      'Si un fluido es incompresible, cv = cp.',
      'El calor específico es una propiedad extensiva.',
      'Calor específico: calor para elevar en más de una unidad de temperatura a 1 kg.'
    ],
    correct: [true, false, false],
    explanation: 'Para incompresible ideal cp≈cv; el calor específico es intensivo; la definición correcta refiere a "una unidad" de temperatura.'
  },
  {
    id: 23,
    type: 'single',
    prompt: 'En un intercambiador de placas, ¿cómo se intercambia energía entre fluidos?',
    options: ['Conducción y convección', 'Conducción y radiación', 'Convección y radiación', 'Solo convección', 'Conducción, convección y radiación', 'Solo radiación', 'Solo conducción'],
    correct: 0,
    explanation: 'Convección en cada lado y conducción a través de la placa.'
  },
  {
    id: 24,
    type: 'tf',
    prompt: 'En un intercambiador, solo puede desperdiciarse la variación de energía potencial.',
    correct: false,
    explanation: 'También hay pérdidas por fricción, térmicas, etc.'
  },
  // 25–44: repetidos/variantes del mismo banco (con las mismas respuestas):
  {
    id: 25,
    type: 'multi',
    prompt: 'Seleccionar cuáles son los modos de transferencia de energía en termodinámica:',
    options: ['Energía cinética', 'Trabajo', 'Energía interna', 'Entropía', 'Calor', 'Energía potencial'],
    correct: [1, 4],
    explanation: 'Solo trabajo y calor son modos de transferencia.'
  },
  {
    id: 26,
    type: 'multi',
    prompt: 'Seleccionar cuáles son los modos de transferencia de calor:',
    options: ['Convección', 'Radiación', 'Evaporación', 'Fusión', 'Conducción'],
    correct: [0, 1, 4],
    explanation: 'Conducción, convección y radiación.'
  },
  {
    id: 27,
    type: 'tf',
    prompt: 'Según el convenio de signos, Q > 0 hacia el sistema y Q < 0 desde el sistema.',
    correct: true,
    explanation: 'Convención clásica.'
  },
  {
    id: 28,
    type: 'single',
    prompt: 'Ciclos utilizados solo en motores de combustión externa:',
    options: ['Ciclo Diésel', 'Ciclo Otto', 'Ciclo Rankine', 'Ciclo Brayton'],
    correct: 2,
    explanation: 'Rankine típico = combustión externa.'
  },
  {
    id: 29,
    type: 'match',
    prompt: 'Emparejar principios y enunciados:',
    left: [
      'Intercambia trabajo y calor; acumula energía interna.',
      'Imposible transferir calor de frío a caliente como único efecto.',
      'Imposible convertir íntegramente el calor absorbido en trabajo en un ciclo.'
    ],
    right: [
      'Principio de conservación de la energía',
      'Formulación de Clausius',
      'Enunciado de Kelvin–Planck'
    ],
    correct: [0, 1, 2],
    explanation: '1ª Ley y dos enunciados de la 2ª Ley.'
  },
  {
    id: 30,
    type: 'multi',
    prompt: '¿Cuáles corresponden al 2º principio de la termodinámica?',
    options: [
      'Q fluye de T alta a T baja.',
      'Imposible transferir calor de frío a caliente como único efecto.',
      'Conservación de la energía en sistemas.',
      'Imposible convertir íntegramente el calor en trabajo en un ciclo.',
      'Un sistema puede intercambiar W y Q.'
    ],
    correct: [0, 1, 3],
    explanation: 'Direccionalidad del calor (a), Clausius (b) y Kelvin–Planck (d).'
  },
  {
    id: 31,
    type: 'tf',
    prompt: 'El enunciado de Kelvin–Planck es: "...transferir calor de un cuerpo frío a otro más caliente como único efecto".',
    correct: false,
    explanation: 'Ese enunciado corresponde a Clausius; Kelvin–Planck trata sobre convertir totalmente calor en trabajo.'
  },
  {
    id: 32,
    type: 'single',
    prompt: 'Clasificación de un motor de explosión de automóviles:',
    options: ['Combustión externa alternativa', 'Combustión externa rotativa', 'Combustión interna alternativa', 'Combustión interna rotativa'],
    correct: 2,
    explanation: 'Motor de encendido por chispa: combustión interna alternativa.'
  },
  {
    id: 33,
    type: 'match',
    prompt: 'Emparejar aplicación con clasificación (considerando configuraciones típicas):',
    left: [
      'Turbina de gas ciclo abierto',
      'Turbina de gas ciclo cerrado',
      'Motor de explosión',
      'Máquina de vapor (turbina)'
    ],
    right: [
      'Combustión interna rotativa',
      'Combustión externa rotativa',
      'Combustión interna alternativa',
      'Combustión externa alternativa'
    ],
    correct: [0, 1, 2, 1],
    explanation: 'Abierto: interna rotativa. Cerrado: calentamiento externo. Motor de explosión: interna alternativa. La máquina de vapor con turbina es externa rotativa.'
  },
  {
    id: 34,
    type: 'multi',
    prompt: 'Aplicaciones del ciclo Brayton:',
    options: ['Motor de combustión interna', 'Máquina de vapor', 'Turbina de avión', 'Turbina de vapor', 'Turbina de gas'],
    correct: [2, 4],
    explanation: 'Brayton rige turbinas de gas y turborreactores.'
  },
  {
    id: 35,
    type: 'single',
    prompt: '¿Qué ciclo puede lograr la máxima eficiencia reversible?',
    options: ['Otto', 'Diésel', 'Rankine', 'Brayton', 'Carnot'],
    correct: 4,
    explanation: 'Carnot fija el límite superior reversible.'
  },
  {
    id: 36,
    type: 'tf',
    prompt: 'Existen rendimientos más altos que el ciclo de Carnot.',
    correct: false,
    explanation: 'Ninguna máquina térmica reversible supera a Carnot entre las mismas T.'
  },
  {
    id: 37,
    type: 'single',
    prompt: 'Un ciclo de Carnot está compuesto por:',
    options: [
      'Dos procesos isotermos y dos adiabáticos',
      'Dos isocóricos y dos adiabáticos',
      'Dos isotermos y dos isobáricos',
      'Dos isocóricos y dos isotermos',
      'Dos isobáricos y dos adiabáticos'
    ],
    correct: 0,
    explanation: 'Isotermos + adiabáticos.'
  },
  {
    id: 38,
    type: 'tf',
    prompt: 'Un ciclo Ericsson reversible está formado por dos isocoras y dos isobaras.',
    correct: false,
    explanation: 'Ericsson ideal: compresión/expansión isotérmica y calentamiento/enfriamiento isobárico con regeneración.'
  },
  {
    id: 39,
    type: 'multi',
    prompt: 'Restricciones en diseño y análisis de ingeniería:',
    options: ['Costos', 'Estética final', 'Estándares de medio ambiente', 'Estándares de seguridad'],
    correct: [0, 2, 3],
    explanation: 'Costos, ambiente y seguridad suelen ser restricciones clave.'
  },
  {
    id: 40,
    type: 'tf',
    prompt: 'Un flujo unidimensional es un flujo de materia que entra o sale de un volumen de control.',
    correct: false,
    explanation: 'Eso describe un sistema abierto; 1D refiere a cómo varían las propiedades.'
  },
  {
    id: 41,
    type: 'single',
    prompt: '¿En qué componente disminuye la velocidad en la dirección del flujo?',
    options: ['Difusor', 'Bomba', 'Compresor', 'Tobera', 'Intercambiador de calor'],
    correct: 0,
    explanation: 'El difusor reduce velocidad y eleva presión.'
  },
  {
    id: 42,
    type: 'tf',
    prompt: 'Dispositivo donde "se produce calor" por el paso de un fluido por álabes solidarios a un eje.',
    correct: false,
    explanation: 'Las turbomáquinas intercambian trabajo principalmente.'
  },
  {
    id: 43,
    type: 'single',
    prompt: 'Intercambio de energía en un intercambiador de placas:',
    options: ['Solo Convección', 'Conducción, convección y radiación', 'Conducción y radiación', 'Convección y radiación', 'Solo conducción', 'Solo radiación', 'Conducción y convección'],
    correct: 6,
    explanation: 'Conducción a través de la placa y convección en los canales.'
  },
  {
    id: 44,
    type: 'tf',
    prompt: 'En un intercambiador, solo se puede desperdiciar la variación de energía potencial.',
    correct: false,
    explanation: 'Hay múltiples pérdidas mecánicas y térmicas además de la potencial.'
  }
];

const questions = normalizeQuestions(QUESTIONS);

const typeLabels = {
  single: 'Selección única',
  multi: 'Selección múltiple',
  tf: 'Verdadero / Falso',
  match: 'Emparejar',
  group_tf: 'Verdadero / Falso (múltiple)'
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
    const base = {
      id: questionId,
      type: raw.type,
      prompt: raw.prompt ?? raw.title ?? '',
      explanation: raw.explanation ?? '',
      helper: raw.helper ?? null
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
      explanation: value.explanation ?? ''
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
    if (evaluation?.isCorrect) {
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

  const optionsWrapper = document.createElement('div');
  optionsWrapper.className = 'options-wrapper';
  const role = question.type === 'single' || question.type === 'tf' ? 'radiogroup' : 'group';
  optionsWrapper.setAttribute('role', role);
  optionsWrapper.setAttribute('aria-labelledby', titleId);
  if (helperId) {
    optionsWrapper.setAttribute('aria-describedby', helperId);
  }
  questionContent.appendChild(optionsWrapper);

  if (question.type === 'match') {
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
  } else {
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
    default:
      correctAnswers = [];
  }

  return {
    isCorrect,
    correctAnswers,
    explanation: question.explanation
  };
}

function showCorrection(question, evaluation, userAnswer) {
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
    const total = questions.length;
    scoreCountEl.textContent = `0 / ${total}`;
    scorePercentageEl.textContent = '0%';
    scoreBadgeEl.textContent = getBadgeLabel(0);
    return;
  }
  const evaluations = Object.values(state.evaluations);
  const correctCount = evaluations.filter(entry => entry?.isCorrect).length;
  const total = questions.length;
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

