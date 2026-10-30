---
name: nova-funcionalidade
description: "Adiciona uma funcionalidade nova às specs (requisitos, design e tarefas), sem escrever código"
argument-hint: "descreva a funcionalidade (ex.: escudo que deixa o dev imune por 5 s)"
agent: agent
---

O aluno descreveu uma funcionalidade nova depois do comando. **Não escreva código agora.** Atualize as specs de forma **incremental**, sem reescrever o que já existe:

1. Em [specs/requirements.md](../../specs/requirements.md), adicione um **novo requisito** numerado, com história de usuário e critérios EARS. Só altere requisitos existentes se houver conflito, e explique o conflito.
2. Em [specs/design.md](../../specs/design.md), ajuste apenas as seções afetadas: componentes, a tabela do `CONFIG`, os diagramas e as propriedades de corretude.
3. Em [specs/tasks.md](../../specs/tasks.md), adicione novas tarefas não marcadas (`- [ ]`) depois da última tarefa, com "Como verificar" e rastreabilidade (`_Requisitos: N.M_`).

Siga as [regras de escrita de specs](../instructions/specs.instructions.md).

## Resposta final

No chat, no máximo 6 linhas:

1. o requisito criado (número e título);
2. o que mudou no design;
3. as tarefas criadas (números);
4. este lembrete: "Revise, faça commit e rode `/4-implementar <número>`."
