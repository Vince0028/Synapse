import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

const AURORA_THEME_DARK = {
    name: 'Classic Arctic',
    primary: '#00ff95',
    secondary: '#00ffcc',
    sky: '#020b16',
    starColor: 'rgba(255, 255, 255,',
    starCountDivisor: 2000,
};

const AURORA_THEME_LIGHT = {
    name: 'Daylight Aurora',
    primary: '#38bdf8', // Sky 400
    secondary: '#818cf8', // Indigo 400
    sky: '#f8fafc', // Slate 50
    starColor: 'rgba(100, 116, 139,', // Slate 500 (visible on light bg)
    starCountDivisor: 6000, // Fewer stars in light mode
};

export function NorthernLightsBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: false }); // Optimize for no transparency on canvas itself
        if (!ctx) return;

        // Use current theme
        const theme = resolvedTheme === 'dark' ? AURORA_THEME_DARK : AURORA_THEME_LIGHT;

        let animationFrameId: number;
        let width: number, height: number;

        interface Star {
            x: number;
            y: number;
            size: number;
            opacity: number;
            flickerOffset: number;
        }

        let stars: Star[] = [];

        const initStars = () => {
            stars = [];
            // Optimize: Significantly fewer stars
            const starCount = Math.floor((width * height) / (theme.starCountDivisor * 2));
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1.5,
                    opacity: Math.random(),
                    flickerOffset: Math.random() * 100
                });
            }
        };

        const drawStars = () => {
            ctx.fillStyle = theme.starColor + " 0.8)"; // Batch fill style change
            stars.forEach(star => {
                // Optimize: Simple flickering, skip Math.sin for every star every frame if possible
                // heavily simplified flicker
                if (Math.random() > 0.95) {
                    star.opacity = Math.random();
                }
                ctx.globalAlpha = star.opacity;
                ctx.fillRect(star.x, star.y, star.size, star.size);
            });
            ctx.globalAlpha = 1;
        };

        const drawAurora = (time: number) => {
            // Optimize: Reduce curtains and increase step size
            const curtains = 2; // Reduced from 3
            const speed = 0.5; // Slower speed
            const intensity = resolvedTheme === 'dark' ? 0.6 : 0.4;

            const t = time * 0.0002 * speed;
            const baseAlpha = intensity;

            for (let c = 0; c < curtains; c++) {
                const curtainOffset = c * 150;
                const opacity = (baseAlpha / curtains) * (1 - c / curtains * 0.5);

                // Optimize: Step 10 instead of 6 (fewer draw calls)
                for (let x = 0; x <= width; x += 10) {
                    const waveX = x * 0.002;
                    const noise = Math.sin(waveX + t + curtainOffset * 0.01) * 80 +
                        Math.sin(waveX * 2.5 - t * 0.5) * 40;

                    const yPos = height * (0.55 + c * 0.08) + noise;
                    const rayHeight = 250 + Math.sin(x * 0.008 + t + c) * 100;

                    const grad = ctx.createLinearGradient(0, yPos - rayHeight, 0, yPos);
                    grad.addColorStop(0, 'transparent');
                    grad.addColorStop(0.2, theme.primary);
                    grad.addColorStop(0.7, theme.secondary);
                    grad.addColorStop(1, 'transparent');

                    ctx.strokeStyle = grad;
                    ctx.globalAlpha = opacity * 0.8; // Simplifed alpha calc
                    ctx.lineWidth = 6; // Thicker lines for larger step
                    ctx.beginPath();
                    ctx.moveTo(x, yPos);
                    ctx.lineTo(x, yPos - rayHeight);
                    ctx.stroke();
                }
            }
            ctx.globalAlpha = 1;
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        };

        let lastFrameTime = 0;
        const targetFPS = 30; // Limit to 30 FPS
        const frameInterval = 1000 / targetFPS;

        const render = (time: number) => {
            animationFrameId = requestAnimationFrame(render);

            const elapsed = time - lastFrameTime;
            if (elapsed < frameInterval) return;

            lastFrameTime = time - (elapsed % frameInterval);

            // Background clear
            ctx.fillStyle = theme.sky;
            ctx.fillRect(0, 0, width, height);

            // Sky glow - maybe static? 
            // Calculated once per frame is fine, it's just one rect.
            const skyGrad = ctx.createRadialGradient(width / 2, height * 0.4, 0, width / 2, height * 0.4, width);
            skyGrad.addColorStop(0, theme.sky);
            skyGrad.addColorStop(1, resolvedTheme === 'dark' ? '#000000' : '#e2e8f0');
            ctx.fillStyle = skyGrad;
            ctx.fillRect(0, 0, width, height);

            drawStars();
            drawAurora(time);
        };

        window.addEventListener('resize', resize);
        resize();
        render(0);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [resolvedTheme]); // Re-run when theme changes

    return (
        <div className="fixed inset-0 -z-10 bg-background overflow-hidden pointer-events-none transition-colors duration-500" aria-hidden="true">
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
