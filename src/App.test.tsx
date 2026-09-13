import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

// responds per URL, for pages that load more than one data file
const mockFetchByUrl = (responses: Record<string, unknown>) => {
  global.fetch = jest.fn((url: string) => Promise.resolve({
    ok: url in responses,
    status: url in responses ? 200 : 404,
    json: () => Promise.resolve(responses[url]),
  })) as jest.Mock;
};

const renderAt = (path: string) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

test('renders the home page', () => {
  renderAt('/');
  expect(screen.getByText('Jacob Frazer')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'View my projects' })).toHaveAttribute('href', '/projects');
});

test('renders the experience timeline with links to project deep dives', () => {
  renderAt('/');
  expect(screen.getByRole('region', { name: 'Experience' })).toBeInTheDocument();
  expect(screen.queryByRole('heading', { name: 'Experience' })).not.toBeInTheDocument();
  expect(screen.getByText('Contracting through Ascent')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Fighting COVID-19' })).toHaveAttribute('href', '/projects/ukhsa');
});

test('mobile menu opens, and closes when a link is followed', () => {
  mockFetchJson([]);
  renderAt('/');
  const menuButton = screen.getByRole('button', { name: 'Open menu' });
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(menuButton);
  expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');

  fireEvent.click(screen.getByRole('link', { name: 'Projects' }));
  expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
});

test('mobile menu closes with the Escape key', () => {
  renderAt('/');
  fireEvent.click(screen.getByRole('button', { name: 'Open menu' }));
  fireEvent.keyDown(window, { key: 'Escape' });
  expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute('aria-expanded', 'false');
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

test('deep dive shows where the project was done, links URLs and links to the next project', async () => {
  mockFetchByUrl({
    '/data/projectsContent.json': {
      ukhsa: { headline: 'Test headline', intro: 'Test intro', technologies: ['Python'], explanation: ['Test paragraph'], outcomes: ['Live at https://example.com/app'] },
    },
    '/data/projectsInfo.json': [
      { name: 'UKHSA test', description: 'Test description', image: '/banner.webp', url: 'ukhsa' },
      { name: 'Following project', description: 'Test description', image: '/next.webp', url: 'jpm' },
    ],
  });
  renderAt('/projects/ukhsa');
  expect(await screen.findByText('Test headline')).toBeInTheDocument();
  expect(screen.getByText('UKHSA · 2020 – 2022')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Following project/ })).toHaveAttribute('href', '/projects/jpm');
  expect(screen.getByRole('link', { name: 'https://example.com/app' })).toHaveAttribute('href', 'https://example.com/app');
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
