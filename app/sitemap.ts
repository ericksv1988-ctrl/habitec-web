
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://habiteccr.com'
  const lastModified = new Date()

  const pages = [
    {
      path: '',
      priority: 1.0,
    },
    {
      path: '/construccion-de-casas-costa-rica',
      priority: 0.9,
    },
    {
      path: '/arquitectura-ingenieria-constructora-coto-brus',
      priority: 0.8,
    },
    {
      path: '/arquitecture-quepos',
      priority: 0.7,
    },
    {
      path: '/Avaluos',
      priority: 0.9,
    },
    {
      path: '/construccion-por-administracion',
      priority: 0.7,
    },
    {
      path: '/constructora-esparza',
      priority: 0.8,
    },
    {
      path: '/constructora-uvita',
      priority: 0.8,
    },
    {
      path: '/cuando-necesitas-un-avaluo-inmobiliario',
      priority: 0.7,
    },
    {
      path: '/ingenieria-civil',
      priority: 0.8,
    },
    {
      path: '/permisos-de-construccion',
      priority: 0.9,
    },
    {
      path: '/permisos-de-construccion-orotina',
      priority: 0.7,
    },
    {
      path: '/permisos-de-construccion-perez-zeledon',
      priority: 0.8,
    },
        {
      path: '/pruebas-de-laboratorio-construccion-costa-rica',
      priority: 0.9,
    },
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: page.priority,
  }))
}
