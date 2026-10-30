---
name: 4-implementar
description: "Implementa uma tarefa de specs/tasks.md (ex.: /4-implementar 2)"
argument-hint: "número da tarefa (ex.: 1), um intervalo (ex.: 2-4) ou vazio para a próxima"
agent: agent
---

Você vai **implementar código guiado pela especificação**.

Antes de qualquer alteração, leia estes arquivos (contexto obrigatório):

- [specs/requirements.md](../../specs/requirements.md)
- [specs/design.md](../../specs/design.md)
- [specs/tasks.md](../../specs/tasks.md)

**Qual tarefa implementar:** a que o aluno indicou depois do comando (ex.: `2` ou `2-4`). Se ele não indicou nenhuma, implemente a primeira tarefa ainda não marcada (`- [ ]`). Se for um intervalo, implemente uma tarefa por vez, em ordem.

## Regras

1. Implemente **somente** o escopo da tarefa. Não adiante tarefas futuras e não adicione funcionalidades que não estão na spec.
2. Siga o design: nomes de arquivos, componentes, funções e o objeto `CONFIG`. Nenhum número mágico fora de `src/config.js`.
3. A spec é a fonte da verdade. Se ela estiver errada, incompleta ou contraditória para esta tarefa, **pare antes de codar**, explique o problema em até 3 linhas e proponha a correção na spec. Só continue depois que a spec for atualizada com o aceite do aluno.
4. Não inicie servidores nem instale pacotes: o aluno já roda um servidor na porta 8080.
5. Ao terminar cada tarefa:
   - verifique se há erros nos arquivos alterados e corrija;
   - marque a tarefa como concluída em `specs/tasks.md` (`- [x]`).

## Resposta final

No chat, no máximo 8 linhas por tarefa:

- **Feito:** os arquivos criados ou alterados;
- **Como verificar:** o teste manual da tarefa (lembre o aluno de recarregar com `Ctrl+Shift+R`);
- **Commit sugerido:** `git add -A && git commit -m "feat: <resumo> (tarefa N)" && git push`
