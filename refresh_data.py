"""Automated Data Refresh for index.html (Official GitHub version).

Reads directly from the master tracker in COMMERCIAL WORKSPACE - 1.0 SALE_FORECAST,
filters out 'KA' and 'LOCAL', updates data payload inside index.html,
and preserves the self-contained standalone structure for GitHub / GitHub Pages.
"""
import os
import json
import re
import datetime
import subprocess
import pandas as pd
import warnings

warnings.filterwarnings('ignore')

MASTER_PATH = r"C:\Users\hung.phamtien\Rochdale Spears Co\COMMERCIAL WORKSPACE - 1.0 SALE_FORECAST\HS GENERAL TRACKER.xlsx"
LOCAL_PATH = "HS GENERAL TRACKER.xlsx"

if os.path.exists(MASTER_PATH):
    EXCEL_FILE = MASTER_PATH
    try:
        if os.path.exists(LOCAL_PATH) and os.stat(MASTER_PATH).st_ino != os.stat(LOCAL_PATH).st_ino:
            os.remove(LOCAL_PATH)
            try:
                os.link(MASTER_PATH, LOCAL_PATH)
            except Exception:
                import shutil
                shutil.copy2(MASTER_PATH, LOCAL_PATH)
    except Exception:
        pass
else:
    EXCEL_FILE = LOCAL_PATH

print(f"Loading data from: {EXCEL_FILE}")

# 1. Read Detail_New
df = pd.read_excel(EXCEL_FILE, sheet_name='Detail_New', skiprows=1)
df = df.dropna(subset=['PROJECT NAME'])

# 2. Filter out KA and LOCAL
df['PROJECT TYPE CLEAN'] = df['PROJECT TYPE'].astype(str).str.strip().str.upper()
df = df[~df['PROJECT TYPE CLEAN'].isin(['KA', 'LOCAL'])]

df['BREAK_VAL'] = pd.to_numeric(df['PROJECT BREAK VALUE'], errors='coerce').fillna(0)
df['PROJECT SKU'] = pd.to_numeric(df['PROJECT SKU'], errors='coerce').fillna(0)
df['STATUS'] = df['STATUS'].astype(str).str.strip()


def clean(v):
    return str(v).strip() if pd.notna(v) else 'TBC'


# 3. Aggregate at (PROJECT NAME, STATUS, STAGE) grain.
#    STAGE must be in the key: a project can appear as both an NPD prototype row
#    and an NPI production row at the same status, and those are distinct
#    milestones with their own SW dates, drawing status and break value.
records = {}
for _, r in df.iterrows():
    key = (str(r['PROJECT NAME']).strip(), str(r['STATUS']).strip(), clean(r['STAGE']))
    if key not in records:
        records[key] = {
            'name': key[0],
            'status': key[1],
            'customer': clean(r['CUSTOMER SHORTEN NAME']),
            'type': clean(r['PROJECT TYPE']),
            'stage': clean(r['STAGE']),
            'sku': int(r['PROJECT SKU']),
            'pic': clean(r['PIC']),
            'sw': f"{clean(r.get('CONFIRMED FIRST SW'))} - {clean(r.get('CONFIRMED LAST SW'))}",
            'drawing': clean(r.get('DRAWING\nSTATUS')),
            'veneer': clean(r.get('VENEER/WOOD\nSTATUS')),
            'metal': clean(r.get('METAL\nSTATUS')),
            'market': clean(r.get('MARKET')),
            'total_val': 0.0,
            'monthly': {},
        }
    rec = records[key]
    rec['total_val'] += float(r['BREAK_VAL'])
    m = clean(r['SHIP MONTH FC'])
    if m and m != 'TBC' and m != 'nan':
        rec['monthly'][m] = round(rec['monthly'].get(m, 0.0) + float(r['BREAK_VAL']), 2)

for rec in records.values():
    rec['total_val'] = round(rec['total_val'], 2)

lst = list(records.values())

