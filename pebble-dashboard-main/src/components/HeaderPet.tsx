import { useState, useEffect } from 'react';

// Different color schemes for pets
const CAT_COLORS = [
  { body: '#6b7280', dark: '#374151', light: '#9ca3af', eye: '#22c55e', name: 'gray' },
  { body: '#f97316', dark: '#c2410c', light: '#fdba74', eye: '#22c55e', name: 'orange' },
  { body: '#1f2937', dark: '#111827', light: '#4b5563', eye: '#fbbf24', name: 'black' },
  { body: '#fef3c7', dark: '#d97706', light: '#fffbeb', eye: '#3b82f6', name: 'cream' },
  { body: '#7c3aed', dark: '#5b21b6', light: '#a78bfa', eye: '#fbbf24', name: 'purple' },
  { body: '#ec4899', dark: '#be185d', light: '#f9a8d4', eye: '#22c55e', name: 'pink' },
  { body: '#14b8a6', dark: '#0f766e', light: '#5eead4', eye: '#fbbf24', name: 'teal' },
];

const DOG_COLORS = [
  { body: '#d97706', dark: '#92400e', light: '#fbbf24', eye: '#1f2937', name: 'golden' },
  { body: '#78716c', dark: '#44403c', light: '#a8a29e', eye: '#1f2937', name: 'gray' },
  { body: '#7c2d12', dark: '#431407', light: '#c2410c', eye: '#1f2937', name: 'brown' },
  { body: '#fef3c7', dark: '#92400e', light: '#fffbeb', eye: '#1f2937', name: 'cream' },
  { body: '#1f2937', dark: '#111827', light: '#374151', eye: '#fbbf24', name: 'black' },
  { body: '#f472b6', dark: '#db2777', light: '#fbcfe8', eye: '#1f2937', name: 'pink' },
  { body: '#a78bfa', dark: '#7c3aed', light: '#ddd6fe', eye: '#1f2937', name: 'lavender' },
];

type WallSide = 'bottom' | 'right' | 'top' | 'left';

// Pixel art cat sprite
const PixelCat = ({ frame, direction, colors, rotation }: { frame: number; direction: 'left' | 'right'; colors: typeof CAT_COLORS[0]; rotation: number }) => {
  const isStep = frame % 2 === 0;

  return (
    <svg 
      width="18" 
      height="14" 
      viewBox="0 0 24 20" 
      style={{ 
        transform: `rotate(${rotation}deg) scaleX(${direction === 'left' ? -1 : 1})`,
      }}
    >
      <rect x="6" y="8" width="12" height="8" fill={colors.body} />
      <rect x="14" y="4" width="8" height="8" fill={colors.body} />
      <rect x="14" y="2" width="3" height="3" fill={colors.body} />
      <rect x="19" y="2" width="3" height="3" fill={colors.body} />
      <rect x="15" y="3" width="1" height="1" fill={colors.light} />
      <rect x="20" y="3" width="1" height="1" fill={colors.light} />
      <rect x="16" y="6" width="2" height="2" fill={colors.eye} />
      <rect x="20" y="6" width="2" height="2" fill={colors.eye} />
      <rect x="18" y="9" width="2" height="1" fill={colors.dark} />
      <rect x="2" y="6" width="4" height="2" fill={colors.body} />
      <rect x="0" y="4" width="3" height="2" fill={colors.body} />
      <rect x={isStep ? "8" : "7"} y="16" width="2" height={isStep ? "4" : "3"} fill={colors.dark} />
      <rect x={isStep ? "12" : "13"} y="16" width="2" height={isStep ? "3" : "4"} fill={colors.dark} />
      <rect x="16" y="16" width="2" height="4" fill={colors.dark} />
    </svg>
  );
};

const PixelDog = ({ frame, direction, colors, rotation }: { frame: number; direction: 'left' | 'right'; colors: typeof DOG_COLORS[0]; rotation: number }) => {
  const isStep = frame % 2 === 0;

  return (
    <svg 
      width="20" 
      height="14" 
      viewBox="0 0 28 20" 
      style={{ 
        transform: `rotate(${rotation}deg) scaleX(${direction === 'left' ? -1 : 1})`,
      }}
    >
      <rect x="6" y="8" width="14" height="8" fill={colors.body} />
      <rect x="18" y="4" width="8" height="8" fill={colors.body} />
      <rect x="26" y="6" width="2" height="4" fill={colors.light} />
      <rect x="18" y="0" width="4" height="5" fill={colors.dark} />
      <rect x="24" y="2" width="3" height="4" fill={colors.dark} />
      <rect x="20" y="6" width="2" height="2" fill={colors.eye} />
      <rect x="26" y="7" width="2" height="2" fill={colors.dark} />
      <rect x={isStep ? "2" : "1"} y={isStep ? "4" : "5"} width="4" height="3" fill={colors.body} />
      <rect x={isStep ? "0" : "0"} y={isStep ? "2" : "4"} width="3" height="3" fill={colors.body} />
      <rect x={isStep ? "8" : "7"} y="16" width="3" height={isStep ? "4" : "3"} fill={colors.dark} />
      <rect x={isStep ? "14" : "15"} y="16" width="3" height={isStep ? "3" : "4"} fill={colors.dark} />
    </svg>
  );
};

// Interaction emojis
const InteractionEmoji = ({ x, y, type }: { x: number; y: number; type: string }) => (
  <div 
    className="absolute pointer-events-none animate-bounce text-sm"
    style={{ left: x, top: y - 20, zIndex: 100 }}
  >
    {type}
  </div>
);

interface Pet {
  id: number;
  type: 'cat' | 'dog';
  colors: typeof CAT_COLORS[0];
  position: number; // Position along the perimeter (0 to totalPerimeter)
  direction: 1 | -1; // 1 = clockwise, -1 = counter-clockwise
  speed: number;
  frame: number;
}

