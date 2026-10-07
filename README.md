# Dragão Caolho

Aplicação web de apoio a aventuras de RPG: consulte magias, organize personagens, grimórios e equipamentos.

## Recursos

- Pesquise e filtre magias, e adicione as escolhidas ao grimório do personagem ativo.
- Crie perfis locais para as 13 classes de D&D 5e, com grimórios individuais e uma visão dedicada para cada personagem.
- Veja a classe de cada personagem pelo ícone correspondente.
- Organize o inventário de cada personagem, com quantidades e estado equipado.
- Registre moedas e acompanhe o peso em kg e o valor dos itens em ouro, com valores numéricos.
- Consulte o catálogo de itens e seus ícones.

## Dados e uso offline

Os favoritos, personagens, grimórios, inventários e moedas ficam no `localStorage` deste navegador. Não há conta nem sincronização; limpar os dados do navegador apaga os dados salvos pelo app.

O modo offline depende de uma primeira visita online. O service worker Workbox só é registrado em produção e requer HTTPS (ou `localhost`).

## Executar localmente

```bash
npm ci
npm start
CI=true npm test -- --watchAll=false
npm run build
```

O build de produção é gerado em `build/` e inclui o service worker Workbox.

## Créditos das imagens

Veja as atribuições das [gravuras da página inicial](src/assets/prints/CREDITS.md) e dos [ícones das classes](src/assets/classes/CREDITS.md).
