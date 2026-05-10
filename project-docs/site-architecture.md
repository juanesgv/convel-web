# Site Architecture — Convel

# Architecture Philosophy

El sitio web debe construirse como una experiencia digital premium, modular, escalable y altamente mantenible.

La arquitectura debe priorizar:

* claridad estructural
* performance
* escalabilidad
* reutilización de componentes
* consistencia visual
* experiencia editorial
* mantenibilidad a largo plazo

El sitio NO debe sentirse como:

* un template corporativo tradicional
* un sitio WordPress genérico
* una landing page SaaS
* una interfaz sobrecargada

La experiencia debe sentirse:

* arquitectónica
* contemporánea
* elegante
* rápida
* espaciosa
* cuidadosamente diseñada

---

# Technical Direction

## Core Stack

El proyecto será construido utilizando:

* Astro
* Tailwind CSS
* Arquitectura basada en componentes
* Responsive-first development
* Semantic HTML
* Performance-first approach

---

# Performance Philosophy

La performance es una prioridad crítica del proyecto.

El sitio debe:

* cargar rápidamente
* minimizar JavaScript innecesario
* optimizar imágenes agresivamente
* mantener una experiencia fluida
* evitar dependencias pesadas

Objetivos:

* Lighthouse score alto
* excelente Core Web Vitals
* navegación rápida
* experiencia premium incluso en dispositivos móviles

---

# Project Structure

## Folder Structure

```txt id="zkuwkh"
/src
  /components
    /layout
    /navigation
    /sections
    /ui
    /cards
    /forms

  /layouts

  /pages

  /styles

  /data

  /content

/project-docs
```

---

# Component Architecture

## Component Philosophy

Los componentes deben ser:

* reutilizables
* modulares
* desacoplados
* accesibles
* fáciles de mantener

Evitar:

* componentes gigantes
* lógica innecesaria
* estilos duplicados
* código difícil de escalar

---

# Layout Philosophy

La composición visual debe sentirse:

* editorial
* arquitectónica
* sofisticada
* limpia

Principios:

* mucho whitespace
* ritmo vertical consistente
* grids limpias
* jerarquía clara
* alineaciones precisas

---

# Responsive Strategy

El responsive debe diseñarse desde el inicio.

NO adaptar desktop hacia mobile al final.

Priorizar:

* mobile-first real
* tipografía fluida
* layouts flexibles
* imágenes optimizadas
* excelente experiencia táctil

---

# Navigation Structure

## Main Navigation Order

1. Servicios
2. Expertice
3. Segmentos
4. Quiénes Somos
5. Talento
6. Proveedores
7. Sostenibilidad

La navegación debe sentirse:

* premium
* limpia
* espaciosa
* contemporánea
* fácil de escanear

---

# Services Menu Structure

## Servicios

El menú de Servicios debe incluir:

* Diseños
* Optimización
* Estructuración
* Construcción

Cada categoría debe poder expandirse en el futuro con:

* páginas internas
* casos relacionados
* proyectos asociados
* contenido editorial

---

# Expertise Menu Structure

## Expertice

El menú de Expertice debe incluir:

* Capacidad técnica
* Premios
* Casos de estudio

La sección debe reforzar:

* experiencia
* respaldo técnico
* trayectoria
* reconocimiento institucional

---

# Page Strategy

## Home

La homepage debe funcionar como:

* introducción emocional a la marca
* experiencia editorial
* presentación institucional
* showcase visual

Debe priorizar:

* composición
* storytelling visual
* ritmo
* jerarquía

---

## Servicios

Las páginas de servicios deben:

* explicar capacidades
* transmitir experiencia
* mantener claridad
* sentirse sofisticadas y técnicas

---

## Proyectos / Casos

Debe ser uno de los pilares visuales del sitio.

Priorizar:

* fotografía arquitectónica
* storytelling visual
* impacto visual
* experiencia inmersiva

---

## Quiénes Somos

Debe comunicar:

* legado
* visión
* evolución
* cultura
* experiencia

Evitar:

* exceso de texto corporativo
* apariencia institucional anticuada

---

# Content Architecture

El contenido debe organizarse para:

* mejorar lectura
* mantener ritmo visual
* favorecer escaneabilidad
* evitar saturación

La experiencia debe apoyarse tanto en:

* contenido visual
* composición
* tipografía
* whitespace

No solo en texto.

---

# Image Strategy

Las imágenes serán uno de los activos más importantes del sitio.

Priorizar:

* fotografía arquitectónica
* imágenes cinematográficas
* composición limpia
* alta calidad
* optimización extrema

Evitar:

* imágenes genéricas
* renders artificiales excesivos
* fotografías saturadas

---

# Motion Strategy

El motion debe:

* reforzar elegancia
* acompañar navegación
* mejorar percepción premium

Nunca debe:

* distraer
* ralentizar
* sentirse experimental

Priorizar:

* reveals suaves
* fades sutiles
* microinteracciones limpias
* parallax ligero
* transiciones naturales

---

# Accessibility

Objetivo:

* WCAG AA

Priorizar:

* contraste adecuado
* navegación por teclado
* focus states visibles
* semantic HTML
* accesibilidad real

---

# SEO Strategy

El sitio debe:

* usar semantic HTML
* mantener heading structure correcta
* optimizar metadata
* optimizar imágenes
* mantener contenido escalable

Priorizar SEO técnico y claridad estructural.

---

# AI Collaboration Rules

Antes de generar código:

* analizar documentación completa
* justificar decisiones
* evitar patrones genéricos
* evitar layouts cliché
* respetar dirección visual
* preguntar cuando exista ambigüedad

La IA debe actuar como:

* frontend architect
* UX/UI collaborator
* design systems thinker
* performance-conscious engineer

No como generador automático de páginas.

---

# Scalability

La arquitectura debe permitir:

* expansión futura
* integración con CMS
* crecimiento modular
* nuevas categorías
* contenido editorial
* internacionalización futura

El sistema debe sentirse preparado para evolucionar con la empresa.