interface Interaction {
  id: number;
  x: number;
  y: number;
  emoji: string;
  ttl: number;
}

const INTERACTION_EMOJIS = ['❤️', '💕', '💖', '✨', '💫', '🐾', '💗', '😻', '🥰', '💞'];

const createRandomPet = (id: number): Pet => {
  const isCat = Math.random() > 0.5;
  const colorOptions = isCat ? CAT_COLORS : DOG_COLORS;
  const colors = colorOptions[Math.floor(Math.random() * colorOptions.length)];
  
  return {
    id,
    type: isCat ? 'cat' : 'dog',
    colors,
    position: Math.random() * 1000, // Will be normalized to perimeter
    direction: Math.random() > 0.5 ? 1 : -1,
    speed: 1.5 + Math.random() * 2,
    frame: 0,
  };
};

export function HeaderPet() {
  const [pets, setPets] = useState<Pet[]>(() => {
    const count = 8 + Math.floor(Math.random() * 5); // 8-12 pets
    return Array.from({ length: count }, (_, i) => createRandomPet(i));
  });
  
  const [interactions, setInteractions] = useState<Interaction[]>([]);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 56 });

  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      const header = document.querySelector('header');
      if (header) {
        setDimensions({
          width: header.clientWidth,
          height: header.clientHeight,
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Convert perimeter position to x, y coordinates and rotation
  const getPositionFromPerimeter = (perimeterPos: number): { x: number; y: number; rotation: number; wallSide: WallSide } => {
    const { width, height } = dimensions;
    const perimeter = 2 * width + 2 * height;
    const pos = ((perimeterPos % perimeter) + perimeter) % perimeter; // Normalize to 0-perimeter
    
    // Bottom wall (left to right)
    if (pos < width) {
      return { x: pos, y: height - 14, rotation: 0, wallSide: 'bottom' };
    }
    // Right wall (bottom to top)
    else if (pos < width + height) {
      const wallPos = pos - width;
      return { x: width - 14, y: height - wallPos - 14, rotation: -90, wallSide: 'right' };
    }
    // Top wall (right to left)
    else if (pos < 2 * width + height) {
      const wallPos = pos - width - height;
      return { x: width - wallPos - 18, y: 0, rotation: 180, wallSide: 'top' };
    }
    // Left wall (top to bottom)
    else {
      const wallPos = pos - 2 * width - height;
      return { x: 0, y: wallPos, rotation: 90, wallSide: 'left' };
    }
  };

  // Check for nearby pets and create interactions
  const checkInteractions = (currentPets: Pet[]) => {
    const newInteractions: Interaction[] = [];
    
    for (let i = 0; i < currentPets.length; i++) {
      for (let j = i + 1; j < currentPets.length; j++) {
        const pet1 = currentPets[i];
        const pet2 = currentPets[j];
        
        const pos1 = getPositionFromPerimeter(pet1.position);
        const pos2 = getPositionFromPerimeter(pet2.position);
        
        const distance = Math.sqrt(
          Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2)
        );
        
        // If pets are close enough and random chance
        if (distance < 30 && Math.random() < 0.05) {
          newInteractions.push({
            id: Date.now() + Math.random(),
            x: (pos1.x + pos2.x) / 2,
            y: (pos1.y + pos2.y) / 2,
            emoji: INTERACTION_EMOJIS[Math.floor(Math.random() * INTERACTION_EMOJIS.length)],
            ttl: 30, // frames to live
          });
        }
      }
    }
    
    return newInteractions;
  };

  useEffect(() => {
    const walkInterval = setInterval(() => {
      setPets(currentPets => {
        const perimeter = 2 * dimensions.width + 2 * dimensions.height;
        
        const updatedPets = currentPets.map(pet => {
          let newPos = pet.position + (pet.speed * pet.direction);
          
          // Wrap around perimeter
          if (newPos < 0) newPos += perimeter;
          if (newPos >= perimeter) newPos -= perimeter;
          
          return {
            ...pet,
            position: newPos,
            frame: pet.frame + 1,
          };
        });
        
        // Check for interactions
        const newInteractions = checkInteractions(updatedPets);
        if (newInteractions.length > 0) {
          setInteractions(prev => [...prev, ...newInteractions].slice(-20)); // Keep max 20
        }
        
        return updatedPets;
      });
      
      // Decay interactions
      setInteractions(prev => 
        prev.map(i => ({ ...i, ttl: i.ttl - 1 })).filter(i => i.ttl > 0)
      );
    }, 80);

    return () => clearInterval(walkInterval);
  }, [dimensions]);

  return (
    <>
      {/* Interactions */}
      {interactions.map(interaction => (
        <InteractionEmoji 
          key={interaction.id}
          x={interaction.x}
          y={interaction.y}
          type={interaction.emoji}
        />
      ))}
      
      {/* Pets */}
      {pets.map(pet => {
        const { x, y, rotation } = getPositionFromPerimeter(pet.position);
        
        // Direction is simple: clockwise = face forward, counter-clockwise = face backward
        const visualDirection: 'left' | 'right' = pet.direction === 1 ? 'right' : 'left';
        
        return (
          <div 
            key={pet.id}
            className="absolute transition-none pointer-events-none select-none"
            style={{ 
              left: x,
              top: y,
              zIndex: 50 + pet.id,
            }}
          >
            {pet.type === 'cat' ? (
              <PixelCat 
                frame={pet.frame} 
                direction={visualDirection} 
                colors={pet.colors}
                rotation={rotation}
              />
            ) : (
              <PixelDog 
                frame={pet.frame} 
                direction={visualDirection} 
                colors={pet.colors}
                rotation={rotation}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
