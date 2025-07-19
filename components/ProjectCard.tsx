
import React from 'react';
import type { Project } from '../types';
import { IconHeart, IconMessageCircle, IconGitFork } from './Icons';

interface ProjectCardProps {
  project: Project;
}

const ActionButton: React.FC<{ icon: React.ReactNode; value: number; label: string }> = ({ icon, value, label }) => (
    <div className="flex items-center space-x-2 text-light-gray hover:text-accent-blue transition-colors duration-200 cursor-pointer">
        {icon}
        <span className="font-inter text-sm">{value}</span>
        <span className="sr-only">{label}</span>
    </div>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-card-black rounded-lg overflow-hidden border border-primary-purple/10 
                   transition-all duration-300 hover:border-primary-purple/50 hover:shadow-glow-purple group">
      <div className="relative">
        <img src={project.artworkUrl} alt={project.title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
            {project.originalProjectId && (
                <div className="flex items-center text-xs text-accent-blue mb-1 font-inter">
                    <IconGitFork className="w-4 h-4 mr-1"/>
                    Forked from project #{project.originalProjectId.slice(0,6)}
                </div>
            )}
          <h3 className="font-orbitron text-xl font-bold text-off-white">{project.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={project.artist.avatarUrl} alt={project.artist.name} className="w-8 h-8 rounded-full border-2 border-accent-blue/50" />
            <span className="font-inter text-sm font-medium text-light-gray">{project.artist.name}</span>
          </div>
          <div className="flex items-center space-x-4">
            <ActionButton icon={<IconHeart className="w-5 h-5"/>} value={project.likes} label="Likes" />
            <ActionButton icon={<IconMessageCircle className="w-5 h-5"/>} value={project.comments} label="Comments" />
            <ActionButton icon={<IconGitFork className="w-5 h-5"/>} value={project.forks} label="Forks" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
