import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// the canvas particle background can't run in jsdom
jest.mock('@generics/ParticlesBackground', () => () => null);

const mockFetchJson = (body: unknown, ok: boolean = true) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok,
    status: ok ? 200 : 500,
    json: () => Promise.resolve(body),
  }) as jest.Mock;
};

const renderAt = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

test('renders the home page', () => {
  renderAt('/');
  expect(screen.getByText('Jacob Frazer')).toBeInTheDocument();
});

test('renders the experience timeline with links to project deep dives', () => {
  renderAt('/');
  expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument();
  expect(screen.getByText('Contracting through Ascent')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Fighting COVID-19' })).toHaveAttribute('href', '/projects/ukhsa');
});

test('groups earlier projects under their own heading', async () => {
  mockFetchJson([
    { name: 'Current project', description: 'Test description', image: '/test.webp', url: 'current' },
    { name: 'Old project', description: 'Test description', image: '/test.webp', url: 'old', earlier: true },
  ]);
  renderAt('/projects');
  expect(await screen.findByText('Earlier work')).toBeInTheDocument();
  expect(screen.getByText('Old project')).toBeInTheDocument();
});

test('lists projects once they have loaded', async () => {
  mockFetchJson([{ name: 'Test project', description: 'Test description', image: '/test.webp', url: 'test' }]);
  renderAt('/projects');
  expect(await screen.findByText('Test project')).toBeInTheDocument();
});

test('shows an error if the projects list fails to load', async () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  mockFetchJson(null, false);
  renderAt('/projects');
  expect(await screen.findByText(/projects couldn't be loaded/i)).toBeInTheDocument();
});

test('renders a project deep dive', async () => {
  mockFetchJson({
    test: { headline: 'Test headline', intro: 'Test intro', technologies: ['Python'], explanation: ['Test paragraph'], outcomes: ['Test outcome'] },
  });
  renderAt('/projects/test');
  expect(await screen.findByText('Test headline')).toBeInTheDocument();
  expect(screen.getByText('Test outcome')).toBeInTheDocument();
});

test('shows the 404 page for an unknown project', async () => {
  mockFetchJson({});
  renderAt('/projects/constructor');
  expect(await screen.findByText(/haven't worked on a project with that name/i)).toBeInTheDocument();
});

test('shows an error if project content fails to load', async () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
  mockFetchJson(null, false);
  renderAt('/projects/test');
  expect(await screen.findByText(/project couldn't be loaded/i)).toBeInTheDocument();
});
