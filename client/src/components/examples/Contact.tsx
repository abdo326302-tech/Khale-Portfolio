import Contact from '../Contact'

export default function ContactExample() {
  return (
    <Contact
      phone="01010594143"
      email="mohamedmahmoudkhalil0@gmail.com"
      onGetInTouchClick={() => console.log('Get in touch clicked')}
    />
  )
}
