import type { SvelteComponent } from 'svelte';

export interface Route {
  path: string;
  label: string;
  Component: typeof SvelteComponent;
  isProtected: boolean;
}
