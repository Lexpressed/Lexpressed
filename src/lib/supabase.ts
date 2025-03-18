import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);


export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author_id: string;
  category: 'Case Commentary' | 'Research' | 'Analysis' | 'News'| 'Guide';
  image_url?: string;
  reading_time: number;
  created_at: string;
  updated_at: string;
  published: boolean;
  slug: string;
  tags?: string[];
}

export async function getBlogPosts() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      blog_posts_tags (
        blog_tags (
          name
        )
      )
    `)
    .eq('published', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  return data.map(post => ({
    ...post,
    tags: post.blog_posts_tags?.map(tag => tag.blog_tags.name) || []
  }));
}

export async function createBlogPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) {
  const { data, error } = await supabase
    .from('blog_posts')
    .insert([post])
    .select()
    .single();

  if (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }

  return data;
}

export async function uploadImage(file: File) {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `blog-images/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from('blog-images')
    .upload(filePath, file);

  if (uploadError) {
    console.error('Error uploading image:', uploadError);
    throw uploadError;
  }

  const { data } = supabase.storage
    .from('blog-images')
    .getPublicUrl(filePath);

  return data.publicUrl;
}