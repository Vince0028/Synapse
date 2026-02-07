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
            const starCount = Math.floor((width * height) / theme.starCountDivisor);
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1.5, // Slightly smaller
                    opacity: Math.random(),
                    flickerOffset: Math.random() * 100
                });
            }
        };

        const drawStars = () => {
            stars.forEach(star => {
                const flicker = Math.sin(Date.now() * 0.002 + star.flickerOffset) * 0.4;
                ctx.fillStyle = `${theme.starColor} ${Math.max(0, star.opacity + flicker)})`;
                ctx.beginPath();
                // Optimization: Use rect instead of arc for stars (faster rendering)
                ctx.fillRect(star.x, star.y, star.size, star.size);
            });
        };

        const drawAurora = (time: number) => {
            // Optimization: Reduce curtains and increase step size
            const curtains = 3;
            const speed = 1.0;
            const intensity = resolvedTheme === 'dark' ? 0.7 : 0.5; // Softer in light mode

            const t = time * 0.0002 * speed; // Slower time for smoothness
            const baseAlpha = intensity;

            for (let c = 0; c < curtains; c++) {
                const curtainOffset = c * 150; // Spacing
                const opacity = (baseAlpha / curtains) * (1 - c / curtains * 0.5);

                // Optimization: Step 6 instead of 2 (3x fewer draw calls)
                for (let x = 0; x <= width; x += 6) {
                    const waveX = x * 0.002;
                    const noise = Math.sin(waveX + t + curtainOffset * 0.01) * 80 +
                        Math.sin(waveX * 2.5 - t * 0.5) * 40;

                    // Start lower (55% down instead of 40%)
                    const yPos = height * (0.55 + c * 0.08) + noise;
                    // Shorter rays to prevent reaching header
                    const rayHeight = 250 + Math.sin(x * 0.008 + t + c) * 100;

                    // Optimization: Create gradient only once per curtain or per frame? 
                    // Per vertical line is expensive but necessary for the effect.
                    // We can't easily optimize this out without changing the look significantly.
                    const grad = ctx.createLinearGradient(0, yPos - rayHeight, 0, yPos);
                    grad.addColorStop(0, 'transparent');
                    grad.addColorStop(0.2, theme.primary);
                    grad.addColorStop(0.7, theme.secondary);
                    grad.addColorStop(1, 'transparent');

                    ctx.strokeStyle = grad;
                    ctx.globalAlpha = opacity * (Math.sin(x * 0.05 + t * 2) * 0.2 + 0.8);
                    // Optimization: Thicker line to cover gaps from larger step
                    ctx.lineWidth = 4; // match step size roughly
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

        const render = (time: number) => {
            // Background clear
            ctx.fillStyle = theme.sky;
            ctx.fillRect(0, 0, width, height);

            // Sky glow
            const skyGrad = ctx.createRadialGradient(width / 2, height * 0.4, 0, width / 2, height * 0.4, width);
            skyGrad.addColorStop(0, theme.sky);
            skyGrad.addColorStop(1, resolvedTheme === 'dark' ? '#000000' : '#e2e8f0'); // Dark vs Slate-200
            ctx.fillStyle = skyGrad;
            ctx.fillRect(0, 0, width, height);

            drawStars();
            drawAurora(time);

            animationFrameId = requestAnimationFrame(render);
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