# 4. Save to projects_data.json
with open('projects_data.json', 'w', encoding='utf-8') as f:
    json.dump(lst, f, ensure_ascii=False, indent=2)
print(f"Exported {len(lst)} records to projects_data.json")

# 5. Update index.html directly (preserving standalone self-contained format)
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

payload_str = 'const rawProjects = ' + json.dumps(lst, ensure_ascii=False, separators=(',', ':')) + ';'
html = re.sub(r'const rawProjects = \[.*?\];', payload_str, html, flags=re.DOTALL)

mtime = datetime.datetime.fromtimestamp(os.stat(EXCEL_FILE).st_mtime)
stamp = mtime.strftime('%b %d, %Y').replace(' 0', ' ')
html = re.sub(r'Refreshed: [A-Za-z]{3} \d{1,2}, \d{4}', f'Refreshed: {stamp}', html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print(f"Updated index.html successfully (Refresh stamp: {stamp})")

# 6. Rebuild dist/ if dist folder exists
if os.path.exists('package.json'):
    try:
        # Also sync src/main.js and main.js payload
        for js_path in ['src/main.js', 'main.js']:
            if os.path.exists(js_path):
                with open(js_path, 'r', encoding='utf-8') as f:
                    js = f.read()
                js = re.sub(r'const rawProjects = \[.*?\];', payload_str, js, flags=re.DOTALL)
                with open(js_path, 'w', encoding='utf-8') as f:
                    f.write(js)
        subprocess.run(['npm', 'run', 'build'], shell=True, capture_output=True, text=True)
        print("Updated dist/ bundle for Cloudflare Pages")
    except Exception as e:
        pass


# 7. Extract NPD Analysis sheet (for Page 4 - NPD Conversion)
npd_file = pd.read_excel(EXCEL_FILE, sheet_name='NPD Analysis', header=16, nrows=60)
npd_file = npd_file[npd_file['Project Name (Short)'].notna()]

npd_records = []
npd_index = {}
for _, r in npd_file.iterrows():
    outcome = clean(r['Outcome'])
    if outcome not in ('Won', 'In Progress', 'Lost'):
        continue
    rec = {
        'name': clean(r['Project Name (Short)']),
        'type': clean(r['Project Type']),
        'customer': clean(r['Customer']),
        'pic': clean(r['PIC']),
        'npd_status': clean(r['NPD Status']),
        'npi_status': clean(r['NPI Status']),
        'outcome': outcome,
        'proto_val': float(pd.to_numeric(r['NPD Prototype Value'], errors='coerce') or 0),
        'npi_val': float(pd.to_numeric(r['Total NPI Break Value'], errors='coerce') or 0),
    }
    npd_records.append(rec)
    npd_index[(rec['name'], rec['npd_status'], rec['npi_status'])] = rec

with open('npd_data.json', 'w', encoding='utf-8') as f:
    json.dump(npd_records, f, ensure_ascii=False, indent=2)
print(f"Exported {len(npd_records)} NPD records to npd_data.json")

# Inject NPD payload into standalone HTML files
with open('index.html', 'r', encoding='utf-8') as f:
    html_npd = f.read()
npd_payload = 'const npdProjects = ' + json.dumps(npd_records, ensure_ascii=False, separators=(',', ':')) + ';'
if 'const npdProjects = ' in html_npd:
    html_npd = re.sub(r'const npdProjects = \[.*?\];', npd_payload, html_npd, flags=re.DOTALL)
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(html_npd)
    print("Updated npdProjects payload in index.html")

for js_path in ['src/main.js', 'main.js']:
    if os.path.exists(js_path):
        with open(js_path, 'r', encoding='utf-8') as f:
            js = f.read()
        js = re.sub(r'const rawProjects = \[.*?\];', payload_str, js, flags=re.DOTALL)
        if 'const npdProjects = ' in js:
            js = re.sub(r'const npdProjects = \[.*?\];', npd_payload, js, flags=re.DOTALL)
        with open(js_path, 'w', encoding='utf-8') as f:
            f.write(js)
