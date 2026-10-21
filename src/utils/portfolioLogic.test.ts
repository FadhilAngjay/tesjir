import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects, validateContactForm, calculateProjectStats, Project } from './portfolioLogic';

const mockProjects: Project[] = [
  {
    id: '1',
    title: 'App Dashboard',
    category: 'uiux',
    categoryLabel: { id: 'UI & UX Design', en: 'UI & UX Design' },
    description: { id: 'Sistem analitik', en: 'Analytics system' },
    longDescription: { id: 'Deskripsi lengkap', en: 'Long description' },
    image: '/images/p1.jpg',
    linkText: 'View in Dribbble',
    url: 'https://dribbble.com',
    tags: ['Figma', 'Design System'],
    metrics: [{ label: 'Conversion', value: '+42%' }],
    client: 'Acme SaaS',
    year: '2025',
  },
  {
    id: '2',
    title: 'Easy Rent',
    category: 'web',
    categoryLabel: { id: 'Webflow Development', en: 'Webflow Development' },
    description: { id: 'Platform persewaan', en: 'Rental platform' },
    longDescription: { id: 'Deskripsi lengkap', en: 'Long description' },
    image: '/images/p2.jpg',
    linkText: 'View in Dribbble',
    url: 'https://dribbble.com',
    tags: ['Webflow', 'React'],
    metrics: [{ label: 'Load Time', value: '0.8s' }],
    client: 'Urban Living',
    year: '2024',
  },
  {
    id: '3',
    title: 'Fintech Identity',
    category: 'branding',
    categoryLabel: { id: 'Branding & Logo', en: 'Branding & Logo' },
    description: { id: 'Identitas brand', en: 'Brand identity' },
    longDescription: { id: 'Deskripsi lengkap', en: 'Long description' },
    image: '/images/p3.jpg',
    linkText: 'View in Behance',
    url: 'https://behance.net',
    tags: ['Branding', 'Typography'],
    metrics: [{ label: 'Reach', value: '1.2M' }],
    client: 'PayFlow',
    year: '2024',
  },
];

test('filterProjects correctly returns all projects when category is "all" or empty', () => {
  assert.equal(filterProjects(mockProjects, 'all').length, 3);
  assert.equal(filterProjects(mockProjects, '').length, 3);
});

test('filterProjects correctly filters projects by category', () => {
  const uiux = filterProjects(mockProjects, 'uiux');
  assert.equal(uiux.length, 1);
  assert.equal(uiux[0].id, '1');

  const web = filterProjects(mockProjects, 'web');
  assert.equal(web.length, 1);
  assert.equal(web[0].id, '2');

  const mobile = filterProjects(mockProjects, 'mobile');
  assert.equal(mobile.length, 0);
});

test('validateContactForm checks required fields and email format', () => {
  const invalidResult = validateContactForm({
    name: 'J',
    email: 'invalid-email',
    service: '',
    message: 'Short',
  });

  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.name);
  assert.ok(invalidResult.errors.email);
  assert.ok(invalidResult.errors.service);
  assert.ok(invalidResult.errors.message);

  const validResult = validateContactForm({
    name: 'Fadila Disaputro',
    email: 'fadiladisaputro123@gmail.com',
    service: 'uiux',
    message: 'Saya ingin mendiskusikan pembuatan website portofolio interaktif baru.',
  });

  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('calculateProjectStats calculates counts per category accurately', () => {
  const stats = calculateProjectStats(mockProjects);
  assert.equal(stats.total, 3);
  assert.equal(stats.categories.uiux, 1);
  assert.equal(stats.categories.web, 1);
  assert.equal(stats.categories.branding, 1);
});
