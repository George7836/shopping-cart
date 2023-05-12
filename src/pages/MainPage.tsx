import Section from '../components/Section'
import headphones from './../data/headphones.json'
import Card from '../components/Card'

export default function MainPage() {

  function filterHeadphones(type: string) {
    return headphones.filter((item) => item.type === type) 
  }

  return (
    <main className='main'>
      <Section title='Наушники'>
        {filterHeadphones('wired').map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            prevPrice={item.previousPrice}
            rate={item.rate}
          />
        ))}
      </Section>
      <Section title='Беспроводные наушники'>
        {filterHeadphones('wireless').map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            prevPrice={item.previousPrice}
            rate={item.rate}
          />
        ))}
      </Section>
    </main>
  )
}
