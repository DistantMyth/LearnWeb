import { reactLessons } from './react.js';
import { nodeLessons, nodeDatabaseLessons } from './node.js';
import { expressLessons } from './express.js';
import { mongodbLessons } from './mongodb.js';
import { toReactLessons, toNodeLessons, toExpressLessons, reactExpressLessons, toMongoLessons, fullstackLessons } from './transitions.js';
import { htmlShell, htmlControls, cssShell } from './chat-milestones.js';
import { setup } from './setup.js';
import { foundations } from './foundations.js';
import { structure } from './structure.js';
import { formsMedia, deferredApis } from './forms-media.js';
import { cssLessons } from './css.js';
import { javascriptLessons } from './javascript.js';
import { realtimeLessons } from './realtime.js';
import { graduation, resources } from './resources.js';

export const modules = [
  { id: 'setup', title: 'Getting ready', subtitle: 'Your tools, your first hello', icon: '↗', color: 'peach' },
  { id: 'foundations', title: 'The HTML essentials', subtitle: 'Give your ideas a structure', icon: '◇', color: 'purple' },
  { id: 'appearance', title: 'Make it yours', subtitle: 'Color, links, and pictures', icon: '✳', color: 'pink' },
  { id: 'structure', title: 'Build with purpose', subtitle: 'Organize, connect, include', icon: '⊞', color: 'green' },
  { id: 'forms', title: 'Start a conversation', subtitle: 'Forms and friendly inputs', icon: '☷', color: 'yellow' },
  { id: 'media', title: 'Bring it to life', subtitle: 'Graphics, sound, and video', icon: '▷', color: 'blue' },
  { id: 'finish', title: 'HTML checkpoint', subtitle: 'Review structure before CSS.', icon: '⚑', color: 'purple' },
  { id: 'css', title: 'CSS: style the chat', subtitle: 'Selectors, layouts, responsive design', icon: '✳', color: 'pink' },
  { id: 'javascript', title: 'JavaScript foundations', subtitle: 'Values, functions, and messages', icon: '◇', color: 'yellow' },
  { id: 'js-dom', title: 'Make chat interactive', subtitle: 'DOM, events, browser tools', icon: '⊞', color: 'green' },
  { id: 'js-advanced', title: 'Deeper JavaScript', subtitle: 'Data, objects, and async code', icon: '↗', color: 'purple' },
  { id: 'js-apis', title: 'Browser APIs', subtitle: 'Storage, workers, and more', icon: '▷', color: 'blue' },
  { id: 'realtime', title: 'Real-time chat', subtitle: 'Node, HTTP, and live messages', icon: '⌁', color: 'peach' },
  { id: 'to-react', title: 'From vanilla to React', subtitle: 'Preserve the interface and contract', icon: '↗', color: 'peach' },
  { id: 'react', title: 'React', subtitle: 'Components, state, effects, and ecosystem', icon: '◇', color: 'blue' },
  { id: 'to-node', title: 'From React to Node', subtitle: 'Browser and server boundaries', icon: '↗', color: 'peach' },
  { id: 'node', title: 'Node.js', subtitle: 'Runtime, packages, services, and tools', icon: '⌁', color: 'green' },
  { id: 'to-express', title: 'From Node to Express', subtitle: 'Migrate the API deliberately', icon: '↗', color: 'peach' },
  { id: 'express', title: 'Express', subtitle: 'Routes, middleware, validation, live data', icon: '⊞', color: 'yellow' },
  { id: 'react-express', title: 'Connect React and Express', subtitle: 'Proxy, contracts, and live UI', icon: '↗', color: 'blue' },
  { id: 'to-mongodb', title: 'Prepare for persistence', subtitle: 'Separate storage from routes', icon: '↗', color: 'peach' },
  { id: 'mongodb', title: 'MongoDB', subtitle: 'Documents, queries, indexes, and drivers', icon: '⊞', color: 'green' },
  { id: 'node-data', title: 'Node database adapters', subtitle: 'MongoDB driver and SQL comparison labs', icon: '⌁', color: 'purple' },
  { id: 'fullstack', title: 'Connect the full stack', subtitle: 'Persistent React chat, verified end to end', icon: '⚑', color: 'blue' },
];
export const lessons = [...setup, ...foundations, ...structure.flatMap(lesson => lesson.id === 'semantic-layout' ? [lesson, htmlShell] : [lesson]), ...formsMedia.filter(lesson => lesson.module === 'forms').flatMap(lesson => lesson.id === 'form-input-validation-attributes' ? [lesson, htmlControls] : [lesson]), ...formsMedia.filter(lesson => lesson.module !== 'forms'), ...graduation, ...cssLessons.flatMap(lesson => lesson.id === 'css-flex' ? [lesson, cssShell] : [lesson]), ...javascriptLessons, ...realtimeLessons, ...toReactLessons, ...reactLessons, ...toNodeLessons, ...nodeLessons, ...toExpressLessons, ...expressLessons, ...reactExpressLessons, ...toMongoLessons, ...mongodbLessons, ...nodeDatabaseLessons, ...fullstackLessons];
export { deferredApis, resources };
export const sourceUrl = path => new URL(path, 'https://www.w3schools.com/html/').href;
export const sourceKey = path => new URL(sourceUrl(path)).pathname;
