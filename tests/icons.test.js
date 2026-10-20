import test from 'node:test';
import assert from 'node:assert/strict';
import {iconCatalog,iconSvg} from '../src/icons.js';
test('icon identities and meanings are complete and unique',()=>{assert.equal(iconCatalog.length,32);assert.equal(new Set(iconCatalog.map(i=>i.name)).size,32);for(const i of iconCatalog){assert.ok(i.label);assert.ok(i.category);assert.ok(i.paths)}});
test('every icon exports a consistent vector grid and explicit outline rules',()=>{for(const i of iconCatalog){const s=iconSvg(i.name);assert.ok(s.includes('viewBox="0 0 24 24"'));assert.ok(s.includes('stroke="currentColor"'));assert.ok(s.includes('stroke-width="2"'));assert.ok(s.includes('fill="none"'));assert.ok(s.includes('stroke-linecap="round"'))}});
test('icon exporter rejects untrusted names and attributes',()=>{assert.throws(()=>iconSvg('missing'));assert.throws(()=>iconSvg('book',{size:'24" onload="x'}));assert.throws(()=>iconSvg('book',{color:'red" onload="x'}));assert.throws(()=>iconSvg('book',{stroke:9}));assert.ok(iconSvg('book',{size:16}).includes('width="16"'))});
