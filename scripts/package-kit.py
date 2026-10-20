from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root=Path(__file__).resolve().parents[1]
downloads=root/'public/downloads'
with ZipFile(downloads/'chapter-zero-elements-kit.zip','w',ZIP_DEFLATED) as z:
    for f in (downloads/'elements').rglob('*'):
        if f.is_file(): z.write(f,'Chapter Zero Elements/'+f.name)
    z.write(downloads/'component-catalog.md','Chapter Zero Elements/component-catalog.md')
with ZipFile(downloads/'brand-components-source.zip','w',ZIP_DEFLATED) as z:
    for filename in ['src/components/BrandKit.jsx','src/components/brand-kit.css','src/brand-elements.js']:
        z.write(root/filename,filename)
    z.write(downloads/'component-catalog.md','README.md')
    z.writestr('src/base-styles.css', '''@font-face { font-family:Sora; src:url('./Sora-variable.ttf') format('truetype'); font-weight:100 800; font-display:swap; }
*{box-sizing:border-box}body{font-family:Sora,Arial,sans-serif;background:#FFFDF8;color:#0F4A2E}button,input,select,textarea{font:inherit}button{cursor:pointer;color:inherit}button:focus-visible,a:focus-visible{outline:3px solid #0F4A2E;outline-offset:3px}h2,h3{font-weight:600}p{color:#3D5A4A;line-height:1.8}.button{min-height:44px;display:inline-flex;align-items:center;justify-content:center;gap:10px;border-radius:8px;padding:12px 18px;font-size:12px;font-weight:600;border:1px solid #0F4A2E;text-decoration:none}.primary{background:#0F4A2E;color:#FFFDF8}.primary:hover{background:#102A1C}.text-button{border:0;background:none;padding:9px 0;display:inline-flex;align-items:center;gap:9px;font-size:11px;min-height:44px}.text-button:hover{text-decoration:underline}.eyebrow{font-size:9px;letter-spacing:.13em;font-weight:600;display:flex;align-items:center;gap:9px;text-transform:uppercase}
''')
    for filename in ['Sora-variable.ttf','Sora-OFL.txt']:
        z.write(root/'public/assets'/filename,'src/'+filename)
output=root/'public/downloads/chapter-zero-brand-kit.zip'
with ZipFile(output,'w',ZIP_DEFLATED) as z:
    for f in (root/'public/downloads').rglob('*'):
        if f.is_file() and f!=output:
            z.write(f,'Chapter Zero Brand Kit/'+str(f.relative_to(root/'public/downloads')))
    for f in (root/'public/assets').iterdir():
        if f.is_file(): z.write(f,'Chapter Zero Brand Kit/identity/'+f.name)
print('Packaged',output.name,output.stat().st_size,'bytes')
