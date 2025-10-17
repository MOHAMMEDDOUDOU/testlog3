"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github, Eye } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  repoUrl: string
}

export function ProjectCard({ title, description, tags, image, demoUrl, repoUrl }: ProjectCardProps) {
  const { t, language } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      
      
              <Link
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full group"
        >
          <div
            className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-900/90 via-zinc-800/90 to-zinc-900/90 backdrop-blur-xl border border-zinc-700/50 cursor-pointer transition-all duration-200 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20"
          >
        {/* Header with Image */}
        <div className="relative overflow-hidden h-48 sm:h-56">

          
          {/* Project Image */}
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
          />
          

        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col h-full">
          {/* Title and Description */}
          <div className="flex-grow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {title}
              </h3>
            </div>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4 line-clamp-3">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
                          {tags.slice(0, 3).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-zinc-800/80 text-zinc-300 text-xs border border-zinc-700/50"
                >
                  {tag}
                </Badge>
              ))}
            {tags.length > 3 && (
              <Badge
                variant="secondary"
                className="bg-zinc-800/80 text-zinc-500 text-xs border border-zinc-700/50"
              >
                +{tags.length - 3}
              </Badge>
            )}
          </div>


        </div>

                  {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-2xl"></div>
          
          {/* مؤشر الانتقال البسيط */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
            <div className="w-6 h-6 bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/50">
              <ExternalLink className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
        </Link>
      </motion.div>
    )
  }
