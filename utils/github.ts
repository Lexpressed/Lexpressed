import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: import.meta.env.GITHUB_TOKEN
});

const owner = 'your-github-username';
const repo = 'your-repo-name';
const path = 'documents'; // The folder in your repo containing the documents

export interface Document {
  name: string;
  path: string;
  sha: string;
  size: number;
  downloadUrl: string;
  category: string;
  date: string;
}

export async function getDocuments(): Promise<Document[]> {
  try {
    const response = await octokit.repos.getContent({
      owner,
      repo,
      path,
    });

    if (!Array.isArray(response.data)) {
      throw new Error('No documents found');
    }

    return response.data.map(file => {
      // Extract category from file path (assuming files are organized in category folders)
      const pathParts = file.path.split('/');
      const category = pathParts.length > 1 ? pathParts[0] : 'Uncategorized';
      
      // Extract date from filename (assuming format: YYYY-MM-DocumentName.pdf)
      const dateMatch = file.name.match(/^(\d{4}-\d{2})/);
      const date = dateMatch ? dateMatch[1] : 'Unknown Date';

      return {
        name: file.name.replace(/^\d{4}-\d{2}-/, '').replace(/\.[^/.]+$/, ''),
        path: file.path,
        sha: file.sha,
        size: file.size,
        downloadUrl: file.download_url,
        category,
        date
      };
    });
  } catch (error) {
    console.error('Error fetching documents:', error);
    return [];
  }
}