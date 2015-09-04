$(function(){
  var Main = {
    init : function(){
      Main.bind.init.call();
    },
    data : {
      frases : [
        "O pior é quando ela não diz mais que te ama.",
        "Já dizia Einstein, precisamos usar a nossa mente para raciocinar, pois para guardar informações temos outros meios, como por exemplo a KB.",
        "In the front, in the back, in the middle nothing.",
        "Eu tava de frente pra trás.",
        "Melhor coisa que já inventaram é o ctrl c + ctrl v.",
        "Eu não sabia que eu sabia, agora eu sei.",
        "Se ficou visível todo mundo viu.",
        "Para alinhar o alinhamento mandei mensagem pra ele por e-mail, MSN e tudo mais.",
        "Aquelas coisas que eles não inventam, mas aumentam.",
        "Mas é um pão de vaca.",
        "Cada tulipa que se seca ela não volta nunca mais.",
        "Parece os caras que decoram o Alcorão, tududu dududu dududu dududu",
        "Já tenho mulher, pra que vou querer ter cabelo?",
        "A festa de final de ano, julina, carnaval de final de quinta."
      ],
      paragrafos : [
        "Ainda assim, existem dúvidas a respeito de como a determinação clara de objetivos oferece uma interessante oportunidade para verificação de alternativas às soluções ortodoxas. O pior é quando ela não diz mais que te ama. No mundo atual, a complexidade dos estudos efetuados estende o alcance e a importância das diretrizes de desenvolvimento para o futuro. O incentivo ao avanço tecnológico, assim como a expansão dos mercados mundiais desafia a capacidade de equalização do investimento em reciclagem técnica. Evidentemente, a consolidação das estruturas deve passar por modificações independentemente do levantamento das variáveis envolvidas.",
        "É importante questionar o quanto o desafiador cenário globalizado é uma das consequências das regras de conduta normativas. Acima de tudo, é fundamental ressaltar que o comprometimento entre as equipes maximiza as possibilidades por conta dos modos de operação convencionais. Não obstante, a crescente influência da mídia auxilia a preparação e a composição das novas proposições. Já dizia Einstein, precisamos usar a nossa mente para raciocinar, pois para guardar informações temos outros meios, como por exemplo a KB.",
        "In the front, in the back, in the middle nothing. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a constante divulgação das informações apresenta tendências no sentido de aprovar a manutenção do remanejamento dos quadros funcionais. Podemos já vislumbrar o modo pelo qual o surgimento do comércio virtual pode nos levar a considerar a reestruturação dos paradigmas corporativos. Assim mesmo, o entendimento das metas propostas possibilita uma melhor visão global do sistema de formação de quadros que corresponde às necessidades.",
        "As experiências acumuladas demonstram que o acompanhamento das preferências de consumo ainda não demonstrou convincentemente que vai participar na mudança das condições financeiras e administrativas exigidas. O que temos que ter sempre em mente é que o aumento do diálogo entre os diferentes setores produtivos prepara-nos para enfrentar situações atípicas decorrentes do processo de comunicação como um todo. É claro que o consenso sobre a necessidade de qualificação talvez venha a ressaltar a relatividade das direções preferenciais no sentido do progresso. Eu tava de frente pra trás.",
        "Melhor coisa que já inventaram é o ctrl c + ctrl v. É claro que o desenvolvimento contínuo de distintas formas de atuação não pode mais se dissociar dos índices pretendidos. Podemos já vislumbrar o modo pelo qual o surgimento do comércio virtual causa impacto indireto na reavaliação do sistema de participação geral. Acima de tudo, é fundamental ressaltar que o comprometimento entre as equipes possibilita uma melhor visão global de todos os recursos funcionais envolvidos.",
        "Todavia, o julgamento imparcial das eventualidades aponta para a melhoria das diversas correntes de pensamento. Eu não sabia que eu sabia, agora eu sei. O empenho em analisar a hegemonia do ambiente político apresenta tendências no sentido de aprovar a manutenção do fluxo de informações. A certificação de metodologias que nos auxiliam a lidar com a mobilidade dos capitais internacionais deve passar por modificações independentemente dos níveis de motivação departamental.",
        "O cuidado em identificar pontos críticos no acompanhamento das preferências de consumo representa uma abertura para a melhoria do remanejamento dos quadros funcionais. Se ficou visível todo mundo viu. É importante questionar o quanto a percepção das dificuldades estende o alcance e a importância dos procedimentos normalmente adotados. Por outro lado, o aumento do diálogo entre os diferentes setores produtivos obstaculiza a apreciação da importância do investimento em reciclagem técnica. Evidentemente, a consolidação das estruturas promove a alavancagem do sistema de formação de quadros que corresponde às necessidades.",
        "Para alinhar o alinhamento mandei mensagem pra ele por e-mail, MSN e tudo mais. A prática cotidiana prova que a constante divulgação das informações talvez venha a ressaltar a relatividade do orçamento setorial. Caros amigos, a contínua expansão de nossa atividade prepara-nos para enfrentar situações atípicas decorrentes das condições financeiras e administrativas exigidas. A nível organizacional, o início da atividade geral de formação de atitudes ainda não demonstrou convincentemente que vai participar na mudança das direções preferenciais no sentido do progresso. Ainda assim, existem dúvidas a respeito de como a estrutura atual da organização desafia a capacidade de equalização de alternativas às soluções ortodoxas.",
        "No entanto, aquelas coisas que eles não inventam, mas aumentam. não podemos esquecer que a execução dos pontos do programa garante a contribuição de um grupo importante na determinação do retorno esperado a longo prazo. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a revolução dos costumes agrega valor ao estabelecimento das formas de ação. Assim mesmo, a competitividade nas transações comerciais maximiza as possibilidades por conta dos modos de operação convencionais.",
        "Gostaria de enfatizar que a hegemonia do ambiente político obstaculiza a apreciação da importância do orçamento setorial mas é um pão de vaca. O empenho em analisar o julgamento imparcial das eventualidades garante a contribuição de um grupo importante na determinação da gestão inovadora da qual fazemos parte. O cuidado em identificar pontos críticos no novo modelo estrutural aqui preconizado assume importantes posições no estabelecimento do fluxo de informações. A certificação de metodologias que nos auxiliam a lidar com a adoção de políticas descentralizadoras não pode mais se dissociar dos níveis de motivação departamental. No entanto, não podemos esquecer que o desenvolvimento contínuo de distintas formas de atuação promove a alavancagem do retorno esperado a longo prazo.",
      ]
    },
    bind : {
      init : function(){
        var intro = Main.functions.getRandom(Main.data.frases, 1);
        $('.title').append(intro);

        Main.bind.clicks.call();
      },
      clicks : function(){
        $('.js-getFrase').click(function(){
          var frase = Main.functions.getRandom(Main.data.frases, 1);

          $('.texto').html(frase);
        });

        $('.js-getTexto').click(function(){
          var total = $('#selParagrafos').val(),
              frase = Main.functions.getRandom(Main.data.paragrafos, total);

          $('.texto').html(frase);
        });
      }
    },
    functions : {
      getRandom : function(data, total){
        var texto = '';
        for(i = 0; i < total; i++){
          texto += '<p>' + data[Math.floor(Math.random()*data.length)] + '</p>'
        }
        return texto;
      }
    }
  }

  Main.init.call();
});