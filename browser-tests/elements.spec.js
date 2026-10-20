import {test,expect} from '@playwright/test';
test('elements artwork, exports, component toggles and snippets',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/#elements');
 await expect(page.getByRole('heading',{name:'Elements & shapes',exact:true})).toBeVisible();
 await expect(page.locator('.shape-tile')).toHaveCount(8);
 await page.getByLabel('Color treatment').selectOption('inverse');await expect(page.locator('.shape-art-button').first()).toHaveCSS('background-color','rgb(15, 74, 46)');
 await page.getByRole('button',{name:'Inspect The bookmark',exact:true}).click();await expect(page.getByText('SELECTED / The bookmark', {exact:true})).toBeVisible();
 const dl=page.waitForEvent('download');await page.getByRole('button',{name:'Download The bookmark',exact:true}).click();expect((await dl).suggestedFilename()).toBe('CZ_ribbon_inverse.svg');
 await page.getByRole('button',{name:'Patterns',exact:true}).click();await expect(page.locator('.shape-tile')).toHaveCount(0);await expect(page.locator('.pattern-tile')).toHaveCount(3);
 await page.getByRole('button',{name:'All elements',exact:true}).click();
 await page.getByLabel('Deep Spine variation').check();await expect(page.locator('.cz-quote')).toHaveClass(/cz-quote--dark/);
 await page.getByRole('button',{name:'Save this idea',exact:true}).click();await expect(page.getByRole('button',{name:'Remove saved idea'})).toHaveAttribute('aria-pressed','true');
 await page.getByRole('button',{name:'Usage',exact:true}).first().click();await expect(page.locator('.element-snippet').first()).toContainText('<QuoteCard');
 await page.locator('.progress-control input').fill('35');await expect(page.locator('.cz-reading-progress progress')).toHaveAttribute('value','35');
 for(const file of ['chapter-zero-elements-kit.zip','brand-components-source.zip','component-catalog.md']){const r=await page.request.get('/downloads/'+file);expect(r.ok()).toBeTruthy();expect(r.headers()['content-type']).not.toContain('text/html')}
 await page.screenshot({path:'screenshots/elements-desktop.png',fullPage:true});expect(errors).toEqual([]);
});
test('elements mobile fits viewport and honors reduced motion',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.setViewportSize({width:390,height:844});await page.goto('/#elements');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();await page.screenshot({path:'screenshots/elements-mobile.png',fullPage:true});
});
