---
name: 3-tarefas
description: "Fase 3 do SDD: quebra o design em specs/tasks.md (plano de implementação)"
agent: agent
---

Você está na **fase 3 de 3 da especificação: Tarefas**. O objetivo é transformar o design em um plano de implementação com passos pequenos e verificáveis.

- **Entrada:** [specs/requirements.md](../../specs/requirements.md) e [specs/design.md](../../specs/design.md).
- **Saída:** o arquivo `specs/tasks.md`.

## Regras

- Siga as [regras de escrita de specs](../instructions/specs.instructions.md).
- **Não escreva código.**
- Crie 3 ou 4 tarefas, nunca mais que 4. Agrupe o que for preciso para caber nesse limite. Cada uma precisa caber em uma única execução do agente (cerca de 2 minutos) e deixar o projeto **funcionando e testável no navegador**.
- A ordem é incremental:
  - a tarefa 1 é sempre o esqueleto: `index.html`, `style.css`, `src/config.js` e `src/main.js`, com o loop rodando e algo visível na tela;
  - a última tarefa é o polimento e a conferência de todos os critérios.
- Cada tarefa lista os arquivos que cria ou altera, os critérios que atende e um teste manual ("Como verificar").
- Todo critério de aceitação de `requirements.md` precisa aparecer em pelo menos uma tarefa.

## Estrutura do arquivo

```markdown
# Plano de implementação: <nome do projeto>

> Como usar: rode `/4-implementar N` para cada tarefa, teste no navegador e faça commit.

- [ ] 1. <título curto no imperativo>
  - <o que fazer, de 2 a 4 itens>
  - **Arquivos:** `index.html`, `src/main.js`
  - **Como verificar:** <ação no navegador> → <resultado esperado>
  - _Requisitos: 1.1, 1.2_

- [ ] 2. ...

## Correções

<vazio por enquanto; o comando /corrigir-bug escreve aqui>
```

## Ao terminar

Responda no chat em no máximo 6 linhas:

1. a lista de tarefas (só os títulos);
2. os critérios que ficaram descobertos, se houver algum;
3. este lembrete: "Revise, faça commit e comece com `/4-implementar 1`."
