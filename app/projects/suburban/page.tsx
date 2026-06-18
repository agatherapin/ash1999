import type { Metadata } from 'next';
import ProjectShowcase from '@/components/ProjectShowcase';
import { projectMetadata } from '@/lib/seo';

export const metadata: Metadata = projectMetadata('suburban');

const images = [
    '/img/suburban/exterieur-mockup-suburban.webp',
    '/img/suburban/interieur-mockup-suburban.webp',
    '/img/suburban/logo.webp',
];

const credits = [
    'Suburban is the name of a fictitious music, rap, urban culture and streetwear organization. <br>Creation of a trifold brochure to promote the festival.',
    '3D logo design, editorial work & text by me',
    'date: january 2024',
];

export default function SuburbanProject() {
    return (
        <ProjectShowcase
            backgroundVideo="/img/suburban/titre-motion.mp4"
            titleLines={['suburban', 'rap music & urban culture']}
            credits={credits}
            images={images}
        />
    );
}
