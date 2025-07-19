
import React from 'react';
import ProjectCard from './ProjectCard';
import type { Project } from '../types';

const mockProjects: Project[] = [
  {
    id: 'proj-12345',
    title: 'Neon Dreams',
    artist: { name: 'SynthRider', avatarUrl: 'https://picsum.photos/seed/sr/40/40' },
    artworkUrl: 'https://picsum.photos/seed/nd/600/400',
    likes: 1250,
    comments: 88,
    forks: 42,
  },
  {
    id: 'proj-67890',
    title: 'Midnight Lo-Fi',
    artist: { name: 'ChillVibes', avatarUrl: 'https://picsum.photos/seed/cv/40/40' },
    artworkUrl: 'https://picsum.photos/seed/mlf/600/400',
    likes: 3400,
    comments: 210,
    forks: 150,
  },
  {
    id: 'proj-abcde',
    title: 'Vocal Layer Experiment',
    artist: { name: 'VoxQueen', avatarUrl: 'https://picsum.photos/seed/vq/40/40' },
    artworkUrl: 'https://picsum.photos/seed/vle/600/400',
    likes: 780,
    comments: 45,
    forks: 12,
    originalProjectId: 'proj-67890'
  },
   {
    id: 'proj-fghij',
    title: 'Cyberpunk Drive',
    artist: { name: 'GlitchMaestro', avatarUrl: 'https://picsum.photos/seed/gm/40/40' },
    artworkUrl: 'https://picsum.photos/seed/cd/600/400',
    likes: 5600,
    comments: 450,
    forks: 230,
  },
   {
    id: 'proj-klmno',
    title: 'Acoustic Sunrise',
    artist: { name: 'Strummer', avatarUrl: 'https://picsum.photos/seed/st/40/40' },
    artworkUrl: 'https://picsum.photos/seed/as/600/400',
    likes: 950,
    comments: 65,
    forks: 22,
  },
  {
    id: 'proj-pqrst',
    title: 'Drive Guitar Solo',
    artist: { name: 'AxeSlinger', avatarUrl: 'https://picsum.photos/seed/axs/40/40' },
    artworkUrl: 'https://picsum.photos/seed/dgs/600/400',
    likes: 450,
    comments: 32,
    forks: 15,
    originalProjectId: 'proj-fghij',
  },
];


const FeedView: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-orbitron font-bold text-off-white mb-2">Explore Feed</h2>
      <p className="text-light-gray font-inter mb-8">Discover the latest creations from the EgoLab community.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default FeedView;
