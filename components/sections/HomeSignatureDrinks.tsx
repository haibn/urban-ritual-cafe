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
    name: 'House Milk Tea',
    image: '/drinks/signature/house-milk-tea.png',
    description:
      'House blend of black teas with house cream. Creamy, malty and roasted flavor notes.',
  },
  {
    name: 'Creme Brulee',
    image: '/drinks/signature/creme-brulee.png',
    description:
      'Housemade creme brûlée, honey boba, classic milk topped with crackling torched raw sugar.',
  },
  {
    name: 'Creme Brulee Milk Tea',
    image: '/drinks/signature/creme-brulee-milk-tea.png',
    description:
      'A combination of our famous Creme Brulee with our House Milk Tea--it’s the best of both worlds.',
  },
  {
    name: 'Matcha Toffee',
    image: '/drinks/signature/matcha-toffee.png',
    description: 'Matcha green tea with classic milk and bite-sized housemade toffee brittle.',
  },
  {
    name: 'Strawberry Milk Bar',
    image: '/drinks/signature/strawberry-milk-bar.png',
    description: 'Classic milk with housemade strawberry syrup.',
  },
  {
    name: 'Mango Sticky Rice',
    image: '/drinks/signature/mango-sticky-rice.png',
    description: 'Mango with rice milk & coconut milk.',
  },
  {
    name: 'Bae-Sil',
    image: '/drinks/signature/bae-sil.png',
    description: 'Strawberry basil lemonade with housemade strawberry syrup, basil, and lemon.',
  },
  {
    name: 'White Grape Yuzu',
    image: '/drinks/signature/white-grape-yuzu.png',
    description: 'White grape oolong with yuzu honey.',
  },
  {
    name: 'Classic Brew',
    image: '/drinks/signature/classic-brew.png',
    description: 'Our house milk tea with a shot of cold brew coffee and our special house cream.',
  },
  {
    name: 'The Cloud',
    image: '/drinks/signature/the-cloud.png',
    description:
      'Dark roasted cold brew coffee locally roasted from Cat & Cloud in Santa Cruz. Creamy, sweet with notes of dark chocolate.',
  },
  {
    name: 'Feed Me Ube!',
    image: '/drinks/signature/feed-me-ube.png',
    description:
      'Ube Creme brulee, taro chunks, coconut milk, and a choice of rice milk or whole milk.',
  },
  {
    name: 'White Grape Yuzu',
    image: '/drinks/signature/white-grape-yuzu.png',
    description: 'White grape oolong with yuzu honey.',
  },
  {
    name: 'Hong Kong Milk Tea',
    image: '/drinks/signature/hong-kong-milk-tea.png',
    description:
      'Our take on the Classic Hong Kong Milk Tea. Ours is made with a housemade blend of black teas with evaporated milk. Our tea is steeped and then chilled for maximum strength and flavor.',
  },
  {
    name: 'Black Sesame Rice Ball',
    image: '/drinks/signature/black-sesame-rice-ball.png',
    description: 'Drinkable mochi, black sesame, & rice milk.',
  },
];

export default function HomeSignatureDrinks() {
  return (
    <div>
      <InfiniteDrinksGallery drinks={DEMO_DRINKS} scrollSpeed={250} />
    </div>
  );
}
