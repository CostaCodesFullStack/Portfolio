import { Variants } from 'framer-motion';

/**
 * Variants reutilizáveis para animações de entrada por seção.
 *
 * Uso típico:
 *   <motion.div variants={container} initial="hidden" animate={inView ? 'show' : 'hidden'}>
 *     <motion.div variants={item}>...</motion.div>
 *     <motion.div variants={item}>...</motion.div>
 *   </motion.div>
 *
 * O framer-motion aplica o `staggerChildren` automaticamente a cada filho
 * direto que tiver `variants={item}` — não precisa mais calcular
 * `delay: 0.4 + index * 0.1` manualmente em cada `.map()`.
 */
export const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/**
 * Fade + slide-up simples para elementos que não fazem parte de uma
 * lista com stagger (ex: título de seção, badge isolado).
 */
export const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  },
});
