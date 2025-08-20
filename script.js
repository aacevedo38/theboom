// Base de datos de información para cada concepto
const conceptInfo = {
    ai: {
        title: "Inteligencia Artificial",
        description: "La Inteligencia Artificial (IA) es la simulación de inteligencia humana en máquinas programadas para pensar y aprender como humanos. El término también se puede aplicar a cualquier máquina que exhiba rasgos asociados con una mente humana como el aprendizaje y la resolución de problemas.",
        details: [
            "• Definición: Campo de la informática que busca crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana",
            "• Objetivo: Desarrollar máquinas que puedan razonar, aprender, percibir y resolver problemas complejos",
            "• Aplicaciones: Desde asistentes virtuales hasta sistemas de diagnóstico médico",
            "• Historia: Comenzó en la década de 1950 con el Test de Turing"
        ]
    },
    ml: {
        title: "Machine Learning",
        description: "El Machine Learning es un subconjunto de la IA que se enfoca en el desarrollo de algoritmos y modelos estadísticos que permiten a las computadoras mejorar su rendimiento en una tarea específica a través de la experiencia.",
        details: [
            "• Aprendizaje Automático: Los algoritmos aprenden patrones en los datos sin ser programados explícitamente",
            "• Tipos principales: Supervisado, No Supervisado y por Refuerzo",
            "• Aplicaciones: Recomendaciones, detección de fraude, análisis predictivo",
            "• Herramientas: Python, TensorFlow, Scikit-learn, PyTorch"
        ]
    },
    dl: {
        title: "Deep Learning",
        description: "El Deep Learning es una rama del Machine Learning basada en redes neuronales artificiales con múltiples capas. Estas redes pueden aprender representaciones de datos en múltiples niveles de abstracción.",
        details: [
            "• Redes Neuronales: Modelos inspirados en el cerebro humano",
            "• Múltiples Capas: Permiten aprender características complejas y abstractas",
            "• Aplicaciones: Reconocimiento de voz, visión por computadora, procesamiento de lenguaje natural",
            "• Frameworks: TensorFlow, PyTorch, Keras"
        ]
    },
    nlp: {
        title: "Procesamiento de Lenguaje Natural (NLP)",
        description: "El NLP es una rama de la IA que se enfoca en la interacción entre las computadoras y el lenguaje humano. Permite a las máquinas entender, interpretar y generar lenguaje natural.",
        details: [
            "• Comprensión: Análisis semántico y sintáctico del texto",
            "• Generación: Creación de texto coherente y contextualmente apropiado",
            "• Aplicaciones: Traducción automática, chatbots, análisis de sentimientos",
            "• Modelos: GPT, BERT, T5, LLaMA"
        ]
    },
    cv: {
        title: "Computer Vision (Visión por Computadora)",
        description: "La Computer Vision es un campo de la IA que permite a las computadoras interpretar y entender el mundo visual. Se enfoca en la extracción automática de información de imágenes y videos.",
        details: [
            "• Análisis de Imágenes: Detección de objetos, reconocimiento facial, segmentación",
            "• Procesamiento: Filtros, transformaciones, extracción de características",
            "• Aplicaciones: Vehículos autónomos, seguridad, medicina, retail",
            "• Técnicas: CNN, detección de bordes, análisis de texturas"
        ]
    },
    robotics: {
        title: "Robótica",
        description: "La Robótica combina IA con ingeniería mecánica y electrónica para crear máquinas autónomas o semi-autónomas que pueden realizar tareas físicas en el mundo real.",
        details: [
            "• Autonomía: Robots que pueden operar independientemente",
            "• Sensores: Visión, tacto, audición para percibir el entorno",
            "• Aplicaciones: Industria, medicina, exploración espacial, domótica",
            "• Desafíos: Navegación, manipulación, interacción humano-robot"
        ]
    },
    ethics: {
        title: "Ética y Sociedad en IA",
        description: "La ética en IA se refiere a las consideraciones morales y sociales que surgen del desarrollo y uso de sistemas de inteligencia artificial, incluyendo temas como sesgos, privacidad y responsabilidad.",
        details: [
            "• Sesgos: Discriminación algorítmica y prejuicios en los datos",
            "• Privacidad: Protección de datos personales y consentimiento",
            "• Transparencia: Explicabilidad de las decisiones de la IA",
            "• Responsabilidad: Quién es responsable de las acciones de la IA"
        ]
    },
    generative_ai: {
        title: "IA Generativa",
        description: "La IA Generativa es una rama de la inteligencia artificial que se enfoca en crear contenido nuevo y original, como texto, imágenes, audio, video y código, basándose en patrones aprendidos de grandes conjuntos de datos.",
        details: [
            "• Generación de Contenido: Creación de texto, imágenes, audio y video originales",
            "• Modelos de Lenguaje: GPT, Claude, LLaMA para generación de texto",
            "• Generación de Imágenes: DALL-E, Midjourney, Stable Diffusion",
            "• Aplicaciones: Creación de contenido, diseño, programación, entretenimiento"
        ]
    },
    // Sub-conceptos de Machine Learning
    supervised: {
        title: "Machine Learning Supervisado",
        description: "En el aprendizaje supervisado, el algoritmo aprende de un conjunto de datos etiquetados, donde cada ejemplo de entrada tiene una salida correcta conocida.",
        details: [
            "• Datos Etiquetados: Conjuntos de entrenamiento con respuestas correctas",
            "• Clasificación: Categorización de datos en clases predefinidas",
            "• Regresión: Predicción de valores numéricos continuos",
            "• Algoritmos: Random Forest, SVM, Redes Neuronales, Decision Trees"
        ]
    },
    unsupervised: {
        title: "Machine Learning No Supervisado",
        description: "El aprendizaje no supervisado encuentra patrones ocultos en datos no etiquetados sin supervisión externa.",
        details: [
            "• Sin Etiquetas: Los datos no tienen respuestas correctas conocidas",
            "• Clustering: Agrupación de datos similares",
            "• Reducción Dimensional: Compresión de características",
            "• Algoritmos: K-means, DBSCAN, PCA, Autoencoders"
        ]
    },
    reinforcement: {
        title: "Machine Learning por Refuerzo",
        description: "El aprendizaje por refuerzo aprende a través de la interacción con un entorno, recibiendo recompensas o penalizaciones por sus acciones.",
        details: [
            "• Agente y Entorno: El agente aprende interactuando con su entorno",
            "• Política: Estrategia para seleccionar acciones",
            "• Recompensas: Señales de retroalimentación del entorno",
            "• Aplicaciones: Juegos, robótica, trading algorítmico"
        ]
    },
    // Sub-conceptos de Deep Learning
    cnn: {
        title: "Redes Neuronales Convolucionales (CNN)",
        description: "Las CNN son redes neuronales especializadas en el procesamiento de datos con estructura de cuadrícula, como imágenes.",
        details: [
            "• Convoluciones: Filtros que detectan características locales",
            "• Pooling: Reducción de dimensionalidad y robustez",
            "• Arquitectura: Capas convolucionales, pooling y completamente conectadas",
            "• Aplicaciones: Reconocimiento de imágenes, detección de objetos, clasificación"
        ]
    },
    rnn: {
        title: "Redes Neuronales Recurrentes (RNN)",
        description: "Las RNN procesan secuencias de datos manteniendo un estado interno que permite recordar información de pasos anteriores.",
        details: [
            "• Memoria: Mantiene información de entradas anteriores",
            "• Secuencias: Procesa datos ordenados temporalmente",
            "• Variantes: LSTM, GRU para problemas de memoria a largo plazo",
            "• Aplicaciones: Procesamiento de texto, reconocimiento de voz, traducción"
        ]
    },
    transformer: {
        title: "Arquitectura Transformer",
        description: "Los Transformers son una arquitectura de red neuronal que utiliza mecanismos de atención para procesar secuencias de datos de manera paralela.",
        details: [
            "• Atención: Mecanismo que permite al modelo enfocarse en partes relevantes de la entrada",
            "• Paralelización: Procesamiento eficiente de secuencias largas",
            "• Arquitectura: Encoder-Decoder con múltiples capas de atención",
            "• Aplicaciones: GPT, BERT, T5, modelos de lenguaje grandes"
        ]
    },
    // Sub-conceptos de NLP
    "text-analysis": {
        title: "Análisis de Texto",
        description: "El análisis de texto incluye técnicas para extraer información útil y patrones de datos textuales no estructurados.",
        details: [
            "• Análisis de Sentimientos: Clasificación de emociones en el texto",
            "• NER: Reconocimiento de entidades nombradas (personas, lugares, organizaciones)",
            "• Extracción de Palabras Clave: Identificación de términos importantes",
            "• Aplicaciones: Monitoreo de redes sociales, análisis de reseñas, investigación de mercado"
        ]
    },
    translation: {
        title: "Traducción Automática",
        description: "La traducción automática convierte texto de un idioma a otro utilizando técnicas de procesamiento de lenguaje natural.",
        details: [
            "• Traducción Estadística: Basada en análisis de corpus paralelos",
            "• Traducción Neural: Utiliza redes neuronales para mapeos de idiomas",
            "• Calidad: Mejora continua con más datos y mejores modelos",
            "• Aplicaciones: Google Translate, DeepL, comunicación internacional"
        ]
    },
    chatbots: {
        title: "Chatbots y Asistentes Conversacionales",
        description: "Los chatbots son sistemas de IA diseñados para simular conversaciones humanas y proporcionar asistencia automatizada.",
        details: [
            "• Procesamiento de Lenguaje: Comprensión de intenciones del usuario",
            "• Generación de Respuestas: Creación de respuestas contextualmente apropiadas",
            "• Integración: Conexión con bases de datos y sistemas externos",
            "• Aplicaciones: Atención al cliente, soporte técnico, asistentes personales"
        ]
    },
    // Sub-conceptos de IA Generativa
    "text-generation": {
        title: "Generación de Texto con IA",
        description: "La generación de texto utiliza modelos de lenguaje grandes para crear contenido escrito coherente y contextualmente apropiado.",
        details: [
            "• Modelos de Lenguaje: GPT-4, Claude, LLaMA, PaLM",
            "• Aplicaciones: Escritura creativa, redacción de documentos, chatbots",
            "• Capacidades: Completar texto, responder preguntas, generar historias",
            "• Herramientas: ChatGPT, Claude, Bard, Hugging Face"
        ]
    },
    "image-generation": {
        title: "Generación de Imágenes con IA",
        description: "La generación de imágenes crea visualizaciones únicas basándose en descripciones textuales o imágenes de referencia.",
        details: [
            "• Modelos: DALL-E 3, Midjourney v6, Stable Diffusion XL",
            "• Técnicas: Difusión, GANs, Transformers",
            "• Aplicaciones: Diseño gráfico, arte digital, marketing, entretenimiento",
            "• Control: Prompts textuales, edición de imágenes, variaciones"
        ]
    },
    "audio-generation": {
        title: "Generación de Audio con IA",
        description: "La generación de audio incluye la creación de voz, música y efectos de sonido utilizando inteligencia artificial.",
        details: [
            "• Síntesis de Voz: Text-to-Speech natural y expresivo",
            "• Generación Musical: Composición automática de melodías y ritmos",
            "• Herramientas: Whisper, MusicLM, ElevenLabs, Suno",
            "• Aplicaciones: Asistentes virtuales, producción musical, podcasts"
        ]
    },
    "video-generation": {
        title: "Generación de Video con IA",
        description: "La generación de video crea clips y animaciones basándose en texto, imágenes o videos de referencia.",
        details: [
            "• Modelos: Runway Gen-3, Pika Labs, Sora, Stable Video",
            "• Técnicas: Difusión temporal, interpolación de frames",
            "• Aplicaciones: Marketing, entretenimiento, educación, publicidad",
            "• Duración: Desde segundos hasta minutos de contenido generado"
        ]
    },
    "code-generation": {
        title: "Generación de Código con IA",
        description: "La generación de código automatiza la creación de programas y scripts utilizando inteligencia artificial.",
        details: [
            "• Herramientas: GitHub Copilot, Amazon CodeWhisperer, Tabnine",
            "• Funcionalidades: Autocompletado, generación de funciones, debugging",
            "• Lenguajes: Python, JavaScript, Java, C++, y muchos más",
            "• Aplicaciones: Desarrollo de software, scripting, automatización"
        ]
    },
    // Sub-conceptos de Computer Vision
    "object-detection": {
        title: "Detección de Objetos",
        description: "La detección de objetos identifica y localiza múltiples objetos en imágenes, proporcionando coordenadas de cajas delimitadoras.",
        details: [
            "• Localización: Coordenadas precisas de los objetos",
            "• Clasificación: Identificación del tipo de objeto",
            "• Algoritmos: YOLO, R-CNN, SSD, Faster R-CNN",
            "• Aplicaciones: Vehículos autónomos, seguridad, retail, medicina"
        ]
    },
    "image-segmentation": {
        title: "Segmentación de Imágenes",
        description: "La segmentación divide una imagen en regiones o segmentos basándose en características como color, textura o forma.",
        details: [
            "• Segmentación Semántica: Asigna etiquetas de clase a cada píxel",
            "• Segmentación de Instancias: Separa objetos individuales de la misma clase",
            "• Técnicas: U-Net, Mask R-CNN, DeepLab",
            "• Aplicaciones: Medicina (análisis de imágenes médicas), edición de fotos, robótica"
        ]
    },
    "facial-recognition": {
        title: "Reconocimiento Facial",
        description: "El reconocimiento facial identifica o verifica la identidad de una persona basándose en características faciales.",
        details: [
            "• Detección de Rostros: Localización de caras en imágenes",
            "• Extracción de Características: Puntos faciales únicos",
            "• Algoritmos: FaceNet, DeepFace, OpenFace",
            "• Aplicaciones: Seguridad, desbloqueo de dispositivos, identificación biométrica"
        ]
    },
    // Sub-conceptos de Robótica
    "autonomous-vehicles": {
        title: "Vehículos Autónomos",
        description: "Los vehículos autónomos utilizan sensores, IA y sistemas de control para navegar sin intervención humana.",
        details: [
            "• Sensores: LIDAR, cámaras, radar, GPS",
            "• Niveles de Autonomía: Del 0 (completamente manual) al 5 (completamente autónomo)",
            "• Desafíos: Seguridad, regulaciones, aceptación social",
            "• Empresas: Tesla, Waymo, Cruise, Mobileye"
        ]
    },
    "industrial-robots": {
        title: "Robots Industriales",
        description: "Los robots industriales automatizan procesos de fabricación, aumentando la eficiencia y precisión en entornos industriales.",
        details: [
            "• Tipos: Manipuladores articulados, robots SCARA, robots Delta",
            "• Aplicaciones: Soldadura, pintura, ensamblaje, paletizado",
            "• Programación: Enseñanza directa, programación offline, visión artificial",
            "• Beneficios: Mayor productividad, calidad consistente, seguridad"
        ]
    },
    humanoid: {
        title: "Robots Humanoides",
        description: "Los robots humanoides tienen forma y comportamiento similar al humano, diseñados para interactuar en entornos humanos.",
        details: [
            "• Diseño: Estructura similar al cuerpo humano con brazos, piernas y cabeza",
            "• Movimiento: Locomoción bípeda, manipulación con manos",
            "• Interacción: Reconocimiento de voz, expresiones faciales, gestos",
            "• Aplicaciones: Investigación, entretenimiento, asistencia personal"
        ]
    },
    // Sub-conceptos de Ética
    bias: {
        title: "Sesgos en Inteligencia Artificial",
        description: "Los sesgos en IA se refieren a prejuicios sistemáticos en los datos o algoritmos que pueden llevar a discriminación injusta.",
        details: [
            "• Sesgos de Datos: Datos de entrenamiento que reflejan prejuicios existentes",
            "• Sesgos Algorítmicos: Decisiones injustas basadas en características sensibles",
            "• Impacto: Discriminación en empleo, préstamos, justicia penal",
            "• Mitigación: Datos diversos, auditorías de sesgos, transparencia"
        ]
    },
    privacy: {
        title: "Privacidad y Protección de Datos",
        description: "La privacidad en IA se refiere a la protección de información personal y el control sobre cómo se recopilan y utilizan los datos.",
        details: [
            "• Consentimiento: Autorización informada para el uso de datos",
            "• Anonimización: Eliminación de identificadores personales",
            "• Regulaciones: GDPR, CCPA, leyes de protección de datos",
            "• Técnicas: Cifrado, federated learning, differential privacy"
        ]
    },
    employment: {
        title: "Impacto en el Empleo",
        description: "La automatización impulsada por la IA está transformando el mercado laboral, creando nuevos trabajos mientras automatiza otros.",
        details: [
            "• Automatización: Tareas repetitivas y rutinarias",
            "• Nuevos Trabajos: Roles en desarrollo de IA, análisis de datos, mantenimiento",
            "• Reskilling: Necesidad de actualizar habilidades para trabajadores",
            "• Transición: Políticas para facilitar la adaptación laboral"
        ]
    }
};

