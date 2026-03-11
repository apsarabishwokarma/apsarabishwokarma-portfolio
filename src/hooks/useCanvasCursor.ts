"use client";

import { useEffect } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Trail = {
  spring: number;
  friction: number;
  nodes: Node[];
};

const TRAILS = 20;
const SIZE = 50;
const FRICTION = 0.5;
const DAMPENING = 0.25;
const TENSION = 0.98;

const useCanvasCursor = (enabled: boolean) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) {
      return;
    }

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    let phase = Math.random() * Math.PI * 2;
    let animationFrame = 0;

    const makeNode = (): Node => ({
      x: pointer.x,
      y: pointer.y,
      vx: 0,
      vy: 0,
    });

    const trails: Trail[] = Array.from({ length: TRAILS }, (_, index) => ({
      spring: 0.4 + (index / TRAILS) * 0.025 + 0.1 * Math.random() - 0.02,
      friction: FRICTION + 0.01 * Math.random() - 0.002,
      nodes: Array.from({ length: SIZE }, makeNode),
    }));

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const updatePointer = (clientX: number, clientY: number) => {
      pointer.x = clientX;
      pointer.y = clientY;
    };

    const onMouseMove = (event: MouseEvent) => {
      updatePointer(event.clientX, event.clientY);
    };

    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        return;
      }
      updatePointer(event.touches[0].clientX, event.touches[0].clientY);
      event.preventDefault();
    };

    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length !== 1) {
        return;
      }
      updatePointer(event.touches[0].clientX, event.touches[0].clientY);
    };

    const drawTrail = (trail: Trail) => {
      let spring = trail.spring;
      const first = trail.nodes[0];
      first.vx += (pointer.x - first.x) * spring;
      first.vy += (pointer.y - first.y) * spring;

      for (let index = 0; index < trail.nodes.length; index += 1) {
        const node = trail.nodes[index];
        if (index > 0) {
          const previous = trail.nodes[index - 1];
          node.vx += (previous.x - node.x) * spring;
          node.vy += (previous.y - node.y) * spring;
          node.vx += previous.vx * DAMPENING;
          node.vy += previous.vy * DAMPENING;
        }

        node.vx *= trail.friction;
        node.vy *= trail.friction;
        node.x += node.vx;
        node.y += node.vy;
        spring *= TENSION;
      }

      context.beginPath();
      context.moveTo(trail.nodes[0].x, trail.nodes[0].y);

      for (let index = 1; index < trail.nodes.length - 1; index += 1) {
        const current = trail.nodes[index];
        const next = trail.nodes[index + 1];
        const x = (current.x + next.x) * 0.5;
        const y = (current.y + next.y) * 0.5;
        context.quadraticCurveTo(current.x, current.y, x, y);
      }

      const tail = trail.nodes[trail.nodes.length - 2];
      const end = trail.nodes[trail.nodes.length - 1];
      context.quadraticCurveTo(tail.x, tail.y, end.x, end.y);
      context.stroke();
      context.closePath();
    };

    const render = () => {
      phase += 0.0015;
      const hue = Math.round(285 + Math.sin(phase) * 85);

      context.globalCompositeOperation = "source-over";
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.globalCompositeOperation = "lighter";
      context.strokeStyle = `hsla(${hue}, 50%, 50%, 0.2)`;
      context.lineWidth = 1;

      trails.forEach(drawTrail);
      animationFrame = window.requestAnimationFrame(render);
    };

    resizeCanvas();
    render();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("orientationchange", resizeCanvas);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [enabled]);
};

export default useCanvasCursor;
