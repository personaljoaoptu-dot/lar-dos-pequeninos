import re
import glob

html_classes = set()
file_class_map = {}

for html_file in sorted(glob.glob('*.html')):
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
        matches = re.findall(r'class=["\']([^"\']+)["\']', content)
        file_class_map[html_file] = set()
        for m in matches:
            for c in m.split():
                if not c.startswith('fa-') and not c.startswith('fa') and c != '':
                    html_classes.add(c)
                    file_class_map[html_file].add(c)

with open('style.css', 'r', encoding='utf-8') as f:
    css_content = f.read()

missing_classes = []
for c in sorted(html_classes):
    pattern = r'\.' + re.escape(c) + r'[\s\,\.\{\:\>]'
    if not re.search(pattern, css_content):
        missing_classes.append(c)

print(f"TOTAL UNIQUE HTML CLASSES: {len(html_classes)}")
print(f"MISSING CLASSES IN STYLE.CSS ({len(missing_classes)}):")
for mc in missing_classes:
    files_used = [f for f, classes in file_class_map.items() if mc in classes]
    print(f" - .{mc} (used in: {', '.join(files_used)})")
