import {test,expect} from '@playwright/test';
test('library sections, studio export, examples, and review persistence',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');await expect(page.getByRole('heading',{name:/Good books/})).toBeVisible();
 await page.screenshot({path:'screenshots/desktop.png',fullPage:true});
 await page.getByRole('navigation').getByRole('button',{name:'Color',exact:true}).click();
 await expect(page.getByText('10.13:1')).toBeVisible();
 await page.getByRole('navigation').getByRole('button',{name:'Components',exact:true}).click();
 await page.getByRole('button',{name:'Save recommendation',exact:true}).click();await expect(page.getByRole('button',{name:'Saved locally'})).toBeVisible();
 await page.getByRole('button',{name:'Spoilers ahead · Reveal example'}).click();await expect(page.getByText(/This is where a spoiler-marked/)).toBeVisible();
 await page.getByRole('button',{name:'Validate example'}).click();await expect(page.getByText(/Add a title so readers/)).toBeVisible();
 await page.getByRole('button',{name:'Open dialog example'}).click();await expect(page.getByRole('dialog')).toBeVisible();await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);await expect(page.getByRole('button',{name:'Open dialog example'})).toBeFocused();
 await page.getByRole('navigation').getByRole('button',{name:'Creative studio',exact:true}).click();
 await page.getByRole('textbox',{name:'Headline',exact:true}).fill('A fresh perspective');const event=page.waitForEvent('download');await page.getByRole('button',{name:'Export editable SVG'}).click();expect((await event).suggestedFilename()).toContain('.svg');
 await page.getByRole('navigation').getByRole('button',{name:'Governance',exact:true}).click();await page.getByRole('checkbox').first().check();await page.reload();await expect(page.getByRole('checkbox').first()).toBeChecked();
 await page.getByRole('navigation').getByRole('button',{name:'Asset library',exact:true}).click();const assets=await page.locator('main a[download]').evaluateAll(as=>as.map(a=>a.href));for(const url of assets){const r=await page.request.get(url);expect(r.ok(),url).toBeTruthy();expect(r.headers()['content-type']).not.toContain('text/html')}
 expect(errors).toEqual([]);
});
test('mobile navigation and viewport fit',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');await expect(page.getByRole('heading',{name:/Good books/})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
 await page.getByRole('button',{name:'Open navigation'}).click();await page.getByRole('navigation').getByRole('button',{name:'Creative studio',exact:true}).click();await expect(page.getByRole('heading',{name:'Creative studio',exact:true})).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();await page.screenshot({path:'screenshots/mobile-studio.png',fullPage:true});
});
