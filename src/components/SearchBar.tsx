
import { Search } from "lucide-react";
import { FormEvent, useState } from "react";

interface SearchBarProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

export function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite um usuário do Github"
          className="w-full h-[62px] px-4 py-2 border border-[#dddddd] rounded-l-md focus:outline-none focus:ring-0 text-black bg-white"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !username.trim()}
          className="bg-blue-600 text-white p-[19px] font-[20px] rounded-r-md cursor-pointer hover:opacity-90"
        >
          <Search size={24} />
        </button>
      </div>
    </form>
  );
}
