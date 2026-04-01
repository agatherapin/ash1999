export interface Project {
    title: string;
    subtitle: string;
    description: string;
    fullDescription?: string;
    tags: string[];
    image: string;
    video?: string;
    gallery: string[];
    width: number;
    aspectRatio: number;
    top: number;
    left: number;
}

export const projects: Project[] = [
    {
        title: 'Internship with PMF music label',
        subtitle: 'Jan to March 2025',
        description: 'I worked on the logo and mockups for Rare, a brand created by ThaHomey\'s music label.',
        tags: ['Branding'],
        image: '/img/rare-stage/back-cover.webp',
        gallery: [
            '/img/rare-stage/front-cover.webp', '/img/rare-stage/rapport-front-back.webp',
            '/img/rare-stage/planche-logo-finale.webp', '/img/rare-stage/mockup-tee-stretch.webp',
            '/img/rare-stage/mockup-tee-outline.webp', '/img/rare-stage/planche-logo-test.webp',
            '/img/rare-stage/rapport-moodboard.webp', '/img/rare-stage/rapport-problematique.webp',
            '/img/rare-stage/rapport-1.webp', '/img/rare-stage/rapport-2.webp',
            '/img/rare-stage/rapport-3.webp', '/img/rare-stage/rapport-4.webp',
            '/img/rare-stage/rapport-5.webp', '/img/rare-stage/rapport-6.webp',
            '/img/rare-stage/rapport-7.webp', '/img/rare-stage/rapport-8.webp',
            '/img/rare-stage/rapport-9.webp'
        ],
        width: 240,
        aspectRatio: 0.8,
        top: 45,
        left: 60
    },
    {
        title: 'Suburban',
        subtitle: 'Jan 2024',
        description: 'Trifold brochure to promote a fictional festival around rap music. Suburban is the name of a fictitious organization about urban culture, streetwear & rap music.',
        tags: ['Branding', 'Print', 'Typography'],
        image: '/img/suburban/titre-motion.mp4',
        video: '/img/suburban/titre-motion.mp4',
        gallery: ['/img/suburban/exterieur-mockup-suburban.webp', '/img/suburban/interieur-mockup-suburban.webp', '/img/suburban/logo.webp'],
        width: 240,
        aspectRatio: 0.8,
        top: 8,
        left: 50
    },
    {
        title: 'La Pampa introduction',
        subtitle: 'March 2026',
        description: 'Video for my project La Pampa, a media for local artists and events.',
        tags: ['Motion Design'],
        image: 'https://pub-4640cb8748ff42a1bb9564c86066b471.r2.dev/motion-la-pampa.mp4',
        video: 'https://pub-4640cb8748ff42a1bb9564c86066b471.r2.dev/motion-la-pampa.mp4',
        gallery: ['video:https://pub-4640cb8748ff42a1bb9564c86066b471.r2.dev/motion-la-pampa.mp4'],
        width: 350,
        aspectRatio: 1.778,
        top: 80,
        left: 55
    },
    {
        title: 'Wandanlage',
        subtitle: 'June 2024',
        description: 'As a great fan of Dieter Rams work, I decided to dedicate this web design project to the wall unit he designed for Braun in the 60s.',
        tags: ['Web Design'],
        image: '/img/wandanlage/cover-landing-page.webp',
        gallery: ['video:https://pub-4640cb8748ff42a1bb9564c86066b471.r2.dev/wandalange_maquette_v1%20(1080p).mp4', '/img/wandanlage/page-close-up-platine.webp', '/img/wandanlage/page-previsualisation.webp', '/img/wandanlage/page-404.webp', '/img/wandanlage/scroll-horizontal.webp', '/img/wandanlage/footer.webp'],
        width: 340,
        aspectRatio: 1.7,
        top: 65,
        left: 74
    },
    {
        title: 'Skyjo',
        subtitle: 'April 2025',
        description: 'The aim of this workshop was to create a brand new, fun and attractive design for this extraordinary game!',
        tags: ['Packaging', 'Branding', 'Print'],
        image: '/img/skyjo/jeu-complet-cover.webp',
        gallery: ['/img/skyjo/jeu-entier.webp', '/img/skyjo/packaging.webp', '/img/skyjo/mise-en-scene.webp', '/img/skyjo/cartes.webp', '/img/skyjo/jeu-complet-range.webp', '/img/skyjo/detail-packaging.webp'],
        width: 240,
        aspectRatio: 0.8,
        top: 55,
        left: 92
    },
    {
        title: 'Interférences exhibition',
        subtitle: 'November 2024',
        description: 'The Interférences exhibition revolves around mapping and motion design, and showcases the work of third-year motion design students at E-artsup.',
        tags: ['Branding', 'Print', 'Motion Design'],
        image: '/img/interferences/motion-interferences.mp4',
        video: '/img/interferences/motion-interferences.mp4',
        gallery: ['/img/interferences/affiche-la-cale.webp', '/img/interferences/affiche-interferences.webp', '/img/interferences/flyer-face.webp', '/img/interferences/flyer-verso.webp', 'video:/img/interferences/motion-interferences.mp4'],
        width: 240,
        aspectRatio: 0.7,
        top: 17,
        left: 20
    },
    {
        title: 'Typographic Lexicon',
        subtitle: 'October 2023',
        description: 'This lexicon is designed to help students learn about typography. It covers the essentials of typographic vocabulary and technical terms, and traces the history of typefaces.',
        tags: ['Typography', 'Print'],
        image: '/img/lexique-typographique/cover.webp',
        gallery: [
            '/img/lexique-typographique/cover.webp', '/img/lexique-typographique/sommaire.webp',
            '/img/lexique-typographique/lexique-typo-1.webp', '/img/lexique-typographique/lexique-typo-2.webp',
            '/img/lexique-typographique/lexique-typo-3.webp', '/img/lexique-typographique/lexique-typo-4.webp',
            '/img/lexique-typographique/lexique-typo-5.webp', '/img/lexique-typographique/lexique-typo-6.webp',
            '/img/lexique-typographique/lexique-typo-7.webp', '/img/lexique-typographique/lexique-typo-8.webp',
            '/img/lexique-typographique/lexique-typo-9.webp', '/img/lexique-typographique/lexique-typo-10.webp',
            '/img/lexique-typographique/lexique-typo-12.webp', '/img/lexique-typographique/lexique-typo-15.webp',
        ],
        width: 340,
        aspectRatio: 1.3,
        top: 70,
        left: 33
    },
    {
        title: 'Pick your poison, Art cover',
        subtitle: 'December 2025',
        description: 'Fictional cover made with playdough for the song Pick Your Poison, by Killowen.',
        tags: ['Music', 'Mix media', 'Typography'],
        image: '/img/pick-your-poison/cover.webp',
        gallery: ['/img/pick-your-poison/cover.webp', '/img/pick-your-poison/head-dead.webp', '/img/pick-your-poison/head-heart.webp', '/img/pick-your-poison/mockup-cover.webp'],
        width: 330,
        aspectRatio: 1.0,
        top: 87,
        left: 1
    },
    {
        title: 'Poster Bushi - Batman',
        subtitle: '2024',
        description: 'Poster design using Carta Nueva font from Sharp Type.',
        tags: ['Music'],
        image: '/img/music-visuals/poster-bushi-batman.webp',
        gallery: ['/img/music-visuals/poster-bushi-batman.webp', '/img/music-visuals/cd-mockup-bushi-batman.webp', '/img/music-visuals/jolagreen-poster.webp'],
        width: 240,
        aspectRatio: 0.707,
        top: 32,
        left: 5
    },
    {
        title: 'Drawing gallery',
        subtitle: 'From 2020 to 2025',
        description: 'Collection of various drawings and artworks.',
        tags: ['Illustration'],
        image: '/img/dessins/astronaute.webp',
        gallery: [
            '/img/dessins/chromakopia.webp',
            '/img/dessins/jardin-des-plantes.webp', '/img/dessins/japan_street.webp',
            '/img/dessins/astronaute.webp', '/img/dessins/metropolitan.webp',
            '/img/dessins/samourai.webp', '/img/dessins/profil-encre-de-chine.webp',
            '/img/dessins/tombeau-des-lucioles.webp', '/img/typographie/hbd-procreate.webp',
        ],
        width: 240,
        aspectRatio: 0.707,
        top: 32,
        left: 36
    },
    {
        title: 'Gaussian Splatting',
        subtitle: 'February 2026',
        description: '3D scanning and audio-reactive experiments in TouchDesigner using Gaussian Splats, during a workshop at Stéréolux, Nantes.',
        tags: ['Interactive', 'Motion Design'],
        image: 'https://pub-4640cb8748ff42a1bb9564c86066b471.r2.dev/GaussianSplat_Agathe.mp4',
        video: 'https://pub-4640cb8748ff42a1bb9564c86066b471.r2.dev/GaussianSplat_Agathe.mp4',
        gallery: ['video:https://pub-4640cb8748ff42a1bb9564c86066b471.r2.dev/GaussianSplat_Agathe.mp4',  'video:/img/interactive%20design/fridge-details-scan.mp4', '/img/interactive%20design/profile-scan-1.webp', '/img/interactive%20design/profile-scan.webp', 'video:/img/interactive%20design/img-flowers.mp4', 'video:/img/interactive%20design/shoes-scan.mp4', 'video:/img/interactive%20design/media-pipe-exp.mp4'],
        width: 290,
        aspectRatio: 1.2,
        top: 20,
        left: 85
    },
    {
        title: 'Motion for Muji',
        subtitle: 'December 2025',
        description: 'Short video to promote the Wall Mounted CD Player from Muji.',
        tags: ['Motion Design'],
        image: 'https://pub-4640cb8748ff42a1bb9564c86066b471.r2.dev/RAPIN_AGATHE_MOTION.mp4',
        video: 'https://pub-4640cb8748ff42a1bb9564c86066b471.r2.dev/RAPIN_AGATHE_MOTION.mp4',
        gallery: ['video:https://pub-4640cb8748ff42a1bb9564c86066b471.r2.dev/RAPIN_AGATHE_MOTION.mp4'],
        width: 340,
        aspectRatio: 1.778,
        top: 90,
        left: 78
    }
];
