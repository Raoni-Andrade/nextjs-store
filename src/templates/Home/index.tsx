import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import Menu from 'components/Menu'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />
      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>
      <GameCardSlider items={newGames} color="black" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Populars
      </Heading>
      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcoming
      </Heading>

      <GameCardSlider items={upcomingGames} />
      <Highlight {...upcomingHighlight} />
      <GameCardSlider items={upcomingMoreGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Highlight {...freeHighlight} />
      <GameCardSlider items={freeGames} />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)

export default Home
