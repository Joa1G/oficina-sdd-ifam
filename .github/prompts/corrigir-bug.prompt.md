---
name: corrigir-bug
description: "Corrige um bug seguindo a spec: rastreia o requisito, acha a causa raiz e faz a menor correção"
argument-hint: "descreva o bug (ex.: o dev atravessa a borda direita da tela)"
agent: agent
---

O aluno descreveu um bug depois do comando. Corrija o bug seguindo o **fluxo de correção guiado por spec**:

1. **Entenda.** Reformule o bug em uma linha: comportamento atual × comportamento esperado.
2. **Rastreie.** Encontre em [specs/requirements.md](../../specs/requirements.md) o critério de aceitação que cobre esse comportamento.
   - Se **nenhum** critério cobre, a spec tem uma lacuna. Adicione um critério novo, no formato EARS, ao requisito adequado.
3. **Ache a causa raiz.** Leia o código e explique a causa em até 3 frases. Não corrija só o sintoma.
4. **Corrija com a menor mudança possível**, sem alterar nenhum outro comportamento. Respeite o [design](../../specs/design.md) e o `CONFIG`.
5. **Registre.** Em [specs/tasks.md](../../specs/tasks.md), na seção `## Correções`, adicione:
   `- [x] Bug: <resumo> | Causa: <causa raiz> | _Requisitos: N.M_`

## Resposta final

No chat, no máximo 6 linhas:

- **Causa:** ...
- **Correção:** os arquivos alterados;
- **Spec:** o critério usado ou criado;
- **Como verificar:** ...
- **Commit sugerido:** `git add -A && git commit -m "fix: <resumo>" && git push`
