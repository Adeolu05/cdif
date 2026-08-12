import json
import re
import os

log = r'C:\Users\USER\.gemini\antigravity-ide\brain\dfb89a2b-0d6b-4487-b015-40a632e9db39\.system_generated\logs\transcript_full.jsonl'
files = {}

try:
    with open(log, 'r', encoding='utf-8') as f:
        for line in f:
            try:
                obj = json.loads(line)
            except: continue
            
            # Stop recovering from events after the truncation happened
            if obj.get('created_at', '') > '2026-08-12T11:19:20Z':
                continue
                
            if obj.get('type') == 'VIEW_FILE':
                c = obj.get('content', '')
                lines = c.split('\n')
                path = ''
                file_lines = []
                for l in lines:
                    if 'File Path:' in l and '.jsx' in l:
                        m = re.search(r'cdif/(.*?\.jsx)', l.replace('\\', '/'), re.IGNORECASE)
                        if m: path = m.group(1).replace('/', '\\')
                    elif re.match(r'^\d+: ', l):
                        file_lines.append(l.split(': ', 1)[1])
                if path and file_lines:
                    files[path.lower()] = '\n'.join(file_lines)

            elif obj.get('type') == 'PLANNER_RESPONSE':
                for tc in obj.get('tool_calls', []):
                    args = tc.get('args', {})
                    if tc.get('name') == 'write_to_file':
                        if 'TargetFile' in args and 'CodeContent' in args:
                            p = args['TargetFile'].lower().replace('/', '\\')
                            if 'cdif\\' in p:
                                p = p.split('cdif\\')[-1]
                            files[p] = args['CodeContent']
                            
                    elif tc.get('name') in ['replace_file_content', 'multi_replace_file_content']:
                        if 'TargetFile' in args:
                            p = args['TargetFile'].lower().replace('/', '\\')
                            if 'cdif\\' in p:
                                p = p.split('cdif\\')[-1]
                            if p in files:
                                if tc.get('name') == 'replace_file_content':
                                    files[p] = files[p].replace(args['TargetContent'], args['ReplacementContent'])
                                elif tc.get('name') == 'multi_replace_file_content':
                                    for chunk in args['ReplacementChunks']:
                                        files[p] = files[p].replace(chunk['TargetContent'], chunk['ReplacementContent'])

    for k, v in files.items():
        if not k.endswith('.jsx'): continue
        out_path = os.path.join(r'C:\Users\USER\Projects\CDIF', k)
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        with open(out_path, 'w', encoding='utf-8') as out:
            out.write(v)
        print(f'Recovered {k} ({len(v)} bytes)')

except Exception as e:
    import traceback
    traceback.print_exc()
