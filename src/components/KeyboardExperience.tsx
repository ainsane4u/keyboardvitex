'use client';
import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';

const FRAME_COUNT = 358;
const CLOUDINARY_BASE_URL = "https://res.cloudinary.com/dacwce9cv/image/upload/q_auto/f_auto/v1780949990/keyboard";

export default function KeyboardExperience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 85,
        damping: 25,
        restDelta: 0.0001
    });

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            const paddedIndex = String(i).padStart(6, '0');

            if (i === 0) {
                img.src = `${CLOUDINARY_BASE_URL}/frame_000000_dpdrbi.jpg`;
            } else {
                img.src = `${CLOUDINARY_BASE_URL}/frame_${paddedIndex}.jpg`;
            }

            img.onload = () => {
                loadedCount++;
                setLoadingProgress(Math.floor((loadedCount / FRAME_COUNT) * 100));
                if (loadedCount === FRAME_COUNT) {
                    setIsLoading(false);
                    renderCanvas(0);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const renderCanvas = (index: number) => {
        if (images[index] && canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            if (ctx) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;

                const img = images[index];
                const canvasAspect = window.innerWidth / window.innerHeight;
                const imgAspect = img.width / img.height;

                let drawWidth, drawHeight, offsetX, offsetY;

                if (canvasAspect > imgAspect) {
                    drawWidth = window.innerWidth;
                    drawHeight = drawWidth / imgAspect;
                    offsetX = 0;
                    offsetY = (window.innerHeight - drawHeight) / 2;
                } else {
                    drawHeight = window.innerHeight;
                    drawWidth = drawHeight * imgAspect;
                    offsetX = (window.innerWidth - drawWidth) / 2;
                    offsetY = 0;
                }

                ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
            }
        }
    };

    useEffect(() => {
        return smoothProgress.onChange((v) => {
            const index = Math.floor(v * (FRAME_COUNT - 1));
            const safeIndex = Math.max(0, Math.min(index, FRAME_COUNT - 1));
            renderCanvas(safeIndex);
        });
    }, [images, smoothProgress]);

    const beatA_Opacity = useTransform(smoothProgress, [0, 0.1, 0.15, 0.25], [0, 1, 1, 0]);
    const beatA_Y = useTransform(smoothProgress, [0, 0.1, 0.25], [30, 0, -30]);

    const beatB_Opacity = useTransform(smoothProgress, [0.35, 0.42, 0.52, 0.6], [0, 1, 1, 0]);
    const beatB_Y = useTransform(smoothProgress, [0.35, 0.42, 0.6], [30, 0, -30]);

    const beatC_Opacity = useTransform(smoothProgress, [0.72, 0.82, 0.92, 0.98], [0, 1, 1, 0]);
    const beatC_Y = useTransform(smoothProgress, [0.72, 0.82, 0.98], [20, 0, -20]);

    return (
        <div ref={containerRef} className="relative h-[650vh]">
            {isLoading && (
                <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#E7E3DC]">
                    <div className="text-center space-y-4">
                        <h3 className="font-serif text-2xl tracking-wide text-neutral-800">AETERNA</h3>
                        <div className="h-[1px] bg-neutral-300 w-48 mx-auto overflow-hidden relative">
                            <motion.div
                                className="absolute h-full bg-amber-700 left-0 top-0"
                                initial={{ width: 0 }}
                                animate={{ width: `${loadingProgress}%` }}
                            />
                        </div>
                        <p className="font-mono text-[9px] text-neutral-500 tracking-[0.2em] uppercase">Forging Assets... {loadingProgress}%</p>
                    </div>
                </div>
            )}

            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />

                <motion.div style={{ opacity: beatA_Opacity, y: beatA_Y }} className="absolute inset-x-0 bottom-24 flex flex-col items-center justify-center pointer-events-none text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-serif text-neutral-900 tracking-tight">AETERNA</h1>
                    <p className="text-neutral-700/80 max-w-sm font-light text-sm tracking-wide mt-3">Engineered for eternity.</p>
                </motion.div>

                <motion.div style={{ opacity: beatB_Opacity, y: beatB_Y }} className="absolute left-6 md:left-24 top-1/3 max-w-sm pointer-events-none">
                    <span className="font-mono text-xs text-amber-800/80 tracking-widest uppercase">// THE LOGO MARK</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 mt-2 mb-4">Precision Branding.</h2>
                    <p className="text-neutral-700/80 font-light text-base leading-relaxed">Carved directly into pristine walnut timbers with ultra-fine precision tooling.</p>
                </motion.div>

                <motion.div style={{ opacity: beatC_Opacity, y: beatC_Y }} className="absolute right-6 md:right-24 top-1/2 -translate-y-1/2 max-w-sm text-right pointer-events-none">
                    <span className="font-mono text-xs text-amber-800/80 tracking-widest uppercase">// SWITCH ARCHITECTURE</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-neutral-900 mt-2 mb-4">Pure Translucency.</h2>
                    <p className="text-neutral-700/80 font-light text-base leading-relaxed">Custom mechanical housings capture atmospheric volumetric cloud reflections.</p>
                </motion.div>

                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-500/60 font-mono text-[9px] tracking-[0.4em] uppercase pointer-events-none"
                >
                    Scroll to explore
                </motion.div>
            </div>
        </div>
    );
}
