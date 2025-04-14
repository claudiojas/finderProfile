
import { GitHubUser } from "../types/github";

export async function fetchGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`GitHub API error: ${response.statusText}`);
    }
    
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    throw error;
  }
}
