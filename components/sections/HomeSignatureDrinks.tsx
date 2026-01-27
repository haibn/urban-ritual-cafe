'use client';

import { useState, useEffect, useRef } from 'react';
import InfiniteDrinksGallery from '../ui/InfiniteDrinksGallery';

/**
 * InfiniteDrinksGallery Component
 *
 * A horizontally scrolling drink gallery with infinite loop effect.
 * Features:
 * - Auto-scrolling animation that pauses on hover
 * - Description overlay appears on hover
 * - Seamless infinite loop using CSS animation
 * - Fully responsive design
 */

// Type definition for drink items
type Drink = {
  name: string;
  image: string;
  description: string;
};

// Demo data - boba/bubble tea drinks
const DEMO_DRINKS: Drink[] = [
  {
    name: 'Classic Milk Tea',
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400&h=500&fit=crop',
    description: 'Creamy black tea with chewy tapioca pearls and a hint of sweetness',
  },
  {
    name: 'Taro Delight',
    image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=400&h=500&fit=crop',
    description: 'Purple taro root blended with milk for a nutty, sweet flavor',
  },
  {
    name: 'Matcha Madness',
    image: 'https://images.unsplash.com/photo-1578899952107-9d9d6c4d5d5d?w=400&h=500&fit=crop',
    description: 'Premium Japanese matcha with fresh milk and honey boba pearls',
  },
  {
    name: 'Brown Sugar Tiger',
    image: 'https://images.unsplash.com/photo-1525385133512-2f3bdd039054?w=400&h=500&fit=crop',
    description: 'Signature brown sugar stripes with fresh milk and tapioca',
  },
  {
    name: 'Strawberry Bliss',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=500&fit=crop',
    description: 'Fresh strawberries blended with creamy milk tea and popping boba',
  },
  {
    name: 'Thai Tea Dream',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=400&h=500&fit=crop',
    description: 'Aromatic Thai tea with condensed milk and crystal boba',
  },
  {
    name: 'Mango Paradise',
    image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&h=500&fit=crop',
    description: 'Tropical mango smoothie with coconut jelly and passion fruit',
  },
  {
    name: 'Wintermelon Zen',
    image: 'https://images.unsplash.com/photo-1587080266227-677cc2a4e76e?w=400&h=500&fit=crop',
    description: 'Refreshing wintermelon tea with aloe vera and lychee jelly',
  },
];

export default function HomeSignatureDrinks() {
  return (
    <div>
      <InfiniteDrinksGallery drinks={DEMO_DRINKS} scrollSpeed={300} />
    </div>
  );
}
