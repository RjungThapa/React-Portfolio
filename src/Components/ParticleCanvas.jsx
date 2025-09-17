import React, { useRef, useEffect } from 'react';

const ParticleCanvas = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const stepCount = useRef(0);
    const animationFrame = useRef(null);

    const lifespan = 300;
    const popPerBirth = 5;
    const maxPop = 1500;
    const birthFreq = 1;

    const baseK = 7;
    const eddies = [
        { x: -300, y: -300, K: 10 * baseK, r0: 180 },
        { x: 300, y: -300, K: 15 * baseK, r0: 150 },
        { x: 300, y: 300, K: 10 * baseK, r0: 250 },
        { x: -300, y: 300, K: 15 * baseK, r0: 150 },
        { x: 0, y: 0, K: 5 * baseK, r0: 20 }
    ];

    const segmentAngleRad = (Xstart, Ystart, Xtarget, Ytarget, realOrWeb) => {
        let result;
        if (Xstart === Xtarget) {
            if (Ystart === Ytarget) {
                result = 0;
            } else if (Ystart < Ytarget) {
                result = Math.PI / 2;
            } else {
                result = (3 * Math.PI) / 2;
            }
        } else if (Xstart < Xtarget) {
            result = Math.atan((Ytarget - Ystart) / (Xtarget - Xstart));
        } else {
            result = Math.PI + Math.atan((Ytarget - Ystart) / (Xtarget - Xstart));
        }
        result = (result + 2 * Math.PI) % (2 * Math.PI);
        if (!realOrWeb) {
            result = 2 * Math.PI - result;
        }
        return result;
    };

    const birthParticle = () => {
        const x = -800 + 1600 * Math.random();
        const y = -800 + 1600 * Math.random();
        particles.current.push({
            hue: 220 + Math.random() * 5, // very soft blue-gray
            sat: 5 + Math.random() * 5,   // desaturated
            lum: 90 + Math.random() * 8,  // close to white
            x,
            y,
            xLast: x,
            yLast: y,
            xSpeed: 0,
            ySpeed: 0,
            age: 0,
            name: 'seed-' + Math.ceil(10000000 * Math.random())
        });
    };

    const killParticle = (name) => {
        particles.current = particles.current.filter(p => p.name !== name);
    };

    const animate = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        const dataToImageRatio = Math.max(width, height) / 1000;
        const xC = width / 2;
        const yC = height / 2;

        const dataXYtoCanvasXY = (x, y) => {
            const zoom = 0.72;
            return {
                x: xC + x * zoom * dataToImageRatio,
                y: yC + y * zoom * dataToImageRatio
            };
        };

        stepCount.current++;
        if (
            stepCount.current % birthFreq === 0 &&
            particles.current.length + popPerBirth < maxPop
        ) {
            for (let i = 0; i < popPerBirth; i++) {
                birthParticle();
            }
        }

        // Move
        particles.current.forEach(p => {
            p.xLast = p.x;
            p.yLast = p.y;
            p.xSpeed = 0;
            p.ySpeed = 0;

            eddies.forEach(eddy => {
                const dx = p.x - eddy.x;
                const dy = p.y - eddy.y;
                const r = Math.sqrt(dx * dx + dy * dy);
                const theta = segmentAngleRad(0, 0, dx, dy, true);
                const cos = Math.cos(theta);
                const sin = Math.sin(theta);
                const er = { x: cos, y: sin };
                const eO = { x: -sin, y: cos };
                const radialVelocity = -0.003 * eddy.K * Math.abs(dx * dy) / 3000;
                const sigma = 100;
                const azimutalVelocity = eddy.K * Math.exp(-Math.pow((r - eddy.r0) / sigma, 2));
                p.xSpeed += radialVelocity * er.x + azimutalVelocity * eO.x;
                p.ySpeed += radialVelocity * er.y + azimutalVelocity * eO.y;
            });

            const visc = 1;
            p.xSpeed *= visc;
            p.ySpeed *= visc;
            p.speed = Math.sqrt(p.xSpeed ** 2 + p.ySpeed ** 2);
            p.x += 0.1 * p.xSpeed;
            p.y += 0.1 * p.ySpeed;
            p.age++;

            if (p.age > lifespan) {
                killParticle(p.name);
            }
        });

        // Draw
        ctx.fillStyle = 'rgba(255,255,255,0.02)';
        ctx.fillRect(0, 0, width, height);

        particles.current.forEach(p => {
            const { x, y } = dataXYtoCanvasXY(p.x, p.y);
            const { x: xLast, y: yLast } = dataXYtoCanvasXY(p.xLast, p.yLast);
            const a = 0.3 + p.speed / 400;
            const size = 0.4 * (3 - 4 * p.age / 500);
            ctx.strokeStyle = `hsla(${p.hue}, ${p.sat}%, ${p.lum}%, ${a})`;
            ctx.lineWidth = 1 * size * dataToImageRatio;
            ctx.beginPath();
            ctx.moveTo(xLast, yLast);
            ctx.lineTo(x, y);
            ctx.stroke();
        });

        animationFrame.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        ctx.globalCompositeOperation = 'darker';
        ctx.imageSmoothingEnabled = false;

        // Initial white background
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        animate();

        return () => cancelAnimationFrame(animationFrame.current);
    }, []);

    return <canvas
        ref={canvasRef}
        className="particle-canvas"
    />
        ;
};

export default ParticleCanvas;
