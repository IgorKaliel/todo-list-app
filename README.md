# To-Do List App - Atomic Design

---

## Overview / Visão Geral

**English:**  
This is a To-Do List application built using React and TypeScript, structured following the Atomic Design methodology. The app allows users to add, edit, complete, and remove tasks, with state persistence via localStorage and smooth animations for an enhanced user experience.

**Português:**  
Este é um aplicativo de Lista de Tarefas desenvolvido com React e TypeScript, estruturado seguindo a metodologia Atomic Design. O app permite adicionar, editar, concluir e remover tarefas, com persistência de estado via localStorage e animações suaves para uma melhor experiência do usuário.

---

## Project Structure / Estrutura do Projeto

**English:**  
The project is organized according to Atomic Design principles:  
- **Atoms:** Basic building blocks such as buttons, inputs, checkboxes.  
- **Molecules:** Combinations of atoms, e.g., a task item (checkbox + label + edit button).  
- **Organisms:** Groups of molecules, e.g., the task list container.  
- **Templates:** Page layout components assembling organisms.  
- **Pages:** Actual screens rendered to the user.

**Português:**  
O projeto está organizado segundo os princípios do Atomic Design:  
- **Átomos:** Componentes básicos como botões, campos de input, checkboxes.  
- **Moléculas:** Combinações de átomos, ex: item de tarefa (checkbox + texto + botão de editar).  
- **Organismos:** Grupos de moléculas, ex: container da lista de tarefas.  
- **Templates:** Componentes de layout que combinam organismos.  
- **Páginas:** Telas reais exibidas ao usuário.

---

## Technologies / Tecnologias

**English:**  
- React 19 + TypeScript  
- Vite + SWC for fast bundling  
- Tailwind CSS for styling  
- Framer Motion for animations  
- ESLint

**Português:**  
- React 19 + TypeScript  
- Vite + SWC para build rápido  
- Tailwind CSS para estilização  
- ESLint

---

## Features / Funcionalidades

**English:**  
- Add new tasks with validation  
- Mark tasks as completed/uncompleted  
- Edit task names inline  
- Remove completed tasks  
- Persist tasks in localStorage  
- Responsive design  
- Smooth animations on task state changes  
- Lint

**Português:**  
- Adicionar novas tarefas com validação  
- Marcar tarefas como concluídas/não concluídas  
- Editar o nome da tarefa inline  
- Remover tarefas concluídas  
- Persistência das tarefas no localStorage  
- Design responsivo  
- Animações suaves ao mudar estado da tarefa  
- Lint

---

## Getting Started / Como Rodar

```bash

# Clone
git clone https://github.com/seu-usuario/todo-list-app.git
cd todo-list-app

# Install
bun install

# Run for Dev
bun run dev

# Run Lint
bun run lint