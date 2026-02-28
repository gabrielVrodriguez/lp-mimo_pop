"use client"

import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react"
import { motion, useInView, type Variant } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

type Direction = "up" | "down" | "left" | "right" | "none"

// Pre-built outside any render — stable identity, no remounting
const motionElements = {
  div: motion.div,
  span: motion.span,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  header: motion.header,
  footer: motion.footer,
  main: motion.main,
  nav: motion.nav,
  ul: motion.ul,
  li: motion.li,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  button: motion.button,
  a: motion.a,
  form: motion.form,
  label: motion.label,
  input: motion.input,
  textarea: motion.textarea,
} as const

type MotionTag = keyof typeof motionElements

interface ScrollRevealProps<T extends ElementType = "div"> {
  as?: T
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  distance?: number
  threshold?: number
  once?: boolean
  className?: string
  easing?: [number, number, number, number]
  scaleFrom?: number
}

type ScrollRevealComponentProps<T extends ElementType = "div"> = ScrollRevealProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ScrollRevealProps<T>>

function getInitialOffset(direction: Direction, distance: number): { x: number; y: number } {
  switch (direction) {
    case "up":    return { x: 0, y: distance }
    case "down":  return { x: 0, y: -distance }
    case "left":  return { x: distance, y: 0 }
    case "right": return { x: -distance, y: 0 }
    case "none":  return { x: 0, y: 0 }
  }
}

export function ScrollReveal<T extends ElementType = "div">({
  as,
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  distance = 40,
  threshold = 0.15,
  once = true,
  className,
  easing = [0.16, 1, 0.3, 1] as [number, number, number, number],
  scaleFrom,
  ...rest
}: ScrollRevealComponentProps<T>) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: threshold, margin: "0px 0px -50px 0px" })

  const offset = getInitialOffset(direction, distance)
  const delayInSeconds = delay / 1000
  const durationInSeconds = duration / 1000

  const hidden: Variant = {
    opacity: 0,
    x: offset.x,
    y: offset.y,
    ...(scaleFrom !== undefined && { scale: scaleFrom }),
  }

  const visible: Variant = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scaleFrom !== undefined && { scale: 1 }),
    transition: {
      duration: durationInSeconds,
      delay: delayInSeconds,
      ease: easing,
    },
  }

  const tag = (as ?? "div") as string
  const MotionComponent = (
    tag in motionElements ? motionElements[tag as MotionTag] : motion.div
  ) as typeof motion.div

  return (
    <MotionComponent
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden, visible }}
      {...(rest as object)}
    >
      {children}
    </MotionComponent>
  )
}

/**
 * Helper: wraps children with staggered delays.
 *
 * Example:
 * <ScrollRevealGroup baseDelay={0} stagger={100} direction="up">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </ScrollRevealGroup>
 */
interface ScrollRevealGroupProps {
  children: ReactNode[]
  /** Base delay before first item in ms. Default: 0 */
  baseDelay?: number
  /** Delay increment between items in ms. Default: 100 */
  stagger?: number
  /** Animation direction for each item. Default: "up" */
  direction?: Direction
  /** Duration per item in ms. Default: 700 */
  duration?: number
  /** Distance per item. Default: 40 */
  distance?: number
  /** Viewport amount. Default: 0.1 */
  threshold?: number
  /** className for each wrapper */
  itemClassName?: string
  /** className for the group container */
  className?: string
  /** Scale from for each item */
  scaleFrom?: number
}

export function ScrollRevealGroup({
  children,
  baseDelay = 0,
  stagger = 100,
  direction = "up",
  duration = 700,
  distance = 40,
  threshold = 0.1,
  itemClassName,
  className,
  scaleFrom,
}: ScrollRevealGroupProps) {
  return (
    <div className={cn(className)}>
      {children.map((child, index) => (
        <ScrollReveal
          key={index}
          direction={direction}
          delay={baseDelay + index * stagger}
          duration={duration}
          distance={distance}
          threshold={threshold}
          className={itemClassName}
          scaleFrom={scaleFrom}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}
