import test from 'node:test';
import assert from 'node:assert/strict';
import {shapes,treatments,patterns,shapeSvg,patternSvg} from '../src/brand-elements.js';
test('every treatment produces SVG without unresolved color placeholders',()=>{for(const s of shapes)for(const t of Object.keys(treatments)){const svg=shapeSvg(s.id,t);assert.ok(svg.startsWith('<svg'));assert.ok(!/PRIMARY|SECONDARY|SURFACE/.test(svg));assert.ok(!svg.includes('undefined'));assert.ok(!svg.includes('<rect width="320"'))}});
test('patterns have an internally matched repeating tile',()=>{for(const p of patterns){const svg=patternSvg(p.id);assert.ok(svg.includes(`id="cz-${p.id}"`));assert.ok(svg.includes(`url(#cz-${p.id})`));assert.ok(svg.includes('patternUnits="userSpaceOnUse"'))}});
test('unknown shape and treatment are rejected',()=>{assert.throws(()=>shapeSvg('missing'));assert.throws(()=>shapeSvg('portal','missing'));assert.throws(()=>patternSvg('missing'))});
