import type { Metadata } from 'next';
import { projects } from '@/data/projects';

const STATIC_IMAGE = /\.(webp|png|jpe?g|gif)$/i;

export function projectMetadata(slug: string): Metadata {
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};

    const ogImage = STATIC_IMAGE.test(project.image)
        ? project.image
        : project.gallery.find((src) => STATIC_IMAGE.test(src)) ?? '/img/social-share.webp';

    const title = `${project.title} — ash1999`;
    const description = project.description;
    const url = `/projects/${project.slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            images: [{ url: ogImage, width: 1200, height: 630, alt: project.title }],
            type: 'article',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}
