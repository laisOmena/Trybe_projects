## Comandos

### Obtendo e criando projetos

Inicializa um repositório Git local

<aside>
💡 git init

</aside>

Cria uma cópia local de um repositório remoto

<aside>
💡 git clone ssh://git@github.com/[usuario]/[nome-repositorio].git

</aside>

### Básicos

Checa o status

<aside>
💡 git status

</aside>

Adiciona um arquivo para área de stage

<aside>
💡 git add [nome-arquivo.txt]

</aside>

Adiciona todos os arquivos novos ou modificados para a área de stage

<aside>
💡 git add -A

</aside>

Comita as alterações

<aside>
💡 git commit -m "[Mensagem de Commit]”

</aside>

Remove um arquivo (ou pasta)

<aside>
💡 git rm -r [nome-arquivo.txt]

</aside>

### ****Branching & Merging****

Lista as branches (o asterisco denota a branch atual)

<aside>
💡 git branch

</aside>

Lista todas as branches (local e remoto)

<aside>
💡 git branch -a

</aside>

Cria uma nova branch

<aside>
💡 git branch [nome da branch]

</aside>

Deleta uma branch

<aside>
💡 git branch -d [nome da branch]

</aside>

Deleta uma branch remota

<aside>
💡 git push origin --delete [nome da branch]

</aside>

Cria uma nova branch e muda para ela

<aside>
💡 git checkout -b [nome da branch]

</aside>

Clona uma branch remota e muda para ela

<aside>
💡 git checkout -b [nome da branch] origin/[nome da branch]

</aside>

Seleciona uma branch

<aside>
💡 git checkout [nome da branch]

</aside>

Muda para a última branch

<aside>
💡 git checkout -

</aside>

Descarta modificações de um arquivo

<aside>
💡 git checkout -- [nome-arquivo.txt]

</aside>

Faz um merge de uma branch na branch atual

<aside>
💡 git merge [nome da branch]

</aside>

Faz um merge de uma branch em outra branch

<aside>
💡 git merge [source branch] [branch alvo]

</aside>

Tirar o estado sujo do seu diretório de trabalho

<aside>
💡 git stash

</aside>

Remove todas as entradas 'stash’

<aside>
💡 git stash clear

</aside>

### Compartilhamento e atualização de projetos

Enviar uma branch para seu repositório remoto

<aside>
💡 git push origin [nome da branch]

</aside>

Envia as alterações da branch informada para um repositório remoto (e seleciona a branch)

<aside>
💡 git push -u origin [nome da branch]

</aside>

Envia as alterações para o repositório remoto (branch atual)

<aside>
💡 git push

</aside>

Deletar uma branch remota

<aside>
💡 git push origin --delete [nome da branch]

</aside>

Atualiza o repositório local para o último commit

<aside>
💡 git pull

</aside>

Recebe alterações do repositório remoto

<aside>
💡 git pull origin [nome da branch]

</aside>

Adicionar um repositório remoto

<aside>
💡 git remote add origin ssh://git@github.com/[usuario]/[nome-repositorio].git

</aside>

Seta um repositório da origin branch para o SSH

<aside>
💡 git remote set-url origin ssh://git@github.com/[usuario]/[nome-repositorio].git

</aside>

### ****Inspeção & Comparação****

Ver modificações

<aside>
💡 git log

</aside>

Ver modificações (detalhadas)

<aside>
💡 git log --summary

</aside>

Visualizar alterações antes de mesclar

<aside>
💡 git diff [branch original] [branch alvo]

</aside>