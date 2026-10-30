# Fazendo a oficina na sua máquina

Use este caminho se o Codespace não abrir, ficar lento ou estiver bloqueado na rede, ou se você preferir trabalhar no seu computador. O Copilot continua precisando de internet; o que muda é que o editor e o jogo rodam na sua máquina, e a conexão fica só para o Copilot e para o `git push`.

Depois do Passo 0 abaixo, siga o [README](README.md) a partir do Passo 1, com os ajustes da seção "O que muda nos outros passos".

## O que instalar

| Ferramenta | Para quê | Onde baixar |
|---|---|---|
| VS Code | O editor, com o Copilot | <https://code.visualstudio.com> |
| Git | Versionar e enviar para o GitHub | <https://git-scm.com/downloads> |
| Node.js **ou** Python | Servidor local para abrir o jogo (um dos dois basta) | <https://nodejs.org> ou <https://www.python.org/downloads> |

No VS Code:

1. Entre com a sua conta do GitHub pelo ícone de contas, no canto inferior da barra lateral esquerda.
2. Confira se o Copilot está ativo: o ícone dele aparece na barra de status, embaixo. Se não estiver, ative o plano Free em <https://github.com/settings/copilot>.
3. Opcional: instale a extensão **Markdown Preview Mermaid Support** (`bierner.markdown-mermaid`) para ver os diagramas do design desenhados no preview.
4. Ative o salvamento automático em **File → Auto Save**. O servidor do jogo só enxerga arquivos salvos.

## Passo 0 local: seu repositório na sua máquina

1. Crie o seu repositório pelo template, como nos itens 1 e 2 do Passo 0 do README (**Use this template → Create a new repository**, visibilidade **Public**).
2. No VS Code, abra a paleta de comandos com `Ctrl+Shift+P` e rode **Git: Clone**. Escolha **Clone from GitHub**, selecione o seu repositório e uma pasta no computador.
3. Quando o VS Code perguntar, abra a pasta clonada. Ela precisa ser a pasta raiz do repositório, onde está a pasta `.github`; é de lá que o Copilot lê as instruções e os comandos.
4. Abra o **Chat do Copilot** com `Ctrl+Alt+I` e escolha o modo **Agent**.

Pronto: siga para o Passo 1 do README.

## O que muda nos outros passos

### Servidor do jogo (Passo 5)

Rode um destes comandos no terminal do VS Code, conforme o que você instalou:

```bash
# com Node.js
npx --yes http-server -c-1 -p 8080

# com Python (no Windows, troque python por py)
python -m http.server 8080
```

Depois abra <http://localhost:8080> no navegador. Não abra o `index.html` com duplo clique: o jogo usa módulos JavaScript, e o navegador bloqueia módulos abertos direto do disco.

Com o servidor do Python, o navegador pode guardar a versão antiga dos arquivos. Recarregue sempre com `Ctrl+Shift+R`.

### Commits no Windows

O terminal padrão do VS Code no Windows (Windows PowerShell) não aceita `&&`, que aparece nos comandos de commit do README. Você tem duas saídas:

- trocar o terminal para **Git Bash**, pela seta ao lado do **+** no painel do terminal;
- ou rodar os comandos um por vez:

  ```bash
  git add -A
  git commit -m "docs: requisitos"
  git push
  ```

No primeiro `git push`, o Git pode abrir o navegador para você entrar no GitHub. Autorize e volte para o VS Code.

### Publicação (Passo 6)

Igual ao README: tudo acontece no site do GitHub.

## Problemas comuns

| Sintoma | O que fazer |
|---|---|
| `python` abre a Microsoft Store | Use `py -m http.server 8080` ou reinstale o Python marcando **Add python.exe to PATH**. |
| `npx` não é reconhecido | O Node.js não está instalado. Use a opção com Python. |
| Página em branco e erro de módulo ou CORS no Console (`F12`) | O jogo foi aberto direto do disco. Use o servidor e o endereço <http://localhost:8080>. |
| Os comandos `/1-requisitos` etc. não aparecem | Confira se a pasta aberta é a raiz do repositório (onde está `.github`) e se o chat está no modo **Agent**. |
| A porta 8080 está ocupada | Troque o número no comando e no endereço, por exemplo `8081`. |
| `git push` pede usuário e senha no terminal | Use a opção **Sync Changes** do painel de controle de código (`Ctrl+Shift+G`), que usa o login do VS Code. |
