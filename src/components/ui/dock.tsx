"use client"

import React, { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const DEFAULT_MAGNIFICATION = 60
const DEFAULT_DISTANCE = 140

export interface DockProps {
  className?: string
  magnification?: number
  distance?: number
  children: React.ReactNode
}

export const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  (
    {
      className,
      magnification = DEFAULT_MAGNIFICATION,
      distance = DEFAULT_DISTANCE,
      children,
      ...props
    },
    ref,
  ) => {
    const mouseX = useMotionValue(Infinity)

    const renderChildren = () => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            ...child.props,
            mouseX: mouseX,
            magnification: magnification,
            distance: distance,
          })
        }
        return child
      })
    }

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        {...props}
        className={cn(
          "mx-auto flex h-[58px] w-max items-center gap-2 rounded-2xl border border-white/10 bg-black/50 p-2 backdrop-blur-md",
          className,
        )}
      >
        {renderChildren()}
      </motion.div>
    )
  },
)

Dock.displayName = "Dock"

export const DockSeparator = ({ className }: { className?: string }) => {
  return <div className={cn("mx-1 h-8 w-px bg-white/10", className)} />
}

DockSeparator.displayName = "DockSeparator"

export interface DockIconProps {
  size?: number
  magnification?: number
  distance?: number
  mouseX?: any
  className?: string
  children: React.ReactNode
  tooltip?: string
}

export const DockIcon = ({
  size,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  tooltip,
  ...props
}: DockIconProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [40, magnification, 40],
  )

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <motion.div
            ref={ref}
            style={{ width }}
            className={cn(
              "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20",
              className,
            )}
            {...props}
          >
            {children}
          </motion.div>
        </TooltipTrigger>
        {tooltip && (
          <TooltipContent side="top" sideOffset={10}>
            <p>{tooltip}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
}

DockIcon.displayName = "DockIcon"
