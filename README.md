<div align="center">
    <img src="./docs/assets/logo.svg" alt="inZo Logo" width="45%" /> 
    <br /> <br />
  
  [![GitHub](https://img.shields.io/badge/github-inzo-181717?style=flat&logo=github)](https://github.com/Adyllsxn/inzo)
  [![Demo](https://img.shields.io/badge/demo-online-4c1?style=flat&logo=vercel&logoColor=white)](https://inzo.vercel.app)
  [![License](https://img.shields.io/badge/license-MIT-blue?style=flat)](LICENSE)
    <br />

# SISTIMA DE LOCALIZAÇÃO DE IMÓVEIS

</div>

## SOBRE O PROJETO
O **inZo** é uma solução completa para a busca e divulgação de imóveis em Angola, conectando de forma direta **clientes a proprietários, imobiliárias e consultores através de mapas interativos**.

A plataforma resolve os problemas tradicionais do mercado imobiliário angolano: elimina os intermediários excessivos, reduz a burocracia e substitui os processos manuais por um fluxo digital transparente, geolocalizado e centrado na comunicação direta (Cliente <==> Proprietário).

---

### Diferenciais e Funcionalidades

- **Mapeamento Geolocalizado em Tempo Real:** Ativação obrigatória de GPS para detetar a área e visualizar os pontos exatos no mapa de forma imediata.
- **Sinalizadores de Estado por Cores:** Identificação visual intuitiva no mapa para filtrar o tipo de oferta:
  - 🟢 **Verde:** Terreno à venda
  - 🔵 **Azul:** Casa de aluguer
  - 🟡 **Amarela:** Casa à venda
- **Detalhes Completos do Imóvel:** Acesso rápido a informações essenciais como nome do proprietário, número de telefone, fotografias reais do espaço e localização geográfica precisa.
- **Chat Integrado:** Sistema de mensagens interno para interagir diretamente com o anunciante sem barreiras.
- **Registo Rápido de Imóveis:** Cadastro flexível onde o utilizador insere os dados (nome, contacto, tipo de imóvel) e define a localização geográfica manualmente ou utilizando a posição exata do GPS no local.

---

## ESTRUTURA DO PROJETO

```text
inzo/
├── docs/               # Especificações, requisitos e arquitetura do sistema
├── src/
│   ├── backend/        # API REST e persistência de dados
│   └── mobile/         # Aplicação móvel (Cliente e Proprietário)
└── README.md
```
---

## DOCUMENTAÇÃO DO ECOSSISTEMA

### Especificações do Projeto
- [Requisitos e Regras de Negócio](./docs/specs/requirements.md): Requisitos funcionais, regras de acesso e validações de mercado.

### Módulos do Código
- [Servidor Backend (API)](./src/backend/README.md): Configuração do servidor, serviços e base de dados.
- [Aplicação Móvel](./src/mobile/README.md): Instruções de arranque da aplicação para organizadores e segurança da portaria.

---

## LICENÇA
Este projeto está licenciado sob a Licença MIT. Consulte o ficheiro [LICENSE](./LICENSE) para obter mais detalhes.
