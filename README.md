# 🔎 Buscador de Vagas no LinkedIn

Este é um buscador de vagas customizado que utiliza scraping para consultar oportunidades no LinkedIn com base em palavras-chave e localização. O projeto inclui um formulário inteligente com autocomplete de cidades do Brasil (via IBGE) e permite buscas por vagas remotas.

## ✨ Funcionalidades

- Busca de vagas com base em cargo e localização
- Autocomplete de cidades brasileiras via API do IBGE
- Filtro para vagas remotas no Brasil
- Carrossel de visualização com design responsivo
- Tema claro/escuro

## 🚀 Tecnologias

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Cheerio (scraper leve)
- API do IBGE para cidades

## ⚠️ Aviso legal

> Este projeto **utiliza scraping** da interface do LinkedIn para fins educacionais e experimentais. A API usada **não é oficial** nem pública. **Não publique esse scraper como um serviço aberto ao público**, pois isso **viola os Termos de Uso** do LinkedIn e pode resultar em bloqueio ou medidas legais.

O scraper foi desenvolvido apenas para fins pessoais ou educacionais. **Não é recomendada sua exposição pública (ex: hospedagem aberta na Vercel com link compartilhado).**

## 🖥️ Demonstração

Assista a um vídeo demonstrando o funcionamento aqui:  
📽️ [Link para vídeo no YouTube ou Loom]

## 📂 Como rodar localmente

```bash
git clone https://github.com/duddanobre/linkedin-scrapper-next.git
cd linkedin-scrapper-next
npm install
npm run dev
