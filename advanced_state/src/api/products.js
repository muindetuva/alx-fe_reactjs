const products = [
  {
    id: 'market-lamp',
    name: 'Market Glow Lamp',
    description: 'A warm dimmable desk lamp for focused work.',
    price: 48,
  },
  {
    id: 'canvas-pack',
    name: 'Canvas Day Pack',
    description: 'A durable everyday backpack with a padded laptop sleeve.',
    price: 72,
  },
  {
    id: 'studio-headphones',
    name: 'Studio Headphones',
    description: 'Comfortable over-ear headphones with balanced sound.',
    price: 126,
  },
  {
    id: 'stoneware-mug',
    name: 'Stoneware Mug',
    description: 'A hand-finished mug designed for daily coffee rituals.',
    price: 24,
  },
]

export function fetchProductsFromApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, 700)
  })
}

export const getProducts = fetchProductsFromApi

export default products