// Variables globales
let currentZoom = 1;
let animationsEnabled = true;
let activeNode = null;

// Elementos del DOM
const infoPanel = document.getElementById('infoPanel');
const infoTitle = document.getElementById('infoTitle');
const infoContent = document.getElementById('infoContent');
const closeInfo = document.getElementById('closeInfo');
const resetView = document.getElementById('resetView');
const zoomIn = document.getElementById('zoomIn');
const zoomOut = document.getElementById('zoomOut');
const toggleAnimation = document.getElementById('toggleAnimation');

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    showWelcomeMessage();
});

// Configurar event listeners
function initializeEventListeners() {
    // Event listeners para nodos
    document.querySelectorAll('.node, .sub-node, .generative-sub-node').forEach(node => {
        node.addEventListener('click', handleNodeClick);
        node.addEventListener('mouseenter', handleNodeHover);
        node.addEventListener('mouseleave', handleNodeLeave);
    });

    // Event listeners para controles
    closeInfo.addEventListener('click', hideInfoPanel);
    resetView.addEventListener('click', resetViewFunction);
    zoomIn.addEventListener('click', zoomInFunction);
    zoomOut.addEventListener('click', zoomOutFunction);
    toggleAnimation.addEventListener('click', toggleAnimations);

    // Cerrar panel con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideInfoPanel();
        }
    });

    // Cerrar panel al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (!infoPanel.contains(e.target) && !e.target.closest('.node, .sub-node')) {
            hideInfoPanel();
        }
    });
}

