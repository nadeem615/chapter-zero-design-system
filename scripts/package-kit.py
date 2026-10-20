from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root=Path(__file__).resolve().parents[1]
output=root/'public/downloads/chapter-zero-brand-kit.zip'
with ZipFile(output,'w',ZIP_DEFLATED) as z:
    for f in (root/'public/downloads').rglob('*'):
        if f.is_file() and f!=output:
            z.write(f,'Chapter Zero Brand Kit/'+str(f.relative_to(root/'public/downloads')))
    for f in (root/'public/assets').iterdir():
        if f.is_file(): z.write(f,'Chapter Zero Brand Kit/identity/'+f.name)
print('Packaged',output.name,output.stat().st_size,'bytes')
