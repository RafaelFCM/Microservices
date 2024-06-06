### JSON:
json é um acrônimo de JavaScript Object Notation, é um formato compacto, de padrão aberto independente, 
de troca de dados simples e rápida entre sistemas.

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/2e55b3bd-1da9-48a4-9018-bbd2151f1dcc)

### Typescript:
- É um superset para Javascript;
- Auxilia a declaração de tipos no javascript;
- Utilizado no angular;
- Será transpilado para javascript.

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/baa9a21d-aa90-4ed9-b2d1-101e63be2caf)

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/4e7c83ec-8f9e-4704-952c-b02b2f1f034a)

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/e0bdce3d-57b6-4be8-a0b7-d2e04814ff81)  

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/22cb8b56-4c2e-4ae5-bfc7-0cbc3d49f113)

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/667c94fb-756b-47ba-9feb-7e1e643eabed)

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/b97ac1db-d725-4c06-ad74-76703b6b575d)

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/b4de36fe-bb1d-462d-9e25-a0cb30a0ab69)

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/ae738724-3272-440c-ae28-596e592471e6)

### Angular:
- Construída com typescript; 
- Baseada em componentes; 
- Possui arquitetura modular, isso possibilita reutilizar recursos; 
- Oferece uma variedade de bibliotecas: gerenciamento formulário, comunicação cliente-servidor, roteamento, etc.

Comando para instalar o CLI do Angular:
npm install -g @angular/cli
Caso dê problema, podemos utilizar o comando:
Set-ExecutionPolicy RemoteSigned

Criar o projeto no cmd com "ng new nome_projeto"

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/8b5b0166-16f0-4e5a-9c89-627e12b54ad7)

Navegar para dentro do projeto com "cd" no cmd
Abrir vs code a partir do cmd com "code ."
Executar o Angular no terminal do vs code com "ng serve"

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/a99fec31-0284-4604-9971-ac014b6cddcc)

Os componentes são a base para criação de aplicações Angular, pois permite uma arquitetura de reaproveitamento.
Os componentes são divididos entre: TS, HTML, CSS e testes.

Criando componentes com o terminal do vs code: ng generate component components/first-component
"--skip-test" = não cria o .spec
Pode reduzir o comando com ng g c components/first-component

Criar uma service: ng g s nome-service

Configurar o import:
1. Abra o app-component.ts e configure o import:

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/032b0cdc-88f9-463f-9315-88660fcddc6f)

3. Inserir a tag no app-component.html para finalizarmos a inserção do component

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/d20ccef0-ca3c-433c-b969-3c6a7d242437)

Interpolação de dados:
- Criar variáveis para trabalhar as propriedades dinâmicas;
- A impressão é feita através do double mustache{{dado}};
Exemplo: Podemos criar um atributo na classe do componente e utilizarmos na renderização;
Fazer o import do módulo CommonModule para poder utilizar a diretiva ngFor no exemplo.

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/eaacf326-60ef-42f7-8e75-1a45c4564dfa)

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/4e1e1d93-338b-40ff-8a80-b3de1ce8a734)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/01697bbd-ac7b-40dc-ba6c-81b1c0129cf6)

Css no Angular:
- Global: utilizado no arquivo style.css;
- Scoped: pode ser utilizado a nível de component, para não replicar css
desnecessário em outro component.

Compartilhar dados entre componentes:
-  Utilizar o decorator @input

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/652823cb-da26-4d7c-ab31-93f9ffb9fa57)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/9f46d575-3023-40bf-a8ce-6115397b6b42)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/515e2f69-0db5-4e7c-8455-0ca44d9d40a0)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/a0c4363e-352b-4d6e-a254-14910190878a)

Diretivas
- Utilizado para aplicar estilos em elemento;
- Permite estender o HTML com novos comportamentos e funcionalidades
- Prefixo sempre ng… Ex: ngif, ngFor..
Criar um component para diretivas: ng g component components/directives

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/fd1ac6a5-2d8f-4b96-90d0-8ab385668ab4)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/01d5036b-f938-44fa-933e-42018aa0dae4)

# Eventos

- Podemos criar eventos para execução de métodos;
- Os métodos podem ser criados nas classes, dentro do typescript;
- Este recurso poderá ser utilizado para integrações futuras (API).
- Lista de eventos: https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values

![método.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/3254a1d8-e41a-4d5e-acf7-0a44e48bf254/6c2e8aaf-aac6-442a-b71b-b779d92d4611/mtodo.png)

[Click](https://www.notion.so/Click-fdc3e6a862ac41b0bf13836c1b181e47?pvs=21)

[Emitindo eventos - Output](https://www.notion.so/Emitindo-eventos-Output-f9594f2df1d84c7482754fff98311fb2?pvs=21)

Typescript: definirá o comportamento do componente, como ○ gerenciamento de estado, ○s métodos, a entrada de usuário.

