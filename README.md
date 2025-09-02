# CSS3 Avançado: Flexbox & Grid

Uma apresentação web interativa e moderna sobre CSS3 Flexbox e Grid Layout, desenvolvida com HTML5, CSS3 e JavaScript vanilla.

## 🎯 Sobre o Projeto

Esta é uma apresentação educacional interativa que ensina os conceitos fundamentais de **CSS Flexbox** e **CSS Grid**, duas das tecnologias mais importantes para criação de layouts modernos na web. A apresentação foi desenvolvida com foco na experiência do usuário, oferecendo navegação intuitiva e design responsivo.

## ✨ Características

### 🎨 Design Moderno
- Interface limpa e profissional
- Paleta de cores suaves (tons pastéis)
- Tipografia Inter para melhor legibilidade
- Gradientes e sombras sutis
- Animações suaves de transição

### 🚀 Funcionalidades Interativas
- **Navegação por teclado**: Use as setas do teclado para navegar
- **Suporte a touch/swipe**: Navegação por gestos em dispositivos móveis
- **Barra de progresso**: Acompanhe o progresso da apresentação
- **Contador de slides**: Visualize slide atual e total
- **Auto-hide do cursor**: Cursor desaparece após inatividade (ideal para apresentações)
- **Botões de navegação**: Controles visuais para avançar/retroceder

### 📱 Responsivo
- Design adaptável para diferentes tamanhos de tela
- Otimizado para desktop, tablet e mobile
- Layout flexível usando CSS Grid e Flexbox

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da apresentação
- **CSS3**: Estilos, animações e layout responsivo
- **JavaScript (Vanilla)**: Funcionalidades interativas e navegação
- **Tailwind CSS**: Framework CSS para estilização rápida
- **Google Fonts**: Tipografia Inter

## 📋 Conteúdo da Apresentação

A apresentação aborda os seguintes tópicos:

1. **Introdução**: Objetivos e visão geral
2. **Flexbox**: Conceitos fundamentais e propriedades
3. **CSS Grid**: Layout bidimensional e suas aplicações
4. **Exemplos práticos**: Demonstrações visuais e código
5. **Boas práticas**: Dicas e recomendações
6. **Exercícios**: Atividades práticas para fixação

## 🚀 Como Usar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para carregar Tailwind CSS e Google Fonts)

### Instalação e Execução

1. **Clone o repositório**:
```bash
git clone https://github.com/seu-usuario/css3-flexbox-grid-presentation.git
cd css3-flexbox-grid-presentation
```

2. **Abra o arquivo HTML**:
   - Abra o arquivo `index.html` diretamente no seu navegador
   - Ou use um servidor local como Live Server (VS Code) ou Python SimpleHTTPServer

3. **Navegue pela apresentação**:
   - Use as **setas do teclado** (←→ ou ↑↓) para navegar
   - **Clique** nos botões "Anterior" e "Próximo"
   - **Deslize** (swipe) em dispositivos touch

## 📁 Estrutura do Projeto

```
css3-flexbox-grid-presentation/
├── index.html          # Estrutura principal da apresentação
├── main.js            # Lógica de navegação e interatividade
├── style.css          # Estilos customizados e animações
└── README.md          # Documentação do projeto
```

### Arquivos Principais

- **`index.html`**: Contém toda a estrutura da apresentação com 12 slides, incluindo exemplos práticos, código CSS e demonstrações visuais
- **`main.js`**: Implementa a funcionalidade de slideshow com suporte a navegação por teclado, touch/swipe e controles visuais
- **`style.css`**: Define animações personalizadas e estilos complementares ao Tailwind CSS

## 🎮 Controles de Navegação

| Ação | Método |
|------|--------|
| Próximo slide | `→` `↓` ou botão "Próximo" ou swipe esquerda |
| Slide anterior | `←` `↑` ou botão "Anterior" ou swipe direita |
| Primeira apresentação | Recarregar página |

## 🎨 Personalização

### Cores
As cores podem ser personalizadas editando a configuração do Tailwind no arquivo `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: "#E6F3FF",
          purple: "#F0E6FF",
          // ... outras cores
        }
      }
    }
  }
}
```

### Conteúdo
Para adicionar ou modificar slides, edite o arquivo `index.html` e ajuste a variável `totalSlides` no `main.js` se necessário.

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido com ❤️ para fins educacionais.

---

**⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!**
