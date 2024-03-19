const data = [
  {
    options: [
      `Aparelhos da Apple não pegam vírus`,
      `Os sinais do celular podem prejudicar o voo`,
      `Redes 3G e 4G são mais seguras que qualquer WiFi público`,
    ],
    answer: `Aparelhos da Apple não pegam vírus`,
    comment: `Já foram desenvolvidos vírus específicos para os produtos dessa marca.`,
  },
  {
    options: [
      `Deixar o celular plugado na tomada destrói a bateria`,
      `Usar o celular enquanto ele estiver carregando pode prejudicar o aparelho`,
      `Os sinais do celular podem prejudicar o voo`,
    ],
    answer: `Deixar o celular plugado na tomada destrói a bateria`,
    comment: `Os smartphones têm um dispositivo de controle que corta a conexão entre o carregador e a bateria quando a carga se completa`,
  },
  {
    options: [
      `Fechar os aplicativos do celular aumenta a duração da bateria`,
      `Mergulhar um celular molhado no arroz seco pode salvá-lo`,
      `A aba anônima garante navegação 100% privada`,
    ],
    answer: `A aba anônima garante navegação 100% privada`,
    comment: `Informações como o IP ainda podem ser captadas por redes sociais ou por controladores de rede`,
  },
  {
    options: [
      `IA irá substituir algumas profissões`,
      `Antivírus protegem você de qualquer ameaça online`,
      `O roteador pode ser infectado por um vírus`,
    ],
    answer: `Antivírus protegem você de qualquer ameaça online`,
    comment: `É possível que haja casos de vírus novos, que os programas ainda não sabem eliminar`,
  },
  {
    options: [
      `Bill Gates sempre acreditou que seria rico`,
      `Bill Gates perdeu uma nota de US$ 1.000 e não se importou`,
      `Bill Gates gastou bastante dinheiro para impedir que fotografassem o seu casamento`,
    ],
    answer: `Bill Gates perdeu uma nota de US$ 1.000 e não se importou`,
    comment: `Gates só tinha 14 anos e surgiu uma história em que ele estava andando pela rua e de forma acidental deixou uma nota de US$ 1.000 cair no chão`,
  },
  {
    options: [
      `O e-mail foi criado antes da internet`,
      `O mascote do Mozilla Firefox não é uma raposa`,
      `Todas as IAs funcionam da mesma forma`,
    ],
    answer: `Todas as IAs funcionam da mesma forma`,
    comment: `Há muitas técnicas para desenvolver sistemas de Inteligência Artificial`,
  },
  {
    options: [
      `O Facebook paga para quem encontra erros no site`,
      `A Tesla é a primeira empresa a fabricar carros elétricos em larga escala`,
      `Em 1956, um HD de 5 Mb pesava uma tonelada`,
    ],
    answer: `A Tesla é a primeira empresa a fabricar carros elétricos em larga escala`,
    comment: `Outras empresas, como a Nissan com o Leaf e a Toyota com o Prius, estavam produzindo carros elétricos em larga escala antes da Tesla`,
  },
  {
    options: [
      `O primeiro computador brasileiro foi chamado Zezinho`,
      `A inteligência artificial já é capaz de sentir emoções humanas`,
      `A programação foi inventada por uma mulher`,
    ],
    answer: `A inteligência artificial já é capaz de sentir emoções humanas`,
    comment: `Embora possa ser programada para reconhecer e responder a certos estímulos emocionais, não possui sentimentos próprios como os seres humanos`,
  },
  {
    options: [
      `A Microsoft lançou o Windows 95 como seu primeiro sistema operacional`,
      `Os computadores já foram vendidos em bancas de jornal`,
      `A palavra robô se relaciona com trabalho forçado`,
    ],
    answer: `A Microsoft lançou o Windows 95 como seu primeiro sistema operacional`,
    comment: `Antes do Windows 95, a Microsoft lançou vários sistemas operacionais, incluindo o Windows 1.0, 2.0, 3.0 e o Windows for Workgroups 3.11`,
  },
  {
    options: [
      `A primeira página da internet continua online`,
      `Bill Gates, é o homem mais rico do mundo`,
      `A primeira foto do mundo foi capturada ao longo de 8h`,
    ],
    answer: `Bill Gates, é o homem mais rico do mundo`,
    comment: `Ele foi ultrapassado por outros, como Elon Musk e Jeff Bezos, em diferentes momentos`,
  },
  {
    options: [
      `O Google foi fundada por Larry Page e Sergey Brin em uma garagem`,
      `A Netflix começou como um serviço de entrega de DVDs pelo correio`,
      `A Apple foi a primeira empresa a lançar um computador pessoal`,
    ],
    answer: `A Apple foi a primeira empresa a lançar um computador pessoal`,
    comment: `A primeira empresa a lançar um computador pessoal foi a Altair, com o Altair 8800 em 1975. A Apple lançou o Apple I em 1976, mas não foi o primeiro`,
  },
  {
    options: [
      `O primeiro bug de computador foi causado por um inseto`,
      `A linguagem de programação JavaScript é uma variação do Java`,
      `O primeiro video-game nunca foi vendido`,
    ],
    answer: `A linguagem de programação JavaScript é uma variação do Java`,
    comment: `Apesar de seus nomes semelhantes, JavaScript não é uma variação de Java. Ambas são linguagens de programação distintas, com sintaxe e propósitos diferentes`,
  },
  {
    options: [
      `A primeira rede social online foi o Facebook`,
      `O termo 'spam' foi inspirado em uma marca de presunto enlatado`,
      `Elixir é uma linguagem de programação Brasileira`,
    ],
    answer: `A primeira rede social online foi o Facebook`,
    comment: `A primeira rede social online foi o Six Degrees, lançado em 1997`,
  },
  {
    options: [
      `O Dia do Programador é feriado oficial na Rússia`,
      `A primeira mensagem de texto foi enviada por um telefone fixo`,
      `A Amazon começou como uma livraria online`,
    ],
    answer: `A primeira mensagem de texto foi enviada por um telefone fixo`,
    comment: `A primeira mensagem de texto foi enviada por um computador para um telefone celular`,
  },
  {
    options: [
      `A rotina de um programador inclui consertar impressoras`,
      `A primeira linguagem de programação de alto nível desenvolvida foi o FORTRAN`,
      `O Bitcoin foi a primeira criptomoeda criada`,
    ],
    answer: `A rotina de um programador inclui consertar impressoras`,
    comment: `Esse tipo de serviço abrange outro tipo de profissional que nada tem a ver com a programação`,
  },
  {
    options: [
      `A sigla VPN significa 'Virtual Private Network'`,
      `A linguagem de programação Ruby foi desenvolvida no Japão`,
      `O sistema operacional Android é de código fechado`,
    ],
    answer: `O sistema operacional Android é de código fechado`,
    comment: `O sistema operacional Android é de código aberto, o que significa que seu código-fonte está disponível para qualquer pessoa`,
  },
  {
    options: [
      `O primeiro videogame comercialmente bem-sucedido foi o "Pac-Man"`,
      `O termo "blog" é uma abreviação de "backlog"`,
      `A empresa IBM é conhecida como "Big Blue" devido à sua cor corporativa`,
    ],
    answer: `O termo "blog" é uma abreviação de "backlog"`,
    comment: `"Blog" é uma abreviação de "weblog", que se refere a um site ou página da web que é atualizada regularmente com entradas de conteúdo`,
  },
  {
    options: [
      `A Microsoft adquiriu o LinkedIn em 2016`,
      `O sistema operacional Linux foi criado por Linus Torvalds`,
      `O primeiro computador pessoal foi o IBM PC`,
    ],
    answer: `O primeiro computador pessoal foi o IBM PC`,
    comment: `O primeiro computador pessoal foi o Altair 8800, lançado em 1975`,
  },
  {
    options: [
      `A empresa SpaceX foi fundada por Jeff Bezos`,
      `A linguagem de programação Python foi nomeada em homenagem a uma cobra`,
      `O termo "vírus de computador" foi cunhado na década de 1970`,
    ],
    answer: `A empresa SpaceX foi fundada por Jeff Bezos`,
    comment: `A empresa SpaceX foi fundada por Elon Musk em 2002`,
  },
  {
    options: [
      `O código de barras foi inventado nos Estados Unidos`,
      `A linguagem de programação Swift foi desenvolvida pela Google`,
      `A primeira mensagem de e-mail foi enviada por um cientista da NASA`,
    ],
    answer: `A linguagem de programação Swift foi desenvolvida pela Google`,
    comment: `A linguagem de programação Swift foi desenvolvida pela Apple Inc`,
  },
];

export default data;