// Manejar clic en nodos
function handleNodeClick(e) {
    e.stopPropagation();
    const node = e.currentTarget;
    const category = node.dataset.category;
    
    if (category && conceptInfo[category]) {
        showNodeInfo(category, node);
        highlightActiveNode(node);
    }
}

// Manejar hover en nodos
function handleNodeHover(e) {
    const node = e.currentTarget;
    if (animationsEnabled) {
        if (node.classList.contains('central-node')) {
            node.style.transform = 'scale(1.1)';
        } else if (node.classList.contains('generative-sub-node')) {
            node.style.transform = 'translateY(-3px) scale(1.05)';
        } else {
            node.style.transform = 'translateY(-8px)';
        }
    }
}

// Manejar salida del hover
function handleNodeLeave(e) {
    const node = e.currentTarget;
    if (node !== activeNode) {
        node.style.transform = '';
    }
}

// Mostrar información del nodo
function showNodeInfo(category, node) {
    const info = conceptInfo[category];
    if (!info) return;

    infoTitle.textContent = info.title;
    
    let contentHTML = `<p><strong>${info.description}</strong></p>`;
    
    if (info.details && info.details.length > 0) {
        contentHTML += '<h4>Detalles importantes:</h4><ul>';
        info.details.forEach(detail => {
            contentHTML += `<li>${detail}</li>`;
        });
        contentHTML += '</ul>';
    }

    // Agregar información adicional según la categoría
    if (category === 'ai') {
        contentHTML += `
            <h4>Historia de la IA:</h4>
            <p>La IA comenzó en 1956 en la Conferencia de Dartmouth, donde se acuñó el término "Inteligencia Artificial". Desde entonces, ha pasado por varios "inviernos" y "primaveras" de desarrollo.</p>
        `;
    } else if (category === 'ml') {
        contentHTML += `
            <h4>Flujo de trabajo típico:</h4>
            <p>1. Recopilación de datos<br>2. Preprocesamiento<br>3. Selección de modelo<br>4. Entrenamiento<br>5. Evaluación<br>6. Despliegue</p>
        `;
    }

    infoContent.innerHTML = contentHTML;
    infoPanel.classList.add('active');
}

