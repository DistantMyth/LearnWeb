import { setup } from './setup.js';
import { foundations } from './foundations.js';
import { structure } from './structure.js';
import { formsMedia, deferredApis } from './forms-media.js';
import { graduation, resources } from './resources.js';

export const modules = [
  { id: 'setup', title: 'Getting ready', subtitle: 'Your tools, your first hello', icon: '↗', color: 'peach' },
  { id: 'foundations', title: 'The HTML essentials', subtitle: 'Give your ideas a structure', icon: '◇', color: 'purple' },
  { id: 'appearance', title: 'Make it yours', subtitle: 'Color, links, and pictures', icon: '✳', color: 'pink' },
  { id: 'structure', title: 'Build with purpose', subtitle: 'Organize, connect, include', icon: '⊞', color: 'green' },
  { id: 'forms', title: 'Start a conversation', subtitle: 'Forms and friendly inputs', icon: '☷', color: 'yellow' },
  { id: 'media', title: 'Bring it to life', subtitle: 'Graphics, sound, and video', icon: '▷', color: 'blue' },
  { id: 'finish', title: 'Your finishing touches', subtitle: 'Review it. Share it. Own it.', icon: '⚑', color: 'purple' },
];
export const lessons = [...setup, ...foundations, ...structure, ...formsMedia, ...graduation];
export { deferredApis, resources };
export const sourceUrl = path => new URL(path, 'https://www.w3schools.com/html/').href;
