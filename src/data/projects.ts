export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  deployUrl?: string | null;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'budget-generator',
    title: 'BudgetGenerator',
    description: 'Sistema inteligente de geração de orçamentos técnicos utilizando Inteligência Artificial (Google Gemini), com dashboard de analytics e exportação para PDF.',
    tags: ['Node.js', 'TypeScript', 'Express', 'Prisma ORM', 'PostgreSQL', 'Angular'],
    githubUrl: 'https://github.com/AlexsandroFilho/BudgetGenerator',
    deployUrl: null,
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  }
];
