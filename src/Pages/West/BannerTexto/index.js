import React from 'react'
import styles from './styles.module.css'
import { constants } from '../Constants'
import img1 from '../../../assets/imagensTexto/Imagem1.png'
import img2 from '../../../assets/imagensTexto/Imagem2.png'
import img3 from '../../../assets/imagensTexto/Imagem3.png'
import img4 from '../../../assets/imagensTexto/Imagem4.png'
import img5 from '../../../assets/imagensTexto/Imagem5.png'
import img6 from '../../../assets/imagensTexto/Imagem6.png'
import img7 from '../../../assets/imagensTexto/Imagem7.png'
import img8 from '../../../assets/imagensTexto/Imagem8.png'

export default function Termos() {
  return (
    <section className={styles['container']}>
      <div className={styles['text-container']}>
        <span className={styles['first-title']}> TERMO DE ADESÃO - PLANO/BENEFÍCIOS DE SERVIÇOS PRÉ-PAGOS </span>
        <div className={styles['termos-cont']}>
          <span className={styles['first-txt']}>
            O plano/benefício de serviço pré-pago é realizado em conjunto com a prestadora de serviços telecom - {constants.texts.nomeEmpresa}. Para toda pessoa física ou jurídica, doravante denominada Cliente. Ao comprar um chip e carregando-o com um dos valores de recarga disponíveis, o Cliente está aderindo automaticamente ao plano/benefício correspondente ao plano/benefício de serviço comercializado, conforme previsto no presente Termo de Adesão e divulgado no site.
          </span>
          <span className={styles['title']}>
            1. Ativação do plano/benefício de serviço
          </span>
          <span className={styles['txt']}>
            A ativação do plano/benefício de serviço é feita automaticamente após a realização da recarga pelo Cliente.
            Para aderir a um plano/benefício de serviço, o Cliente deve ter adquirido e ativado previamente a {constants.texts.nomeEmpresa} e escolher por um dos valores de recarga disponíveis.
          </span>
          <span className={styles['title']}>
            2. Planos/benefícios de serviços
          </span>
          <span className={styles['txt']}>
            Os valores dos planos/benefícios de serviços estão disponíveis no site da {constants.texts.nomeEmpresa}.
          </span>
          <span className={styles['txt']}>
            Adicionalmente ao valor do plano/benefício de serviço poderá ocorrer a cobrança para aquisição do chip (físico ou virtual).
          </span>
          <span className={styles['sub-title']}>
            2.1 As chamadas ilimitadas são para ligações locais e longa distância nacionais com código de seleção de prestadora 41 (CSP 41) para números de telefone fixos ou móveis de qualquer prestadora dentro do território nacional.
          </span>
          <span className={styles['sub-title']}>
            2.2 O serviço de mensagens curtas (SMS - Short Message Service em inglês) é apenas para números móveis nacionais, de acordo com o plano/benefício contratado no plano/benefício de serviço.
          </span>
          <span className={styles['sub-title']}>
            2.3 Para plano/benefício que contenha ligações ilimitadas serão concedidos 1.000 minutos para serem utilizados como descrito acima. Consumido este plano/benefício de minutos dentro do prazo de validade do plano/benefício, o Cliente receberá sem custo, 1.000 minutos adicionais, desde que não haja uso fraudulento e não esteja enquadrada em uso indevido, conforme descrito no item 6 do presente Termo de Adesão.
          </span>
          <span className={styles['sub-title']}>
            2.4 Os planos/benefícios podem ter bônus de portabilidade e/ou recarga programada.<br></br><br></br>
            O primeiro bônus de portabilidade será concedido em até 7 dias úteis após a conclusão, com sucesso, do processo de portabilidade.<br></br><br></br>
            O primeiro bônus da recarga programada/recorrente será concedido a partir do 2º mês após aquisição do plano/benefício com cartão de crédito e marcação da recarga programada/recorrente, com sucesso. No caso dos planos trimestrais, semestrais e anuais os bônus da recarga programada dos planos/benefícios serão atribuídos mensalmente nas renovações no período contratado (trimestral, semestral e/ou anual).<br></br><br></br>
            Nas próximas aquisições de planos/benefícios os bônus de portabilidade e recarga programada são disponibilizados automaticamente. Essas bonificações são limitadas a uma aquisição de plano/benefício a cada 30 dias.
          </span>
          <span className={styles['title']}>
            3. Pagamento e Renovação
          </span>

          <span className={styles['sub-title']}>
            3.1 O Cliente poderá optar por fazer renovações mensais mediante aquisição dos planos/benefícios que melhor lhe convier dentro dos disponíveis em qualquer canal de atendimento do {constants.texts.nomeEmpresa} presencial ou remoto num dos valores disponíveis.
          </span>
          <span className={styles['sub-sub-title']}>
            3.1.1 Considera-se atendimento presencial, todo atendimento realizado nos estabelecimentos da {constants.texts.nomeEmpresa} e nos pontos de atendimento associados à sua marca.
          </span>
          <span className={styles['sub-sub-title']}>
            3.1.1 Considera-se atendimento presencial, todo atendimento realizado nos estabelecimentos da {constants.texts.nomeEmpresa} e nos pontos de atendimento associados à sua marca.
          </span>
          <span className={styles['sub-title']}>
            3.1.2 Considera-se atendimento remoto aquele realizado por meio de Centro de Atendimento Telefônico, do Atendimento por Internet, bem como por qualquer outro meio disponibilizado ou utilizado pela prestadora em conjunto com a {constants.texts.nomeEmpresa} para interação remota com o Consumidor.
          </span>
          <span className={styles['sub-title']}>
            3.3 O Cliente que não realizar uma recarga até a data de vencimento do plano/benefício vigente, terá seu plano/benefício remanescente expirado.
          </span>
          <span className={styles['title']}>
            4.Plano/benefício
          </span>
          <span className={styles['sub-title']}>
            4.1 Internet sem Cortes
          </span>
          <span className={styles['txt']}>
            Durante a validade do plano/benefício contratado, mesmo após o consumo de 100% do plano/benefício de dados, o acesso à internet não será cortado e o Cliente continuará navegando em velocidade reduzida (32 Kbps) até o final do prazo de validade do plano/benefício.
          </span>
          <span className={styles['sub-title']}>
            4.2 Data de Expiração do plano/benefício
          </span>
          <span className={styles['txt']}>
            O Cliente que adquirir um plano/benefício até a data de vencimento do plano/benefício contratado, terá a data de expiração garantida pelo período do plano/benefício adquirido. <br /><br />
            Planos/benefícios trimestrais, semestrais e anuais têm sua renovação agendada mensalmente, garantindo todo o período contratado. Nesse plano/benefício o Cliente adquire 3, 6 ou 12 recargas de 1 mês de validade, com recorrência programada mensalmente. <br /><br />
            Como benefício extra, a data de expiração do plano/benefício recém adquirido poderá ser prorrogada em até 30 dias, conforme regra abaixo:
          </span>
          <div className={styles['imagens']}>
            <img src={img1} className={styles['img1']} />
            <span className={styles['title']}>
              Exemplo 1:
            </span>
            <img src={img2} className={styles['img2']} />
            <span className={styles['title']}>
              Exemplo 2:
            </span>
            <img src={img3} className={styles['img3']} />
            <span className={styles['title']}>
              Detalhamento dos exemplos 1 e 2
            </span>
            <img src={img4} className={styles['img4']} />
            <span className={styles['sub-title']}>
              4.3 Acúmulo de benefícios
            </span>
            <span className={styles['txt']}>
              Quando realizada a compra de um plano/benefício antes da data de vencimento do plano/benefício atual, além do benefício recém adquirido, o Cliente poderá acumular saldos remanescentes, conforme a regra abaixo:
            </span>
            <img src={img5} className={styles['img5']} />
            <img src={img6} className={styles['img6']} />
            <img src={img7} className={styles['img7']} />
            <img src={img8} className={styles['img8']} />
          </div>
          <span className={styles['txt']}>
            Caso a nova recarga seja feita após o término do período de validade do plano/benefício, não haverá acúmulo de benefício referente ao plano/benefício anteriores, pois os saldos remanescentes já teriam sido expirados. <br /><br />
            Em nenhum caso poderão ser acumulados benefícios de voz superiores à 1.000 minutos, benefícios de SMS superiores à 300 e benefícios de dados superiores à 500GB.
          </span>
          <span className={styles['sub-title']}>4.4 Acesso a aplicativos e sites gratuitos:</span>
          <span className={styles['txt']}>
            Caso o plano/benefício contratado ofereça promocionalmente acessos gratuitos a aplicativos e sites, como os de redes sociais, estes acessos não serão descontados do plano/benefício desde que as utilizações não sejam para chamadas de vídeo, downloads de vídeos e backups da própria ferramenta.
          </span>
          <span className={styles['sub-title']}>
            4.5 WhatsApp gratuito
          </span>
          <span className={styles['txt']}>
            Nos casos dos planos/benefícios com WhatsApp gratuito, a gratuidade aplica-se para o envio/recebimento de mensagens de texto, arquivos de foto e arquivos de áudio. <br /><br />
            As ligações (chamadas) de voz ou vídeo realizadas através do WhatsApp são cobradas (deduzidas do pacote de dados) normalmente.
          </span>
          <span className={styles['title']}>
            5. Rede e Cobertura
          </span>
          <span className={styles['sub-title']}>
            5.1 Tecnologias
          </span>
          <span className={styles['txt']}>
            Estão disponíveis para utilização as tecnologias 2G, 3G, 4G (LTE) e 5G conforme mapa de cobertura da sua operadora. Para a utilização de qualquer das tecnologias citadas é necessário que o aparelho e o chip sejam compatíveis com a tecnologia, em especial 4G (LTE) e 5G. <br /> <br />
            As tecnologias aqui não citadas não estão disponíveis para utilização.
          </span>
          <span className={styles['sub-title']}>
            5.2. Roaming Nacional
          </span>
          <span className={styles['txt']}>
            Dentro da área de cobertura de sua operadora, o Roaming é gratuito para o Cliente. Não haverá cobrança adicional para o encaminhamento das chamadas de longa distância em todo o território nacional. <br /><br />
            Não haverá cobrança de taxa de deslocamento para as chamadas recebidas fora de sua localidade quando em território nacional.
          </span>
          <span className={styles['sub-title']}>
            5.3 Velocidades de navegação na internet
          </span>
          <span className={styles['txt']}>
            Desde que a qualidade de sinal esteja satisfatória onde o aparelho se encontra, a velocidade de referência padrão na rede 3G é de até 1 Mbps para download e de até 100 kbps para upload, enquanto na rede 4G é de até 5 Mbps para download e de até 500 kbps para upload.
          </span>
          <span className={styles['title']}>
            6. Usos não autorizados no plano/benefício de serviço
          </span>
          <span className={styles['txt']}>
            Cliente estará passível de bloqueio e cancelamento de sua adesão a este termo, quando for identificado o uso indevido do plano/benefício enquadrado em quaisquer dos itens abaixo:
          </span>
          <span className={styles['sub-title']}>
            6.1 Comercialização de minutos/serviços ou utilização de SMS (mensagens) com finalidade comercial, destinados à obtenção de lucro por parte do Cliente;
          </span>
          <span className={styles['sub-title']}>
            6.2 Envio de SMS (mensagens) através de máquinas, computadores ou outro dispositivo que não seja o aparelho celular do Cliente;
          </span>
          <span className={styles['sub-title']}>
            6.3 Envio de SMS (mensagens) indesejados classificados como SPAM;
          </span>
          <span className={styles['sub-title']}>
            6.4 Realização de chamadas através de máquinas, computadores ou outro dispositivo que não seja o aparelho celular do Cliente;
          </span>
          <span className={styles['sub-title']}>
            6.5 Realização de chamadas indesejadas classificadas como SPAM;
          </span>
          <span className={styles['sub-title']}>
            6.6 Utilização de equipamentos como GSM Box, Black Box e equipamentos similares;
          </span>
          <span className={styles['sub-title']}>
            6.7 Desbalanceamento do tráfego sainte/entrante, contendo volume de chamadas originadas acima de três vezes o de chamadas recebidas;
          </span>
          <span className={styles['sub-title']}>
            6.8 Utilização do plano/benefício para realização de conferências, ou seja, não está permitido a realização de chamadas (local e longa distância nacional, com o cód. 41) para diferentes números de qualquer operadora simultaneamente;
          </span>
          <span className={styles['sub-title']}>
            6.9 Utilização do plano/benefício para serviços de salas de conversação, teleamizade, telesexo e similares.
          </span>
          <span className={styles['title']}>
            7. Renovação da Adesão à plano/benefício de serviço
          </span>
          <span className={styles['sub-title']}>
            7.1 A renovação/contratação do plano/benefício ocorre sempre que o Cliente da operadora efetuar uma recarga do plano/benefício correspondente.
          </span>
          <span className={styles['sub-title']}>
            7.2 O Cliente tem o direito de escolher o plano/benefício que melhor lhe convier com base nas recargas que estão disponíveis nos canais de recarga da prestadora.
          </span>
          <span className={styles['title']}>
            8. Disponibilização de Planos/Benefícios
          </span>
          <span className={styles['txt']}>
            Os Planos/Benefícios estão disponíveis para aquisição no site, aplicativos e pontos de venda da sua operadora.
          </span>
          <span className={styles['sub-title']}>
            8.1 Pacote adiciona
          </span>
          <span className={styles['txt']}>
            O Cliente pode contratar um pacote adicional de Dados/Voz/SMS, quando disponíveis, através dos canais de recarga da sua operadora. <br /><br />
            Observe a validade do pacote adicional que normalmente é diferente do plano/benefício disponibilizado pela sua operadora. <br /> <br />
            O Pacote adicional só pode ser adquirido durante a vigência do Plano/Benefício (enquanto o Plano/Benefício estiver ativo).
          </span>
          <span className={styles['title']}>
            9. Sobre os serviços de dados do plano/benefício adquirido:
          </span>
          <span className={styles['txt']}>
            A velocidade disponível no acesso pode ter oscilações e variações conforme condições topográficas e/ou climáticas, velocidade de movimento, distância que o Cliente se encontrar da Estação Rádio Base (ERB), número de Clientes que utilizarem ao mesmo tempo a cobertura provida pela mesma Estação Rádio Base, modem usado na conexão, aplicações utilizadas e sites de conteúdo e informação que estão sendo acessados, além de outros fatores externos que porventura venham a interferir no nível do sinal, que independem de ações das empresas envolvidas. <br /><br />
            A operadora não se responsabiliza pelas diferenças de velocidades ocorridas em razão de fatores externos, bem como problemas no equipamento utilizado pelo Cliente, entre outros. <br /><br />
            Consulte a cobertura no site da sua operadora.
          </span>
          <span className={styles['title']}>
            10. Aparelhos celulares a serem utilizados no plano/benefício de serviço
          </span>
          <span className={styles['txt']}>
            O correto funcionamento e desempenho do aparelho somente será possível por meio do uso de equipamentos homologados pela ANATEL, compatíveis com as frequências autorizadas, em uso pela operadora e cujo IMEI, não esteja bloqueado por autoridades competentes.
          </span>
          <span className={styles['title']}>
            11. Outras informações
          </span>
          <ul className={styles['lista']}>
            Para informações sobre:
            <li className={styles['item-lista']}>O número de seu celular: ligue para *221#</li>
            <li className={styles['item-lista']}>Consulta de saldo do plano/benefício de internet, voz e SMS: consulte através do aplicativo.</li>
          </ul>
          <span className={styles['txt']}>
            Outras informações, acesse o site (ou aplicativo) de sua operadora ou ligue para a central de atendimento da sua operadora.
          </span>
          <span className={styles['title']}>12. Disposições Gerais</span>
          <span className={styles['sub-title']}>
            12.1 O serviço poderá ser suspenso sempre que for detectado o uso indevido do código de acesso não atribuído ao Cliente ou seu uso para fins ilícitos e que possam perturbar a ordem pública por ação do Cliente cessando, nesses casos, a responsabilidade da operadora.
          </span>
          <span className={styles['sub-title']}>
            12.2 Aplicam-se a este “Termo de Adesão” as disposições do Regulamento Geral de Direitos do Consumidor de Serviços de Telecomunicações da Anatel e as disposições contidas no Código de Defesa do Consumidor.
          </span>
          <span className={styles['sub-title']}>
            12.3 Qualquer alteração neste “Termo de Adesão” que venha a ser inserido será disponibilizado no site da operadora, observando a regulamentação vigente.
          </span>
          <span className={styles['title']}>
            13. Suspensão do serviço
          </span>
          <span className={styles['txt']}>
            Caso o Cliente não adquira nenhum novo plano/benefício de serviço até a expiração do seu plano/benefício atual, seja através de uma nova recarga, uma recorrência programada ou uma renovação automática/manual que possa utilizar créditos financeiros disponíveis em sua conta, o Cliente passará por 2 estágios até o cancelamento da linha:
          </span>
          <span className={styles['sub-title']}>
            1º estágio - Suspensão parcial (até 45 dias após expiração): O Cliente recebe chamadas e recebe mensagens de texto SMS, mas terá todos os saldos remanescentes do plano/benefício de dados, voz e SMS excluídos
          </span>
          <span className={styles['sub-title']}>
            2º estágio – Suspensão total (de 46 a 75 dias após expiração): O Cliente terá os serviços totalmente suspensos, mantendo as restrições do estágio anterior e incluindo restrições de recebimento de chamadas e mensagens de texto SMS. O Cliente poderá ligar para a central de atendimento da sua operadora e poderá receber mensagens e notificações da sua operadora.
          </span>
          <span className={styles['nota']}>
            Nota: Durante o período de suspensão parcial ou total do serviço o consumidor tem assegurado a possibilidade de originar chamadas, enviar mensagens de texto aos serviços públicos de emergência definidos na regulamentação da Anatel e ao acesso à Central de Atendimento Telefônico da Prestadora.
          </span>
        <span className={styles['title']}>
          14. Privacidade e Proteção de Dados
        </span>
        <span className={styles['sub-title']}>
          14.1 Consideram-se dados pessoais quaisquer informações relacionadas a pessoa natural identificada ou identificável, conforme dispõe a Lei Geral de Proteção de Dados.
        </span>
        <span className={styles['sub-title']}>
          14.2 Os dados pessoais coletados e processados para a execução do serviço serão tratados conforme disposto na Lei Geral de Proteção de Dados – LGPD (lei n. 13.709/2018), pelo Marco Civil da Internet (lei n. 12.965/14), pelo Código Civil (lei n. 10.406/02), pelo Código de Defesa do Consumidor (lei n. 8.078/90), pela Constituição Federal e pelas regulamentações pertinentes.
        </span>
        <span className={styles['sub-title']}>
          14.3 Conforme Regulamentação vigente, é obrigatório a coleta e a confirmação do CPF do titular associado ao número de telefone da linha contratada e dados de pagamento.
        </span>
        <span className={styles['sub-title']}>
          14.4 O histórico de plano/benefício contratado poderá ser utilizado para oferecer ao Cliente plano/benefício, e/ou produtos similares.
        </span>
        <span className={styles['sub-title']}>
          14.5 Caso o Cliente deseje exercer qualquer de seus direitos elencados no art. 18 da Lei Geral de Proteção de Dados, deverá entrar em contato com a central de atendimento da sua operadora.
        </span>
        <span className={styles['sub-title']}>
          14.6 Mais informações estão disponíveis na Política de Privacidade disponível no site de sua operadora.
        </span>
        </div>
      </div>
    </section>
  )
}
