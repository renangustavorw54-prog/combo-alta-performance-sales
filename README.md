# COMBO ALTA PERFORMANCE - Página de Vendas

Uma página de vendas moderna, profissional e responsiva para o combo de ebooks digitais **COMBO ALTA PERFORMANCE**.

## 📋 Conteúdo do Projeto

```
combo-alta-performance-sales/
├── index.html          # Página principal (HTML)
├── css/
│   └── style.css       # Estilos (CSS moderno e responsivo)
├── js/
│   └── script.js       # Interatividade (JavaScript)
├── images/             # Pasta para imagens (se necessário)
└── README.md           # Este arquivo
```

## 🎯 Características

### Design
- ✅ Design moderno e clean
- ✅ Cores profissionais (gradientes azul e roxo)
- ✅ Totalmente responsivo (mobile, tablet, desktop)
- ✅ Animações suaves e transições
- ✅ Tipografia profissional

### Seções
- ✅ Navegação fixa com logo e menu
- ✅ Hero section com headline impactante
- ✅ Seção de benefícios (6 cards)
- ✅ Seção de aprendizados (6 itens numerados)
- ✅ Seção dos 2 ebooks com detalhes completos
- ✅ CTA section com preço e garantia
- ✅ FAQ com 7 perguntas frequentes (accordion)
- ✅ Seção de checkout com resumo e formas de pagamento
- ✅ Footer completo

### Interatividade
- ✅ FAQ accordion funcional
- ✅ Scroll suave entre seções
- ✅ Animações ao entrar em viewport
- ✅ Botões com hover effects
- ✅ Seleção de formas de pagamento
- ✅ Links de navegação responsivos

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Faça download dos arquivos
2. Abra o arquivo `index.html` em seu navegador
3. A página funcionará completamente offline

### Opção 2: Publicar Online

#### Usando GitHub Pages
```bash
# 1. Crie um repositório no GitHub
# 2. Faça upload dos arquivos
# 3. Vá em Settings > Pages
# 4. Selecione a branch main
# 5. Sua página estará em: https://seu-usuario.github.io/seu-repositorio
```

#### Usando Netlify
```bash
# 1. Acesse netlify.com
# 2. Clique em "New site from Git"
# 3. Conecte seu repositório GitHub
# 4. Configure a build (deixe em branco para arquivos estáticos)
# 5. Deploy automático!
```

#### Usando Vercel
```bash
# 1. Acesse vercel.com
# 2. Clique em "New Project"
# 3. Importe seu repositório GitHub
# 4. Deploy automático em segundos!
```

#### Usando Servidor Web Tradicional
```bash
# 1. Faça upload dos arquivos via FTP/SFTP
# 2. Acesse seu domínio
# 3. Pronto!
```

## 🎨 Personalização

### Cores
Edite as variáveis CSS em `css/style.css`:
```css
:root {
    --primary-color: #667eea;      /* Azul principal */
    --secondary-color: #764ba2;    /* Roxo */
    --accent-color: #f5576c;       /* Rosa/vermelho */
    --text-dark: #1a1a1a;          /* Texto escuro */
    --text-light: #666666;         /* Texto claro */
    --bg-light: #f8f9fa;           /* Fundo claro */
}
```

### Textos
Edite diretamente no `index.html`:
- Headline: `<h1 class="headline">`
- Subheadline: `<p class="subheadline">`
- Preço: `<span class="amount">27,90</span>`
- Benefícios, aprendizados, ebooks, FAQ, etc.

### Imagens
Adicione imagens na pasta `images/` e referencie no HTML:
```html
<img src="images/seu-arquivo.jpg" alt="Descrição">
```

### Formas de Pagamento
Edite a seção de checkout para adicionar seus links de pagamento:
```html
<button class="btn btn-primary btn-large">Prosseguir com o Pagamento</button>
```

## 📱 Responsividade

A página é totalmente responsiva com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

## ♿ Acessibilidade

- ✅ Semântica HTML correta
- ✅ Contraste de cores adequado
- ✅ Navegação por teclado
- ✅ Alt text em imagens
- ✅ ARIA labels onde necessário

## 🔧 Funcionalidades JavaScript

### Funções Disponíveis

#### `toggleFAQ(element)`
Abre/fecha itens do FAQ
```javascript
toggleFAQ(this); // Chamado no onclick do botão
```

#### `scrollToCheckout()`
Rola suavemente para a seção de checkout
```javascript
scrollToCheckout(); // Chamado nos botões CTA
```

#### `copyToClipboard(text, buttonElement)`
Copia texto para clipboard
```javascript
copyToClipboard('seu-texto', this);
```

#### `validateForm(formId)`
Valida um formulário
```javascript
if (validateForm('meu-form')) {
    // Enviar dados
}
```

## 📊 SEO

A página inclui:
- ✅ Meta tags descritivas
- ✅ Título otimizado
- ✅ Descrição meta
- ✅ Estrutura semântica
- ✅ Headings hierárquicos

### Para melhorar SEO:
1. Adicione `sitemap.xml`
2. Adicione `robots.txt`
3. Configure Google Search Console
4. Adicione Schema.org structured data
5. Otimize imagens (use WebP)

## 🔒 Segurança

- ✅ Sem dependências externas perigosas
- ✅ Código limpo e validado
- ✅ Sem vulnerabilidades conhecidas
- ✅ HTTPS recomendado para produção

## 📈 Analytics

Para adicionar rastreamento, insira no `<head>` do `index.html`:

### Google Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Facebook Pixel
```html
<!-- Facebook Pixel -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  // ... resto do código
</script>
```

## 🐛 Troubleshooting

### Página não carrega
- Verifique se todos os arquivos estão na pasta correta
- Verifique os caminhos dos arquivos CSS e JS
- Abra o console do navegador (F12) para ver erros

### Estilos não aparecem
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se o arquivo `css/style.css` existe
- Verifique o caminho relativo no HTML

### JavaScript não funciona
- Verifique se o arquivo `js/script.js` existe
- Abra o console (F12) para ver erros
- Verifique se o navegador suporta ES6

## 📝 Licença

Este projeto é fornecido como está. Você é livre para usar, modificar e distribuir.

## 💬 Suporte

Se tiver dúvidas ou encontrar problemas:
1. Verifique a seção de Troubleshooting
2. Consulte a documentação HTML/CSS/JavaScript
3. Teste em diferentes navegadores
4. Valide o código em W3C Validator

## 🎉 Próximos Passos

1. **Integrar Pagamento**: Adicione Stripe, PayPal ou outro gateway
2. **Email Marketing**: Integre com Mailchimp, ConvertKit, etc.
3. **Analytics**: Configure Google Analytics
4. **CRM**: Integre com seu CRM favorito
5. **Automação**: Configure funil de vendas

---

**Versão**: 1.0  
**Última atualização**: 2024  
**Status**: Pronto para produção ✅
