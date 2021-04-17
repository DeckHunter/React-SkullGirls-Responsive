import React from 'react'
import './app.css'
import './normalize.css'

import Eliza from './img/Eliza.png'
import Filia from './img/Filia.jpg'
import Ms_Fortune from './img/Ms_Fortune.jpg'
import Valentine from './img/Valentine.jpg'
import Painwheel from './img/Painwheel.png'
import Parasoul from './img/Parasoul.png'
import Cerebella from './img/Cerebella.jpg'
import Double from './img/Double.jpg'
import Beowulf from './img/Beowulf.png'

function Main() {
    return(
        <div className = 'l-main'>
            <section id="Characters">
                <div className="Characters">
                    <div className="teste">
                        <div className="item">
                            <p>Eliza is a popular singer in New Meridian and is predominately 
                                known for her amazing charity work, which are namely, blood drives. 
                                Under her lavish appearance, Eliza harbors a dark secret, she carries 
                                the Parasite Sekhmet and uses the blood she gains in the drives 
                                to make herself young and beautiful perpetually. It did not take 
                                long for the Medici Mafia to discover this secret and use it to their 
                                advantage and blackmail Eliza. Now she finds herself pitted amongst 
                                the other girls in an ancient advent that Samson and Leviathan know all too well.
                            </p>
                            <div className='main-img-div'>
                                <img src={Eliza} alt="eliza"/>
                            </div>
                        </div>

                        <div className="item">
                            <p>Filia was once just an average schoolgirl, with her 
                                best friend being Carol before she was kidnapped. 
                                Filia was the daughter of Amelia and Marcus Medici. 
                                Filia met Samson along with his previous host, a dog 
                                he had named Dog one year before the Skullgirl returned 
                                thanks to Carol. When Carol brought Samson to see if 
                                Filia could take care of him, Filia reluctantly agreed to keep 
                                him after he pledged to protect her and assured her that although a 
                                parasite, he wouldn't leave her for his own well being.
                            </p>
                            <div className='main-img-div'>
                                <img src={Filia} alt="eliza"/>
                            </div>
                        </div>

                        <div className="item">
                            <p>A feline feral, Nadia Fortune is the last surviving member of 
                                the Fishbone Gang, a notorious band of otherwise Dagonian thieves. 
                                Their last mission ended in tragedy: a failed attempt to steal the 
                                mysterious Life Gem from Lorenzo Medici resulted in their brutal murders. 
                                Before meeting her own doom, Ms. Fortune swallowed the Life Gem and 
                                managed to digest it. The Gem’s power immortalized her entire body, 
                                making it truly undying even after being dismembered.
                            </p>
                            <div className='main-img-div'>
                                <img src={Ms_Fortune} alt="Ms_Fortune"/>
                            </div>
                        </div>

                        <div className="item">
                            <p>Valentine lost her eye in the incident that destroyed Lab 7. 
                                The cross in her remaining eye is result from the lab's experimental 
                                drug test, as the team were not only in charge of the tests but test 
                                subjects themselves. The scar on her lips existed prior to the attack.

                                Valentine’s “superhuman” feats can be attributed to her ninja skills, 
                                and she is able to exceed certain human limits due to Lab 7’s 
                                modifications. Her counter animation is most likely an illusion or a 
                                body double.

                                Valentine used to be second-in-command of the Last Hope before 
                                the rest of the group were wiped out; prior to this incident
                                 Christmas was the leader. Valentine got along with the Last Hope 
                                 members, getting along with Hallow the best but also having a small 
                                 rivalry with Christmas.
                            </p>
                            <div className='main-img-div'>
                                <img src={Valentine} alt="Valentine"/>
                            </div>
                        </div>

                        <div className="item">
                            <p>Once a normal schoolgirl named Carol, 
                                Painwheel lived in Maplecrest with her parents. 
                                She was friends with Filia who also attended her 
                                school before she lost her memories and joined with Samson. 
                                In Filia's story mode, it's revealed that Filia 
                                wronged Painwheel in some way, though it is never 
                                specified what exactly she did.
                            </p>
                            <div className='main-img-div'>
                                <img src={Painwheel} alt="Painwheel"/>
                            </div>
                        </div>
                        <div className="item">
                            <p>Few know the terrors of the Skullgirl as intimately as 
                                Parasoul does: seven years ago her own mother became the 
                                Skullgirl that nearly destroyed the world. This tragic 
                                past has made her fiercely protective of both her 
                                country and her family, and these two priorities frequently 
                                come into conflict.

                                Parasoul is now the crown princess of the Canopy Kingdom and 
                                leader of its elite military squad, the Black 
                                Egrets. Wielding the living umbrella, Krieg, 
                                she fights with grace, poise, and cunning to defend her 
                                family honor and destroy the Skull Heart so no one can 
                                repeat her mother’s terrible mistake.
                            </p>
                            <div className='main-img-div'>
                                <img src={Parasoul} alt="Parasoul"/>
                            </div>
                        </div>     

                        <div className="item">
                            <p>Cerebella has had Vice-Versa since birth, most 
                                likely an heirloom passed down by her biological 
                                parents. She was taught how to use the knives that she 
                                keeps in her shoes by Black Dahlia.

                                In her Skullgirls Mobile origin story, "The Main Attraction", 
                                she is selected by Regina as a candidate for her first job for 
                                the Medicis assigned by Black Dahlia, alongside Feng and 
                                Beatrix. She completes the first test, an obstacle course 
                                made by Hubrecht, with ease, but struggles with the second 
                                test where she must open a complicated puzzle box to retrieve a 
                                fragile item for Taliesin. Frustrated with a minute to spare, 
                                she simply breaks open the box, destroying the object. However, 
                                she manages to play it off as if it were intentional with Taliesin 
                                congratulating her for noticing that he never said it she had to 
                                give it to him in one piece.
                            </p>
                            <div className='main-img-div'>
                                <img src={Cerebella} alt="Cerebella"/>
                            </div>
                        </div>     

                        <div className="item">
                            <p>Though her origins are vague, Double is 
                                devoutly loyal to the Trinity, using her 
                                shape-shifting powers to support the Trinity's ominous agenda. 
                                As such, she is an ally of the Skullgirl, and appears 
                                to take steps to ensure the creation of new Skullgirls. 
                                Double is capable of transforming her nightmarish form 
                                into that of any person, but she often takes on the 
                                appearance of a smiling nun. Double can frequently be 
                                found in the Grand Cathedral of the Divine Trinity, 
                                listening to confessions and tending to the catacombs 
                                beneath.
                            </p>
                            <div className='main-img-div'>
                                <img src={Double} alt="Double"/>
                            </div>
                        </div>    

                        <div className="item">
                            <p>Known world-wide for felling the Gigan warrior 
                                Grendel and for his illustrious career in 
                                the ring, Beowulf had secured himself a spot 
                                in the history books as a champion. But a mediocre 
                                acting career after leaving the ring tarnished his legacy. 
                                Now, as the Canopy Kingdom faces a new threat, 
                                Beowulf enters the ring once more, determined to 
                                relive the glory, and in doing so stumbles upon the 
                                truth about his past... Will Beowulf be able to overcome 
                                this new threat to the city and his legacy? Or is this his 
                                final taste of the spotlight?
                            </p>
                            <div className='main-img-div'>
                                <img src={Beowulf} alt="Beowulf"/>
                            </div>
                        </div>  
                    </div>
                          
                </div>
            </section>
            <section id="Trailer">
            
            </section>
        </div>
    )
}

export default Main;
