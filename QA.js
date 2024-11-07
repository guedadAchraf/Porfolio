class QuestionDatabase {
    constructor() {
        this.qaDatabase = {
            // Personal Introduction Questions
            introduction: {
                keywords: [
                    // English variations
                    'who are you', 'who is achraf', 'tell me about achraf',
                    'introduce yourself', 'tell me about yourself',
                    'what should i know about you', 'give me an introduction',
                    'can you introduce yourself', 'describe yourself',
                    'what can you tell me about yourself',
                    'brief introduction', 'professional background',
                    'tell us about yourself', 'who is guedad',
                    // French variations
                    'qui êtes-vous', 'qui est achraf', 'parlez-moi d\'achraf',
                    'présentez-vous', 'parlez-moi de vous',
                    'que devrais-je savoir sur vous', 'faites-vous une présentation',
                    'pouvez-vous vous présenter', 'décrivez-vous',
                    'que pouvez-vous me dire sur vous',
                    'brève introduction', 'parcours professionnel',
                    'parlez-nous de vous', 'qui est guedad'
                ],
                response: {
                    en: `I'm Achraf Guedad, a Full Stack Developer with expertise in Java and Angular. I specialize in building scalable applications using microservices architecture, with over 3 years of experience in developing enterprise-level solutions. I'm passionate about clean code, DevOps practices, and cloud technologies.`,
                    fr: `Je suis Achraf Guedad, un Développeur Full Stack spécialisé en Java et Angular. Je me spécialise dans la création d'applications évolutives utilisant l'architecture microservices, avec plus de 3 ans d'expérience dans le développement de solutions d'entreprise. Je suis passionné par le code propre, les pratiques DevOps et les technologies cloud.`
                }
            },

            // Technical Skills Questions
            technicalSkills: {
                keywords: [
                    // English variations
                    'what are your technical skills', 'what technologies do you know',
                    'what is your tech stack', 'what can you work with',
                    'programming languages', 'development tools',
                    'technical expertise', 'technical knowledge',
                    'what frameworks do you use', 'development skills',
                    'coding skills', 'software skills',
                    // French variations
                    'quelles sont vos compétences techniques', 'quelles technologies connaissez-vous',
                    'quelle est votre stack technique', 'avec quoi pouvez-vous travailler',
                    'langages de programmation', 'outils de développement',
                    'expertise technique', 'connaissances techniques',
                    'quels frameworks utilisez-vous', 'compétences en développement',
                    'compétences en codage', 'compétences logicielles'
                ],
                response: {
                    en: `My technical skills include:
                    • Backend: Java 8, Spring Boot, Spring Cloud, Microservices
                    • Frontend: Angular, TypeScript, JavaScript, HTML5, CSS3
                    • DevOps: Docker, Kubernetes, AWS, CI/CD
                    • Databases: MySQL, PostgreSQL, MongoDB
                    • Tools: Git, Jenkins, JIRA, Confluence
                    • Architecture: REST APIs, Microservices, Cloud-Native`,
                    fr: `Mes compétences techniques comprennent:
                    • Backend: Java 8, Spring Boot, Spring Cloud, Microservices
                    • Frontend: Angular, TypeScript, JavaScript, HTML5, CSS3
                    • DevOps: Docker, Kubernetes, AWS, CI/CD
                    • Bases de données: MySQL, PostgreSQL, MongoDB
                    • Outils: Git, Jenkins, JIRA, Confluence
                    • Architecture: APIs REST, Microservices, Cloud-Native`
                }
            },

            // Project Experience Questions
            projects: {
                keywords: [
                    // English variations
                    'what projects have you worked on', 'tell me about your projects',
                    'project experience', 'major projects',
                    'recent projects', 'significant projects',
                    'project portfolio', 'what have you built',
                    'development projects', 'professional projects',
                    // French variations
                    'sur quels projets avez-vous travaillé', 'parlez-moi de vos projets',
                    'expérience de projet', 'projets majeurs',
                    'projets récents', 'projets significatifs',
                    'portfolio de projets', 'qu\'avez-vous construit',
                    'projets de développement', 'projets professionnels'
                ],
                response: {
                    en: `I've worked on several significant projects:
                    1. CommonShare (E-commerce Platform):
                       • Built with Angular and Spring Boot
                       • Implemented microservices architecture
                       • Deployed on AWS using Kubernetes
                    
                    2. Proc-Stage (Internship Management Platform):
                       • Developed full-stack solution
                       • Integrated payment systems
                       • Implemented real-time notifications
                    
                    3. Total Energy Project at Capgemini:
                       • Managed fuel stock system
                       • Implemented payment processing
                       • Developed REST APIs`,
                    fr: `J'ai travaillé sur plusieurs projets importants:
                    1. CommonShare (Plateforme E-commerce):
                       • Construit avec Angular et Spring Boot
                       • Implémentation d'une architecture microservices
                       • Déployé sur AWS avec Kubernetes
                    
                    2. Proc-Stage (Plateforme de Gestion de Stages):
                       • Développement d'une solution full-stack
                       • Intégration des systèmes de paiement
                       • Implémentation de notifications en temps réel
                    
                    3. Projet Total Energy chez Capgemini:
                       • Gestion du système de stock de carburant
                       • Implémentation du traitement des paiements
                       • Développement d'APIs REST`
                }
            },

            // Work Experience Questions
            workExperience: {
                keywords: [
                    // English variations
                    'work experience', 'professional experience',
                    'career history', 'job history',
                    'previous roles', 'past positions',
                    'employment history', 'where have you worked',
                    'professional background', 'career background',
                    // French variations
                    'expérience professionnelle', 'parcours professionnel',
                    'historique de carrière', 'historique d\'emploi',
                    'rôles précédents', 'postes précédents',
                    'antécédents professionnels', 'où avez-vous travaillé',
                    'background professionnel', 'parcours de carrière'
                ],
                response: {
                    en: `My professional experience includes:
                    • Current: Freelance Java/Angular Developer (2023-Present)
                      - Developing E-commerce solutions
                      - Leading microservices implementations
                    
                    • Upwork, Marrakech (2022-2023)
                      - Full-stack development
                      - E-commerce platform management
                    
                    • Capgemini, Casablanca (2021-2022)
                      - Energy sector projects
                      - API development and integration`,
                    fr: `Mon expérience professionnelle comprend:
                    • Actuel: Développeur Java/Angular Freelance (2023-Présent)
                      - Développement de solutions E-commerce
                      - Direction d'implémentations microservices
                    
                    • Upwork, Marrakech (2022-2023)
                      - Développement full-stack
                      - Gestion de plateforme E-commerce
                    
                    • Capgemini, Casablanca (2021-2022)
                      - Projets secteur énergétique
                      - Développement et intégration d'APIs`
                }
            },

            // Education Questions
            education: {
                keywords: [
                    // English variations
                    'educational background', 'academic background',
                    'what did you study', 'education history',
                    'academic qualifications', 'degrees',
                    'academic achievements', 'school background',
                    'university studies', 'academic education',
                    // French variations
                    'formation académique', 'parcours académique',
                    'qu\'avez-vous étudié', 'historique de formation',
                    'qualifications académiques', 'diplômes',
                    'réalisations académiques', 'parcours scolaire',
                    'études universitaires', 'éducation académique'
                ],
                response: {
                    en: `My educational background includes:
                    • Frontend Development Certification (2023)
                      - Board infinity
                      - Specialized in Angular development
                    
                    • Master MIAGE (2015-2018)
                      - École Marocaine Des Sciences de L'ingénieur
                      - Focus on Software Engineering and Management
                    
                    • DEUP in Software Engineering (2012-2015)
                      - Faculté polydisciplinaire d'Ouarzazate
                      - Computer Science fundamentals`,
                    fr: `Mon parcours éducatif comprend:
                    • Certification Développement Frontend (2023)
                      - Board infinity
                      - Spécialisation en développement Angular
                    
                    • Master MIAGE (2015-2018)
                      - École Marocaine Des Sciences de L'ingénieur
                      - Focus sur le Génie Logiciel et la Gestion
                    
                    • DEUP en Génie Logiciel (2012-2015)
                      - Faculté polydisciplinaire d'Ouarzazate
                      - Fondamentaux en informatique`
                }
            },

            // Strengths and Weaknesses
            strengthsWeaknesses: {
                keywords: [
                    // English variations
                    'what are your strengths', 'what are your weaknesses',
                    'strongest skills', 'areas for improvement',
                    'best qualities', 'development areas',
                    'what are you good at', 'what do you need to improve',
                    // French variations
                    'quelles sont vos forces', 'quelles sont vos faiblesses',
                    'meilleures compétences', 'axes d\'amélioration',
                    'meilleures qualités', 'domaines de développement',
                    'en quoi êtes-vous bon', 'que devez-vous améliorer'
                ],
                response: {
                    en: `Strengths:
                    • Strong problem-solving abilities
                    • Excellent technical expertise in Java and Angular
                    • Experience with microservices architecture
                    • Good communication and team collaboration
                    • Adaptability to new technologies
                    
                    Areas for Improvement:
                    • Continuously expanding cloud computing knowledge
                    • Enhancing project management skills
                    • Developing deeper DevOps expertise`,
                    fr: `Forces:
                    • Fortes capacités de résolution de problèmes
                    • Excellente expertise technique en Java et Angular
                    • Expérience en architecture microservices
                    • Bonne communication et collaboration d'équipe
                    • Adaptabilité aux nouvelles technologies
                    
                    Axes d'amélioration:
                    • Expansion continue des connaissances en cloud computing
                    • Amélioration des compétences en gestion de projet
                    • Développement d'une expertise plus approfondie en DevOps`
                }
            },

            // Career Goals Questions
            careerGoals: {
                keywords: [
                    // English variations
                    'what are your career goals', 'where do you see yourself',
                    'future plans', 'career objectives', 'professional goals',
                    'career aspirations', 'what do you want to achieve',
                    'professional development goals', 'career path',
                    // French variations
                    'quels sont vos objectifs de carrière', 'où vous voyez-vous',
                    'plans d\'avenir', 'objectifs professionnels',
                    'aspirations professionnelles', 'que voulez-vous réaliser',
                    'objectifs de développement professionnel', 'parcours professionnel'
                ],
                response: {
                    en: `My career goals include:
                    • Becoming a technical architect specializing in cloud-native solutions
                    • Contributing to open-source projects in the Java/Angular ecosystem
                    • Leading development teams on enterprise-scale projects
                    • Staying at the forefront of emerging technologies
                    • Sharing knowledge through technical writing and mentoring`,
                    fr: `Mes objectifs de carrière incluent:
                    • Devenir architecte technique spécialisé dans les solutions cloud-native
                    • Contribuer aux projets open-source dans l'écosystème Java/Angular
                    • Diriger des équipes de développement sur des projets d'entreprise
                    • Rester à la pointe des technologies émergentes
                    • Partager mes connaissances par l'écriture technique et le mentorat`
                }
            },

            // Problem Solving Approach
            problemSolving: {
                keywords: [
                    // English variations
                    'how do you solve problems', 'problem solving approach',
                    'technical challenges', 'handle difficulties',
                    'approach to challenges', 'methodology',
                    'how do you work', 'development process',
                    // French variations
                    'comment résolvez-vous les problèmes', 'approche de résolution',
                    'défis techniques', 'gérer les difficultés',
                    'approche des défis', 'méthodologie',
                    'comment travaillez-vous', 'processus de développement'
                ],
                response: {
                    en: `My approach to problem-solving involves:
                    1. Understanding the problem thoroughly
                    2. Breaking down complex issues into manageable components
                    3. Researching and evaluating multiple solutions
                    4. Implementing the most efficient solution
                    5. Testing and validating the results
                    6. Documenting the process and lessons learned`,
                    fr: `Mon approche de résolution de problèmes comprend:
                    1. Comprendre le problème en profondeur
                    2. Décomposer les problèmes complexes en composants gérables
                    3. Rechercher et évaluer plusieurs solutions
                    4. Mettre en œuvre la solution la plus efficace
                    5. Tester et valider les résultats
                    6. Documenter le processus et les leçons apprises`
                }
            },

            // Team Collaboration
            teamwork: {
                keywords: [
                    // English variations
                    'team work experience', 'collaboration style',
                    'working with others', 'team player',
                    'communication skills', 'team collaboration',
                    'how do you work in teams', 'team experience',
                    // French variations
                    'expérience de travail en équipe', 'style de collaboration',
                    'travailler avec les autres', 'esprit d\'équipe',
                    'compétences en communication', 'collaboration d\'équipe',
                    'comment travaillez-vous en équipe', 'expérience d\'équipe'
                ],
                response: {
                    en: `My approach to teamwork includes:
                    • Clear communication and active listening
                    • Regular knowledge sharing and pair programming
                    • Collaborative code reviews and feedback
                    • Agile methodology and sprint planning
                    • Cross-functional team collaboration
                    • Mentoring junior developers`,
                    fr: `Mon approche du travail en équipe comprend:
                    • Communication claire et écoute active
                    • Partage régulier de connaissances et programmation en binôme
                    • Revues de code collaboratives et feedback
                    • Méthodologie Agile et planification de sprint
                    • Collaboration avec des équipes pluridisciplinaires
                    • Mentorat des développeurs juniors`
                }
            },

            // Project Management
            projectManagement: {
                keywords: [
                    // English variations
                    'project management', 'how do you manage projects',
                    'project methodology', 'project approach',
                    'development methodology', 'agile experience',
                    'project planning', 'project execution',
                    // French variations
                    'gestion de projet', 'comment gérez-vous les projets',
                    'méthodologie de projet', 'approche de projet',
                    'méthodologie de développement', 'expérience agile',
                    'planification de projet', 'exécution de projet'
                ],
                response: {
                    en: `My project management approach includes:
                    • Agile/Scrum methodology implementation
                    • Sprint planning and backlog management
                    • Daily stand-ups and sprint retrospectives
                    • JIRA and Confluence for project tracking
                    • Risk management and mitigation strategies
                    • Continuous integration and deployment practices`,
                    fr: `Mon approche de gestion de projet comprend:
                    • Mise en œuvre de la méthodologie Agile/Scrum
                    • Planification des sprints et gestion du backlog
                    • Daily stand-ups et rétrospectives de sprint
                    • JIRA et Confluence pour le suivi de projet
                    • Gestion des risques et stratégies d'atténuation
                    • Pratiques d'intégration et de déploiement continus`
                }
            },

            // Greetings
            greetings: {
                keywords: [
                    // English variations
                    'hello', 'hi', 'hey', 'good morning', 'good afternoon', 
                    'good evening', 'greetings', 'howdy', 'hi there',
                    'hello there', 'morning', 'evening', 'afternoon',
                    // French variations
                    'bonjour', 'salut', 'bjr', 'bnj', 'bnjr', 'coucou',
                    'bonsoir', 'bon matin', 'bon après-midi', 'allô',
                    'slt', 'hello', 'hey', 'kikou', 'cc'
                ],
                response: {
                    en: [
                        "Hello! 👋 I'm excited to tell you about Achraf. What would you like to know?",
                        "Hi there! 😊 I'd be happy to share information about Achraf's experience and skills.",
                        "Greetings! I'm Achraf's AI assistant. How can I help you today?",
                        "Hello! Ready to discuss Achraf's portfolio and achievements. What interests you?"
                    ],
                    fr: [
                        "Bonjour! 👋 Je suis ravi de vous parler d'Achraf. Que souhaitez-vous savoir ?",
                        "Salut! 😊 Je serai heureux de partager les expériences et compétences d'Achraf.",
                        "Bonjour! Je suis l'assistant AI d'Achraf. Comment puis-je vous aider aujourd'hui ?",
                        "Salut! Prêt à discuter du portfolio et des réalisations d'Achraf. Qu'est-ce qui vous intéresse ?"
                    ]
                }
            }
        };
    }

    // Enhanced methods for better language handling and matching
    findBestMatch(userInput, language = 'en') {
        const input = userInput.toLowerCase();
        let bestMatch = null;
        let highestScore = 0;

        for (const [category, data] of Object.entries(this.qaDatabase)) {
            for (const keyword of data.keywords) {
                const score = this.calculateSimilarity(input, keyword);
                if (score > highestScore) {
                    highestScore = score;
                    bestMatch = category;
                }
            }
        }

        if (highestScore > 0.3) {
            // Special handling for greetings to get random response
            if (bestMatch === 'greetings') {
                const responses = this.qaDatabase[bestMatch].response[language];
                return responses[Math.floor(Math.random() * responses.length)];
            }
            return this.qaDatabase[bestMatch].response[language];
        }

        return language === 'fr' 
            ? "Je ne suis pas sûr de comprendre. Pourriez-vous reformuler votre question sur mon expérience, formation, compétences ou projets ?"
            : "I'm not sure about that. Could you rephrase your question about my experience, education, skills, or projects?";
    }

    calculateSimilarity(str1, str2) {
        const set1 = new Set(str1.split(' '));
        const set2 = new Set(str2.split(' '));
        const intersection = new Set([...set1].filter(x => set2.has(x)));
        const union = new Set([...set1, ...set2]);
        return intersection.size / union.size;
    }

    detectLanguage(input) {
        // Simple language detection based on common French words
        const frenchWords = ['je', 'tu', 'il', 'elle', 'nous', 'vous', 'ils', 'elles', 'le', 'la', 'les', 'un', 'une', 'des', 'qui', 'que', 'quoi', 'comment', 'pourquoi', 'où', 'quand'];
        const words = input.toLowerCase().split(' ');
        const frenchWordCount = words.filter(word => frenchWords.includes(word)).length;
        return frenchWordCount > 0 ? 'fr' : 'en';
    }

    // Method to get response based on language
    getResponse(category, language = 'en') {
        return this.qaDatabase[category].response[language];
    }

    // Method to get keywords for a category
    getKeywords(category) {
        return this.qaDatabase[category].keywords;
    }

    // Method to get all categories
    getCategories() {
        return Object.keys(this.qaDatabase);
    }
}

// Export the class for use in chat.js
// export default QuestionDatabase; 