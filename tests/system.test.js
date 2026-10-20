import test from 'node:test';
import assert from 'node:assert/strict';
import {sections,contrast,templateSvg,escapeXml,pillars} from '../src/system.js';
test('section routes are unique',()=>assert.equal(new Set(sections.map(s=>s.id)).size,sections.length));
test('contrast calculations preserve palette restrictions',()=>{assert.ok(contrast('#0F4A2E','#FFFDF8')>10);assert.ok(contrast('#1F8A55','#FFFDF8')<4.5);assert.ok(contrast('#102A1C','#EE6A1B')>=4.5);assert.equal(contrast('#FFFDF8','#FFFDF8'),1)});
test('editable templates escape user copy and declare requested dimensions',()=>{for(const format of ['portrait','square','story']){const svg=templateSvg({title:'<script> & book',body:'A "reader"',pillar:'Book exchange',format});assert.ok(!svg.includes('<script>'));assert.ok(svg.includes('&lt;script&gt;'));assert.ok(svg.includes(format==='story'?'height="1920"':format==='square'?'height="1080"':'height="1350"'))}});
test('all four community pillars have a creative starter',()=>assert.equal(pillars.length,4));
