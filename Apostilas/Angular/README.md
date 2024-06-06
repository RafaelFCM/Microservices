# JSON:
json é um acrônimo de JavaScript Object Notation, é um formato compacto, de padrão aberto independente, 
de troca de dados simples e rápida entre sistemas.

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/2e55b3bd-1da9-48a4-9018-bbd2151f1dcc)

# Typescript:
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

# Angular:
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

### Interpolação de dados:
- Criar variáveis para trabalhar as propriedades dinâmicas;
- A impressão é feita através do double mustache{{dado}};
Exemplo: Podemos criar um atributo na classe do componente e utilizarmos na renderização;
Fazer o import do módulo CommonModule para poder utilizar a diretiva ngFor no exemplo.

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/eaacf326-60ef-42f7-8e75-1a45c4564dfa)

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/4e1e1d93-338b-40ff-8a80-b3de1ce8a734)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/01697bbd-ac7b-40dc-ba6c-81b1c0129cf6)

### Css no Angular:
- Global: utilizado no arquivo style.css;
- Scoped: pode ser utilizado a nível de component, para não replicar css
desnecessário em outro component.

Compartilhar dados entre componentes:
-  Utilizar o decorator @input

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/652823cb-da26-4d7c-ab31-93f9ffb9fa57)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/9f46d575-3023-40bf-a8ce-6115397b6b42)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/515e2f69-0db5-4e7c-8455-0ca44d9d40a0)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/a0c4363e-352b-4d6e-a254-14910190878a)

### Diretivas
- Utilizado para aplicar estilos em elemento;
- Permite estender o HTML com novos comportamentos e funcionalidades
- Prefixo sempre ng… Ex: ngif, ngFor..
Criar um component para diretivas: ng g component components/directives

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/fd1ac6a5-2d8f-4b96-90d0-8ab385668ab4)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/01d5036b-f938-44fa-933e-42018aa0dae4)

### Eventos
- Podemos criar eventos para execução de métodos;
- Os métodos podem ser criados nas classes, dentro do typescript;
- Este recurso poderá ser utilizado para integrações futuras (API).
Click : como próprio nome diz, ao clicar, uma ação será executada.

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/aa6c4102-25fa-4344-b490-a9414f0b9633)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/e3d5804e-44f8-4d7a-ad17-92a82ebcdb2c)

### Interface
- Organiza e facilita a manutenção;
- Impõe um contrato;
- Vantagens: garantir que as variáveis e objetos utilizem o tipo de dado correto; melhora a experiência de desenvolvimento com autocompletar;

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/dfe2211d-2cdf-4c26-923c-5f7eb189018d)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/1861abad-8bbb-403a-8406-26873543c2ca)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/895b6deb-19fb-4042-b0ef-5e87c72f96ff)

Para utilizar precisaremos fazer o import 

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/c888a376-f230-43e8-b364-1e9f7e347ae4)

### Operador pipe
- São utilizados para trabalhar com strings nos templates;
- Possui diversas funções, como formatar data, alterar a caixa do texto (baixa, alta, entre outros);
- Facilita a vida, por mais que seja possível fazer tudo isso via js ou css.
Vamos criar um componente operador para começarmos o tratamento
Configurar o currency 

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/9566fef1-7379-443a-b364-e1003bacbcdb)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/c1fc2a1a-b359-431c-9b5a-6006c0dd778f)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/b555b19e-7031-4d18-9ab8-7f656816bf75)

Para testar não se esqueça de inserir no app component

### Two way data binding
- É um recurso bastante utilizado em formulários;
- Altera propriedades com preenchimento do input;
- Utiliza o módulo FormModule;

![image](https://github.com/RafaelFCM/Microservices/assets/100213402/6ba112f1-4b09-403f-96b1-2b014ea89f54)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/70c2b53b-1061-4d86-a06a-ecaf6b0b150b)

Para testar não se esqueça de inserir no app component

### Services
- Reutilização de lógica: Serviços encapsulam funcionalidades compartilhadas;
- Comunicação entre componentes: Facilita a interação entre diferentes partes da aplicação;
- Injeção de dependência: Promove a modularidade e manutenção simplificada;
- Gerenciamento de estado: Ajuda a centralizar e controlar o estado da aplicação;
- Consumo de API’s;
https://spectacled-falcon-84a.notion.site/Services-084263917963416fbba57561ccaada16
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/8cb3041f-a309-49fe-8415-8b319c77091e)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/df65ce98-8da2-48ee-8495-ba09767086ef)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/e21fbb75-bc8d-4247-b479-24aba7b207d8)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/0118fefc-f861-400d-926e-40db7d4f3d21)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/7595708a-f2e1-45ae-b17d-7ec44679e2fa)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/0322107e-efa9-4120-af0f-c1e1490af5c8)
![image](https://github.com/RafaelFCM/Microservices/assets/100213402/b7ffc2e5-f44b-439b-8f7f-88d5af7fa0a3)










