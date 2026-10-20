import {test,expect} from '@playwright/test';
test('logo guide demonstrates formats, protected space, sizing and misuse',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/#identity');
 await expect(page.getByRole('heading',{name:'Protect the space around it.'})).toBeVisible();await expect(page.locator('.logo-format-card')).toHaveCount(5);await expect(page.locator('.logo-misuse')).toHaveCount(6);
 await page.getByRole('combobox',{name:'Signature',exact:true}).selectOption('mark');await expect(page.locator('.logo-size-preview svg')).toHaveAttribute('aria-label','Standalone mark Chapter Zero logo');
 await page.getByRole('slider',{name:'Logo preview width'}).fill('30');await expect(page.getByText('Below the working minimum. Use an approved smaller variant.')).toBeVisible();
 for(const url of await page.locator('main a[download]').evaluateAll(nodes=>nodes.map(a=>a.href))){const r=await page.request.get(url);expect(r.ok()).toBeTruthy();expect(r.headers()['content-type']).not.toContain('text/html')}
 await page.screenshot({path:'screenshots/logo-guide.png',fullPage:true});expect(errors).toEqual([]);
});
test('icon catalog search, filters, size, download and accessible examples',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/#icons');await expect(page.locator('.icon-tile')).toHaveCount(32);
 await page.getByLabel('Search icons').fill('exchange');await expect(page.locator('.icon-tile')).toHaveCount(1);await page.getByRole('button',{name:'Inspect Exchange',exact:true}).click();await expect(page.locator('.icon-inspector code')).toContainText('name="exchange"');
 await page.getByLabel('Preview size').selectOption('32');await expect(page.locator('.icon-tile svg')).toHaveAttribute('width','32');
 await page.getByLabel('Dark surface').check();await expect(page.locator('.icon-catalog')).toHaveClass(/icon-catalog--dark/);
 const dl=page.waitForEvent('download');await page.getByRole('button',{name:'Download SVG',exact:true}).click();expect((await dl).suggestedFilename()).toBe('CZ_icon_exchange.svg');
 await page.getByLabel('Search icons').fill('no matching icon');await expect(page.getByRole('heading',{name:'No icons match your search.'})).toBeVisible();await page.getByRole('button',{name:'Reset icon filters'}).click();await expect(page.locator('.icon-tile')).toHaveCount(32);
 const r=await page.request.get('/downloads/chapter-zero-icons.zip');expect(r.ok()).toBeTruthy();expect(r.headers()['content-type']).not.toContain('text/html');
 await page.getByRole('button',{name:'Save book example'}).click();await expect(page.getByText('Save control example activated.')).toBeVisible();
 await page.screenshot({path:'screenshots/iconography.png',fullPage:true});expect(errors).toEqual([]);
});
test('logo and icon pages reflow on mobile',async({page})=>{await page.emulateMedia({reducedMotion:'reduce'});await page.setViewportSize({width:390,height:844});for(const route of ['identity','icons']){await page.goto('/#'+route);expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route).toBeTruthy()}await page.screenshot({path:'screenshots/icons-mobile.png',fullPage:true})});
