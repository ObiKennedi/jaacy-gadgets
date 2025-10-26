import "./globals.scss";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <main className="auth-layout">
            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                src="/video/gvid.mp4"
                aria-hidden="true"
            />
            {children}
        </main>
    );
};

export default AuthLayout;
