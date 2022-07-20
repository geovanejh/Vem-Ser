import Card from './Card'
import Header from './Header'
import Title from './Title'
import cogumelo from '../images/logo.png'
import TextSection from './TextSection'
import Footer from './Footer'
import Frame from './Frame'
import ContactForm from './ContactForm'

const HomePage = () => {
    const texto = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos quisquam facilis, maiores dicta vitae sed laborum quidem quis sint laudantium libero impedit error at eaque consectetur temporibus eius molestiae asperiores saepe nemo excepturi tenetur porro exercitationem distinctio? Repudiandae molestiae maxime deserunt impedit, repellendus voluptatem qui aliquam laboriosam velit molestias, aspernatur iure reiciendis maiores in hic, alias suscipit dolorum quas dolorem reprehenderit explicabo! Perferendis commodi quod quos consequatur facere quibusdam nisi fuga, explicabo itaque mollitia dolorum nihil quidem. Corporis distinctio reiciendis iste, facere provident alias eius eligendi nihil ad magni amet odit nulla autem obcaecati eum et modi, laborum quas a'
    const texto2 = 'ignissimos quisquam facilis, quidem quis sint laudantium libero impedit error at eaque consectetur temporibus eius molestiae asperiores saepe nemo excepturi tenetur porro exercitationem distinctio? Repudiandae molestiae maxime deserunt impedit, repellendus voluptatem qui aliquam laboriosam velit molestias, aspernatur iure reiciendis maiores in hic, alias suscipit dolorum quas dolorem reprehenderit explicabo! Perferendis commodi quod quos consequatur facere quibusdam nisi fuga, explicabo itaque mollitia dolorum nihil quidem. Corporis distinctio reiciendis iste, facere provident alias eius eligendi nihil ad'
    const mapaUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13821.634998705002!2d-51.2012965!3d-29.9964175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1658260015006!5m2!1spt-BR!2sbr"
    const videoUrl = "https://www.youtube.com/embed/lq5hlLaa16s"


    return (
        <>
            <Header />
            <Title text='Estamos aprendendo React com o melhor professor de todos'/>
            <div className="cardContainer">
                <Card url={cogumelo} text="cogumelo 1"/>
                <Card url={cogumelo} text="cogumelo 2"/>
                <Card url={cogumelo} text="cogumelo 3"/>
            </div>
            <TextSection text={texto} text2={texto2}/>
            <Title text='Endereço da DBC'/>
            <Frame url={mapaUrl} width="600" height="350"/>
            <Footer />

            {/* Página 2*/}
            <hr />
            
            <Header />
            <Title text='Sobre a DBC'/>
            <Frame url={videoUrl} width="600" height="350"/>
            <TextSection text={texto} text2={texto2} classe="bg-white"/>
            <Footer />

            {/* Página 3*/}
            <hr />

            <Header />
            <Title text='Contato'/>
            <ContactForm /> 
            <Footer />
        </>
    )
}

export default HomePage