export default function History() {
    let history = [{
        time: "1932",
        title: "Birth of an Airforce",
        description: "The Indian Air Force's History precedes World War Two by eight years. The IAF was established on 8 Oct 1932 when its formation was announced in the Gazette of India. No.1 Squadron formed at Drigh Road in Karachi on 1 April 1933 with a complement of six Indian Officers under the command of a British Officer. The pages in this section showcase the initial years of the existence of the IAF.",
        image: "/images/0.jpeg"
    }, {
        time: "1939-1945",
        title: "During World War II",
        description: "The IAF played an instrumental role in halting the advance of the Japanese army in Burma, where the first IAF air strike was executed. The target for this first mission was the Japanese military base in Arakan, after which IAF strike missions continued against the Japanese airbases at Mae Hong Son, Chiang Mai and Chiang Rai in northern Thailand.",
        image: "/images/1.jpg"
    }, {
        time: "1947-1950",
        title: "First years of independence",
        description: "Along the lines of the geographical partition during independence, the assets of the air force were divided between the new countries. India's air force retained the name of the Royal Indian Air Force, but three of the ten operational squadrons and facilities, located within the borders of Pakistan, were transferred to the Royal Pakistan Air Force. The RIAF Roundel was changed to an interim 'Chakra' roundel derived from the Ashoka Chakra.",
        image: "/images/2.jpg"
    }, {
        time: "1961",
        title: "Annexation of Goa",
        description: "In late 1961, the Indian government decided to attack the Portuguese colony of Goa after years of disagreement between New Delhi and Lisbon. The Indian Air Force was requested to provide support elements to the ground force in what was called Operation Vijay. Ouragans (called Toofanis in the IAF) bombed the runways at Diu and destroyed the control tower, wireless station and the meteorological station. After the Portuguese surrendered the former colony was integrated into India.",
        image: "/images/3.jpg"
    }, {
        time: "1962",
        title: "Indo-China War",
        description: "In 1962, border disagreements between China and India escalated to a war when China mobilised its troops across the Indian border. During the Sino-Indian War, India's military planners failed to deploy and effectively use the IAF against the invading Chinese forces. This resulted in India losing a significant amount of advantage to the Chinese; especially in Jammu and Kashmir.",
        image: "/images/4.jpg"
    }, {
        time: "1965",
        title: "Kashmir War",
        description: 'In 1965, Pakistan launched Operation Gibraltar to start a rebellion against Indian rule.  This was the first time the IAF actively engaged an enemy air force. During the course of the conflict, the PAF enjoyed technological superiority. The small and nimble IAF Folland Gnats proved effective against the F-86 Sabres of the PAF earning it the nickname "Sabre Slayers". By the time the conflict had ended, the IAF lost 60–70 aircraft, while the PAF lost 43 aircraft.',
        image: "/images/5.jpg"
    }, {
        time: "1971",
        title: "Bangladesh Liberation",
        description: "By late 1971, the intensification of the independence movement in erstwhile East Pakistan lead to the Bangladesh Liberation War. On 3 December, India formally declared war against Pakistan. IAF had flown over 16,000 sorties on both East and West fronts; including sorties by transport aircraft and helicopters.45 IAF Aircraft were lost while, Pakistan lost 75 aircraft. This was major defeat for Pakistan. Towards the end of the war, IAF's transport planes dropped leaflets over Dhaka urging the Pakistani forces to surrender.",
        image: "/images/6.jpg"
    }, {
        time: "2018",
        title: "Balakot Air Strikes",
        description: "In the wake of the 2019 Pulwama attack carried out by Jaish-e-Mohammed a group of twelve Mirage 2000 fighter planes from the Indian Air Force carried out air strikes on JeM bases in Chakothi and Muzaffarabad in the Pakistan-Administered region of Gilgit Baltistan. Jets crossed into Pakistan to strike a JeM training camp in Balakot and destroyed it completely.",
        image: "/images/7.jpg"
    }];

    return (
        <div>
        {
            history.map((item, index) => {
                return (
                    <div style={{
                        width: "100vw",
                        height: "80vh",
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }} className="relative">
                        <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                        <div className={`absolute top-0 right-0 flex flex-col justify-center p-5`} style={{width: "400px", height: "100%", backgroundColor: "rgba(0,0,0,0.5)", overflow: "auto"}}>
                            <div className="text-yellow-400 italic text-xl md:text-2xl pl-5">{item.time}</div>
                            <div className="bold text-xl md:text-2xl text-white p-5">{item.title}</div>
                            <div className="text-gray-300 text-xs md:text-sm p-5"> 
                                {item.description}
                            </div>
                        </div>
                        </div>
                    </div>)
            })
        }
        </div>
    )
}