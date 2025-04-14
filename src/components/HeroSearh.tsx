
import { useState } from "react";
import { GitHubUser } from "../types/github";
import { fetchGitHubUser } from "../services/github-service";
import { SearchBar } from "../components/SearchBar";
import { ProfileCard } from "../components/ProfileCard";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { UserNotFound } from "../components/UserNotFound";

export function HeroSearch () {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (username: string) => {
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const userData = await fetchGitHubUser(username);
      setUser(userData);
      
      if (!userData) {
        return `Não encontramos "${username}" no GitHub.`
      }
    } catch (error) {
      console.error(error); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-[1156px] min-h-[537px] flex flex-col items-center justify-start py-12 px-4 bg-black">
      <div className="w-full max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <svg className="w-12 h-12 text-white" viewBox="0 0 16 16" fill="currentColor">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
            <h1 className="text-4xl font-bold text-white">Perfil GitHub</h1>
          </div>
          
          <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        </header>

        <main>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {user && <ProfileCard user={user} />}
              
              {hasSearched && !user && !isLoading && (
                <div className="w-full h-auto flex items-center justify-center">
                  <UserNotFound />
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

