#!/usr/bin/env python3
import markdown
from weasyprint import HTML, CSS
import sys

# Ler o arquivo Markdown
with open('CURRICULO_PDF.md', 'r', encoding='utf-8') as f:
    md_content = f.read()

# Converter Markdown para HTML
html_content = markdown.markdown(md_content, extensions=['extra', 'nl2br'])

# HTML completo com estilos
html_template = f"""
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currículo - Cauã Costa</title>
    <style>
        @page {{
            size: A4;
            margin: 2cm;
        }}
        
        body {{
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 100%;
            margin: 0;
            padding: 0;
        }}
        
        h1 {{
            color: #2563eb;
            font-size: 32px;
            margin-bottom: 5px;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 10px;
        }}
        
        h2 {{
            color: #1e40af;
            font-size: 18px;
            margin-top: 5px;
            margin-bottom: 20px;
            font-weight: normal;
        }}
        
        h3 {{
            color: #2563eb;
            font-size: 16px;
            margin-top: 25px;
            margin-bottom: 10px;
            text-transform: uppercase;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 5px;
        }}
        
        h4 {{
            color: #1f2937;
            font-size: 14px;
            margin-top: 15px;
            margin-bottom: 5px;
        }}
        
        p {{
            margin: 8px 0;
            font-size: 11px;
        }}
        
        strong {{
            color: #1f2937;
            font-weight: 600;
        }}
        
        ul, ol {{
            margin: 8px 0;
            padding-left: 20px;
        }}
        
        li {{
            margin: 4px 0;
            font-size: 11px;
        }}
        
        hr {{
            border: none;
            border-top: 1px solid #e5e7eb;
            margin: 15px 0;
        }}
        
        a {{
            color: #2563eb;
            text-decoration: none;
        }}
        
        code {{
            background-color: #f3f4f6;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: 'Courier New', monospace;
            font-size: 10px;
        }}
        
        /* Estilos específicos para seções */
        .contact-info {{
            font-size: 11px;
            margin-bottom: 15px;
        }}
        
        .section {{
            margin-bottom: 20px;
            page-break-inside: avoid;
        }}
        
        /* Símbolos especiais */
        .bullet {{
            color: #2563eb;
        }}
    </style>
</head>
<body>
    {html_content}
</body>
</html>
"""

# Gerar PDF
try:
    HTML(string=html_template).write_pdf('Caua_Costa_Curriculo.pdf')
    print("✅ PDF gerado com sucesso: Caua_Costa_Curriculo.pdf")
except Exception as e:
    print(f"❌ Erro ao gerar PDF: {e}")
    sys.exit(1)
