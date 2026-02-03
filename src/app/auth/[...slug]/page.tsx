import { AuthView } from '@neondatabase/auth/react';

export const dynamicParams = false;

export async function generateStaticParams() {
    const authRoutes = [
        'sign-in',
        'sign-up',
        'forgot-password',
        'reset-password',
        'magic-link',
        'email-otp',
        'two-factor',
        'recover-account',
        'accept-invitation',
        'callback',
        'sign-out',
    ];

    return authRoutes.map((route) => ({
        slug: [route],
    }));
}

export default async function AuthPage({ 
    params 
}: { 
    params: Promise<{ slug: string[] }> 
}) {
    const { slug } = await params;
    const pathname = `/auth/${slug.join('/')}`;

    return (
        <main className="container mx-auto flex grow flex-col items-center justify-center gap-3 self-center p-4 md:p-6">
            <AuthView pathname={pathname} />
        </main>
    );
}