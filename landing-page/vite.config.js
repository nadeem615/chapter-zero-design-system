import {defineConfig} from 'vite';
import {fileURLToPath} from 'node:url';

// The landing page is its own app; it consumes the design system read-only from the parent folder.
const system=fileURLToPath(new URL('../src',import.meta.url));
const assets=fileURLToPath(new URL('../public/assets',import.meta.url));

export default defineConfig({
 // Relative asset paths so dist/ works from any sub-path, e.g. GitHub Pages.
 base:'./',
 resolve:{alias:{'@cz':system,'@cz-assets':assets},dedupe:['react','react-dom','lucide-react']},
 server:{host:'127.0.0.1',port:5174,strictPort:true,fs:{allow:['..']}},
 preview:{host:'127.0.0.1',port:4174}
});