// Ocultar panel de información
function hideInfoPanel() {
    infoPanel.classList.remove('active');
    if (activeNode) {
        activeNode.classList.remove('active');
        activeNode.style.transform = '';
        activeNode = null;
    }
}

// Resaltar nodo activo
function highlightActiveNode(node) {
    if (activeNode) {
        activeNode.classList.remove('active');
        activeNode.style.transform = '';
    }
    
    activeNode = node;
    node.classList.add('active');
    
    if (node.classList.contains('central-node')) {
        node.style.transform = 'scale(1.1)';
    } else if (node.classList.contains('generative-sub-node')) {
        node.style.transform = 'translateY(-3px) scale(1.05)';
    } else {
        node.style.transform = 'translateY(-8px)';
    }
}

// Funciones de control
function resetViewFunction() {
    currentZoom = 1;
    document.querySelector('.mind-map').style.transform = `scale(${currentZoom})`;
    
    // Resetear posiciones de nodos activos
    if (activeNode) {
        activeNode.classList.remove('active');
        activeNode.style.transform = '';
        activeNode = null;
    }
    
    hideInfoPanel();
}

function zoomInFunction() {
    if (currentZoom < 2) {
        currentZoom += 0.2;
        document.querySelector('.mind-map').style.transform = `scale(${currentZoom})`;
    }
}

