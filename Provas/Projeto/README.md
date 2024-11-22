# GS 2 - Microservicos
## Equipe
Rafael Fiel Cruz Miranda - RM94654
</br>
Luca Moraes Zaharic - RM95794
</br>
Turma 3SIR
</br>
</br>
## Link da entrega
https://docs.google.com/forms/d/e/1FAIpQLSdkghM1FaJx4tPhhRoFa29TiTH_WIKyLodO0RvpMQVBUQWI_w/viewform
</br>
</br>
## Disciplinas abordadas:
API
</br>
Boas práticas para Status Codes
</br>
Conexão com MongoDB utilizando C#
</br>
Performance com Redis utilizando C#
</br>
Teste de Unidade com XUnit utilizando C#
</br>
</br>
## Testando
Consumo POST não conseguimos rodar, tentamos diferentes abordagens não sabemos porque não foi, os erros apresentado pelo Swagger e as expicações destes erros pelo GPT são:
</br>
- Unable to resolve service for type 'Projeto.Services.MongoDbService' while attempting to activate 'Projeto.Controllers.ConsumoController'.
  - Causa: O ASP.NET Core não consegue resolver a dependência MongoDbService porque ela não foi registrada corretamente no método ConfigureServices no Startup.cs. Isso acontece porque o framework tenta injetar essa dependência no construtor do ConsumoController, mas não sabe como criá-la.
  - Como Resolver: Adicione o registro do MongoDbService no método ConfigureServices do Startup.cs. Porém o MongoDbService JÁ está no método ConfigureServices do Startup.cs, então não é isso o problema
    
- Constructor on type 'Castle.Proxies.MongoDbServiceProxy' not found.
  - Causa: Esse erro ocorre quando um Mock (provavelmente do Moq) está tentando criar uma instância do MongoDbService durante um teste, mas o MongoDbService depende de parâmetros como IConfiguration, que não são fornecidos pelo mock.
  - Como Resolver: Ao escrever testes, crie um mock de IConfiguration e passe para o MongoDbService explicitamente. Porém TAMBÉM JÁ está feito
</br>
#### Essa é a arquitetura dos arquivos do projeto
![image](https://github.com/user-attachments/assets/600a532a-6015-4ba6-8eb2-03f81fcdd110)
</br>
</br>
#### GET e POST Consumo não deram certo por erro MongoDB
![image](https://github.com/user-attachments/assets/3fb5b654-17a4-4716-bfb0-55cbdf5793cd)
</br>
</br>
![image](https://github.com/user-attachments/assets/2839845a-a5a0-4860-932a-9ecfdd48584b)
</br>
</br>
![image](https://github.com/user-attachments/assets/a48cbc33-65e2-40a3-90f2-ff91574af10b)
</br>
</br>
![image](https://github.com/user-attachments/assets/f978aca4-c5e2-4ad7-b34f-d6f329add0d6)
</br>
</br>
#### Health deu certo
![image](https://github.com/user-attachments/assets/125605e3-63e7-4774-b553-23e1c6938e38)
</br>
</br>
![image](https://github.com/user-attachments/assets/d730c569-e87d-45ff-ac7b-f31001a51242)
</br>
</br>
#### Esse é o projeto rodando
![image](https://github.com/user-attachments/assets/1d114d4b-4a5e-4c2a-bca3-b05b53ab8337)
</br>
</br>
#### Esse é o Redis rodando
![image](https://github.com/user-attachments/assets/3fb5e3a0-5df7-4dda-a98c-a116e8adef66)
</br>
</br>
#### Esse é o docker configurado com Redis e MongoDB rodando
![image](https://github.com/user-attachments/assets/f809b2c4-68cd-463b-8ecf-6b1e90643963)
</br>
</br>




