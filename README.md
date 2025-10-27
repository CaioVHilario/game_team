# 🚀 Team Organizer App

Um aplicativo mobile para acabar com a bagunça na hora de organizar partidas de jogos. Crie turmas, nomeie-as e adicione participantes, separando-os automaticamente em "Time A" e "Time B".

<img width="1238" height="839" alt="image" src="https://github.com/user-attachments/assets/bc66e137-f436-44e8-a211-c0859247367e" />

---

### ✨ Funcionalidades Principais

* **Criação de Turmas:** Crie e nomeie múltiplas turmas ou "lobbies" de jogo.
* **Adição de Participantes:** Adicione novos jogadores a uma turma específica.
* **Divisão de Times:** Ao adicionar um participante, designe-o diretamente para o "Time A" ou "Time B" dentro da turma.
* **Visualização Clara:** Veja facilmente quais jogadores estão em quais times dentro de cada turma.
* **Exclusão:** Remova jogadores ou turmas inteiras.
* **Persistência de Dados:** As turmas e times são salvos localmente no dispositivo.

---

### 🛠️ Tecnologias Utilizadas

* **React Native:** Framework principal para o desenvolvimento.
* **TypeScript:** Para um código mais robusto e gerenciamento de tipos de dados.
* **Async Storage:** Para armazenamento local de dados no dispositivo.
* **React Navigation:** Para navegar da lista de turmas para os detalhes de uma turma.
* **Styled Components:** Para a estilização dos componentes.

---

### 📖 O que aprendi

Este projeto foi um desafio importante para aprender a gerenciar **estruturas de dados aninhadas (nested data)**:

* **Gerenciamento de Estado Complexo:** Lógica para manipular um estado que consiste em um array de "turmas", onde cada "turma" é um objeto que contém dois arrays ("timeA" e "timeB").
* **Manipulação Imutável de Estado:** Prática de adicionar ou remover um participante de um time específico dentro de uma turma específica sem mutar o estado original.
* **Passagem de Parâmetros (Params):** Enviar dados (como o `ID da turma`) entre diferentes telas do aplicativo.

---

### 🏃 Como rodar o projeto (Desenvolvimento)

Para rodar este projeto localmente, siga os passos abaixo:

```bash
# 1. Clone o repositório
git clone https://github.com/CaioVHilario/game_team.git

# 2. Acesse a pasta do projeto
cd game_team

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Inicie o Metro Bundler
npm start
# ou
yarn start

# 5. Rode no simulador ou dispositivo
# Em outro terminal, na mesma pasta:
npm run android
# ou
npm run ios

```

### Para Melhorar (Próximos Passos)

* [ ] Implementar funcionalidade de "Balanceamento Aleatório" dos times.
* [ ] Adicionar um placar (Score Tracker) para cada turma.
* [ ] **Desafio Backend:** Conectar o app a uma **API em Python/FastAPI** para que as turmas possam ser compartilhadas via um código de sala.

---

### 👨‍💻 Autor

**Caio Vieira Hilário**