function zoomOutFunction() {
    if (currentZoom > 0.5) {
        currentZoom -= 0.2;
        document.querySelector('.mind-map').style.transform = `scale(${currentZoom})`;
    }
}

function toggleAnimations() {
    animationsEnabled = !animationsEnabled;
    toggleAnimation.textContent = animationsEnabled ? '⏸️ Pausar Animaciones' : '▶️ Animaciones';
    
    if (!animationsEnabled) {
        document.querySelectorAll('.node, .sub-node, .generative-sub-node').forEach(node => {
            node.style.animationPlayState = 'paused';
        });
    } else {
        document.querySelectorAll('.node, .sub-node, .generative-sub-node').forEach(node => {
            node.style.animationPlayState = 'running';
        });
    }
}

// Mostrar mensaje de bienvenida
function showWelcomeMessage() {
    setTimeout(() => {
        infoTitle.textContent = "¡Bienvenido al Mapa Mental de IA!";
        infoContent.innerHTML = `
            <p>Este mapa mental interactivo te permitirá explorar los conceptos fundamentales de la Inteligencia Artificial.</p>
            <h4>¿Cómo usar?</h4>
            <ul>
                <li>🖱️ Haz clic en cualquier nodo para obtener información detallada</li>
                <li>🔍 Usa los controles de zoom para explorar mejor</li>
                <li>🔄 Resetea la vista cuando quieras volver al inicio</li>
                <li>⏸️ Controla las animaciones según tu preferencia</li>
            </ul>
            <p><strong>¡Comienza explorando haciendo clic en el nodo central!</strong></p>
        `;
        infoPanel.classList.add('active');
    }, 1000);
}

// Efectos visuales adicionales
function addVisualEffects() {
    // Efecto de partículas flotantes
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

// Agregar efectos visuales si las animaciones están habilitadas
if (animationsEnabled) {
    addVisualEffects();
}

// Agregar estilos CSS para partículas
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
