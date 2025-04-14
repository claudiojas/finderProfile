
import { GitHubUser } from "../types/github";

interface ProfileCardProps {
  user: GitHubUser;
}

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <div className="bg-gray-200 rounded-lg p-8 shadow-lg max-w-3xl w-full mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="flex-shrink-0">
          <div className="rounded-full overflow-hidden border-2  border-[#005cff] w-40 h-40">
            <img 
              src={user.avatar_url} 
              alt={`${user.name || user.login}'s avatar`} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl text-[#005cff] font-bold text-github-blue mb-2">
            {user.name || user.login}
          </h2>
          
          <p className="text-gray-700 mb-4">
            {user.bio || "Este usuário não possui uma biografia."}
          </p>
          
          {user.location && (
            <p className="text-gray-600 text-sm mb-1">
              <span className="font-medium">Localização:</span> {user.location}
            </p>
          )}
          
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <div className="text-sm">
              <span className="font-bold text-github-dark">{user.followers}</span>
              <span className="text-gray-600 ml-1">seguidores</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-github-dark">{user.following}</span>
              <span className="text-gray-600 ml-1">seguindo</span>
            </div>
            <div className="text-sm">
              <span className="font-bold text-github-dark">{user.public_repos}</span>
              <span className="text-gray-600 ml-1">repositórios</span>
            </div>
          </div>
          
          <div className="mt-4">
            <a 
              href={user.html_url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-github-blue hover:underline text-sm font-medium"
            >
              Ver perfil no GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
