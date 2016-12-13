import React from 'react';
import firebase from 'firebase';
import { Accordion, AccordionItem } from 'react-sanfona';

export default class events extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      contentToDisplay: "all"
    };
  }

  componentWillUnmount() {

  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <Accordion>
          <AccordionItem
            title="Obstacle"
            slug="Obstacle"
            titleClassName = "obstacleItem eventArticle"
            >
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin a velit non felis sollicitudin imperdiet.Curabitur dictum dui libero, at lacinia eros mattis id.Quisque quis orci ut erat faucibus gravida.Cras in ligula in metus convallis feugiat ut mattis ligula.Mauris scelerisque, libero ac scelerisque bibendum, nulla purus varius augue, non efficitur justo lacus in nulla.Aliquam leo mauris, ullamcorper eget nunc in , lobortis bibendum lorem.Proin volutpat enim tellus, condimentum mollis lectus fermentum ac.

                Phasellus rhoncus ex sit amet dui pellentesque, vitae laoreet eros fringilla.Nunc nisi elit, efficitur facilisis lectus id, molestie tincidunt lectus.Duis sagittis a ante sit amet maximus.Proin scelerisque magna eu quam suscipit gravida.Aliquam fermentum dolor erat, consectetur auctor est molestie at.Nunc nec justo mollis, vestibulum mauris ac, tristique diam.Vestibulum sed nulla non velit ultricies scelerisque.

                Nam et ex eget nulla efficitur placerat.Phasellus id nisi a justo elementum sagittis quis id quam.Quisque bibendum rhoncus ligula, ut scelerisque erat hendrerit eget.Integer vehicula eros non lectus tincidunt, eget viverra magna sodales.Quisque pulvinar dignissim ex.Duis sed libero condimentum, porta eros at, fermentum urna.Proin diam enim, tempor et mi at, feugiat faucibus mauris.Donec porta dignissim elit, nec ullamcorper ligula tristique ac.Pellentesque fringilla ligula sit amet erat iaculis ornare.Sed facilisis nisi id erat rutrum vestibulum.In hac habitasse platea dictumst.Curabitur fringilla blandit eros, lobortis gravida magna porta sed.Proin et euismod nunc, ac vulputate magna.Vivamus erat nunc, porta a sapien ut, dignissim tincidunt nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                Proin enim mi, consequat nec facilisis eu, rhoncus at mi.Maecenas neque ipsum, elementum sed blandit eget, feugiat eget massa.Nunc sagittis laoreet eros, ut lacinia erat feugiat sit amet.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Ut elit tortor, blandit at tortor at, sagittis vulputate tortor.Etiam laoreet odio eros, vel ultrices tellus mattis vitae.Donec eget ligula lobortis, bibendum turpis id, bibendum justo.Praesent hendrerit ligula mauris, non molestie elit blandit vel.Nunc in efficitur magna, a euismod tellus.Fusce sodales in leo ac varius.Proin fringilla scelerisque egestas.Quisque molestie rhoncus augue sit amet gravida.Nam ac ante id mi fermentum cursus.

                In malesuada diam nec nibh aliquet tempor.Nulla ut venenatis nunc, in aliquet arcu.Phasellus odio metus, venenatis in faucibus ut, ultricies vel est.Fusce interdum viverra purus, a suscipit lacus sagittis eget.Mauris ultricies dapibus orci vel scelerisque.Cras ligula lectus, consequat sit amet iaculis nec, venenatis ac orci.Donec ut blandit diam.Etiam enim ipsum, rhoncus ac diam ut, feugiat dapibus nisl.Curabitur blandit odio in augue suscipit, non rhoncus nulla iaculis.Suspendisse eu efficitur augue.Sed blandit vestibulum turpis, eu hendrerit enim.In tristique odio at quam pharetra convallis.Nam imperdiet lacus risus, vitae euismod ante semper quis.Aenean mauris libero, rutrum vel tellus sed, blandit porttitor dui.Nunc ac tristique erat.
              </p>
            </div>
          </AccordionItem>
          <AccordionItem
            title="Pageant"
            slug="Pageant"
            titleClassName="eventArticle"
            >
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin a velit non felis sollicitudin imperdiet.Curabitur dictum dui libero, at lacinia eros mattis id.Quisque quis orci ut erat faucibus gravida.Cras in ligula in metus convallis feugiat ut mattis ligula.Mauris scelerisque, libero ac scelerisque bibendum, nulla purus varius augue, non efficitur justo lacus in nulla.Aliquam leo mauris, ullamcorper eget nunc in , lobortis bibendum lorem.Proin volutpat enim tellus, condimentum mollis lectus fermentum ac.

                Phasellus rhoncus ex sit amet dui pellentesque, vitae laoreet eros fringilla.Nunc nisi elit, efficitur facilisis lectus id, molestie tincidunt lectus.Duis sagittis a ante sit amet maximus.Proin scelerisque magna eu quam suscipit gravida.Aliquam fermentum dolor erat, consectetur auctor est molestie at.Nunc nec justo mollis, vestibulum mauris ac, tristique diam.Vestibulum sed nulla non velit ultricies scelerisque.

                Nam et ex eget nulla efficitur placerat.Phasellus id nisi a justo elementum sagittis quis id quam.Quisque bibendum rhoncus ligula, ut scelerisque erat hendrerit eget.Integer vehicula eros non lectus tincidunt, eget viverra magna sodales.Quisque pulvinar dignissim ex.Duis sed libero condimentum, porta eros at, fermentum urna.Proin diam enim, tempor et mi at, feugiat faucibus mauris.Donec porta dignissim elit, nec ullamcorper ligula tristique ac.Pellentesque fringilla ligula sit amet erat iaculis ornare.Sed facilisis nisi id erat rutrum vestibulum.In hac habitasse platea dictumst.Curabitur fringilla blandit eros, lobortis gravida magna porta sed.Proin et euismod nunc, ac vulputate magna.Vivamus erat nunc, porta a sapien ut, dignissim tincidunt nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                Proin enim mi, consequat nec facilisis eu, rhoncus at mi.Maecenas neque ipsum, elementum sed blandit eget, feugiat eget massa.Nunc sagittis laoreet eros, ut lacinia erat feugiat sit amet.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Ut elit tortor, blandit at tortor at, sagittis vulputate tortor.Etiam laoreet odio eros, vel ultrices tellus mattis vitae.Donec eget ligula lobortis, bibendum turpis id, bibendum justo.Praesent hendrerit ligula mauris, non molestie elit blandit vel.Nunc in efficitur magna, a euismod tellus.Fusce sodales in leo ac varius.Proin fringilla scelerisque egestas.Quisque molestie rhoncus augue sit amet gravida.Nam ac ante id mi fermentum cursus.

                In malesuada diam nec nibh aliquet tempor.Nulla ut venenatis nunc, in aliquet arcu.Phasellus odio metus, venenatis in faucibus ut, ultricies vel est.Fusce interdum viverra purus, a suscipit lacus sagittis eget.Mauris ultricies dapibus orci vel scelerisque.Cras ligula lectus, consequat sit amet iaculis nec, venenatis ac orci.Donec ut blandit diam.Etiam enim ipsum, rhoncus ac diam ut, feugiat dapibus nisl.Curabitur blandit odio in augue suscipit, non rhoncus nulla iaculis.Suspendisse eu efficitur augue.Sed blandit vestibulum turpis, eu hendrerit enim.In tristique odio at quam pharetra convallis.Nam imperdiet lacus risus, vitae euismod ante semper quis.Aenean mauris libero, rutrum vel tellus sed, blandit porttitor dui.Nunc ac tristique erat.
              </p>
            </div>
          </AccordionItem>
          <AccordionItem
            title="Auction"
            slug="Auction"
            titleClassName="eventArticle"
            >
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Proin a velit non felis sollicitudin imperdiet.Curabitur dictum dui libero, at lacinia eros mattis id.Quisque quis orci ut erat faucibus gravida.Cras in ligula in metus convallis feugiat ut mattis ligula.Mauris scelerisque, libero ac scelerisque bibendum, nulla purus varius augue, non efficitur justo lacus in nulla.Aliquam leo mauris, ullamcorper eget nunc in , lobortis bibendum lorem.Proin volutpat enim tellus, condimentum mollis lectus fermentum ac.

                Phasellus rhoncus ex sit amet dui pellentesque, vitae laoreet eros fringilla.Nunc nisi elit, efficitur facilisis lectus id, molestie tincidunt lectus.Duis sagittis a ante sit amet maximus.Proin scelerisque magna eu quam suscipit gravida.Aliquam fermentum dolor erat, consectetur auctor est molestie at.Nunc nec justo mollis, vestibulum mauris ac, tristique diam.Vestibulum sed nulla non velit ultricies scelerisque.

                Nam et ex eget nulla efficitur placerat.Phasellus id nisi a justo elementum sagittis quis id quam.Quisque bibendum rhoncus ligula, ut scelerisque erat hendrerit eget.Integer vehicula eros non lectus tincidunt, eget viverra magna sodales.Quisque pulvinar dignissim ex.Duis sed libero condimentum, porta eros at, fermentum urna.Proin diam enim, tempor et mi at, feugiat faucibus mauris.Donec porta dignissim elit, nec ullamcorper ligula tristique ac.Pellentesque fringilla ligula sit amet erat iaculis ornare.Sed facilisis nisi id erat rutrum vestibulum.In hac habitasse platea dictumst.Curabitur fringilla blandit eros, lobortis gravida magna porta sed.Proin et euismod nunc, ac vulputate magna.Vivamus erat nunc, porta a sapien ut, dignissim tincidunt nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                Proin enim mi, consequat nec facilisis eu, rhoncus at mi.Maecenas neque ipsum, elementum sed blandit eget, feugiat eget massa.Nunc sagittis laoreet eros, ut lacinia erat feugiat sit amet.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Ut elit tortor, blandit at tortor at, sagittis vulputate tortor.Etiam laoreet odio eros, vel ultrices tellus mattis vitae.Donec eget ligula lobortis, bibendum turpis id, bibendum justo.Praesent hendrerit ligula mauris, non molestie elit blandit vel.Nunc in efficitur magna, a euismod tellus.Fusce sodales in leo ac varius.Proin fringilla scelerisque egestas.Quisque molestie rhoncus augue sit amet gravida.Nam ac ante id mi fermentum cursus.

                In malesuada diam nec nibh aliquet tempor.Nulla ut venenatis nunc, in aliquet arcu.Phasellus odio metus, venenatis in faucibus ut, ultricies vel est.Fusce interdum viverra purus, a suscipit lacus sagittis eget.Mauris ultricies dapibus orci vel scelerisque.Cras ligula lectus, consequat sit amet iaculis nec, venenatis ac orci.Donec ut blandit diam.Etiam enim ipsum, rhoncus ac diam ut, feugiat dapibus nisl.Curabitur blandit odio in augue suscipit, non rhoncus nulla iaculis.Suspendisse eu efficitur augue.Sed blandit vestibulum turpis, eu hendrerit enim.In tristique odio at quam pharetra convallis.Nam imperdiet lacus risus, vitae euismod ante semper quis.Aenean mauris libero, rutrum vel tellus sed, blandit porttitor dui.Nunc ac tristique erat.
              </p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }

}
