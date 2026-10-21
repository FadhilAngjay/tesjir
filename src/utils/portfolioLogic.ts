export interface Project {
  id: string;
  title: string;
  category: 'uiux' | 'web' | 'branding' | 'mobile';
  categoryLabel: { id: string; en: string };
  description: { id: string; en: string };
  longDescription: { id: string; en: string };
  image: string;
  linkText: string;
  url: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  client: string;
  year: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

/**
 * Filter projects by category
 */
export function filterProjects(projects: Project[], category: string): Project[] {
  if (!category || category === 'all') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

/**
 * Validate contact form data
 */
export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Nama minimal 2 karakter.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Format email tidak valid.';
  }

  if (!data.service || data.service === '') {
    errors.service = 'Pilih jenis layanan.';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Pesan minimal 10 karakter.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Format project statistics
 */
export function calculateProjectStats(projects: Project[]) {
  const categories = projects.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    total: projects.length,
    categories,
  };
}
