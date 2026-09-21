'use client';

import { MotionConfig } from 'framer-motion';

interface MotionProviderWrapperProps {
  children: React.ReactNode;
}

/**
 * Aplica `prefers-reduced-motion` a TODAS as animações do framer-motion
 * na árvore de componentes, de uma vez só. Com `reducedMotion="user"`,
 * o framer-motion detecta a preferência do sistema operacional/navegador
 * do usuário e substitui automaticamente animações de posição/escala por
 * transições instantâneas (mantendo fade quando fizer sentido), sem que
 * cada seção precise implementar essa checagem individualmente.
 *
 * Ver: https://www.framer.com/motion/motion-config/#reduced-motion
 */
export default function MotionProviderWrapper({
  children,
}: MotionProviderWrapperProps) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
