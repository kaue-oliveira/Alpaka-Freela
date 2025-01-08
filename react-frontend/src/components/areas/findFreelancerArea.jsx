import styles from "../../css/home.module.css" 

import globeEmoji from "../../img/globe-showing-europe-africa_1f30d.png"
import boxEmoji from "../../img/package_1f4e6.png"
import manTechEmoji from "../../img/man-technologist-medium-dark-skin-tone_1f468-1f3fe-200d-1f4bb.png"
import briefCaseEmoji from "../../img/briefcase_1f4bc.png"
import globeEmoji from "../../img/globe-showing-europe-africa_1f30d.png"
import hammerEmoji from "../../img/hammer-and-wrench_1f6e0-fe0f.png"
import pushpinEmoji from "../../img/pushpin_1f4cc.png"
import laptopEmoji from "../../img/laptop_1f4bb.png"
import rocketEmoji from "../../img/rocket_1f680.png"
import dragonEmoji from "../../img/dragon_1f409.png"
import PostHeader from "../fixed/headerPost"
import FreelancerProfile from "../cards/freelancerCard"

import ServiceForm from "../forms/serviceForm"

export default function FindFreelancerArea() {
    return (
        <div className={styles["middle-space"]}>
            <PostHeader 
                title="Encontrar um Freelancer" 
                buttonTitle="Cadastrar oferta de serviço"
                icon={manTechEmoji}
                form={<ServiceForm />}
            />
            <div className={styles["cards"]}>
                <FreelancerProfile/>
                <FreelancerProfile/>
                <FreelancerProfile/>
                <FreelancerProfile/>
                <FreelancerProfile/>
                <FreelancerProfile/>
                <FreelancerProfile/>
            </div>
        </div>
    )
}
