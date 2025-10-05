import Hero from '../Hero'

export default function HeroExample() {
  return (
    <Hero
      name="Mohamed Mahmoud Khalil"
      title="Full Stack Developer"
      description="200+ hours of hands-on experience building scalable and efficient web applications. Successfully completed 10+ backend and frontend projects, always focusing on clean code, high performance, and best practices."
      onContactClick={() => console.log('Contact clicked')}
      onProjectsClick={() => console.log('Projects clicked')}
    />
  )
}
