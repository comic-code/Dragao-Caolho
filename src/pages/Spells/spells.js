const spells = [
  {
    "name": "Acalmar Emoções",
    "originalName": "Calm Emotions",
    "level": 2,
    "school": "encantamento",
    "type": "2º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você tenta suprimir emoções fortes em um grupo de pessoas. Cada humanoide em uma esfera de 6 metros de raio [20-foot radius], centrada em um ponto que você escolher dentro do alcance, deve realizar um teste de resistência de Carisma; uma criatura pode escolher falhar nesse teste, se desejar. Se uma criatura falhar na resistência, escolha um dentre os dois efeitos a seguir."
        },
        {
          "type": "default",
          "description": "Você pode suprimir qualquer efeito que esteja deixando a criatura enfeitiçada ou amedrontada. Quando essa magia terminar, qualquer efeito suprimido volta a funcionar, considerando que sua duração não tenha acabado nesse meio tempo."
        },
        {
          "type": "default",
          "description": "Alternativamente, você pode tornar um alvo indiferente às criaturas que você escolher que forem hostis a ele. Essa indiferença acaba se o alvo for atacado ou ferido por uma magia ou se ele testemunhar qualquer dos seus amigos sendo ferido. Quando a magia terminar, a criatura se tornará hostil novamente, a não ser que o Mestre diga o contrário."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "123"
    }
  },
  {
    "name": "Adivinhação",
    "originalName": "Divination",
    "level": 4,
    "school": "adivinhação",
    "type": "4º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "clérigo",
      "círculo da terra (floresta)",
      "círculo da terra (planície)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um incenso e uma oferenda apropriada para sacrifício à sua religião",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Sua magia e uma oferenda colocam você em contato com um deus ou servo divino. Você faz uma única pergunta a respeito de um objetivo, evento ou atividade específico que irá ocorrer dentro de 7 dias. O Mestre oferece uma resposta confiável. A resposta deve ser uma frase curta, uma rima enigmática ou um presságio."
        },
        {
          "type": "default",
          "description": "A magia não leva em consideração qualquer possível circunstância que possa mudar o que está por vir, como a conjuração de magias adicionais ou a perda ou ganho de um companheiro."
        },
        {
          "type": "default",
          "description": "Se você conjurar a magia duas ou mais vezes antes de completar seu próximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "136"
    }
  },
  {
    "name": "Ajuda",
    "originalName": "Aid",
    "level": 2,
    "school": "abjuração",
    "type": "2º nível de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pequena tira de branco",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Sua magia inspira seus aliados com vigor e determinação. Escolha até três criaturas dentro do alcance. O máximo de pontos de vida e os pontos de vida atuais de cada alvo aumentam em 5, pela duração."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, os pontos de vida dos alvos aumentam em 5 pontos adicionais para cada nível do espaço acima do o 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "114"
    }
  },
  {
    "name": "Alarme",
    "originalName": "Alarm",
    "level": 1,
    "school": "conjuração",
    "type": "1º nível de conjuração",
    "isRitual": true,
    "classes": [
      "mago",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um minúsculo sino e um pedaço de fino fio de prata",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você coloca um alarme para intrusos desavisados. Escolha uma porta, uma janela ou uma área dentro do alcance que não seja maior que 6 metros cúbicos [20-foot cube]. Até a magia acabar, um alarme alerta você sempre que uma criatura Miúda ou maior tocarem ou entrarem na área protegida. Quando você conjura a magia, você pode designar as criaturas que não ativarão o alarme. Você também escolhe se o alarme será mental ou audível."
        },
        {
          "type": "default",
          "description": "Um alarme mental alerta você com um silvo na sua mente, se você estiver a até de 1,5 quilômetro [1 mile] da área protegida. Esse silvo acordará você se você estiver dormindo. Um alarme audível produz o som de um sino de mão por 10 minutos num raio de 18 metros [60 feet]."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "114"
    }
  },
  {
    "name": "Aliado Planar",
    "originalName": "Planar Ally",
    "level": 6,
    "school": "conjuração",
    "type": "6º nível de conjuração",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você suplica a uma entidade transcendental por ajuda. O ser deve ser conhecido por você: seu deus, um primordial, um príncipe demônio ou algum outro ser de poder cósmico. Essa entidade envia um celestial, um corruptor ou um elemental leal a ela para ajudar você, fazendo a criatura aparecer em um espaço desocupado dentro do alcance. Se você conhecer o nome de uma criatura especifica, você pode falar o nome quando conjurar essa magia para requisitar essa criatura, do contrário, você pode receber uma criatura diferente de qualquer forma (à escolha do Mestre). Quando a criatura aparecer, ela não está sob nenhuma compulsão para se comportar de um modo em particular. Você pode pedir a criatura que realize um serviço em troca de um pagamento, mas ela não é obrigada a fazê-lo. A tarefa solicitada pode variar de simples (carregue-nos voando para o outro lado do abismo ou nos ajude a lutar essa batalha) a complexa (espione nossos inimigos ou nos proteja durante nossa incursão na masmorra). Você deve ser capaz de se comunicar com a criatura para barganhar os serviços dela. O pagamento pode ser feito de várias formas. Um celestial pode requerer uma generosa doação de ouro ou itens mágicos para um templo aliado, enquanto que um corruptor pode exigir um sacrifício vivo ou uma parte dos espólios. Algumas criaturas podem trocar seus serviços por uma missão feita por você."
        },
        {
          "type": "default",
          "description": "Como regra geral, uma tarefa que possa ser medida em minutos, exigirá um pagamento de 100 po por minuto. Uma tarefa medida em horas exigirá 1.000 po por hora. E uma tarefa medida em dias (até 10 dias) exigirá 10.000 po por dia. O Mestre pode ajustar esses pagamentos baseado nas circunstâncias pelas quais a magia foi conjurada. Se a tarefa estiver de acordo com o caráter da criatura, o pagamento pode ser reduzido à metade, ou mesmo dispensado. Tarefas que não proporcionem perigo, tipicamente requerem apenas metade do pagamento sugerido, enquanto que tarefas especialmente perigosas podem exigir um grande presente. As criaturas raramente aceitarão tarefas que pareçam suicidas."
        },
        {
          "type": "default",
          "description": "Após a criatura completar a tarefa ou quando a duração acordada para o serviço expirar, a criatura retornará para seu plano natal depois de relatar sua partida a você, se apropriado para a tarefa e se possível. Se você não for capaz de acertar um preço para os serviços da criatura, ela imediatamente voltará para o seu plano natal."
        },
        {
          "type": "default",
          "description": "Uma criatura convidada para se juntar ao seu grupo, conta como um membro dele, recebendo sua parte total na premiação de pontos de experiência."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "168"
    }
  },
  {
    "name": "Alterar",
    "originalName": "Alter Self",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você assume uma forma diferente. Quando conjurar essa magia, escolha uma das seguintes opções, o efeito durará pela duração da magia. Enquanto a magia durar, você pode terminar uma opção com uma ação para ganhar os benefícios de uma diferente."
        },
        {
          "type": "option",
          "value": "Adaptação Aquática",
          "description": "Adaptação Aquática. Você adapta seu corpo para um ambiente aquático, brotando guelras e crescendo membranas entre seus dedos. Você pode respirar embaixo d'água e ganha deslocamento de natação igual a seu deslocamento terrestre."
        },
        {
          "type": "option",
          "value": "Mudar Aparência",
          "description": "Mudar Aparência. Você transforam sua aparência. Você decide com o que você parece, incluindo altura, peso, traços faciais, timbre da sua voz, comprimento do cabelo, coloração e características distintas, se tiverem. Você pode ficar parecido com um membro de outra raça, apesar de nenhuma de suas estatísticas mudar. Você também não pode parecer com uma criatura de um tamanho diferente do seu, e seu formado básico permanece o mesmo; se você for bípede, você não pode usar essa magia para se tornar quadrupede, por exemplo. A qualquer momento, pela duração da magia, você pode usar sua ação para mudar sua aparência dessa forma, novamente."
        },
        {
          "type": "option",
          "value": "Armas Naturais",
          "description": "Armas Naturais. Você faz crescerem garras, presas, espinhos, chifres ou armas naturais diferentes, à sua escolha. Seus ataques desarmados causam 1d6 de dano de concussão, perfurante ou cortante, como apropriado para a arma natural que você escolheu, e você é proficiente com seus ataques desarmados. Finalmente, a arma natural é mágica e você tem +1 de bônus nas jogadas de ataque e dano que você fizer com ela."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "114"
    }
  },
  {
    "name": "Alterar Forma",
    "originalName": "Shapechange",
    "level": 9,
    "school": "transmutação",
    "type": "9º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma argola de jade, que você deve colocar na sua cabeça antes de conjurar a magia,",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você assume a forma de uma criatura diferente, pela duração. A nova forma pode ser qualquer criatura com um nível de desafio igual ao seu nível ou menor. A criatura não pode ser nem um constructo nem um morto-vivo e você deve ter visto esse tipo de criatura pelo menos uma vez. Você se transforma num exemplar médio da criatura, um sem quaisquer níveis de classe nem característica Conjuração."
        },
        {
          "type": "default",
          "description": "Suas estatísticas de jogo são substituídas pelas estatísticas da forma escolhida, no entanto, você mantém sua tendência e valores de Inteligência, Sabedoria e Carisma. Você também mantém suas proficiências em testes de resistência, além de ganhar as da nova criatura. Se a criatura tiver a mesma proficiência que você e o bônus listado nas estatísticas dela for maior que o seu, use os bônus da criatura no lugar do seu. Você não pode usar qualquer ação lendária ou de covil da nova forma."
        },
        {
          "type": "default",
          "description": "Você assume os pontos de vida e Dados de Vida da sua nova forma. Quando você reverter a sua forma normal, você retorna à quantidade de pontos de vida que tinha antes da transformação. Se você reverter como resultado de ter caído a 0 pontos de vida, qualquer dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da sua forma normal a 0, você não cairá inconsciente."
        },
        {
          "type": "default",
          "description": "Você mantém os benefícios de qualquer característica da sua classe, raça ou outra fonte e pode usa-las, considerando que sua nova forma é fisicamente capaz de fazê-lo. Você não pode usar quaisquer sentidos especiais que você possua (por exemplo, visão no escuro) a não ser que a nova forma também possua o sentido. Você só poderá falar se a nova forma, normalmente, puder falar."
        },
        {
          "type": "default",
          "description": "Quando você se transforma, você pode escolher se o seu equipamento cai no chão, é assimilado a sua nova forma ou é usado por ela. Equipamentos vestidos e carregados funcionam normalmente. O Mestre decide qual equipamento é viável para a nova forma vestir ou usar, baseado na forma e tamanho da criatura. O seu equipamento não muda de forma ou tamanho para se adaptar à nova forma e, qualquer equipamento que a nova forma não possa vestir deve, ou cair no chão ou ser assimilado por ela. Equipamentos assimilados não terão efeito nesse estado."
        },
        {
          "type": "default",
          "description": "Pela duração da magia, você pode usar sua ação para assumir uma forma diferente, seguindo as mesmas restrições e regras da forma anterior, com uma exceção: se sua nova forma tiver mais pontos de vida que sua forma atual, seus pontos de vida mantém o valor atual."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "178"
    }
  },
  {
    "name": "Amizade Animal",
    "originalName": "Animal Friendship",
    "level": 1,
    "school": "encantamento",
    "type": "1º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um bocado de comida",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia deixa você convencer uma besta que você não quer prejudicar. Escolha uma besta que você possa ver dentro do alcance. Ela deve ver e ouvir você. Se a Inteligência da besta for 4 ou maior, a magia falha. Do contrário, a besta deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração da magia. Se você ou um dos seus companheiros ferir o alvo, a magia termina."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma besta adicional para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "115"
    }
  },
  {
    "name": "Ampliar Plantas",
    "originalName": "Plant Growth",
    "level": 3,
    "school": "transmutação",
    "type": "3º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": null,
      "unit": "especial"
    },
    "range": {
      "value": 45,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia canaliza vitalidade nas plantas dentro de uma área especifica. Existem dois usos possíveis para essa magia, concedendo ou benefícios imediatos ou a longo prazo."
        },
        {
          "type": "default",
          "description": "Se você conjurar essa magia usando 1 ação, escolha um ponto dentro do alcance. Todas as plantas normais num raio de 30 metros [100-foot radius] centrado no ponto, tornam-se espessas e carregadas. Uma criatura se movendo na área deve gastar 6 metros [20 feet] de movimento para cada 1,5 metro [5 feet] que se mover."
        },
        {
          "type": "default",
          "description": "Você pode excluir uma ou mais áreas de qualquer tamanho, dentro da área da magia, para não ser afetada."
        },
        {
          "type": "default",
          "description": "Se você conjurar essa magia ao longo de 8 horas, você fertiliza a terra. Todas as plantas num raio de 800 metros [0,5 mile radius], centrado no ponto dentro do alcance, ficam enriquecidas por 1 ano. As plantas fornecerão o dobro da quantidade normal de comida quando colhidas."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "169"
    }
  },
  {
    "name": "Âncora Planar",
    "originalName": "Planar Binding",
    "level": 5,
    "school": "abjuração",
    "type": "5º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "horas"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma joia",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Com essa magia, você tenta obrigar um celestial, corruptor, elemental ou fada a servi-lo. A criatura deve estar dentro do alcance durante toda a conjuração da magia. (Tipicamente, a criatura, primeiramente, é invocada dentro de um círculo mágico invertido para mantê-la presa enquanto a magia é conjurada.) Ao completar a conjuração, o alvo deve realizar um teste de resistência de Carisma. Se falhar na resistência, ela é obrigada a servir você pela duração. Se a criatura foi invocada ou criada por outra magia, a duração da magia é estendida para se equiparar a dessa magia."
        },
        {
          "type": "default",
          "description": "Uma criatura obrigada deve seguir suas instruções da melhor forma que puder. Você poderia comandar a criatura a acompanhar você em uma aventura, a guardar um local ou a enviar uma mensagem. A criatura obedece ao pé da letra suas instruções, mas se a criatura for hostil a você, ela se esforçará para distorcer suas palavras para atingir seus próprios objetivos. Se a criatura atender suas instruções completamente antes da magia acabar, ela viajará até você para relatar esse fato se você estiver no mesmo plano de existência. Se você estiver em um plano de existência diferente, ela retornará para o lugar onde você a contatou e permanecerá lá até a magia acabar."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de nível superior, a duração aumenta para 10 dias com um espaço de 6° nível, para 30 dias com um espaço de 7° nível, para 180 dias com um espaço de 8° nível e para um ano com um espaço de magia de 9° nível."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "168"
    }
  },
  {
    "name": "Andar Na Água",
    "originalName": "Water Walk",
    "level": 3,
    "school": "transmutação",
    "type": "3º nível de transmutação",
    "isRitual": true,
    "classes": [
      "clérigo",
      "druida",
      "feiticeiro",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma rolha",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia concede a habilidade de se mover através de qualquer superfície líquida – como água, ácido, lama, neve, arreia movediça ou lava – como se ela fosse chão sólido inofensivo (as criaturas atravessando lava derretida ainda podem sofrer dano do calor). Até dez criaturas voluntárias que você possa ver, dentro do alcance, ganham essa habilidade pela duração."
        },
        {
          "type": "default",
          "description": "Se você afetar uma criatura submersa em um líquido, a magia ergue o alvo para a superfície do líquido a uma taxa de 18 metros [60 feet] por rodada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "191"
    }
  },
  {
    "name": "Animar Mortos",
    "originalName": "Animate Dead",
    "level": 3,
    "school": "necromancia",
    "type": "3º nível de necromancia",
    "isRitual": false,
    "classes": [
      "clérigo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma gota de sangue, um pedaço de carne e uma pitada de pó de osso",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia cria um servo morto-vivo. Escolha uma pilha de ossos ou um corpo de um humanoide Médio ou Pequeno dentro do alcance. Sua magia imbui o alvo com uma imitação corrompida de vida, erguendo-o como uma criatura morta-viva. O alvo se torna um esqueleto, se você escolheu ossos, ou um zumbi, se você escolheu um corpo (o Mestre tem as estatísticas de jogo da criatura)."
        },
        {
          "type": "default",
          "description": "Em cada um dos seus turnos, você pode usar uma ação bônus para comandar mentalmente qualquer criatura que você criou com essa magia, se a criatura estiver a até 18 metros [60 feet] de você (se você controla diversas criaturas, você pode comandar qualquer uma ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura irá fazer e para onde ela irá se mover durante o próximo turno dela, ou você pode emitir um comando geral, como para guardar uma câmara ou corredor especifico. Se você não der nenhum comando, as criaturas apenas se defenderão contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuará a segui-la até a tarefa estar concluída."
        },
        {
          "type": "default",
          "description": "A criatura fica sob seu controle por 24 horas, depois disso ela para de obedecer aos seus comandos. Para manter o controle da criatura por mais 24 horas, você deve conjurar essa magia na criatura novamente, antes das 24 horas atuais terminarem. Esse uso da magia recupera seu controle sobre até quatro criaturas que você tenha animado com essa magia, ao invés de animar uma nova."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você pode animar ou recuperar o controle de duas criaturas mortas-vivas para cada nível do espaço acima do 3°. Cada uma dessas criaturas deve vir de um corpo ou pilha de ossos diferente."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "115"
    }
  },
  {
    "name": "Animar Objetos",
    "originalName": "Animate Objects",
    "level": 5,
    "school": "transmutação",
    "type": "5º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Objetos ganham vida ao seu comando. Escolha até dez objetos não-mágicos dentro do alcance, que não estejam sendo vestidos ou carregados. Alvos Médios contam como dois objetos, alvos Grandes contam como quatro objetos e alvos Enormes contam como oito objetos. Você não pode animar um objeto maior que Enorme. Cada alvo se anima e torna-se uma criatura sob seu controle até o final da magia ou até ser reduzido a 0 pontos de vida."
        },
        {
          "type": "default",
          "description": "Com uma ação bônus, você pode comandar mentalmente qualquer criatura que você criar com essa magia se a criatura estiver a até 150 metros [300 feet] de você (se você controla várias criaturas, você pode comandar qualquer ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura irá fazer e para onde ela irá se mover durante o próximo turno dela, ou você pode emitir um comando geral, como para guardar uma câmara ou corredor especifico. Se você não der nenhum comando, as criaturas apenas se defenderão contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuará a segui-la até a tarefa estar concluída."
        },
        {
          "type": "table",
          "caption": "Estatísticas De Objeto Animado",
          "header": [
            "Tamanho",
            "PV",
            "CA",
            "Ataque",
            "For",
            "Des"
          ],
          "content": [
            [
              "Miúdo",
              "20",
              "18",
              "+8 para atingir, 1d4 + 4 dano",
              "4",
              "18"
            ],
            [
              "Pequeno",
              "25",
              "16",
              "+6 para atingir, 1d8 + 2 dano",
              "6",
              "14"
            ],
            [
              "Médio",
              "40",
              "13",
              "+5 para atingir, 2d6 + 1 dano",
              "10",
              "12"
            ],
            [
              "Grande",
              "50",
              "10",
              "+6 para atingir, 2d10 + 2 dano",
              "14",
              "10"
            ],
            [
              "Enorme",
              "80",
              "10",
              "+8 para atingir, 2d12 + 4 dano",
              "18",
              "6"
            ]
          ]
        },
        {
          "type": "default",
          "description": "Um objeto animado é um constructo com CA, pontos de vida, ataques, Força e Destreza determinados pelo seu tamanho. Sua Constituição é 10 e sua Inteligência e Sabedoria são 3 e seu Carisma é 1. Seu deslocamento é 9 metros [30 feet]; se o objeto não tiver pernas ou outros apêndices que ele possa usar para locomoção, ao invés, ele terá deslocamento de voo 9 metros [30 feet] e poderá planar. Se o objeto estiver firmemente preso a uma superfície ou objeto maior, como uma corrente presa a uma parede, seu deslocamento será 0. Ele tem percepção às cegas num raio de 9 metros [30-foot radius] e é cego além dessa distância. Quando o objeto animado cair a 0 pontos de vida, ele reverte a sua forma normal de objeto e qualquer dano restante é transferido para sua forma de objeto original."
        },
        {
          "type": "default",
          "description": "Se você ordenar a um objeto que ataque, ele pode realizar um único ataque corpo-a-corpo contra uma criatura a até 1,5 metro [5 feet] dele. Ele realiza um ataque de pancada com um bônus de ataque e dano de concussão determinado pelo seu tamanho. O Mestre pode definir que um objeto especifico inflige dano cortante ou perfurante, baseado na forma dele."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, você pode animar dois objetos adicionais para cada nível do espaço acima do 5°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "116"
    }
  },
  {
    "name": "Antipatia/Simpatia",
    "originalName": "Antipathy/Sympathy",
    "level": 8,
    "school": "encantamento",
    "type": "8º nível de encantamento",
    "isRitual": false,
    "classes": [
      "druida",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "horas"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pedaço de alume embebido em vinagre para o efeito antipático ou uma gota de mel para o efeito simpático",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "dias",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia atrai ou repele as criaturas de sua escolha. Você escolhe um alvo dentro do alcance, tanto um objeto ou criatura Enorme ou menor ou uma área que não seja maior que 60 metros cúbicos [200-foot cube]. Então, especifica um tipo de criatura inteligente, como dragões vermelhos, goblins ou vampiros. Você envolve o alvo com uma aura que pode atrair ou repelir as criaturas especificas pela duração. Escolha antipatia ou simpatia como efeito da aura."
        },
        {
          "type": "option",
          "value": "Antipatia",
          "description": "Antipatia. O encantamento faz com que criaturas do tipo designado por você sintam-se fortemente impelidos em deixar a área e evitar o alvo. Quando uma dessas criaturas puder ver o alvo ou ficar a 18 metros [60 feet] dele, a criatura deve ser bem sucedida num teste de resistência de Sabedoria ou ficará amedrontada. A criatura continuará amedrontada enquanto puder ver o alvo ou permanecer a 18 metros [60 feet] dele. Enquanto estiver amedrontada pelo alvo, a criatura deve usar seu deslocamento para se mover para o local seguro mais próximo o qual ela não possa ver o alvo. Se a criatura se mover para mais de 18 metros [60 feet] do alvo e não puder vê-lo, a criatura não estará mais amedrontada, mas ela ficará amedrontada novamente se voltar a ver o alvo ou ficar a 18 metros [60 feet] dele."
        },
        {
          "type": "option",
          "value": "Simpatia",
          "description": "Simpatia. O encantamento faz com que as criaturas especificadas sintam-se fortemente impelidos a se aproximar do alvo enquanto estiverem a 18 metros [60 feet] dele ou puderem vê-lo. Quando uma dessas criaturas puder ver o alvo ou ficar a 18 metros [60 feet] dele, a criatura deve ser bem sucedida num teste de resistência de Vontade ou usará seu deslocamento em cada um dos seus turnos para entrar na área ou se mover até o alcance do alvo. Quando a criatura tiver feito isso, ela não poderá se afastar do alvo voluntariamente."
        },
        {
          "type": "default",
          "description": "Se o alvo causar dano ou ferir a criatura afetada de alguma forma, a criatura afetada pode realizar um novo teste de resistência de Sabedoria para terminar o efeito, como descrito abaixo."
        },
        {
          "type": "option",
          "value": "Terminando o Efeito",
          "description": "Terminando o Efeito. Se uma criatura afetada terminar se turno enquanto não estiver a até 18 metros [60 feet] do alvo ou não for capaz de vê-lo, a criatura faz um teste de resistência de Sabedoria. Em um sucesso, a criatura não estará mais afetada pelo alvo e reconhecerá o sentimento de repugnância ou atração como mágico. Além disso, uma criatura afetada pela magia tem direito a outro teste de resistência de Sabedoria a cada 24 horas enquanto a magia durar."
        },
        {
          "type": "default",
          "description": "Uma criatura que obtenha sucesso na resistência contra esse efeito ficará imune a ele por 1 minuto, depois desse tempo, ela pode ser afetada novamente."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "117"
    }
  },
  {
    "name": "Aprimorar Habilidade",
    "originalName": "Enhance Ability",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida",
      "feiticeiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "pelo ou penas de uma besta",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura e a agracia com aprimoramento mágico. Escolha um dos efeitos a seguir; o alvo ganha esse efeito até o fim da magia."
        },
        {
          "type": "option",
          "value": "Agilidade do Gato",
          "description": "Agilidade do Gato. O alvo tem vantagem em testes de Destreza. Ele também não sofre dano ao cair de 6 metros [20 feet] ou menos, se não estiver incapacitado."
        },
        {
          "type": "option",
          "value": "Esperteza da Raposa",
          "description": "Esperteza da Raposa. O alvo tem vantagem em testes de Inteligência."
        },
        {
          "type": "option",
          "value": "Esplendor da Águia",
          "description": "Esplendor da Águia. O alvo tem vantagem em testes de Carisma."
        },
        {
          "type": "option",
          "value": "Força do Touro",
          "description": "Força do Touro. O alvo tem vantagem em testes de Força e sua capacidade de carga é dobrada."
        },
        {
          "type": "option",
          "value": "Sabedoria da Coruja",
          "description": "Sabedoria da Coruja. O alvo tem vantagem em testes de Sabedoria."
        },
        {
          "type": "option",
          "value": "Vigor do Urso",
          "description": "Vigor do Urso. O alvo tem vantagem em testes de Constituição. Ele também recebe 2d6 pontos de vida temporários, que são perdidos quando a magia termina."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "139"
    }
  },
  {
    "name": "Aprisionamento",
    "originalName": "Imprisonment",
    "level": 9,
    "school": "abjuração",
    "type": "9º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bruxo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pergaminho de representação ou uma estatueta esculpida para se parecer com o alvo e um componente especial, que varia de acordo com a versão da magia que você escolher, por Dado de Viva,",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria um impedimento mágico para imobilizar uma criatura que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou será vinculado à magia; se ele for bem sucedido, ele será imune a essa magia se você conjura-la novamente. Enquanto estiver sob efeito dessa magia, a criatura não precisará respirar, comer ou beber e não envelhece. Magias de adivinhação não podem localizar ou perceber o alvo."
        },
        {
          "type": "default",
          "description": "Quando você conjura essa magia, você escolhe uma das seguintes formas de aprisionamento."
        },
        {
          "type": "option",
          "value": "Enterrar",
          "description": "Enterrar. O alvo é sepultado bem fundo na terra em uma esfera de energia mágica que é grande o suficiente para conter o alvo. Nada pode atravessar a esfera e nenhuma criatura pode se teletransportar ou usar viagem plantar para entrar ou sair dela."
        },
        {
          "type": "default",
          "description": "O componente especial para essa versão da magia é um pequeno globo de mitral."
        },
        {
          "type": "option",
          "value": "Acorrentar",
          "description": "Acorrentar. Pesadas correntes, firmemente presas ao solo, matem o alvo no lugar. O alvo está impedido até a magia acabar e ele não pode se mover ou ser movido por nenhum meio, até lá."
        },
        {
          "type": "default",
          "description": "O componente especial para essa versão da magia é uma fina corrente de metal precioso."
        },
        {
          "type": "option",
          "value": "Prisão Cercada",
          "description": "Prisão Cercada. A magia transporta o alvo para dentro de um pequeno semiplano que é protegido contra teletransporte e viagem planar. O semiplano pode ser um labirinto, uma jaula, uma torre ou qualquer estrutura ou área confinada similar, à sua escolha."
        },
        {
          "type": "default",
          "description": "O componente material especial para essa versão da magia é uma representação em miniatura da prisão, feita de jade."
        },
        {
          "type": "option",
          "value": "Contenção Reduzida",
          "description": "Contenção Reduzida. O alvo é reduzido até o tamanho de 30 centímetros [1 foot] e é aprisionado dentro de uma gema ou objeto similar. A luz pode passar através da gema normalmente (permitindo que o alvo veja o exterior e outras criaturas vejam o interior), mas nada mais pode atravessa-la, mesmo por meios de teletransporte ou viagem planar. A gema não pode ser partida ou quebrada enquanto a magia estiver efetiva."
        },
        {
          "type": "default",
          "description": "O componente especial para essa versão da magia é uma gema transparente grande, como um coríndon, diamante ou rubi."
        },
        {
          "type": "option",
          "value": "Torpor",
          "description": "Torpor. O alvo cai no sono e não pode ser acordado."
        },
        {
          "type": "default",
          "description": "O componente especial para essa versão da magia consiste em ervas soporíferas raras."
        },
        {
          "type": "option",
          "value": "Terminando a Magia",
          "description": "Terminando a Magia. Durante a conjuração da magia, em quaisquer das versões, você pode especificar uma condição que irá fazer a magia terminar e libertará o alvo. A condição pode ser o quão especifica ou elaborada quanto você quiser, mas o Mestre deve concordar que a condição é razoável e tem uma probabilidade de acontecer. As condições podem ser baseadas no nome, identidade ou divindade da criatura mas, no mais, devem ser baseadas em ações ou qualidades observáveis e não em valores intangíveis tais como nível, classe e pontos de vida."
        },
        {
          "type": "default",
          "description": "A magia dissipar magia pode terminar a magia apenas se for conjurada como uma magia de 9° nível, tendo como alvo ou a prisão ou o componente especial usado para cria-la."
        },
        {
          "type": "default",
          "description": "Você pode usar um componente especial em particular para criar apenas uma prisão por vez. Se você conjurar essa magia novamente usando o mesmo componente, o alvo da primeira conjuração é, imediatamente, liberado do vínculo."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "156"
    }
  },
  {
    "name": "Arca Secreta",
    "originalName": "Secret Chest",
    "level": 4,
    "school": "conjuração",
    "type": "4º nível de conjuração",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um baú requintado, de 90 cm por 60 cm por 60 cm [3 feet by 2 feet by 2 feet], construído com materiais raros valendo e uma réplica Miúda feita do mesmo material,",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você esconde um baú, e todo o seu conteúdo, no Plano Etéreo. Você deve tocar o baú e a réplica em miniatura que serve como componente material para a magia. O baú pode acomodar até 3,6 metros cúbicos [12 cubic feet] de matéria inorgânica (90 cm por 60 cm por 60 cm) [3 feet by 2 feet by 2 feet]."
        },
        {
          "type": "default",
          "description": "Enquanto o baú permanecer no Plano Etéreo, você pode usar uma ação e tocar a réplica para revocar o baú. Ele aparece em um espaço desocupado no chão a 1,5 metro [5 feet] de você. Você pode enviar o baú de volta ao Plano Etéreo usando uma ação e tocando tanto no baú quanto na réplica."
        },
        {
          "type": "default",
          "description": "Após 60 dias, existe 5 por cento de chance, cumulativa, por dia do efeito da magia terminar. Esse efeito termina se você conjurar essa magia novamente, se a pequena réplica do baú for destruída ou se você decidir terminar a magia usando uma ação. Se a magia terminar enquanto o baú maior estiver no Plano Etéreo, ele estará irremediavelmente perdido."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "177"
    }
  },
  {
    "name": "Área Escorregadia",
    "originalName": "Grease",
    "level": 1,
    "school": "conjuração",
    "type": "1º nível de conjuração",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de pele de porco ou manteiga",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Graxa escorregadia cobre o solo em um quadrado de 3 metros [10 feet] centrado em um ponto, dentro do alcance, tornando essa área em terreno difícil pela duração."
        },
        {
          "type": "default",
          "description": "Quando a graxa aparece, cada criatura de pé na área deve ser bem sucedida num teste de resistência de Destreza ou cairá no chão. Uma criatura que entre na área ou termine seu turno nela, deve ser bem sucedido num teste de resistência de Destreza ou cairá no chão."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "150"
    }
  },
  {
    "name": "Arma Espiritual",
    "originalName": "Spiritual Weapon",
    "level": 2,
    "school": "evocação",
    "type": "2º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma arma espectral flutuante, dentro do alcance, que permanece pela duração ou até você conjurar essa magia novamente. Quando você conjura essa magia, você pode realizar um ataque corpo-a-corpo com magia contra uma criatura a 1,5 metro [5 feet] da arma. Se atingir, o alvo sofre dano de energia igual a 1d8 + seu modificador de habilidade de conjuração."
        },
        {
          "type": "default",
          "description": "Com uma ação bônus, no seu turno, você pode mover a arma até 6 metros [20 feet] e repetir o ataque contra uma criatura a 1,5 metro [5 feet] dela."
        },
        {
          "type": "default",
          "description": "A arma pode ter a forma que você desejar. Clérigos de divindades associadas com uma arma em particular (como St. Cuthbert é conhecido por sua maça ou Thor por seu martelo) fazem o efeito dessa magia se assemelhar a essa arma."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d8 para cada dois níveis do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "182"
    }
  },
  {
    "name": "Arma Mágica",
    "originalName": "Magic Weapon",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "mago",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma arma não-mágica. Até a magia acabar, a arma se torna uma arma mágica com +1 de bônus nas jogadas de ataque e jogadas de dano."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o bônus aumenta para +2. Quando você usar um espaço de magia de 6° nível ou superior, o bônus aumenta para +3."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "161"
    }
  },
  {
    "name": "Armadura Arcana",
    "originalName": "Mage Armor",
    "level": 1,
    "school": "abjuração",
    "type": "1º nível de abjuração",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pedaço de couro curado",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura voluntária que não esteja vestindo armadura e uma energia mágica protetora a envolve até a magia acabar. A CA base do alvo se torna 13 + o modificador de Destreza dele. A magia acaba se o alvo colocar uma armadura ou se você dissipa-la usando uma ação."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "160"
    }
  },
  {
    "name": "Arrombar",
    "originalName": "Knock",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha um objeto que você possa ver, dentro do alcance. O objeto pode ser uma porta, uma caixa, um baú ou um par de algemas, um cadeado ou outro objeto que contenha um meio mundano ou mágico que previne o acesso."
        },
        {
          "type": "default",
          "description": "Um alvo que esteja fechado por uma fechadura mundana ou preso ou barrado torna-se destrancado, destravado ou desbloqueado. Se o objeto tiver múltiplas fechaduras, apenas uma delas é destrancada."
        },
        {
          "type": "default",
          "description": "Se você escolher um alvo que esteja travado pela magia tranca arcana, essa magia será suprimida por 10 minutos, durante esse período o alvo pode ser aberto e fechado normalmente."
        },
        {
          "type": "default",
          "description": "Quando você conjurar essa magia, uma batida forte, audível a até 90 metros [300 feet] de distância, emana do objeto alvo."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "158"
    }
  },
  {
    "name": "Assassino Fantasmagórico",
    "originalName": "Phantasmal Killer",
    "level": 4,
    "school": "ilusão",
    "type": "4º nível de ilusão",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você mexe com os pesadelos de uma criatura que você possa ver, dentro do alcance, e cria uma manifestação ilusória dos seus medos mais profundos, visível apenas para a criatura. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele ficará amedrontado pela duração. No final de cada turno do alvo, antes da magia acabar, ele deve ser bem sucedido num teste de resistência de Sabedoria ou sofrerá 4d10 de dano psíquico. Se passar na resistência, a magia acaba."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 4°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "167"
    }
  },
  {
    "name": "Ataque Certeiro",
    "originalName": "True Strike",
    "level": 0,
    "school": "adivinhação",
    "type": "truque de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": false,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "rodadas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você estende sua mão e aponta o dedo para um alvo no alcance. Sua magia garante a você uma breve intuição sobre as defesas do alvo. No seu próximo turno, você terá vantagem na primeira jogada de ataque contra o alvo, considerando que essa magia não tenha acabado."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "189"
    }
  },
  {
    "name": "Ataque Visual",
    "originalName": "Eyebite",
    "level": 6,
    "school": "necromancia",
    "type": "6º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Pela duração da magia, seus olhos se tornam um vazio escuro imbuído com um poder terrível. Uma criatura a sua escolha dentro de 18 metros [60 feet] de você que você possa ver precisa ser bem sucedido em um teste de resistência de Sabedoria ou será afetado por um dos seguintes efeitos a sua escolha pela duração. Em cada um dos seus turnos até que a magia termine, você pode usar sua ação para mirar outra criatura, mas não pode mirar uma criatura novamente se ela foi vem sucedida em um teste de resistência contra este conjuração de ataque visual."
        },
        {
          "type": "default",
          "description": "Adormecer. O alvo cai inconsciente. Ele acorda se sofrer qualquer dano ou se outra criatura usar sua ação para sacudir o adormecido até acordá-lo."
        },
        {
          "type": "default",
          "description": "Apavorar. O alvo está amedrontado. Em cada um dos turnos dele, a criatura amedrontada deve realizar a ação de Disparada e se mover para longe de você pela rota segura mais curta disponível, a não ser que não haja lugar para se mover. Se o alvo se mover para um local a, pelo menos, 18 metros [60 feet] de distância de você onde ela não possa mais te ver, esse efeito termina."
        },
        {
          "type": "default",
          "description": "Adoecer. O alvo tem desvantagem nas jogadas de ataque e testes de habilidade. No final de cada um dos turnos dele, ele pode realizar outro teste de resistência de Sabedoria. Se for bem sucedido, o efeito termina."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "141"
    }
  },
  {
    "name": "Augúrio",
    "originalName": "Augury",
    "level": 2,
    "school": "adivinhação",
    "type": "2º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "varetas, ossos ou objetos similares especialmente marcados",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Ao lançar varetas cravejados com gemas, rolar ossos de dragão, puxar cartas ornamentadas ou usar outro tipo de ferramenta de adivinhação, você recebe um pressagio de uma entidade de outro mundo, sobre os resultados de cursos de ação específicos que você planeja tomar nos próximos 30 minutos. O Mestre escolhe dentre os possíveis presságios a seguir:"
        },
        {
          "type": "default",
          "description": "• Êxito, para resultados bons"
        },
        {
          "type": "default",
          "description": "• Fracasso, para resultados maus"
        },
        {
          "type": "default",
          "description": "• Êxito e fracasso, para resultados bons e maus"
        },
        {
          "type": "default",
          "description": "• Nada, para resultados que não são especialmente bons ou ruins."
        },
        {
          "type": "default",
          "description": "A magia não leva em conta qualquer possível circunstancia que possa mudar o resultado, como a conjuração de magias adicionais ou a perda ou ganho de um companheiro."
        },
        {
          "type": "default",
          "description": "Se você conjurar a magia duas ou mais vezes antes de completar seu próximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "120"
    }
  },
  {
    "name": "Aumentar/Reduzir",
    "originalName": "Enlarge/Reduce",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de pó de ferro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você faz com que uma criatura ou um objeto que você possa ver dentro do alcance, fique maior ou menor, pela duração. Escolha entre uma criatura ou um objeto que não esteja sendo carregado nem vestido. Se o alvo for involuntário, ele deve realizar um teste de resistência de Constituição. Se for bem sucedido, a magia não surte efeito."
        },
        {
          "type": "default",
          "description": "Se o alvo for uma criatura, tudo que ele esteja vestindo ou carregando muda e tamanho com ela. Qualquer item largado por uma criatura afetada, retorna ao seu tamanho natural."
        },
        {
          "type": "option",
          "value": "Aumentar",
          "description": "Aumentar. O tamanho do alvo dobra em todas as dimensões e seu peso é multiplicado por oito. Esse aumento eleva seu tamanho em uma categoria – de Médio para Grande, por exemplo. Se não houver espaço suficiente para que o alvo dobre de tamanho, a criatura ou objeto alcança o tamanho máximo possível no espaço disponível. Até o fim da magia, o alvo também tem vantagem em testes de Força e testes de resistência de Força. O tamanho das armas do alvo crescem para se adequar ao seu novo tamanho. Quando essas armas são ampliadas, os ataques do alvo com elas causam 1d4 de dano extra."
        },
        {
          "type": "option",
          "value": "Reduzir",
          "description": "Reduzir. O tamanho do alvo é reduzido à metade em todas as dimensões e seu peso é reduzido a um oitavo do normal. Essa redução diminui o tamanho do alvo em uma categoria – de Médio para Pequeno, por exemplo. Até o fim da magia, o alvo tem desvantagem em testes de Força e testes de resistência de Força. O tamanho das armas do alvo diminuem para se adequar ao seu novo tamanho. Quando essas armas são reduzidas, os ataques do alvo com elas causam 1d4 de dano a menos (isso não pode reduzir o dano a menos de 1)."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "140"
    }
  },
  {
    "name": "Aura Mágica Do Arcanista",
    "originalName": "Arcanist's Magic Aura",
    "level": 2,
    "school": "ilusão",
    "type": "2º nível de ilusão",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pequeno quadrado de seda",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você coloca uma ilusão em uma criatura ou objeto que você tocar, então magias de adivinhação revelarão informações falsas sobre ele. O alvo pode ser uma criatura voluntária ou um objeto que não esteja sendo carregado ou vestido por outra criatura."
        },
        {
          "type": "default",
          "description": "Quando você conjura essa magia, escolha um ou ambos os efeitos seguintes. O efeito permanece pela duração. Se você conjurar essa magia na mesma criatura ou objeto a cada dia por 30 dias, colocando o mesmo efeito nele todas as vezes, a ilusão durará até ser dissipada."
        },
        {
          "type": "option",
          "value": "Aura Falsa",
          "description": "Aura Falsa. Você modifica a forma como o alvo aparece para magias e efeitos mágicos, como detectar magia, que detectam auras mágicas. Você pode fazer um objeto não-mágico parecer mágico ou mudar a aura mágica de um objeto para que ela pareça pertencer a outra escola de magia a sua escolha. Quando você usar esse efeito num objeto, você pode fazer a aura falsa aparente a qualquer criatura que manusear o item."
        },
        {
          "type": "option",
          "value": "Máscara",
          "description": "Máscara. Você modifica a forma como o alvo aparece para magias e efeitos que detectam tipos de criaturas, como o Sentido Divino do paladino ou o gatilho de um magia símbolo. Você escolhe o tipo de criatura e outras magias e efeitos mágicos consideram o alvo como se ele fosse uma criatura desse tipo ou tendência."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "119"
    }
  },
  {
    "name": "Aura Sagrada",
    "originalName": "Holy Aura",
    "level": 8,
    "school": "abjuração",
    "type": "8º nível de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um minúsculo relicário, contendo uma relíquia sagrada, como um pedaço de tecido do robe de um santo ou um pedaço de pergaminho de um texto religioso",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Luz divina emana de você e adere em uma aureola suave num raio de 9 metros [30-foot radius], em volta de você. As criaturas de sua escolha, no raio, quando você conjurar essa magia, emitem penumbra num raio de 1,5 metro [5-foot radius] e tem vantagem em todos os testes de resistência e as outras criaturas tem desvantagem nas jogadas de ataque contra elas, até a magia acabar. Além disso, quando um corruptor ou morto-vivo atingir uma criatura afetada com um ataque corpo-a-corpo, a aura lampeja com luz plena. O atacante deve ser bem sucedido num teste de resistência de Constituição ou ficara cego até a magia acabar."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "155"
    }
  },
  {
    "name": "Auxílio Divino",
    "originalName": "Divine Favor",
    "level": 1,
    "school": "evocação",
    "type": "1º nível de evocação",
    "isRitual": false,
    "classes": [
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Sua oração fortalece você com radiação divina. Até o fim da magia, seus ataques com arma causam 1d4 de dano radiante extra ao atingirem."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "136"
    }
  },
  {
    "name": "Banimento",
    "originalName": "Banishment",
    "level": 4,
    "school": "abjuração",
    "type": "4º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bruxo",
      "clérigo",
      "feiticeiro",
      "mago",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um item desagradável ao alvo",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você tenta enviar uma criatura que você pode ver dentro do alcance para outro plano de existência. O alvo precisa ser bem sucedido em um teste de resistência de Carisma ou será banido."
        },
        {
          "type": "default",
          "description": "Se o alvo for nativo do plano de existência que você está, você bane o alvo para um semiplano inofensivo. Enquanto estiver lá, a criatura estará incapacitada. Ela permanece lá até a magia acabar, a partir desse ponto, o alvo reaparece no espaço em que ela deixou ou no espaço desocupado mais próximo, se o espaço dela estiver ocupado."
        },
        {
          "type": "default",
          "description": "Se o alvo for nativo de um plano de existência diferente do que você está, o alvo é banido em um lampejo sutil, retornando para o seu plano natal. Se a magia acabar antes de 1 minuto se passar, o alvo reaparece no lugar em que estava ou no espaço desocupado mais próximo, se o espaço dela estiver ocupado. Do contrário, o alvo não retorna."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 4°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "120"
    }
  },
  {
    "name": "Banquete De Heróis",
    "originalName": "Heroes' Feast",
    "level": 6,
    "school": "conjuração",
    "type": "6º nível de conjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma tigela encrustada de gemas",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você traz um grande banquete, incluindo comida e bebida magnificas. O banquete leva 1 hora para ser consumido e desaparece ao final desse tempo e os efeitos benéficos não se aplicam até essa hora terminar. Até doze criaturas podem participar do banquete."
        },
        {
          "type": "default",
          "description": "Uma criatura que participe do banquete ganha diversos benefícios. A criatura é curada de todas as doenças e venenos, torna-se imune a veneno e a ser amedrontada e faz todos os seus testes de resistência de Sabedoria com vantagem. Seu máximo de pontos de vida também aumenta em 2d10 e ela ganha a mesma quantidade de pontos de vida. Esses benefícios duram por 24 horas."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "154"
    }
  },
  {
    "name": "Barreira De Lâminas",
    "originalName": "Blade Barrier",
    "level": 6,
    "school": "evocação",
    "type": "6º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma muralha vertical de lâminas giratórias, afiadas como navalhas, feitas de energia mágica. A muralha aparece dentro do alcance e permanece pela duração. Você pode fazer uma muralha reta de até 30 metros [100 feet] de comprimento por 6 metros de altura [20-foot-tall] e 1,5 metro [5 feet] de largura ou uma muralha anelar com até 18 metros [60 feet] de diâmetro, 6 metros de altura [20-foot-tall] e 1,5 metro [5 feet] de largura. A muralha confere três-quartos de cobertura a criaturas atrás dela e seu espaço é terreno difícil."
        },
        {
          "type": "default",
          "description": "Quando uma criatura entrar a área da muralha pela primeira vez em um turno, ou começar seu turno nela, a criatura deve realizar um teste de resistência de Destreza. Se falhar, a criatura sofrerá 6d10 de dano cortante. Em um sucesso, a criatura sofre metade desse dano."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "122"
    }
  },
  {
    "name": "Benção",
    "originalName": "Bless",
    "level": 1,
    "school": "encantamento",
    "type": "1º nível de encantamento",
    "isRitual": false,
    "classes": [
      "clérigo",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um borrifo de água benta",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você abençoa até três criaturas, à sua escolha, dentro do alcance. Sempre que um alvo realizar uma jogada de ataque ou teste de resistência antes da magia acabar, o alvo pode jogar um d4 e adicionar o valor jogado ao ataque ou teste de resistência."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "122"
    }
  },
  {
    "name": "Boca Encantada",
    "originalName": "Magic Mouth",
    "level": 2,
    "school": "ilusão",
    "type": "2º nível de ilusão",
    "isRitual": true,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pequeno pedaço de favo de mel e pó de jade",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você implanta uma mensagem em um objeto dentro do alcance, uma mensagem que é pronunciada quando uma condição de ativação é satisfeita. Escolha um objeto que você possa ver e não esteja sendo vestido ou carregado por outra criatura. Então, fale a mensagem, que deve conter 25 palavras ou menos, apesar de ela poder ser entregue durante um período de até 10 minutos. Finalmente, determine a circunstância que irá ativar a magia para que sua mensagem seja entregue."
        },
        {
          "type": "default",
          "description": "Quando essa circunstância ocorrer, a boca encantada aparecerá no objeto e recitará a mensagem com sua voz e com o mesmo volume que você falou. Se o objeto que você escolheu tiver uma boca ou algo semelhante a uma boca (por exemplo, a boca de uma estátua), a boca mágica aparece ai, então, as palavras parecerão vir da boca do objeto. Quando você conjura essa magia, você pode fazer a magia acabar depois de enviar sua mensagem ou ela pode permanecer e repetir a mensagem sempre que a circunstância de ativação ocorrer."
        },
        {
          "type": "default",
          "description": "A circunstância de ativação pode ser tão genérica ou tão detalhada quando você quiser, apesar de ela precisar ser baseada em condições visuais ou audíveis que ocorram a até 9 metros [30 feet] do objeto. Por exemplo, você pode instruir a boca a falar quando uma criatura se aproximar a menos de 9 metros [30 feet] do objeto ou quando um sino de prata tocar a menos de 9 metros [30 feet] dela."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "161"
    }
  },
  {
    "name": "Bola De Fogo",
    "originalName": "Fireball",
    "level": 3,
    "school": "evocação",
    "type": "3º nível de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago",
      "o corruptor"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 45,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma minúscula bola de guano de morcego e enxofre",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um veio brilhante lampeja na ponta do seu dedo em direção a um ponto que você escolher, dentro do alcance, e então eclode com um estampido baixo, explodindo em chamas. Cada criatura em uma esfera de 6 metros de raio [20-foot radius], centrada no ponto, deve realizar um teste de resistência de Destreza. Um alvo sofre 8d6 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "default",
          "description": "O fogo se espalha, dobrando esquinas. Ele incendeia objetos inflamáveis na área que não estejam sendo vestidos ou carregados."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "144"
    }
  },
  {
    "name": "Bola De Fogo Controlável",
    "originalName": "Delayed Blast Fireball",
    "level": 7,
    "school": "evocação",
    "type": "7º nível de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 45,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma minúscula bola de guano de morcego e enxofre",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um feixe de luz amarelada é disparado da ponta do seu dedo, então se condensa e aguarda no ponto escolhido, dentro do alcance, como uma conta brilhante, pela duração. Quando a magia termina, seja por sua concentração ter sido interrompida ou por você ter decidido terminá-la, a conta eclode com um estampido baixo, explodindo em chamas que se espalhando, dobrando esquinas. Cada criatura numa esfera, com 6 metros de raio [20-foot radius], centrada na conta, deve realizar um teste de resistência de Destreza. Uma criatura sofre dano igual ao total de dano acumulado se falhar na resistência, ou metade do total se obtiver sucesso."
        },
        {
          "type": "default",
          "description": "O dano base da magia é 12d6. Se até o final do seu turno, a conta ainda não tiver sido detonada, o dano aumenta em 1d6."
        },
        {
          "type": "default",
          "description": "Se a conta brilhante for tocada antes do intervalo expirar, a criatura que a tocou deve realizar um teste de resistência de Destreza. Se falhar na resistência, a magia termina imediatamente, fazendo a conta explodir em chamas. Se obtiver sucesso na resistência, a criatura pode arremessar a conta a até 12 metros [40 feet]. Quando ela atinge uma criatura ou objeto solido, a magia termina e a conta explode."
        },
        {
          "type": "default",
          "description": "O fogo danifica objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 8° nível ou superior, o dano base aumenta e 1d6 para cada nível do espaço acima do 7°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "133"
    }
  },
  {
    "name": "Bom Fruto",
    "originalName": "Goodberry",
    "level": 1,
    "school": "transmutação",
    "type": "1º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um raminho de visco",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Até dez frutos aparecem na sua mão e são infundidos com magia pela duração. Uma criatura pode usar sua ação para comer um fruto. Comer um fruto restaura 1 ponto de vida e um fruto produz nutrientes suficientes para sustentar uma criatura por um dia."
        },
        {
          "type": "default",
          "description": "Os frutos perdem seu potencial se não forem consumidos dentro de 24 horas da conjuração dessa magia."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "150"
    }
  },
  {
    "name": "Bordão Místico",
    "originalName": "Shillelagh",
    "level": 0,
    "school": "transmutação",
    "type": "truque de transmutação",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "visco, uma folha de trevo e uma clava ou bordão",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "A madeira de uma clava ou bordão, que você esteja segurando, é imbuída com o poder da natureza. Pela duração, você pode usar sua habilidade de conjuração ao invés da sua Força para as jogadas de ataque e dano corpo-a-corpo usando essa arma, e o dado de dano da arma se torna um d8. A arma também se torna mágica, se ela já não for. A magia acaba se você conjura-la novamente ou se você soltar a arma."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "179"
    }
  },
  {
    "name": "Caminhar Em Árvores",
    "originalName": "Tree Stride",
    "level": 5,
    "school": "conjuração",
    "type": "5º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você adquire a habilidade de entrar em uma árvore e se mover de dentro dela para dentro de outra árvore do mesmo tipo a até 150 metros [500 pés]. Ambas as árvores precisam estar vivas e ter pelo menos o mesmo tamanho que você. Você precisa usar 1,5 metros [5 pés] de movimento para entrar em uma árvore. Você instantaneamente sabe a localização de todas as outras árvores do mesmo tipo dentro de 150 metros [500 pés] e, como parte do movimento usado para entrar na árvore, pode ou passa para uma destas árvores ou pisar para fora da árvore em que você está. Você aparece em um ponto a sua escolha dentro de 1,5 metros [5 pés] da árvore de destino, usando outros 1,5 metros [5 pés] de movimento. Se você não tiver nenhum movimento sobrando, você aparece dentro de 1,5 metros [5 pés] da árvore em que você entrou."
        },
        {
          "type": "default",
          "description": "Você pode usar esse habilidade de transporte uma vez por rodada pela duração. Você deve terminar cada turno fora da árvore."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "188"
    }
  },
  {
    "name": "Caminhar No Vento",
    "originalName": "Wind Walk",
    "level": 6,
    "school": "transmutação",
    "type": "6º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "fogo e água benta",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você e até dez criaturas voluntária que você possa ver, dentro do alcance, assumem uma forma gasosa pela duração, parecidas com pedaços de nuvem. Enquanto estiver na forma de nuvem, uma criatura tem deslocamento de voo de 90 metros [300 feet] e tem resistência a dano de concussão, cortante e perfurante de ataques não-mágicos. As únicas ações que uma criatura pode realizar nessa forma são a ação de Disparada ou para reverter a sua forma normal. Reverter leva 1 minuto, período pelo qual a criatura estará incapacitada e não poderá se mover. Até a magia acabar, uma criatura pode reverter para a forma de nuvem, o que também requer a transformação de 1 minuto."
        },
        {
          "type": "default",
          "description": "Se uma criatura estiver na forma de nuvem e voando quando o efeito acabar, a criatura descerá a 18 metros [60 feet] por rodada por 1 minuto, até aterrissar na solo, o que é feito com segurança. Se ela não puder aterrissar em 1 minuto, a criatura cairá a distância restante."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "192"
    }
  },
  {
    "name": "Campo Antimagia",
    "originalName": "Antimagic Field",
    "level": 8,
    "school": "abjuração",
    "type": "8º nível de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pitada de ferro em pó ou limalha de ferro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma esfera invisível, de 3 metros de raio [10-foot radius], de antimagia envolve você. Essa área é separada da energia mágica que se espalha pelo multiverso. Dentro da esfera, magias não podem ser conjuradas, criaturas invocadas desaparecem e, até mesmo itens mágicos, se tornam mundanos. Até o fim da magia, a esfera se move com você, centrada em você."
        },
        {
          "type": "default",
          "description": "Magias e outros efeitos mágicos, exceto os criados por artefatos ou divindades, são suprimidos na esfera e não podem adentra-la. Um espaço gasto para conjurar uma magia suprimida é consumido. Enquanto o efeito estiver suprimido, ela não funciona, mas o tempo que ela permanecer suprimida é descontado da sua duração."
        },
        {
          "type": "option",
          "value": "Efeitos de Alvo",
          "description": "Efeitos de Alvo. Magias e outros efeitos mágicos, como mísseis mágicos e enfeitiçar pessoa, que forem usados em uma criatura ou objeto dentro da esfera, não surtem efeito no alvo."
        },
        {
          "type": "option",
          "value": "Áreas de Magia",
          "description": "Áreas de Magia. A área de outra magia ou efeito mágico, como uma bola de fogo, não se estende para dentro da esfera. Se a esfera sobrepor um área mágica, a parte da área que for coberta pela espera é suprimida. Por exemplo, as chás criadas por uma muralha de fogo serão suprimidas dentro da esfera, criando um abertura na muralha se a sobreposição por grande o suficiente."
        },
        {
          "type": "option",
          "value": "Magias",
          "description": "Magias. Qualquer magia ativa ou outro efeito mágico em uma criatura ou objeto dentro da esfera é suprimido enquanto a criatura ou objeto permanecer dentro dela."
        },
        {
          "type": "option",
          "value": "Itens Mágicos",
          "description": "Itens Mágicos. As propriedades e poderes de itens mágicos são suprimidas dentro da esfera. Por exemplo, uma espada longa +1 dentro da esfera funciona como uma espada não-mágica. As propriedades e poderes de uma arma mágica são suprimidos se ela for usada contra um alvo dentro da esfera ou empunhada por um atacante dentro da esfera. Se uma arma mágica ou munição mágica deixar a esfera completamente (por exemplo, se você disparar uma flecha mágica ou arremessar uma lança mágica e um alvo fora da esfera), a magia do item deixa de ser suprimida tão logo ele deixe a esfera."
        },
        {
          "type": "option",
          "value": "Criaturas e Objetos",
          "description": "Criaturas e Objetos. Uma criatura ou objeto invocado ou criado através de magia, temporariamente desaparece da existência dentro da esfera. Tais criaturas reaparecem instantaneamente quando o espaço ocupado pela criatura não estiver mais dentro da esfera."
        },
        {
          "type": "option",
          "value": "Dissipar Magia",
          "description": "Dissipar Magia. Magias e efeitos mágicos como dissipar magia, não surtem efeito sob esfera. Da mesma forma, esferas criadas por magias de campo antimagia diferentes não se anulam."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "117"
    }
  },
  {
    "name": "Cão Fiel",
    "originalName": "Faithful Hound",
    "level": 4,
    "school": "conjuração",
    "type": "4º nível de conjuração",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um minúsculo apito de prata, um pedaço de osso e um fio",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você conjura um cão de guarda fantasma em um espaço desocupado que você possa ver, dentro do alcance, que permanece pela duração, até você dissipa-lo com uma ação ou até você se mover para mais de 30 metros [100 feet] dele."
        },
        {
          "type": "default",
          "description": "O cão é invisível para todas as criaturas, exceto para você, e não pode ser ferido. Quando uma criatura Pequena ou maior se aproximar a 9 metros [30 feet] sem, primeiramente, falar a senha que você especifica quando conjura a magia, o cão começa a latir muito alto. O cão vê criaturas invisíveis e pode ver no Plano Etéreo. Ele ignora ilusões."
        },
        {
          "type": "default",
          "description": "No começo de cada um dos seus turnos, o cão tenta morder uma criatura a 1,5 metro [5 feet] dele que seja hostil a você. O bônus de ataque do cão é igual ao seu modificador de habilidade de conjuração + seu bônus de proficiência. Se atingir, ele causa 4d8 de dano perfurante."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "142"
    }
  },
  {
    "name": "Carne Para Pedra",
    "originalName": "Flesh To Stone",
    "level": 6,
    "school": "transmutação",
    "type": "6º nível de transmutação",
    "isRitual": true,
    "classes": [
      "bruxo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pitada de cal, água e terra",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você tenta transformar uma criatura que você possa ver, dentro do alcance, em pedra. Se o corpo do alvo for feito de carne, a criatura deve realizar um teste de resistência de Constituição. Em caso de falha, ela ficará impedida, à medida que sua carne começa a endurecer. Se obtiver sucesso, a criatura não é afetada."
        },
        {
          "type": "default",
          "description": "Uma criatura impedida por essa magia deve realizar outro teste de resistência de Constituição no final de cada um dos turnos dela. Se obtiver sucesso na resistência contra essa magia três vezes, a magia termina. Se ela falhar no teste de resistência três vezes, ela se torna pedra é afetada pela condição petrificado pela duração. Os sucessos e falhas não precisam ser consecutivos; anote ambos os resultados até o alvo acumular três de mesmo tipo."
        },
        {
          "type": "default",
          "description": "Se a criatura for quebrada fisicamente enquanto petrificada, ela sofre deformidades similares se for revertida ao seu estado original."
        },
        {
          "type": "default",
          "description": "Se você mantiver sua concentração nessa magia durante toda a duração possível, a criatura é transformada em pedra até o efeito ser removido."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "145"
    }
  },
  {
    "name": "Cativar",
    "originalName": "Enthrall",
    "level": 2,
    "school": "encantamento",
    "type": "2º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você tece um cordão de palavras distrativas, fazendo as criaturas, à sua escolha, que você puder ver dentro do alcance e que puderem ouvir você, realizarem um teste de resistência de Sabedoria. Qualquer criatura que não puder ser enfeitiçada, passa automaticamente nesse teste de resistência e, se você ou seus companheiros estiverem lutando com a criatura, ela terá vantagem na resistência. Se falhar na resistência, a criatura terá desvantagem em testes de Sabedoria (Percepção) feitos para notar qualquer criatura além de você, até a magia acabar ou até o alvo não poder mais ouvir você. A magia acaba se você estiver incapacitado ou incapaz de falar."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "140"
    }
  },
  {
    "name": "Cegueira/Surdez",
    "originalName": "Blindness/Deafness",
    "level": 2,
    "school": "necromancia",
    "type": "2º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "feiticeiro",
      "mago",
      "o corruptor"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você pode cegar ou ensurdecer um oponente. Escolha uma criatura que você possa ver dentro do alcance para fazer um teste de resistência de Constituição. Se ela falhar, ficará ou cega ou surda (à sua escolha) pela duração. No final de cada um dos turnos dele, o alvo pode realizar um teste de resistência de Constituição. Se obtiver sucesso, a magia termina."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar uma criatura adicional para cada nível de espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "122"
    }
  },
  {
    "name": "Chama Contínua",
    "originalName": "Continual Flame",
    "level": 2,
    "school": "evocação",
    "type": "2º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "pó de rubi",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma chama, que produz iluminação equivalente a uma tocha, surge de um objeto que você tocar. O efeito é parecido com o de uma chama normal, mas ele não produz calor e não consome oxigênio. Uma chama continua pode ser coberta ou escondida, mas não sufocada ou extinta."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "130"
    }
  },
  {
    "name": "Chama Sagrada",
    "originalName": "Sacred Flame",
    "level": 0,
    "school": "evocação",
    "type": "truque de evocação",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Radiação similar a uma chama desce sobre uma criatura que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Destreza ou sofrerá 1d8 de dano radiante. O alvo não recebe qualquer benefício de cobertura contra esse teste de resistência."
        },
        {
          "type": "default",
          "description": "O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8)."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "176"
    }
  },
  {
    "name": "Chuva De Meteoros",
    "originalName": "Meteor Swarm",
    "level": 9,
    "school": "evocação",
    "type": "9º nível de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 0,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Esferas de fogo incandescentes atingem o solo em quatro pontos diferentes que você possa ver, dentro do alcance. Cada criatura numa esfera de 12 metros de raio [40-foot radius], centrada em cada ponto escolhido por você, deve realizar um teste de resistência de Destreza. A esfera se espalha, dobrando esquinas. Uma criatura sofre 20d6 de dano de fogo e 20d6 de dano de concussão se falhar na resistência ou metade desse dano se obtiver sucesso. Uma criatura na área de mais de uma explosão de chamas é afetada apenas uma vez."
        },
        {
          "type": "default",
          "description": "A magia causa dano aos objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "164"
    }
  },
  {
    "name": "Círculo Da Morte",
    "originalName": "Circle Of Death",
    "level": 6,
    "school": "necromancia",
    "type": "6º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 45,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "o pó de uma pérola negra esmagada",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma esfera de energia negativa ondula em um raio de 18 metros [60 feet] de um ponto ao alcance. Cada criatura na área deve realizar um teste de resistência de Constituição. Um alvo sofre 8d6 de dano necrótico se falhar no seu teste de resistência, ou metade desse dano se passar."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 2d6 para cada nível do espaço acima do 6°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "124"
    }
  },
  {
    "name": "Círculo De Teletransporte",
    "originalName": "Teleportation Circle",
    "level": 5,
    "school": "conjuração",
    "type": "5º nível de conjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 3,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": true,
      "material": {
        "description": "giz e tintas raros infundidos com pedras preciosas",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "rodadas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "À medida que você conjura essa magia, você desenha um círculo de 3 metros [10 feet] de diâmetro no chão, inscrevendo selos que conectam sua localização a um círculo de teletransporte permanente, à sua escolha, cuja sequência de selos você conheça e esteja no mesmo plano de existência que você. Um portal cintilante se abre dentro do círculo que você desenhou e permanece aberto até o final do seu próximo turno. Qualquer criatura que entrar no portal, instantaneamente, aparecerá a 1,5 metro [5 feet] do círculo de destino ou no espaço desocupado mais próximo, se o espaço estiver ocupado."
        },
        {
          "type": "default",
          "description": "Muitos templos principais, guildas e outros locais importantes possuem círculos de teletransporte permanentes inscritos em algum lugar dos seus confins. Cada círculo desse inclui uma sequência única de selos – uma sequência de runas mágicas dispostas em um padrão específico. Quando você adquire a capacidade de conjurar essa magia pela primeira vez, você aprende a sequência de selos de dois destinos no Plano Material, determinadas pelo Mestre. Você pode aprender sequências de selos adicionais durante suas aventuras. Você pode consignar uma nova sequência de selos a memória após estuda-la por 1 minuto."
        },
        {
          "type": "default",
          "description": "Você pode criar um círculo de teletransporte permanente ao conjurar essa magia no mesmo local a cada dia por um ano. Você não precisa usar o círculo para se teletransportar quando você conjurar a magia desse modo."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "186"
    }
  },
  {
    "name": "Círculo Mágico",
    "originalName": "Magic Circle",
    "level": 3,
    "school": "abjuração",
    "type": "3º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bruxo",
      "clérigo",
      "mago",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 3,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "água benta ou pó de prata e ferro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria um cilindro de energia mágica de 3 metros de raio [10-foot radius] por 6 metros de altura [20-foot-tall], centrado num ponto no solo que você possa ver, dentro do alcance. Runas brilhantes aparecem toda vez que o cilindro toca o chão ou outra superfície."
        },
        {
          "type": "default",
          "description": "Escolha um ou mais dos tipos de criaturas seguintes: celestiais, corruptores, elementais, fadas ou mortos-vivos. O círculo afeta uma criatura do tipo escolhido das seguintes maneiras:"
        },
        {
          "type": "list",
          "items": [
            "A criatura não consegue entrar no cilindro voluntariamente por meios não-mágicos. Se a criatura tentar usar teletransporte ou viagem interplanar para fazê-lo, ela deve, primeiro, ser bem sucedida num teste de resistência de Carisma.",
            "A criatura tem desvantagem nas jogadas de ataque contra alvos dentro do cilindro.",
            "Alvos dentro do cilindro não podem ser enfeitiçados, amedrontados ou possuídos pela criatura."
          ]
        },
        {
          "type": "default",
          "description": "Quando você conjurar essa magia, você pode decidir que a mágica dela opere na direção reversa, prevenindo que uma criatura de um tipo especifico saia do cilindro e protegendo os alvos fora dele."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a duração aumenta em 1 hora para cada nível do espaço acima do 3°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "160"
    }
  },
  {
    "name": "Clarividência",
    "originalName": "Clairvoyance",
    "level": 3,
    "school": "adivinhação",
    "type": "3º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": 0,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um chifre cravejado de joias para ouvir ou um olho de vidro para ver",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria um sensor invisível, dentro do alcance, em um local familiar a você (um local que você tenha visitado ou visto antes) ou em um local obvio que não seja familiar a você (como atrás de uma porta, ao redor de um canto ou em um bosque de árvores). O sensor se mantém no local pela duração e não pode ser atacado ou manipulado de outra forma."
        },
        {
          "type": "default",
          "description": "Quando você conjurar essa magia, escolhe visão ou audição. Você pode escolher sentir através do sensor como se você estivesse no espaço dele. Com sua ação, você pode trocar entre visão e audição."
        },
        {
          "type": "default",
          "description": "Uma criatura que puder ver o sensor (como uma criatura beneficiada por ver o invisível ou visão verdadeira) vê um globo luminoso e intangível do tamanho do seu olho."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "124"
    }
  },
  {
    "name": "Coluna De Chamas",
    "originalName": "Flame Strike",
    "level": 5,
    "school": "evocação",
    "type": "5º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "juramento da devoção",
      "o corruptor"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pitada de enxofre",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma coluna vertical de fogo divino emerge de baixo para os céus, no local que você especificar. Cada criatura num cilindro de 3 metros de raio [10-foot radius] por 12 metros de altura [40-foot-high], centrado num ponto dentro do alcance, deve realizar um teste de resistência de Destreza. Uma criatura sofre 4d6 de dano de fogo e 4d6 de dano radiante se falhar na resistência, ou metade desse dano se obtiver sucesso."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano de fogo ou o dano radiante (à sua escolha) aumenta em 1d6 por nível do espaço acima do 5°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "145"
    }
  },
  {
    "name": "Comando",
    "originalName": "Command",
    "level": 1,
    "school": "encantamento",
    "type": "1º nível de encantamento",
    "isRitual": false,
    "classes": [
      "clérigo",
      "paladino",
      "o corruptor"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "rodadas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você pronuncia uma palavra de comando para uma criatura que você possa ver dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou seguirá seu comando no próximo turno dele. A magia não tem efeito se o alvo for um morto-vivo, se ele não entender seu idioma ou se o comando for diretamente nocivo a ele."
        },
        {
          "type": "default",
          "description": "Alguns comandos típicos e seus efeitos a seguir. Você pode proferir um comando diferente dos descritos aqui. Se o fizer, o Mestre descreve como o alvo reage. Se o alvo não puder cumprir o comando, a magia termina."
        },
        {
          "type": "option",
          "value": "Aproxime-se",
          "description": "Aproxime-se. O alvo se move para próximo de você o máximo que puder na rota mais direta, terminando seu turno, se ele se mover a até 1,5 metro [5 feet] de você."
        },
        {
          "type": "option",
          "value": "Largue",
          "description": "Largue. O alvo larga o que quer que ele esteja segurando, e termina seu turno."
        },
        {
          "type": "option",
          "value": "Fuja",
          "description": "Fuja. O alvo gasta seu turno se movendo para longe de você da forma mais rápida que puder."
        },
        {
          "type": "option",
          "value": "Deite-se",
          "description": "Deite-se. O alvo deita-se no chão e então, termina seu turno."
        },
        {
          "type": "option",
          "value": "Parado",
          "description": "Parado. O alvo não se move e não realiza nenhuma ação. Uma criatura voadora continua no alto, considerando que ela seja capaz de fazê-lo. Se ela tiver que se mover para continuar no alto, ela voa a mínima distância necessária para permanecer no ar."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°. As criaturas devem estar a 9 metros [30 feet] entre si para serem afetadas."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "125"
    }
  },
  {
    "name": "Compreender Idiomas",
    "originalName": "Comprehend Languages",
    "level": 1,
    "school": "adivinhação",
    "type": "1º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pitada de fuligem e sal",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Pela duração, você compreende o significado literal de qualquer idioma falado que você ouvir. Você também compreende qualquer idioma escrito que vir, mas você deve tocar a superfície onde as palavras estão escritas. Leva, aproximadamente, 1 minuto para ler uma página de texto."
        },
        {
          "type": "default",
          "description": "Essa magia não decifra mensagens secretas em textos ou glifos, como um selo arcano, que não seja parte de um idioma escrito."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "126"
    }
  },
  {
    "name": "Compulsão",
    "originalName": "Compulsion",
    "level": 4,
    "school": "encantamento",
    "type": "4º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Criaturas à sua escolha que você puder ver dentro do alcance e que puderem ouvir você, devem realizar um teste de resistência de Sabedoria. Um alvo passa automaticamente nesse teste de resistência se ele não puder ser enfeitiçado. Se falhar no teste, um alvo é afetado por essa magia. Até a magia acabar, você pode usar uma ação bônus em cada um dos seus turnos, para designar uma direção horizontal a você. Cada criatura afetada deve se mover, da melhor forma possível, para essa direção no próximo turno dela. Ela pode realizar sua ação antes de se mover. Depois de se mover dessa forma, ela pode realizar outra resistência de Sabedoria para tentar acabar com o efeito."
        },
        {
          "type": "default",
          "description": "Um alvo não é obrigado a se mover em direção de um perigo obviamente mortal, como uma fogueira ou abismo, mas ele vai provocar ataques de oportunidade por se mover na direção designada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "126"
    }
  },
  {
    "name": "Comunhão",
    "originalName": "Commune",
    "level": 5,
    "school": "adivinhação",
    "type": "5º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "clérigo",
      "juramento da devoção"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "incenso e um frasco de água benta ou profana",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você contata sua divindade ou um representante divino e faz até três perguntas que podem ser respondidas com um sim ou não. Você deve fazer suas perguntas antes da magia terminar. Você recebe uma resposta correta para cada pergunta."
        },
        {
          "type": "default",
          "description": "Seres divinos não são necessariamente oniscientes, portanto, você pode receber “incerto” como uma resposta se uma pergunta que diga respeito a uma informação além do conhecimento da divindade. Em caso de uma resposta de única palavra puder levar ao engano ou contrariar os interesses da divindade, o Mestre pode oferecer uma frase curta como resposta, no lugar."
        },
        {
          "type": "default",
          "description": "Se você conjurar essa magia duas ou mais vezes antes de terminar um descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "126"
    }
  },
  {
    "name": "Comunhão Com A Natureza",
    "originalName": "Commune With Nature",
    "level": 5,
    "school": "adivinhação",
    "type": "5º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você, momentaneamente, se torna uno com a natureza e ganha conhecimento do território ao seu redor. Ao ar livre, a magia lhe oferece conhecimento do terreno a até 4,5 quilômetros [3 miles] de você. Em cavernas e outros formações subterrâneas naturais, o raio é limitado a 150 metros [300 feet]. A magia não funciona onde a natureza foi substituída por construções, como em masmorras ou cidades."
        },
        {
          "type": "default",
          "description": "Você, instantaneamente, adquire conhecimento de até três fatos, à sua escolha, sobre qualquer dos assuntos a seguir, relacionados a área:"
        },
        {
          "type": "list",
          "items": [
            "Terrenos e corpos de água",
            "Plantas, minérios, animais e povo predominante",
            "Celestiais, fadas, corruptores, elementais ou mortos-vivos mais poderosos",
            "Influência de outros planos de existência",
            "Construções"
          ]
        },
        {
          "type": "default",
          "description": "Por exemplo, você poderia determinar a localização de um morto-vivo poderoso na área, a localização da maior fonte de água potável e a localização de quaisquer cidades próximas."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "126"
    }
  },
  {
    "name": "Cone De Frio",
    "originalName": "Cone Of Cold",
    "level": 5,
    "school": "evocação",
    "type": "5º nível de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago",
      "círculo da terra (ártico)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pequeno cristal ou cone de vidro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma explosão de ar frio irrompe de suas mãos. Cada criatura em um cone de 18 metros [60 pés] deve fazer um teste de resistência da Constituição. Uma criatura recebe 8d8 de dano de frio em um teste falhado, ou metade do dano em um bem sucedido."
        },
        {
          "type": "default",
          "description": "Uma criatura morta por essa magia se torna uma estátua congelada até derreter."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 5°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "127"
    }
  },
  {
    "name": "Confusão",
    "originalName": "Confusion",
    "level": 4,
    "school": "encantamento",
    "type": "4º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "três cascas de noz",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia ataca e embaralha as mentes das criaturas, gerando delírios e provocando ações descontroladas. Cada criatura em uma esfera com 3 metros de raio [10-foot radius], centrada num ponto, à sua escolha, dentro do alcance, deve ser bem sucedida num teste de resistência de Sabedoria, quando você conjurar essa magia ou for afetada por ela. Um alvo afetado não pode realizar reações e deve rolar um d10 no início de cada um dos seus turnos para determinar seu comportamento nesse turno."
        },
        {
          "type": "table",
          "caption": null,
          "header": [
            "D10",
            "Comportamento"
          ],
          "content": [
            [
              "1",
              "A criatura usa todo seu deslocamento para se mover em uma direção aleatória. Para determinar a direção, role um d8 e atribua uma direção a cada face do dado. A criatura não realiza uma ação nesse turno."
            ],
            [
              "2—6",
              "A criatura não se move ou realiza ações nesse turno."
            ],
            [
              "7—8",
              "A criatura usa sua ação para realizar um ataque corpo-a-corpo contra uma criatura, determinada aleatoriamente, ao seu alcance. Se não houver criaturas dentro do alcance, a criatura não faz nada nesse turno."
            ],
            [
              "9—10",
              "A criatura pode agir e se mover normalmente."
            ]
          ]
        },
        {
          "type": "default",
          "description": "Ao final de cada um dos seus turnos, um alvo afetado pode realizar um teste de resistência de Sabedoria. Se for bem sucedido, esse efeito acaba nesse alvo."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o raio da esfera aumenta em 1,5 metro [5 feet] para cada nível do espaço acima do 4°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "127"
    }
  },
  {
    "name": "Conhecimento Lendário",
    "originalName": "Legend Lore",
    "level": 5,
    "school": "adivinhação",
    "type": "5º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "mago"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "incenso, quatro tiras de marfim",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Nomeie ou descreva uma pessoa, lugar ou objeto. A magia traz à sua mente um breve resumo do conhecimento significativo sobre a coisa que você nomeou. O conhecimento pode consistir de contos atuais, histórias esquecidas, ou até conhecimentos secretos que nunca foram amplamente conhecidos. Se a coisa que você nomeou não é de importância lendária, você não recebe nenhuma informação. Quanto mais informação você já tem sobre a coisa, mais precisa e detalhada é a informação recebida."
        },
        {
          "type": "default",
          "description": "As informações que você aprende são precisas, mas podem ser apresentadas em linguagem figurada. Por exemplo, se você tem um machado mágico misterioso em mãos, a magia pode oferecer a informação: \"Ai do malfeitor cuja mão toca o machado, pois até o punho corta a mão dos malignos. Somente um verdadeiro Filho de Pedra, amante e amado de Moradin, pode despertar os verdadeiros poderes do machado, e somente com a palavra sagrada Rudnogg nos lábios.\""
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "158"
    }
  },
  {
    "name": "Conjurar Animais",
    "originalName": "Conjure Animals",
    "level": 3,
    "school": "conjuração",
    "type": "3º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você convoca espíritos feéricos que assumem a forma de bestas e aparecem em espaços desocupados que você pode ver dentro do alcance. Escolha uma das seguintes opções para o que aparece:"
        },
        {
          "type": "list",
          "items": [
            "Uma besta de nível de desafio 2 ou inferior.",
            "Duas bestas de nível de desafio 1 ou inferior.",
            "Quatro bestas de nível de desafio 1/2 ou inferior.",
            "Oito bestas de nível de desafio 1/4 ou inferior."
          ]
        },
        {
          "type": "default",
          "description": "Cada besta é também considerada uma fada e desaparece quando cair a 0 pontos de vida ou quando a magia acabar."
        },
        {
          "type": "default",
          "description": "As criaturas invocadas são amigáveis a você e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu próprio turno. Eles obedecem a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a elas, elas se defenderão de criaturas hostis, mas no mais, não realizarão nenhuma ação."
        },
        {
          "type": "default",
          "description": "O Mestre possui as estatísticas das criaturas."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 5° nível, o triplo delas com um espaço de 7° nível e o quadruplo delas com um espaço de 9° nível."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "127"
    }
  },
  {
    "name": "Conjurar Celestial",
    "originalName": "Conjure Celestial",
    "level": 7,
    "school": "conjuração",
    "type": "7º nível de conjuração",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você invoca um celestial de nível de desafio 4 ou inferior, que aparece num espaço desocupado, que você possa ver dentro do alcance. O celestial desaparece se cair a 0 pontos de vida ou quando a magia acabar."
        },
        {
          "type": "default",
          "description": "O celestial é amigável a você e a seus companheiros pela duração. Role a iniciativa para o celestial, que age no seu próprio turno. Ele obedece a quaisquer comandos verbais que você emitir (não requer uma ação sua), contanto que não violem sua tendência. Se você não emitir nenhum comando a ele, ele se defenderá de criaturas hostis, mas no mais, não realizará nenhuma ação."
        },
        {
          "type": "default",
          "description": "O Mestre possui as estatísticas do celestial."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 9° nível, você invoca um celestial de nível de desafio 5 ou inferior."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "127"
    }
  },
  {
    "name": "Conjurar Elementais Menores",
    "originalName": "Conjure Minor Elementals",
    "level": 4,
    "school": "conjuração",
    "type": "4º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você invoca elementais que aparecem em espaços desocupados, que você possa ver dentro do alcance. Você escolhe uma das opções a seguir para aparecer:"
        },
        {
          "type": "list",
          "items": [
            "Um elemental de nível de desafio 2 ou inferior.",
            "Dois elementais de nível de desafio 1 ou inferior.",
            "Quatro elementais de nível de desafio 1/2 ou inferior.",
            "Oito elementais de nível de desafio 1/4 ou inferior."
          ]
        },
        {
          "type": "default",
          "description": "Um elemental invocado através dessa magia desaparece quando cair a 0 pontos de vida ou quando a magia acabar."
        },
        {
          "type": "default",
          "description": "As criaturas invocadas são amigáveis a você e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu próprio turno. Eles obedecem a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a elas, elas se defenderão de criaturas hostis, mas no mais, não realizarão nenhuma ação."
        },
        {
          "type": "default",
          "description": "O Mestre possui as estatísticas das criaturas."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 6° nível e o triplo delas com um espaço de 8° nível."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "128"
    }
  },
  {
    "name": "Conjurar Elemental",
    "originalName": "Conjure Elemental",
    "level": 5,
    "school": "conjuração",
    "type": "5º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um incenso aceso para ar, argila macia para terra, enxofre e fósforo para fogo, ou água e areia para água",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você invoca um servo elemental. Escolha uma área de ar, água, fogo ou terra que preencha 3 metros cúbicos [10-foot cube] dentro do alcance. Um elemental de nível de desafio 5 ou inferior, adequado a área que você escolheu, aparece em um espaço desocupado a até 3 metros [10 feet] dela. Por exemplo, um elemental do fogo emerge de uma fogueira e um elemental da terra erguer-se-ia do solo. O elemental desaparece quando cair a 0 pontos de vida ou quando a magia acabar."
        },
        {
          "type": "default",
          "description": "O elemental é amigável a você e a seus companheiros pela duração. Role a iniciativa para o elemental, que age no seu próprio turno. Ele obedece a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a ele, ele se defenderá de criaturas hostis, mas no mais, não realizará nenhuma ação."
        },
        {
          "type": "default",
          "description": "Se sua concentração for interrompida, o elemental não desaparece. Ao invés disso, você perde o controle sobre o elemental e ele se torna hostil a você e aos seus companheiros, e os pode atacar. Um elemental fora de controle não pode ser dispensado e desaparece 1 hora depois de você ter o invocado."
        },
        {
          "type": "default",
          "description": "O mestre tem as estatísticas do elemental."
        },
        {
          "type": "default",
          "description": "Em Leveis Superiores. Quando você conjura esta magia usando um espaço de magia de 6° nível ou superior, o nível de desafio aumenta em 1 para cada nível do slot acima do 5°."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "128"
    }
  },
  {
    "name": "Conjurar Fada",
    "originalName": "Conjure Fey",
    "level": 6,
    "school": "conjuração",
    "type": "6º nível de conjuração",
    "isRitual": false,
    "classes": [
      "bruxo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você invoca uma criatura feérica de nível de desafio 6 ou inferior ou um espírito feérico que assume a forma de uma besta de nível de desafio 6 ou inferior. Ela aparece num espaço desocupado que você possa ver dentro do alcance. A criatura feérica desaparece se cair a 0 pontos de vida ou quando a magia acabar."
        },
        {
          "type": "default",
          "description": "A criatura feérica é amigável a você e a seus companheiros pela duração. Role a iniciativa para a criatura, que age no seu próprio turno. Ela obedece a quaisquer comandos verbais que você emitir (não requer uma ação sua), contanto que não violem sua tendência. Se você não emitir nenhum comando a ela, ela se defenderá de criaturas hostis, mas no mais, não realizará nenhuma ação."
        },
        {
          "type": "default",
          "description": "Se sua concentração for interrompida, a criatura feérica não desaparece. Ao invés disso, você perde o controle sobre a criatura feérica e ela se torna hostil a você e aos seus companheiros, e poderá atacar. Uma criatura feérica fora de controle não pode ser dispensada por você, ela desaparece 1 hora depois de você ter a invocada."
        },
        {
          "type": "default",
          "description": "O Mestre possui as estatísticas da criatura feérica."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o nível de desafio aumenta em 1 para cada nível do espaço acima do 6°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "128"
    }
  },
  {
    "name": "Conjurar Seres Da Floresta",
    "originalName": "Conjure Woodland Beings",
    "level": 4,
    "school": "conjuração",
    "type": "4º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um fruto sagrado por criatura invocada",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você invoca criaturas feéricas que aparecem em espaços desocupados, que você possa ver dentro do alcance. Escolha uma das opções a seguir para aparecer:"
        },
        {
          "type": "list",
          "items": [
            "Uma criatura feérica de nível de desafio 2 ou inferior",
            "Duas criaturas feéricas de nível de desafio 1 ou inferior",
            "Quatro criaturas feéricas de nível de desafio 1/2 ou inferior",
            "Oito criaturas feéricas de nível de desafio 1/4 ou inferior"
          ]
        },
        {
          "type": "default",
          "description": "Uma criatura invocado desaparece quando cair a 0 pontos de vida ou quando a magia acabar."
        },
        {
          "type": "default",
          "description": "As criaturas invocadas são amigáveis a você e a seus companheiros. Role a iniciativa para as criaturas invocadas como um grupo, que age no seu próprio turno. Eles obedecem a quaisquer comandos verbais que você emitir (não requer uma ação sua). Se você não emitir nenhum comando a elas, elas se defenderão de criaturas hostis, mas no mais, não realizarão nenhuma ação."
        },
        {
          "type": "default",
          "description": "O Mestre possui as estatísticas das criaturas."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando certos espaços de magia superiores, você escolhe uma das opções de invocação acima e mais criaturas aparecem: o dobro delas com um espaço de 6° nível e o triplo delas com um espaço de 8° nível."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "129"
    }
  },
  {
    "name": "Consagrar",
    "originalName": "Hallow",
    "level": 5,
    "school": "evocação",
    "type": "5º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "o corruptor"
    ],
    "casting": {
      "time": 24,
      "unit": "horas"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "ervas, óleos e incenso",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca um ponto e infunde uma área ao redor com poder sagrado (ou profano). A área pode ter até 18 metros [60 feet] de raio e a magia falha se o raio incluir uma área já sob efeito da magia consagrar. A área afetada está sujeita aos seguintes efeitos."
        },
        {
          "type": "default",
          "description": "Primeiro, celestiais, corruptores, elementais, fadas e mortos-vivos não conseguem entrar na área, nem, tais criaturas, podem enfeitiçar, amedrontar ou possuir criaturas dentro da área. Qualquer criatura enfeitiçada, amedrontada ou possuída por uma criatura dessas, não estará mais enfeitiçada, amedrontada ou possuída ao adentrar a área. Você pode excluir um ou mais desses tipos de criaturas desse efeito."
        },
        {
          "type": "default",
          "description": "Segundo, você pode vincular um efeito extra a área. Escolha o efeito da lista a seguir, ou escolha um efeito oferecido pelo Mestre. Alguns desses efeitos se aplicam a criaturas na área; você pode definir seu o efeito se aplica a todas as criaturas, criaturas que seguem uma divindade ou líder especifico ou criaturas de uma espécie especifica, como orcs ou trolls. Quando uma criatura que seria afetada entrar na área da magia pela primeira vez em um turno, ou começar seu turno nela, ela pode fazer um teste de resistência de Carisma. Se obtiver sucesso, a criatura ignora o efeito extra até sair da área."
        },
        {
          "type": "option",
          "value": "Coragem",
          "description": "Coragem. As criaturas afetadas não podem ser amedrontadas enquanto estiverem na área."
        },
        {
          "type": "option",
          "value": "Descanso Eterno",
          "description": "Descanso Eterno. Cadáveres enterrados na área não podem ser transformados em mortos-vivos."
        },
        {
          "type": "option",
          "value": "Escuridão",
          "description": "Escuridão. Escuridão preenche a área. Luz normal, assim como luz mágica criada por magias de nível inferior ao nível do espaço usado para conjurar essa magia, não podem iluminar a área."
        },
        {
          "type": "option",
          "value": "Idiomas",
          "description": "Idiomas. As criaturas afetadas podem se comunicar com qualquer outra criatura na área, mesmo que elas não partilhem um idioma em comum."
        },
        {
          "type": "option",
          "value": "Interferência extra-dimensional",
          "description": "Interferência extra-dimensional. As criaturas afetadas não podem se mover ou viajar usando teletransporte ou por meios extradimensionais ou interplanares."
        },
        {
          "type": "option",
          "value": "Luz do Dia",
          "description": "Luz do Dia. Luz plena preenche a área. Escuridão mágica criada por magias de nível inferior ao nível do espaço usado para conjurar essa magia, não podem extinguir a luz."
        },
        {
          "type": "option",
          "value": "Medo",
          "description": "Medo. As criaturas afetadas ficam amedrontadas enquanto estiverem na área."
        },
        {
          "type": "option",
          "value": "Proteção contra Energia",
          "description": "Proteção contra Energia. As criaturas afetadas na área tem resistência a um tipo de dano, à sua escolha, exceto de concussão, cortante ou perfurante."
        },
        {
          "type": "option",
          "value": "Silêncio",
          "description": "Silêncio. Nenhum som pode ser emitido de dentro da área e nenhum som pode adentra-la."
        },
        {
          "type": "option",
          "value": "Vulnerabilidade à Energia",
          "description": "Vulnerabilidade à Energia. As criaturas afetadas na área tem vulnerabilidade a um tipo de dano, à sua escolha, exceto de concussão, cortante ou perfurante."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "152"
    }
  },
  {
    "name": "Consertar",
    "originalName": "Mending",
    "level": 0,
    "school": "transmutação",
    "type": "truque de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "dois ímãs",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia repara um única quebra ou fissura em um objeto que você tocar, como um elo quebrado de uma corrente, duas metades de uma chave partida, um manto rasgado ou o vazamento em um odre. Contanto que a quebra ou fissura não tenha mais de 30 centímetros [1 foot] em qualquer dimensão, você pode remenda-la, não deixando qualquer vestígio do dano anterior."
        },
        {
          "type": "default",
          "description": "Essa magia pode reparar fisicamente um item mágico ou constructo, mas a magia não irá restaurar a magia em tais objetos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "164"
    }
  },
  {
    "name": "Constrição",
    "originalName": "Entangle",
    "level": 1,
    "school": "conjuração",
    "type": "1º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Ervas e vinhas poderosas brotam do solo num quadrado de 6 metros [20-foot square] a partir de um ponto dentro do alcance. Pela duração, essas plantas transformam o solo na área em terreno difícil."
        },
        {
          "type": "default",
          "description": "Uma criatura na área quando você conjurar a magia deve ser bem sucedida num teste de resistência de Força ou ficará impedida pelo emaranhado de plantas, até a magia acabar. Uma criatura impedida pelas plantas pode usar sua ação para realizar um teste de Força, contra a CD da magia. Se for bem sucedido, irá se libertar."
        },
        {
          "type": "default",
          "description": "Quando a magia termina, as plantas conjuradas murcharão."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "140"
    }
  },
  {
    "name": "Contato Extraplanar",
    "originalName": "Contact Other Plane",
    "level": 5,
    "school": "adivinhação",
    "type": "5º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "bruxo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você contata mentalmente um semideus, o espírito de um sábio morto há muito tempo ou alguma outra entidade misteriosa de outro plano. Contatar esse extraplanar inteligente pode distorcer ou até mesmo arruinar com sua mente. Quando você conjurar essa magia, faça um teste de resistência de Inteligência CD 15. Se falhar, você sofre 6d6 de dano psíquico e fica insano até terminar um descanso longo. Enquanto estiver insano, você não pode realizar ações, não entende o que as outras criaturas dizem, não pode ler e fala apenas coisas sem sentido. Conjurar a magia restauração maior em você acaba com esse efeito."
        },
        {
          "type": "default",
          "description": "Se obtiver sucesso no teste de resistência, você pode fazer até cinco perguntas à entidade. Você deve fazer suas perguntas antes da magia acabar. O Mestre responde cada pergunta com uma única palavra, como “sim”, “não”, “talvez”, “nunca”, “irrelevante” ou “incerto” (se a entidade não souber a resposta para a pergunta). Em caso de uma resposta de única palavra puder levar ao engano, o Mestre pode, ao invés disso, oferecer uma frase curta como resposta."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "129"
    }
  },
  {
    "name": "Contingência",
    "originalName": "Contingency",
    "level": 6,
    "school": "evocação",
    "type": "6º nível de evocação",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma estátua sua esculpida em marfim e decorada com gemas",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "dias",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha uma magia de 5° nível ou inferior que você possa conjurar, que tenha um tempo de conjuração de 1 ação e que possa ter você como alvo. Você conjura essa magia – chamada de magia contingente – como parte da conjuração de contingência, gastando espaços de magia para ambas, mas a magia contingente não tem efeito imediato. Ao invés disso, ela se ativa quando uma certa circunstância ocorre. Você descreve a circunstância quando conjura as duas magias. Por exemplo, uma contingência conjurada com respirar na água pode estipular que respirar na água se ative quando você estiver imerso em água ou um líquido similar."
        },
        {
          "type": "default",
          "description": "A magia contingente se ativa imediatamente depois da circunstância ser satisfeita pela primeira vez, quer você queira, quer não, e a contingência termina. A magia contingente afeta apenas você, mesmo que ela normalmente possa afetar outros alvos. Você pode ter apenas uma contingência ativa por vez. Se você conjurar essa magia novamente, o efeito da outra magia contingência termina. Além disso, a contingência também termina em você se os componentes materiais dela não estiverem mais com você."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "130"
    }
  },
  {
    "name": "Contramágica",
    "originalName": "Counterspell",
    "level": 3,
    "school": "abjuração",
    "type": "3º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "reação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": false,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você tenta interromper uma criatura no processo de conjuração de uma magia. Se a criatura estiver conjurando uma magia de 3° nível ou inferior, a magia falha e não gera nenhum efeito. Se ela estiver conjurando uma magia de 4° nível ou superior, faça um teste de habilidade usando sua habilidade de conjuração. A CD é igual a 10 + o nível da magia. Caso seja bem sucedido, a magia da criatura falha e não gera nenhum efeito."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a magia interrompida não vai gerar efeito se o nível dela for menor ou igual ao nível do espaço de magia que você usar."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "131"
    }
  },
  {
    "name": "Controlar A Água",
    "originalName": "Control Water",
    "level": 4,
    "school": "transmutação",
    "type": "4º nível de transmutação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 91,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma gota de água e uma pitada de poeira",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Até o fim da magia, você controla qualquer corpo de água dentro da área que você escolher, que é um cubo de 30 metros [100 feet] quadrados. Você pode escolher dentre quaisquer dos efeitos seguintes, quando você conjurar essa magia. Com uma ação no seu turno, você pode repetir o mesmo efeito ou escolher um diferente."
        },
        {
          "type": "option",
          "value": "Inundação",
          "description": "Inundação. Você faz com que o nível da água de toda área afetada suba até 6 metros [20 feet]. Se a área incluir uma margem, a inundação ira transbordar para a terra seca."
        },
        {
          "type": "default",
          "description": "Se você escolher uma área em um extenso corpo de água, ao invés disso, você cria uma onda com 6 metros de altura [20-foot-tall] que irá de um lado ao outro da área e então desaba. Qualquer veículo Enorme ou menor no caminho da onda será carregado por ela até o outro lado. Qualquer veículo Enorme ou menor atingido pela onda tem uma chance de 25 por cento de emborcar."
        },
        {
          "type": "default",
          "description": "O nível da água se mantém elevado até a magia acabar ou você escolher um efeito diferente. Se esse efeito produzir uma onda, a onda se repete no início do seu próximo turno enquanto o efeito de inundação durar."
        },
        {
          "type": "option",
          "value": "Dividir Água",
          "description": "Dividir Água. Você faz com que a água na área se divida e crie uma trincheira. A trincheira se estende por toda área da magia e a água separada forma uma parede de cada lado. A trincheira permanece até a magia acabar ou você escolher um efeito diferente. A água, então, lentamente preenche a trincheira ao longo do curso da próxima rodada até o nível normal da água ser restaurado."
        },
        {
          "type": "option",
          "value": "Redirecionar Fluxo",
          "description": "Redirecionar Fluxo. Você faz com que o fluxo da água na área se mova na direção que você escolher, mesmo que a água tenha que fluir através de obstáculos, subir muros ou em outra direção improvável. A água na área se move na direção ordenada, mas uma vez que tenha se movido além da área da magia, ela conclui seu fluxo baseado nas condições do terreno. A água continua a se mover na direção que você escolheu até a magia acabar ou você escolher um efeito diferente."
        },
        {
          "type": "option",
          "value": "Redemoinho",
          "description": "Redemoinho. Esse efeito requer um corpo de água de, pelo menos, 15 metros [50 feet] quadrados [50 feet square] e 7,5 metros [25 feet] de profundidade. Você faz com que um redemoinho se forme no centro da área. O redemoinho forma um vórtice com 1,5 metro [5 feet] de largura na base, chegando a 15 metros [50 feet] [50 feet] de largura no topo e 7,5 metros [25 feet] de altura. Qualquer criatura ou objeto na água a até 7,5 metros [25 feet] do vórtice é puxado 3 metros [10 feet] na direção dele. Uma criatura pode tentar nadar para longe do vórtice com um teste de Força (Atletismo) contra a CD da magia."
        },
        {
          "type": "default",
          "description": "Quando uma criatura entrar no vórtice pela primeira vez no turno dela ou começar seu turno dentro dele, ela deve realizar um teste de resistência de Força. Se falhar, a criatura sofre 2d8 de dano de concussão e estará presa no vórtice até a magia acabar. Se passar na resistência, a criatura sofre metade do dano e não estará presa no vórtice. Uma criatura presa no vórtice pode usar sua ação para tentar nadar para fora do vórtice como descrito acima, mas terá desvantagem no teste de Força (Atletismo) para fazer isso."
        },
        {
          "type": "default",
          "description": "A primeira vez a cada turno que um objeto entrar no vórtice, o objeto sofre 2d8 de dano de concussão; esse dano se repete a cada rodada que ele permanecer no vórtice."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "130"
    }
  },
  {
    "name": "Controlar O Clima",
    "originalName": "Control Weather",
    "level": 8,
    "school": "transmutação",
    "type": "8º nível de transmutação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida",
      "mago"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "incenso aceso e pedaços de terra e madeira misturados em água",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toma controle do clima numa área de 7,5 quilômetros [5 miles] de você pela duração. Você deve estar ao ar livre para conjurar essa magia. Se mover para um lugar onde você não tenha uma visão clara do céu termina a magia prematuramente."
        },
        {
          "type": "default",
          "description": "Quando você conjurar essa magia, você muda as condições climáticas atuais, que são determinadas pelo Mestre baseado no ambiente e estação. Você pode mudar a precipitação, temperatura e vento. Leva 1d4 x 10 minutos para as novas condições fazerem efeito. Quando a magia terminar, o clima, gradualmente, volta ao normal."
        },
        {
          "type": "default",
          "description": "Quando você altera as condições climáticas, encontre a condição atual nas tabelas a seguir e mude em um estágio, para cima ou para baixo. Quando mudar o vento, você pode mudar a direção do mesmo."
        },
        {
          "type": "table",
          "caption": "Precipitação",
          "header": [
            "Estágio",
            "Condição"
          ],
          "content": [
            [
              "1",
              "Céu claro"
            ],
            [
              "2",
              "Parcialmente encoberto"
            ],
            [
              "3",
              "Céu escuro ou nublado"
            ],
            [
              "4",
              "Chuva, granizo ou neve"
            ],
            [
              "5",
              "Chuva torrencial, tempestade de granizo ou nevasca"
            ]
          ]
        },
        {
          "type": "table",
          "caption": "Temperatura",
          "header": [
            "Estágio",
            "Condição"
          ],
          "content": [
            [
              "1",
              "Calor insuportável"
            ],
            [
              "2",
              "Quente"
            ],
            [
              "3",
              "Morno"
            ],
            [
              "4",
              "Frio"
            ],
            [
              "5",
              "Gelado"
            ],
            [
              "6",
              "Frio ártico"
            ]
          ]
        },
        {
          "type": "table",
          "caption": "Vento",
          "header": [
            "Estágio",
            "Condição"
          ],
          "content": [
            [
              "1",
              "Calmo"
            ],
            [
              "2",
              "Vento moderado"
            ],
            [
              "3",
              "Vento forte"
            ],
            [
              "4",
              "Ventania"
            ],
            [
              "5",
              "Temporal"
            ]
          ]
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "131"
    }
  },
  {
    "name": "Convocar Familiar",
    "originalName": "Find Familiar",
    "level": 1,
    "school": "conjuração",
    "type": "1º nível de conjuração",
    "isRitual": true,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "horas"
    },
    "range": {
      "value": 3,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "carvão, incenso e ervas",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você adquire os serviços de uma familiar, um espírito que toma a forma de um animal, à sua escolha: aranha, caranguejo, cavalo marinho, coruja, corvo, doninha, gato, falcão, lagarto, morcego, peixe (arenque), polvo, rato, rã (sapo) ou serpente venenosa. Aparecendo em um espaço desocupado dentro do alcance, o familiar tem as mesmas estatísticas da forma escolhida, no entanto, ele é um celestial, corruptor ou fada (à sua escolha) ao invés de uma besta."
        },
        {
          "type": "default",
          "description": "Seu familiar age independentemente de você, mas ele sempre obedece aos seus comandos. Em combate, ele rola sua a própria iniciativa e age no seu próprio turno. Um familiar não pode atacar, mas ele pode realizar outras ações, como de costume."
        },
        {
          "type": "default",
          "description": "Quando um familiar cai a 0 pontos de vida, ele desaparece, não deixando qualquer corpo físico para trás. Ele reaparece depois de você conjurar essa magia novamente."
        },
        {
          "type": "default",
          "description": "Enquanto seu familiar estiver a até 30 metros [100 feet] de você, você pode se comunicar telepaticamente com ele. Além disso, com uma ação, você pode ver através dos olhos do familiar e ouvir através dos ouvidos dele, até o início do seu próximo turno, adquirindo os benefícios de qualquer sentido especial que o familiar possua. Durante esse período, você estará cego e surdo em relação aos seus próprios sentidos."
        },
        {
          "type": "default",
          "description": "Com uma ação, você pode, temporariamente, dispensar seu familiar. Ele desaparece dentro de uma bolsa dimensional onde ele aguarda sua convocação. Alternativamente, você pode dispensa-lo para sempre. Com uma ação, enquanto ele estiver temporariamente dispensado, você pode fazê-lo reaparecer em qualquer espaço desocupado a até 9 metros [30 feet] de você."
        },
        {
          "type": "default",
          "description": "Você não pode ter mais de um familiar por vez. Se você conjurar essa magia enquanto já tiver um familiar, ao invés disso, você faz seu familiar existente adotar uma nova forma. Escolha uma das formas da lista acima. Seu familiar se transforma na criatura escolhida."
        },
        {
          "type": "default",
          "description": "Finalmente, quando você conjura uma magia com alcance de toque, seu familiar pode transmitir a magia, como se ele tivesse conjurado ela. Seu familiar precisa estar a até 30 metros [100 feet] de você e deve usar a reação dele para transmitir a magia quando você a conjurar. Se a magia necessitar de uma jogada de ataque, você usa seu modificador de ataque para essa jogada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "143"
    }
  },
  {
    "name": "Convocar Montaria",
    "originalName": "Find Steed",
    "level": 2,
    "school": "conjuração",
    "type": "2º nível de conjuração",
    "isRitual": false,
    "classes": [
      "paladino"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você convoca um espírito que assume a forma de uma montaria excepcionalmente inteligente, forte e leal, criando uma ligação duradoura com ela. Aparecendo em um espaço desocupado dentro do alcance, a montaria adquire a forma que você escolher, como um cavalo de guerra, um pônei, um camelo, um alce ou um mastim. (Seu Mestre pode permitir outros animais para serem convocados como montarias.) A montaria tem as estatísticas da forma escolhida, no entanto, ele é um celestial, corruptor ou fada (à sua escolha) ao invés do seu tipo normal. Além disso, se sua montaria tiver Inteligência 5 ou menor, a Inteligência dela se torna 6 e ela ganha a capacidade de compreender um idioma, à sua escolha, que você fala."
        },
        {
          "type": "default",
          "description": "Sua montaria serve tanto para cavalgar quando para o combate e você tem uma ligação instintiva com ela que permite a vocês lutarem como uma unidade singular. Enquanto estiver montado na sua montaria, você pode fazer com que qualquer magia que você conjure que tenha alcance pessoal, também afete a sua montaria."
        },
        {
          "type": "default",
          "description": "Quando a montaria cair a 0 pontos de vida, ela desaparece, não deixando qualquer corpo físico para trás. Você também pode dispensar sua montaria a qualquer momento, com uma ação, fazendo-a desaparecer. Em ambos os casos, conjurar essa magia novamente convocará a mesma montaria, restaurando-a ao seu máximo de pontos de vida."
        },
        {
          "type": "default",
          "description": "Enquanto sua montaria estiver a até 1,5 quilômetro [1 mile] de você, você pode se comunicar telepaticamente com ela."
        },
        {
          "type": "default",
          "description": "Você não pode ter mais de uma montaria ligado por essa magia por vez. Com uma ação, você pode liberar a montaria da ligação a qualquer momento, fazendo-a desaparecer."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "143"
    }
  },
  {
    "name": "Convocar Relâmpagos",
    "originalName": "Call Lightning",
    "level": 3,
    "school": "conjuração",
    "type": "3º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma nuvem tempestuosa aparece em formato cilíndrico com 3 metros [10 feet] de altura e 18 metros [60 feet] de raio, centrada num ponto que você possa ver, 30 metros [100 feet] acima de você. A magia falha se você não puder ver um ponto no ar em que a nuvem possa aparecer (por exemplo, se você estiver em uma sala que não possa comportar a nuvem)."
        },
        {
          "type": "default",
          "description": "Quando você conjurar a magia, escolha um ponto que você possa ver dentro do alcance. Um raio de eletricidade é disparado da nuvem no ponto. Cada criatura a 1,5 metro [5 feet] desse ponto deve realizar um teste de resistência de Destreza. Uma criatura sofre 3d10 de dano elétrico se falhar no teste, ou metade desse dano se passar. Em cada um dos seus turnos, até a magia acabar, você pode usar sua ação para convocar um relâmpago dessa forma novamente, afetando o mesmo ponto ou um diferente."
        },
        {
          "type": "default",
          "description": "Se você estiver a céu aberto em condições tempestuosas quando conjurar essa magia, a magia lhe dá controle sobre a tempestade existente ao invés de criar uma nova. Sob tais condições, o dano da magia aumenta em 1d10."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 3°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "123"
    }
  },
  {
    "name": "Corrente De Relâmpagos",
    "originalName": "Chain Lightning",
    "level": 6,
    "school": "evocação",
    "type": "6º nível de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 45,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de pelo; um pedaço de âmbar, vidro ou uma haste de cristal; e três alfinetes de prata",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria um raio elétrico que atinge um alvo, à sua escolha, que você possa ver dentro do alcance. Três raios saltam do alvo para até três outros alvos, cada um a não mais de 9 metros [30 feet] do alvo primário. Um alvo pode ser uma criatura ou um objeto e só pode ser alvo de um único desses raios."
        },
        {
          "type": "default",
          "description": "Um alvo deve realizar um teste de resistência de Destreza. O alvo sofre 10d8 de dano elétrico se falhar no teste ou metade desse dano se for bem sucedido."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, um raio adicional salta do alvo primário para outro alvo para cada nível do espaço acima do 6°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "124"
    }
  },
  {
    "name": "Crescer Espinhos",
    "originalName": "Spike Growth",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 45,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "sete espinhos afiados ou sete gravetos, todos com uma ponta afiada",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "O solo em 6 metros [20 feet] quadrados, centrado num ponto dentro do alcance, se retorce e brotam cavilhas rígidas e espinhos. A área se torna terreno difícil pela duração. Quando uma criatura entrar ou se mover dentro da área, ela sofrerá 2d4 de dano perfurante para cada 1,5 metro [5 feet] que ela atravessar."
        },
        {
          "type": "default",
          "description": "A transformação do terreno é camuflada para parecer natural. Qualquer criatura que não puder ver a área no momento que a magia for conjurada, deve realizar um teste de Sabedoria (Percepção) contra a CD da magia para reconhecer o terreno como perigoso, antes de adentra-lo."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "182"
    }
  },
  {
    "name": "Criação",
    "originalName": "Creation",
    "level": 5,
    "school": "ilusão",
    "type": "5º nível de ilusão",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pequeno pedaço de material do mesmo tipo do item que você planeja criar",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você puxa fragmentos de material sombrio do Shadowfell para criar um objeto inanimado de matéria vegetal dentro do alcance: produtos macios, corda, madeira ou algo semelhante. Você também pode usar este feitiço para criar objetos minerais como pedra, cristal ou metal. O objeto criado não deve ser maior do que um cubo de 1,5 metros [5 feet cube], e o objeto deve ter a forma e o material que você já viu."
        },
        {
          "type": "default",
          "description": "A duração depende do material do objeto. Se o objeto for composto por diversos materiais, use o de menor duração."
        },
        {
          "type": "table",
          "caption": null,
          "header": [
            "Material",
            "Duração"
          ],
          "content": [
            [
              "Matéria vegetal",
              "1 dia"
            ],
            [
              "Pedra ou cristal",
              "12 horas"
            ],
            [
              "Metais preciosos",
              "1 hora"
            ],
            [
              "Gemas",
              "10 minutos"
            ],
            [
              "Adamante ou mitral",
              "1 minuto"
            ]
          ]
        },
        {
          "type": "default",
          "description": "Usar qualquer material criado por essa magia como componente material de outra magia faz com que a magia falhe."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o tamanho do cubo aumenta em 1,5 metro [5 feet] para cada nível do espaço de magia acima do 5°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "132"
    }
  },
  {
    "name": "Criar Alimentos",
    "originalName": "Create Food And Water",
    "level": 3,
    "school": "conjuração",
    "type": "3º nível de conjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "paladino",
      "círculo da terra (deserto)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria 25 quilos [45 pounds] de comida e 100 litros [30 gallons] de água no solo ou em um recipiente dentro do alcance, suficiente para sustentar até quinze humanoide ou cinco montarias por 24 horas. A comida é insossa, porém, nutritiva e estraga se não for consumida após 24 horas. A água é limpa e não fica ruim."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "131"
    }
  },
  {
    "name": "Criar Chamas",
    "originalName": "Produce Flame",
    "level": 0,
    "school": "conjuração",
    "type": "truque de conjuração",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma chama tremulante aparece na sua mão. A chama permanece ai pela duração e não machuca nem você nem seu equipamento. A chama emite luz plena num raio de 3 metros [10-foot radius] e penumbra por 3 metros [10 feet] adicionais. A magia acaba se você dissipa-la usando uma ação ou se conjura-la novamente."
        },
        {
          "type": "default",
          "description": "Você pode, também, atacar com a chama, no entanto, fazer isso acaba com a magia. Quando você conjura essa magia ou com uma ação em um turno posterior, você pode arremessar a chama numa criatura a até 9 metros [30 feet] de você. Faça um ataque à distância com magia. Se atingir, o alvo sofre 1d8 de dano de fogo."
        },
        {
          "type": "default",
          "description": "O dano dessa magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8)."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "172"
    }
  },
  {
    "name": "Criar Mortos",
    "originalName": "Create Undead",
    "level": 6,
    "school": "necromancia",
    "type": "6º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bruxo",
      "clérigo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 3,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "para cada corpo, um pote de barro cheio de terra de sepultura, um pote de barro cheio de água salobra, e uma ônix negra",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você só pode conjurar essa magia durante a noite. Escolha até três corpos de humanoides Médios ou Pequenos dentro do alcance. Cada corpo se torna um carniçal sob seu controle. (O Mestre tem as estatísticas de jogo das criaturas.)"
        },
        {
          "type": "default",
          "description": "Com uma ação bônus, em cada um dos seus turnos, você pode comandar mentalmente qualquer criatura que você animou com essa magia, se a criatura estiver a até 36 metros [20 feet] de você (se você controla diversas criaturas, você pode comandar qualquer uma ou todas elas ao mesmo tempo, emitindo o mesmo comando para cada uma). Você decide qual ação a criatura irá fazer e para onde ela irá se mover durante o próximo turno dela, ou você pode emitir um comando geral, como para guardar uma câmara ou corredor especifico. Se você não der nenhum comando, as criaturas apenas se defenderão contra criaturas hostis. Uma vez que receba uma ordem, a criatura continuará a segui-la até a tarefa estar concluída."
        },
        {
          "type": "default",
          "description": "A criatura fica sob seu controle por 24 horas, depois disso ela para de obedecer aos seus comandos. Para manter o controle da criatura por mais 24 horas, você deve conjurar essa magia na criatura novamente, antes das 24 horas atuais terminarem. Esse uso da magia recupera seu controle sobre até três criaturas que você tenha animado com essa magia, ao invés de animar novas."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível, você pode animar ou recuperar o controle de quatro carniçais. Quando você conjura essa magia usando um espaço de magia de 8° nível, você pode animar ou recuperar o controle de cinco carniçais ou dois lívidos ou aparições. Quando você conjurar essa magia usando um espaço de magia de 9° nível, você pode animar ou recuperar o controle de seis carniçais, três lívidos ou aparições ou duas múmias."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "132"
    }
  },
  {
    "name": "Criar Ou Destruir Água",
    "originalName": "Create Or Destroy Water",
    "level": 1,
    "school": "transmutação",
    "type": "1º nível de transmutação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma gota de água se estiver criando ou alguns grãos de areia se estiver destruindo",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você pode tanto criar quanto destruir água."
        },
        {
          "type": "option",
          "value": "Criar Água",
          "description": "Criar Água. Você cria 30 litros [10 gallons] de água limpa dentro do alcance, em um recipiente aberto. Alternativamente, a água pode cair como chuva em um cubo de 9 metros [30-foot cube] dentro do alcance, extinguindo chamas expostas na área."
        },
        {
          "type": "option",
          "value": "Destruir Água",
          "description": "Destruir Água. Você destrói até 30 litros [10 gallons] de água de um recipiente aberto dentro do alcance. Alternativamente, você pode destruir um nevoeiro em um cubo de 9 metros [30-foot cube] dentro do alcance."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode criar ou destruir 30 litros de água adicionais, ou o tamanho do cubo aumenta em 1,5 metro [5 feet], para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "132"
    }
  },
  {
    "name": "Criar Passagem",
    "originalName": "Passwall",
    "level": 5,
    "school": "transmutação",
    "type": "5º nível de transmutação",
    "isRitual": false,
    "classes": [
      "mago",
      "círculo da terra (montanha)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "algumas sementes de gergelim",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma passagem aparece em um ponto, à sua escolha, que você possa ver em uma superfície de madeira, gesso ou rocha (como um muro, um teto ou um piso) dentro do alcance e permanece pela duração. Você escolhe as dimensões da passagem: até 1,5 metro [5 feet] de largura, 2,10 metros [8 feet] de altura e 6 metros [20 feet] de profundidade. A passagem não provoca instabilidade na estrutura ao seu redor."
        },
        {
          "type": "default",
          "description": "Quando a abertura desaparecer, qualquer criatura ou objeto que ainda estiver dentro da passagem criada pela magia é ejetada em segurança para o espaço desocupado mais próximo da superfície onde a magia foi conjurada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "167"
    }
  },
  {
    "name": "Cúpula Antivida",
    "originalName": "Antilife Shell",
    "level": 5,
    "school": "abjuração",
    "type": "5º nível de abjuração",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma barreira cintilante se estende de você até 3 metros de raio [10-foot radius], e se move com você, permanecendo centrada em você e restringindo criaturas diferentes de mortos-vivos e constructos. A barreira mantém-se pela duração."
        },
        {
          "type": "default",
          "description": "A barreira previna uma criatura afetada de atravessa-la ou alcançar através dela. Uma criatura afetada pode conjurar magias ou realizar ataques à distância ou ataques com armas de haste através da barreira."
        },
        {
          "type": "default",
          "description": "Se você se mover forçando uma criatura afetada a atravessar a barreira, a magia termina."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "116"
    }
  },
  {
    "name": "Cura Completa",
    "originalName": "Heal",
    "level": 6,
    "school": "evocação",
    "type": "6º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha uma criatura que você possa ver, dentro do alcance. Um surto de energia positiva banha a criatura, fazendo-a recuperar 70 pontos de vida. Essa magia também acaba com efeitos de cegueira, surdez e qualquer doença que estejam afetando o alvo. Essa magia não tem efeito em constructos ou mortos-vivos."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, a quantidade de cura aumenta em 10 para cada nível do espaço acima do 6°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "153"
    }
  },
  {
    "name": "Cura Completa Em Massa",
    "originalName": "Mass Heal",
    "level": 9,
    "school": "evocação",
    "type": "9º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma inundação de energia curativa emerge de você para as criaturas feridas ao seu redor. Você restaura até 700 pontos de vida, divididos, à sua escolha, entre qualquer quantidade de criaturas que você possa ver, dentro do alcance. As criaturas curadas por essa magia também são curadas de todas as doenças e qualquer efeito que as deixou cegas ou surdas. Essa magia não afeta mortos-vivos ou constructos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "163"
    }
  },
  {
    "name": "Curar Ferimentos",
    "originalName": "Cure Wounds",
    "level": 1,
    "school": "evocação",
    "type": "1º nível de evocação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida",
      "paladino",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma criatura que você tocar recupera uma quantidade de pontos de vida igual a 1d8 + seu modificador de habilidade de conjuração. Essa magia não produz efeito em mortos-vivos ou constructos."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "132"
    }
  },
  {
    "name": "Curar Ferimentos Em Massa",
    "originalName": "Mass Cure Wounds",
    "level": 5,
    "school": "evocação",
    "type": "5º nível de evocação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma onda de energia curativa emerge de um ponto, à sua escolha, dentro do alcance. Escolha até seis criaturas numa esfera de 9 metros de raio [30-foot radius], centrada nesse ponto. Cada alvo recupera uma quantidade de pontos de vida igual a 3d8 + seu modificador de habilidade de conjuração. A magia não afeta mortos-vivos ou constructos."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 5°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "162"
    }
  },
  {
    "name": "Dança Irresistível",
    "originalName": "Irresistible Dance",
    "level": 6,
    "school": "encantamento",
    "type": "6º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha uma criatura que você possa ver, dentro do alcance. O alvo começa a dançar comicamente no lugar: rodopiando, batendo os pés e saltitando pela duração. As criaturas que não podem ser enfeitiçadas são imunes a essa magia."
        },
        {
          "type": "default",
          "description": "Uma criatura dançando deve usar todo o seu movimento para dançar sem abandonar seu espaço e tem desvantagem nos testes de resistência de Destreza e nas jogadas de ataque. Enquanto o alvo estiver sob efeito dessa magia, as outras criaturas terão vantagem nas jogadas de ataque contra ele. Com uma ação, uma criatura dançando pode realizar um teste de resistência de Sabedoria para recuperar controle sobre si mesmo. Num sucesso na resistência, a magia acaba."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "158"
    }
  },
  {
    "name": "Dedo Da Morte",
    "originalName": "Finger Of Death",
    "level": 7,
    "school": "necromancia",
    "type": "7º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você envia energia negativa na direção de uma criatura que você possa ver, dentro do alcance, causando dores severas nela. O alvo deve realizar um teste de resistência de Constituição. Ele sofre 7d8 + 30 de dano necrótico se falhar na resistência, ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "default",
          "description": "Um humanoide morto por essa magia, se ergue no início do seu próximo turno como um zumbi que está permanentemente sob seu controle, seguindo suas ordens verbais da melhor forma possível."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "144"
    }
  },
  {
    "name": "Desejo",
    "originalName": "Wish",
    "level": 9,
    "school": "conjuração",
    "type": "9º nível de conjuração",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Desejo é o feitiço mais poderoso que uma criatura mortal pode lançar. Simplesmente falando em voz alta, você pode alterar os próprios fundamentos da realidade de acordo com seus desejos."
        },
        {
          "type": "default",
          "description": "O uso básico dessa magia é de copiar qualquer magia de 8° nível ou inferior. Você não precisa atender a qualquer pré-requisito da magia copiada, incluindo os componentes dispendiosos. A magia simplesmente acontece."
        },
        {
          "type": "default",
          "description": "Alternativamente, você pode criar um dos seguintes efeitos, à sua escolha:"
        },
        {
          "type": "list",
          "items": [
            "Você cria um objeto no valor de até 25.000 po, que não seja mágico. O objeto não pode ter dimensões maiores que 90 metros [300 feet] e ele aparece em um espaço desocupado que você possa ver, no chão.",
            "Você permite que até doze criaturas que você possa ver, recuperem todos os seus pontos de vida e você acaba com todos os efeitos descritos na magia restauração maior.",
            "Você concede a até dez criaturas que você possa ver, resistência a um tipo de dano, à sua escolha.",
            "Você concede a até dez criaturas que você possa ver, imunidade a uma única magia ou outro efeito mágico por 8 horas. Por exemplo, você poderia deixar você e todos os seus companheiros imunes ao ataque de dreno de vida de um lich.",
            "Você desfaz um único evento recente forçando uma nova jogada de qualquer jogada feita na última rodada (incluindo seu último turno). A realidade remodela-se para acomodar o novo resultado. Por exemplo, uma magia desejo poderia desfazer o teste de resistência bem sucedido de um oponente, um acerto crítico de um inimigo ou o teste de resistência fracassado de um amigo."
          ]
        },
        {
          "type": "default",
          "description": "Você pode forçar que a nova jogada seja feita com vantagem ou desvantagem e você pode escolher se irá usar o resultado da nova jogada ou da jogada original. Você é capaz de fazer coisas além do alcance dos exemplos acima. Apresente seu desejo ao Mestre o mais precisamente possível. O Mestre tem grande amplitude em definir o que ocorre em tais circunstâncias; quanto maior o desejo, maior será a possibilidade de que algo dê errado. Essa magia pode simplesmente falhar, o efeito do seu desejo pode ser apenas parcialmente atendido ou você pode sofrer consequências imprevistas como resultado da forma que você formulou o desejo. Por exemplo, desejar que um vilão esteja morto pode impulsionar você para um período no tempo em que o vilão não esteja mais vivo, efetivamente removendo você do jogo. Similarmente, desejar um item mágico lendário ou um artefato poderia, instantaneamente, transportar você para a presença do dono atual do item."
        },
        {
          "type": "default",
          "description": "O estresse da conjuração dessa magia para produzir qualquer efeito diferente de copiar outra magia enfraquece você. Após enfrentar esse estresse, a cada vez que você conjurar uma magia, antes de terminar um descanso longo, você sofrerá 1d10 de dano necrótico por nível da magia. Esse dano não pode ser reduzido ou prevenido de forma alguma. Além disso, sua Força cai para 3, se ela já não for 3 ou inferior, por 2d4 dias. Para cada dia desses que você permanecer descansando e não fizer nada além de atividades leves, seu tempo de recuperação é reduzido em 2 dias. Finalmente, existe 33 por cento de chance de você se tornar incapaz de conjurar desejo novamente se você sofrer esse estresse."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "193"
    }
  },
  {
    "name": "Desintegrar",
    "originalName": "Disintegrate",
    "level": 6,
    "school": "transmutação",
    "type": "6º nível de transmutação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um ímã e uma pitada de poeira",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um fino raio esverdeado é lançado da ponta do seu dedo em um alvo que você possa ver dentro do alcance. O alvo pode ser uma criatura, um objeto ou uma criação de energia mágica, como uma muralha criada por muralha de energia."
        },
        {
          "type": "default",
          "description": "Uma criatura afetada por essa magia deve realizar um teste de resistência de Destreza. Se falhar na resistência, o alvo sofrerá 10d6 + 40 de dano de energia. Se esse dano reduzir os pontos de vida do alvo a 0, ele será desintegrado."
        },
        {
          "type": "default",
          "description": "Uma criatura desintegrada e tudo que ela está vestindo ou carregando, exceto itens mágicos, são reduzidos a uma pilha de um fino pó acinzentado. A criatura só pode ser trazida de volta a vida por meio das magias ressurreição verdadeira ou desejo."
        },
        {
          "type": "default",
          "description": "Essa magia desintegra, automaticamente, um objeto não-mágico Grande ou menor ou uma criação de energia mágica. Se o alvo for um objeto ou criação de energia Enorme ou maior, a magia desintegra uma porção de 3 metros cúbicos [10-foot cube] dele. Um item mágico não pode ser afetado por essa magia."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 3d6 para cada nível do espaço acima do 6°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "135"
    }
  },
  {
    "name": "Despedaçar",
    "originalName": "Shatter",
    "level": 2,
    "school": "evocação",
    "type": "2º nível de evocação",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma lasca de mica",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um alto som estridente, dolorosamente intenso, emerge de um ponto, à sua escolha, dentro do alcance. Cada criatura, numa esfera de 3 metros de raio [10-foot radius], centrada no ponto deve fazer um teste de resistência de Constituição. Uma criatura sofre 3d8 de dano trovejante se falhar na resistência ou metade desse dano se obtiver sucesso. Uma criatura feita de material inorgânico como pedra, cristal ou metal, tem desvantagem nesse teste de resistência."
        },
        {
          "type": "default",
          "description": "Um objeto não-mágico que não esteja sendo vestido ou carregado, também sofre o dano, se estiver na área da magia."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "178"
    }
  },
  {
    "name": "Despertar",
    "originalName": "Awaken",
    "level": 5,
    "school": "transmutação",
    "type": "5º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "druida"
    ],
    "casting": {
      "time": 8,
      "unit": "horas"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma ágata",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Depois de gastar o tempo de conjuração traçando runas mágicas com uma gema preciosa, você toca uma besta ou planta Enorme ou menor. O alvo deve ter ou um valor de Inteligência nulo, ou Inteligência 3 ou menor. O alvo ganha Inteligência 10. O alvo também ganha a capacidade de falar um idioma que você conheça. Se o alvo for uma planta, ela ganha a habilidade de mover seus membros, raízes, vinhas, trepadeiras e assim por diante, e ganha sentidos similares ao de um humano. Seu Mestre escolhe as estatísticas apropriadas para o arbusto desperto ou árvore desperta."
        },
        {
          "type": "default",
          "description": "A besta ou planta desperta estará enfeitiçada por você por 30 dias ou até você ou seus companheiros fazerem qualquer coisa nociva contra ela. Quando a condição enfeitiçado terminar, a criatura desperta pode escolher permanecer amigável a você, baseado em como ela foi tratada enquanto estava enfeitiçada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "120"
    }
  },
  {
    "name": "Despistar",
    "originalName": "Mislead",
    "level": 5,
    "school": "ilusão",
    "type": "5º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": false,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você fica invisível ao mesmo tempo que uma cópia ilusória sua aparece onde você estava. A cópia permanece pela duração, mas a invisibilidade acaba se você atacar ou conjurar uma magia."
        },
        {
          "type": "default",
          "description": "Você pode usar sua ação para mover a cópia ilusória até o dobro do seu deslocamento e fazê-la gesticular, falar e se comportar da forma que você quiser."
        },
        {
          "type": "default",
          "description": "Você pode ver através dos olhos e ouvir através dos ouvidos da cópia como se você estivesse localizado onde ela está. Em cada um dos seus turnos, com uma ação bônus, você pode trocar o uso dos sentidos dela pelo seu ou voltar novamente. Enquanto você está usando os sentidos dela, você fica cego e surdo ao que está a sua volta."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "165"
    }
  },
  {
    "name": "Detectar Magia",
    "originalName": "Detect Magic",
    "level": 1,
    "school": "adivinhação",
    "type": "1º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "bardo",
      "clérigo",
      "druida",
      "feiticeiro",
      "mago",
      "paladino",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Pela duração, você sente a presença de magia a até 9 metros [30 feet] de você. Se você sentir magia dessa forma, você pode usar sua ação para ver uma aura suave em volta de qualquer criatura ou objeto visível, na área que carrega magia, e você descobre a escola de magia, se houver uma."
        },
        {
          "type": "default",
          "description": "A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros [1 foot] de rocha, 2,5 centímetros [1 inch] de metal comum, uma fina camada de chumbo, ou 90 centímetros [3 feet] de madeira ou terra."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "134"
    }
  },
  {
    "name": "Detectar O Bem E Mal",
    "originalName": "Detect Evil And Good",
    "level": 1,
    "school": "adivinhação",
    "type": "1º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Pela duração, você sabe se existe uma aberração, celestial, corruptor, elemental, fada ou morto-vivo, a até 9 metros [30 feet] de você, assim como onde a criatura está localizada. Similarmente, você sabe se existe um local ou objeto, a até 9 metros [30 feet] de você, que tenha sido consagrado ou profanado magicamente."
        },
        {
          "type": "default",
          "description": "A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros [1 foot] de rocha, 2,5 centímetros [1 inch] de metal comum, uma fina camada de chumbo, ou 90 centímetros [3 feet] de madeira ou terra."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "134"
    }
  },
  {
    "name": "Detectar Pensamentos",
    "originalName": "Detect Thoughts",
    "level": 2,
    "school": "adivinhação",
    "type": "2º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pedaço de cobre",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Pela duração, você pode ler os pensamentos de certas criaturas. Quando você conjura essa magia e, com sua ação a cada turno até o fim da magia, você pode focar sua mente em qualquer criatura que você puder ver a até 9 metros [30 feet] de você. Se a criatura escolhida possuir Inteligência 3 ou inferior ou não falar nenhum tipo de idioma, a criatura não poderá ser afetada."
        },
        {
          "type": "default",
          "description": "Você, inicialmente, descobre os pensamentos superficiais da criatura – o que está mais presente na sua mente no momento. Com uma ação, você pode tanto mudar sua atenção para os pensamentos de outra criatura, como tentar sondar mais profundamente na mente da mesma criatura. Se você resolver sondar profundamente, a criatura deve realizar um teste de resistência de Sabedoria. Se falhar, você ganha ciência do seu raciocínio (se possuir), seu estado emocional e algo que tome grande parte da sua mente (como algo que ele se preocupe, amores ou ódios). Se ele for bem sucedido, a magia termina. Em ambas situações, o alvo saberá que você está sondando a mente dele e, a não ser que você mude sua atenção para os pensamentos de outra criatura, a criatura pode usar a ação dela, no turno dela, para realizar um teste de Inteligência resistido por seu teste de Inteligência; se ela for bem sucedida, a magia termina."
        },
        {
          "type": "default",
          "description": "Perguntas feitas diretamente para a criatura alvo, normalmente moldarão o curso dos seus pensamentos, portanto, essa magia é particularmente eficiente como parte de um interrogatório."
        },
        {
          "type": "default",
          "description": "Você pode, também, usar essa magia para detectar a presença que criaturas pensantes que você não possa ver. Quando você conjura essa magia ou, com sua ação enquanto ela durar, você pode procurar por pensamentos a até 9 metros [30 feet] de você. A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros [1 foot] de rocha, 2,5 centímetros [1 inch] de metal comum, uma fina camada de chumbo, ou 90 centímetros [3 feet] de madeira ou terra. Você não pode detectar uma criatura com Inteligência 3 ou inferior ou uma que não fale qualquer idioma."
        },
        {
          "type": "default",
          "description": "Uma vez que você tenha detectado a presença de uma criatura dessa forma, você pode ler os pensamentos dela pelo resto da duração, como descrito acima, mesmo que você não possa vê-la, mas ela ainda precisa estar dentro do alcance."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "135"
    }
  },
  {
    "name": "Detectar Veneno E Doença",
    "originalName": "Detect Poison And Disease",
    "level": 1,
    "school": "adivinhação",
    "type": "1º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "clérigo",
      "druida",
      "paladino",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma folha de teixo",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Pela duração, você sente a presença e localização de venenos, criaturas venenosas e doenças a até 9 metros [30 feet] de você. Você também identifica o tipo de veneno, criatura venenosa ou doença em cada caso."
        },
        {
          "type": "default",
          "description": "A magia pode penetrar a maioria das barreiras, mas é bloqueada por 30 centímetros [1 foot] de rocha, 2,5 centímetros [1 inch] de metal comum, uma fina camada de chumbo, ou 90 centímetros [3 feet] de madeira ou terra."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "134"
    }
  },
  {
    "name": "Dificultar Detecção",
    "originalName": "Nondetection",
    "level": 3,
    "school": "abjuração",
    "type": "3º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "mago",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "polvilhar sobre o alvo um pouco de pó de diamante",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Pela duração, você esconde um alvo que você tocar de magias de adivinhação. O alvo pode ser uma criatura voluntária, um local ou um objeto com não mais de 3 metros [10 feet] em qualquer dimensão. O alvo não pode ser alvo de magias de adivinhação ou percebido através de sensores mágicos de vidência."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "167"
    }
  },
  {
    "name": "Disco Flutuante",
    "originalName": "Floating Disk",
    "level": 1,
    "school": "conjuração",
    "type": "1º nível de conjuração",
    "isRitual": true,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma gota de mercúrio",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia cria um plano horizontal, circular de energia de 90 cm de diâmetro por 2,5 cm de espessura, que flutua 90 centímetros [3 feet] acima do chão em um espaço desocupado, à sua escolha, que você possa ver dentro do alcance. O disco permanece pela duração e pode suportar até 250 quilos. Se mais peso for colocado nele, a magia termina, e tudo em cima do disco cai no chão."
        },
        {
          "type": "default",
          "description": "O disco é imóvel enquanto você estiver a até 6 metros [20 feet] dele. Se você se afastar a mais de 6 metros [20 feet] dele, o disco seguirá você, mantendo-se a 6 metros [20 feet] de você. Ele pode atravessar terreno irregular, subir ou descer escadas, encostas e similares, mas ele não pode atravessar mudanças de elevação de 3 metros [10 feet] ou mais. Por exemplo, o disco não pode atravessar um fosso de 3 metros [10 feet] de profundidade nem poderia sair de tal fosso se tivesse sido criado no fundo dele."
        },
        {
          "type": "default",
          "description": "Se você se afastar mais de 30 metros [100 feet] do disco (tipicamente por ele não poder rodear um obstáculo para seguir você), a magia acaba."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "146"
    }
  },
  {
    "name": "Disfarçar",
    "originalName": "Disguise Self",
    "level": 1,
    "school": "ilusão",
    "type": "1º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você faz com que você mesmo – incluindo suas roupas, armadura, armas e outros pertences no seu personagem – pareça diferente até a magia acabar ou até você usar sua ação para dispensa-la. Você pode se parecer 30 centímetros [1 foot] mais baixo ou mais alto, e pode parecer magro, gordo ou entre ambos. Você não pode mudar o tipo do seu corpo, portanto, você deve adotar uma forma que tenha a mesma disposição básica de membros. No mais, a extensão da sua ilusão cabe a você."
        },
        {
          "type": "default",
          "description": "As mudanças criadas por essa magia não conseguem se sustentar perante uma inspeção física. Por exemplo, se você usar essa magia para adicionar um chapéu ao seu visual, objetos que passarem pelo chapéu e qualquer um que tocá-lo não sentirá nada ou sentirá sua cabeça e cabelo. Se você usar essa magia para aparentar ser mais magro do que é, a mão de alguém que a erguer para tocar em você, irá esbarrar em você enquanto ainda está, aparentemente, está no ar."
        },
        {
          "type": "default",
          "description": "Para perceber que você está disfarçado, uma criatura pode usar a ação dela para inspecionar sua aparência e deve ser bem sucedida em um teste de Inteligência (Investigação) contra a CD da sua magia."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "135"
    }
  },
  {
    "name": "Dissipar Magia",
    "originalName": "Dispel Magic",
    "level": 3,
    "school": "abjuração",
    "type": "3º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "clérigo",
      "druida",
      "feiticeiro",
      "mago",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha uma criatura, objeto ou efeito mágico dentro do alcance. Qualquer magia de 3° nível ou inferior no alvo, termina. Para cada magia de 4° nível ou superior no alvo, realize um teste de habilidade usando sua habilidade de conjuração. A CD é igual a 10 + o nível da magia. Se obtiver sucesso, a magia termina."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você dissipa automaticamente os efeitos de magias no alvo se o nível da magia for igual ou inferior ao nível do espaço de magia que você usar."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "136"
    }
  },
  {
    "name": "Dissipar O Bem E Mal",
    "originalName": "Dispel Evil And Good",
    "level": 5,
    "school": "abjuração",
    "type": "5º nível de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "água benta ou pó de prata e ferro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Energia cintilante envolve e protege você de fadas, mortos-vivos e criaturas originarias além do Plano Material. Pela duração, celestiais, corruptores, elementais, fadas e mortos-vivos tem desvantagem nas jogadas de ataque contra você."
        },
        {
          "type": "default",
          "description": "Você pode terminar a magia prematuramente usando uma das funções especiais a seguir."
        },
        {
          "type": "option",
          "value": "Cancelar Encantamento",
          "description": "Cancelar Encantamento. Com sua ação, você toca uma criatura que você possa alcançar que esteja enfeitiçada, amedrontada ou possuída por um celestial, corruptor, elemental, fada ou morto-vivo. A criatura tocada não estará mais enfeitiçada, amedrontada ou possuída por tais criaturas."
        },
        {
          "type": "option",
          "value": "Demissão",
          "description": "Demissão. Com sua ação, faça um ataque corpo-a-corpo com magia contra um celestial, corruptor, elemental, fada ou morto-vivo que você possa alcançar. Se atingir, você pode tentar guiar a criatura de volta ao seu plano natal. A criatura deve ser bem sucedida num teste de resistência de Carisma ou será enviada de volta ao seu plano natal (se já não for aqui). Se elas não estiverem em seus planos de origem, mortos-vivos serão enviados para Umbra e fadas serão enviadas para Faéria."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "136"
    }
  },
  {
    "name": "Doença Plena",
    "originalName": "Harm",
    "level": 6,
    "school": "necromancia",
    "type": "6º nível de necromancia",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você introduz uma doença virulenta em uma criatura que você puder ver, dentro do alcance. O alvo deve realizar um teste de resistência de Constituição. Se falhar na resistência, ele sofre 14d6 de dano necrótico ou metade desse dano se obtiver sucesso na resistência. O dano não pode reduzir os pontos de vida do alvo abaixo de 1. Se o alvo falhar no teste de resistência, seu máximo de pontos de vida é reduzidos por 1 hora em uma quantidade igual ao dano necrótico causado. Qualquer efeito que remova uma doença permitirá que o máximo de pontos de vida do alvo volte ao normal antes do período indicado."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "153"
    }
  },
  {
    "name": "Dominar Besta",
    "originalName": "Dominate Beast",
    "level": 4,
    "school": "encantamento",
    "type": "4º nível de encantamento",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você tenta seduzir uma besta que você possa ver dentro do alcance. Ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ela, ela terá vantagem no teste de resistência."
        },
        {
          "type": "default",
          "description": "Enquanto a besta estiver enfeitiçada, você terá uma ligação telepática com ela, contanto que ambos estejam no mesmo plano de existência. Você pode usar essa ligação telepática para emitir comandos para a criatura enquanto você estiver consciente (não requer uma ação), aos quais ela obedece da melhor forma possível. Você pode especificar um curso de ação simples e genérico, como “Ataque aquela criatura”, “Corra até ali”, ou “Traga aquele objeto”. Se a criatura completar a ordem e não receber direções posteriores de você, ela se defenderá e se auto preservará da melhor forma que puder."
        },
        {
          "type": "default",
          "description": "Você pode usar sua ação para tomar controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita que ela faça. Durante esse período, você também pode fazer com que a criatura use uma reação, mas isso requer que você usa sua própria reação também."
        },
        {
          "type": "default",
          "description": "Cada vez que o alvo sofrer dano, ele realiza um novo teste de resistência de Sabedoria contra a magia. Se obtiver sucesso no teste de resistência, a magia termina."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível, a duração será concentração, até 10 minutos. Quando você usar um espaço de magia de 6° nível, a duração será concentração, até 1 hora. Quando você usar um espaço de magia de 7° nível, a duração será concentração, até 8 horas."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "137"
    }
  },
  {
    "name": "Dominar Monstro",
    "originalName": "Dominate Monster",
    "level": 8,
    "school": "encantamento",
    "type": "8º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você tenta seduzir uma criatura que você possa ver dentro do alcance. Ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ela, ela terá vantagem no teste de resistência."
        },
        {
          "type": "default",
          "description": "Enquanto a criatura estiver enfeitiçada, você terá uma ligação telepática com ela, contanto que ambos estejam no mesmo plano de existência. Você pode usar essa ligação telepática para emitir comandos para a criatura enquanto você estiver consciente (não requer uma ação), aos quais ela obedece da melhor forma possível. Você pode especificar um curso de ação simples e genérico, como “Ataque aquela criatura”, “Corra até ali”, ou “Traga aquele objeto”. Se a criatura completar a ordem e não receber direções posteriores de você, ela se defenderá e se auto preservará da melhor forma que puder."
        },
        {
          "type": "default",
          "description": "Você pode usar sua ação para tomar controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita que ela faça. Durante esse período, você também pode fazer com que a criatura use uma reação, mas isso requer que você usa sua própria reação também."
        },
        {
          "type": "default",
          "description": "Cada vez que o alvo sofrer dano, ele realiza um novo teste de resistência de Sabedoria contra a magia. Se obtiver sucesso no teste de resistência, a magia termina."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 9° nível, a duração será concentração, até 8 horas."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "137"
    }
  },
  {
    "name": "Dominar Pessoa",
    "originalName": "Dominate Person",
    "level": 5,
    "school": "encantamento",
    "type": "5º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você tenta seduzir um humanoide que você possa ver dentro do alcance. Ele deve ser bem sucedido num teste de resistência de Sabedoria ou ficará enfeitiçado por você pela duração. Se você ou criaturas amigáveis a você estiverem lutando com ele, ele terá vantagem no teste de resistência."
        },
        {
          "type": "default",
          "description": "Enquanto o alvo estiver enfeitiçado, você terá uma ligação telepática com ela, contanto que ambos estejam no mesmo plano de existência. Você pode usar essa ligação telepática para emitir comandos para a criatura enquanto você estiver consciente (não requer uma ação), aos quais ela obedece da melhor forma possível. Você pode especificar um curso de ação simples e genérico, como “Ataque aquela criatura”, “Corra até ali”, ou “Traga aquele objeto”. Se a criatura completar a ordem e não receber direções posteriores de você, ela se defenderá e se auto preservará da melhor forma que puder."
        },
        {
          "type": "default",
          "description": "Você pode usar sua ação para tomar controle total e preciso do alvo. Até o final do seu próximo turno, a criatura realiza apenas as ações que você escolher e não faz nada que você não permita que ela faça. Durante esse período, você também pode fazer com que a criatura use uma reação, mas isso requer que você usa sua própria reação também."
        },
        {
          "type": "default",
          "description": "Cada vez que o alvo sofrer dano, ele realiza um novo teste de resistência de Sabedoria contra a magia. Se obtiver sucesso no teste de resistência, a magia termina."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível, a duração será concentração, até 10 minutos. Quando você usar um espaço de magia de 7° nível, a duração será concentração, até 1 hora. Quando você usar um espaço de magia de 8° nível, a duração será concentração, até 8 horas."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "138"
    }
  },
  {
    "name": "Druidismo",
    "originalName": "Druidcraft",
    "level": 0,
    "school": "transmutação",
    "type": "truque de transmutação",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Sussurrando para os espíritos da natureza, você cria um dos seguintes efeitos dentro do alcance:"
        },
        {
          "type": "list",
          "items": [
            "Você cria um efeito sensorial minúsculo e inofensivo que prevê como será o clima na sua localização pelas próximas 24 horas. O efeito deve se manifestar como um globo dourado para céu claro, uma nuvem para chuva, flocos de neve para nevasca e assim por diante. Esse efeito persiste por 1 rodada.",
            "Você faz uma flor florescer, uma semente brotar ou um folha amadurecer, instantaneamente.",
            "Você cria um efeito sensorial inofensivo instantâneo, como folhas caindo, um sopro de vento, o som de um pequeno animal ou o suave odor de um repolho. O efeito deve caber num cubo de 1,5 metro [5-foot cube].",
            "Você, instantaneamente, acende ou apaga uma vela, tocha ou fogueira pequena."
          ]
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "138"
    }
  },
  {
    "name": "Encarnação Fantasmagórica",
    "originalName": "Weird",
    "level": 9,
    "school": "ilusão",
    "type": "9º nível de ilusão",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Baseado nos mais profundos medos de um grupo de criaturas, você cria criaturas ilusórias nas mentes delas, visíveis apenas por elas. Cada criatura numa esfera com 9 metros de raio [30-foot radius] centrada num ponto, à sua escolha, dentro do alcance, deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, uma criatura ficará amedrontada pela duração. A ilusão invoca os medos mais profundos da criatura, manifestando seus piores pesadelos como uma ameaça implacável. No final de cada turno da criatura amedrontada, ela deve ser bem sucedida num teste de resistência de Sabedoria ou sofrerá 4d10 de dano psíquico. Se obtiver sucesso na resistência, a magia termina para essa criatura."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "192"
    }
  },
  {
    "name": "Encontrar Armadilhas",
    "originalName": "Find Traps",
    "level": 2,
    "school": "adivinhação",
    "type": "2º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você sente a presença de qualquer armadilha dentro do alcance a qual você tenha linha de visão. Uma armadilha, para os propósitos dessa magia, inclui qualquer coisa que possa causar um efeito repentino ou inesperado em você, considerado nocivo ou indesejável, que foi especificamente planejado para ser por seu criador. Portanto, a magia sentirá a área afetada pela magia alarme, um glifo de vigilância ou uma armadilha mecânica de fosso, mas ela não revelará uma fragilidade natural no piso, um teto instável ou um sumidouro escondido."
        },
        {
          "type": "default",
          "description": "Essa magia apenas revela que existe uma magia presente. Você não descobre a localização de cada armadilha, mas você também descobre a natureza genérica do perigo representando pela armadilha que você sentiu."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "144"
    }
  },
  {
    "name": "Encontrar O Caminho",
    "originalName": "Find The Path",
    "level": 6,
    "school": "adivinhação",
    "type": "6º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um objeto do lugar que você deseja encontrar e um conjunto de ferramentas de adivinhação – como ossos, bastões de marfim, dentes ou runas esculpidas –",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "dias",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia permite que você encontre a rota física mais curta e direta para um local especifico estático, que você seja familiar, no mesmo plano de existência. Se você denominar um destino em outro plano de existência, um local que se mova (como uma fortaleza andante) ou um destino que não seja especifico (como “o covil do dragão verde”), a magia falha."
        },
        {
          "type": "default",
          "description": "Pela duração, contanto que você esteja no mesmo plano de existência do destino, você saberá o quão longe ele está e em que direção ele se encontra. Enquanto estiver viajando, sempre que você se deparar com uma escolha de trajetória no caminho, você automaticamente determina qual trajetória tem a rota mais curta e direta (mas não necessariamente a rota mais segura) para o destino."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "143"
    }
  },
  {
    "name": "Enfeitiçar Pessoa",
    "originalName": "Charm Person",
    "level": 1,
    "school": "encantamento",
    "type": "1º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você tenta enfeitiçar um humanoide que você possa ver dentro do alcance. Ele deve realizar um teste de resistência de Sabedoria, e recebe vantagem nesse teste se você ou seus companheiros estiverem lutando com ele. Se ele falhar, ficará enfeitiçado por você até a magia acabar ou até você ou seus companheiros fizerem qualquer coisa nociva contra ele. A criatura enfeitiçada reconhece você como um conhecido amigável. Quando a magia acabar, a criatura saberá que foi enfeitiçada por você."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°. As criaturas devem estar a até 9 metros [30 feet] umas das outras quando você for afetá-las."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "124"
    }
  },
  {
    "name": "Enfraquecer Intelecto",
    "originalName": "Feeblemind",
    "level": 8,
    "school": "encantamento",
    "type": "8º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "druida",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 45,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um punhado de barro, cristal, vidro ou esferas minerais",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você ataca a mente de uma criatura que você possa ver, dentro do alcance, tentando despedaçar seu intelecto e personalidade. O alvo sofre 4d6 de dano psíquico e deve realizar um teste de resistência de Inteligência."
        },
        {
          "type": "default",
          "description": "Se falhar na resistência, os valores de Inteligência e Carisma da criatura se tornam 1. A criatura não pode conjurar magias, ativar itens mágicos, compreender idiomas ou se comunicar de qualquer forma inteligível. A criatura pode, no entanto, identificar seus amigos, segui-los e, até mesmo, protege-los."
        },
        {
          "type": "default",
          "description": "Ao final de cada 30 dias, a criatura pode repetir seu teste de resistência contra essa magia. Se ela obtiver sucesso no teste de resistência, a magia termina. Essa magia também pode ser terminada através de restauração maior, cura completa ou desejo."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "142"
    }
  },
  {
    "name": "Enviar Mensagem",
    "originalName": "Sending",
    "level": 3,
    "school": "evocação",
    "type": "3º nível de evocação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "especial"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pequeno e fino pedaço de fio de cobre",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "rodadas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você envia uma mensagem curta, de vinte e cinco palavras ou menos, para uma criatura que seja familiar a você. A criatura ouve a mensagem na sua mente, reconhecendo que foi enviada por você, se ela te conhecer, e pode responder da mesma maneira, imediatamente. A magia permite que criaturas com valores de Inteligência de no mínimo 1, compreendam o sentido da sua mensagem."
        },
        {
          "type": "default",
          "description": "Você pode enviar a mensagem através de qualquer distância e, até mesmo, para outro plano de existência, mas se o alvo estiver em um plano diferente do seu, existe 5 por cento de chance da mensagem não chegar."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "177"
    }
  },
  {
    "name": "Escrita Ilusória",
    "originalName": "Illusory Script",
    "level": 1,
    "school": "ilusão",
    "type": "1º nível de ilusão",
    "isRitual": true,
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma tinta à base de chumbo",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "dias",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você escreve em um pergaminho, papel ou qualquer outro material adequado e tinge ele com uma poderosa ilusão que permanece pela duração."
        },
        {
          "type": "default",
          "description": "Para você e para qualquer criatura que você designar quando você conjura essa magia, a escrita parece normal, escrita com a sua caligrafia e transmite qualquer que seja a mensagem que você desejava quando escreveu o texto. Para todos os outros, a escrita aparece como se tivesse sido escrita com uma caligrafia desconhecida ou mágica que é inteligível. Alternativamente, você pode fazer a escrita parecer uma mensagem totalmente diferente, escrita com uma caligrafia e idioma diferentes, apesar de o idioma precisar ser um que você conheça."
        },
        {
          "type": "default",
          "description": "No caso da magia ser dissipada, tanto a escrita original quanto a ilusória desaparecem."
        },
        {
          "type": "default",
          "description": "Uma criatura com visão verdadeira pode ler a mensagem escondida."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "156"
    }
  },
  {
    "name": "Escudo Arcano",
    "originalName": "Shield",
    "level": 1,
    "school": "abjuração",
    "type": "1º nível de abjuração",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "reação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "rodadas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma barreira de energia invisível aparece e protege você. Até o início do seu próximo turno, você recebe +5 de bônus na CA, incluindo contra o ataque que desencadeou a magia, e você não sofre dano de mísseis mágicos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "179"
    }
  },
  {
    "name": "Escudo Da Fé",
    "originalName": "Shield Of Faith",
    "level": 1,
    "school": "abjuração",
    "type": "1º nível de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pequeno pergaminho com alguns textos sagrados escritos nele",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um campo cintilante aparece ao redor de uma criatura, à sua escolha, dentro do alcance, concedendo +2 de bônus na CA pela duração."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "179"
    }
  },
  {
    "name": "Escudo De Fogo",
    "originalName": "Fire Shield",
    "level": 4,
    "school": "evocação",
    "type": "4º nível de evocação",
    "isRitual": false,
    "classes": [
      "mago",
      "o corruptor"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de fósforo ou um vaga-lume",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Finas e discretas chamas rodeiam seu corpo pela duração, emitindo luz plena em 3 metros de raio [10-foot radius] e penumbra por mais 3 metros [10 feet] adicionais. Você pode terminar a magia prematuramente usando sua ação para dissipa-la."
        },
        {
          "type": "default",
          "description": "As chamas lhe conferem um escudo quente ou um escudo frio, à sua escolha. O escudo quente lhe garante resistência a dano de frio e o escudo frio lhe concede resistência a dano de fogo."
        },
        {
          "type": "default",
          "description": "Além disso, sempre que uma criatura a 1,5 metro [5 feet] de você atingir você com um ataque corpo-a-corpo, o escudo expele chamas. O atacante sofre 2d8 de dano de fogo do escudo quente ou 2d8 de dano de frio do escudo frio."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "144"
    }
  },
  {
    "name": "Escuridão",
    "originalName": "Darkness",
    "level": 2,
    "school": "evocação",
    "type": "2º nível de evocação",
    "isRitual": false,
    "classes": [
      "bruxo",
      "feiticeiro",
      "mago",
      "círculo da terra (pântano)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": true,
      "material": {
        "description": "pelo de morcego e uma gota de piche ou pedaço de carvão",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma escuridão mágica se espalha de um ponto a sua escolha dentro do alcance e preenche uma esfera de 3,5m [15 pés] de raio pela duração. Criaturas com visão noturna não podem enxergar através dessa escuridão, e luz não mágica não a pode iluminar. Se o ponto que você escolheu for um objeto que você esteja segurando, ou um que não esteja sendo vestido ou carregado, a escuridão emanará do objeto e se moverá com ele. Cobrir completamente a fonte da escuridão com um objeto opaco, como uma vasilha ou um elmo, bloqueará a escuridão."
        },
        {
          "type": "default",
          "description": "Se qualquer área dessa magia sobrepor uma área de luz criada por uma magia de 2° ou inferior, a magia que criou a luz será dissipada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "133"
    }
  },
  {
    "name": "Esfera Congelante",
    "originalName": "Freezing Sphere",
    "level": 6,
    "school": "evocação",
    "type": "6º nível de evocação",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 91,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pequena esfera de cristal",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um globo frigido de energia gelada é arremessado das pontas dos seus dedos para um ponto, à sua escolha, dentro do alcance, onde ele explode numa esfera de 18 metros [60 feet] de raio. Cada criatura dentro da área deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofre 10d6 de dano de frio. Se obtiver sucesso na resistência, ela sofre metade desse dano."
        },
        {
          "type": "default",
          "description": "Se o globo atingir um corpo de água ou liquido composto principalmente de água (não incluindo criaturas feitas de água), ele congela o líquido até uma profundidade de 15 centímetros [6 inches] numa área de 9 metros quadrados [30 feet square]. Esse gelo dura por 1 minuto. Criaturas que estiverem nadando na superfície de água congelada estarão presas no gelo. Uma criatura presa pode usar sua ação para realizar um teste de Força contra a CD da magia para se libertar."
        },
        {
          "type": "default",
          "description": "Você pode evitar de disparar o globo após completar a magia, se desejar. Um pequeno globo, do tamanho de uma pedra de funda, frio ao toque, aparece em sua mão. A qualquer momento, você ou uma criatura a quem você entregar o globo, pode arremessa-lo (a uma distância de 12 metros [40 feet]) ou atirá-lo com uma funda (ao alcance normal da funda). Ele se despedaça no impacto, produzindo o mesmo efeito da conjuração normal da magia. Você pode, também, soltar o globo no chão sem despedaça-lo. Após 1 minuto, se o globo ainda não tiver se despedaçado, ele explode."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 6°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "147"
    }
  },
  {
    "name": "Esfera Flamejante",
    "originalName": "Flaming Sphere",
    "level": 2,
    "school": "conjuração",
    "type": "2º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de seco, uma pitada de enxofre e uma camada de pó de ferro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma esfera de fogo de 1,5 metros de diâmetro [5-foot-diameter sphere] aparece em um espaço desocupado de sua escolha dentro do alcance e dura pela duração do feitiço. Qualquer criatura que termine a sua vez dentro de 1,5 metros [5 feet] da esfera deve fazer um teste de resistência de Destreza. A criatura sofre 2d6 de dano de fogo em um teste com falha, ou metade de dano em um teste bem sucedido."
        },
        {
          "type": "default",
          "description": "Como um ação bônus, você pode mover a esfera até 9 metros [30 feet]. Se você chocar a esfera contra uma criatura, essa criatura deve fazer o teste de resistência contra o dano da esfera, e a esfera pára de se mover neste turno."
        },
        {
          "type": "default",
          "description": "Quando você move a esfera, você pode dirigi-la sobre barreiras até 1,5 metros [5 feet] de altura e pular por sobre poços de até 3 metros [10 feet] de largura. A esfera inflama objetos inflamáveis que não estejam sendo vestidos ou carregados, e ela emite luz brilhante em um raio de 6 metros [20 feet] e luz fraca por mais 6 metros [20 feet]."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjura esta magia feitiço usando um espaço de magia de 3º nível ou superior, o dano aumenta em 1d6 para cada nível do espaço de magia acima de 2º."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "145"
    }
  },
  {
    "name": "Esfera Resiliente",
    "originalName": "Resilient Sphere",
    "level": 4,
    "school": "evocação",
    "type": "4º nível de evocação",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma peça hemisférica de cristal transparente e uma peça hemisférica que combine de goma arábica",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma esfera de energia brilhante engloba uma criatura ou objeto de tamanho Grande ou menor, dentro do alcance. Uma criatura involuntária deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura estará enclausurada pela duração. Nada – nem objetos físicos, energia ou outros efeitos mágicos – pode passar através da barreira, para dentro ou para fora, apesar da criatura na esfera poder respirar lá dentro. A esfera é imune a todos os danos e a criatura ou objeto dentro não pode sofrer dano de ataques ou efeitos originados de fora, nem a criatura dentro da esfera, pode causar dano a nada fora dela."
        },
        {
          "type": "default",
          "description": "A esfera não tem peso e é grande o suficiente apenas para conter a criatura ou objeto dentro. Uma criatura enclausurada pode usar sua ação para empurrar a parede da esfera e, assim, rolar a esfera a metade do deslocamento da criatura. Similarmente, o globo pode ser erguido e movido por outras criaturas."
        },
        {
          "type": "default",
          "description": "A magia desintegrar lançada no globo o destruirá sem causar ferimentos a nada dentro dele."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "175"
    }
  },
  {
    "name": "Espada Arcana",
    "originalName": "Arcane Sword",
    "level": 7,
    "school": "evocação",
    "type": "7º nível de evocação",
    "isRitual": false,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma espada de platina em miniatura com cabo e punho de cobre e zinco",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria um plano de energia em formato de espada que flutua dentro do alcance. Ela permanece pela duração."
        },
        {
          "type": "default",
          "description": "Quando a espada aparece, você realiza um ataque com magia contra um alvo, à sua escolha, a 1,5 metro [5 feet] da espada. Se atingir, o alvo sofre 3d10 de dano de energia. Até a magia acabar, você pode usar uma ação bônus, em cada um dos seus turnos, para mover a espada até 6 metros [20 feet] para um local que você possa ver e repetir esse ataque contra o mesmo alvo ou um diferente."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "119"
    }
  },
  {
    "name": "Espíritos Guardiões",
    "originalName": "Spirit Guardians",
    "level": 3,
    "school": "conjuração",
    "type": "3º nível de conjuração",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um símbolo sagrado",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você evoca espíritos para protege-lo. Eles flutuam a seu redor, a uma distância de 4,5 metros [15 feet], pela duração. Se você for bom ou neutro, as formas espectrais deles aparenta ser angelical ou feérica (à sua escolha). Se você for mau, eles pareceram demoníacos."
        },
        {
          "type": "default",
          "description": "Quando você conjura essa magia, você pode designar qualquer quantidade de criaturas que você possa ver para não serem afetadas por ela. O deslocamento de uma criatura afetada é reduzido à metade na área e, quando a criatura entrar na área pela primeira vez num turno ou começar seu turno nela, ela deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, a criatura sofrerá 3d8 de dano radiante (se você for bom ou neutro) ou 3d8 de dano necrótico (se você for mau). Com um sucesso na resistência, a criatura sofre metade desse dano."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 3°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "182"
    }
  },
  {
    "name": "Espirro Ácido",
    "originalName": "Acid Splash",
    "level": 0,
    "school": "conjuração",
    "type": "truque de conjuração",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você arremessa uma bolha de ácido. Escolha uma criatura dentro do alcance, ou escolha duas criaturas dentro do alcance que estejam a 1,5 metro [5 feet] uma da outra. Um alvo deve ser bem sucedido num teste de resistência de Destreza ou sofrerá 1d6 de dano ácido."
        },
        {
          "type": "default",
          "description": "O dano dessa magia aumenta em 1d6 quando você alcança o 5° nível (2d6), 11° nível (3d6) e 17° nível (4d6)."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "114"
    }
  },
  {
    "name": "Esquentar Metal",
    "originalName": "Heat Metal",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pedaço de ferro e uma chama",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha uma objeto manufaturado de metal, como uma arma de metal ou uma armadura pesada ou média de metal, que você possa ver dentro do alcance. Você faz com que o objeto brilhe vermelho-incandescente. Qualquer criatura em contato físico com o objeto sofrerá 2d8 de dano de fogo quando você conjurar a magia. Até a magia acabar, você pode usar uma ação bônus, em cada um dos seus turnos subsequentes, para causar esse dano novamente."
        },
        {
          "type": "default",
          "description": "Se uma criatura estiver segurando ou vestindo o objeto e sofrer o dano dele, a criatura deve ser bem sucedida num teste de resistência de Constituição ou largará o objeto se ela puder. Se ela não largar o objeto, ela terá desvantagem em jogadas de ataque e testes de habilidade até o início do seu próximo turno."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "153"
    }
  },
  {
    "name": "Estabilizar",
    "originalName": "Spare The Dying",
    "level": 0,
    "school": "necromancia",
    "type": "truque de necromancia",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura viva que esteja com 0 pontos de vida. A criatura é estabilizada. Essa magia não afeta mortos-vivos ou constructos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "181"
    }
  },
  {
    "name": "Explosão Solar",
    "originalName": "Sunburst",
    "level": 8,
    "school": "evocação",
    "type": "8º nível de evocação",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 45,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "fogo e um pedaço de pedra do sol",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Luz solar brilhante lampeja num raio de 18 metros [60 feet], centrada num ponto, à sua escolha, dentro do alcance. Cada criatura nessa luz, deve realizar um teste de resistência de Constituição. Com uma falha na resistência, uma criatura sofrerá 12d6 de dano radiante e ficará cega por 1 minuto. Se obtiver sucesso na resistência, ela sofrerá metade desse dano e não ficará cega por essa magia. Mortos-vivos e limos tem desvantagem nos seus testes de resistência."
        },
        {
          "type": "default",
          "description": "Uma criatura cega por essa magia faz outro teste de resistência de Constituição no final de cada um dos turnos dela. Se obtiver sucesso, ela não estará mais cega."
        },
        {
          "type": "default",
          "description": "Essa magia dissipa qualquer escuridão na área dela que tenha sido criada por um magia."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "184"
    }
  },
  {
    "name": "Fabricar",
    "originalName": "Fabricate",
    "level": 4,
    "school": "transmutação",
    "type": "4º nível de transmutação",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você converte matéria-prima em produtos do mesmo material. Por exemplo, você pode construir uma ponte de madeira usando um amontoado de árvores, uma corda de um pedaço de cânhamo e roupas usando linho ou lã."
        },
        {
          "type": "default",
          "description": "Escolha matérias-primas que você possa ver, dentro do alcance. Você pode fabricar um objeto Grande ou menor (contido em 3 metros cúbicos [10-foot cube] ou em oito cubos de 1,5 metro [5 feet] conectados), tendo uma quantidade suficiente de matéria-prima. Se você estiver trabalhando com metal, pedra ou outra substância mineral, no entanto, o objeto fabricado não pode ser maior que Médio (contido em apenas 1,5 metro cúbico [5-foot cube]). A quantidade de objetos feitos por essa magia é proporcional com a quantidade de matéria-prima."
        },
        {
          "type": "default",
          "description": "Criaturas ou itens mágicos não podem ser criados ou transmutados por essa magia. Você também não pode usá-la para criar itens que, geralmente, requerem um alto grau de perícia, como joalheria, armas, vidros ou armaduras, a não ser que você tenha proficiência com o tipo de ferramenta de artesanato usada para construir tais objetos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "141"
    }
  },
  {
    "name": "Falar Com Animais",
    "originalName": "Speak With Animals",
    "level": 1,
    "school": "adivinhação",
    "type": "1º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você adquire a habilidade de compreender e se comunicar verbalmente com bestas, pela duração. O conhecimento e consciência de muitas bestas é limitado pela inteligência delas mas, no mínimo, as bestas poderão dar informações a você sobre os locais e monstros próximos, incluindo tudo que eles possam perceber ou tenham percebido no dia anterior. Você pode tentar persuadir uma besta a lhe prestar um favor, à critério do Mestre."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "181"
    }
  },
  {
    "name": "Falar Com Os Mortos",
    "originalName": "Speak With Dead",
    "level": 3,
    "school": "necromancia",
    "type": "3º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 3,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "incenso aceso",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você concede o aspecto de vida e inteligência a um corpo, à sua escolha, dentro do alcance, permitindo que ele responda as perguntas que você fizer. O corpo ainda deve possuir uma boca e não pode ser um morto-vivo. A magia falha se o corpo já tiver sido alvo dessa magia nos últimos 10 dias."
        },
        {
          "type": "default",
          "description": "Até a magia acabar, você pode fazer ao corpo até cinco perguntas. O corpo sabe apenas o que ele sabia em vida, incluindo o idioma que ele conhecia. As respostas normalmente são breves, enigmáticas ou repetitivas e o corpo não está sob nenhuma compulsão que o obrigue a oferecer respostas verdadeiras se você for hostil a ele ou se ele reconhecer você como um inimigo. Essa magia não traz a alma da criatura de volta ao corpo, apenas anima seu espírito. Portanto, o corpo não pode aprender novas informações, não compreende nada que tenha acontecido depois da sua morte e não pode especular sobre eventos futuros."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "181"
    }
  },
  {
    "name": "Falar Com Plantas",
    "originalName": "Speak With Plants",
    "level": 3,
    "school": "transmutação",
    "type": "3º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você imbui plantas dentro de 9 metros [30 feet] de você com senciência e animação limitadas, dando a elas a capacidade de se comunicar com você e seguir seus comandos simples. Você pode questionar as plantas sobre eventos do último dia na área da magia, obtendo informações sobre criaturas que passaram, tempo e outras circunstâncias."
        },
        {
          "type": "default",
          "description": "Você também pode tornar terreno difícil causado pelo crescimento de plantas (como arbustos e vegetação rasteira) em terreno normal, permanecendo assim pela duração. Ou você pode tornar terreno normal onde as plantas estiverem presentes, em terreno difícil, permanecendo assim pela duração, fazendo as vinhas e ramos atrasarem perseguidores, por exemplo."
        },
        {
          "type": "default",
          "description": "As plantas podem ser capazes de realizar outras tarefas em seu favor, à critério do Mestre. A magia não permite que as plantas desenraizem-se e se movam, mas elas podem mover, livremente, seus ramos, galhos e caules."
        },
        {
          "type": "default",
          "description": "Se uma criatura planta estiver na área, você pode se comunicar com ela se você partilhar um idioma em comum, mas você não recebe qualquer habilidade mágica para influencia-la."
        },
        {
          "type": "default",
          "description": "Essa magia pode fazer as plantas criadas pela magia constrição soltarem uma criatura impedida."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "181"
    }
  },
  {
    "name": "Flecha Ácida",
    "originalName": "Acid Arrow",
    "level": 2,
    "school": "evocação",
    "type": "2º nível de evocação",
    "isRitual": false,
    "classes": [
      "mago",
      "círculo da terra (pântano)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "folha de ruibarbo em pó e estômago de uma víbora",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma flecha esverdeada cintilante voa em direção de um alvo dentro do alcance e explode em um jato de ácido. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 4d4 de dano de ácido imediatamente e 2d4 de dano de ácido no final do próximo turno dele. Se errar, a flecha salpica o alvo com ácido, causando metade do dano inicial e nenhum dano no final do próximo turno dele."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano (tanto inicial quanto posterior) aumenta em 1d4 para cada nível do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "114"
    }
  },
  {
    "name": "Fogo Das Fadas",
    "originalName": "Faerie Fire",
    "level": 1,
    "school": "evocação",
    "type": "1º nível de evocação",
    "isRitual": false,
    "classes": [
      "bardo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Cada objeto num cubo de 6 metros [20-foot cube] dentro do alcance fica delineado com luz azul, verde ou violeta (à sua escolha). Qualquer criatura na área, quando a magia é conjurada, também fica delineada com luz, se falhar num teste de resistência de Destreza. Pela duração, os objetos e criaturas afetadas emitem penumbra num raio de 3 metros [10-foot radius]."
        },
        {
          "type": "default",
          "description": "Qualquer jogada de ataque contra uma criatura afetada ou objeto tem vantagem, se o atacante puder ver o alvo e, a criatura afetada ou objeto não recebe benefício por estar invisível."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "141"
    }
  },
  {
    "name": "Forma Etérea",
    "originalName": "Etherealness",
    "level": 7,
    "school": "transmutação",
    "type": "7º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "clérigo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você dá um passo para dentro das fronteiras do Plano Etéreo, na área em que ele se sobrepõem com o seu plano atual. Você se mantém na Fronteira Etérea pela duração ou até você usar sua ação para dissipar a magia. Durante esse período, você pode se mover para qualquer direção. Se você se mover para cima ou para baixo, cada passo de deslocamento custa um passo extra. Você pode ver e ouvir o plano que você se originou, mas tudo parece cinzento e você não pode ver nada além de 18 metros [60 feet] de você."
        },
        {
          "type": "default",
          "description": "Enquanto estiver no Plano Etéreo, você pode afetar e ser afetado apenas por criaturas nesse plano. As criaturas que não estiverem no Plano Etéreo não podem notar sua presença e não podem interagir com você, a menos que uma habilidade especial ou magia dê a elas a capacidade de fazê-lo."
        },
        {
          "type": "default",
          "description": "Você ignora todos os objetos e efeitos que não estiverem no Plano Etéreo, permitindo que você se mova através de objetos que você perceba no plano de onde você veio."
        },
        {
          "type": "default",
          "description": "Quando a magia acabar, você imediatamente retorna para o plano de onde você se originou, no lugar que você está ocupando atualmente. Se você estiver ocupando o mesmo espaço de um objeto sólido ou de uma criatura quando isso ocorrer, você é, imediatamente, desviado para o espaço desocupado mais próximo que você puder ocupar e sofre dano de energia igual a dez vezes a quantidade de quadrados de 1,5 metro [5 feet] que você foi movido."
        },
        {
          "type": "default",
          "description": "Essa magia não tem efeito se você conjura-la enquanto estiver no Plano Etéreo ou um plano que não faça fronteira com ele, como um dos Planos Exteriores."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 8° nível ou superior, você pode afetar até três criaturas voluntária (incluindo você) para cada nível do espaço acima do 7°. As criaturas devem estar a até 3 metros [10 feet] de você quando você conjurar a magia."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "140"
    }
  },
  {
    "name": "Forma Gasosa",
    "originalName": "Gaseous Form",
    "level": 3,
    "school": "transmutação",
    "type": "3º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de gaze e um pouco de fumaça",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você transforma uma criatura voluntária que você tocar, junto com tudo que ela estiver vestindo e carregando, em uma nuvem nebulosa, pela duração. A magia termina se a criatura cair a 0 pontos de vida. Uma criatura incorpórea não pode ser afetada."
        },
        {
          "type": "default",
          "description": "Enquanto estiver nessa forma, o único meio de movimentação do alvo é 3 metros [10 feet] de deslocamento de voo. O alvo pode entrar e ocupar o espaço de outra criatura. O alvo tem resistência a dano não-mágico e tem vantagem em testes de resistência de Força, Destreza e Constituição. O alvo pode passar através de pequenos buracos, aberturas estreitas e, até mesmo, meras rachaduras, embora ele trate líquidos como se fossem superfícies sólidas. O alvo não pode cair e se mantém flutuando no ar, mesmo se estiver atordoado ou incapacitado de alguma outra forma."
        },
        {
          "type": "default",
          "description": "Enquanto estiver na forma de uma nuvem nebulosa, o alvo não pode falar ou manipular objetos e, quaisquer objetos que ele estava carregando ou segurando não pode ser derrubado, usado ou, de outra forma, interagido. O alvo não pode atacar ou conjurar magias."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "148"
    }
  },
  {
    "name": "Formas Animais",
    "originalName": "Animal Shapes",
    "level": 8,
    "school": "transmutação",
    "type": "8º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Sua magia transforma você em bestas. Escolha qualquer quantidade de criaturas voluntárias que você possa ver, o alcance. Você muda cada alvo para a forma de uma besta Grande ou menor, com um nível de desafio de 4 ou inferior. Nos turnos subsequentes, você pode usar sua ação para mudar uma criatura afetada para uma nova forma."
        },
        {
          "type": "default",
          "description": "A transformação permanece pela duração para cada alvo, ou até o alvo cair para 0 pontos de vida ou morrer. Você pode escolher uma forma diferente para cada alvo. As estatísticas de jogo do alvo são substituídas pelas estatísticas da besta escolhida, mas o alvo mantém sua tendência e valores de Inteligência, Sabedoria e Carisma. O alvo adquire os pontos de vida da sua nova forma, e quando ele reverte para sua forma normal, ele volta aos pontos de vida que tinha antes de ser transformado. Se ele reverter como resultado de ter caído a 0 pontos de vida, todo dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da forma normal da criatura a 0, ela não cairá inconsciente. A criatura é limitada em suas ações pela natureza da sua nova forma e ela não pode falar nem conjurar magias."
        },
        {
          "type": "default",
          "description": "O equipamento do alvo mescla-se a sua nova forma. O alvo não pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "115"
    }
  },
  {
    "name": "Fundir Em Pedra",
    "originalName": "Meld Into Stone",
    "level": 3,
    "school": "transmutação",
    "type": "3º nível de transmutação",
    "isRitual": true,
    "classes": [
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você entra em um objeto ou superfície rochoso, grande o suficiente para comportar seu corpo inteiro, mesclando-se, junto com todo o equipamento que você esteja carregando, com a rocha pela duração. Usando seu movimento, você entra na rocha num ponto que você possa tocar. Nada da sua presença ficará visível ou, de outra forma, detectável por sentidos não-mágicos."
        },
        {
          "type": "default",
          "description": "Enquanto estiver imerso na rocha, você não pode ver o que está ocorrendo do lado de fora e, qualquer teste de Sabedoria (Percepção) que você fizer para ouvir os sons do lado de fora são feitos com desvantagem. Você continua consciente do tempo transcorrido e pode conjurar magias em você enquanto estiver imerso na rocha. Você pode usar seu movimento para sair da rocha onde você entrou, o que termina a magia. Do contrário, você não pode se mover."
        },
        {
          "type": "default",
          "description": "Pequenos danos físicos a rocha não ferem você, mas destruição parcial ou uma mudança no formato (fazendo que você já não caiba mais dentro dela) expelirá você causando-lhe 6d6 de dano de concussão. A destruição completa da rocha (ou transmutação em uma substância diferente) expelirá você causando-lhe 50 de dano de concussão. Se você for expelido, você ficará caído no chão em um espaço desocupado perto de onde você entrou da primeira vez."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "163"
    }
  },
  {
    "name": "Glifo De Vigilância",
    "originalName": "Glyph Of Warding",
    "level": 3,
    "school": "abjuração",
    "type": "3º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "horas"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "incenso e pó de diamante",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada ou ativada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Quando você conjura essa magia, você inscreve um glifo que fere outras criaturas, tanto sobre uma superfície (como uma mesa ou uma secção de piso ou parede) quanto dentro de um objeto que possa ser fechado (como um livro, um pergaminho ou um baú de tesouro) para ocultar o glifo. Se você escolher uma superfície, o glifo pode cobrir uma área da superfície não superior a 3 metros [10 feet] de diâmetro. Se você escolher um objeto, o objeto deve permanecer no seu local; se ele for movido mais de 3 metros [10 feet] de onde você conjurou essa magia, o glifo será quebrado e a magia termina sem ser ativada."
        },
        {
          "type": "default",
          "description": "O glifo é quase invisível e requer um teste de Inteligência (Investigação) contra a CD da magia para ser encontrado."
        },
        {
          "type": "default",
          "description": "Você define o que ativa o glifo quando você conjura a magia. Para glifos inscritos em uma superfície, os gatilhos mais típicos incluem tocar ou ficar sobre o glifo, remover outro objeto cobrindo o glifo, aproximar-se a uma certa distância do glifo ou manipular um objeto onde o glifo esteja inscrito. Para glifos inscritos dentro de objetos, os gatilhos mais comuns incluem abrir o objeto, aproximar-se a uma certa distância do objeto ou ver ou ler o glifo. Uma vez que o glifo seja ativado, a magia termina."
        },
        {
          "type": "default",
          "description": "Você pode, posteriormente, aperfeiçoar o gatilho para que a magia se ative apenas sob certas circunstâncias ou de acordo com as características físicas (como altura ou peso), tipo de criatura (por exemplo, a proteção poderia ser definida para afetar aberrações ou drow) ou tendência. Você pode, também, definir condições para criaturas não ativarem o glifo, como aqueles que falarem determinada senha."
        },
        {
          "type": "default",
          "description": "Quando você inscreve o glifo, escolha runas explosivas ou glifo de magia."
        },
        {
          "type": "option",
          "value": "Runas Explosivas",
          "description": "Runas Explosivas. Quando ativado, o glifo irrompe com energia mágica numa esfera com 6 metros de raio [20-foot radius], centrada no glifo. A esfera se espalha, dobrando esquinas. Cada criatura na área deve realizar um teste de resistência de Destreza. Uma criatura sofre 5d8 de dano de ácido, elétrico, fogo, frio ou trovejante se falhar no teste de resistência (você escolhe o tipo quando cria o glifo) ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "option",
          "value": "Glifo de Magia",
          "description": "Glifo de Magia. Você pode armazenar uma magia preparada de 3° nível ou inferior no glifo ao conjura-la como parte da criação do glifo. A magia a ser armazenada não tem efeito imediato quando conjurada dessa forma. Quando o glifo for ativado, a magia armazenada é conjurada. Se a magia tiver um alvo, esse alvo será a criatura que ativou o glifo. Se a magia afetar uma área, a área será centrada na criatura. Se a magia invocar criaturas hostis ou criar objetos ou armadilhas nocivos, eles aparecerão o mais próximo possível do intruso e o atacarão. Se a magia precisar de concentração, ela dura o máximo possível da sua duração."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano do glifo de runas explosivas aumenta em 1d8 para cada nível do espaço acima do 3°. Se você criar um glifo de magia, você pode armazenar qualquer magia do mesmo nível, ou inferior, do espaço que você usar para o glifo de vigilância."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "149"
    }
  },
  {
    "name": "Globo De Invulnerabilidade",
    "originalName": "Globe Of Invulnerability",
    "level": 6,
    "school": "abjuração",
    "type": "6º nível de abjuração",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma perola de vidro ou cristal",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma barreira levemente cintilante e imóvel surge em um raio de 3 metros [10-foot] ao redor de você e permanece pela duração."
        },
        {
          "type": "default",
          "description": "Qualquer magia de 5° nível ou inferior conjurada de fora da barreira não poderá afetar as criaturas ou objetos dentro dela, mesmo que a magia seja conjurada usando um espaço de magia de nível superior. Tais magias podem ter como alvo criaturas e objetos dentro da barreira, mas a magia não produz nenhum efeito neles. Similarmente, a área dentro da barreira é excluída das áreas afetadas por tais magias."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, a barreira bloqueia magias de um nível superior para cada nível do espaço acima do 6°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "149"
    }
  },
  {
    "name": "Globos De Luz",
    "originalName": "Dancing Lights",
    "level": 0,
    "school": "evocação",
    "type": "truque de evocação",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de fósforo ou wychwood ou um inseto luminoso",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria até quatro luzes do tamanho de tochas dentro do alcance, fazendo-as parecerem tochas, lanternas ou esferas luminosas que flutuam no ar pela duração. Você também pode combinar as quatro luzes em uma forma luminosa, vagamente humanoide, de tamanho Médio. Qualquer que seja a forma que você escolher, cada luz produz penumbra num raio de 3 metros [10-foot radius]."
        },
        {
          "type": "default",
          "description": "Com uma ação bônus, no seu turno, você pode mover as luzes, até 18 metros [60 feet], para um novo local dentro do alcance. Uma luz deve estar a, pelo menos, 6 metros [20 feet] de outra luz criada por essa magia e uma luz some se exceder o alcance da magia."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "133"
    }
  },
  {
    "name": "Guardião Da Fé",
    "originalName": "Guardian Of Faith",
    "level": 4,
    "school": "conjuração",
    "type": "4º nível de conjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "juramento da devoção"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um guardião espectral Grande aparece e flutua, pela duração, em um espaço desocupado, à sua escolha, que você possa ver dentro do alcance. O guardião ocupa esse espaço e é indistinto, exceto por uma espada reluzente e um escudo brasonado com o símbolo da sua divindade."
        },
        {
          "type": "default",
          "description": "Qualquer criatura hostil a você que se mover para um espaço a até 3 metros [10 feet] do guardião pela primeira vez em um turno, deve ser bem sucedida num teste de resistência de Destreza. A criatura sofre 20 de dano radiante se falhar na resistência ou metade desse dano se obtiver sucesso. O guardião desaparece após ter causado um total de 60 de dano."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "150"
    }
  },
  {
    "name": "Heroísmo",
    "originalName": "Heroism",
    "level": 1,
    "school": "encantamento",
    "type": "1º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma criatura voluntária que você tocar é imbuída com bravura. Até a magia acabar, a criatura é imune a ser amedrontada e ganha pontos de vida temporários igual ao seu modificador de habilidade de conjuração, no início de cada turno dela. Quando a magia acabar, o alvo perde qualquer ponto de vida temporário restante dessa magia."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "154"
    }
  },
  {
    "name": "Identificação",
    "originalName": "Identify",
    "level": 1,
    "school": "adivinhação",
    "type": "1º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pena de coruja e uma perola",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você escolhe um objeto que você deve tocar durante toda a conjuração da magia. Se ele for um item mágico ou algum outro objeto imbuído por magia, você descobre suas propriedades e como usá-lo, se exige sintonia para ser usado e quantas cargas ele tem, se aplicável. Você descobre se quaisquer magias estão afetando o item e quais eles são. Se o item foi criado por magia, você descobre que magia o criou."
        },
        {
          "type": "default",
          "description": "Se você, ao invés, tocar uma criatura durante toda a conjuração, você descobre quais magias, se houver alguma, estão afetando-a atualmente."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "155"
    }
  },
  {
    "name": "Idiomas",
    "originalName": "Tongues",
    "level": 3,
    "school": "adivinhação",
    "type": "3º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "clérigo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": true,
      "material": {
        "description": "uma pequena estátua de argila de um zigurate",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia garante a criatura que você tocar a habilidade de compreender e falar o idioma que ela ouvir. Além disso, quando o alvo fala, qualquer criatura que saiba, pelo menos, um idioma pode ouvir o alvo e compreender o que ele diz."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "187"
    }
  },
  {
    "name": "Ilusão Menor",
    "originalName": "Minor Illusion",
    "level": 0,
    "school": "ilusão",
    "type": "truque de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": false,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de lã",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria um som ou uma imagem de um objeto, dentro do alcance, que permanece pela duração. A ilusão também termina se você dissipa-la usando uma ação ou conjurar essa magia novamente."
        },
        {
          "type": "default",
          "description": "Se você criar um som, seu volume pode variar entre um sussurro até um grito. Pode ser a sua voz, a voz de outrem, o rugido de um leão, batidas de tambor ou qualquer outro som que você quiser. O som permanece no mesmo volume durante toda duração ou você pode fazer sons distintos em momentos diferentes, antes da magia acabar."
        },
        {
          "type": "default",
          "description": "Se você criar uma imagem de um objeto – como uma cadeira, pegadas de lama ou um pequeno baú – ela não pode ter mais de 1,5 metro cúbico [5-foot cube]. A imagem não pode produzir som, luz, cheiro ou qualquer outro efeito sensorial. Interação física com a imagem revelará que ela é uma ilusão, já que as coisas podem atravessa-la."
        },
        {
          "type": "default",
          "description": "Se uma criatura usar sua ação para examinar a imagem, ela pode determinar que ela é uma ilusão se obtiver sucesso num teste de Inteligência (Investigação) contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a ilusão se tornará suave para a criatura."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "164"
    }
  },
  {
    "name": "Ilusão Programada",
    "originalName": "Programmed Illusion",
    "level": 6,
    "school": "ilusão",
    "type": "6º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de lã e pó de jade",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma ilusão de um objeto, uma criatura ou de algum outro fenômeno visível, dentro do alcance, que se ativa quando uma condição especifica ocorre. A ilusão é imperceptível até esse momento. Ela não pode ter mais de 9 metros cúbicos [30-foot cube] e você decide, quando conjura a magia, como a ilusão se comporta e quais sons ela faz. Essa performance roteirizada por durar até 5 minutos."
        },
        {
          "type": "default",
          "description": "Quando a condição que você especificou ocorrer, a ilusão surge do nada e age da maneira que você descreveu. Uma vez que a ilusão tenha acabado de agir, ela desaparece e permanece dormente por 10 minutos. Após desse período, a ilusão pode se ativar novamente."
        },
        {
          "type": "default",
          "description": "A condição de ativação pode ser tão genérica ou tão detalhada quando você quiser, apesar de ela precisar ser baseada em condições visuais ou audíveis que ocorram a até 9 metros [30 feet] da área. Por exemplo, você poderia criar uma ilusão, de si mesmo, que aparecerá e avisará a outros que tentarem abrir a porta com armadilha ou você pode programar a ilusão para se ativar apenas quando uma criatura disser a palavra ou frase correta."
        },
        {
          "type": "default",
          "description": "Interação física com a imagem revelará ela como sendo uma ilusão, já que as coisas podem atravessa-la. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão sendo bem sucedida num teste de Inteligência (Investigação) contra a CD da magia para desacredita-la. Se a criatura discernir a ilusão como ela é, a criatura poderá ver através da imagem e qualquer barulho que ela fizer soará oco para a criatura."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "172"
    }
  },
  {
    "name": "Imagem Maior",
    "originalName": "Major Image",
    "level": 3,
    "school": "ilusão",
    "type": "3º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pedaço de lã",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma imagem de um objeto, uma criatura ou algum outro fenômeno visível que não tenha mais de 6 metros cúbicos [20-foot cube]. A imagem aparece em um local que você possa ver, dentro do alcance e permanece pela duração. Ela parece completamente real, incluindo sons, cheiros e temperatura apropriados para a coisa retratada. Você não pode criar calor ou frio suficiente para causar dano, um som alto o suficiente para causar dano trovejante ou ensurdecer uma criatura ou um cheiro que poderia nausear uma criatura (como o fedor de um troglodita)."
        },
        {
          "type": "default",
          "description": "Enquanto você estiver dentro do alcance da ilusão, você pode usar sua ação pra fazer a imagem se mover para qualquer outro local dentro do alcance. À medida que a imagem muda de lugar, você pode alterar a aparência dela para que seu movimento pareça ser o natural para a imagem. Por exemplo, se você criar uma imagem de uma criatura e move-la, você pode alterar a imagem para que ela pareça estar andando. Similarmente, você pode fazer a ilusão emitir sons diferentes em momentos diferentes, sendo possível até mesmo manter uma conversa, por exemplo."
        },
        {
          "type": "default",
          "description": "Interação física com a imagem, revelará que ela é uma ilusão, já que as coisas podem passar através dela. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão com um teste de Inteligência (Investigação) bem sucedido contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a criatura verá através da imagem e suas outras qualidades sensoriais se tornaram suaves para a criatura."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, a magia irá durar até ser dissipada, sem necessitar da sua concentração."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "162"
    }
  },
  {
    "name": "Imagem Silenciosa",
    "originalName": "Silent Image",
    "level": 1,
    "school": "ilusão",
    "type": "1º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de lã",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria a imagem de um objeto, criatura ou outro fenômeno visual que não tenha mais de 4,5 metros cúbicos [15-foot cube]. A imagem aparece num ponto, dentro do alcança, e permanece pela duração. A imagem é puramente visual; não é acompanhada por som, cheiro ou outros efeitos sensoriais."
        },
        {
          "type": "default",
          "description": "Você pode usar sua ação para fazer a imagem se mover para qualquer ponto, dentro do alcance. À medida que a imagem muda de lugar, você pode alterar a aparência dela para que seu movimento pareça ser o natural para a imagem. Por exemplo, se você criar uma imagem de uma criatura e move-la, você pode alterar a imagem para que ela pareça estar andando."
        },
        {
          "type": "default",
          "description": "Interação física com a imagem, revelará que ela é uma ilusão, já que as coisas podem passar através dela. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão com um teste de Inteligência (Investigação) bem sucedido contra a CD da magia. Se uma criatura discernir a ilusão como sendo isso, a criatura poderá ver através da imagem."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "179"
    }
  },
  {
    "name": "Imobilizar Monstro",
    "originalName": "Hold Monster",
    "level": 5,
    "school": "encantamento",
    "type": "5º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pequena peça de ferro reta",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha uma criatura que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou ficará paralisado pela duração. Essa magia não tem efeito em mortos-vivos. No final de cada um dos turnos dele, o alvo pode realizar outro teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina no alvo."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, você pode afetar uma criatura adicional para cada nível de magia acima do 5°. As criaturas devem estar a 9 metros [30 feet] entre si para serem afetadas."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "154"
    }
  },
  {
    "name": "Imobilizar Pessoa",
    "originalName": "Hold Person",
    "level": 2,
    "school": "encantamento",
    "type": "2º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "clérigo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pequena peça de ferro reta",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha um humanoide que você possa ver, dentro do alcance. O alvo deve ser bem sucedido num teste de resistência de Sabedoria ou ficará paralisado pela duração. Essa magia não tem efeito em mortos-vivos. No final de cada um dos turnos dele, o alvo pode realizar outro teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina no alvo."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar um humanoide adicional para cada nível de magia acima do 2°. Os humanoides devem estar a 9 metros [30 feet] entre si para serem afetados."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "154"
    }
  },
  {
    "name": "Infligir Ferimentos",
    "originalName": "Inflict Wounds",
    "level": 1,
    "school": "necromancia",
    "type": "1º nível de necromancia",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Faça um ataque mágico corpo-a-corpo contra uma criatura que você pode alcançar. Em um acerto, o alvo sofre 3d10 de dano necrótico."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d10 para cada nível acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "157"
    }
  },
  {
    "name": "Inseto Gigante",
    "originalName": "Giant Insect",
    "level": 4,
    "school": "transmutação",
    "type": "4º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você transforma até dez centopeias, três aranhas, cinco vespas ou um escorpião, dentro do alcance, em versões gigantes das suas formas naturais, pela duração. Uma centopeia se torna uma centopeia gigante, uma aranha se torna uma aranha gigante, uma vespa se torna uma vespa gigante e um escorpião se torna um escorpião gigante."
        },
        {
          "type": "default",
          "description": "Cada criatura obedece aos seus comando verbais e, em combate, elas agem no seu turno a cada rodada. O Mestre possui as estatísticas dessas criaturas e determina suas ações e movimentação."
        },
        {
          "type": "default",
          "description": "Uma criatura permanece no tamanho gigante pela duração, ou até cair a 0 pontos de vida ou até você usar sua ação para dissipar o efeito nela."
        },
        {
          "type": "default",
          "description": "O Mestre pode permitir que você escolha alvos diferentes. Por exemplo, se você transformar uma abelha, sua versão gigante poderia ter as mesmas estatísticas da vespa gigante."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "149"
    }
  },
  {
    "name": "Inverter A Gravidade",
    "originalName": "Reverse Gravity",
    "level": 7,
    "school": "transmutação",
    "type": "7º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 30,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um ímã e limalhas de ferro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia inverte a gravidade num cilindro de 15 metros de raio [50-foot radius] por 30 metros [100 feet] de altura, centrado num ponto dentro do alcance. Todas as criaturas e objetos que não esteja, de alguma forma, presos ao solo na área, caem para cima e alcançam o topo da área, quando você conjura essa magia. Uma criatura pode fazer um teste de resistência de Destreza para se agarrar em algum objeto fixo que ela possa alcançar, assim, evitando a queda."
        },
        {
          "type": "default",
          "description": "Se algum objeto sólido (como um teto) for encontrado durante essa queda, objetos e criaturas caindo atingem ele, exatamente como fariam durante uma queda normal. Se um objeto ou criatura alcançar o topo da área sem atingir nada, ele permanecerá lá, oscilando ligeiramente, pela duração"
        },
        {
          "type": "default",
          "description": "No final da duração, objetos e criaturas afetadas caem de volta para baixo."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "175"
    }
  },
  {
    "name": "Invisibilidade",
    "originalName": "Invisibility",
    "level": 2,
    "school": "ilusão",
    "type": "2º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago",
      "círculo da terra (planície)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pestana envolta em goma-arábica",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma criatura que você tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo esteja vestindo ou carregando fica invisível enquanto estiver de posse do alvo. A magia termina para o alvo caso ele ataque ou conjure uma magia."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você pode afetar um alvo adicional para cada nível do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "157"
    }
  },
  {
    "name": "Invisibilidade Maior",
    "originalName": "Greater Invisibility",
    "level": 4,
    "school": "ilusão",
    "type": "4º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você ou uma criatura que você possa tocar, se torna invisível até a magia acabar. Qualquer coisa que o alvo estiver vestindo ou carregando fica invisível enquanto estiver de posse do alvo."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "150"
    }
  },
  {
    "name": "Invocação Instantânea",
    "originalName": "Instant Summons",
    "level": 6,
    "school": "conjuração",
    "type": "6º nível de conjuração",
    "isRitual": true,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma safira",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca um objeto pesando 5 quilos [10 pounds] ou menos com maior dimensão de 1,8 metro [6 feet] ou menos. A magia deixa uma marca invisível na sua superfície e grava invisivelmente o nome do item na safira que você usou como componente material. A cada vez que você conjurar essa magia, você deve usar uma safira diferente."
        },
        {
          "type": "default",
          "description": "A qualquer momento, posteriormente, você pode usar sua ação para falar o nome do item e esmagar a safira. O item aparece instantaneamente em suas mãos, independentemente de distâncias físicas ou planares, e a magia termina."
        },
        {
          "type": "default",
          "description": "Se outra criatura estiver segurando ou carregando o item, esmagar a safira não irá transportar o item até você, ao invés disso, você descobre quem é a criatura possuindo o objeto e onde, vagamente, a criatura está localizada no momento."
        },
        {
          "type": "default",
          "description": "Dissipar magia ou um efeito similar aplicado com sucesso na safira, termina o efeito da magia."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "157"
    }
  },
  {
    "name": "Isolamento",
    "originalName": "Sequester",
    "level": 7,
    "school": "transmutação",
    "type": "7º nível de transmutação",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um composto de pós de diamante, esmeralda, rubi e safira",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Através dessa magia, uma criatura voluntária ou um objeto, pode ser escondido, seguro contra detecção pela duração. Quando você conjura essa magia e toca o alvo, ele fica invisível e não pode ser alvo de magias de adivinhação ou percebido através de sensores de vidência criados por magias de adivinhação."
        },
        {
          "type": "default",
          "description": "Se o alvo for uma criatura, ela entra num estado de animação suspensa. O tempo para de fluir para ela e ela não envelhece."
        },
        {
          "type": "default",
          "description": "Você pode determinar uma condição para que a magia termine prematuramente. A condição pode ser qualquer coisa, à sua escolha, mas deve ocorrer ou ser visível a até 1,5 quilômetro [1 mile] do alvo. Exemplos incluem “depois de 1.000 anos” ou “quando o tarrasque despertar”. Essa magia também acaba se o alvo sofrer qualquer dano."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "178"
    }
  },
  {
    "name": "Labirinto",
    "originalName": "Maze",
    "level": 8,
    "school": "conjuração",
    "type": "8º nível de conjuração",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você bane uma criatura que você possa ver, dentro do alcance, para um semiplano labiríntico. O alvo permanece lá pela duração ou até escapar do labirinto."
        },
        {
          "type": "default",
          "description": "O alvo pode usar sua ação para tentar escapar. Quando o fizer, ele realiza um teste de Inteligência com CD 20. Se for bem sucedido, ele escapa e a magia termina (um minotauro ou um demônio goristro, obtém sucesso automaticamente)."
        },
        {
          "type": "default",
          "description": "Quando a magia termina, o alvo reaparece no espaço que ela estava ou, se o espaço estiver ocupado, no espaço desocupado mais próximo."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "163"
    }
  },
  {
    "name": "Lâmina Flamejante",
    "originalName": "Flame Blade",
    "level": 2,
    "school": "evocação",
    "type": "2º nível de evocação",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "folha de sumagre",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você evoca uma lâmina ardente em sua mão livre. A lâmina é similar em tamanho e formato a uma cimitarra e ela permanece pela duração. Se você soltar a lâmina, ela desaparece, mas você pode evocar a lâmina novamente com uma ação bônus."
        },
        {
          "type": "default",
          "description": "Você pode usar sua ação para realizar ataques corpo-a-corpo com magia com a lâmina ardente. Se atingir, o alvo sofrerá 3d6 de dano de fogo."
        },
        {
          "type": "default",
          "description": "A lâmina flamejante emite luz plena a 3 metros de raio [10-foot radius] e penumbra por mais 3 metros [10 feet] adicionais."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada dois níveis do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "145"
    }
  },
  {
    "name": "Lentidão",
    "originalName": "Slow",
    "level": 3,
    "school": "transmutação",
    "type": "3º nível de transmutação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago",
      "círculo da terra (ártico)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma gota de melaço",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você altera o tempo ao redor de até seis criaturas, à sua escolha, num cubo de 12 metros [40 feet], dentro do alcance. Cada criatura deve ser bem sucedida num teste de resistência de Sabedoria ou será afetada por essa magia pela duração."
        },
        {
          "type": "default",
          "description": "O deslocamento de um alvo afetado é reduzido à metade, ele sofre –2 de penalidade na CA e nos testes de resistência de Destreza e não pode usar reações. No turno dele, ele pode usar ou uma ação ou uma ação bônus, mas não ambas. Independentemente das habilidades ou itens mágicos da criatura, ela não poderá realizar mais de um ataque corpo-a-corpo ou à distância durante o turno dela."
        },
        {
          "type": "default",
          "description": "Se a criatura tentar conjurar uma magia com tempo de conjuração maior que 1 rodada, jogue um d20. Se cair 11 ou maior, a magia não surte efeito até o próximo turno da criatura e a criatura deve usar sua ação nesse turno para completar a magia. Se ela não puder, a magia é perdida."
        },
        {
          "type": "default",
          "description": "Uma criatura afetada por essa magia faz outro teste de resistência de Sabedoria no final do turno dela. Se passar na resistência, o efeito acaba nela."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "180"
    }
  },
  {
    "name": "Leque Cromático",
    "originalName": "Color Spray",
    "level": 1,
    "school": "ilusão",
    "type": "1º nível de ilusão",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pitada de pó ou areia de cor vermelha, amarela e azul",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "rodadas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um feixe ofuscante de luzes coloridas ordenadas, surge da sua mão. Role 6d10; o total é a quantidade de pontos de vida de criaturas que essa magia pode afetar. As criaturas num cone de 4,5 metros [15-foot cone], originado de você, são afetadas em ordem ascendente dos seus pontos de vida (ignorando criaturas inconsciente e que não podem ver)."
        },
        {
          "type": "default",
          "description": "Começando com as criaturas que tiverem menos pontos de vida, cada criatura afetada por essa magia ficará cega até o fim da magia. Subtraia os pontos de vida de cada criatura do total antes de considerar os pontos de vida da próxima criatura. Os pontos de vida de uma criatura devem ser iguais ou menores que o total restante para que essa criatura seja afetada"
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, jogue 2d10 adicionais para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "125"
    }
  },
  {
    "name": "Levitação",
    "originalName": "Levitate",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pequena presilha de couro ou um pedaço de fio dourado dobrado em forma de copo com uma haste longa em uma extremidade",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma criatura ou objeto, à sua escolha, que você possa ver, dentro do alcance, ergue-se verticalmente, até 6 metros [20 feet] e permanece suspenso lá pela duração. A magia pode levitar um alvo pesando até 250 quilos. Uma criatura involuntária que for bem sucedida num teste de resistência de Constituição não é afetada"
        },
        {
          "type": "default",
          "description": "O alvo pode se mover apenas ao puxar ou empurrar um objeto fixo ou superfície ao seu alcance (como um muro ou teto), permitindo que ele se mova como se estivesse escalando. Você pode mudar a altitude do alvo em até 6 metros [20 feet] em ambas as direções no seu turno. Se você for o alvo, você pode se mover para cima ou para baixo como parte do seu movimento. Do contrário, você precisa usar sua ação para mover o alvo, que deve permanecer dentro do alcance da magia."
        },
        {
          "type": "default",
          "description": "Quando a magia acaba, o alvo flutua suavemente até o chão, se ele ainda estiver no ar."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "158"
    }
  },
  {
    "name": "Ligação Telepática",
    "originalName": "Telepathic Bond",
    "level": 5,
    "school": "adivinhação",
    "type": "5º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "pedaços de cascas de ovos de dois tipos diferentes de criatura",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você forja uma ligação telepática entre até oito criaturas voluntárias, à sua escolha, dentro do alcance, ligando psiquicamente cada criatura a todas as outras, pela duração. Criaturas com valores de Inteligência 2 ou menos não são afetadas por essa magia."
        },
        {
          "type": "default",
          "description": "Até a magia acabar, os alvos podem se comunicar telepaticamente através do elo, independentemente de terem ou não um idioma em comum. A comunicação é possível a qualquer distância, apesar de não se estender a outros planos de existência."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "185"
    }
  },
  {
    "name": "Limpar A Mente",
    "originalName": "Mind Blank",
    "level": 8,
    "school": "abjuração",
    "type": "8º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Até a magia acabar, uma criatura voluntária que você tocar fica imune a dano psíquico, a qualquer efeito que poderia sentir suas emoções ou ler seus pensamentos, a magias de adivinhação e a condição enfeitiçado. A magia pode até mesmo evitar a magia desejo e magias ou efeitos de poder similar usados para afetar a mente do alvo ou para adquirir informações sobre ele."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "164"
    }
  },
  {
    "name": "Localizar Animais Ou Plantas",
    "originalName": "Locate Animals Or Plants",
    "level": 2,
    "school": "adivinhação",
    "type": "2º nível de adivinhação",
    "isRitual": true,
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de pelo de um cão de caça",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Descreva ou nomeie um tipo especifico de besta ou planta. Concentre-se na voz da natureza ao seu redor, você descobre a direção e distância da criatura ou planta mais próxima desse tipo dentro de 7,5 quilômetros [5 miles], se houver alguma presente."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "159"
    }
  },
  {
    "name": "Localizar Criatura",
    "originalName": "Locate Creature",
    "level": 4,
    "school": "adivinhação",
    "type": "4º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida",
      "mago",
      "paladino",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de pelo de um cão de caça",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Descreva ou nomeie uma criatura que seja familiar a você. Você sente a direção da localização da criatura, contanto que a criatura esteja a até 300 metros de você. Se a criatura se mover, você saberá a direção do movimento dela."
        },
        {
          "type": "default",
          "description": "A magia pode localizar uma criatura especifica que você conheça ou a criatura mais próxima de um tipo especifico (como um humano ou um unicórnio), desde que você já tenha visto tal criatura de perto – a até 9 metros [30 feet] – pelo menos uma vez. Se a criatura que você descreveu ou nomeou estiver em uma forma diferente, como se estiver sob efeito da magia metamorfose, essa magia não localizará a criatura."
        },
        {
          "type": "default",
          "description": "Essa magia não pode localizar uma criatura se água corrente de, pelo menos 3 metros [10 feet] de largura, bloquear o caminho direito entre você e a criatura."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "159"
    }
  },
  {
    "name": "Localizar Objeto",
    "originalName": "Locate Object",
    "level": 2,
    "school": "adivinhação",
    "type": "2º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida",
      "mago",
      "paladino",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um galho bifurcado",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Descreva ou nomeie um objeto que seja familiar a você. Você sente a direção da localização do objeto, contanto que o objeto esteja a até 300 metros de você. Se o objeto estiver em movimento, você saberá a direção do movimento dele."
        },
        {
          "type": "default",
          "description": "A magia pode localizar um objeto especifico que você, desde que você já tenha o visto de perto – a até 9 metros [30 feet] – pelo menos uma vez. Alternativamente, a magia pode localizar o objeto de um tipo em particular mais próximo, como certo tipo de vestuário, joia, móvel, ferramenta ou arma."
        },
        {
          "type": "default",
          "description": "Essa magia não pode localizar um objeto se qualquer espessura de chumbo, até mesmo uma folha fina, bloquear o caminho direto entre você e o objeto."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "159"
    }
  },
  {
    "name": "Loquacidade",
    "originalName": "Glibness",
    "level": 5,
    "school": "transmutação",
    "type": "5º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Até o fim da magia, quando você realizar um teste de Carisma, você pode substituir o número rolado por você por um 15. Além disso, não importa o que você diga, magias que determinam se você está dizendo a verdade indicarão que você está sendo sincero."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "149"
    }
  },
  {
    "name": "Lufada De Vento",
    "originalName": "Gust Of Wind",
    "level": 2,
    "school": "evocação",
    "type": "2º nível de evocação",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma semente de legume",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma linha de vento forte, com 18 metros [60 feet] de comprimento e 3 metros [10 feet] de largura, é soprada de você em uma direção, à sua escolha, pela duração da magia. Cada criatura que começar seu turno na linha, deve ser bem sucedida num teste de resistência de Força ou será empurrada 4,5 metros [15 feet] para trás, na direção seguida pela linha. Qualquer criatura na linha deve gastar 3 metros [10 feet] de movimentação para cada 1,5 metro [5 feet] que ela se mover enquanto se aproxima de você."
        },
        {
          "type": "default",
          "description": "As lufadas dispersam gases ou vapores e apagam velas, tochas e chamas similares desprotegidas na área. Elas fazem com que chamas protegidas, como as de lanternas, vibrem descontroladamente e tenham 50 por cento de chance de serem extintas."
        },
        {
          "type": "default",
          "description": "Com uma ação bônus, em cada um dos seus turnos, antes da magia acabar, você pode mudar a direção à qual a linha é soprada de você."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "152"
    }
  },
  {
    "name": "Luz",
    "originalName": "Light",
    "level": 0,
    "school": "evocação",
    "type": "truque de evocação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": true,
      "material": {
        "description": "um vaga-lume ou musgo fosforescente",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca um objeto que não tenha mais 3 metros [10 feet] em qualquer dimensão. Até a magia acabar, o objeto emite luz plena num raio de 6 metros [20 feet] e penumbra por 6 metros [20 feet] adicionais. Cobrir o objeto completamente com alguma coisa opaca bloqueará a luz. A magia termina se você conjura-la novamente ou dissipa-la com uma ação."
        },
        {
          "type": "default",
          "description": "Se você tentar afetar um objeto segurado ou vestido por uma criatura hostil, a criatura deve ser bem sucedida num teste de Destreza para evitar a magia."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "159"
    }
  },
  {
    "name": "Luz Do Dia",
    "originalName": "Daylight",
    "level": 3,
    "school": "evocação",
    "type": "3º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida",
      "feiticeiro",
      "paladino",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma esfera de luz, com 18 metros [60 feet] de raio, se espalha a partir de um ponto, à sua escolha, dentro do alcance. A esfera produz luz plena num raio de 18 metros [60 feet] e penumbra por 18 metros [60 feet] adicionais."
        },
        {
          "type": "default",
          "description": "Se você escolher um ponto em um objeto que você esteja segurando, ou um que não esteja sendo vestido ou carregado, a luz brilha a partir do objeto e se move com ele. Cobrir completamente o objeto afetado com um objeto opaco, como uma vasilha ou um elmo, bloqueará a luz."
        },
        {
          "type": "default",
          "description": "Se qualquer área dessa magia sobrepor uma área de escuridão criada por uma magia de 3° ou inferior, a magia que criou a escuridão será dissipada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "133"
    }
  },
  {
    "name": "Malogro",
    "originalName": "Blight",
    "level": 4,
    "school": "necromancia",
    "type": "4º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bruxo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Energia necromântica inunda uma criatura à sua escolha que você possa ver dentro do alcance, drenando sua umidade e vitalidade. O alvo deve realizar um teste de resistência de Constituição. O alvo sofre 8d8 de dano necrótico se falhar no teste, ou metade desse dano se obtiver sucesso. Essa magia não surte efeito em mortos-vivos ou construtos."
        },
        {
          "type": "default",
          "description": "Se você afetar uma criatura do tipo planta ou planta mágica, ela faz seu teste de resistência com desvantagem, e a magia causa o máximo de dano a ela."
        },
        {
          "type": "default",
          "description": "Se você afetar uma planta não-mágica que não seja uma criatura, como uma árvore ou arbusto, ele não faz um teste de resistência; ela simplesmente seca e morre."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 4°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "122"
    }
  },
  {
    "name": "Mansão Magnífica",
    "originalName": "Magnificent Mansion",
    "level": 7,
    "school": "conjuração",
    "type": "7º nível de conjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 91,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um portal em miniatura esculpido em marfim, um pedaço de mármore polido e uma pequena colher de prata",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você conjura uma residência extra-dimensional, dentro do alcance, que permanece pela duração. Você escolhe onde sua única entrada é localizada. A entrada brilha discretamente e tem 1,5 metro [5 feet] de largura por 3 metros [10 feet] de altura. Você e qualquer criatura que você designou, quando conjurou a magia, pode entrar na residência extra-dimensional enquanto o portal permanecer aberto. Você pode abrir ou fechar o portal se estiver a até 9 metros [30 feet] dele. Enquanto estiver fechado, o portal é invisível."
        },
        {
          "type": "default",
          "description": "Além do portal existe um magnifico salão com inúmeros aposentos. A atmosfera é limpa, fresca e morna."
        },
        {
          "type": "default",
          "description": "Você pode criar qualquer projeto de piso que quiser, mas o espaço não pode exceder 50 cubos, cada cubo tendo 3 metros [10 feet] de cada lado. O local é mobiliado e decorado como você desejar. Ele contém comida suficiente para servir nove banquetes para até 100 pessoas. Uma equipe de 100 servos quase-transparentes atende todos que entrarem. Você decide a aparência visual dos servos e o vestuário deles. Eles são completamente obedientes as suas ordens. Cada servo pode realizar qualquer tarefa que um servo humano comum poderia fazer, mas eles não podem atacar ou realizar qualquer ação que poderia causar maleficio direto a outra criatura. Portanto, os servos podem buscar coisas, limpar, remendar, dobrar roupas, acender lareiras, servir comida, despejar vinho e assim por diante. Os servos podem ir a qualquer lugar na mansão, mas não podem deixá-la. Mobília e outros objetos criados por essa magia viram fumaça se forem removidos da mansão. Quando a magia acabar, qualquer criatura dentro do espaço extra-dimensional é expelida para o espaço vago mais próximo da entrada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "162"
    }
  },
  {
    "name": "Mão Arcana",
    "originalName": "Arcane Hand",
    "level": 5,
    "school": "evocação",
    "type": "5º nível de evocação",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma casca de ovo e uma luva de couro de cobra",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma mão Grande de energia cintilante e translucida em um espaço desocupado que você possa ver dentro do alcance. A mão permanece pela duração da magia e ela se move ao seu comando, imitando os movimentos da sua própria mão."
        },
        {
          "type": "default",
          "description": "A mão é um objeto com CA 20 e pontos de vida igual ao seu máximo de pontos de vida. Se ela cair a 0 pontos de vida, a magia termina. Ela tem Força 26 (+8) e Destreza 10 (+0). A mão não preenche o espaço dela."
        },
        {
          "type": "default",
          "description": "Quando você conjura essa magia você pode, com uma ação bônus, nos seus turnos subsequentes, mover a mão até 18 metros [60 feet] e então causar um dos seguintes efeitos com ela."
        },
        {
          "type": "option",
          "value": "Mão Esmagadora",
          "description": "Mão Esmagadora. A mão tenta agarrar uma criatura Enorme ou menor a 1,5 metro [5 feet] dela. Você usa o valor de Força da mão para determinar o agarrão. Se o alvo for Médio ou menor, você terá vantagem no teste. Enquanto a mão estiver agarrando o alvo, você pode usar uma ação bônus para fazer a mão esmaga-lo. Quando o fizer, o alvo sofre dano de concussão igual a 2d6 + seu modificador de habilidade de conjuração."
        },
        {
          "type": "option",
          "value": "Mão Interposta",
          "description": "Mão Interposta. A mão se interpõe entre você e uma criatura a sua escolha até você lhe dar um comando diferente. A mão se move para ficar entre você e o alvo, concedendo a você meia-cobertura contra o alvo. O alvo não pode se mover através do espaço da mão se o valor de Força dele for menor ou igual ao valor de Força da mão. Se o valor de Força dele for maior que o valor de Força da mão, o alvo pode se mover até você através do espaço da mão, mas aquele espaço será considerado terreno difícil para o alvo."
        },
        {
          "type": "option",
          "value": "Mão Poderosa",
          "description": "Mão Poderosa. A mão tenta empurrar uma criatura a 1,5 metro [5 feet] dela em uma direção a sua escolha. Realize um teste com a Força da mão, resistido por um teste de Força (Atletismo) do alvo. Se o alvo for Médio ou menor, você tem vantagem no teste. Se você for bem sucedido, a mão empurra o alvo até 1,5 metro [5 feet] mais uma quantidade de metros igual ao modificador da sua habilidade de conjuração multiplicado por 1,5. A mão se move com o alvo, permanecendo a 1,5 metro [5 feet] dele."
        },
        {
          "type": "option",
          "value": "Punho Cerrado",
          "description": "Punho Cerrado. A mão golpeia uma criatura ou objeto a 1,5 metro [5 feet] dela. Realize uma jogada de ataque corpo-a-corpo com magia para a mão usando suas estatísticas de jogo. Se atingir, o alvo sofre 4d8 de dano de energia."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano da opção punho cerrado aumenta em 2d8 e o dano da mão esmagadora aumenta em 2d6 para cada nível do espaço acima do 5°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "118"
    }
  },
  {
    "name": "Mãos Flamejantes",
    "originalName": "Burning Hands",
    "level": 1,
    "school": "evocação",
    "type": "1º nível de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago",
      "o corruptor"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Conforme você segura suas mãos com os polegares se tocando e os dedos abertos, uma fina camada de chamas emerge das pontas dos seus dedos estendidos. Cada criatura em um cone de 4,5 metros [15-foot cone] deve realizar um teste de resistência de Destreza. Uma criatura sofre 3d6 de dano de fogo se falhar no teste, ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "default",
          "description": "O fogo incendeia qualquer objeto inflamável na área que não esteja sendo vestido ou carregado."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "123"
    }
  },
  {
    "name": "Mãos Mágicas",
    "originalName": "Mage Hand",
    "level": 0,
    "school": "conjuração",
    "type": "truque de conjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma mão espectral flutuante aparece num ponto, à sua escolha, dentro do alcance. A mão permanece pela duração ou até você dissipa-la com uma ação. A mão some se estiver a mais de 9 metros [30 feet] de você ou se você conjurar essa magia novamente."
        },
        {
          "type": "default",
          "description": "Você pode usar sua ação para controlar a mão. Você pode usar a mão para manipular um objeto, abrir uma porta ou recipiente destrancado, guardar ou pegar um item de um recipiente aberto ou derramar o conteúdo de um frasco. Você pode mover a mão até 9 metros [30 feet] a cada vez que a usa."
        },
        {
          "type": "default",
          "description": "A mão não pode atacar, ativar itens mágicos ou carregar mais de 5 quilos [10 pounds]."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "160"
    }
  },
  {
    "name": "Marca Da Punição",
    "originalName": "Branding Smite",
    "level": 2,
    "school": "evocação",
    "type": "2º nível de evocação",
    "isRitual": false,
    "classes": [
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Da próxima vez que você atingir uma criatura com um ataque com arma, antes do fim da magia, a arma cintilará com radiação astral quando você golpear. O ataque causa 2d6 de dano radiante extra ao alvo, que se torna visível, se estava invisível, e o alvo emite penumbra em um raio de 1,5 metro [5-foot radius] e não pode ficar invisível até a magia acabar."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano extra aumenta em 1d6 para cada nível do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "123"
    }
  },
  {
    "name": "Marca Do Caçador",
    "originalName": "Hunter's Mark",
    "level": 1,
    "school": "adivinhação",
    "type": "1º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você escolhe uma criatura que possa ver, dentro do alcance e a marca misticamente como sua presa. Até a magia acabar, você causa 1d6 de dano extra ao alvo sempre que você o atingir com um ataque com arma e você tem vantagem em quaisquer testes de Sabedoria (Percepção) ou Sabedoria (Sobrevivência) feitos para encontrá-la. Se o alvo cair a 0 pontos de vida antes da magia acabar, você pode usar uma ação bônus, no seu turno subsequente para marcar uma nova criatura."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° ou 4° nível, você poderá manter sua concentração na magia por até 8 horas. Quando você usar um espaço de magia de 5° nível ou superior, você poderá manter sua concentração na magia por até 24 horas."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "155"
    }
  },
  {
    "name": "Medo",
    "originalName": "Fear",
    "level": 3,
    "school": "ilusão",
    "type": "3º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pena branca ou o coração de uma galinha",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você projeta uma imagem fantasmagórica dos piores medos de uma criatura. Cada criatura num cone de 9 metros [30-foot cone] deve ser bem sucedida num teste de resistência de Sabedoria ou largara o que quer que esteja segurando e ficará amedrontada pela duração."
        },
        {
          "type": "default",
          "description": "Enquanto estiver amedrontada por essa magia, uma criatura deve usar a ação de Disparada e fugir de você pela rota mais curta disponível em cada um dos turnos dela, a não ser que não haja lugar para onde se mover. Se a criatura terminar o turno dela em um local onde ela não tenha linha de visão sua, a criatura pode realizar um teste de resistência de Sabedoria. Se obtiver sucesso, a magia termina naquela criatura."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "142"
    }
  },
  {
    "name": "Mensageiro Animal",
    "originalName": "Animal Messenger",
    "level": 2,
    "school": "encantamento",
    "type": "2º nível de encantamento",
    "isRitual": true,
    "classes": [
      "bardo",
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um bocado de comida",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Através dessa magia, você usa um animal para entregar uma mensagem. Escolha uma besta Miúda que você possa ver dentro do alcance, como um esquilo, um gaio-azul ou um morcego. Você especifica um local, que você já deve ter visitado, e um remetente com uma descrição geral, como “um homem ou mulher vestido em um uniforme da guarda da cidade” ou “um anão ruivo vestindo um chapéu pontudo”. Você também fala uma mensagem com até vinte e cindo palavras. A besta alvo viaja pela duração da magia para o local especifico, cobrindo 75 quilômetros [50 miles] em 24 horas para um mensageiro voador ou 37,5 quilômetros [25 miles] para outros animais."
        },
        {
          "type": "default",
          "description": "Quando o mensageiro chegar, ele entrega sua mensagem para a criatura que você descreveu, repetindo o som da sua voz. O mensageiro fala apenas para uma criatura que tenha uma descrição compatível com a que ele recebeu. Se o mensageiro não alcançar o destino antes do fim da magia, a mensagem é perdida e a besta faz seu caminho de volta para onde você conjurou a magia."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 3° nível ou superior, a duração da magia aumenta em 48 horas para cada nível do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "115"
    }
  },
  {
    "name": "Mensagem",
    "originalName": "Message",
    "level": 0,
    "school": "transmutação",
    "type": "truque de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pedaço curto de fio de cobre",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "rodadas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você aponta seu dedo para uma criatura dentro do alcance e sussurra uma mensagem. O alvo (e apenas ele) ouvi a mensagem e pode responder com um sussurro que apenas você pode ouvir."
        },
        {
          "type": "default",
          "description": "Você pode conjurar essa magia através de objetos sólidos se você tiver familiaridade com o alvo. Silêncio mágico, 30 centímetros [1 foot] de rocha, 2,5 centímetros [1 inch] de metal comum, uma fina camada de chumbo, ou 90 centímetros [3 feet] de madeira ou terra bloqueiam a magia. A magia não precisa seguir uma linha reta e pode viajar livremente, dobrando esquinas ou através de aberturas."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "164"
    }
  },
  {
    "name": "Metamorfose",
    "originalName": "Polymorph",
    "level": 4,
    "school": "transmutação",
    "type": "4º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um casulo de lagarta",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia transforma uma criatura que você possa ver, dentro do alcance, em uma nova forma. Uma criatura involuntária deve realizar um teste de resistência de Sabedoria para evitar o efeito. Um metamorfo obtém sucesso automaticamente nesse teste de resistência."
        },
        {
          "type": "default",
          "description": "A transformação permanece pela duração, ou até o alvo cair a 0 pontos de vida ou morrer. A nova forma pode ser qualquer besta a qual o nível de desafio seja igual ou menor que o do alvo (ou o nível do alvo, se ele não possuir um nível de desafio). As estatísticas de jogo do alvo, incluindo seus valores de habilidades mentais, são substituídas pelas estatísticas da besta escolhida. Ele mantém sua tendência e personalidade."
        },
        {
          "type": "default",
          "description": "O alvo assume os pontos de vida da sua nova forma. Quando ele reverter a sua forma normal, a criatura retorna à quantidade de pontos de vida que ela tinha antes da transformação. Se ela reverter como resultado de ter caído a 0 pontos de vida, qualquer dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da forma normal da criatura a 0, ela não cairá inconsciente. Essa magia não pode afetar um alvo com 0 pontos de vida."
        },
        {
          "type": "default",
          "description": "A criatura é limitada em suas ações pela natureza da sua nova forma e ela não pode falar, conjurar magias ou realizar qualquer outra ação que precise de mãos ou de vocalização."
        },
        {
          "type": "default",
          "description": "O equipamento do alvo mescla-se a sua nova forma. O alvo não pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "169"
    }
  },
  {
    "name": "Metamorfose Verdadeira",
    "originalName": "True Polymorph",
    "level": 9,
    "school": "transmutação",
    "type": "9º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma gota de mercúrio, uma porção de goma arábica e um pouco de fumaça",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha uma criatura ou objeto não-mágico que você possa ver, dentro do alcance. Você transforma a criatura em uma criatura diferente, a criatura em um objeto ou o objeto em uma criatura (o objeto não pode nem estar sendo vestido nem carregado por outra criatura). A transformação permanece pela duração ou até o alvo cair a 0 pontos de vida ou morrer. Se você se concentrar nessa magia por toda a duração, a transformação será permanente."
        },
        {
          "type": "default",
          "description": "Metamorfos não são afetados por essa magia. Uma criatura involuntária pode realizar um teste de resistência de Constituição e, se for bem sucedida, não será afetada por essa magia."
        },
        {
          "type": "option",
          "value": "Criatura em Criatura",
          "description": "Criatura em Criatura. Se você transformar uma criatura em outro tipo de criatura, a nova forma pode ser de qualquer tipo que você desejar, contanto que o nível de desafio seja igual ou menor que o do alvo (ou o nível dele, caso o alvo não possua nível de desafio). As estatísticas de jogo do alvo, incluindo seus valores de habilidades mentais, são substituídas pelas estatísticas da nova forma. Ele mantém sua tendência e personalidade."
        },
        {
          "type": "default",
          "description": "O alvo assume os pontos de vida da sua nova forma e, quando ela reverter a sua forma normal, a criatura retorna à quantidade de pontos de vida que ela tinha antes da transformação. Se ela reverter como resultado de ter caído a 0 pontos de vida, qualquer dano excedente é recebido pela sua forma normal. Contato que o dano excedente não reduza os pontos de vida da forma normal da criatura a 0, ela não cairá inconsciente. Essa magia não pode afetar um alvo com 0 pontos de vida."
        },
        {
          "type": "default",
          "description": "A criatura é limitada em suas ações pela natureza da sua nova forma e ela não pode falar, conjurar magias ou realizar qualquer outra ação que precise de mãos ou de vocalização, a não ser que a nova forma seja capaz de tais ações."
        },
        {
          "type": "default",
          "description": "O equipamento do alvo mescla-se a sua nova forma. O alvo não pode ativar, empunhar ou, de outra forma, se beneficiar de qualquer de seus equipamentos."
        },
        {
          "type": "option",
          "value": "Objeto em Criatura",
          "description": "Objeto em Criatura. Você pode transformar um objeto em um tipo de criatura, contanto que o tamanho da criatura não seja maior que o tamanho do objeto e, o nível de desafio da criatura será 9 ou menor. A criatura é amigável a você e aos seus companheiros. Ela age em cada um dos seus turnos. Você decide qual ação ela realizará e como ela se move. O Mestre tem as estatísticas da criatura e resolve todas as ações e movimentos dela."
        },
        {
          "type": "default",
          "description": "Se a magia se tornar permanente, você não terá mais controle sobre a criatura. Ele pode continuar amigável a você, dependendo da forma como você a tratou."
        },
        {
          "type": "option",
          "value": "Criatura em Objeto",
          "description": "Criatura em Objeto. Se você transformar uma criatura em um objeto, ela se transformará, junto com tudo que estiver vestindo ou carregando, nessa forma. As estatísticas da criatura tornam-se as do objeto e a criatura não se lembrará do tempo que passou nessa forma, depois da magia acabar e ela retornar a sua forma normal."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "188"
    }
  },
  {
    "name": "Miragem",
    "originalName": "Mirage Arcane",
    "level": 7,
    "school": "ilusão",
    "type": "7º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "druida",
      "mago"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "linha de visão"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "dias",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você faz um terreno em uma área de até 1,5 quilômetro [1 mile] quadrados pareça, soe, cheire e, até, sinta com outro tipo de terreno natural. Os formatos gerais do terreno permanecem os mesmos, no entanto. Campos abertos ou uma estrada podem ser modificados para se assemelharem a um pântano, colina, fenda ou algum outro tipo de terreno difícil ou intransponível. Uma lagoa pode ser modificada para se parecer com um prado, um precipício com um declive suave ou um barranco pedregoso com uma estrada larga e lisa."
        },
        {
          "type": "default",
          "description": "Similarmente, você pode alterar a aparência de estruturas ou adiciona-las onde nenhuma existia. A magia não disfarça, esconde ou adiciona criaturas."
        },
        {
          "type": "default",
          "description": "A ilusão inclui elementos audíveis, visuais, táteis e olfativos, portanto, ela pode transformar solo limpo em terreno difícil (ou vice-versa) ou, de outra forma, impedir o movimento através da área. Qualquer porção de terreno ilusório (como uma rocha ou galho) que seja removida da área da magia desaparece imediatamente."
        },
        {
          "type": "default",
          "description": "Criaturas com visão verdadeira podem ver através da ilusão a verdadeira forma do terreno; porém, todos os outros elementos da ilusão permanecem, então, mesmo que a criatura esteja ciente da presença da ilusão, ela ainda interage fisicamente com a ilusão."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "165"
    }
  },
  {
    "name": "Missão",
    "originalName": "Geas",
    "level": 5,
    "school": "encantamento",
    "type": "5º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida",
      "mago",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 30,
      "unit": "dias",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você impõe um comando mágico a uma criatura que você possa ver, dentro do alcance, forçando-a a fazer algum serviço ou reprimindo-a por alguma ação ou curso de atividade, como você decidir. Se a criatura puder compreender você, ela deve ser bem sucedida num teste de resistência de Sabedoria ou ficará enfeitiçada por você pela duração. Enquanto a criatura estiver enfeitiçada por você, ela sofrerá 5d6 de dano psíquico toda vez que ela agir de maneira diretamente contrária às suas instruções, mas não mais de uma vez por dia. Uma criatura que não puder compreender você não é afetada por essa magia."
        },
        {
          "type": "default",
          "description": "Você pode emitir qualquer comando que escolher, exceto uma atividade que resulte em morte certa. Se você emitir um comando suicida, a magia termina."
        },
        {
          "type": "default",
          "description": "Você pode terminar a magia prematuramente usando uma ação para dissipa-la. As magias remover maldição, restauração maior ou desejo também podem terminá-la."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° ou 8° nível, a duração será 1 ano. Quando você conjurar essa magia usando um espaço de magia de 9° nível, a magia dura até ser terminada por uma das magias mencionadas acima."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "148"
    }
  },
  {
    "name": "Mísseis Mágicos",
    "originalName": "Magic Missile",
    "level": 1,
    "school": "evocação",
    "type": "1º nível de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria três dardos brilhantes de energia mística. Cada dardo atinge uma criatura, à sua escolha, que você possa ver, dentro do alcance. Um dardo causa 1d4 + 1 de dano de energia ao alvo. Todos os dardos atingem simultaneamente e você pode direciona-los para atingir uma criatura ou várias."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a magia cria um dardo adicional para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "161"
    }
  },
  {
    "name": "Modificar Memória",
    "originalName": "Modify Memory",
    "level": 5,
    "school": "encantamento",
    "type": "5º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você tenta modelar as memórias de outra criatura. Uma criatura que você possa ver, deve realizar um teste de resistência de Sabedoria. Se você estiver lutando com a criatura, ela terá vantagem no teste de resistência. Se falhar na resistência, o alvo fica enfeitiçado por você pela duração. O alvo enfeitiçado está incapacitado e não sabe o que está acontecendo seu redor, apesar de ainda poder ouvir você. Se ele sofrer qualquer dano ou for alvo de outra magia, essa magia acaba, e nenhuma das memórias do alvo é modificada."
        },
        {
          "type": "default",
          "description": "Enquanto esse feitiço durar, você pode afetar a memória sobre um evento que o alvo participou nas últimas 24 horas e que não tenha durado mais de 10 minutos. Você pode, permanentemente, eliminar todas as memórias desse evento, permitir que o alvo relembre do evento com perfeita clareza e riqueza de detalhes, mudar sua memória sobre os detalhes do evento ou criar uma memória de outro evento qualquer."
        },
        {
          "type": "default",
          "description": "Você deve falar ao alvo para descrever como sua memória é afetada e ele deve ser capaz de compreender seu idioma para que as memórias modificadas se enraízem. A mente dele preenche qualquer lacuna nos detalhes da sua descrição. Se a magia terminar antes de você ter finalizado a descrição das memórias modificadas, a memória da criatura não será alterada. Do contrário, as memórias modificadas tomam lugar quando a magia acabar."
        },
        {
          "type": "default",
          "description": "Uma memória modificada não afeta, necessariamente, como uma criatura se comporta, particularmente se a memória contradiz as inclinações, tendência ou crenças naturais da criatura. Uma modificação ilógica na memória, como implantar uma memória de como a criatura gosta de se encharcar de ácido, é repudiada, talvez como um sonho ruim. O Mestre pode considerar uma modificação na memória muito absurda para afetar uma criatura de uma forma significativa."
        },
        {
          "type": "default",
          "description": "Uma magia remover maldição ou restauração maior, conjurada no alvo, restaura a verdadeira memória da criatura."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, você pode alterar a memória do alvo de um evento que aconteceu a até 7 dias atrás (6° nível), 30 dias atrás (7° nível), 1 ano atrás (8° nível) ou em qualquer momento do passado da criatura (9° nível)."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "166"
    }
  },
  {
    "name": "Moldar Rochas",
    "originalName": "Stone Shape",
    "level": 4,
    "school": "transmutação",
    "type": "4º nível de transmutação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "barro mole, que deve ser trabalhado aproximadamente com a forma desejada para o objeto de pedra",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca um objeto de pedra de tamanho Médio ou menor, ou uma seção de rocha com não mais de 1,5 metro [5 feet] em qualquer dimensão e modela-a em qualquer forma que sirva aos seus propósitos. Então, por exemplo, você poderia modelar uma pedra grande em uma arma, ídolo ou caixão, ou fazer uma pequena passagem através de um muro, contanto que o muro não tenha mais de 1,5 metro [5 feet] de espessura. Você poderia, também, modelar uma porta de pedra ou sua moldura para selar a porta. O objeto que você cria pode ter até duas dobradiças e um trinco, mas detalhes mecânicos mais complexos não são possíveis."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "183"
    }
  },
  {
    "name": "Montaria Fantasmagórica",
    "originalName": "Phantom Steed",
    "level": 3,
    "school": "ilusão",
    "type": "3º nível de ilusão",
    "isRitual": true,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma criatura Grande, quase-real, similar a um cavalo, aparece no solo em um espaço desocupado, à sua escolha, dentro do alcance. Você decide a aparência da criatura, mas ela é equipada com sela, estribo e arreio. Qualquer equipamento criado por essa magia vira fumaça caso se afaste a mais de 3 metros [10 feet] da montaria."
        },
        {
          "type": "default",
          "description": "Pela duração, você ou a criatura que você escolher, pode cavalgar a montaria. A criatura usa as estatísticas de um cavalo de montaria, exceto por seu deslocamento ser de 30 metros [100 feet] e poder viajar 15 quilômetros [10 miles] em uma hora, ou 20 quilômetros [13 miles] em um ritmo rápido. Quando a magia acaba, a montaria desaparece gradualmente, dando ao cavaleiro 1 minuto para desmontar. A magia acaba se você usar uma ação para dissipa-la ou se a montaria sofrer qualquer dano."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "167"
    }
  },
  {
    "name": "Mover Terra",
    "originalName": "Move Earth",
    "level": 6,
    "school": "transmutação",
    "type": "6º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma lâmina de ferro e uma pequena sacola contendo uma mistura de solos – argila, barro e areia",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 2,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha uma área de terreno não maior que 12 metros [40 feet] de lado, dentro do alcance. Você pode remodelar terra, areia ou barro na área da maneira que quiser, pera duração. Você pode erguer ou abaixar a elevação da área, criar ou preencher valas, levantar ou deitar um muro ou formar uma coluna. A extensão de tais mudanças não pode exceder metade da maior dimensão da área. Portanto, se você afetar um quadrado de 12 metros [40-foot square], você poderá criar um pilar de até 6 metros de altura [20-foot-tall], erguer ou abaixar a elevação do quadrado em até 6 metros [20 feet] ou cavar uma vala de até 6 metros [20 feet] de profundidade e assim por diante. Leva 10 minutos para completar essas modificações."
        },
        {
          "type": "default",
          "description": "Ao final de cada 10 minutos que você gastar se concentrando nessa magia, você pode escolher uma nova área de terreno para afetar."
        },
        {
          "type": "default",
          "description": "Devido às transformações no terreno ocorrerem lentamente, as criaturas na área normalmente não podem ficar presas ou sofrer dano pela movimentação do solo."
        },
        {
          "type": "default",
          "description": "Essa magia pode manipular rocha natural ou construções de pedra. Pedra e estruturas deslocam-se para acomodar o novo terreno. Se a forma pela qual você modela o terreno poderia tornar uma estrutura instável, ela poderá desmoronar."
        },
        {
          "type": "default",
          "description": "Similarmente, essa magia não afeta diretamente o crescimento da vegetação. A terra movida carrega quaisquer plantas no caminho junto com ela."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "166"
    }
  },
  {
    "name": "Movimentação Livre",
    "originalName": "Freedom Of Movement",
    "level": 4,
    "school": "abjuração",
    "type": "4º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida",
      "patrulheiro",
      "juramento da devoção"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma fita de couro, enrolada no braço ou apêndice similar",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura voluntária. Pela duração, os movimentos do alvo não são afetados por terreno difícil e magias e outros efeitos mágicos também não podem reduzir o deslocamento do alvo ou fazer com que o alvo fique paralisado ou impedido."
        },
        {
          "type": "default",
          "description": "O alvo também pode gastar 1,5 metro [5 feet] de deslocamento para escapar, automaticamente, de impedimentos não-mágicos, como algemas ou o agarrão de uma criatura. Finalmente, estar submerso não impõe penalidades no deslocamento ou ataques do alvo."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "147"
    }
  },
  {
    "name": "Muralha De Energia",
    "originalName": "Wall Of Force",
    "level": 5,
    "school": "evocação",
    "type": "5º nível de evocação",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de pó feito de uma gema transparente esmagada",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma muralha invisível de energia aparece do nada em um ponto à sua escolha dentro do alcance. A muralha aparece em qualquer orientação que você escolher, como uma barreira horizontal ou vertical ou em uma angulação. Ela pode estar flutuando no ar ou apoiada em uma superfície sólida. Você pode formá-la em uma cúpula hemisférica ou uma esfera com um raio de até 3 metros [10 feet], ou você pode moldar uma superfície plana composta de dez painéis de 3 metros por 3 metros [10-foot-by-10-foot]. Cada painel deve ser contíguo com outro painel. Em qualquer formato, a muralha terá 0,6 centímetros [1/4 inch] de espessura. Ela permanece pela duração. Se a muralha passar pelo espaço ocupado por uma criatura, quando ela surgir, a criatura será empurrada para um dos lados da muralha (você escolhe qual lado)."
        },
        {
          "type": "default",
          "description": "Nada pode passar fisicamente através da muralha. Ela é imune a todos os danos e não pode ser dissipada por dissipar magia. A magia desintegrar destrói a muralha instantaneamente, no entanto. A muralha também se estende ao Plano Etéreo, bloqueando a viagem etérea através dela."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "190"
    }
  },
  {
    "name": "Muralha De Espinhos",
    "originalName": "Wall Of Thorns",
    "level": 6,
    "school": "conjuração",
    "type": "6º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um punhado de espinhos",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma muralha de arbustos robustos, flexíveis, emaranhados e eriçados com espinhos pontudos. A muralha aparece, dentro do alcance, em uma superfície sólida e permanece pela duração. Você escolher fazer a muralha com até 18 metros [60 feet] de comprimento, 3 metros [10 feet] de altura e 1,5 metro [5 feet] de espessura ou um círculo com 6 metros [20 feet] de diâmetro e até 6 metros de altura [20-foot-tall] com 1,5 metro [5 feet] de espessura. A muralha bloqueia a visão."
        },
        {
          "type": "default",
          "description": "Quando a muralha aparece, cada criatura dentro da área deve realizar um teste de resistência de Destreza. Se falhar na resistência, uma criatura sofrerá 7d8 de dano perfurante ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "default",
          "description": "Uma criatura pode se mover através da muralha, embora lentamente e dolorosamente. Para cada 1,5 metro [5 feet] que a criatura atravesse da muralha, ela deve gastar 6 metros [20 feet] de movimento. Além disso, a primeira vez que a criatura entrar na muralha num turno ou termina o turno nela, ela deve fazer um teste de resistência de Destreza. Ela sofre 7d8 de dano cortante se falhar na resistência ou metade desse dano se obtiver sucesso."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, ambos os tipos de dano aumentam em 1d8 para cada nível do espaço acima do 6°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "191"
    }
  },
  {
    "name": "Muralha De Fogo",
    "originalName": "Wall Of Fire",
    "level": 4,
    "school": "evocação",
    "type": "4º nível de evocação",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago",
      "o corruptor"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pequeno pedaço de fósforo",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma muralha de fogo numa superfície sólida dentro do alcance. Você pode fazer uma muralha de até 18 metros [60 feet] de comprimento, 6 metros de altura [20-foot-tall] e 30 centímetros [1 foot] de espessura ou uma muralha anelar de até 6 metros [20 feet] de diâmetro, 6 metros de altura [20-foot-tall] e 30 centímetros [1 foot] de espessura. A muralha é opaca e permanece pela duração."
        },
        {
          "type": "default",
          "description": "Quando a muralha aparece, cada criatura dentro da área dela deve realizar um teste de resistência de Destreza. Se falhar na resistência, uma criatura sofrerá 5d8 de dano, ou metade desse dano se passar na resistência."
        },
        {
          "type": "default",
          "description": "Um lado da muralha, escolhido por você no momento da conjuração da magia, causa 5d8 de dano de fogo a cada criatura que terminar o turno dela a até 3 metros [10 feet] desse lado ou dentro da muralha. Uma criatura sofre o mesmo dano quando entra na muralha pela primeira vez num turno ou termina seu turno nela. O outro lado da muralha não causa dano algum."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 4°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "190"
    }
  },
  {
    "name": "Muralha De Gelo",
    "originalName": "Wall Of Ice",
    "level": 6,
    "school": "evocação",
    "type": "6º nível de evocação",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pequeno pedaço de quartzo",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma muralha de gelo numa superfície sólida dentro do alcance. Você pode molda-la em uma cúpula hemisférica ou uma esfera com um raio de até dez painéis de 3 metros [10 feet] por 3 metros [10 feet]. Cada painel deve ser contíguo com outro painel. Em qualquer formato, a muralha terá 30 centímetros [1 foot] de espessura. Ela permanece pela duração."
        },
        {
          "type": "default",
          "description": "Se a muralha passar pelo espaço ocupado por uma criatura quando ela surgir, a criatura na área será empurrada para um dos lados da muralha (você escolhe qual lado) e deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura sofrerá 10d6 de dano de frio ou metade desse dano se passar na resistência."
        },
        {
          "type": "default",
          "description": "A muralha é um objeto que pode ser danificado e então, partido. Ela tem CA 12, 30 pontos de vida por seção de 3 metros [10 feet] e é vulnerável a dano de fogo. Reduzir os pontos de vida de uma seção de 3 metros [10 feet] da muralha a 0 destruirá essa seção, deixando para trás uma camada de ar gelado no espaço ocupado pela muralha. Uma criatura que atravesse a camada de ar gelado pela primeira vez num turno, deve realizar um teste de resistência de Constituição. Essa criatura sofrerá 5d6 de dano de frio se fracassar na resistência, ou metade desse dano se obtiver sucesso."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível ou superior, o dano causado quando ela aparece aumenta em 2d6 e o dano por atravessar através da camada de ar gelado aumenta em 1d6 para cada nível do espaço acima do 6°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "190"
    }
  },
  {
    "name": "Muralha De Pedra",
    "originalName": "Wall Of Stone",
    "level": 5,
    "school": "evocação",
    "type": "5º nível de evocação",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pequeno bloco de granito",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma muralha não-mágica de rocha sólida surge do nada num ponto, à sua escolha, dentro do alcance. A muralha tem 15 centímetros [6 inches] de espessura e é composta por dez painéis de 3 metros [10 feet] por 3 metros [10 feet]. Cada painel deve ser contíguo com, pelo menos, outro painel. Alternativamente, você pode criar painéis de 3 metros [10 feet] por 6 metros [20 feet] com apenas 7,5 centímetros [3 inches] de espessura."
        },
        {
          "type": "default",
          "description": "Se a muralha passar pelo espaço ocupado por uma criatura quando ela surgir, a criatura será empurrada para um dos lados da muralha (você escolhe qual lado). Se a criatura fosse ser rodeada por todos os lados da muralha (ou pela muralha e outra superfície sólida), a criatura pode realizar um teste de resistência de Destreza. Se obtiver sucesso, ela pode usar sua reação para se mover até seu deslocamento, assim não ficando mais cercada pela muralha."
        },
        {
          "type": "default",
          "description": "A muralha pode ter qualquer formato que você desejar, no entanto, ela não pode ocupar o mesmo espaço de uma criatura ou objeto. A muralha não precisa ser vertical ou se apoiar em qualquer fundação estável. Ela deve, no entanto, se fundir e estar solidamente suportada por rocha existente. Então, você pode usar essa magia para criar uma ponte sobre um abismo ou criar uma rampa."
        },
        {
          "type": "default",
          "description": "Se você criar um vão com mais de 6 metros [20 feet] de comprimento, você deve reduzir o tamanho de cada painel à metade para criar suportes. Você pode moldar grosseiramente a parede para criar merlões, ameias e assim por diante."
        },
        {
          "type": "default",
          "description": "A muralha é um objeto feito de pedra que pode ser danificado e então, partido. Cada painel tem CA 15 e 30 pontos de vida para cada 2,5 centímetros [1 inch] de espessura. Reduzir os pontos de vida de um painel a 0, o destruirá e pode fazer painéis conectados desmoronarem, à critério do Mestre."
        },
        {
          "type": "default",
          "description": "Se você mantiver sua concentração nessa magia por toda a duração, a muralha se tornará permanente e não poderá ser dissipada. Do contrário, a muralha desaparece quando a magia acabar."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "190"
    }
  },
  {
    "name": "Muralha De Vento",
    "originalName": "Wind Wall",
    "level": 3,
    "school": "abjuração",
    "type": "3º nível de abjuração",
    "isRitual": false,
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um leque minúsculo e uma pena de origem exótica",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma muralha de ventos fortes ergue-se do chão num ponto, à sua escolha, dentro do alcance. Você pode fazer a muralha ter até 15 metros [50 feet] de comprimento, 4,5 metros [15 feet] de altura e 30 centímetros [1 foot] de espessura. Você pode moldar a muralha em qualquer forma que desejar, contanto que ela faça um caminho contínuo pelo solo. A muralha permanece pela duração."
        },
        {
          "type": "default",
          "description": "Quando a muralha aparece, cada criatura dentro da área dela deve realizar um teste de resistência de Força. Uma criatura sofre 3d8 de dano de concussão se falhar na resistência, ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "default",
          "description": "Os ventos fortes mantém névoa, fumaça e outros gases afastados. Criaturas ou objetos voadores Pequenos ou menores, não podem atravessar a muralha. Materiais leves e soltos trazidos para a muralha são arremessados para cima. Flechas, virotes e outros projéteis ordinários disparados contra alvos além da muralha são defletidos para cima e erram automaticamente. (Pedras arremessadas por gigantes ou armas de cerco e projéteis similares, não são afetados.) As criaturas em forma gasosa não podem atravessá-la."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "192"
    }
  },
  {
    "name": "Muralha Prismática",
    "originalName": "Prismatic Wall",
    "level": 9,
    "school": "abjuração",
    "type": "9º nível de abjuração",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma plano cintilante multicolorido de luzes forma uma parede vertical opaca – de até 27 metros [90 feet] de comprimento, 9 metros [30 feet] de altura e 2,5 centímetros [1 inch] de espessura – centrada num ponto que você possa ver, dentro do alcance. Alternativamente, você pode moldar a muralha numa esfera de 9 metros [30 feet] de diâmetro centrada num ponto, à sua escolha, dentro do alcance."
        },
        {
          "type": "default",
          "description": "A muralha permanece no lugar pela duração. Se você posicionar a muralha de forma que ela passaria através do espaço ocupado por uma criatura, a magia falha e sua ação e o espaço de magia são desperdiçados. A muralha emite luz plena num raio de 30 metros [100-foot radius] e penumbra por 30 metros [100 feet] adicionais. Você e as criaturas designadas, no momento que você conjurou a magia, podem passar através e permanecer perto da muralha sem se ferirem. Se outra criatura que puder ver a muralha se aproximar mais de 6 metros [20 feet] dela ou começar seu turno lá, a criatura deve realizar um teste de resistência de Constituição ou ficará cega por 1 minuto."
        },
        {
          "type": "default",
          "description": "A muralha consiste em sete camadas, cada uma de uma cor diferente. Quando uma criatura tenta tocar ou passar através da muralha, ela atravessa uma camada de cada vez, até atravessar todas as camadas da muralha. À medida que ela passa ou toca cada camada, a criatura realiza um teste de resistência de Destreza ou será afetada pelas propriedades daquela camada, como descrito abaixo."
        },
        {
          "type": "default",
          "description": "A muralha pode ser destruída, também, uma camada por vez, em ordem de vermelho à violeta, pelos meios especificados em cada camada. Quando uma camada é destruída, ela permanece assim pela duração da magia. Um bastão do cancelamento destrói uma muralha prismática, mas um campo antimagia não produz efeito nela."
        },
        {
          "type": "option",
          "value": "1. Vermelho.",
          "description": "1. Vermelho. O alvo sofre 10d6 de dano de fogo se falhar na resistência ou metade desse dano se obtiver sucesso. Enquanto essa camada estiver no lugar, ataques à distância não-mágicos não podem atravessar a muralha. A camada pode ser destruída causando, pelo menos, 25 de dano de frio a ela."
        },
        {
          "type": "option",
          "value": "2. Laranja.",
          "description": "2. Laranja. O alvo sofre 10d6 de dano de ácido se falhar na resistência ou metade desse dano se obtiver sucesso. Enquanto essa camada estiver no lugar, ataques à distância mágicos não podem atravessar a muralha. A camada pode ser destruída por um vento forte."
        },
        {
          "type": "option",
          "value": "3. Amarelo.",
          "description": "3. Amarelo. O alvo sofre 10d6 de dano elétrico se falhar na resistência ou metade desse dano se obtiver sucesso. A camada pode ser destruída causando, pelo menos, 60 de dano de energia a ela."
        },
        {
          "type": "option",
          "value": "4. Verde.",
          "description": "4. Verde. O alvo sofre 10d6 de dano de veneno se falhar na resistência ou metade desse dano se obtiver sucesso. A magia criar passagem ou outra magia de nível igual ou superior que possam abrir um portal em uma superfície sólida, destroem essa camada."
        },
        {
          "type": "option",
          "value": "5. Azul.",
          "description": "5. Azul. O alvo sofre 10d6 de dano de frio se falhar na resistência ou metade desse dano se obtiver sucesso. A camada pode ser destruída causando, pelo menos, 25 de dano de fogo a ela."
        },
        {
          "type": "option",
          "value": "6. Anil.",
          "description": "6. Anil. Se falhar na resistência, o alvo ficará impedido. Ele deve então, fazer um teste de resistência de Constituição ao final de cada um dos turnos dele. Se obtiver sucesso três vezes, a magia termina. Se falhar na resistência três vezes, ela se torna pedra é afetada pela condição petrificado. Os sucessos e falhas não precisam ser consecutivos; anote ambos os resultados até o alvo acumular três de mesmo tipo."
        },
        {
          "type": "default",
          "description": "Enquanto essa camada estiver no lugar, magias não podem ser conjuradas através da muralha. A camada pode ser destruída por luz plena emitida pela magia luz do dia ou uma magia similar de nível equivalente ou superior."
        },
        {
          "type": "option",
          "value": "7. Violeta.",
          "description": "7. Violeta. Se falhar na resistência, o alvo ficará cego. Ele deve realizar um teste de resistência de Sabedoria no início do seu próximo turno. Um sucesso na resistência acaba com a cegueira. Se falhar na resistência, a criatura é transportada para outro plano de existência, escolhido pelo Mestre, e não estará mais cego. (Tipicamente, uma criatura que esteja em um plano que não seja o seu plano natal é banida para lá, enquanto que outras criaturas geralmente são enviadas para os Planos Astral ou Etéreo.) Essa camada é destruída pela magia dissipar magia ou por uma magia similar de nível equivalente ou superior que possa acabar com magias e efeitos mágicos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "171"
    }
  },
  {
    "name": "Nevasca",
    "originalName": "Sleet Storm",
    "level": 3,
    "school": "conjuração",
    "type": "3º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 45,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um punhado de poeira e algumas gotas de água",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Até a magia acabar, uma chuva congelante e neve caem num cilindro de 6 metros de altura [20-foot-tall] por 12 metros de raio [40-foot radius], centrado num ponto, à sua escolha, dentro do alcance. A área é de escuridão densa e, chamas expostas na área são extintas."
        },
        {
          "type": "default",
          "description": "O solo na área é coberto por gelo escorregadio, tornando-o terreno difícil. Quando uma criatura entrar na área da magia pela primeira vez num turno ou começar seu turno nela, ela deve realizar um teste de resistência de Destreza. Se falhar, cairá no chão."
        },
        {
          "type": "default",
          "description": "Se um, criatura estiver se concentrando na área da magia, a criatura deve realizar um teste de resistência de Constituição contra a CD da magia, ou perderá a concentração."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "180"
    }
  },
  {
    "name": "Névoa Fétida",
    "originalName": "Stinking Cloud",
    "level": 3,
    "school": "conjuração",
    "type": "3º nível de conjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago",
      "círculo da terra (pântano)",
      "o corruptor"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um ovo podre ou várias folhas de repolho",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma esfera, de 6 metros de raio [20-foot radius], de gás amarelado nauseante, centrada num ponto dentro do alcance. A névoa se espalha, dobrando esquinas, e sua área é de escuridão densa. A névoa perdura no ar pela duração."
        },
        {
          "type": "default",
          "description": "Cada criatura que estiver completamente dentro da névoa no início do seu turno deve realizar um teste de resistência de Constituição contra veneno. Se falhar na resistência, a criatura gastará sua ação nesse turno tentando vomitar e cambaleando."
        },
        {
          "type": "default",
          "description": "Um vento moderado (pelo menos 15 quilômetros [10 miles] por hora) dispersará a névoa depois de 4 rodadas. Um vento forte (pelo menos 30 quilômetros [20 miles] por hora) dispersará a névoa após 1 rodada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "182"
    }
  },
  {
    "name": "Névoa Mortal",
    "originalName": "Cloudkill",
    "level": 5,
    "school": "conjuração",
    "type": "5º nível de conjuração",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma esfera de nevoeiro venenoso de cor amarelo-esverdeado, com 6 metros de raio [20-foot radius], centrado em um ponto, à sua escolha, dentro do alcance. O nevoeiro se espalha, dobrando esquinas. Ele permanece pela duração ou até um vento forte dispersar o nevoeiro, terminando a magia. Sua área é de escuridão densa."
        },
        {
          "type": "default",
          "description": "Quando uma criatura entra na área da magia pela primeira vez no turno dela ou começa seu turno lá, essa criatura deve realizar um teste de resistência de Constituição. A criatura sofre 5d8 de dano de veneno, ou metade desse dano, se passar no teste. As criaturas serão afetadas mesmo se prenderem a respiração ou não precisarem respirar."
        },
        {
          "type": "default",
          "description": "O nevoeiro se afasta 3 metros [10 feet] de você no começo de cada um dos seus turnos, deslizando pela superfície do solo. Os vapores são mais pesados que o ar, mantendo-se nos níveis mais baixos do terreno, até mesmo caindo em aberturas."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d8 para cada nível do espaço acima do 5°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "125"
    }
  },
  {
    "name": "Névoa Obscurecente",
    "originalName": "Fog Cloud",
    "level": 1,
    "school": "conjuração",
    "type": "1º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma esfera de 6 metros de raio [20-foot radius] de névoa, centrada num ponto, dentro do alcance. A esfera se espalha, dobrando esquinas, e a área dela é de escuridão densa. Ela permanece pela duração ou até um vento moderado ou mais rápido (pelo menos 15 quilômetros [10 miles] por hora) dispersa-la."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o raio da névoa aumenta em 6 metros [20 feet] para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "146"
    }
  },
  {
    "name": "Nublar",
    "originalName": "Blur",
    "level": 2,
    "school": "ilusão",
    "type": "2º nível de ilusão",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago",
      "círculo da terra (deserto)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Seu corpo se torna turvo, mudando e oscilando para todos que puderem ver você. Pela duração, qualquer criatura terá desvantagem nas jogadas de ataque contra você. Um atacante é imune a esse efeito se não depender de visão, como os que tenham percepção às cegas ou os que puderem ver através de ilusões, como os com visão verdadeira."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "123"
    }
  },
  {
    "name": "Nuvem Incendiária",
    "originalName": "Incendiary Cloud",
    "level": 8,
    "school": "conjuração",
    "type": "8º nível de conjuração",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 45,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma nuvem de fumaça rodopiante que dispara brasas incandescentes aparece numa esfera de 6 metros [20 feet] centrada num ponto, dentro do alcance. A nuvem se espalha, dobrando esquinas, e gera escuridão densa. Ela permanece pela duração ou até que um vento de velocidade moderada ou mais forte (pelo menos 15 quilômetros [10 miles] por hora) a disperse."
        },
        {
          "type": "default",
          "description": "Quando a nuvem aparece, cada criatura deve realizar um teste de resistência de Destreza. Uma criatura sofre 10d8 de dano de fogo se falhar na resistência ou metade desse dano se passar. Uma criatura deve, também, realizar um teste de resistência quando entrar na área da magia pela primeira vez num turno ou terminar seu turno nela."
        },
        {
          "type": "default",
          "description": "A nuvem se afasta 3 metros [10 feet] de você numa direção, que você escolheu, no começo de cada um dos seus turnos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "157"
    }
  },
  {
    "name": "Olho Arcano",
    "originalName": "Arcane Eye",
    "level": 4,
    "school": "adivinhação",
    "type": "4º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um punhado de pelo de morcego",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria um olho mágico invisível, dentro do alcance, que flutua no ar pela duração."
        },
        {
          "type": "default",
          "description": "Você mentalmente recebe informações visuais do olho, que possui visão normal e visão no escuro com alcance de 9 metros [30 feet]. O olho pode ver em todas as direções."
        },
        {
          "type": "default",
          "description": "Com uma ação, você pode mover o olho até 9 metros [30 feet] em qualquer direção. Não existe limite de quão longe de você o olho pode se mover, mas ele não pode entrar em outro plano de existência. Uma barreira solida bloqueia o movimento do olho, mas o olho pode passar através de aberturas de até 3 centímetros de diâmetro."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "118"
    }
  },
  {
    "name": "Onda Trovejante",
    "originalName": "Thunderwave",
    "level": 1,
    "school": "evocação",
    "type": "1º nível de evocação",
    "isRitual": false,
    "classes": [
      "bardo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma onda de força trovejante varre tudo a partir de você. Cada criatura num cubo de 4,5 metros [15-foot cube] originado em você, deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofrerá 2d8 de dano trovejante e será empurrada 3 metros [10 feet] para longe de você. Se obtive sucesso na resistência, a criatura sofrerá metade desse dano e não será empurrada."
        },
        {
          "type": "default",
          "description": "Além disso, objetos soltos que estiverem completamente dentro da área de efeito serão automaticamente empurrados 3 metros [10 feet] para longe de você pelo efeito da magia e a magia emitirá um ressonante barulho de trovão audível a até 90 metros [300 feet]."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d8 para cada nível acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "187"
    }
  },
  {
    "name": "Oração Curativa",
    "originalName": "Prayer Of Healing",
    "level": 2,
    "school": "evocação",
    "type": "2º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Até seis criaturas, à sua escolha, que você possa ver, dentro do alcance, recuperam uma quantidade de pontos de vida igual a 2d8 + seu modificador de habilidade de conjuração, cada uma. Essa magia não afeta mortos-vivos ou constructos."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, a cura aumenta em 1d8 para cada nível do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "170"
    }
  },
  {
    "name": "Orientação",
    "originalName": "Guidance",
    "level": 0,
    "school": "adivinhação",
    "type": "truque de adivinhação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura voluntária. Uma vez, antes da magia acabar, o alvo pode rolar um d4 e adicionar o número rolado a um teste de habilidade a escolha dele. Ele pode rolar o dado antes ou depois de realizar o teste de habilidade. Após isso, a magia termina."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "151"
    }
  },
  {
    "name": "Padrão Hipnótico",
    "originalName": "Hypnotic Pattern",
    "level": 3,
    "school": "ilusão",
    "type": "3º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": false,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma vareta brilhante de incenso ou um frasco de cristal cheio de material fosforescente",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria um padrão retorcido de cores que se entrelaça através do ar dentro de um cubo de 9 metros [30-foot cube], dentro do alcance. O padrão aparece por um momento depois desaparece. Cada criatura na área que ver o padrão, deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, a criatura fica enfeitiçada pela duração. Enquanto estiver enfeitiçada por essa magia, a criatura está incapacitada e tem deslocamento 0."
        },
        {
          "type": "default",
          "description": "A magia acaba em uma criatura afetada se ela sofrer dano ou se alguém usar uma ação para agitar a criatura para tira-la de seu estupor."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "155"
    }
  },
  {
    "name": "Palavra Curativa",
    "originalName": "Healing Word",
    "level": 1,
    "school": "evocação",
    "type": "1º nível de evocação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma criatura, à sua escolha, que você possa ver dentro do alcance recupera uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração. Essa magia não tem efeito em mortos-vivos ou constructos."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, a cura aumenta em 1d4 para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "153"
    }
  },
  {
    "name": "Palavra Curativa Em Massa",
    "originalName": "Mass Healing Word",
    "level": 3,
    "school": "evocação",
    "type": "3º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "À medida que você brada palavras de restauração, até seis criaturas, à sua escolha, que você possa ver, dentro do alcance, recuperam uma quantidade de pontos de vida igual a 1d4 + seu modificador de habilidade de conjuração. Essa magia não afeta mortos-vivos ou constructos."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, a cura aumenta em 1d4 para cada nível do espaço acima do 3°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "163"
    }
  },
  {
    "name": "Palavra De Poder Atordoar",
    "originalName": "Power Word Stun",
    "level": 8,
    "school": "encantamento",
    "type": "8º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você pronuncia uma palavra de poder que pode oprimir a mente de uma criatura que você possa ver, dentro do alcance, deixando-a estupefata. Se o alvo escolhido estiver com 150 pontos de vida ou menos, ele ficará atordoado. Do contrário, essa magia não produz efeito."
        },
        {
          "type": "default",
          "description": "O alvo atordoado deve realizar um teste de resistência de Constituição no final de cada um dos turnos dele. Se obtiver sucesso na resistência, o efeito de atordoamento termina."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "170"
    }
  },
  {
    "name": "Palavra De Poder Matar",
    "originalName": "Power Word Kill",
    "level": 9,
    "school": "encantamento",
    "type": "9º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você profere uma palavra de poder que pode compelir uma criatura que você possa ver, dentro do alcance, a morrer instantaneamente. Se o alvo escolhido estiver com 100 pontos de vida ou menos, ele morre. Do contrário, essa magia não produz efeito."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "170"
    }
  },
  {
    "name": "Palavra De Recordação",
    "originalName": "Word Of Recall",
    "level": 6,
    "school": "conjuração",
    "type": "6º nível de conjuração",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 1,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você e até cinco criaturas voluntária a 1,5 metro [5 feet] de você, instantaneamente são teletransportadas para um santuário previamente designado. Você e qualquer criatura que se teletransportar com você, aparece no espaço desocupado mais próximo do ponto que você designou quando preparou seu santuário (veja abaixo). Se você conjurar essa magia sem ter preparado um santuário primeiro, a magia não funciona."
        },
        {
          "type": "default",
          "description": "Você deve designar um santuário na conjuração dessa magia dentro de um local, como um templo dedicado ou fortemente ligado a sua divindade. Se você tentar conjurar essa magia dessa forma em uma área que não seja dedicada à sua divindade, a magia não funciona."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "193"
    }
  },
  {
    "name": "Palavra Divina",
    "originalName": "Divine Word",
    "level": 7,
    "school": "evocação",
    "type": "7º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você profere uma palavra divina, imbuída com o poder que moldou o mundo na aurora da criação. Escolha qualquer quantidade de criaturas que você possa ver dentro do alcance. Cada criatura que puder ouvir você deve realizar um teste de resistência de Carisma. Ao falhar na resistência, uma criatura sofre um efeito baseado nos seus pontos de vida atuais:"
        },
        {
          "type": "list",
          "items": [
            "50 pontos de vida ou menos: surda por 1 minuto",
            "40 pontos de vida ou menos: surda e cega por 10 minutos",
            "30 pontos de vida ou menos: surda, cega e atordoada por 1 hora",
            "20 pontos de vida ou menos: morta instantaneamente"
          ]
        },
        {
          "type": "default",
          "description": "Independentemente dos seus pontos de vida atuais, um celestial, corruptor, elemental ou fada que falhar na sua resistência é obrigado a voltar para o plano de origem dele (se já não for aqui) e não pode retornar para o plano atual por 24 horas através de nenhum meio inferior à magia desejo."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "137"
    }
  },
  {
    "name": "Parar O Tempo",
    "originalName": "Time Stop",
    "level": 9,
    "school": "transmutação",
    "type": "9º nível de transmutação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você, por um breve momento, para o fluxo do tempo pra tudo, menos pra você. Nenhum tempo se passa para as outras criaturas, enquanto você realiza 1d4 + 1 turnos de uma vez, durante os quais você pode usar ações e se mover normalmente."
        },
        {
          "type": "default",
          "description": "Essa magia termina se uma das ações que você fizer durante esse período ou qualquer efeito que você criar, afetar uma criatura diferente de você ou um objeto que esteja sendo vestido ou carregado por outro que não você. Além disso, a magia termina se você se mover para um lugar a mais de 300 metros do local onde você conjurou essa magia."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "187"
    }
  },
  {
    "name": "Passo Nebuloso",
    "originalName": "Misty Step",
    "level": 2,
    "school": "conjuração",
    "type": "2º nível de conjuração",
    "isRitual": false,
    "classes": [
      "bruxo",
      "feiticeiro",
      "mago",
      "círculo da terra (costa)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Brevemente envolto por uma neblina prateada, você se teletransporta a até 9 metros [30 feet] para um espaço desocupado que você possa ver."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "165"
    }
  },
  {
    "name": "Passos Longos",
    "originalName": "Longstrider",
    "level": 1,
    "school": "transmutação",
    "type": "1º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "druida",
      "mago",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pitada de terra",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura. O deslocamento do alvo aumenta em 3 metros [10 feet], até a magia acabar."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "160"
    }
  },
  {
    "name": "Passos Sem Pegadas",
    "originalName": "Pass Without Trace",
    "level": 2,
    "school": "abjuração",
    "type": "2º nível de abjuração",
    "isRitual": false,
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "cinzas de uma folha de visco queimada e um ramo de pinheiro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um véu de sombras e silencia irradia de você, encobrindo você e seus companheiros contra detecção. Pela duração, cada criatura, à sua escolha, a até 9 metros [30 feet] de você (incluindo você) recebe +10 de bônus em testes de Destreza (Furtividade) e não pode ser rastreada, exceto por meio mágicos. Uma criatura que receber esse bônus não deixa quaisquer pegadas ou outros vestígios da sua passagem."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "167"
    }
  },
  {
    "name": "Patas De Aranha",
    "originalName": "Spider Climb",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bruxo",
      "feiticeiro",
      "mago",
      "círculo da terra (floresta)",
      "círculo da terra (montanha)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma gota de betume e uma aranha",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Até a magia acabar, uma criatura voluntária que você tocar, recebe a habilidade de se mover para cima, para baixo e através de superfícies verticais e de cabeça para baixo pelos tetos, enquanto deixa suas mãos livres. O alvo também ganha deslocamento de escalada igual a seu deslocamento de caminhada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "182"
    }
  },
  {
    "name": "Pele De Árvore",
    "originalName": "Barkskin",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pedaço de casca de carvalho",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura voluntária. Até o fim da magia, a pele da criatura fica rígida, similar a casca de um carvalho, e a CA do alvo não pode ser inferior a 16, independentemente do tipo de armadura que ela esteja vestindo."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "121"
    }
  },
  {
    "name": "Pele De Pedra",
    "originalName": "Stoneskin",
    "level": 4,
    "school": "abjuração",
    "type": "4º nível de abjuração",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "pó de diamante",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia transforma a pele de uma criatura voluntária que você tocar em rocha sólida. Até a magia acabar, o alvo tem resistência a dano de concussão, cortante e perfurante não-mágico."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "183"
    }
  },
  {
    "name": "Pequena Cabana",
    "originalName": "Tiny Hut",
    "level": 3,
    "school": "evocação",
    "type": "3º nível de evocação",
    "isRitual": true,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pequena conta de cristal",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um domo de energia imóvel, de 3 metros de raio [10-foot radius], aparece do nada, ao seu redor e acima de você e permanece parado pela duração. A magia termina se você deixar a área."
        },
        {
          "type": "default",
          "description": "Nove criaturas de tamanho Médio ou menor podem caber dentro do domo com você. A magia falha se a área incluir criaturas maiores ou mais de nove criaturas. Criaturas e objetos dentro do domo quando você conjurou essa magia, podem se mover através dele livremente. Todas as outras criaturas e objetos são bloqueados ao tentarem atravessa-lo. Magias e outros efeitos mágicos não podem se estender através do domo ou serem conjurados através dele. A atmosfera dentro do espaço é confortável e seca, independente do clima do lado de fora."
        },
        {
          "type": "default",
          "description": "Até a magia acabar, você pode comandar o interior para que fique mal iluminado ou escuro. O domo é opaco do lado de fora, de qualquer cor que você desejar, mas é transparente do lado de dentro."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "187"
    }
  },
  {
    "name": "Perdição",
    "originalName": "Bane",
    "level": 1,
    "school": "encantamento",
    "type": "1º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma gota de sangue",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Até três criaturas, à sua escolha, que você possa ver dentro do alcance, devem realizar um teste de resistência de Carisma. Sempre que um alvo que falhou nessa resistência realizar uma jogada de ataque ou um teste de resistência antes da magia acabar, o alvo deve rolar um d4 e subtrair o valor rolado da jogada de ataque ou teste de resistência."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "120"
    }
  },
  {
    "name": "Piscar",
    "originalName": "Blink",
    "level": 3,
    "school": "transmutação",
    "type": "3º nível de transmutação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Role um d20 no final de cada um dos seus turnos pela duração da magia. Com um resultado de 11 ou maior, você desaparece do seu plano de existência atual e reaparece no Plano Etéreo (a magia falha e a conjuração é perdida se você já estiver nesse plano). No início do seu próximo turno e quando a magia terminar, se você estiver no Plano Etéreo, você retorna a um espaço desocupado de sua escolha que você possa ver a até 3 metros [10 feet] do espaço em que você desapareceu. Se não houver um espaço disponível dentro do alcance, você reaparece no espaço desocupado mais próximo (escolhido aleatoriamente, se existir mais de um espaço a mesma distância). Você pode dissipar a magia com uma ação."
        },
        {
          "type": "default",
          "description": "Quando estiver no Plano Etéreo, você pode ver e ouvir o plano de onde você veio, que aparece em tons de cinza, e você não pode ver nada além de 18 metros [60 feet]. Você só pode afetar ou ser afetado por outras criaturas no Plano Etéreo. As criaturas que não estiverem lá não podem notar você nem interagir com você, a não ser que elas tenham uma habilidade que as permita."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "122"
    }
  },
  {
    "name": "Porta Dimensional",
    "originalName": "Dimension Door",
    "level": 4,
    "school": "conjuração",
    "type": "4º nível de conjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 152,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você se teletransporte da sua posição atual para qualquer local dentro do alcance. Você aparece exatamente no local desejado. Pode ser um lugar que você possa ver, um que você possa visualizar ou um que você possa descrever indicando a distância e direção, como “60 metros [200 feet] diretamente pra baixo” ou “90 metros [300 feet], subindo para noroeste num ângulo de 45 graus”."
        },
        {
          "type": "default",
          "description": "Você pode levar objetos com você, contanto que o peso deles não exceda o que você pode carregar. Você também pode levar uma criatura voluntária do seu tamanho ou menor, que esteja carregando equipamento até o limite da capacidade de carga dela. A criatura deve estar a 1,5 metro [5 feet] de você quando você conjurar a magia."
        },
        {
          "type": "default",
          "description": "Se você aparecer em um lugar que já esteja ocupado por um objeto ou uma criatura, você e qualquer criatura viajando com você, sofrem 4d6 de dano de energia cada um e a magia falha em teletransportar vocês."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "135"
    }
  },
  {
    "name": "Portal",
    "originalName": "Gate",
    "level": 9,
    "school": "conjuração",
    "type": "9º nível de conjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um diamante",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você conjura um portal conectando um espaço desocupado que você possa ver, dentro do alcance, a uma localização precisa em um plano de existência diferente. O portal é uma abertura circular, que você pode fazer ter de 1,5 metro [5 feet] a 6 metros [20 feet] de diâmetro. Você pode orientar o portal em qualquer direção, à sua escolha."
        },
        {
          "type": "default",
          "description": "O portal permanece pela duração. O portal terá uma frente e um fundo em cada plano que ele aparecer. Viajar pelo portal só é possível ao atravessa-lo pela frente. Qualquer coisa que o fizer, é instantaneamente transportado para o outro plano, aparecendo no espaço desocupado mais próximo do portal. Divindades e outros soberanos planares podem impedir que portais criados através dessa magia se abram na presença deles ou em qualquer parte dos seus domínios."
        },
        {
          "type": "default",
          "description": "Quando você conjurar essa magia, você pode falar o nome de uma criatura especifica (um pseudônimo, título ou apelido não funcionará). Se essa criatura estiver em um plano diferente do que você está, o portal se abre na vizinhança imediata da criatura nomeada e suga a criatura para dentro do portal, fazendo-a aparecer no espaço desocupado mais próximo do seu lado do portal. Você não adquire qualquer poder especial sobre a criatura e ela está livre para agir como o Mestre julgar apropriado. Ela pode ir embora, atacar você ou ajudar você."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "148"
    }
  },
  {
    "name": "Praga",
    "originalName": "Contagion",
    "level": 5,
    "school": "necromancia",
    "type": "5º nível de necromancia",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 7,
      "unit": "dias",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Seu toque inflige uma doença. Faça um ataque de magia corpo-a-corpo contra uma criatura ao seu alcance. Se atingir, você aflige a criatura com uma doença, de sua escolha, entre qualquer um das descritas abaixo."
        },
        {
          "type": "default",
          "description": "No final de cada turno do alvo, ele deve realizar um teste de resistência de Constituição. Após obter três falhas nesses testes de resistência, o efeito da doença permanece pela duração e a criatura para de fazer testes de resistência. Após obter três sucessos nesses testes de resistência, a criatura se recupera da doença e a magia termina."
        },
        {
          "type": "default",
          "description": "Já que essa magia induz uma doença natural no alvo, qualquer efeito que remova uma doença, ou de outra forma, melhore os efeitos de uma doença, se aplica a ela."
        },
        {
          "type": "option",
          "value": "Ardência Mental.",
          "description": "Ardência Mental. A mente da criatura fica febril. A criatura tem desvantagem em testes de Inteligência, testes de resistência de Inteligência e a criatura age como se estivesse sob efeito da magia confusão durante um combate."
        },
        {
          "type": "option",
          "value": "Enjoo Cegante.",
          "description": "Enjoo Cegante. A dor se agarra a mente da criatura e seus olhos ficam branco-leitosos. A criatura tem desvantagem em testes de Sabedoria e testes de resistência de Sabedoria e está cega."
        },
        {
          "type": "option",
          "value": "Febre do Esgoto.",
          "description": "Febre do Esgoto. Uma febre voraz se espalha pelo corpo da criatura. A criatura tem desvantagem em testes de Força, testes de resistência de Força e jogadas de ataque que usem Força."
        },
        {
          "type": "option",
          "value": "Necrose da Carne.",
          "description": "Necrose da Carne. A carne da criatura se decompõe. A criatura tem desvantagem em testes de Carisma e vulnerabilidade a todos os danos."
        },
        {
          "type": "option",
          "value": "Perdição Pegajosa.",
          "description": "Perdição Pegajosa. A criatura começa a sangrar incontrolavelmente. A criatura tem desvantagem em testes de Constituição e testes de resistência de Constituição. Além disso, sempre que a criatura sofrer dano, ela ficará atordoada até o fim do seu próximo turno."
        },
        {
          "type": "option",
          "value": "Tremedeira.",
          "description": "Tremedeira. A criatura é acometida por espasmos. A criatura tem desvantagem em testes de Destreza, testes de resistência de Destreza e jogadas de ataque que usem Destreza."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "129"
    }
  },
  {
    "name": "Praga De Insetos",
    "originalName": "Insect Plague",
    "level": 5,
    "school": "conjuração",
    "type": "5º nível de conjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida",
      "feiticeiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 91,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "alguns grãos de açúcar, alguns miolos de grão e uma mancha de gordura",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um enxame voraz de gafanhotos preenche uma esfera de 6 metros de raio [20-foot radius], centrada no ponto que você escolher, dentro do alcance. A esfera se espalha dobrando esquinas. A esfera permanece pela duração e sua área é de escuridão leve. A área da esfera é de terreno difícil."
        },
        {
          "type": "default",
          "description": "Quando a área aparece, cada criatura dentro dela deve realizar um teste de resistência de Constituição. Uma criatura sofre 4d10 de dano perfurante se falhar na resistência ou metade desse dano se passar. Uma criatura deve, também, realizar um teste de resistência quando entrar na área da magia pela primeira vez num turno ou terminar seu turno nela."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 5°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "157"
    }
  },
  {
    "name": "Prestidigitação",
    "originalName": "Prestidigitation",
    "level": 0,
    "school": "transmutação",
    "type": "truque de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 3,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Este feitiço é um pequeno truque mágico que conjuradores novatos usam para praticar. Você cria um dos seguintes efeitos mágicos dentro do alcance:"
        },
        {
          "type": "list",
          "items": [
            "Você cria, instantaneamente, um efeito sensorial inofensivo, como uma chuva de faíscas, um sopro de vento, notas musicais suaves ou um odor estranho.",
            "Você, instantaneamente, acende ou apaga uma vela, uma tocha ou uma pequena fogueira.",
            "Você, instantaneamente, limpa ou suja um objeto de até 1 metro cúbico.",
            "Você esfria, esquenta ou melhora o sabor de até 1 metro cubico de matéria inorgânica por 1 hora.",
            "Você faz uma cor, uma pequena marca ou um símbolo aparecer em um objeto ou superfície por 1 hora.",
            "Você cria uma bugiganga não-mágica ou uma imagem ilusória que caiba na sua mão e que dura até o final do seu próximo turno."
          ]
        },
        {
          "type": "default",
          "description": "Se você conjurar essa magia diversas vezes, você pode ter até três dos seus efeitos não-instantâneos ativos, ao mesmo tempo, e você pode dissipar um desses efeitos com uma ação."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "170"
    }
  },
  {
    "name": "Prisão De Energia",
    "originalName": "Forcecage",
    "level": 7,
    "school": "evocação",
    "type": "7º nível de evocação",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 30,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "pó de rubi",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma prisão em formato cúbico, imóvel e invisível, composta de energia mágica brota do nada, em volta de uma área, à sua escolha, dentro do alcance. A prisão pode ser uma cela ou uma caixa sólida, à sua escolha."
        },
        {
          "type": "default",
          "description": "Uma prisão em formato de cela pode ter até 6 metros [20 feet] quadrados e é feita de barras com 1,5 centímetro [1/2-inch] de diâmetro espaçadas a 1,5 centímetro [1/2 inch] umas das outras."
        },
        {
          "type": "default",
          "description": "Uma prisão em formato de caixa pode ter até 3 metros [10 feet] quadrados, criando uma barreira sólida que impede qualquer matéria de atravessa-la e bloqueia qualquer magia conjurada de entrar ou sair da área."
        },
        {
          "type": "default",
          "description": "Quando você conjura a magia, qualquer criatura que estiver completamente dentro da área da prisão ficará presa. As criaturas que estiverem apenas parcialmente na área, ou as grandes demais para caber dentro da área, são empurradas do centro da área, até estarem completamente fora dela."
        },
        {
          "type": "default",
          "description": "Uma criatura dentro da prisão não pode sair dela por meios não-mágicos. Se a criatura tentar usar teletransporte ou viagem entre planos para abandonar a prisão, ela deve, primeiro, realizar um teste de resistência de Carisma. Se obtiver sucesso, a criatura pode usar a magia e sair da prisão. Se falhar, a criatura não pode sair da prisão e desperdiça o uso da magia ou efeito. A prisão também se estende ao Plano Etéreo, bloqueando viagem etérea."
        },
        {
          "type": "default",
          "description": "Essa magia não pode ser dissipada por dissipar magia."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "147"
    }
  },
  {
    "name": "Proibição",
    "originalName": "Forbiddance",
    "level": 6,
    "school": "abjuração",
    "type": "6º nível de abjuração",
    "isRitual": true,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma borrifada de água benta, incensos raros e pó de rubi",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "dias",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma defesa contra viagem mágica que protege até 3.500 metros quadrados [40.000 square feet] de solo até 9 metros [30 feet] de altura do solo. Pela duração, criaturas não conseguem se teletransportar para dentro da área ou usar portais, como os criados pela magia portal, para entrar na área. A magia protege a área contra viagem planar e, portanto, impede criaturas de acessarem a área por meio do Plano Astra, Plano Etéreo, Faéria, Umbra ou pela magia viagem planar."
        },
        {
          "type": "default",
          "description": "Além disso, a magia causa dano a certos tipos de criatura, à sua escolha, quando a conjurar. Escolha um ou mais dentre os seguintes: celestiais, corruptores, elementais, fadas ou mortos-vivos. Quando uma criatura escolhida entrar na área da magia pela primeira vez em um turno ou começa seu turno nela, a criatura sofre 5d6 de dano radiante ou necrótico (à sua escolha, quando você conjura a magia)."
        },
        {
          "type": "default",
          "description": "Quando você conjura essa magia, você pode definir uma senha. Uma criatura que falar a senha quando entrar na área não sofrerá dano dessa magia."
        },
        {
          "type": "default",
          "description": "A área da magia não pode sobrepor a área de outra magia proibição. Se você conjurar proibição a cada dia por 30 dias no mesmo local, a magia durará até ser dissipada, e os componentes materiais serão consumidos apenas na última conjuração."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "146"
    }
  },
  {
    "name": "Projeção Astral",
    "originalName": "Astral Projection",
    "level": 9,
    "school": "necromancia",
    "type": "9º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bruxo",
      "clérigo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "horas"
    },
    "range": {
      "value": 3,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "para cada criatura que você afeta com este feitiço, você deve fornecer um jacinto no valor de pelo menos 1 gp e uma barra de prata com ornamentos esculpidos no valor de pelo menos 100 gp",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "especial",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você e até oito criaturas voluntárias dentro do alcance, projetam seus corpos astrais para o Plano Astral (a magia falha e a conjuração é perdida se você já estiver no plano). O corpo material que você deixa para trás ficará inconsciente e em estado de animação suspensa; ele não precisa de comida ou ar e não envelhece."
        },
        {
          "type": "default",
          "description": "Seu corpo astral assemelhasse à sua forma mortal em praticamente tudo, copiando suas estatísticas de jogo e posses. A principal diferença é a adição de um cordão prateado que se estende de trás da sua omoplata e traça um caminho atrás de você, sumindo após 30 centímetros [1 foot]. Esse cordão é a sua corrente com o seu corpo material. Enquanto sua corrente permanecer intacta, você pode encontrar seu caminho de volta pra casa. Se o cordão for cortado – algo que só pode acontecer se um efeito dizer"
        },
        {
          "type": "default",
          "description": "especificamente que faz isso – sua alma e corpo estão separados, matando você instantaneamente."
        },
        {
          "type": "default",
          "description": "Sua forma astral pode viajar livremente dentro do Plano Astral e pode passar através de portais que levam a qualquer outro plano. Se você entrar em um novo portal ou retornar para o plano que você estava quando conjurou a magia, seu corpo e posses são transportados ao longo do cordão de prata, permitindo que você reentre no seu corpo ao entrar no novo plano. Sua forma astral é uma encarnação separada. Qualquer dano ou outros efeitos que se aplicarem a ela, não terão efeito no seu corpo físico, nem persistem quando você voltar."
        },
        {
          "type": "default",
          "description": "A magia termina para você e seus companheiros quando você usar sua ação para dissipa-la. Quando a magia termina, as criaturas afetadas voltam para seus corpos físicos e acordam."
        },
        {
          "type": "default",
          "description": "A magia também pode terminar prematuramente para você ou um dos seus companheiros. Uma magia dissipar magia, bem sucedida, usada contra um corpo astral ou físico termina a magia para a criatura. Se o corpo original de uma criatura ou sua forma astral caírem a 0 pontos de vida, a magia termina para essa criatura. Se a magia terminar e o cordão prateado estiver intacto, o cordão puxa a forma astral da criatura de volta para seu corpo, terminando seu estado de animação suspensa."
        },
        {
          "type": "default",
          "description": "Se você retornar para o seu corpo prematuramente, seus companheiros permanecem nas suas formas astrais e devem encontrar seus próprios meios de voltar para seus corpos, geralmente caindo a 0 pontos de vida."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "119"
    }
  },
  {
    "name": "Projetar Imagem",
    "originalName": "Project Image",
    "level": 7,
    "school": "ilusão",
    "type": "7º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 152,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pequena réplica sua feita com materiais",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma cópia ilusória de si mesmo, que permanece pela duração. A cópia pode aparecer em qualquer lugar, dentro do alcance, que você já tenha visto antes, independentemente da intervenção de obstáculos. A ilusão se parece e fala como você, mas é intangível. Se a ilusão sofrer qualquer dano, ela desaparece e a magia acaba."
        },
        {
          "type": "default",
          "description": "Você pode ver através dos olhos e ouvir através dos ouvidos da cópia como se você estivesse no lugar dela. Em cada um dos seus turnos, com uma ação bônus, você pode trocar o uso dos sentidos dela pelo seu ou voltar novamente. Enquanto você está usando os sentidos dela, você fica cego e surdo ao que está a sua volta."
        },
        {
          "type": "default",
          "description": "Interação física com a imagem revelará ela como sendo uma ilusão, já que as coisas podem atravessa-la. Uma criatura que usar sua ação para examinar a imagem, pode determinar que ela é uma ilusão sendo bem sucedida num teste de Inteligência (Investigação) contra a CD da magia para desacredita-la. Se a criatura discernir a ilusão como ela é, a criatura poderá ver através da imagem e qualquer barulho que ela fizer soará oco para a criatura."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "172"
    }
  },
  {
    "name": "Proteção Contra A Morte",
    "originalName": "Death Ward",
    "level": 4,
    "school": "abjuração",
    "type": "4º nível de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura e concede a ela uma certa proteção contra a morte."
        },
        {
          "type": "default",
          "description": "A primeira vez que o alvo cair a 0 pontos de vida, como resultado de ter sofrido dano, o alvo, ao invés disso, cai a 1 ponto de vida e a magia termina."
        },
        {
          "type": "default",
          "description": "Se a magia ainda estiver funcionando quando o alvo for afetado por um efeito que poderia mata-lo instantaneamente sem causar dano, o efeito, ao invés disso, não funciona no alvo e a magia termina."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "133"
    }
  },
  {
    "name": "Proteção Contra Energia",
    "originalName": "Protection From Energy",
    "level": 3,
    "school": "abjuração",
    "type": "3º nível de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida",
      "feiticeiro",
      "mago",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Pela duração, a criatura voluntária que você tocar terá resistência a um tipo de dano de sua escolha: ácido, elétrico, fogo, frio ou trovejante."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "173"
    }
  },
  {
    "name": "Proteção Contra O Bem E Mal",
    "originalName": "Protection From Evil And Good",
    "level": 1,
    "school": "abjuração",
    "type": "1º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bruxo",
      "clérigo",
      "mago",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "água benta ou pó de prata e ferro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Até a magia acabar, uma criatura voluntária que você tocar estará protegida contra certos tipos de criaturas: aberrações, celestiais, corruptores, elementais, fadas e mortos-vivos."
        },
        {
          "type": "default",
          "description": "A proteção garante diversos benefícios. As criaturas desse tipo tem desvantagem nas jogadas de ataque contra o alvo. O alvo não pode ser enfeitiçado, amedrontado ou possuído por elas. Se o alvo já estiver enfeitiçado, amedrontado ou possuído por uma dessas criaturas, o alvo terá vantagem em qualquer novo teste de resistência contra o efeito relevante."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "173"
    }
  },
  {
    "name": "Proteção Contra Veneno",
    "originalName": "Protection From Poison",
    "level": 2,
    "school": "abjuração",
    "type": "2º nível de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida",
      "paladino",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura. Se ela estiver envenenada, você neutraliza o veneno. Se mais de um veneno estiver afligindo o alvo, você neutraliza um veneno, que você saiba estar presente, ou neutraliza um aleatório."
        },
        {
          "type": "default",
          "description": "Pela duração, o alvo terá vantagem em testes de resistência para não envenenado e terá resistência a dano de veneno."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "173"
    }
  },
  {
    "name": "Proteger Fortaleza",
    "originalName": "Guards And Wards",
    "level": 6,
    "school": "abjuração",
    "type": "6º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um incenso aceso, uma porção de enxofre e óleo, uma corda amarrada, uma porção de sangue de tribulo brutal e um pequeno bastão de prata",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma defesa que protege até 225 metros quadrados [2.500 square feet] de espaço (uma área de um quadrado de 15 metros [50 feet] ou cem quadrados de 1,5 metro [5 feet] ou vinte e cinco quadrados de 3 metros [10 feet]). A área protegida pode ter até 6 metros de altura [20-foot-tall], no formado que você desejar. Você pode proteger diversos armazéns de uma fortaleza dividindo a área entre eles, contanto que você possa andar em cada área contígua enquanto estiver conjurando a magia."
        },
        {
          "type": "default",
          "description": "Quando você conjura essa magia, você pode especificar indivíduos que não serão afetados por qualquer dos efeitos que você escolher. Você também pode especificar uma senha que, ao ser falada em voz alta, deixa o orador imune aos efeitos."
        },
        {
          "type": "default",
          "description": "Proteger fortaleza cria os seguintes efeitos dentro da área protegida."
        },
        {
          "type": "option",
          "value": "Corredores.",
          "description": "Corredores. Névoa preenche todos os corredores protegidos, tornando-os área de escuridão densa. Além disso, cada interseção ou passagem ramificada oferecendo uma escolha de direção, há 50 por cento de chance de uma criatura diferente de você acredite que está indo na direção oposta à que escolheu."
        },
        {
          "type": "option",
          "value": "Portas.",
          "description": "Portas. Todas as portas na área protegida estão trancadas magicamente, como se estivessem seladas pela magia tranca arcana. Além disso, você pode cobrir até dez portas com uma ilusão (equivalente a função de objeto ilusório da magia ilusão menor) para fazê-las parecer seções simples da parede."
        },
        {
          "type": "option",
          "value": "Escadas.",
          "description": "Escadas. Teias preenchem todas as escadas na área protegida do topo ao solo, como a magia teia. Esses fios voltam a crescer em 10minutos se forem queimados ou partidos enquanto proteger fortaleza durar."
        },
        {
          "type": "option",
          "value": "Outros Efeitos de Magia.",
          "description": "Outros Efeitos de Magia. Você pode colocar, à sua escolha, um dos seguintes efeitos mágicos dentro da área protegida de uma fortaleza."
        },
        {
          "type": "list",
          "items": [
            "Colocar globos de luz em quatro corredores. Você pode designar uma programação simples que as luzes repetem enquanto proteger fortaleza durar.",
            "Colocar boca encantada em duas localizações.",
            "Colocar névoa fétida em duas localizações. Os vapores aparecem nos locais que você designar; eles retornam dentro de 10 minutos, se forem dispersados por um vento, enquanto proteger fortaleza durar.",
            "Colocar uma lufada de vento constante em um corredor ou aposento.",
            "Colocar uma sugestão em uma localização. Você seleciona uma área de um quadrado de 1,5 metro [5 feet] e, qualquer criatura que entrar ou passar através dessa área recebe a sugestão mentalmente."
          ]
        },
        {
          "type": "default",
          "description": "A área protegida inteira irradia magia. Uma dissipar magia conjurada em uma área especifica, se for bem sucedida, remove apenas aquele efeito."
        },
        {
          "type": "default",
          "description": "Você pode criar uma estrutura, permanentemente, afetada por proteger fortaleza ao conjurar essa magia nela a cada dia por um ano."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "151"
    }
  },
  {
    "name": "Purificar Alimentos",
    "originalName": "Purify Food And Drink",
    "level": 1,
    "school": "transmutação",
    "type": "1º nível de transmutação",
    "isRitual": true,
    "classes": [
      "clérigo",
      "druida",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 3,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Toda comida e bebida não-mágica dentro de uma esfera de 1,5 metro de raio [5-foot radius] centrada num ponto, à sua escolha, dentro do alcance é purificada e se livrada de venenos ou doenças."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "173"
    }
  },
  {
    "name": "Queda Suave",
    "originalName": "Feather Fall",
    "level": 1,
    "school": "transmutação",
    "type": "1º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "reação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": true,
      "material": {
        "description": "uma pequena pena ou penugem similar",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha até cinco criaturas caindo, dentro do alcance. A taxa de descendência de uma criatura caindo é reduzida para 18 metros [60 feet] por rodada, até o fim da magia. Se a criatura aterrissar antes da magia acabar, ela não sofre nenhum dano de queda, pode aterrissar em pé e a magia termina para essa criatura."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "142"
    }
  },
  {
    "name": "Raio Ardente",
    "originalName": "Scorching Ray",
    "level": 2,
    "school": "evocação",
    "type": "2º nível de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago",
      "o corruptor"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria três raios de fogo e os arremessa em alvos dentro do alcance. Você pode arremessa-los em um alvo ou em vários."
        },
        {
          "type": "default",
          "description": "Realize um ataque à distância com magia para cada raio. Se atingir, o alvo sofrerá 2d6 de dano de fogo."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, você cria um raio adicional para cada nível do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "176"
    }
  },
  {
    "name": "Raio De Enfraquecimento",
    "originalName": "Ray Of Enfeeblement",
    "level": 2,
    "school": "necromancia",
    "type": "2º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bruxo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um raio negro de energia enervante parte do seu dedo em direção de uma criatura, dentro do alcance. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo causará metade do dano com ataques com armas que usem Força, até a magia acabar."
        },
        {
          "type": "default",
          "description": "No final de cada um dos turnos do alvo, ele pode realizar um teste de resistência de Constituição contra a magia. Se obtiver sucesso, a magia acaba."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "174"
    }
  },
  {
    "name": "Raio De Fogo",
    "originalName": "Fire Bolt",
    "level": 0,
    "school": "evocação",
    "type": "truque de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você arremessa um cisco de fogo em uma criatura ou objeto dentro do alcance. Faça um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de fogo. Um objeto inflamável atingido por essa magia incendeia se não estiver sendo vestido ou carregado. O dano dessa magia aumenta em 1d10 quando você alcança o 5° nível (2d10), 11° nível (3d10) e 17° nível (4d10)."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "144"
    }
  },
  {
    "name": "Raio De Gelo",
    "originalName": "Ray Of Frost",
    "level": 0,
    "school": "evocação",
    "type": "truque de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um raio frigido de luz azul clara parte em direção de uma criatura, dentro do alcance. Realize um ataque à distância com magia contra o alvo. Se atingir, ele sofre 1d8 de dano de frio e seu deslocamento é reduzido em 3 metros [10 feet] até o começo do seu próximo turno."
        },
        {
          "type": "default",
          "description": "O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8)."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "174"
    }
  },
  {
    "name": "Raio Guiador",
    "originalName": "Guiding Bolt",
    "level": 1,
    "school": "evocação",
    "type": "1º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "rodadas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um lampejo de luz se lança em direção de uma criatura, à sua escolha, dentro do alcance. Realize um ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 4d6 de dano radiante e, a próxima jogada de ataque contra esse alvo, antes do final do seu próximo turno, terá vantagem, graças a penumbra mística cintilando no alvo, até então."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "151"
    }
  },
  {
    "name": "Raio Lunar",
    "originalName": "Moonbeam",
    "level": 2,
    "school": "evocação",
    "type": "2º nível de evocação",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "várias sementes de qualquer planta lunar e um pedaço de feldspato opalescente",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um raio prateado de luz pálida brilha para baixo em um cilindro com 1,5 metro de raio [5-foot radius] e 12 metros de altura [40-foot-high], centrado num ponto dentro do alcance. Até a magia acabar, penumbra preenche o cilindro."
        },
        {
          "type": "default",
          "description": "Quando uma criatura entrar na área da magia pela primeira vez em um turno, ou começar seu turno lá, ela é engolfada por chamas fantasmagóricas que causam dores lancinantes e ela deve realizar um teste de resistência de Constituição. Ela sofre 2d10 de dano radiante se falhar na resistência ou metade desse dano se passar."
        },
        {
          "type": "default",
          "description": "Um metamorfo faz seu teste de resistência com desvantagem. Se ele falhar, ele, também, reverte instantaneamente para sua forma original e não pode assumir uma forma diferente até deixar a luz da magia. Em cada um dos seus turnos após conjurar essa magia, você pode usar uma ação para mover o raio 18 metros [60 feet] em qualquer direção."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 2°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "166"
    }
  },
  {
    "name": "Raio Solar",
    "originalName": "Sunbeam",
    "level": 6,
    "school": "evocação",
    "type": "6º nível de evocação",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma lente de aumento",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um raio de luz brilhante surge da sua mão em uma linha de 18 metros [60 feet] de comprimento por 1,5 metro [5 feet] de largura. Cada criatura na linha deve realizar um teste de resistência de Constituição. Se falhar na resistência, uma criatura sofrerá 6d8 de dano radiante e ficará cega até seu próximo turno. Se passar na resistência, ela sofrerá metade desse dano e não ficará cega pela magia. Mortos-vivos e limos tem desvantagem nos seus testes de resistência."
        },
        {
          "type": "default",
          "description": "Você pode criar uma linha de radiação com sua ação em qualquer turno, até a magia acabar. Pela duração, uma fagulha de radiação luminosa brilha na sua mão. Ela emite luz plena num raio de 9 metros [30-foot radius] e penumbra por 9 metros [30 feet] adicionais. Essa luz é luz do sol."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "184"
    }
  },
  {
    "name": "Rajada De Veneno",
    "originalName": "Poison Spray",
    "level": 0,
    "school": "conjuração",
    "type": "truque de conjuração",
    "isRitual": false,
    "classes": [
      "bruxo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 3,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você ergue sua mão em direção de uma criatura que você possa ver, dentro do alcance e projeta um sopro de gás tóxico da sua palma. A criatura deve ser bem sucedida num teste de resistência de Constituição ou sofrerá 1d12 de dano de veneno."
        },
        {
          "type": "default",
          "description": "O dano dessa magia aumenta em 1d12 quando você alcança o 5° nível (2d12), 11° nível (3d12) e 17° nível (4d12)."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "169"
    }
  },
  {
    "name": "Rajada Mística",
    "originalName": "Eldritch Blast",
    "level": 0,
    "school": "evocação",
    "type": "truque de evocação",
    "isRitual": false,
    "classes": [
      "bruxo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um feixe de energia crepitante vai em direção a uma criatura dentro do alcance. Realize uma jogada de ataque à distância com magia contra o alvo. Se atingir, o alvo sofre 1d10 de dano de energia."
        },
        {
          "type": "default",
          "description": "A magia cria mais de um feixe quando você alcança níveis elevados: dois feixes no 5° nível, três feixes no 11° nível e quatro feixes no 17° nível. Você pode direcionar os feixes para o mesmo alvo ou para alvos diferentes. Realize jogadas de ataque separadas para cada feixe."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "139"
    }
  },
  {
    "name": "Rajada Prismática",
    "originalName": "Prismatic Spray",
    "level": 7,
    "school": "evocação",
    "type": "7º nível de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Oito raios de luz multicoloridos lampejam da sua mão. Cada raio é uma cor diferente e tem poderes e propósitos diferentes. Cada criatura em um cone de 18 metros [60-foot cone] deve realizar um teste de resistência de Destreza. Para cada alvo, role um d8 para determinar qual cor de raio afetou ele."
        },
        {
          "type": "option",
          "value": "1. Vermelho",
          "description": "1. Vermelho. O alvo sofre 10d6 de dano de fogo se falhar na resistência ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "option",
          "value": "2. Laranja",
          "description": "2. Laranja. O alvo sofre 10d6 de dano de ácido se falhar na resistência ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "option",
          "value": "3. Amarelo",
          "description": "3. Amarelo. O alvo sofre 10d6 de dano elétrico se falhar na resistência ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "option",
          "value": "4. Verde",
          "description": "4. Verde. O alvo sofre 10d6 de dano de veneno se falhar na resistência ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "option",
          "value": "5. Azul",
          "description": "5. Azul. O alvo sofre 10d6 de dano de frio se falhar na resistência ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "option",
          "value": "6. Anil",
          "description": "6. Anil. Se falhar na resistência, o alvo ficará impedido. Ele deve então, fazer um teste de resistência de Constituição ao final de cada um dos turnos dele. Se obtiver sucesso três vezes, a magia termina. Se falhar na resistência três vezes, ela se torna pedra é afetada pela condição petrificado. Os sucessos e falhas não precisam ser consecutivos; anote ambos os resultados até o alvo acumular três de mesmo tipo."
        },
        {
          "type": "option",
          "value": "7. Violeta",
          "description": "7. Violeta. Se falhar na resistência, o alvo ficará cego. Ele deve realizar um teste de resistência de Sabedoria no início do seu próximo turno. Um sucesso na resistência acaba com a cegueira. Se falhar na resistência, a criatura é transportada para outro plano de existência, escolhido pelo Mestre, e não estará mais cego. (Tipicamente, uma criatura que esteja em um plano que não seja o seu plano natal é banida para lá, enquanto que outras criaturas geralmente são enviadas para os Planos Astral ou Etéreo.)"
        },
        {
          "type": "option",
          "value": "8. Especial",
          "description": "8. Especial. O alvo é atingido por dois raios. Role mais duas vezes e jogue novamente qualquer 8."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "170"
    }
  },
  {
    "name": "Recipiente Arcano",
    "originalName": "Magic Jar",
    "level": 6,
    "school": "necromancia",
    "type": "6º nível de necromancia",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma gema, cristal, relicário ou algum outro tipo de recipiente ornamental",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Seu corpo entra em um estado catatônico, enquanto sua alma o abandona e entra num recipiente que você usa como componente material da magia. Enquanto sua alma permanecer no recipiente, você estará ciente do seu entorno como se você estivesse no espaço do recipiente. Você não pode se mover ou usar reações. A única ação que você pode realizar é projetar sua alma a até 30 metros [100 feet] do recipiente, tanto para retornar para o seu corpo (terminando a magia) ou para tentar possuir um corpo humanoide."
        },
        {
          "type": "default",
          "description": "Você pode tentar possuir qualquer humanoide a até 30 metros [100 feet] de você que você possa ver (criaturas protegidas pelas magias proteção contra o bem e mal ou círculo mágico não podem ser possuídas). O alvo deve realizar um teste de resistência de Carisma. Se falhar, sua alma se move para o corpo do alvo e a alma do alvo fica aprisionada no recipiente. Se obtiver sucesso, o alvo resiste aos seus esforços em possuí-lo e você não poderá tentar possuí-lo novamente por 24 horas."
        },
        {
          "type": "default",
          "description": "Uma vez que tenha possuído o corpo de uma criatura, você a controla. Suas estatísticas de jogo são substituídas pelas estatísticas da criatura, no entanto, você mantém sua tendência e seus valores de Inteligência, Sabedoria e Carisma. Você mantém os benefícios das suas características de classe. Se o alvo tiver quaisquer níveis de classe, você não pode usar quaisquer das características de classe dele."
        },
        {
          "type": "default",
          "description": "Nesse período, a alma da criatura possuída pode perceber do recipiente usando os sentidos dela, mas, no mais, não pode se mover ou realizar quaisquer ações."
        },
        {
          "type": "default",
          "description": "Enquanto estiver possuindo um corpo, você pode usar sua ação para retornar do corpo do hospedeiro para o recipiente se ele estiver a até 30 metros [100 feet] de você, devolvendo a alma da criatura hospedeira para o corpo dela. Se o corpo do hospedeiro morrer enquanto você estiver dentro dele, a criatura morre e você deve realizar um teste de resistência de Carisma contra a sua CD de conjuração. Se obtiver sucesso, você retorna ao recipiente se ele estiver a até 30 metros [100 feet] de você. Caso contrário, você morre."
        },
        {
          "type": "default",
          "description": "Se o recipiente for destruído ou a magia acabar, sua alma, imediatamente, retorna para o seu corpo. Se seu corpo estiver a mais de 30 metros [100 feet] de você ou se seu corpo estiver morto quando você tentar retornar para ele, você morre. Se a alma de outra criatura estiver no recipiente quando ele for destruído, a alma da criatura volta para o corpo dela se o corpo estiver vivo e a até 30 metros [100 feet] dela. Caso contrário, a criatura morre."
        },
        {
          "type": "default",
          "description": "Quando a magia acabar, o recipiente é destruído."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "160"
    }
  },
  {
    "name": "Recuo Acelerado",
    "originalName": "Expeditious Retreat",
    "level": 1,
    "school": "transmutação",
    "type": "1º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia permite que você se mova a um ritmo incrível. Quando você conjura essa magia e, a partir de então, com uma ação bônus em cada um dos seus turnos, até a magia acabar, você pode realizar a ação de Disparada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "141"
    }
  },
  {
    "name": "Reencarnação",
    "originalName": "Reincarnate",
    "level": 5,
    "school": "transmutação",
    "type": "5º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "horas"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "óleos e unguentos raros",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca um humanoide morto ou um pedaço de um humanoide morto. Considerando que a criatura não esteja morta a mais de 10 dias, a magia forma um novo corpo adulto para ele e então, chama a alma para entrar no corpo. Se a alma do alvo não estiver livre ou deseje fazê-lo, a magia falha."
        },
        {
          "type": "default",
          "description": "A magia forma um novo corpo para que a criatura habite, o que, provavelmente, fará com que a raça da criatura mude. O Mestre rola um d100 e consulta a tabela seguinte para determinar qual forma a criatura terá quando voltar a vida, ou o Mestre pode escolher uma forma."
        },
        {
          "type": "table",
          "caption": null,
          "header": [
            "D100",
            "Raça"
          ],
          "content": [
            [
              "01—04",
              "Draconato"
            ],
            [
              "05—13",
              "Anão, colina"
            ],
            [
              "14—21",
              "Anão, montanha"
            ],
            [
              "22—25",
              "Efo, negro"
            ],
            [
              "26—34",
              "Efo, alto"
            ],
            [
              "35—42",
              "Elfo, floresta"
            ],
            [
              "43—46",
              "Gnomo, floresta"
            ],
            [
              "47—52",
              "Gnomo, rochas"
            ],
            [
              "53—56",
              "Meio-elfo"
            ],
            [
              "57—60",
              "Meio-orc"
            ],
            [
              "61—68",
              "Halfing, pés leves"
            ],
            [
              "69—76",
              "Halfing, robusto"
            ],
            [
              "77—96",
              "Humano"
            ],
            [
              "97—00",
              "Tiefling"
            ]
          ]
        },
        {
          "type": "default",
          "description": "A criatura reencarnada lembra-se da sua vida e experiências anteriores. Ela mantém as capacidades que a sua forma original tinha, exceto por trocar sua raça original pela nova e mudar suas características raciais adequadamente."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "174"
    }
  },
  {
    "name": "Reflexos",
    "originalName": "Mirror Image",
    "level": 2,
    "school": "ilusão",
    "type": "2º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bruxo",
      "feiticeiro",
      "mago",
      "círculo da terra (costa)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Três duplicatas ilusórias de você aparecem no seu espaço. Até a magia acabar, as duplicatas se movem com você e copiam as suas ações, trocando de posição, tornando impossível rastrear qual imagem é real. Você pode usar sua ação para dissipar as duplicatas ilusórias."
        },
        {
          "type": "default",
          "description": "Cada vez que uma criatura mirar você com um ataque enquanto a magia durar, role um d20 para determinar se o ataque, em vez de você, mira uma das suas duplicatas."
        },
        {
          "type": "default",
          "description": "Se você tiver três duplicatas, você deve rolar um 6 ou maior para mudar o alvo do ataque para uma duplicata. Com duas duplicatas, você deve rolar um 8 ou maior. Com uma duplicata, você deve rolar um 11 ou maior."
        },
        {
          "type": "default",
          "description": "A CA de uma duplicata é igual a 10 + seu modificador de Destreza. Se um ataque atingir uma duplicata, ela é destruída. Uma duplicata só pode ser destruída por um ataque que a atinja. Ela ignora todos os outros danos e efeitos. A magia acaba quando todas as três duplicatas forem destruídas."
        },
        {
          "type": "default",
          "description": "Uma criatura não pode ser afetada por essa magia se não puder enxergar, se ela contar com outros sentidos além da visão, como percepção às cegas, ou se ela puder perceber ilusões como falsas, como com visão verdadeira."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "165"
    }
  },
  {
    "name": "Regeneração",
    "originalName": "Regenerate",
    "level": 7,
    "school": "transmutação",
    "type": "7º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma conta de oração e água benta",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura e estimula sua habilidade de cura natural. O alvo recupera 4d8 + 15 pontos de vida. Pela duração da magia o alvo recupera 1 ponto de vida no início de cada turno dela (10 pontos de vida por minuto)."
        },
        {
          "type": "default",
          "description": "Os membro decepados do corpo do alvo (dedos, pernas, rabos e assim por diante), se tiver algum, são restaurados após 2 minutos. Se você tiver a parte decepada e segura-la contra o topo, a magia, instantaneamente, faz com que o membro se grude ao toco."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "174"
    }
  },
  {
    "name": "Relâmpago",
    "originalName": "Lightning Bolt",
    "level": 3,
    "school": "evocação",
    "type": "3º nível de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago",
      "círculo da terra (montanha)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de pelo e uma haste de âmbar, cristal ou vidro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Um relâmpago forma uma linha de 30 metros [100 feet] de comprimento e 1,5 metro [5 feet] de largura que é disparado por você em uma direção, à sua escolha. Cada criatura na linha deve realizar um teste de resistência de Destreza. Uma criatura sofre 8d6 de dano elétrico se falhar na resistência ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "default",
          "description": "O relâmpago incendeia objetos inflamáveis na área que não estejam sendo vestidos ou carregados."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "159"
    }
  },
  {
    "name": "Remover Maldição",
    "originalName": "Remove Curse",
    "level": 3,
    "school": "abjuração",
    "type": "3º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bruxo",
      "clérigo",
      "mago",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Ao seu toque, todas as maldições afetando uma criatura ou objeto terminam. Se o objeto for um item mágico amaldiçoado, sua maldição persiste, mas a magia rompe a sintonia do portador com o objeto, então permitindo que ele o remova ou descarte."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "174"
    }
  },
  {
    "name": "Repouso Tranquilo",
    "originalName": "Gentle Repose",
    "level": 2,
    "school": "necromancia",
    "type": "2º nível de necromancia",
    "isRitual": true,
    "classes": [
      "clérigo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pitada de sal e uma peça de cobre colocada em cada um dos olhos do corpo, que devem permanecer ai pela duração",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "dias",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca um corpo ou outros restos mortais. Pela duração, o alvo estará protegido de decomposição e não pode se tornar um morto-vivo."
        },
        {
          "type": "default",
          "description": "A magia também estende, efetivamente, o limite de tempo para que o alvo seja trazido de volta a vida, já que os dias passados sob a influência dessa magia não contam no tempo limite de tais magias, como reviver os mortos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "148"
    }
  },
  {
    "name": "Repreensão Infernal",
    "originalName": "Hellish Rebuke",
    "level": 1,
    "school": "evocação",
    "type": "1º nível de evocação",
    "isRitual": false,
    "classes": [
      "bruxo"
    ],
    "casting": {
      "time": 1,
      "unit": "reação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você aponta seu dedo e a criatura que causou dano a você é, momentaneamente, envolta por chamas infernais. A criatura deve realizar um teste de resistência de Destreza. Ela sofre 2d10 de dano de fogo se falhar na resistência ou metade desse dano se obtiver sucesso."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d10 para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "154"
    }
  },
  {
    "name": "Resistência",
    "originalName": "Resistance",
    "level": 0,
    "school": "abjuração",
    "type": "truque de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um manto em miniatura",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura voluntária. Uma vez, antes da magia acabar, o alvo pode rolar um d4 e adicionar o valor jogado a um teste de resistência de sua escolha. Ele pode rolar o dado antes ou depois de realizar o teste de resistência. Então, a magia termina."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "175"
    }
  },
  {
    "name": "Respirar Na Água",
    "originalName": "Water Breathing",
    "level": 3,
    "school": "transmutação",
    "type": "3º nível de transmutação",
    "isRitual": true,
    "classes": [
      "druida",
      "feiticeiro",
      "mago",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pedaço de cana ou palha",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia concede a até dez criaturas voluntária que você possa ver, dentro do alcance, a habilidade de respirar embaixo d'água até a magia acabar. As criaturas afetadas também mantém sua forma normal de respiração."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "191"
    }
  },
  {
    "name": "Ressurreição",
    "originalName": "Resurrection",
    "level": 7,
    "school": "necromancia",
    "type": "7º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "horas"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um diamante",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura morta que não esteja assim a mais de um século, que não tenha morrido por velhice e que não seja um morto-vivo. Se a alma da criatura estiver disposta e livre, o alvo volta a vida com todos os seus pontos de vida."
        },
        {
          "type": "default",
          "description": "Essa magia neutraliza quaisquer venenos e cura doenças normais que afetavam a criatura no momento da morte. Essa magia, no entanto, não remove doenças mágicas, maldições ou efeitos similares; se eles não tiverem sido removidos antes da conjuração da magia, eles voltam a afetar a criatura quando ela volta a viver."
        },
        {
          "type": "default",
          "description": "Essa magia fecha todos os ferimentos mortais e restaura partes do corpo perdidas."
        },
        {
          "type": "default",
          "description": "Voltar dos mortos é um calvário. O alvo sofre –4 de penalidade em todas as suas jogadas de ataque, testes de resistência e testes de habilidade. A cada vez que o alvo terminar um descanso longo, as penalidades são reduzidas em 1, até desaparecerem."
        },
        {
          "type": "default",
          "description": "Conjurar essa magia para trazer de volta a vida uma criatura que tenha morrido a um ano ou mais tempo é extremamente desgastante para você. Até você terminar um descanso longo, você não pode conjurar magias novamente e terá desvantagem em todas as jogadas de ataque, testes de habilidade e testes de resistência."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "175"
    }
  },
  {
    "name": "Ressurreição Verdadeira",
    "originalName": "True Resurrection",
    "level": 9,
    "school": "necromancia",
    "type": "9º nível de necromancia",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "horas"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um borrifo de água benta e diamantes",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura morta que não esteja assim a mais de 200 anos e que tenha morrido por qualquer motivo, exceto velhice. Se a alma da criatura estiver disposta e livre, o alvo volta a vida com todos os seus pontos de vida."
        },
        {
          "type": "default",
          "description": "Essa magia fecha todos os ferimentos, neutraliza quaisquer venenos, cura todas as doenças e suspende quaisquer maldições que afligiam a criatura quando ela morreu. A magia recupera órgão e membros danificados ou perdidos."
        },
        {
          "type": "default",
          "description": "Essa magia pode, até mesmo, prover um novo corpo, se o original não existir mais, nesse caso, você deve falar o nome da criatura. Ela aparece em um espaço desocupado, à sua escolha, a até 3 metros [10 feet] de você."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "189"
    }
  },
  {
    "name": "Restauração Maior",
    "originalName": "Greater Restoration",
    "level": 5,
    "school": "abjuração",
    "type": "5º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "pó de diamante",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você imbui uma criatura que você toca, com energia positiva para desfazer um efeito debilitante. Você pode reduzir a exaustão do alvo em um nível ou remover um dos seguintes do alvo:"
        },
        {
          "type": "list",
          "items": [
            "Um efeito que enfeitice ou petrifique o alvo",
            "Uma maldição, incluindo a sintonização do alvo com um item mágico amaldiçoado",
            "Qualquer redução a um dos valores de habilidade do alvo",
            "Um efeito que esteja reduzindo o máximo de pontos de vida do alvo."
          ]
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "150"
    }
  },
  {
    "name": "Restauração Menor",
    "originalName": "Lesser Restoration",
    "level": 2,
    "school": "abjuração",
    "type": "2º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "druida",
      "paladino",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura e pode, ou acabar com uma doença ou uma condição que a esteja afligindo. A condição pode ser cega, surda, paralisada ou envenenada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "158"
    }
  },
  {
    "name": "Reviver Os Mortos",
    "originalName": "Raise Dead",
    "level": 5,
    "school": "necromancia",
    "type": "5º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "horas"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um diamante",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você traz uma criatura morta que você tocar de volta a vida, considerando que ela não esteja morta a mais de 10 dias. Se a alma da criatura estiver tanto disposta quando livre para juntar-se ao corpo dela, a criatura volta a vida com 1 ponto de vida."
        },
        {
          "type": "default",
          "description": "Essa magia também neutraliza quaisquer venenos e cura doenças não-mágicas que afetavam a criatura no momento da morte. Essa magia, no entanto, não remove doenças mágicas, maldições ou efeitos similares; se eles não tiverem sido removidos antes da conjuração da magia, eles voltam a afetar a criatura quando ela volta a viver. A magia não pode trazer uma criatura morta-viva de volta à vida."
        },
        {
          "type": "default",
          "description": "Essa magia fecha todos os ferimentos mortais, mas ela não restaura partes do corpo perdidas. Se a criatura não tiver uma parte do corpo ou órgão fundamental para sua sobrevivência – sua cabeça, por exemplo – a magia falha automaticamente."
        },
        {
          "type": "default",
          "description": "Voltar dos mortos é um calvário. O alvo sofre –4 de penalidade em todas as suas jogadas de ataque, testes de resistência e testes de habilidade. A cada vez que o alvo terminar um descanso longo, as penalidades são reduzidas em 1, até desaparecerem."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "173"
    }
  },
  {
    "name": "Revivificar",
    "originalName": "Revivify",
    "level": 3,
    "school": "necromancia",
    "type": "3º nível de necromancia",
    "isRitual": false,
    "classes": [
      "clérigo",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "diamantes",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura que tenha morrido dentro do último minuto. Essa criatura volta a vida com 1 ponto de vida. Essa magia não pode trazer de volta a vida criaturas que tenham morrido de velhice nem pode restaurar quaisquer partes do corpo perdidas."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "175"
    }
  },
  {
    "name": "Riso Histérico",
    "originalName": "Hideous Laughter",
    "level": 1,
    "school": "encantamento",
    "type": "1º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "pequenas tortas e uma pena que é balançada no ar",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma criatura, à sua escolha, que você possa ver, dentro do alcance, acha tudo hilariantemente engraçado e cai na gargalhada, se essa magia afetá-la. O alvo deve ser bem sucedido em um teste de resistência de Sabedoria ou cairá no chão, ficando incapacitado e incapaz de se levantar pela duração. Uma criatura com valor de Inteligência 4 ou inferior não é afetada."
        },
        {
          "type": "default",
          "description": "Ao final de cada um dos turnos dela e, toda vez que sofrer dano, o alvo pode realizar outro teste de resistência de Sabedoria. O alvo terá vantagem no teste de resistência se ele for garantido por ele ter sofrido dano. Se obtiver sucesso, a magia acaba."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "154"
    }
  },
  {
    "name": "Rogar Maldição",
    "originalName": "Bestow Curse",
    "level": 3,
    "school": "necromancia",
    "type": "3º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura e a criatura deve ser bem sucedida em um teste de resistência de Sabedoria ou será amaldiçoada pela duração da magia. Quando você conjura essa magia, escolha a natureza da maldição dentre as seguintes opções:"
        },
        {
          "type": "list",
          "items": [
            "Escolha um valor de habilidade. Enquanto amaldiçoado, o alvo tem desvantagem em testes de habilidade e testes de resistência feitos com esse valor de habilidade.",
            "",
            "Enquanto amaldiçoado, o alvo tem desvantagem nas jogadas de ataque contra você.",
            "Enquanto amaldiçoado, o alvo deve realizar um teste de resistência de Sabedoria no começo de cada um dos turnos dela. Se ela falhar, ela perderá sua ação aquele turno, não fazendo nada.",
            "Enquanto o alvo estiver amaldiçoado, seus ataques e magias causam 1d8 de dano necrótico extra a ele."
          ]
        },
        {
          "type": "default",
          "description": "Uma magia remover maldição termina esse efeito. Com a permissão do Mestre, você pode escolher um efeito alternativo de maldição, mas ele não deve ser mais poderoso que os descritos acima. O Mestre tem a palavra final sobre o efeito de uma maldição."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Se você conjurar essa magia usando um espaço de magia de 4° nível, a duração da concentração sobe para 10 minutos. Se você usar um espaço de magia de 5° ou 6° nível, a duração será de 8 horas. Se você usar um espaço de magia de 7° ou 8° nível, a duração será de 24 horas. Se você usar um espaço de magia de 9° nível, a magia dura até ser dissipada. Usar um espaço de magia de 5° nível ou superior faz com que a duração não necessite de concentração."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "121"
    }
  },
  {
    "name": "Salto",
    "originalName": "Jump",
    "level": 1,
    "school": "transmutação",
    "type": "1º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma perna traseira de gafanhoto",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura. A distância de salto da criatura é triplicada até a magia acabar."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "158"
    }
  },
  {
    "name": "Santuário",
    "originalName": "Sanctuary",
    "level": 1,
    "school": "abjuração",
    "type": "1º nível de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "juramento da devoção"
    ],
    "casting": {
      "time": 1,
      "unit": "ação bonus"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pequeno espelho de prata",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você protege uma criatura, dentro do alcance, contra ataques. Até a magia acabar, qualquer criatura que tentar atacar ou usar magias que causem dano contra criatura protegida deve, primeiro, realizar um teste de resistência de Sabedoria. Se falhar na resistência, a criatura deve escolher um novo alvo ou perderá o ataque ou magia. Essa magia não protege a criatura contra efeitos de área, como a explosão de uma bola de fogo."
        },
        {
          "type": "default",
          "description": "Se a criatura protegida realizar um ataque ou conjurar uma magia que afete uma criatura inimiga, essa magia acaba."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "176"
    }
  },
  {
    "name": "Santuário Particular",
    "originalName": "Private Sanctum",
    "level": 4,
    "school": "abjuração",
    "type": "4º nível de abjuração",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma folha de chumbo, um pedaço de vidro opaco, um chumaço de algodão ou pano e pó de crisólita",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você deixa uma área, dentro do alcance, magicamente segura. A área é um cubo que pode ser tão pequeno quanto 1,5 metro [5 feet] ou tão grande quanto 30 metros [100 feet] de cada lado. A magia permanece pela duração ou até você usar uma ação para dissipa-la."
        },
        {
          "type": "default",
          "description": "Quando você conjura essa magia, você decide que tipo de segurança ela fornecerá, escolhendo qualquer ou todas as propriedades a seguir:"
        },
        {
          "type": "list",
          "items": [
            "Sons não podem atravessar a barreira na fronteira da área protegida.",
            "A barreira da área protegida escura e nebulosa, impedindo visão (inclusive visão no escuro) através dela.",
            "Sensores criados por magia de adivinhação não podem aparecer dentro da área protegida ou atravessar a barreira no perímetro.",
            "As criaturas na área não podem ser alvo de magias de adivinhação.",
            "Nada pode se teletransportar para dentro ou para fora da área protegida.",
            "Viagem planar está bloqueada para dentro da área protegida."
          ]
        },
        {
          "type": "default",
          "description": "Conjurar essa magia no mesmo lugar, a cada dia, por um ano, torna o efeito permanente."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, você pode aumentar o tamanho do cubo em 30 metros [100 feet] de cada lado para cada nível do espaço acima do 4°. Então, você poderia proteger um cubo de até 60 metros [200 feet] de lado usando um espaço de magia de 5° nível."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "171"
    }
  },
  {
    "name": "Semiplano",
    "originalName": "Demiplane",
    "level": 8,
    "school": "conjuração",
    "type": "8º nível de conjuração",
    "isRitual": false,
    "classes": [
      "bruxo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": false,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma porta umbral em uma superfície sólida e lisa que você possa ver, dentro do alcance. A porta é grande o suficiente para permitir a passagem de criaturas Médias sem dificuldade. Quando aberta, a porta levará a um semiplano que parece uma sala vazia de 9 metros quadrados [30 feet square] de dimensão, feita de madeira ou pedra. Quando a magia termina, a porta desaparece e, qualquer criatura ou objeto dentro do semiplano, permanecerá preso lá, a medida que a porta desaparece do outro lado."
        },
        {
          "type": "default",
          "description": "Cada vez que você conjura essa magia, você pode criar um novo semiplano ou fazer a porta umbral se conectar a um semiplano que você tenha criado em uma conjuração anterior dessa magia. Além disso, se você conhecer a natureza e conteúdo do semiplano criado através da conjuração dessa magia por outra criatura, você pode fazer com que a porta umbral se conecte a esse semiplano."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "134"
    }
  },
  {
    "name": "Servo Invisível",
    "originalName": "Unseen Servant",
    "level": 1,
    "school": "conjuração",
    "type": "1º nível de conjuração",
    "isRitual": true,
    "classes": [
      "bardo",
      "bruxo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pedaço de barbante e um pouco de madeira",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia cria uma força invisível, sem mente e sem forma que realiza tarefas simples, ao seu comando, até a magia acabar. O servo aparece do nada em um espaço desocupado no chão, dentro do alcance. Ele tem CA 10, 1 ponto de vida, Força 2 e não pode atacar. Se ele cair a 0 pontos de vida, a magia acaba."
        },
        {
          "type": "default",
          "description": "Uma vez em cada um dos seus turnos, com uma ação bônus, você pode comandar, mentalmente, o servo para se mover até 4,5 metros [15 feet] e interagir com um objeto. O servo pode realizar tarefas simples que um serviçal humano faria, como buscar coisas, limpar, consertar, dobrar roupas, acender chamas, servir comida ou derramar vinho. Uma vez que um comando seja dado, o servo realiza a tarefa da melhor forma possível, até completar a tarefa, então esperará o seu próximo comando."
        },
        {
          "type": "default",
          "description": "Se você comandar o servo a realizar uma tarefa que poderia afasta-lo a mais de 18 metros [60 feet] de você, a magia termina."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "189"
    }
  },
  {
    "name": "Sexto Sentido",
    "originalName": "Foresight",
    "level": 9,
    "school": "adivinhação",
    "type": "9º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "druida",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pena de colibri",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura voluntária e a abençoa com uma habilidade limitada de ver o futuro iminente. Pela duração, o alvo não pode ser surpreendido e tem vantagem nas jogadas de ataque, testes de habilidade e testes de resistência. Além disso, outras criaturas tem desvantagem nas jogadas de ataque contra o alvo, pela duração."
        },
        {
          "type": "default",
          "description": "Essa magia termina imediatamente, se você conjura-la novamente antes da duração acabar."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "147"
    }
  },
  {
    "name": "Silêncio",
    "originalName": "Silence",
    "level": 2,
    "school": "ilusão",
    "type": "2º nível de ilusão",
    "isRitual": true,
    "classes": [
      "bardo",
      "clérigo",
      "patrulheiro",
      "círculo da terra (deserto)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Pela duração, nenhum som pode ser criado dentro ou atravessar uma esfera de 6 metros de raio [20-foot radius] centrada num ponto, à sua escolha, dentro do alcance. Qualquer criatura ou objeto totalmente dentro da esfera é imune a dano trovejante e as criaturas estarão surdas enquanto estiverem completamente dentro dela."
        },
        {
          "type": "default",
          "description": "Conjurar magias que inclua a componente verbal é impossível aí."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "179"
    }
  },
  {
    "name": "Símbolo",
    "originalName": "Symbol",
    "level": 7,
    "school": "abjuração",
    "type": "7º nível de abjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "mercúrio, fósforo e pó de diamante e opala",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada ou ativada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Quando você conjura essa magia, você inscreve um glifo nocivo, tanto sobre uma superfície (como uma secção de piso, uma parede ou mesa) quanto dentro de um objeto que possa ser fechado (como um livro, um pergaminho ou um baú de tesouro). Se você escolher uma superfície, o glifo pode cobrir uma área da superfície não superior a 3 metros [10 feet] de diâmetro. Se você escolher um objeto, o objeto deve permanecer no seu local; se ele for movido mais de 3 metros [10 feet] de onde você conjurou essa magia, o glifo será quebrado e a magia termina sem ser ativada."
        },
        {
          "type": "default",
          "description": "O glifo é quase invisível e requer um teste de Inteligência (Investigação) contra a CD da magia para ser encontrado."
        },
        {
          "type": "default",
          "description": "Você define o que ativa o glifo quando você conjura a magia. Para glifos inscritos em uma superfície, os gatilhos mais típicos incluem tocar ou ficar sobre o glifo, remover outro objeto cobrindo o glifo, aproximar-se a uma certa distância do glifo ou manipular um objeto onde o glifo esteja inscrito. Para glifos inscritos dentro de objetos, os gatilhos mais comuns incluem abrir o objeto, aproximar-se a uma certa distância do objeto ou ver ou ler o glifo."
        },
        {
          "type": "default",
          "description": "Você pode, posteriormente, aperfeiçoar o gatilho para que a magia se ative apenas sob certas circunstâncias ou de acordo com as características físicas (como altura ou peso), tipo de criatura (por exemplo, a proteção poderia ser definida para afetar aberrações ou drow) ou tendência. Você pode, também, definir condições para criaturas não ativarem o glifo, como aqueles que falarem determinada senha."
        },
        {
          "type": "default",
          "description": "Quando você inscreve o glifo, escolha uma das opções abaixo para seu efeito. Uma vez ativado, o glifo brilha, preenchendo uma esfera de 18 metros [60 feet] de raio com penumbra por 10 minutos, após esse tempo, a magia termina. Cada criatura na esfera, quando o glifo é ativado, é afetada por seu efeito, assim como uma criatura que entrar na esfera a primeira vez num turno ou termina seu turno nela."
        },
        {
          "type": "option",
          "value": "Atordoamento",
          "description": "Atordoamento. Cada alvo deve realizar um teste de resistência de Sabedoria e ficará atordoada por 1 minuto se falhar na resistência."
        },
        {
          "type": "option",
          "value": "Desespero",
          "description": "Desespero. Cada alvo deve realizar um teste de resistência de Carisma. Com uma falha na resistência, o alvo será consumido pelo desespero por 1 minuto. Durante esse período, ele não poderá atacar ou afetar qualquer criatura com habilidades, magias ou outros efeitos mágicos nocivos."
        },
        {
          "type": "option",
          "value": "Discórdia",
          "description": "Discórdia. Cada alvo deve realizar um teste de resistência de Sabedoria. Com uma falha na resistência, um alvo irá brigar e discutir com outras criaturas por 1 minuto. Durante esse período, ele será incapaz de se comunicar compreensivamente e terá desvantagem nas jogadas de ataque e testes de habilidade."
        },
        {
          "type": "option",
          "value": "Dor",
          "description": "Dor. Cada alvo deve realizar um teste de resistência de Constituição e ficará incapacitada com dores excruciantes por 1 minuto se falhar na resistência."
        },
        {
          "type": "option",
          "value": "Insanidade",
          "description": "Insanidade. Cada alvo deve realizar um teste de resistência de Inteligência. Com uma falha na resistência, o alvo é levado a loucura por 1 minuto. Uma criatura insana, não pode realizar ações, não entende o que as outras criaturas dizem, não pode ler e fala apenas coisas sem sentido. O Mestre controla seus movimentos, que serão erráticos."
        },
        {
          "type": "option",
          "value": "Medo",
          "description": "Medo. Cada alvo deve realizar um teste de resistência de Sabedoria e ficará amedrontado por 1 minuto se falhar na resistência. Enquanto estiver amedrontado, o alvo largará o que quer que esteja segurando e deve se afastar, pelo menos 9 metros [30 feet] do glifo em cada um dos seus turnos, se for capaz."
        },
        {
          "type": "option",
          "value": "Morte",
          "description": "Morte. Cada alvo deve realizar um teste de resistência de Constituição, sofrendo 10d10 de dano necrótico se falhar na resistência ou metade desse dano se passar na resistência."
        },
        {
          "type": "option",
          "value": "Sono",
          "description": "Sono. Cada alvo deve realizar um teste de resistência de Sabedoria e cairá inconsciente por 10 minutos se falhar na resistência. Uma criatura acorda se sofrer dano ou se alguém usar sua ação para sacudi-la e estapeá-la até ela acordar."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "184"
    }
  },
  {
    "name": "Similaridade",
    "originalName": "Seeming",
    "level": 5,
    "school": "ilusão",
    "type": "5º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia permite que você mude a aparência de qualquer quantidade de criaturas que você possa ver, dentro do alcance. Você dá a cada alvo que você escolheu uma nova aparência ilusória. Um alvo involuntário pode realizar um teste de resistência de Carisma, se for bem sucedido, a magia não o afetará."
        },
        {
          "type": "default",
          "description": "A magia disfarça a aparência física, assim como roupa, armadura, armas e equipamentos. Você pode fazer com que cada criatura pareça 30 centímetros [1 foot] mais baixa ou alta e aparente ser magra, gorda ou entre. Você não pode mudar o tipo do seu corpo, portanto, você deve adotar uma forma que tenha a mesma disposição básica de membros. No mais, a extensão da sua ilusão cabe a você. A magia permanece pela duração, a menos que você usa sua ação para dissipa-la precocemente."
        },
        {
          "type": "default",
          "description": "As mudanças criadas por essa magia não conseguem se sustentar perante uma inspeção física. Por exemplo, se você usar essa magia para adicionar um chapéu ao seu visual, objetos que passarem pelo chapéu e qualquer um que tocá-lo não sentirá nada ou sentirá sua cabeça e cabelo. Se você usar essa magia para aparentar ser mais magro do que é, a mão de alguém que a erguer para tocar em você, irá esbarrar em você enquanto ainda está, aparentemente, está no ar."
        },
        {
          "type": "default",
          "description": "Uma criatura pode usar a ação dela para inspecionar um alvo e fazer um teste de Inteligência (Investigação) contra a CD da sua magia. Se for bem sucedido, ele estará ciente de que o alvo está disfarçado."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "177"
    }
  },
  {
    "name": "Simulacro",
    "originalName": "Simulacrum",
    "level": 7,
    "school": "ilusão",
    "type": "7º nível de ilusão",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 12,
      "unit": "horas"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "neve ou gelo em quantidade suficiente para fazer uma cópia em tamanho real da criatura duplicada; algum cabelo, recortes de unha ou outro pedaço do corpo da criatura, colocado dentro da neve ou gelo; e polvilhadar sobre a duplicata pó de rubi",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você modela uma duplicata ilusória de uma besta ou humanoide, dentro do alcance, durante todo tempo de conjuração da magia. A duplicada é uma criatura, parcialmente real, formada de gelo ou neve e pode realizar ações e, no mais, ser tratada como uma criatura normal. Ela aparenta ser igual a original, mas tem metade do máximo de pontos de vida da criatura e é formada sem qualquer equipamento. No mais, a ilusão usa todas as estatísticas da criatura que ela copiou."
        },
        {
          "type": "default",
          "description": "O simulacro é amigável a você e às criaturas que você designar. Ele obedece aos seus comandos verbais, se movendo e agindo de acordo com seus desejos, agindo no seu turno em combate. O simulacro não possui capacidade de aprender ou de se tornar mais poderoso, portanto, ele nunca subirá de nível ou ganhará outras habilidades, nem poderá recuperar espaços de magia gastos."
        },
        {
          "type": "default",
          "description": "Se o simulacro sofrer dano, você pode repara-lo em um laboratório alquímico, usando ervas e minerais raros no valor de 100 po por ponto de vida recuperado. O simulacro dura até cair a 0 pontos de vida, no momento em que ele volta a ser neve e derrete instantaneamente."
        },
        {
          "type": "default",
          "description": "Se você conjurar essa magia novamente, qualquer duplicata atualmente ativa, que você criou com essa magia, é instantaneamente destruída."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "180"
    }
  },
  {
    "name": "Sinal De Esperança",
    "originalName": "Beacon Of Hope",
    "level": 3,
    "school": "abjuração",
    "type": "3º nível de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo",
      "juramento da devoção"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia confere esperança e vitalidade. Escolha qualquer quantidade de criaturas dentro do alcance. Pela duração, cada alvo tem vantagem em testes de resistência de Sabedoria e testes de resistência contra a morte e recuperam o máximo de pontos de vida possível em qualquer cura."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "121"
    }
  },
  {
    "name": "Sonho",
    "originalName": "Dream",
    "level": 5,
    "school": "ilusão",
    "type": "5º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "mago",
      "círculo da terra (planície)"
    ],
    "casting": {
      "time": 1,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "especial"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um punhado de areia, um pouco de tinta e uma pena de escrita arrancada de um pássaro adormecido",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia molda os sonhos de uma criatura. Escolha uma criatura que você conheça como alvo dessa magia. O alvo deve estar no mesmo plano de existência que você. Criaturas que não dormem, como elfos, não podem ser contatados por essa magia. Você, ou uma criatura voluntária que você tocar, entram em um estado de transe. Enquanto estiver em transe, o mensageiro está ciente dos seus arredores, mas não pode realizar ações ou se mover."
        },
        {
          "type": "default",
          "description": "Se o alvo estiver dormindo, o mensageiro aparece no sonho do alvo e pode conversar com o alvo enquanto ele estiver dormindo, até o limite da duração da magia. O mensageiro também pode modificar o meio ambiente do sonho, criando paisagens, objetos e outras imagens. O mensageiro pode sair do transe a qualquer momento, terminando o efeito da magia prematuramente. O alvo se lembra do sonho perfeitamente quando acorda. Se o alvo estiver acordado quando a magia for conjurada, o mensageiro saberá disso e pode, tanto terminar o transe (e a magia) quando esperar o alvo cair no sono, no momento em que o mensageiro aparecerá nos sonhos do alvo."
        },
        {
          "type": "default",
          "description": "Você pode fazer o mensageiro parecer monstruoso e aterrorizante para o alvo. Se o fizer, o mensageiro pode enviar uma mensagem de não mais que dez palavras, então o alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ecos da monstruosidade fantasmagórica criarão um pesadelo que permanecerá pela duração do sono do alvo e impede o alvo de ganhar qualquer benefício do descanso. Além disso, quando o alvo acordar, ele sofrerá 3d6 de dano psíquico."
        },
        {
          "type": "default",
          "description": "Se você tiver uma parte do corpo, mecha de cabelo, recorte de unha ou porção similar do corpo do alvo, o alvo realiza seu teste de resistência com desvantagem."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "138"
    }
  },
  {
    "name": "Sono",
    "originalName": "Sleep",
    "level": 1,
    "school": "encantamento",
    "type": "1º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um punhado de areia fina, pétalas de rosas ou um grilo",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia põem as criaturas num entorpecimento mágico. Jogue 5d8; o total é a quantidade de pontos de vida de criaturas afetados pela magia. As criaturas numa área de 6 metros de raio [20-foot radius], centrada no ponto escolhido, dentro do alcance, são afetadas em ordem ascendente dos pontos de vida atuais delas (ignorando criaturas inconscientes)."
        },
        {
          "type": "default",
          "description": "Começando com as criaturas com menos pontos de vida atuais, cada criatura afetada por essa magia cai inconsciente até a magia acabar, sofrer dano ou alguém usar sua ação para sacudi-la ou esbofeteá-la até acordar. Subtraia os pontos de vida de cada criatura do total antes de seguir para a próxima criatura com menos pontos de vida atuais. Os pontos de vida atuais da criatura devem ser iguais ou menores que o valor restante para que a criatura possa ser afetada."
        },
        {
          "type": "default",
          "description": "Mortos-vivos e criaturas imunes a serem enfeitiçadas não são afetadas por essa magia."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2º nível ou superior, jogue 2d8 adicionais para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "180"
    }
  },
  {
    "name": "Sugestão",
    "originalName": "Suggestion",
    "level": 2,
    "school": "encantamento",
    "type": "2º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": true,
      "material": {
        "description": "uma língua de cobra e, ou um pedaço de favo de mel ou uma gota de azeite doce",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você sugere um curso de atividade (limitado a uma ou duas sentenças) e, magicamente, influencia um criatura que você possa ver, dentro do alcance, e que possa ouvir e compreender você. Criaturas que não podem ser enfeitiçadas são imunes a esse efeito. A sugestão deve ser formulada de modo que o curso de ação soe razoável. Dizer para a criatura se esfaquear, se arremessar em uma lança, tocar fogo em si mesma ou fazer algum outro ato obviamente nocivo anulará o efeito da magia."
        },
        {
          "type": "default",
          "description": "O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele seguirá o curso de ação que você descreveu, da melhor forma possível. O curso de ação sugerido pode continuar por toda a duração. Se a atividade sugerida puder ser completada em um tempo menor, a magia termina quando o alvo completar o que lhe foi dito para que fizesse."
        },
        {
          "type": "default",
          "description": "Você pode, também, especificar condições que irão ativar uma atividade especial pela duração. Por exemplo, você poderia sugerir a um cavaleiro que entregasse seu cavalo de guerra ao primeiro mendigo que ele encontrar. Se a condição não for satisfeita antes da magia expirar, a atividade não será concluída."
        },
        {
          "type": "default",
          "description": "Se você ou um dos seus companheiros causar dano a uma criatura afetada por essa magia, a magia termina."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "183"
    }
  },
  {
    "name": "Sugestão Em Massa",
    "originalName": "Mass Suggestion",
    "level": 6,
    "school": "encantamento",
    "type": "6º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": true,
      "material": {
        "description": "a língua de uma cobra e um pouco de favo de mel ou uma gota de óleo doce",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você sugere um curso de atividade (limitado a uma ou duas sentenças) e, magicamente, influencia até dozes criaturas, à sua escolha, que você possa ver dentro do alcance e que possam ouvir e compreender você. Criaturas que não podem ser enfeitiçadas são imunes a esse efeito. A sugestão deve ser formulada de modo que o curso de ação soe razoável. Dizer para a criatura se esfaquear, se arremessar em uma lança, tocar fogo em si mesma ou fazer algum outro ato obviamente nocivo anulará o efeito da magia."
        },
        {
          "type": "default",
          "description": "Cada alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele seguirá o curso de ação que você descreveu, da melhor forma possível. O curso de ação sugerido pode continuar por toda a duração. Por exemplo, você poderia sugeria a um grupo de soldados que deem todo o seu dinheiro para o primeiro mendigo que encontrarem. Se a condição não for atingida antes da magia acabar, a atividade não é realizada."
        },
        {
          "type": "default",
          "description": "Se você ou um dos seus companheiros causar dano a uma criatura afetada por essa magia, a magia termina para aquela criatura."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 7° nível, a duração será de 10 dias. Quando você usar um espaço de magia de 8° nível, a duração será de 30 dias. Quando você usar um espaço de magia de 9° nível, a duração será de 1 ano e 1 dia."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "163"
    }
  },
  {
    "name": "Sussurros Dissonantes",
    "originalName": "Dissonant Whispers",
    "level": 1,
    "school": "encantamento",
    "type": "1º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você sussurra uma melodia dissonante que apenas uma criatura, à sua escolha, dentro do alcance pode ouvir, causando-lhe uma terrível dor. O alvo deve realizar um teste de resistência de Sabedoria. Se falhar na resistência, ele sofrerá 3d6 de dano psíquico e deve, imediatamente, usar sua reação, se disponível, para se mover para o mais longe possível de você. A criatura não se moverá para um terreno obviamente perigoso, como uma fogueira ou abismo. Se obtiver sucesso na resistência, o alvo sofre metade do dano e não precisa se afastar de você. Uma criatura surda obtém sucesso automaticamente na sua resistência."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 1°."
    },
    "font": {
      "reference": "",
      "page": ""
    }
  },
  {
    "name": "Taumaturgia",
    "originalName": "Thaumaturgy",
    "level": 0,
    "school": "transmutação",
    "type": "truque de transmutação",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você manifesta pequenas maravilhas, um sinal de poder sobrenatural, dentro do alcance. Você cria um dos seguintes efeitos mágicos dentro do alcance:"
        },
        {
          "type": "list",
          "items": [
            "Sua voz ressoa com o triplo do volume normal por 1 minuto.",
            "Você provoca tremores inofensivos no solo por 1 minuto.",
            "Você cria, instantaneamente, um som que se origina de um ponto, à sua escolha, dentro do alcance, como o barulho de um trovão, o gralhar de um corvo ou sussurros sinistros.",
            "Você, instantaneamente, faz uma porta ou janela destrancada se abrir ou se fechar.",
            "Você altera a aparência dos seus olhos por 1 minuto."
          ]
        },
        {
          "type": "default",
          "description": "Se você conjurar essa magia diversas vezes, você pode ter até três dos efeitos de 1 minuto ativos por vez, e você pode dissipar um desses efeitos com uma ação."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "187"
    }
  },
  {
    "name": "Teia",
    "originalName": "Web",
    "level": 2,
    "school": "conjuração",
    "type": "2º nível de conjuração",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pedaço de teia de aranha",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você conjura uma massa de teias espessas e pegajosas num ponto, à sua escolha, dentro do alcance. As teias preenchem um cubo de 6 metros [20-foot cube] naquele ponto, pela duração. As teias são terreno difícil e causam escuridão leve na área delas."
        },
        {
          "type": "default",
          "description": "Se as teias não estiverem sendo suportadas por duas massas sólidas (como duas paredes ou árvores) ou em camadas sobre um chão, parede ou teto, a teia conjurada desaba sobre si mesma e a magia termina no início do seu próximo turno. As teias em camadas sobre uma superfície plana terão 1,5 metro [5 feet] de profundidade."
        },
        {
          "type": "default",
          "description": "Cada criatura que começar seu turno nas teias ou entrar nelas durante seu turno, deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura estará impedida enquanto permanecer nas teias ou até se libertar."
        },
        {
          "type": "default",
          "description": "Uma criatura impedida pelas teias pode usar sua ação para realizar um teste de Força contra a CD da magia. Se obtiver sucesso, ela não estará mais impedida."
        },
        {
          "type": "default",
          "description": "As teias são inflamáveis. Qualquer cubo de 1,5 metro [5-foot cube] de teia exposto ao fogo, é consumida por ele em 1 rodada, causando 2d4 de dano de fogo a qualquer criatura que começar seu turno nas chamas."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "192"
    }
  },
  {
    "name": "Telecinésia",
    "originalName": "Telekinesis",
    "level": 5,
    "school": "transmutação",
    "type": "5º nível de transmutação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você adquire a habilidade de mover ou manipular criaturas ou objetos através do pensamento. Quando você conjura a magia e, com sua ação a cada turno, pela duração, você pode exercer sua vontade sobre uma criatura ou objeto que você possa ver, dentro do alcance, causando os efeitos apropriados abaixo. Você pode afetar o mesmo alvo rodada após rodada, ou escolher um novo a qualquer momento. Se você mudar de alvos, o alvo anterior não será mais afetado pela magia."
        },
        {
          "type": "option",
          "value": "Criatura",
          "description": "Criatura. Você pode tentar mover uma criatura Enorme ou menor. Faça um teste de habilidade com sua habilidade de conjuração resistido por um teste Força da criatura. Se você vencer a disputa, você move a criatura até 9 metros [30 feet] em qualquer direção, incluindo para cima, mas não além do alcance da magia. Até o final do seu próximo turno, a criatura estará impedida pelo seu agarrão telecinético. Uma criatura erguida para cima estará suspensa no ar."
        },
        {
          "type": "default",
          "description": "Em rodadas subsequente, você pode usar sua ação para tentar manter seu agarrão telecinético na criatura repetindo o teste resistido."
        },
        {
          "type": "option",
          "value": "Objeto",
          "description": "Objeto. Você pode tentar mover um objeto pesando até 500 quilos. Se o objeto não estiver sendo vestido ou carregado, você o move, automaticamente, até 9 metros [30 feet] em qualquer direção, mas não além do alcance dessa magia."
        },
        {
          "type": "default",
          "description": "Se o objeto estiver sendo vestido ou carregado por uma criatura, você deve realizar um teste de habilidade com sua habilidade de conjuração resistido por um teste de Força da criatura. Se você for bem sucedido, você arranca o objeto da criatura e o move até 9 metros [30 feet], em qualquer direção, mas não além do alcance dessa magia."
        },
        {
          "type": "default",
          "description": "Você pode exercer um controle refinado sobre os objetos com seu agarrão telecinético, como manipular ferramentas simples, abrir uma porta ou um recipiente, guardar ou recuperar um item de um recipiente aberto ou derramar o conteúdo de um frasco."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "185"
    }
  },
  {
    "name": "Teletransporte",
    "originalName": "Teleport",
    "level": 7,
    "school": "conjuração",
    "type": "7º nível de conjuração",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 3,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia, instantaneamente, transporta você e até oito criaturas voluntárias, à sua escolha, que você possa ver dentro do alcance ou um único objeto que você possa ver no alcance, para um destino que você selecionou. Se você for afetar um objeto, ele deve ser capaz de caber inteiro dentro de um cubo de 3 metros [10-foot cube] e não pode estar sendo empunhado ou carregado por uma criatura involuntária."
        },
        {
          "type": "default",
          "description": "O destino que você escolher deve ser conhecido por você e deve ser no mesmo plano de existência que você está. Sua familiaridade com o destino determina se você chegará nele com sucesso. O Mestre rola um d100 e consulta a tabela."
        },
        {
          "type": "table",
          "caption": null,
          "header": [
            "Familiaridade",
            "Fiasco",
            "Área Similar",
            "Fora Do Alvo",
            "No Alvo"
          ],
          "content": [
            [
              "Círculo permanente",
              "—",
              "—",
              "—",
              "01—100"
            ],
            [
              "Objeto associado",
              "—",
              "—",
              "—",
              "01—100"
            ],
            [
              "Muito familiar",
              "01—05",
              "06—13",
              "14—24",
              "25—100"
            ],
            [
              "Visto casualmente",
              "01—33",
              "34—43",
              "44—53",
              "54—100"
            ],
            [
              "Visto uma vez",
              "01—43",
              "44—53",
              "54—73",
              "74—100"
            ],
            [
              "Descrição",
              "01—43",
              "44—53",
              "54—73",
              "74—100"
            ],
            [
              "Descrição falsa",
              "01—50",
              "51—100",
              "—",
              "—"
            ]
          ]
        },
        {
          "type": "option",
          "value": "Familiaridade.",
          "description": "Familiaridade. “Círculo permanente” significa um círculo de teletransporte permanente o qual você conhece a sequência de selos. “Objeto associado” significa que você possui um objeto retirado do destino desejado nos últimos seis meses, como um livro da biblioteca do mago, roupa de cama de uma suíte real ou um pedaço de mármore da tumba secreta do lich."
        },
        {
          "type": "default",
          "description": "“Muito familiar” é um lugar que você já tenha ido muitas vezes, um lugar que você estudou cuidadosamente ou um local que você possa ver enquanto conjura a magia. “Visto casualmente” é algum lugar que você tenha visto mais de uma vez, mas que não seja muito familiar. “Visto uma vez” é um lugar que você só viu uma vez, possivelmente através de magia. “Descrição” é um lugar cuja localização e aparência você conhece através da descrição de outrem, talvez através de um mapa."
        },
        {
          "type": "default",
          "description": "“Destino falso” é um local que não existe. Talvez você tenha tentado espionar o santuário de um inimigo, mas, ao invés, viu uma ilusão ou você está tentando se teletransportar para um local familiar que não existe mais."
        },
        {
          "type": "option",
          "value": "No Alvo.",
          "description": "No Alvo. Você e seu grupo (ou objeto alvo) aparecem onde você queria."
        },
        {
          "type": "option",
          "value": "Fora do Alvo.",
          "description": "Fora do Alvo. Você e seu grupo (ou objeto alvo) aparecem a uma distância aleatória fora do destino em uma direção aleatória. A distância do alvo é 1d10 x 1d10 por cento da distância que você viajou. Por exemplo, se você tentou viajar 180 quilômetros [120 miles], mas apareceu fora do alvo e rolou um 5 e um 3 nos dois d10s, então você saiu do alvo 15 por cento ou 27 quilômetros [18 miles]. O Mestre determina a direção de fora do alvo aleatoriamente rolando um d8 e designando 1 como norte, 2 como nordeste, 3 como leste e assim por diante ao redor dos pontos cardeais. Se você seria teletransportado para uma cidade costeira, podendo cair a 27 quilômetros [18 miles] dela, no mar, você poderia ter problemas."
        },
        {
          "type": "option",
          "value": "Área Similar.",
          "description": "Área Similar. Você e seu grupo (ou objeto alvo) aparecem em uma área diferente que, visualmente ou tematicamente, é similar a área alvo. Se você estava indo para o laboratório na sua casa, por exemplo, você pode parar em outro laboratório de mago ou em uma loja de suprimentos alquímicos que terá muitas ferramentas iguais às encontradas no seu laboratório. Geralmente, você aparecerá no local similar mais próximo, mas já que a magia não tem limite de alcance, você pode, concebivelmente, viajar para qualquer lugar no plano."
        },
        {
          "type": "option",
          "value": "Fiasco.",
          "description": "Fiasco. A mágica imprevisível da magia resulta em uma jornada difícil. Cada criatura teletransportada (ou o objeto alvo) sofrem 3d10 de dano de energia e o Mestre rola novamente a tabela para ver onde você foi parar (fiascos múltiplos podem ocorrer, causando dano a cada vez)."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "185"
    }
  },
  {
    "name": "Teletransporte Por Árvores",
    "originalName": "Transport Via Plants",
    "level": 6,
    "school": "conjuração",
    "type": "6º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 3,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "rodadas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia cria uma ligação mágica entre uma planta inanimada Grande ou maior, dentro do alcance, e outra planta a qualquer distância, no mesmo plano de existência. Você deve ter visto ou tocado a planta de destino, pelo menos uma vez antes. Pela duração, qualquer criatura pode entrar na planta alvo e sair da planta destino usando 1,5 metro [5 feet] de movimento."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "188"
    }
  },
  {
    "name": "Tempestade Da Vingança",
    "originalName": "Storm Of Vengeance",
    "level": 9,
    "school": "conjuração",
    "type": "9º nível de conjuração",
    "isRitual": false,
    "classes": [
      "druida"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "linha de visão"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma agitada nuvem tempestuosa se forma, centrada num ponto que você possa ver e se espalha num raio de 108 metros [360 feet]. Relâmpagos riscam a área, trovões ressoam e ventos fortes silvam. Cada criatura embaixo da nuvem (a não mais de 1.500 metros [5.000 feet] abaixo da nuvem) quando ela aparece deve realizar um teste de resistência de Constituição. Com uma falha na resistência, uma criatura sofre 2d6 de dano trovejante e ficará surda por 5 minutos."
        },
        {
          "type": "default",
          "description": "A cada rodada que você mantiver a concentração nessa magia, a tempestade produzirá efeitos adicionais no seu turno."
        },
        {
          "type": "option",
          "value": "Rodada 2",
          "description": "Rodada 2. Chuva ácida cai da nuvem. Cada criatura e objeto abaixo dela nuvem sofre 1d6 de dano ácido."
        },
        {
          "type": "option",
          "value": "Rodada 3",
          "description": "Rodada 3. Você convoca seis relâmpagos da nuvem para atingir seis criaturas ou objetos, à sua escolha, abaixo da nuvem. Uma mesma criatura ou objeto não pode ser atingido por mais de um raio. Uma criatura atingida deve realizar um teste de resistência de Destreza. A criatura sofrerá 10d6 de dano elétrico se falhar na resistência ou metade desse dano se passar."
        },
        {
          "type": "option",
          "value": "Rodada 4",
          "description": "Rodada 4. Granizo chove da nuvem. Cada criatura abaixo da nuvem sofre 2d6 de dano de concussão."
        },
        {
          "type": "option",
          "value": "Rodada 5–10",
          "description": "Rodada 5–10. Ventos e chuva gelados atacam a área abaixo da nuvem. A área se torna terreno difícil e de escuridão densa. Cada criatura sofre 1d6 de dano de frio. Ataques com armas à distância na área são impossíveis. O vento e chuva contam como uma distração grave com os propósitos de manter a concentração em magias. Finalmente, ventos fortes (entre 30 [20 miles] e 75 quilômetros [50 miles] por hora) automaticamente dispersam nevoa, neblina e fenômenos similares na área, independentemente de serem mundanos ou mágicos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "183"
    }
  },
  {
    "name": "Tempestade De Fogo",
    "originalName": "Fire Storm",
    "level": 7,
    "school": "evocação",
    "type": "7º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida",
      "feiticeiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 45,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma tempestade feita de camadas de chamas crepitantes aparece num local, à sua escolha, dentro do alcance. A área da tempestade consiste de até dez cubos de 3 metros [10-foot cubes], que você pode organizar como desejar. Cada cubo deve ter, pelo menos, uma face adjacente a face de outro cubo. Cada criatura na área deve realizar um teste de resistência de Destreza. Ela sofre 7d10 de dano de fogo se falhar na resistência, ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "default",
          "description": "O fogo causa dano aos objetos na área e incendeia objetos inflamáveis que não estejam sendo vestidos ou carregados. Se desejar, a vida vegetal na área pode não ser afetada por essa magia."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "145"
    }
  },
  {
    "name": "Tempestade De Gelo",
    "originalName": "Ice Storm",
    "level": 4,
    "school": "evocação",
    "type": "4º nível de evocação",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 91,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de poeira e algumas gotas de água",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Uma rajada de pedras de gelo batem no chão em um cilindro de 6 metros de raio [20-foot radius] por 12 metros de altura [40-foot-high], centrado num ponto dentro do alcance. Cada criatura no cilindro deve realizar um teste de resistência de Destreza. Uma criatura sofre 2d8 de dano de concussão e 4d6 de dano de frio se falhar na resistência ou metade desse dano se obtiver sucesso."
        },
        {
          "type": "default",
          "description": "O granizo torna a área da tempestade em terreno difícil até o final do seu próximo turno."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o dano de concussão aumenta em 1d8 para cada nível do espaço acima do 4°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "155"
    }
  },
  {
    "name": "Tentáculos Negros",
    "originalName": "Black Tentacles",
    "level": 4,
    "school": "conjuração",
    "type": "4º nível de conjuração",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 27,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pedaço de tentáculo de um polvo gigante ou lula gigante",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Tentáculos negros retorcidos preenchem um quadrado de 6 metros [20-foot square] no chão, que você possa ver dentro do alcance. Pela duração, esses tentáculos transformam o solo na área em terreno difícil."
        },
        {
          "type": "default",
          "description": "Quando uma criatura adentrar a área afetada pela primeira vez em um turno ou começar o turno dela lá, a criatura deve ser bem sucedida num teste de resistência de Destreza ou sofrerá 3d6 de dano de concussão e estará impedida pelos tentáculos até o fim da magia. Uma criatura que começar seu turno na área e já estiver impedida pelos tentáculos sofre 3d6 de dano de concussão."
        },
        {
          "type": "default",
          "description": "Uma criatura impedida pelos tentáculos pode usar sua ação para realizar um teste de Força ou Destreza (à escolha dela) contra a CD da sua magia. Se ela obtiver sucesso, ela se libertará."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "121"
    }
  },
  {
    "name": "Terremoto",
    "originalName": "Earthquake",
    "level": 8,
    "school": "evocação",
    "type": "8º nível de evocação",
    "isRitual": false,
    "classes": [
      "clérigo",
      "druida",
      "feiticeiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 152,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de poeira, uma pedra e um pedaço de barro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria um distúrbio sísmico num ponto no solo, que você possa ver dentro do alcance. Pela duração, um tremor intenso rompe o solo em um círculo com 30 metros [100 feet] de raio centrado no ponto e sacode criaturas e estruturas em contato com o chão na área."
        },
        {
          "type": "default",
          "description": "O solo na área torna-se terreno difícil. Cada criatura no solo que estiver se concentrando, deve realizar um teste de resistência de Constituição. Se falha na resistência, a concentração da criatura é interrompida."
        },
        {
          "type": "default",
          "description": "Quando você conjura essa magia, e ao final de cada turno que você gastar se concentrando nela, cada criatura no solo na área deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura será derrubada no chão."
        },
        {
          "type": "default",
          "description": "Essa magia pode ter efeitos adicionais a depender do terreno na área, como determinado pelo Mestre."
        },
        {
          "type": "option",
          "value": "Fissuras",
          "description": "Fissuras. Fissuras se abrem por toda área da magia, no começo do seu próximo turno, após você conjurar a magia. Um total de 1d6 dessas fissuras se abrem em locais escolhidos pelo Mestre. Cada um tem 1d10 x 3 metros [10 feet] de profundidade, 3 metros [10 feet] de largura e se estende de uma extremidade até o lado oposto da área da magia. Uma criatura que estiver em um ponto onde uma fissura se abriu deve ser bem sucedido num teste de resistência de Destreza ou cairá dentro dela. Uma criatura que obtenha sucesso na resistência se move com a margem da fissura, à medida que ela se abre."
        },
        {
          "type": "default",
          "description": "Uma fissura que se abra abaixo de uma estrutura faz com que ela, automaticamente, desmorone (veja abaixo)."
        },
        {
          "type": "option",
          "value": "Estruturas",
          "description": "Estruturas. O tremor causa 50 de dano de concussão a qualquer estrutura em contato com o solo na área, quando você conjurar a magia e, no início de cada turno até a magia terminar. Se a estrutura cair a 0 pontos de vida, ela desmorona e, potencialmente, fere criaturas próximas. Uma criatura a uma distância inferior a metade da altura da estrutura deve realizar um teste de resistência de Destreza. Se falhar na resistência, a criatura sofrerá 5d6 de dano de concussão, cairá no chão e estará soterrada nos escombros, precisando de um teste de Força (Atletismo) com CD 20, usando uma ação, para escapar. O Mestre pode ajustar a CD para cima ou para baixo, dependendo da natureza dos escombros. Se obtiver sucesso na resistência, a criatura sofre metade do dano e não estará caída ou soterrada."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "139"
    }
  },
  {
    "name": "Terreno Alucinógeno",
    "originalName": "Hallucinatory Terrain",
    "level": 4,
    "school": "ilusão",
    "type": "4º nível de ilusão",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "druida",
      "mago"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": 91,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pedra, um galho e um pouco de planta verde",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 24,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você faz com que um terreno natural num cubo de 45 metros (150-foot cube) dentro do alcance, pareça, soe e cheire com outro tipo de terreno natural. Portanto, campos abertos ou uma estrada podem ser modificados para se assemelharem a um pântano, colina, fenda ou algum outro tipo de terreno difícil ou intransponível. Uma lagoa pode ser modificada para se parecer com um prado, um precipício com um declive suave ou um barranco pedregoso com uma estrada larga e lisa. Estruturas manufaturadas, equipamentos e criaturas dentro da área não tem suas aparências modificadas."
        },
        {
          "type": "default",
          "description": "As características táteis do terreno são inalteradas, portanto, as criaturas que adentrarem na área estão susceptíveis de ver através da ilusão. Se a diferença não for obvia ao toque, uma criatura que examine a ilusão cuidadosamente, pode realizar um teste de Inteligência (Investigação) contra a CD da magia para desacredita-la. Uma criatura que discernir a ilusão do que ela é, a enxerga como uma imagem vaga sobrepondo o terreno."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "152"
    }
  },
  {
    "name": "Toque Arrepiante",
    "originalName": "Chill Touch",
    "level": 0,
    "school": "necromancia",
    "type": "truque de necromancia",
    "isRitual": false,
    "classes": [
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 36,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "rodadas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma mão esquelética fantasmagórica no espaço de uma criatura, dentro do alcance. Realize um ataque à distância com magia contra a criatura para afetá-la com o frio sepulcral. Se atingir, a criatura sofre 1d8 de dano necrótico e não poderá recuperar pontos de vida até o início do seu próximo turno. Até lá, a mão ficará presa ao alvo."
        },
        {
          "type": "default",
          "description": "Se você atingir um alvo morto-vivo, ele terá desvantagem nas jogadas de ataque contra você até o final do seu próximo turno."
        },
        {
          "type": "default",
          "description": "O dano dessa magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8)."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "124"
    }
  },
  {
    "name": "Toque Chocante",
    "originalName": "Shocking Grasp",
    "level": 0,
    "school": "evocação",
    "type": "truque de evocação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Eletricidade surge da sua mão para transmitir um choque em uma criatura que você tentar tocar. Faça um ataque corpo-a-corpo com magia contra o alvo. Você tem vantagem na jogada de ataque se o alvo estiver vestindo qualquer armadura de metal. Se atingir, o alvo sofre 1d8 de dano elétrico e não pode usar reações até o início do próximo turno dele."
        },
        {
          "type": "default",
          "description": "O dano da magia aumenta em 1d8 quando você alcança o 5° nível (2d8), 11° nível (3d8) e 17° nível (4d8)."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "179"
    }
  },
  {
    "name": "Toque Vampírico",
    "originalName": "Vampiric Touch",
    "level": 3,
    "school": "necromancia",
    "type": "3º nível de necromancia",
    "isRitual": false,
    "classes": [
      "bruxo",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "O toque da sua mão coberta de sombras pode drenar a força vital dos outros para curar seus ferimentos. Realize um ataque corpo-a-corpo com magia contra uma criatura ao seu alcance. Se atingir, o alvo sofre 3d6 de dano necrótico e você recupera pontos de vida igual à metade do dano necrótico causado. Até a magia acabar, você pode realizar o ataque novamente, no seu turno, com uma ação."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, o dano aumenta em 1d6 para cada nível do espaço acima do 3°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "189"
    }
  },
  {
    "name": "Tranca Arcana",
    "originalName": "Arcane Lock",
    "level": 2,
    "school": "abjuração",
    "type": "2º nível de abjuração",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "pó de ouro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "até ser dissipada",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma porta, janela, portão, baú ou outra entrada fechada e ela ficará trancada pela duração. Você e as criaturas que você designar, quando você conjurar essa magia, podem abrir o objeto normalmente. Você também pode definir uma senha que, quando falada a 1,5 metro [5 feet] do objeto, suprime a magia por 1 minuto. De outra forma, ele é intransponível até ser quebrado ou a magia seja dissipada ou suprimida. Conjurar arrombar no objeto suprime a tranca arcana por 10 minutos."
        },
        {
          "type": "default",
          "description": "Enquanto estiver sob efeito dessa magia, o objeto é mais difícil de quebrar ou de forçar para abrir; a CD para quebra-lo ou de arromba-lo aumenta em 10."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "118"
    }
  },
  {
    "name": "Truque De Corda",
    "originalName": "Rope Trick",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "pó de extrato de milho e um laço de pergaminho trançado",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca um pedaço de corda que tenha até 18 metros [60 feet] de comprimento. Uma ponta da corda então, se ergue no ar até toda a corda estar erguida e perpendicular ao solo. Na ponta de cima da corda, uma entrada invisível se abre para um espaço extra-dimensional que permanece até a magia acabar."
        },
        {
          "type": "default",
          "description": "O espaço extra-dimensional pode ser alcançado escalando a corda até o topo. O espaço pode abrigar até oito criaturas Médias ou menores. A corda pode ser puxada para dentro do buraco, fazendo-a desaparecer para os observadores do lado de fora do espaço."
        },
        {
          "type": "default",
          "description": "Ataques e magias não podem ultrapassar a entrada, entrando ou saindo do espaço extra-dimensional, mas quem está dentro pode ver o lado de fora, como se estivesse olhando por uma janela de 0,9 metro [3 feet] por 1,5 metro [5 feet], centrada na corda."
        },
        {
          "type": "default",
          "description": "Tudo que estiver dentro do espaço extra-dimensional cai quando a magia acabar."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "176"
    }
  },
  {
    "name": "Velocidade",
    "originalName": "Haste",
    "level": 3,
    "school": "transmutação",
    "type": "3º nível de transmutação",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago",
      "círculo da terra (planície)"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 9,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma raspa de raiz de alcaçuz",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Escolha uma criatura voluntária que você possa ver, dentro do alcance. Até a magia acabar, o deslocamento do alvo é dobrado, ele ganha +2 de bônus na CA, ele tem vantagem em testes de resistência de Destreza e ganha uma ação adicional em cada um dos turnos dele. A ação pode ser usada apenas para realizar as ações de Atacar (um ataque com arma, apenas), Disparada, Desengajar, Esconder ou Usar um Objeto."
        },
        {
          "type": "default",
          "description": "Quando a magia acabar, o alvo não poderá se mover ou realizar ações até depois do seu próximo turno, à medida que uma onda de letargia toma conta dele."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "153"
    }
  },
  {
    "name": "Ver O Invisível",
    "originalName": "See Invisibility",
    "level": 2,
    "school": "adivinhação",
    "type": "2º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um pouco de talco e um pó de prata polvilhado",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Pela duração, você vê criaturas e objetos invisíveis como se eles fossem visíveis e você pode ver no Plano Etéreo. Criaturas e objetos etéreos parecem espectrais e translúcidos."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "177"
    }
  },
  {
    "name": "Viagem Planar",
    "originalName": "Plane Shift",
    "level": 7,
    "school": "conjuração",
    "type": "7º nível de conjuração",
    "isRitual": false,
    "classes": [
      "bruxo",
      "clérigo",
      "druida",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma haste metálica bifurcada valendo, sintonizada com um plano de existência em particular,",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você e até oito criaturas voluntárias, que estejam de mãos dadas em um círculo, são transportadas para um plano de existência diferente. Você pode especificar o destino alvo em termos gerais, como a Cidade de Bronze do Plano Elemental do Fogo ou o palácio de Dispater na segunda camada dos Nove Infernos e você aparece no ou perto do destino. Se você estiver tentando chegar a Cidade de Bronze, por exemplo, você poderia chegar na Estrada de Aço dela, em frente aos Portões de Cinzas ou contemplando a cidade do outro lado do Mar de Fogo, à critério do Mestre."
        },
        {
          "type": "default",
          "description": "Alternativamente, se você conhecer a sequência de selos do círculo de teletransporte em outro plano de existência, essa magia pode leva-lo para esse círculo. Se o círculo de teletransporte for muito pequeno para comportar as criaturas que você está transportando, elas aparecerão no espaço desocupado mais próximo do círculo."
        },
        {
          "type": "default",
          "description": "Você pode usar essa magia para banir uma criatura involuntária para outro plano. Escolha uma criatura ao seu alcance e realize um ataque corpo-a-corpo com magia contra ela. Se atingir, a criatura deve realizar um teste de resistência de Carisma. Se a criatura falhar na resistência, ela é transportada para um local aleatório no plano de existência que você especificou. Uma criatura, uma vez transportada, deve encontrar seu próprio meio de retornar para seu plano de existência atual."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "168"
    }
  },
  {
    "name": "Vidência",
    "originalName": "Scrying",
    "level": 5,
    "school": "adivinhação",
    "type": "5º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "clérigo",
      "druida",
      "mago"
    ],
    "casting": {
      "time": 10,
      "unit": "minutos"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um foco valendo, como uma bola de cristal, espelho de prata ou fonte cheia de água benta,",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": true
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você pode ver e ouvir uma criatura em particular à sua escolha que esteja no mesmo plano de existência que você. O alvo deve realizar um teste de resistência de Sabedoria, que é modificador de acordo com o quão bem você conhece o alvo e o tipo de conexão física que você tem com ele. Se um alvo souber que você está conjurando essa magia, ele pode falhar no teste de resistência voluntariamente se ele quiser ser observado."
        },
        {
          "type": "table",
          "caption": null,
          "header": [
            "Conhecimento",
            "Modificador De Resistência"
          ],
          "content": [
            [
              "Segunda mão (você ouviu falar do alvo)",
              "+5"
            ],
            [
              "Primeira mão (você foi apresentado ao alvo)",
              "+0"
            ],
            [
              "Familiar (você conhece bem o alvo)",
              "-5"
            ]
          ]
        },
        {
          "type": "table",
          "caption": null,
          "header": [
            "Conexão",
            "Modificador De Resistência"
          ],
          "content": [
            [
              "Descrição ou foto",
              "-2"
            ],
            [
              "Pertences ou roupas",
              "-4"
            ],
            [
              "Parte do corpo, mecha de cabelo, recorte de unha ou simular",
              "-10"
            ]
          ]
        },
        {
          "type": "default",
          "description": "Com um sucesso na resistência, o alvo não é afetado e você não pode usar essa magia contra ele novamente por 24 horas."
        },
        {
          "type": "default",
          "description": "Se falhar na resistência, a magia cria um sensor invisível a até 3 metros [10 feet] do alvo. Você pode ver e ouvir através do sensor, como se você estivesse onde ele está. O sensor se move com o alvo, permanecendo a 3 metros [10 feet] dele pela duração. Uma criatura que possa ver objetos invisíveis vê o sensor como um globo luminoso do tamanho de um punho."
        },
        {
          "type": "default",
          "description": "Ao invés de focar em uma criatura, você pode escolher um local que você já tenha visto antes como alvo dessa magia. Quando fizer isso, o sensor aparece no local e não se move."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "176"
    }
  },
  {
    "name": "Vínculo Protetor",
    "originalName": "Warding Bond",
    "level": 2,
    "school": "abjuração",
    "type": "2º nível de abjuração",
    "isRitual": false,
    "classes": [
      "clérigo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "um par de anéis de platina, que você e o alvo deve usar pela duração,",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia protege uma criatura voluntária que você tocar e cria uma conexão mística entre você e o alvo até a magia acabar. Enquanto o alvo estiver a até 18 metros [60 feet] de você, ele recebe +1 de bônus na CA, nos testes de resistência e terá resistência a todos os danos. No entanto, a cada vez que ele sofrer dano, você sofrerá a mesma quantidade de dano."
        },
        {
          "type": "default",
          "description": "A magia acaba se você cair a 0 pontos de vida ou se você e o alvo ficarem separados a mais de 18 metros [60 feet]. Ela também termina se a magia for conjurada novamente em quaisquer das criaturas conectadas. Você também pode dissipar a magia com uma ação."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "191"
    }
  },
  {
    "name": "Visão Da Verdade",
    "originalName": "True Seeing",
    "level": 6,
    "school": "adivinhação",
    "type": "6º nível de adivinhação",
    "isRitual": false,
    "classes": [
      "bardo",
      "bruxo",
      "clérigo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "unguento para os olhos, feito de pó de cogumelo, açafrão e gordura,",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Essa magia concede a uma criatura voluntária tocada a habilidade de ver as coisas como elas realmente são. Pela duração, a criatura terá visão verdadeira, percebendo portas secretas escondidas por magia e podendo ver no Plano Etéreo, tudo num alcance de até 36 metros [120 feet]."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "189"
    }
  },
  {
    "name": "Visão No Escuro",
    "originalName": "Darkvision",
    "level": 2,
    "school": "transmutação",
    "type": "2º nível de transmutação",
    "isRitual": false,
    "classes": [
      "druida",
      "feiticeiro",
      "mago",
      "patrulheiro"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "ou um pedaço de cenoura seca ou uma ágata",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 8,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura voluntária para conceder a ela a habilidade de ver nas trevas. Pela duração, a criatura terá visão no escuro com alcance de 18 metros [60 feet]."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "133"
    }
  },
  {
    "name": "Vitalidade Falsa",
    "originalName": "False Life",
    "level": 1,
    "school": "necromancia",
    "type": "1º nível de necromancia",
    "isRitual": false,
    "classes": [
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "pessoal"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pequena quantidade de álcool ou bebidas destiladas",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 1,
      "unit": "horas",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Reforçando-se com uma vitalidade necromântica ilusória, você ganha 1d4 + 4 pontos de vida temporários pela duração."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 2° nível ou superior, você ganha 5 pontos de vida temporários adicionais para cada nível do espaço de magia acima do 1°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "142"
    }
  },
  {
    "name": "Voo",
    "originalName": "Fly",
    "level": 3,
    "school": "transmutação",
    "type": "3º nível de transmutação",
    "isRitual": false,
    "classes": [
      "bruxo",
      "feiticeiro",
      "mago"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": null,
      "unit": "toque"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": true,
      "material": {
        "description": "uma pena da asa de qualquer pássaro",
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você toca uma criatura voluntária. O alvo ganha deslocamento de voo de 18 metros [60 feet], pela duração. Quando a magia acabar, o alvo cai se ainda estiver no ar, a não ser que ele possa impedir a queda."
        }
      ],
      "higherLevels": "Em Níveis Superiores. Quando você conjurar essa magia usando um espaço de magia de 4° nível ou superior, você pode afetar uma criatura adicional para cada nível do espaço acima do 3°."
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "146"
    }
  },
  {
    "name": "Zombaria Viciosa",
    "originalName": "Vicious Mockery",
    "level": 0,
    "school": "encantamento",
    "type": "truque de encantamento",
    "isRitual": false,
    "classes": [
      "bardo"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": false,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 0,
      "unit": "instantâneo",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você libera uma série de insultos atados com encantamentos sutis numa criatura que você possa ver, dentro do alcance. Se o alvo puder ouvir você (apesar de não precisar compreendê-lo), ele deve ser bem sucedido num teste de resistência de Sabedoria ou sofrerá 1d4 de dano psíquico e terá desvantagem na próxima jogada de ataque que ele fizer antes do final do próximo turno dele."
        },
        {
          "type": "default",
          "description": "O dano dessa magia aumenta em 1d4 quando você alcança o 5° nível (2d4), 11° nível (3d4) e 17° nível (4d4)."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "189"
    }
  },
  {
    "name": "Zona Da Verdade",
    "originalName": "Zone Of Truth",
    "level": 2,
    "school": "encantamento",
    "type": "2º nível de encantamento",
    "isRitual": false,
    "classes": [
      "bardo",
      "clérigo",
      "paladino"
    ],
    "casting": {
      "time": 1,
      "unit": "ação"
    },
    "range": {
      "value": 18,
      "unit": "metros"
    },
    "components": {
      "isVerbal": true,
      "isSomatic": true,
      "isMaterial": false,
      "material": {
        "description": null,
        "cost": null,
        "isConsumed": false
      }
    },
    "duration": {
      "value": 10,
      "unit": "minutos",
      "concentration": false
    },
    "body": {
      "description": [
        {
          "type": "default",
          "description": "Você cria uma zona mágica protegida contra enganação, numa esfera com 4,5 metros de raio [15-foot radius sphere], centrada num ponto, à sua escolha, dentro do alcance. Até a magia acabar, uma criatura que entrar na área da magia pela primeira vez num turno ou começar seu turno nela, deve realizar um teste de resistência de Carisma. Se falhar na resistência, a criatura não poderá mentir deliberadamente enquanto estiver no raio. Você saberá cada criatura que passou ou falhou nesse teste de resistência."
        },
        {
          "type": "default",
          "description": "Uma criatura afetada está ciente da magia e pode, portanto, evitar responder perguntas as quais ela normalmente responderia com uma mentira. Tais criaturas podem ser evasivas em suas respostas, contanto que permaneçam dentro dos limites da verdade."
        }
      ]
    },
    "font": {
      "reference": "Documento De Referência De Sistema",
      "page": "193"
    }
  }
]

export default spells;